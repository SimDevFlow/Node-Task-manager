const notFound = (req,res)=> res.status(404).send("La Route n'existe pas!")

export{notFound}