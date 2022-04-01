import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Timer from "../atoms/Timer/Timer";

const theme = createTheme({
  typography: {
    caption: {
      // fontFamily:'Cera Pro',
      fontWeight: 400,
      color: "#6D787E",
      fontSize: 14,
    },
  },
});

const ReadTime = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant="caption"
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "17.67px 0px 0px 17.67px",
        }}
      >
        <Timer />
        13-minute read
      </Typography>
    </ThemeProvider>
  );
};

export default ReadTime;
