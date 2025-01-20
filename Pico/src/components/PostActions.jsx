import useDeletePost from "@/hooks/useDeletePost";
import { useAuth0 } from "@auth0/auth0-react";
import { Copy, EllipsisVertical, Share, Trash } from "lucide-react";
import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
} from "react-share";

const PostActions = ({ postId, isAuthor }) => {
  const DeletePost = useDeletePost();

  const currentLink = window.location.href;
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className=" m-1">
        <EllipsisVertical strokeWidth={3} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        {isAuthor && (
          <li>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className=" items-center w-full h-full flex gap-1 text-red-500 hover:text-white hover:bg-red-500 font-bold"
              onClick={() =>
                document.getElementById("delete_modal").showModal()
              }
            >
              <Trash size={18} /> Delete Post
            </button>
          </li>
        )}

        <li>
          <button
            className=""
            onClick={() => document.getElementById("share_modal").showModal()}
          >
            <Share /> Share
          </button>
        </li>
      </ul>

      <dialog id="share_modal" className="modal">
        <div className="modal-box flex flex-col gap-2">
          <h3 className="font-bold text-lg">Share </h3>
          <div className=" flex justify-between">
            <FacebookShareButton url={currentLink} className=" rounded-full">
              <FacebookIcon className=" rounded-full size-10" />
            </FacebookShareButton>

            <PinterestShareButton url={currentLink}>
              <PinterestIcon className=" rounded-full size-10" />
            </PinterestShareButton>
            <TelegramShareButton url={currentLink}>
              <TelegramIcon className=" rounded-full size-10" />
            </TelegramShareButton>
            <button
              className=" bg-slate-700 text-white  size-10 rounded-full flex items-center justify-center"
              onClick={() => {
                navigator.clipboard.writeText(currentLink);
                document.getElementById("share_modal").close();
              }}
            >
              <Copy />
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="delete_modal" className="modal ">
        <div className="modal-box h-min  flex flex-col ">
          <p className=" font-bold ">Confirm deletion</p>
          <div className="modal-action">
            <form method="dialog " className=" gap-5 p-0 flex ">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn-error btn "
                onClick={(e) => {
                  e.preventDefault();

                  DeletePost.mutate(postId);
                }}
              >
                Delete
              </button>
              <button
                className="btn "
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("delete_modal").close();
                }}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PostActions;
