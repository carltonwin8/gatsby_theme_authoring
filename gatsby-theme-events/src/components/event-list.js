import React from "react";
import { Link } from "gatsby";
import { Styled } from "theme-ui";

const EventList = ({ events }) => {
  return (
    <>
      <Styled.h1>Upcoming Events</Styled.h1>
      <Styled.ul>
        {events.map(e => (
          <Styled.li key={e.id}>
            <Link to={e.slug}>{e.name}</Link>
            <br />
            {console.log(e.startDate)}
            {new Date(e.startDate).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric"
            })}{" "}
            in {e.location}
          </Styled.li>
        ))}
      </Styled.ul>
    </>
  );
};

export default EventList;
