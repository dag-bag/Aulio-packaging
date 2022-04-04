import React from "react";
import Slider from "./Slider";

export default function HomePage(props) {
  const api = props.api;

  const Photo = props.Photo;

  return (
    <>
      <Slider api={api} Photo={Photo} />
    </>
  );
}
