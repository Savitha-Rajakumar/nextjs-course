import { useRouter } from "next/router";
import { getEventById } from "../../dummy_data";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/error-alert/error-alert";
function EventDetails() {
  const router = useRouter();
  const id = router.query.eventid;
  console.log(id);
  const eventdetails = getEventById(id);
  if (!eventdetails) {
    return <ErrorAlert>
     <p>No event details</p>
     </ErrorAlert>;
  }

  return (
    <Fragment>
      <EventSummary title={eventdetails.title} />
      <EventLogistics
        date={eventdetails.date}
        address={eventdetails.location}
        image={eventdetails.image}
        imageAlt={eventdetails.title}
      />
      <EventContent>
        <p>{eventdetails.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetails;
