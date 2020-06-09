import React from "react"
import { Router } from "@reach/router"

import HomePage from "../components/HomePage"
// import DetailsPage from "../components/DetailsPage"
// import LostPage from "../components/LostPage"

const App = () => {
  return (
    <Router basepath="/app">
      <HomePage path="/" />
      {/* <DetailsPage path="/details" />
        <LostPage path="*" /> */}
    </Router>
  )
}
export default App
