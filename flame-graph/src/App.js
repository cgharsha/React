import React, {useState} from "react";
import "./App.css";
import FlameChart from "./FlameChart";
import AutoSizer from "react-virtualized-auto-sizer";


function App() {
  const [jsonData, setjsonData] = useState(null)

  const loadData = () => {
    fetch('/data.json').then(response => response.json()).then(data => setjsonData(data))
  }

  if(jsonData === null){
    return (
      <button onClick={loadData}>Load Data</button>
    )
  }
  return (
    <div className="App">
      <AutoSizer>
        {({height, width}) => (<FlameChart data={jsonData} height={height} width={width} />)}
      
      </AutoSizer>
    </div>
  );
}

export default App;
