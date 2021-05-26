import * as React from "react"
import { Link } from "gatsby"

export default function NotFoundPage() {
  return (
    <main>
      <title>Not found</title>
      <h1>Nie odnaleziono strony</h1>
      <p>
        Przykro nam{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        zarządana strona nie istnieje.
        <br />
        <br />
        <Link to="/">Wróć do strony głównej.</Link>.
      </p>
    </main>
  )
}
