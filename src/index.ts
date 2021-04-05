import firebase from 'firebase/app';
import 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';

type Query = firebase.firestore.Query;
type DocumentData = firebase.firestore.DocumentData;
type QuerySnapshot = firebase.firestore.QuerySnapshot;
type IUseFirestorePagination = [
  items: QuerySnapshot | undefined,
  next: () => void,
  previous: () => void,
  setLimit: (newLimit: number) => void,
  isLoading: boolean,
  page: number,
  size: number,
];

const useFirestorePagination = (
  query: Query,
  initialLimit: number = 10,
): IUseFirestorePagination => {
  const [currentLimit, setCurrentLimit] = useState(initialLimit);
  const [firstDoc, setFirstDoc] = useState<DocumentData>();
  const [lastDoc, setLastDoc] = useState<DocumentData>();
  const [currentQuery, setCurrentQuery] = useState<Query>(query.limit(initialLimit));

  const [size, setSize] = useState(0);
  const [items, setItems] = useState<QuerySnapshot>();
  const [page, setPage] = useState(0);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    query.get().then((snapshot) => setSize(snapshot.size));
  }, []);

  useEffect(() => {
    setLoading(true);
    currentQuery.get().then((snapshot) => {
      setLoading(false);
      setItems(snapshot);
      setFirstDoc(snapshot.docs[0]);
      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
    });
  }, [currentQuery]);

  const next = useCallback(() => {
    setPage((page) => page + 1);
    setCurrentQuery(query.startAfter(lastDoc).limit(currentLimit));
  }, []);
  const previous = useCallback(() => {
    setPage((page) => page - 1);
    setCurrentQuery(query.endBefore(firstDoc).limitToLast(currentLimit));
  }, []);
  const setLimit = useCallback((newLimit: number) => {
    setPage(0);
    setCurrentLimit(newLimit);
    setCurrentQuery(query.limit(newLimit));
  }, []);

  return [items, next, previous, setLimit, isLoading, page, size];
};

export default useFirestorePagination;
