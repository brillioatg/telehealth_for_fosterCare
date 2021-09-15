import React from "react";
// @material-ui/core components
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
// @material-ui/icons components
import Archive from "@material-ui/icons/Archive";
import Grain from "@material-ui/icons/Grain";
// core components

function Example() {
  return (
    <>
      <Button color="primary" variant="contained">
        Button
      </Button>
      <br />
      <br />
      <Button color="primary" variant="contained">
        <Box
          component={Archive}
          marginRight=".75em"
          top="2px"
          position="relative"
        />
        With Icons
      </Button>
      <br />
      <br />
      <Button color="primary" variant="contained">
        <Box
          component={Grain}
          top="2px"
          position="relative"
        />
      </Button>
    </>
  );
}

export default Example;