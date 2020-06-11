import React from "react"
import { Router } from "@reach/router"

import HomePage from "../modules/home/components/HomePage"
// import DetailsPage from "../components/DetailsPage"
// import LostPage from "../components/LostPage"

const App = () => {
  return (
    <Router basepath="/">
      <HomePage path="/" />
      {/* <DetailsPage path="/details" />
        <LostPage path="*" /> */}
    </Router>
  )
}
export default App
