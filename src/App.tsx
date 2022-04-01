import Cardmui from "./components/organisms/Cardmui";
// @ts-ignore: Unreachable code error
import book1 from "./assets/book1.png";
// @ts-ignore: Unreachable code error
import book2 from "./assets/book2.png";
// @ts-ignore: Unreachable code error
import book3 from "./assets/book3.png";
// @ts-ignore: Unreachable code error
import book4 from "./assets/book4.png";
// @ts-ignore: Unreachable code error
import book5 from "./assets/book5.png";
// @ts-ignore: Unreachable code error
import book6 from "./assets/book6.png";
// @ts-ignore: Unreachable code error
import book7 from "./assets/book7.png";
// @ts-ignore: Unreachable code error
import book8 from "./assets/book8.png";
// @ts-ignore: Unreachable code error
import book9 from ".assets/book9.png";

// type objectArray = Array<Object>;

function App() {
  const details = [
    { image: book1, Book: "Doesn’t Hurt to Ask", Author: "Trey Gowdy" },
    {
      image: book2,
      Book: "Beyond Entrepreneurship 2.0",
      Author: "Jim Collins & Bill Lazier",
    },
    { image: book3, Book: "Bring Your Human to Work", Author: "Erica Keswin" },
    { image: book4, Book: "The Fate of Food", Author: "Amanda Little" },
    {
      image: book5,
      Book: "Lives of the Stoics",
      Author: "Ryan Holiday, Stephen Hansel",
    },
    { image: book6, Book: "Loving Your Business", Author: "Debbie King" },
    { image: book7, Book: "The Lonely Century", Author: "Noreena Hertz" },
    {
      image: book8,
      Book: "Eat Better, Feel Better",
      Author: "Giada De Laurentiis",
    },
    { image: book9, Book: "Dropshipping", Author: "James Moore" },
  ];
  return (
    <div className="App">
      <Cardmui details={details} />
    </div>
  );
}

export default App;
