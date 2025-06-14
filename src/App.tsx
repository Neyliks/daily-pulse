import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Today from './pages/Today'
import Layout from './components/Layout'
import History from './pages/History'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/today" element={<Today />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
export default App