import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    body1: {
      // fontFamily:'Cera Pro',
      fontWeight: 500,
      color: "#6D787E",
      fontSize: 16,
    },
  },
});
interface aoo {
  authorName: string;
}
const Author = (props: aoo) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant="body1"
        sx={{
          margin: "16px 0px 0px 16px",
        }}
      >
        {props.authorName}
      </Typography>
    </ThemeProvider>
  );
};

export default Author;
