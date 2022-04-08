import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/products/ProductDetail.css";
export default function ProductDetail(props) {
  const { id } = useParams();
  const [Data, setData] = useState([]);
  const [src, setSrc] = useState([]);
  async function get() {
    props.setLoading(true);
    const resp = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
      headers: {
        Authorization:
          "563492ad6f91700001000001e7c4b30de4ae4adc84546f8fa49a4df6",
      },
    });
    const respData = await resp.json();
    setData(respData);
    setSrc(respData.src);
    props.setLoading(false);
  }
  console.log(Data);
  useEffect(() => {
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="productDetailPage">
      <div className="detailCol">
        <div className="leftCol">
          <img src={src.portrait} alt={Data.alt} />
        </div>
        <div className="RightCol">
          <h1>{Data.alt}</h1>
          <h3>Mulai Dari Rp. 8.000</h3>
          <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
            similique ratione aspernatur dolorum distinctio rerum adipisci
            accusantium quisquam earum quo doloribus unde quibusdam nostrum odit
            aperiam quaerat excepturi neque, ex impedit, nobis dolores delectus?
            Eos delectus, nam distinctio consectetur repudiandae officiis quam
            iste praesentium beatae illo corrupti, dignissimos laborum sint!
          </p>
        </div>
      </div>
    </div>
  );
}
