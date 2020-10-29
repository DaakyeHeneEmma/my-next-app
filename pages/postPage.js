import styles from "./Home.module.scss"

// import useSWR from 'swr'

// const UrlData = () =>{
//     const { browserData, error} = useSWR('/api/users', fetch)
//     if(error){
//         return ( <div><b>There was an error</b></div>)
//     }
//     if(!data){
//         return( <div><b>Still Loading</b></div>)
//     }
//     return( <div>UrlData: {browserData}</div>)
// }

const Item = props =>{
    const people = props.data;
    const listItem = people.map((val,key) => 
    <li key={key}>
    {val}
    </li>
    )
    return(
        <ul>{listItem}</ul>
        )
 }

 const Prices = props =>{
     return(
         <div>
         <b>Name: </b> {props.name} <br /> 
         <b>Price: </b> {props.price} 
         </div>
     )
 }


const postPage = ()  => {
    const contacts = [ "joe", "philip", "mattew"]
    return (
        <div className={styles.container}>
            <h2> this is post page</h2>
            <p className={styles.wrap}>
            <Prices name={contacts[0]} price="4.5"/> <br />
             </p>
            <p className={styles.wrap}>
            <Prices name="Cake" price="10.2"/><br />
            
             </p>
                 
                 <Item data={contacts} />
                
        </div>
    )
}

export default postPage
