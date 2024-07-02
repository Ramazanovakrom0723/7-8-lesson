// import React from 'react'

// const Index = () => {
//   return (
//     <div>Orders</div>
//   )
// }

// export default Index

import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Button, IconButton, InputBase, Paper } from '@mui/material';
import { GridSearchIcon } from '@mui/x-data-grid';

export default function Variants() {
  return (
    <>
     <div className="py-3 flex justify-between items-center">
        <div className="w-96">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Qidiruv"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <GridSearchIcon />
            </IconButton>
          </Paper>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setModal(true)}
        >
          buyurtma qo'shish
        </Button>
      </div>
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width={1250} height={40} />
      <Skeleton variant="rounded" flex width={1250} height={40} />
      <Skeleton variant="rounded" width={1250} height={40} />
      <Skeleton variant="rounded" width={1250} height={40} />
      <Skeleton variant="rounded" width={1250} height={40} />
      <Skeleton variant="rounded" width={1250} height={40} />
      <Skeleton variant="rounded" width={1250} height={40} />
      <Skeleton variant="rounded" width={1250} height={40} />
      <Skeleton variant="rounded" width={1250} height={40} />
    </Stack>
    </>
  );
}
