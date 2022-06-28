import React from "react";

const ListItem = React.memo((props) => {
    const { data, index, style } = props;
    const {listData, width} = data;
  
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

export default ListItem;
