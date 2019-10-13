import React from "react";
import { Link } from "gatsby";

const EventList = ({ events }) => {
  return (
    <ul>
      {events.map(e => (
        <li key={e.id}>
          <Link to={e.slug}>{e.name}</Link>
          <br />
          {console.log(e.startDate)}
          {new Date(e.startDate).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
          })}{" "}
          in {e.location}
        </li>
      ))}
    </ul>
  );
};

export default EventList;
