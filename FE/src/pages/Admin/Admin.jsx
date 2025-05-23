import React, { useEffect, useState } from "react";
import axios from "axios";
function Admin() {
  const url = "http://localhost:3000/clothing/";
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortOrder, setsortOrder] = useState("default");
  async function getData() {
    const res = await axios.get(url);
    const data = res.data;
    setData(data);
    setIsloading(false);
  }
  async function deleteData(id) {
    const res = await axios.delete(url + id);
    const data = res.data;
    getData();
  }
  useEffect(() => {
    getData();
  }, []);

  if (isloading) {
    return <h1>Hele yuklenirem...</h1>;
  }

  return (
    <div style={{ marginTop: "80px" }} className="container">
      <title>Admin</title>
      <label htmlFor="">Search by Name</label>
      <input
        placeholder="search..."
        style={{ padding: "5px 10px", margin: "0 10px" }}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <label htmlFor="">Sort by Price</label>
      <select
        style={{ padding: "5px 10px", marginLeft: "10px" }}
        value={sortOrder}
        onChange={(e) => setsortOrder(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="asc">From cheap to expensive</option>
        <option value="desc">From expensive to cheap</option>
      </select>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) =>
              item.name.toUpperCase().includes(search.toUpperCase())
            )
            .sort((a, b) => {
              if (sortOrder == "asc") {
                return a.price - b.price;
              } else if (sortOrder == "desc") {
                return b.price - a.price;
              }
            })

            .map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>${item.price}.00</td>
                <td>
                  <img src={item.img} alt="" style={{ width: "80px" }} />
                </td>
                <td>
                  <button onClick={() => deleteData(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
