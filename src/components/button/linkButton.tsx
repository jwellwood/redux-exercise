import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography, Button } from '@material-ui/core';

interface Props {
  link: string;
  children: string;
}

export const LinkButtonComponent: React.FC<Props> = ({ link, children }) => {
  return (
    <Link component={RouterLink} to={link}>
      <Button variant='contained' color='secondary'>
        <Typography>{children}</Typography>
      </Button>
    </Link>
  );
};
