import React from "react";
import { useGlobalContext } from "./context";
const ProfileCard = () => {
  const { timeframe, setTimeframe } = useGlobalContext();
  return (
    <article className="card bg-color--darkblue profile-card">
      <div className="card__content bg-color--blue">
        <div className="avatar">
          <img src="/image-jeremy.png" alt="profile avatar" />
        </div>

        <div className="profile-content__main">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>

      <div className="card__nav">
        <ul>
          <li
            className={`${timeframe === "daily" && "active"}`}
            onClick={() => setTimeframe("daily")}
          >
            Daily
          </li>
          <li
            className={`${timeframe === "weekly" && "active"}`}
            onClick={() => setTimeframe("weekly")}
          >
            Weekly
          </li>
          <li
            className={`${timeframe === "monthly" && "active"}`}
            onClick={() => setTimeframe("monthly")}
          >
            Monthly
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ProfileCard;
