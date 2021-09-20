import React, { useState, useCallback, useMemo } from "react";

import Button from "./components/UI/Button/Button";
import DemoList from "./components/Demo/DemoList";

import "./App.css";
import DemoOutput from "./components/Demo/Demo";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setallowToggle] = useState(false);

  console.log("APP RUNNING");

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setallowToggle(true);
  };

  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      {/* <h1>Hi there!</h1> */}
      {/* {showParagraph && <DemoOutput show={showParagraph} />} */}
      {/* <DemoOutput show={false} /> */}
      {/* <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Show Paragraph</Button> */}

      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
