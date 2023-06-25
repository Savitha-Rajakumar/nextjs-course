import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy_data";
import EventList from "../../components/events/Event-list";
import ResultsTitle from "../../components/results-title/results-title";
import { Fragment } from "react";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/error-alert/error-alert";
function Filteredevents() {
  const router = useRouter();
  const filterdata = router.query.slug;
  console.log('filterdata',filterdata);
if(!filterdata){
  return <p>Loading....</p>
}

  const year = filterdata[0];
  const month = filterdata[1];
  const numyear = +year;
  const nummonth = +month;
  if (
    isNaN(numyear) ||
    isNaN(nummonth) ||
    numyear > 2030 ||
    numyear < 2021 ||
    nummonth < 1 ||
    nummonth > 12
  ){
    return(
      <Fragment>
        <ErrorAlert>
      <p>Invalid filter</p>
      </ErrorAlert>
      <div className="center">
        <Button link='/events'>
          Show All Events
        </Button>
      </div>
      </Fragment>
    )
  }

  const filteredEvents=getFilteredEvents({year:numyear, month:nummonth});
  if(!filteredEvents || filteredEvents.length===0){
    return <Fragment>
        <ErrorAlert>
      <p>No Results found</p>
      </ErrorAlert>
      <div className="center">
        <Button link='/events'>
          Show All Events
        </Button>
      </div>
    </Fragment>
  }

  const date=new Date(numyear,nummonth-1);

    return <div>
      <ResultsTitle date={date}/>
      <EventList items={filteredEvents}/>
      </div>;
}

export default Filteredevents;
