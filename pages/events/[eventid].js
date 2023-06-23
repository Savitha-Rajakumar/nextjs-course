import { useRouter } from "next/router";
import { getEventById } from "../../dummy_data";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
function EventDetails (){
  const router=useRouter();
  const id=router.query.id;
  console.log(id);
  const eventdetails=getEventById(id);
 if(!eventdetails){
  return <p>No event details</p>
 }

    return(
      <Fragment>
        <EventSummary/>
      </Fragment>
     );
  }
  
  export default EventDetails;