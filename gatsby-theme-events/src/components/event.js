import React from "react";

const getDate = (date, { day = true, month = true, year = true } = {}) =>
  date.toLocaleDateString("en-US", {
    day: day ? "numeric" : undefined,
    month: month ? "long" : undefined,
    year: year ? "numeric" : undefined
  });

const EventDate = ({ startDate, endDate }) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const isOneDay = start.toDateString() === end.toDateString();

  // June 23, 2019 or June 24-25, 2019 or June 29-July 2019 or
  // December 30, 2019 - January 1, 2020
  return (
    <>
      <time dateTime={start.toISOString()}>
        {getDate(start, { year: isOneDay })}
      </time>
      {!isOneDay && (
        <>
          {" "}
          -{" "}
          <time dateTime={end.toISOString()}>
            {getDate(end, { month: start.getMonth() !== end.getMonth() })}
          </time>
        </>
      )}
    </>
  );
};
const Event = ({ name, url, startDate, endDate, location }) => {
  console.log(startDate);
  return (
    <div>
      <h1>
        {name} - {location}
      </h1>
      <p>
        <EventDate startDate={startDate} endDate={endDate} />
      </p>
      <p>
        Website: <a href={url}>{url}</a>
      </p>
    </div>
  );
};

export default Event;
