import React from "react"
import { Provider } from "react-redux"
import { ApolloProvider } from "@apollo/react-hooks"

import { client } from "./client"

import store from "../store"

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <Provider store={store}>{element}</Provider>
  </ApolloProvider>
)
