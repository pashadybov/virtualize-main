import React, { useState, useEffect } from "react";
import { getColor } from "./helpers";
import "./styles.css";

export type Item = {
  id: string | number;
  name: string;
};

interface Props {
  item: Item;
  idx: number;
}

export const ItemRender: React.FC<Props> = ({ item, idx }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data.message;
        setImage(imageUrl);
      })
      .catch((error) => {
        console.log("Ошибка:", error);
      });
  }, []);

  return (
    <div className="item-wrapper">
      <div className="item-id" style={{ color: getColor(idx) }}>
        id: {item.id}
      </div>
      <div className="item-name">{item.name}</div>
      <div>
        <img className="item-image" src={image} alt="Item Image" />
      </div>
    </div>
  );
};
