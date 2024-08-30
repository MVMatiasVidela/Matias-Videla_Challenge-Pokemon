import React from "react";
import { Grid, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import { IBattleResult } from "../../types";

interface BattleResultProps {
  battleResult: IBattleResult;
}

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const BattleResult: React.FC<BattleResultProps> = ({ battleResult }) => {
  return (
    <Grid
      item
      bgcolor="#FFD700"
      border="4px solid #045DA0"
      color="black"
      width="100%"
      height="40px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      borderRadius={2}
      sx={{
        animation: `${slideUp} 0.5s ease-in-out`,
      }}
    >
      <Typography variant="h5" paddingX={2}>
        ¡{battleResult.winnerName} wins!
      </Typography>
    </Grid>
  );
};

export default BattleResult;
