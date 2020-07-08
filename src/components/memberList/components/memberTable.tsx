import * as React from 'react';
import { MemberEntity } from '../../../model/member';
import { MemberRowComponent } from './memberRow';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@material-ui/core';

interface Props {
  members: MemberEntity[];
}

export const MemberTableComponent = (props: Props) => {
  const { members } = props;
  const tableHeaders = ['Avatar', 'Id', 'Name', 'Details'];
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {tableHeaders.map((item) => (
              <TableCell
                style={{ fontWeight: 'bold', color: '#fff' }}
                key={item}
              >
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {members.map((member: MemberEntity) => (
            <MemberRowComponent key={member.id} member={member} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
