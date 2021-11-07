import { Fragment } from 'react';
import ApplicationRoutes from './ApplicationRoutes';
import Header from './components/Header'
function App() {
  return (
    <Fragment>
      <Header/>
      <ApplicationRoutes/>
    </Fragment>

  )
}

export default App;
