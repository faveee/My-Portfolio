import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <div>
        <h1>404</h1>
        <h4>looks like you're lost </h4>
        <p>This page is missing or you assembled the link incorrectly!</p>
        <Link to='/' classname="btn">
        Go to home

        </Link>
      </div>
    </div>
  )
}
 export default NotFound