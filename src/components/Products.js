import React, { useState, useEffect } from "react";
import "../assets/products/products.css";
export default function Products(props) {
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
            return (
              <div className="box" key={item.id}>
                <div className="imgContainer">
                  <img src={item.src.medium} alt={item.alt} />
                </div>
                <div className="content">
                  <h5>{item.alt}</h5>

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
