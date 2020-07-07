import * as React from 'react';
import { SpinnerComponent } from './components/spinner/Spinner';
import { AppRouter } from './router';

export const App = () => {
  return (
    <>
      <AppRouter />
      <SpinnerComponent />
    </>
  );
};
