import React, { useState, useEffect } from "react";
import "../assets/products/products.css";

import { useNavigate } from "react-router-dom";
export default function Products(props) {
  let navigate = useNavigate();
  const productPage = (e) => {
    const id = e.currentTarget.id;
    navigate(`/product-detail/${id}`);
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getPhotos = async () => {
      //   setLoading(true);
      const resp = await fetch(
        "https://api.pexels.com/v1/search/?page=3&per_page=9&query=packaging",
        {
          headers: {
            Authorization: props.api,
          },
        }
      );
      const resData = await resp.json();
      setProducts(resData.photos);
    };
    getPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(products);s
  return (
    <>
      <section className="products">
        <h1>Our Products</h1>
        <p>We deliver best packaging for you.</p>
        <div className="productCol">
          {products.map((item) => {
            const { alt, id, src } = item;
            return (
              <div className="box" key={id} id={id} onClick={productPage}>
                <div className="imgContainer">
                  <img src={src.medium} alt={alt} />
                </div>
                <div className="content">
                  <h5>{alt}</h5>

                  <p>
                    Price for packaging:
                    <span>Mulai Dari Rp. 1.500</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <a href="#" className="Mproduct">
          View More Product
        </a>
      </section>
    </>
  );
}
