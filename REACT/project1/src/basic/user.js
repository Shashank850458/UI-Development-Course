import Details from "./customerdetails";
function Myuser() {
  let alluser = ["Shankar", "Mahesh", "Sunil", "Santhosh", "Anil", "Abhi","Mohit"];

  return (
    <div>
      <h1> User List: {alluser.length} </h1>

      {
        alluser.map((fullname, index) => {
        return (
          <p key={index} className="fouritem">{fullname}</p>
        );
       })
      }
      <Details cname="Shashank" city="Banglore" product="Apple" price="Rs.600"/>
      <Details cname="Sumit" city="Pune" product="Mango" price="Rs.500"/>
    </div>
  );
}

export default Myuser;
