import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';

import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App'
import store from './store/store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
          <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
