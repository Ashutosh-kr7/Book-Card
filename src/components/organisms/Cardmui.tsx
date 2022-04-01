import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import More from "../atoms/More/More";
import Typography from "@mui/material/Typography";
import BookTitle from "../atoms/BookTitle/BookTitle";
import Author from "../atoms/Author/Author";
import ReadTime from "../molecules/ReadTime";
import { Grid } from "@mui/material";

interface mui {
  details: {
    image: string;
    Book: string;
    Author: string;
  }[];
}

const Cardmui = (props: mui) => {
  const cards = props.details.map((e) => (
    <Grid item>
      <Card sx={{ width: 284, maxHeight: 481, borderRadius: "8px" }}>
        <CardMedia
          component="img"
          width="294.1"
          height="292"
          image={e.image}
          alt="Book"
        />
        <BookTitle bookName={e.Book} />
        <Author authorName={e.Author} />
        <ReadTime />
        <More />
        <Typography
          sx={{
            width: "283px",
            height: "15px",
            borderRadius: "0px 0px 8px 8px",
            background: " #F1F6F4",
            border: "1px solid #E1ECFC",
          }}
        />
      </Card>
    </Grid>
  ));

  return (
    <Grid container columnSpacing={5} rowSpacing={5}>
      {cards}
    </Grid>
  );
};

export default Cardmui;
