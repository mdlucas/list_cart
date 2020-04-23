import 'react-native';
import React from 'react';
import * as renderer from "react-test-renderer";
import App from '../src/App';
// import reducer, { initialState, signIn, selectToken, selectName, selectIsAuthenticated } from './authSlice';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  const tree = renderer.create(<App />);
  expect(tree).toMatchSnapshot();
});

