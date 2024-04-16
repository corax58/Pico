import PostModal from "@/components/PostModal"
import TabBar from "../components/TabBar"
import { Outlet } from "react-router-dom"
import UploadWidget from "@/components/UploadWidget";
import { useReducer, useState } from "react"
import imageUrlsReducer from "@/reducers/imageUrlsReducer";




const NavigationLayout = () => {
const [imageUrls,dispatch] = useReducer(imageUrlsReducer,[]);

  const addImages = (image) => {
    dispatch({type:'ADD_IMAGE_URL', imageUrl:image})
  }
  const removeImages = (image) => {
    dispatch({type:'REMOVE_IMAGE_URL', imageUrl:image})

  
  }



  return (
    <div>
         <TabBar/>
      <Outlet/>
      <UploadWidget addImages={addImages} />
      {/* <button className="btn absolute  bottom-0 items-center right-1/2 mb-5 text-white bg-red-500 hover:bg-red-600" onClick={()=>{}}><FaPlus/></button> */}
     <PostModal imageUrls={imageUrls} removeImages={removeImages}/>
    </div>
  )
}

export default NavigationLayout