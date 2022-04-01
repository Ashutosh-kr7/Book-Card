import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    subtitle1: {
      fontWeight: 700,
      color: "#03314B",
      fontSize: 18,
    },
  },
});

interface book {
  bookName: string;
}

const BookTitle = (props: book) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant="subtitle1"
        sx={{
          marginLeft: "16px",
          marginTop: "23px",
        }}
      >
        {props.bookName}
      </Typography>
    </ThemeProvider>
  );
};

export default BookTitle;
