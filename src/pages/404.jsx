import * as React from "react"
import { Link } from "gatsby"
import { Page } from "../components/page"

export default function NotFoundPage() {
  return (
    <Page>
      <title>Not found</title>
      <h1>Nie odnaleziono strony</h1>
      <p>
        Przykro nam{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        żądana strona nie istnieje.
        <br />
        <br />
        <Link to="/">Wróć do strony głównej.</Link>.
      </p>
    </Page>
  )
}
