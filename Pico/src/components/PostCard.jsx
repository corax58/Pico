import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <Link to={`/post/${post._id}`} className="  break-inside-avoid w-full ">
      <div className=" shadow-lg bg-slate-50   w-full h-max  hover:shadow-2xl rounded-3xl overflow-hidden   hover:scale-y-[1.02] hover:scale-x-[1.02] transition-all duration-200 ">
        <div className=" h-max w-full bg-white  p-2 pb-0">
          {post.imageUrls.length < 2 ? (
            <div className="h-full w-full rounded-2xl overflow-hidden  relative justify-center">
              {post.imageUrls[0].imageHeight ? (
                <div className=" w-full  ">
                  <img
                    src={post.imageUrls[0].imageUrl}
                    className="w-full absolute rounded-2xl "
                  />
                  <div
                    className="  bg-slate-300"
                    style={{
                      width: "100%",

                      aspectRatio:
                        post.imageUrls[0].imageWidth /
                        post.imageUrls[0].imageHeight,
                    }}
                  ></div>
                </div>
              ) : (
                <img
                  src={post.imageUrls[0].imageUrl}
                  className="w-full rounded-2xl "
                />
              )}
            </div>
          ) : (
            <div className=" relative grid grid-cols-2   grid-flow-col gap-1 bg-white h-full overflow-hidden rounded-2xl group">
              {post.imageUrls[0].imageHeight ? (
                <div
                  className={
                    "h-full relative rounded-2xl   overflow-clip " +
                    (post.imageUrls.length > 2 ? " row-span-2" : "")
                  }
                >
                  <img
                    src={post.imageUrls[0].imageUrl}
                    className="absolute  h-full  rounded-2xl   object-cover "
                  />
                  <div
                    className="  bg-slate-300"
                    style={{
                      width: "100%",
                      height: "100%",

                      aspectRatio:
                        post.imageUrls[0].imageWidth /
                        post.imageUrls[0].imageHeight,
                    }}
                  ></div>
                </div>
              ) : (
                <img
                  src={post.imageUrls[0].imageUrl}
                  className="w-full rounded-2xl "
                />
              )}

              {post.imageUrls[1].imageHeight ? (
                <div className=" w-full  ">
                  <img
                    src={post.imageUrls[1].imageUrl}
                    className="h-full absolute rounded-2xl "
                  />
                  <div
                    className=" rounded-2xl bg-slate-300"
                    style={{
                      width: "100%",

                      aspectRatio:
                        post.imageUrls[1].imageWidth /
                        post.imageUrls[1].imageHeight,
                    }}
                  ></div>
                </div>
              ) : (
                <img
                  src={post.imageUrls[1].imageUrl}
                  className="w-full rounded-2xl "
                />
              )}

              {post.imageUrls.length > 2 && (
                <div className=" absolute bg-black h-full rounded-2xl  w-full opacity-50 items-center justify-center scale-0 group-hover:scale-100">
                  <div className="flex items-center justify-center h-full ">
                    <p className="text-white text-5xl">
                      +{post.imageUrls.length - 2}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        {/*post detail*/}
        <div className="h-full w-full bg-white p-3 flex flex-col gap-1">
          <div className="flex  flex-col">
            <p className=" font-semibold pl-2 trunicate">{post.title}</p>
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

          <div className="flex gap-2 items-center ">
            <img
              src={post.author.profilePicture}
              alt=""
              className="h-8 w-8 rounded-full"
            />
            <div>
              <p className="text-sm">{post.author.name}</p>
              <p className=" text-xs ">{post.createdAt.slice(0, 10)}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
