import React from "react";
import "../assets/features/features.css";
import { AiOutlineFieldTime, AiOutlineEyeInvisible } from "react-icons/ai";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaServicestack } from "react-icons/fa";
export default function Features() {
  const FeaturesData = [
    {
      icons: AiOutlineFieldTime,
      title: "Time Saving",
      description:
        " The packaging sells the product the first time, but what’s inside sells the product a second time",
      color: "green",
      id: 1,
    },
    {
      icons: VscWorkspaceTrusted,
      title: "Trust",
      description:
        " The packaging sells the product the first time, but what’s inside sells the product a second time",
      color: "blue",
      id: 2,
    },
    {
      icons: AiOutlineEyeInvisible,
      title: "Visibility",
      description:
        " The packaging sells the product the first time, but what’s inside sells the product a second time",
      color: "orange",
      id: 3,
    },
    {
      icons: FaServicestack,
      title: "Best service",
      description:
        " The packaging sells the product the first time, but what’s inside sells the product a second time",
      color: "#7b68ee",
      id: 4,
    },
  ];

  return (
    <section className="features">
      <h1>hi i'm features</h1>
      <p>Explore what we can we do for you.</p>
      <div className="featuresCol">
        {FeaturesData.map((data) => {
          const { title, description, color, id } = data;
          return (
            <div className="box" key={id}>
              <div className="bg"></div>
              <data.icons className="i" style={{ color: color }} />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
