import React from "react";
import { Link } from "react-router-dom";
import Error from "../../src/assets/Error.jpeg";

function NotFound() {
  return (
    <div className="flex justify-between">
      <div>
      <img src={Error} alt="404Img"/>
      </div>
      <div className="px-5">
        <h1 className="text-9xl">404</h1>
        <h4 className="text-lg">looks like you're lost </h4>
        <p>This page is missing or you assembled the link incorrectly!</p>
        <br/>
        <br />
        <button className="border">
        <Link to='/' classname="btn">
        Go to home
        </Link>
        </button>
      </div>
    </div>
  )
}
 export default NotFound