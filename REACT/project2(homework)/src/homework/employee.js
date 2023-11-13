const Myemployee = () => {
    let employee =[
       {id:101,name:'Shankar',age:20,salary:50000},
       {id:102,name:'Mohan',age:21,salary:55000},
       {id:103,name:'Suresh',age:22,salary:60000},
       {id:104,name:'Ram',age:23,salary:65000},
       {id:105,name:'Sham',age:24,salary:70000},
       {id:106,name:'Ravi',age:25,salary:75000}
];

  return(
    <div className="home">
        <h1>Employee List:{employee.length}</h1>
        <table id="datalist">
            <thead>
                <tr>
                    <th>SI No</th>
                    <th>Emp_Id</th>
                    <th>Emp_Name</th>
                    <th>Emp_Age</th>
                    <th>Emp_Salary</th>
                </tr>
            </thead>
            <tbody>
                {
                    employee.map((employee, index)=>{
                        return(
                           <tr key={index}>
                            <td>{index+1}</td>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                            <td>{employee.salary}</td>
                           </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    
    
  )
}
export default Myemployee;