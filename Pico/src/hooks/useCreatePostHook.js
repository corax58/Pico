import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const useCreatePostHook = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { user } = useAuth0();
  const author = {
    name: user.name,
    profilePicture: user.picture,
    id: user.sub,
  };

  console.log({ author });

  return useMutation({
    mutationFn: (postData) =>
      axios
        .post(import.meta.env.VITE_SERVER_URL, {
          ...postData,
          author,
        })
        .then((res) => res.data),
    onSuccess: (sentPostData) => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      navigate("/post/" + sentPostData._id);
    },
  });
};

export default useCreatePostHook;
