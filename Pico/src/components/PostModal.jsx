import { useRef, useState } from "react"
import { MdDelete } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useMutation,useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useCreatePostHook from "@/hooks/useCreatePostHook";


const PostModal = ({imageUrls, removeImages}) => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const [tags, setTags] = useState([])
    const  tagRef = useRef(null)
    const {mutate} = useCreatePostHook();

  //Function for adding tags
  const addTags = (tag) => {
    if(/^\s*$/.test(tag) || /[^\w\s]/.test(tag)) {
      return
    }
    const processedTag = "#" + tag.replace(/\s/g, '_').toLowerCase()
    if(tags.includes(processedTag) || tags.length >= 5) {
      return
    }
    setTags([...tags, processedTag])
    tagRef.current.value = ''
  }

//Function for removing tags
  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag))
    
  }


const onSubmit = (data) => {
  const postData = {
    title: data.title,
    description: data.description,
    tags: tags,
    imageUrls: imageUrls,
    postedBy: {
      userName:'dummyUserName',
      profile:'https://www.shutterstock.com/image-illustration/male-profile-picture-silhouette-avatar-260nw-149290403.jpg'

    }
  }
  console.log(postData)
  mutate(postData)


}

  return (
    <div> <dialog id="my_modal_3" className="modal">
    <div className="modal-box w-max">
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <div>
        <form action="" className="flex flex-col space-y-2 font-medium" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">Title</label>
            <input {...register('title',{pattern: /^[a-zA-Z\s]*$/ , })} maxLength={50} required onKeyDown={(e) => e.key === 'Enter' ? e.preventDefault() : null}  type="text" name="title" id="title" className="h-10 w-96 rounded-xl pl-3 mr-1 bg-slate-200" />
            <label htmlFor="description">Description</label>
            <textarea {...register('description')}  maxLength= {200} name="description" id="" cols="10" rows="10" className="h-24 w-96 rounded-xl pl-3 mr-1 bg-slate-200"></textarea>
            <label htmlFor="tags">Tags</label>
            <div className=" flex">
                          <input onKeyDown={(e) => e.key === 'Enter' ? e.preventDefault() : null} maxLength={15} ref={tagRef} type="text" name="tags" id="tags" className="h-10 w-36 rounded-xl pl-3 mr-1 bg-slate-200" />
            <div onClick={() => addTags(tagRef.current.value)} className="w-10 h-10 bg-slate-200 rounded-full flex justify-center items-center cursor-pointer">+</div>
            </div>
            {tags.length === 5 && <p className="text-red-500">Max number of tags reached.</p>}
            <div className="flex  flex-wrap space-x-1 space-y-1">
              {tags.map(tag=> <div className="relative group ">
                <div  onClick={() => removeTag(tag)} className=" absolute right-0 left-auto group-hover:scale-100 scale-0 cursor-pointer hover:bg-slate-200 w-5 h-5 bg-slate-200 rounded-full flex justify-center items-center -mt-2  -mr-2">x</div>
                <p className="text-blue-500 bg-blue-300 rounded-full p-1 pt-0 underline w-max">{tag}</p>
                </div>)}
            </div>
            <label htmlFor="image">Images</label> {
                imageUrls.length === 0 && <p className="text-red-500">Please upload at least one image</p>
              }
            <div className=" grid grid-cols-3 gap-4">      
            {imageUrls.map(imageUrl =><div key={imageUrl.imagePublicId} className="w-32 h-32 relative group" > 
            <div className="absolute rounded-full  bg-red-800 right-0 left-auto text-white font-medium  p-1 hover:bg-red-600 cursor-pointer  scale-0 group-hover:scale-100" onClick={() => removeImages(imageUrl)}><MdDelete/></div> 
            <img src={imageUrl.imageThumbnailUrl} className="w-full h-full rounded-lg"  alt="" />
            </div>)}
                        </div>

          
            <button className="btn btn-primary w-max" disabled={imageUrls.length === 0} type="submit">Post</button>
        </form>
      </div>
    </div>
  </dialog>  </div>
  )
}

export default PostModal