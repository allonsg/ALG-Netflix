import { useSelector } from "react-redux";
import { Paper, Box, LinearProgress, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const GlobalLoading = () => {
  const { globalLodaing } = useSelector((state) => state.globalLoading);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (globalLodaing) {
      setIsLoading(true);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [globalLodaing]);

  return (
    <>
      <Paper
        sx={{
          opacity: isLoading ? 1 : 0,
          pointerEvents: "none",
          transition: "all 0.3s ease",
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
        }}
      >
        <Toolbar />
        <LinearProgress />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Logo />
        </Box>
      </Paper>
    </>
  );
};

export default GlobalLoading;