# use-firestore-pagination

React hook that can ease firestore pagination with loading status and set limit function on its return statement.

## How to use

```
import {
  DataGrid,
  GridColumns,
  GridPageChangeParams,
  GridRowParams,
} from "@material-ui/data-grid";
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
    firebase.firestore().collection("users").orderBy("uid"),
    limits[0]
  );

  return (
    <div>
      <DataGrid
        columns={columns}
        rows={
          users?.docs.map((doc) => ({
            id: doc.id,
            nama: doc.data().nama,
            email: doc.data().email || "-",
          })) || []
        }
        rowCount={size}
        paginationMode="server"
        pageSize={limits[0]}
        rowsPerPageOptions={limits}
        onPageChange={handlePageChange}
        autoHeight
        onRowClick={handleUserDetail}
        loading={isLoading}
        onPageSizeChange={handlePageSizeChange}
        page={page}
      />
    </div>
  );
}

```
