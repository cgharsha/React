import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
export default function TableData() {
  const [data, setdata] = useState([]);
  const [pageOffset, setPageOffset] = useState(0);
  const [pageCount, setPageCount] = useState(500);
  const [filteredData, setfilteredData] = useState([]);
  useEffect(() => {
    let tableData = [];
    axios.get(`https://jsonplaceholder.typicode.com/photos`).then((res) => {
      console.log(res.data);
      setdata(res.data);
      res.data.map((dataval) => {
        if (dataval.id < 11) {
          tableData.push(dataval);
          setfilteredData(() => [...tableData]);
        }
        return filteredData;
      });
    });
  }, []);
  const handlePageChange = (event) => {
    let tableData = [];
    console.log(event);
    setPageOffset(() => event.selected);
    data.map((dataval) => {
      if (
        dataval.id > event.selected * 10 &&
        dataval.id < event.selected * 10 + 11
      ) {
        tableData.push(dataval);
      }
      return tableData;
    });
    setfilteredData(() => [...tableData]);
  };
  return (
    <div style={{ position: "relative", top: "70px" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          position: "fixed",
          bottom: "0px",
          padding: "10Px",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={pageCount}
          //marginPagesDisplayed={5}
          pageRangeDisplayed={10}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
          // forcePage={pageOffset}
        />
      </div>
      <table style={{ margin: "2%", width: "95%" }}>
        <thead>
          <tr>
            <th>Album Id</th>
            <th>Title</th>
            <th>Thumbnail</th>
            <th>URL</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id} style={{ border: "2px solid black" }}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                <img
                  src={item.thumbnailUrl}
                  alt={item.thumbnailUrl}
                  height="150px"
                  width="200px"
                  style={{ padding: "5%" }}
                />
              </td>
              <td>
                <img
                  src={item.url}
                  alt={item.url}
                  height="300px"
                  width="500px"
                  style={{ padding: "5%" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
