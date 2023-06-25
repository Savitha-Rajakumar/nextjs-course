import EventList from "../../components/events/Event-list";
import { getAllEvents } from "../../dummy_data";
import EventSearch from "../../components/events/event-search";
import { useRouter } from "next/router";
function AllEvents() {
  const allevents = getAllEvents();
  console.log(allevents);
  const router=useRouter();
  const filterEvents=(year,month)=>{
   const filter=`/events/${year}/${month}`;
   router.push(filter);
  }
  return (
    <div>
      <EventSearch onSearch={filterEvents}/>
      <EventList items={allevents} />
    </div>
  );
}

export default AllEvents;
