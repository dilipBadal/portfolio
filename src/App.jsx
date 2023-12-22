import { useState } from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

import Homepage from "./components/homepage/homepage";

function App() {
  return (
    <Box>
      <Homepage />
    </Box>
  );
}

export default App;
