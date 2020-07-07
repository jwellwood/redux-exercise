import * as React from 'react';
import { MemberEntity } from '../../model/member';
import {
  Button,
  Typography,
  TextField,
  Container,
  Grid,
  Paper,
} from '@material-ui/core';
import { MemberTableComponent } from './components/memberTable';
import { PaginationContainer } from '../pagination/paginationContainer';

interface Props {
  members: Array<MemberEntity>;
  loadMembers: (n) => any;
  orgName: string;
  onChange: (name: string) => void;
  // Pagination
  currentPage: number;
  membersPerPage: number;
}

export const MemberAreaComponent = (props: Props) => {
  const {
    members,
    loadMembers,
    orgName,
    onChange,
    // Pagination
    currentPage,
    membersPerPage,
  } = props;
  // Events
  const updateOrgName = (e) => onChange(e.target.value);
  const fetchMembers = () => loadMembers(orgName);
  // Pagination
  const indexOfLastMember: number = currentPage * membersPerPage;
  const indexOfFirstMember: number = indexOfLastMember - membersPerPage;
  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

  return (
    <Container maxWidth='md'>
      <Typography variant='h2'>Members Page</Typography>
      <Grid container justify='space-between' alignItems='center'>
        <Grid item>
          <Paper style={{ margin: '20px auto', padding: '10px' }}>
            <TextField
              type='text'
              placeholder='Search...'
              onChange={updateOrgName}
            />
            <Button
              color='secondary'
              variant='contained'
              onClick={fetchMembers}
            >
              Load
            </Button>
          </Paper>
        </Grid>
        <Grid item>
          <PaginationContainer />
        </Grid>
      </Grid>
      <MemberTableComponent members={currentMembers} />
      {!members.length && (
        <Typography color='error'>No members found</Typography>
      )}
    </Container>
  );
};
