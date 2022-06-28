import React from "react";
import { FixedSizeList as List } from "react-window";
import convertData from "./utils";

const FlameChart = ({ data, height, width }) => {
  const listData = convertData(data);

  return (
    <List
      height={height}
      itemCount={listData.length}
      itemSize={35}
      width={width}
    >
      {({ index, style }) => {
        const nodes = listData[index];

        return (
          <div style={style}>
            {nodes.map((node, index) => (
              <div
                key={index}
                className='Node'
                style={{
                  left: node.offset * width,
                  width: node.offset * width,
                  backgroundColor: node.color,
                }}
                title={node.name}
              >
                {node.name}
              </div>
            ))}
          </div>
        );
      }}
      {/* {Row} */}
    </List>
  );
};

export default FlameChart;
