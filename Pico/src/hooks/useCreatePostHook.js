import { useMutation,useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useNavigate,  } from "react-router-dom"
const useCreatePostHook = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (postData) => axios.post(import.meta.env.VITE_SERVER_URL, postData).then(res=>res.data),
        onSuccess:(sentPostData, )=>{
        queryClient.invalidateQueries({queryKey:['posts']})
       navigate('/post/'+sentPostData._id)

        }
        })
}

export default useCreatePostHook;