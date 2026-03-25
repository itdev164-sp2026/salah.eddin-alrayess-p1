import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"

export default function Home({ data }) {
  const articles = data.allContentfulArticle.nodes

  return (
    <div style={{ fontFamily: "Arial", maxWidth: "1100px", margin: "auto" }}>
      <Header />

      <main style={{ padding: "40px" }}>
        <h1 style={{ marginBottom: "10px" }}>Study Tips</h1>

        <p style={{ marginBottom: "40px", color: "#555" }}>
          This website shows study articles.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px"
          }}
        >
          {articles.map(article => (
            <Link
              key={article.slug}
              to={`/articles/${article.slug}`}
              style={{
                textDecoration: "none",
                color: "inherit"
              }}
            >
              <article
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  overflow: "hidden",
                  background: "white",
                  transition: "transform 0.15s ease, box-shadow 0.15s ease"
                }}
              >
                {article.heroImage && (
                  <img
                    src={article.heroImage.file.url}
                    alt={article.title}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover"
                    }}
                  />
                )}

                <div style={{ padding: "20px" }}>
                  <h2 style={{ marginBottom: "10px", fontSize: "20px" }}>
                    {article.title}
                  </h2>

                  <p style={{ color: "#777", fontSize: "14px" }}>
                    {article.category}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

export const query = graphql`
  query {
    allContentfulArticle {
      nodes {
        title
        category
        slug
        heroImage {
          file {
            url
          }
        }
      }
    }
  }
`

