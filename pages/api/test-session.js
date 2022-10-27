import { getSession } from "next-auth/react"

const handler = async (req,res)=>{
    const session = await getSession({req})
    if(!session)
        res.status(401).send({error:"Unauthorised"})
    else
        res.status(201).send({message:"success",session})
}

export default handler