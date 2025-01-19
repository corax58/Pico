import useDeletePost from "@/hooks/useDeletePost";
import { EllipsisVertical, Trash } from "lucide-react";
import React from "react";

const PostActions = ({ postId }) => {
  const DeletePost = useDeletePost();
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className=" m-1">
        <EllipsisVertical strokeWidth={3} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className=" items-center w-full h-full flex gap-1 text-red-500 hover:text-white hover:bg-red-500 font-bold"
            onClick={() => document.getElementById("delete_modal").showModal()}
          >
            <Trash size={18} /> Delete Post
          </button>
        </li>
      </ul>
      <dialog id="delete_modal" className="modal ">
        <div className="modal-box h-min  flex flex-col ">
          <p className=" font-bold ">Confirm deletion</p>
          <div className="modal-action">
            <form method="dialog " className=" gap-5 p-0 flex ">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn-error btn "
                onClick={() => DeletePost.mutate(postId)}
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
