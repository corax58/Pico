import PostCard from "@/components/PostCard";
import useFetchAllPosts from "@/hooks/useFetchAllPosts";
import useSearchPosts from "@/hooks/useSearchPosts";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { data, isLoading, error, refetch } = useSearchPosts(query);

  useEffect(() => {
    refetch(); // Force refetch when query changes
  }, [query, refetch]);

  if (isLoading)
    return (
      <div className="w-full justify-center flex pt-32">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  if (error)
    return (
      <div role="alert" className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{error.message}</span>
      </div>
    );
  return (
    <div className=" w-full space-y-5    md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6  columns-1 px-5 pt-20 ">
      {data.map((post) => (
        <div
          key={post._id}
          className="flex w-full justify-center items-center "
        >
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
