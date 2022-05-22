import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          This is my collection of Books which I read
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          And
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          I have on Wishlist
        </Typography>
      </Box>
    </div>
  );
};

export default About;