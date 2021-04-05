# use-firestore-pagination

React hook that can ease firestore pagination with loading status and set limit function on its return statement.

## How to use

```
 import useFirestorePagination from '@rizal/use-firestore-pagination';

export default function UserTable() {
  const [
    users,
    next,
    previous,
    setLimit,
    isLoading,
    page,
    size,
  ] = useFirestorePagination(
    firebase.firestore().collection('users').orderBy('uid'),
    10,
  );

  return (
    <Table
      data={users}
      next={next}
      previous={previous}
      setLimit={setLimit}
      loading={isLoading}
      page={page}
      rowsCount={size}
    />
  );
}

```
