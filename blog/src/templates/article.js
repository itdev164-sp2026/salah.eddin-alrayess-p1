import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"

export default function Article({ data }) {
  const article = data.contentfulArticle

  return (
    <div style={{ fontFamily: "Arial" }}>
      <Header />

      <main
        style={{
          padding: "40px",
          maxWidth: "800px",
          margin: "auto"
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>
          {article.title}
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "20px",
            fontSize: "14px"
          }}
        >
          Category: {article.category}
        </p>

        {article.heroImage && (
          <img
            src={article.heroImage.file.url}
            alt={article.title}
            style={{
              width: "100%",
              maxHeight: "420px",
              objectFit: "cover",
              marginBottom: "30px",
              borderRadius: "6px"
            }}
          />
        )}

        <article
          style={{
            lineHeight: "1.8",
            fontSize: "18px",
            color: "#333"
          }}
        >
          {article.body.body}
        </article>
      </main>
    </div>
  )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      title
      category
      body {
        body
      }
      heroImage {
        file {
          url
        }
      }
    }
  }
`