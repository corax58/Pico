import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <Link to={`/post/${post._id}`} className="  break-inside-avoid ">
      <div className=" shadow-lg bg-slate-50   w-full h-max  hover:shadow-2xl rounded-3xl overflow-hidden   hover:scale-y-[1.02] hover:scale-x-[1.02] transition-all duration-200 ">
        <div className=" h-max w-full bg-white  p-2">
          {post.imageUrls.length < 2 ? (
            <div className="h-full w-full rounded-2xl overflow-hidden  flex justify-center">
              <img
                src={post.imageUrls[0].imageUrl}
                className="w-full rounded-2xl "
              />
            </div>
          ) : (
            <div className=" relative grid grid-cols-2   grid-flow-col gap-1 bg-white h-full overflow-hidden rounded-2xl group">
              <img
                src={post.imageUrls[0].imageUrl}
                className={
                  "h-full  rounded-2xl   object-cover" +
                  (post.imageUrls.length > 2 ? " row-span-2" : "")
                }
              />
              <img
                src={post.imageUrls[1].imageUrl}
                className="h-full rounded-2xl  object-cover"
              />

              {post.imageUrls.length > 3 && (
                <div className=" absolute bg-black h-full rounded-2xl  w-full opacity-50 items-center justify-center scale-0 group-hover:scale-100">
                  <div className="flex items-center justify-center h-full ">
                    <p className="text-white text-5xl">
                      +{post.imageUrls.length - 3}{" "}
                    </p>
                  </div>
                </div>
              )}

              {post.imageUrls.length > 2 && (
                <img
                  src={post.imageUrls[2].imageUrl}
                  className="h-full rounded-2xl object-cover "
                />
              )}
            </div>
          )}
        </div>
        {/*post detail*/}
        <div className="h-full w-full  pl-4  space-y-2 pb-2 pt-1 bg-white">
          <div className="flex  flex-col">
            <p className="text-sm font-medium">{post.title}</p>
            <div className="flex space-x-1">
              {post.tags.slice(0, 3).map((tag) => (
                <p
                  key={tag}
                  className="text-blue-900 bg-blue-300 rounded-xl px-1 underline text-xs "
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
          {post.author ? (
            <div className="flex space-x-2">
              <img
                src={post.author.profilePicture}
                alt=""
                className="h-8 w-8 rounded-full"
              />
              <p className="mt-1 text-xs">{post.author.name}</p>
            </div>
          ) : (
            <div className="flex space-x-2">
              <img
                src={
                  "https://wallpapers.com/images/hd/random-pfp-with-sunglasses-and-hearts-9cjm5zicnjcogsa2.jpg"
                }
                alt=""
                className="h-8 w-8 rounded-full"
              />
              <p className="mt-1 text-xs">{"dummyUserName"}</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
