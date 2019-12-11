import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withToastProvider } from './Toast';
import Child from './Child';
import './index.css';
function App() {
  return (
    <div>
      <Child />
      <p>
        Hello from App component.
      </p>
    </div>
  );
}
const AppWithToastProvider = withToastProvider(App);
export default AppWithToastProvider;
