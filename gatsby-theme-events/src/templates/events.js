import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import EventList from "../components/event-list";

const EventsTemplate = () => {
  const result = useStaticQuery(graphql`
    query {
      allEvent(sort: { fields: startDate, order: ASC }) {
        nodes {
          id
          name
          startDate(formatString: "MMMM D, YYYY")
          endDate(formatString: "MMMM D, YYYY")
          location
          url
          slug
        }
      }
    }
  `);
  const events = result.allEvent.nodes;
  return (
    <Layout>
      <EventList events={events} />
    </Layout>
  );
};

export default EventsTemplate;
