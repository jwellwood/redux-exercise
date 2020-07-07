import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import green from '@material-ui/core/colors/green';
import blueGrey from '@material-ui/core/colors/blueGrey';
import amber from '@material-ui/core/colors/amber';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[300],
    },
    secondary: {
      main: amber[500],
    },
    background: {
      default: blueGrey[700],
      paper: blueGrey[900],
    },
    text: {
      primary: cyan[300],
      secondary: '#fff',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
  },
  overrides: {
    MuiAvatar: {
      root: {
        width: 100,
        height: 100,
      },
    },
  },
});
