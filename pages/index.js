import { getFeaturedEvents } from "../dummy_data";
import EventList from "../components/events/Event-list";

function HomePage() {
  const getfeaturedevent = getFeaturedEvents();
  //console.log(getfeaturedevent)
  return (
    <div>
      <EventList items={getfeaturedevent}/>
    </div>
  );
}

export default HomePage;
