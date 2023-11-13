const Mycustomer =() =>{
    let allcustomer =[
        {Id:101,Name: 'John',Bill:500,Status: 'Paid'},
        {Id:102,Name: 'Bob',Bill:600,Status: 'Unpaid'},
        {Id:103,Name: 'Alex',Bill:700,Status: 'Paid'},
        {Id:104,Name: 'Tom',Bill:800,Status: 'Paid'},
        {Id:105,Name: 'Robin',Bill:900,Status: 'Unpaid'},
        {Id:106,Name: 'Jim',Bill:1000,Status: 'Unpaid'},
        {Id:107,Name: 'Pam',Bill:1100,Status: 'Paid'}
    ];

    return(
        <div className="home">
            <h1>Customer List:{allcustomer.length}</h1>
            <table id="datalist">
               <thead>
                  <tr>
                    <th>SI No</th>
                    <th>Customer Id</th>
                    <th>Customer Name</th>
                    <th> Bill</th>
                    <th>Status</th>
                  </tr>
               </thead>
               <tbody>
                   {
                      allcustomer.map((customer,index) =>{
                         return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{customer.Id}</td>
                                <td>{customer.Name}</td>
                                <td>{customer.Bill}</td>
                                <td>{customer.Status}</td>
                            </tr>
                         )
                      })

                    }
               </tbody>

            </table>
        </div>
    )
}

export default Mycustomer;