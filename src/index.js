import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
      <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
              // Define default options
              className: '',
              duration: 5000,
              limit: 2,
              style: {
                  background: 'rgb(10, 15, 26)',
                  color: '#fff',
              },

              // Default options for specific types
              success: {
                  duration: 3000,
                  theme: {
                      primary: 'green',
                      secondary: 'black',
                  },
              },
          }}
      />
  </React.StrictMode>
);
