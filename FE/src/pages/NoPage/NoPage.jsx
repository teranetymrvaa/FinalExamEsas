import React from "react";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <>
      <div style={{ textAlign: "center", fontSize: "40px" }}>
        404 Not Found
        <button>
          <Link to={"/"}>Go Home</Link>
        </button>
      </div>
    </>
  );
}

export default NoPage;
