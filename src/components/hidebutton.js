import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

function Hidebtn() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Sidenote
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Sidenote: I will trying with basics such as pagination, grid,
          deploying on multiple hosts, the cool libraries will come last.
          Fundamentals are my first priority
        </div>
      </Collapse>
    </>
  );
}

export default Hidebtn;
