import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useSearchPosts = (query) => {
  const fetchPosts = () =>
    axios
      .get(import.meta.env.VITE_SERVER_URL + `search?title=${query}`)
      .then((res) => res.data);

  return useQuery({
    queryKey: ["search"],
    queryFn: fetchPosts,
    staleTime: 0,
    enabled: !!query,
  });
};

export default useSearchPosts;
