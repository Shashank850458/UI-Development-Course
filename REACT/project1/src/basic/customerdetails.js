const Details=(info)=>{
     return(
        <fieldset>
            <legend>{info.cname}</legend>
            <p>City: {info.city}</p>
            <p> Product: {info.product}</p>
            <p>Cost:{info.price}</p>
        </fieldset>
     )
}
export default Details;

// info ={cname:"Sunil",city:"Banglore",product:"Apple",price:600}