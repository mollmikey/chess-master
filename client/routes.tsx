import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Board from './components/Board'
import Practice from './components/Practice'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Board />} />
    <Route path="practice" element={<Practice />} />
  </Route>,
)

export const router = createBrowserRouter(routes)
