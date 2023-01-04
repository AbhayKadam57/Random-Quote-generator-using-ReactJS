import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Quote from "./components/Quote";
import { useEffect } from "react";
import { getQuote } from "./components/data";

function App() {
  const [tags, setTags] = useState(["Business", "Funny", "Humor"]);

  const [tag, setTag] = useState("Humor");

  const [quote, setQuote] = useState("");

  const handleClick = (tag) => {
    setTag(tag);
  };

  useEffect(() => {
    console.log(tag);
    getQuote(tag).then((quote) => setQuote(quote));
  }, [tag]);

  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <div className="Card">
        <Header handleClick={handleClick} tags={tags} tag={tag} />
        <Quote quote={quote.quote} author={quote.author} />
      </div>
    </div>
  );
}

export default App;
