import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import routesConfig from '@routes/routesConfig'
import styles from './App.module.css'

const App = () => {
   return (
      <BrowserRouter>
         <NavLink to='/' exact>Home</NavLink>
         <NavLink to='/people' exact>People</NavLink>
         <Routes>
            {routesConfig.map(route => (
               <Route key={route.path} path={route.path} element={route.element} />
            ))}
         </Routes>
      </BrowserRouter>
   )
}

export default App

