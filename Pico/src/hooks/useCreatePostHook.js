import { useMutation } from "@tanstack/react-query"
import axios from "axios"
const useCreatePostHook = () => {
    return useMutation({
        mutationFn: (postData) => axios.post(import.meta.env.VITE_SERVER_URL, postData).then(res=>res.data),
        onSuccess:(sentPostData,returnedPostData )=>{
        // queryClient.invalidateQueries({queryKey:['posts']})
        }
        })
}

export default useCreatePostHook;