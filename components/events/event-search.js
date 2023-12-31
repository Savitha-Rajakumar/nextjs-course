import Button from "../ui/button";
import styles from './event-search.module.css'
import { useRef } from "react";
function EventSearch(props){
    const yearInputRef=useRef();
    const monthInputRef=useRef();
const submitHandler=(e)=>{
e.preventDefault();
const selectedYear=yearInputRef.current.value;
const selectedMonth=monthInputRef.current.value;
console.log(selectedYear,selectedMonth)
props.onSearch(selectedYear,selectedMonth);
}
return(
    <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.controls}>
             <div className={styles.control}>
                <label htmlFor="year">Year</label>
                <select id='year' ref={yearInputRef}>
                 <option>2022</option>
                 <option>2023</option>
                </select>
                </div> 
                <div className={styles.control}>
                    <label htmlFor="month">
                        Month
                    </label>
                    <select id='month' ref={monthInputRef}>
                        <option value='1'>January</option>
                        <option value='2'>February</option>
                        <option value='3'>March</option>
                        <option value='4'>April</option>
                        <option value='5'>May</option>
                        <option value='6'>June</option>
                        <option value='7'>July</option>
                        <option value='8'>August</option>
                        <option value='9'>Septmber</option>
                        <option value='10'>October</option>
                        <option value='11'>November</option>
                        <option value='12'>December</option>
                    </select>
                </div>
        </div>
        <Button>
            Find events
        </Button>
    </form>
)
}

export default EventSearch;