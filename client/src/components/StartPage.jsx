import React from 'react'
import {Link} from "react-router-dom"

export default function StartPage() {
  return (
    <Link className="btn btn-primary px-5 py-5" to="/notes" role="button">to Notes</Link>
  )
}
