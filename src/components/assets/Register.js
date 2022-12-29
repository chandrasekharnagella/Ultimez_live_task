import react, { useState } from "react";
import Home from "../Home";
import axios from "axios";

function Register() {
  const fetchData = () => {
    return axios
      .get("https://ultimez-react-task.vercel.app/")

      .then((res) => {
        console.log(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const [fname, setFname] = useState("");
  const [price, setPrice] = useState("");
  const [sale, setSale] = useState("");
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [flag, setFlag] = useState(false);
  const [create, setCreate] = useState(true);

  function handleCreate(e) {
    e.preventDefault();

    if (!fname || !price || !sale || !product || !description) {
      setFlag(true);
    } else {
      setFlag(false);

      localStorage.setItem("ProductName", JSON.stringify(fname));
      localStorage.setItem("Price", JSON.stringify(price));
      localStorage.setItem("Sale", JSON.stringify(sale));
      localStorage.setItem("Product", JSON.stringify(product));
      localStorage.setItem("Description", JSON.stringify(description));
    //   localStorage.setItem("Type", JSON.stringify(type));
      //localStorage.setItem("Date", JSON.stringify(date));
      console.log("Date saved");
      setCreate(!create);
    }
  }

  return (
    <>
      <div>
        {create ? (
          <form onSubmit={handleCreate}>
            <div className="frm_container">
              <h1> Create new product </h1>

              <div className="login_frm">
                <input
                  type="text"
                  placeholder="Product Name*"
                  onChange={(e) => setFname(e.target.value)}
                  required
                />
                <input
                  type="number"
                  placeholder="Original Price*"
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
                <input
                  type="number"
                  placeholder="Sale Price*"
                  onChange={(e) => setSale(e.target.value)}
                  required
                />
                <input
                  type="number"
                  placeholder="Product Type*"
                  onChange={(e) => setProduct(e.target.value)}
                  required
                />
                 {/* <input
                  type="text"
                  placeholder="Description Type*"
                  onChange={(e) => setProduct(e.target.value)}
                  required
                /> */}
                  {/* <input
                  type="date"
                  placeholder="Date*"
                  onChange={(e) => setProduct(e.target.value)}
                  required
                />  */}
                <textarea
                  placeholder="Description*"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                /> 

                <button type="submit"> Create {""} </button>
              </div>
            </div>
          </form>
        ) : (
          <Home />
        )}
      </div>
    </>
  );
}

export default Register;
