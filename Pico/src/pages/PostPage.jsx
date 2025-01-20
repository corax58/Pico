import React from "react";
import useFetchSinglePost from "../hooks/useFetchSinglePost";
import { useParams } from "react-router-dom";
import PostActions from "@/components/PostActions";
import { useAuth0 } from "@auth0/auth0-react";

const PostPage = () => {
  const { postId } = useParams();
  const { data: post, isLoading } = useFetchSinglePost(postId);
  const { isAuthenticated, user } = useAuth0();

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  return (
    <div>
      <div className="  shadow-lg  h-100 carousel w-full">
        {post.imageUrls.map((image, index) => (
          <div
            id={"slide" + index}
            key={index}
            className="carousel-item relative w-full shadow-xl "
          >
            <img
              src={image.imageUrl}
              className="  absolute h-full w-full object-fit    "
            />

            <img
              src={image.imageUrl}
              className=" h-full w-full   object-contain backdrop-blur-lg "
            />

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={
                  index === 0
                    ? "#slide" + (post.imageUrls.length - 1)
                    : "#slide" + (index - 1)
                }
                className="btn btn-circle opacity-50"
              >
                ❮
              </a>
              <a
                href={
                  index === post.imageUrls.length - 1
                    ? "#slide0"
                    : "#slide" + (index + 1)
                }
                className="btn btn-circle opacity-50"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full lg:justify-start lg:pl-24 flex justify-center px-2">
        <div className="mt-3  w-full md:w-3/4 lg:w-1/2 bg-slate-200   border-slate-400 border-2 p-3 rounded-3xl">
          <p className="text-2xl font-bold mb-2">{post.title}</p>
          <div className="flex justify-between  mb-2">
            <div className=" flex gap-2">
              <img
                src={
                  post.author
                    ? post.author.profilePicture
                    : "https://wallpapers.com/images/hd/random-pfp-with-sunglasses-and-hearts-9cjm5zicnjcogsa2.jpg"
                }
                alt=""
                className="size-14 rounded-badge"
              />
              <div>
                <p className=" font-semibold mt-3">
                  {post.author ? post.author.name : "DummyUserName"}
                </p>
                <p className="text-sm font-medium">
                  {post.createdAt.slice(0, 10)}
                </p>
              </div>
            </div>
            <PostActions
              postId={post._id}
              isAuthor={isAuthenticated && user.sub == post.author.id}
            />
          </div>

          <div className="space-y-2 text-wrap">
            <div className="w-full h-px bg-slate-400 "></div>
            <pre className=" text-wrap">{post.description}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
