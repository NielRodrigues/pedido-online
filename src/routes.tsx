import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import { Burgers } from './pages/Main/Bugers'
import { Combos } from './pages/Main/Combos'
import { Vegetarians } from './pages/Main/Vegeterians'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<Burgers />} />
        <Route path='/combos' element={<Combos />} />
        <Route path='/vegetarians' element={<Vegetarians />} />
      </Route>
    </Routes>
  )
}
