import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, CSSReset} from '@chakra-ui/react';
import App from './App';

ReactDOM.render(
  <ChakraProvider>
    <CSSReset />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);