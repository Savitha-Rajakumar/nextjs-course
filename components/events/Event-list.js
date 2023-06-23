import EventItem from "./event-item";
import styles from './event-item.module.css'
function EventList(props) {
  const { items } = props;
  console.log(items[0].location)
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          tittle={item.title}
          date={item.date}
          addresss={item.location}
          image={item.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
