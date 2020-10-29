

export default async(req,res)=>{
    const { query : { id }} = req
    const getUserById = () =>{
        if ( id === "123"){
            res.json({
                id: id, 
                name: "John Doe"
            })
        }
    }
   const user = await getUserById(id)
   if(!user) {
       return res.status(404).json({
           status: 404,message: "No User Found"
       })
   }
   res.setHeader('content-Type','application/json');
   return res.json({ user})
}


// const Endpoint = ( req, res)=>{
  
//     res.statusCode = 200
//     res.end(JSON.stringify({
//       name: 'Ghana',
//       age:65
//     }))
  
//     console.log(req.body);
//     console.log(req.query);
//     console.log(req.cookies);
//     res.end("hello world")
//   }
  
  
//   export default Endpoint;