import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header style={{ padding: "20px", borderBottom: "1px solid #eee" }}>
      <Link to="/" style={{ textDecoration: "none", fontWeight: "bold", fontSize: "20px" }}>
        Study Tips
      </Link>
    </header>
  )
}