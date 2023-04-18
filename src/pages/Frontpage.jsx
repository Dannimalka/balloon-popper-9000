import Link from "next/link";
import React from "react";

const Frontpage = () => {
  return (
    <div className="Level_container">
      <h1 className="text frontpage">Balloon Popper 9000</h1>
      <Link href="/game">
        <p className="counter new_game">Begin</p>
      </Link>
    </div>
  );
};

export default Frontpage;
