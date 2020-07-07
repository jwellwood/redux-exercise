import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container, Card } from '@material-ui/core';
import { MemberEntity } from '../../model/member';
import { LinkButtonComponent } from '../button/linkButton';

interface Props {
  loadUser: (id) => void;
  user: MemberEntity;
}

export const IndividualUserAreaComponent = (props: Props) => {
  const { user, loadUser } = props;
  const { id } = useParams();
  React.useEffect(() => {
    loadUser(id);
  }, [id]);

  return user ? (
    <Container maxWidth='xs'>
      <LinkButtonComponent link='/'>Back</LinkButtonComponent>
      <Card variant='elevation' style={{ padding: '4px' }}>
        <Typography variant='h3'>{user.login}</Typography>
        <img src={user.avatar_url} alt='user' style={{ width: '100%' }} />
        <Typography>id: {user.id}</Typography>
      </Card>
    </Container>
  ) : null;
};
