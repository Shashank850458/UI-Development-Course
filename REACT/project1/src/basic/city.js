function Mycity() {
    let city =['Banglore','Manglore','Mysore','Hydarbad','Dehli','Pune','Mumbai','Lucknow','Kolkata','Chennai'];

    return(
        <div>
        <h1> City List: {city.length} </h1>
  
        {
          city.map((name, index) => {
          return (
            <p key={index} className="fouritem">{name}</p>
          )
         })
        }
      </div>
    )
}
export default Mycity;