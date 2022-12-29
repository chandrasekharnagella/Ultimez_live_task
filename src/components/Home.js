import react, { useState, useEffect } from "react";

// import react from 'react'

function Home() {
  const [pro_name, setPro_name] = useState([]);
  const [pro_price, setPro_price] = useState([]);
  const [pro_sale, setPro_Sale] = useState([]);
  const [pro_product, setPro_Product] = useState([]);
  const [pro_description, setPro_description] = useState([]);
  const [pro_type, setPro_type] = useState([]);
  const [pro_date, setPro_date] = useState([]);

  useEffect(() => {
    const pro_name = JSON.parse(localStorage.getItem("ProductName"));
    const pro_price = JSON.parse(localStorage.getItem("Price"));
    const pro_sale = JSON.parse(localStorage.getItem("Sale"));
    const pro_product = JSON.parse(localStorage.getItem("Product"));
    const pro_description = JSON.parse(localStorage.getItem("Description"));
    //const pro_date = JSON.parse(localStorage.getItem("Date"));

    setPro_name(pro_name);
    setPro_price(pro_price);
    setPro_Sale(pro_sale);
    setPro_Product(pro_product);
    setPro_description(pro_description);
    // setPro_type(pro_description);
    // setPro_date(pro_date);
  }, {});

  return (
    <>
      <table>
        <thead>
          <tr className="tbl_head">
            <th>
              {/* All Products :{pro_name}    */}

              <h2>All Products</h2>

              <input type="text" placeHolder="Search Here" />
            </th>
          </tr>
        </thead>

        <tbody className="tbl_body">
          <tr>
            <th> Product ID </th>
          </tr>

          <tr>
            <th> Product Name </th>
            <br />
            {pro_name}
          </tr>
          <tr>
            <th> Original Price </th>
            <br />
            {pro_price}
          </tr>
          <tr>
            <th> Sale Price </th>
            <br />
            {pro_sale}
          </tr>
          <tr>
            <th> Product Type </th>
            <br />
            {pro_product}
          </tr>
          <tr>
            <th> Description </th>
            <br />
            {pro_description}
          </tr>
          <tr>
            <th> Data and time </th>
            {pro_date}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Home;
