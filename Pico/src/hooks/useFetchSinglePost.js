import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const useFetchSinglePost = (id) => {
    return useQuery({
        queryKey: ['post', id],
        queryFn: () => axios.get(import.meta.env.VITE_SERVER_URL + '/' + id).then(res => res.data)
    })
}


export default useFetchSinglePost;