const Booklist = () => {
    let allbook =[
        {category:"Web Design",booklist:['html','css','bootstrap','javascript']},
        {category:"UI Development",booklist:['html','css','bootstrap','javascript','react']},
        {category:"MERN Stack",booklist:['html','css','bootstrap','javascript','react','node js','mongodb']},
        {category:"MEAN Stack",booklist:['html','css','bootstrap','javascript','angular','node js','mongodb',]},
        {category:"Database",booklist:['mysql','mongodb','ms sql','oracle']}

    ];
     return(
        <div>
            <h1>Manage Book: {allbook.length}</h1>
            {
                allbook.map((bookinfo, index)=>{
                    return(
                        <fieldset key ={index}>
                            <legend>{bookinfo.category} :- {bookinfo.booklist.length}</legend>
                            {
                                bookinfo.booklist.map((bookname, index2)=>{
                                    return(
                                        <p key ={index2}>{bookname}</p>
                                    )
                                })
                            }
                        </fieldset>
                    )
                })
            }
        </div>
     )
}
export default Booklist;