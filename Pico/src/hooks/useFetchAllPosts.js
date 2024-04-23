import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const useFetchAllPosts = () => {
    const fetchAllPosts= () => axios.get(import.meta.env.VITE_SERVER_URL).then(res=>res.data)

    return useQuery({
        queryKey:['posts'],
        queryFn: fetchAllPosts
    })
    
}

export default useFetchAllPosts;