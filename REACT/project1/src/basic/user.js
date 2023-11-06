function Myuser() {
  let alluser = ["shankar", "Mahesh", "Sunil", "Santhosh", "Anil", "Abhi","Mohit"];

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
    </div>
  );
}

export default Myuser;
