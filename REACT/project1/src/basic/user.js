function Myuser() {
  let alluser = ["shankar", "Mahesh", "Sunil", "Santhosh", "Anil", "Abhi","Mohit"];

  return (
    <div>
      <h1> User List: {alluser.length} </h1>
      <p> {alluser[2]} </p>

      {
        alluser.map((fullname, index) => {
        return (
          <p key={index}>
        
            {fullname}
          </p>
        );
       })
      }
    </div>
  );
}

export default Myuser;
