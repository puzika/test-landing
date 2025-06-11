import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { GlobalStyles } from './global.styles.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
