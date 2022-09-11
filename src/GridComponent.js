import React, { useState, useEffect } from "react";
import { data } from "./data";
import ProfileCard from "./ProfileCard";
import Card from "./Card";

const CardComponent = () => {
  const [cards, setCards] = useState(data);

  return (
    <main>
      <div className="wrapper">
        <section className="grid">
          <ProfileCard />
          {cards.map((card, index) => {
            return <Card key={index} {...card} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default CardComponent;
