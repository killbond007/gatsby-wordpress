import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpress {
          pages {
            edges {
              node {
                title
                slug
              }
            }
          }
          categories {
            edges {
              node {
                slug
                name
                uri
              }
            }
          }
        }
      }
    `}
    render={data => (
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-start">
            {data.wordpress.pages.edges.map((edge, key) => (
              <span key={key}>
                <Link
                  className="navbar-item"
                  to={edge.node.slug}
                  key={edge.node.slug}
                >
                  {edge.node.title}
                </Link>
                {key !== data.wordpress.pages.edges.length - 1 && "  /  "}
              </span>
            ))}
          </div>
          <div className="navbar-start">
            {data.wordpress.categories.edges.map((edge, key) => (
              <span key={key}>
                <Link
                  className="navbar-item"
                  to={edge.node.uri}
                  key={edge.node.slug}
                >
                  {edge.node.name}
                </Link>
                {key !== data.wordpress.categories.edges.length - 1 && "  /  "}
              </span>
            ))}
          </div>
        </div>
      </nav>
    )}
  />
)

export default Navbar
