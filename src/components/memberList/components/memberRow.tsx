import * as React from 'react';
import { MemberEntity } from '../../../model/member';
import { TableRow, TableCell, Avatar } from '@material-ui/core';
import { LinkButtonComponent } from '../../button/linkButton';

interface Props {
  member: MemberEntity;
}

export const MemberRowComponent = (props: Props) => {
  return (
    <TableRow>
      <TableCell>
        <Avatar src={props.member.avatar_url} />
      </TableCell>
      <TableCell>{props.member.id}</TableCell>
      <TableCell>{props.member.login}</TableCell>
      <TableCell>
        <LinkButtonComponent link={`/${props.member.login}`}>
          Details
        </LinkButtonComponent>
      </TableCell>
    </TableRow>
  );
};
