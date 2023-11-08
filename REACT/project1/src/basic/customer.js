import Details from "./customerdetails";

const Mycustomer =() =>{
    return(
        <div>
            <h1 align="center"> What is component re-use in react ?</h1>
            <Details cname="Shashank" city="Banglore" product="Apple" price="Rs.600"/>
            <Details cname="Sumit" city="Pune" product="Mango" price="Rs.500"/>
            <Details cname="Sharat" city="Dehli" product="Banana" price="Rs.400"/>
            <Details cname="Shankar" city="Mumbai" product="Orange" price="Rs.300"/>
        </div>
    )
}
export default Mycustomer;