import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Spinner from "./components/Spinner";
import Features from "./components/Features";
import Products from "./components/Products";
import Nature from "./components/Nature";
import Footer from "./components/Footer";

function App(props) {
  const [Loading, setLoading] = useState(false);

  const [Photo, setPhoto] = useState([]);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      const resp = await fetch(
        "https://api.pexels.com/v1/search?query=packaging",
        {
          headers: {
            Authorization: apiKey,
          },
        }
      );
      const resData = await resp.json();
      setPhoto(resData.photos);
      setLoading(false);
    };
    getPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(Photo);
  const apiKey = "563492ad6f91700001000001e7c4b30de4ae4adc84546f8fa49a4df6";
  // console.log(Photo);
  // const getPhotos = async () => {
  //   const resp = await fetch(
  //     "https://api.pexels.com/v1/search?query=packages",
  //     {
  //       headers: {
  //         Authorization: apiKey,
  //       },
  //     }
  //   );
  //   const resData = await resp.json();
  //   console.log(resData.photos);
  // };

  return (
    <div className="App">
      <Navbar />
      {Loading && <Spinner />}

      <HomePage api={apiKey} Photo={Photo} />
      <Features />
      <Products api={apiKey} />
      <Nature />
      <Footer />
    </div>
  );
}

export default App;
