import { Route, Routes } from 'react-router-dom'
import { DefautLayout } from './layouts/DefautLayouts/index'
import { History } from './pages/History'
import { Home } from './pages/Home'


export function Router() {
  return (

    <Routes>
        <Route path='/' element={<DefautLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
        </Route>

    </Routes>
  )
}
