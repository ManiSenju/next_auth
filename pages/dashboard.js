import { getSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

function Dashboard(){
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        async function Session(){
            const session = await getSession()
            if(!session){
                signIn()
            }else {
                setLoading(false)
            }
        }
        Session()
    },[])
    if(loading)
        return <h2>loading</h2>
    return <h2>Dashboard</h2>
}

export default Dashboard;