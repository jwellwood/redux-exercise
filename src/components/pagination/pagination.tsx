import * as React from 'react';
import { Button, Select, MenuItem, Grid, Paper } from '@material-ui/core';

interface Props {
  totalMembers: number;
  membersPerPage: number;
  currentPage: number;
  changePage: (p) => void;
  changeMembersPerPage: (p) => typeof p;
}

export const PaginationComponent: React.FC<Props> = ({
  totalMembers,
  membersPerPage,
  currentPage,
  changePage,
  changeMembersPerPage,
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalMembers / membersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Grid
      container
      direction='row'
      justify='space-between'
      alignItems='flex-end'
    >
      <Grid item>
        {pageNumbers.map((page) => (
          <Button
            color='secondary'
            variant={page === currentPage ? 'contained' : 'text'}
            key={page}
            onClick={() => changePage(page)}
          >
            {page}
          </Button>
        ))}
      </Grid>
      <Grid item style={{ textAlign: 'right' }}>
        <Paper style={{ padding: '3px', marginLeft: '5px' }}>
          <Select
            fullWidth
            value={membersPerPage}
            onChange={(e) => changeMembersPerPage(e.target.value)}
          >
            <MenuItem disabled>Per page</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>
        </Paper>
      </Grid>
    </Grid>
  );
};
