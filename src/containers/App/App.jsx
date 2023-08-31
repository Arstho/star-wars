import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PeoplePage from '@containers/PeoplePage/PeoplePage'
import HomePage from '../HomePage/HomePage'
import styles from './App.module.css'

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/people' element={<PeoplePage />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App

