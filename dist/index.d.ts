import firebase from 'firebase/app';
import 'firebase/firestore';
declare type Query = firebase.firestore.Query;
declare type QuerySnapshot = firebase.firestore.QuerySnapshot;
declare type IUseFirestorePagination = [
    items: QuerySnapshot | undefined,
    next: () => void,
    previous: () => void,
    setLimit: (newLimit: number) => void,
    isLoading: boolean,
    page: number,
    size: number
];
declare const useFirestorePagination: (query: Query, initialLimit?: number) => IUseFirestorePagination;
export default useFirestorePagination;
