import { Fragment } from "react"
import { Route } from "react-router"
import Home from "./views/Home"

const ApplicationRoutes = () => {
  return (
    <Fragment>
      <Route exact path="/" component={Home}></Route>

    </Fragment>
  )
}

export default ApplicationRoutes