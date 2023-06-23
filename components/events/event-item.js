import styles from './event-item.module.css'
import Link from 'next/link';
import Button from '../ui/button'
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowIcon from '../icons/arrow-icon';
function EventItem (props){
const {tittle,image,date,addresss,id}=props;
const humanreadbledate=new Date(date).toLocaleDateString('en-us',{
    day:'numeric',
    month:'long',
    year:'numeric'
})
console.log(addresss,tittle)
const filterredaddress=addresss.replace(', ', '\n');
const explorelink=`/events/${id}`;

    return(
   <li className={styles.item}>
    <img src={'/'+image} alt=""/>
    <div className={styles.content}>
        <div className={styles.h2}>
            <h1>
                {tittle}
            </h1>
        </div>
        <div className={styles.date}>
            <DateIcon/>
            <time>{humanreadbledate}</time>
        </div>
        <div className={styles.address}>
            <AddressIcon/>
            <address>{filterredaddress}</address>
        </div>
      <div className={styles.actions}>
          {/* <Link href={explorelink}>Explore link</Link> */}
  <Button link={explorelink}>
  <span>Explore link</span>
  <span className={styles.icon}><ArrowIcon/></span>

  </Button>
        </div> 
    </div>
   </li>  
    )
}

export default EventItem;