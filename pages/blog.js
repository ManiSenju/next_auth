import { getSession } from "next-auth/react";

function Blog({data}){
    return <h2>Blog data : {data}</h2>
}

export async function getServerSideProps(context){
    const session = await getSession(context)
    if(!session){
        return {
            redirect:{
                destination:`api/auth/signin?callbackUrl=http://localhost:3000/blog`,
                permanent:false
            }
        }
    }
    return {
        props:{
            session,
            data: session ? 'List of 100 personal blogs' : 'list of common blogs'
        }
    }
}

export default Blog;