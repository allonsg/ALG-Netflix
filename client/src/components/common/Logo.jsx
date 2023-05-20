import { Typography, useTheme } from "@mui/material";
import { memo } from "react";

const Logo = () => {
  const theme = useTheme();

  return (
    <>
      <Typography fontWeight="700" fontSize="1.7rem">
        ALG
        <span style={{ color: theme.palette.primary.main }}>_NETFLIX</span>
      </Typography>
    </>
  );
};

export default memo(Logo);
