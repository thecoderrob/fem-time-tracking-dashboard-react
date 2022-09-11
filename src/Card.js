import React from "react";
import { useGlobalContext } from "./context";
const Card = ({ title, background, backgroundColor, timeframes }) => {
  const { timeframe } = useGlobalContext();
  const dataObj = timeframes[timeframe];

  return (
    <article className={`card ${backgroundColor}`}>
      <div className="card__background">
        <img src={background} alt="" />
      </div>

      <div className="card__content bg-color--darkblue">
        <div className="content__header">
          <h2>{title}</h2>
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill-rule="evenodd"
            />
          </svg>
        </div>

        <div className="content__main">
          <h3>{dataObj.current}hrs</h3>
          <p>
            {timeframe === "daily"
              ? "Yesterday - "
              : timeframe === "weekly"
              ? "Last Week - "
              : "Last Month - "}
            {dataObj.previous}
            {dataObj.previous > 1 ? "hrs" : "hr"}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Card;
