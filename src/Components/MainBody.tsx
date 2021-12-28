import React from "react";
import { Box, Image, Grid, Paragraph } from "grommet";
import { TreeOption } from "grommet-icons";

const MainBody = () => (
  <Box direction="row" align="between" justify="around" margin="none" flex>
    <Box
      alignSelf="center"
      flex
      pad={{ top: "small", bottom: "xlarge" }}
      margin={{ horizontal: "xlarge", vertical: "none" }}
    >
      <Image height="80%" src="/assets/HX2.svg" />
    </Box>
    <Box alignSelf="center" align="end" flex>
      <img
        style={{
          height: "calc(100vh - 48px)",
          filter: "drop-shadow(4px 4px 3px rgba(0,0,0,0.4)) ",
        }}
        src="/assets/HX1.svg"
      />
    </Box>
  </Box>
);

export default MainBody;