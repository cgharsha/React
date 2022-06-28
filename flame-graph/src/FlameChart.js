import React, { useMemo } from "react";
import { FixedSizeList as List } from "react-window";
import convertData from "./utils";

const FlameChart = React.memo(({ data, height, width }) => {
  //   const listData = convertData(data);
  const listData = useMemo(() => {
    return convertData(data);
  }, [data]);

  const itemData = useMemo(
    () => ({
      listData,
      width,
    }),
    [listData, width]
  );
  return (
    // <List
    //   height={height}
    //   itemCount={listData.length}
    //   itemSize={35}
    //   width={width}
    // >
    //   {({ index, style }) => {
    //     const nodes = listData[index];

    //     return (
    //       <div style={style}>
    //         {nodes.map((node, index) => (
    //           <div
    //             key={index}
    //             className='Node'
    //             style={{
    //               left: node.offset * width,
    //               width: node.offset * width,
    //               backgroundColor: node.color,
    //             }}
    //             title={node.name}
    //           >
    //             {node.name}
    //           </div>
    //         ))}
    //       </div>
    //     );
    //   }}
    //   {/* {Row} */}
    // </List>

    <List
      height={height}
      //   itemData={{
      //     listData,
      //     width,
      //   }}
      itemData={itemData}
      itemCount={listData.length}
      itemSize={35}
      width={width}
    >
      {ListItem}
    </List>
  );
});

const ListItem = React.memo((props) => {
  const { data, index, style } = props;
  const { listData, width } = data;

  const nodes = listData[index];

  return (
    <div style={style}>
      {nodes.map((node, index) => (
        <div
          key={index}
          className="Node"
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
});

export default FlameChart;
