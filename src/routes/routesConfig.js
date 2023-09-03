import HomePage from '@containers/HomePage/HomePage'
import PeoplePage from '@containers/PeoplePage/PeoplePage'
import NotFoundPage from '@containers/NotFoundPage/NotFoundPage'
import PersonPage from '../containers/PersonPage/PersonPage'

const routesConfig = [
   {
      path: '/',
      element: <HomePage />
   },
   {
      path: '/people',
      element: <PeoplePage />
   },
   {
      path: '/people/:id',
      element: <PersonPage />
   },
   {
      path: '/not-found',
      element: <NotFoundPage />
   },
   {
      path: '*',
      element: <NotFoundPage />
   }
]

export default routesConfig