import PostModal from "@/components/PostModal";
import TabBar from "../components/TabBar";
import { Outlet } from "react-router-dom";
import UploadWidget from "@/components/UploadWidget";
import { useReducer } from "react";
import imageUrlsReducer from "@/reducers/imageUrlsReducer";

const NavigationLayout = () => {
  const [imageUrls, dispatch] = useReducer(imageUrlsReducer, []);

  const addImages = (image) => {
    dispatch({ type: "ADD_IMAGE_URL", imageUrl: image });
  };
  const removeImages = (image) => {
    dispatch({ type: "REMOVE_IMAGE_URL", imageUrl: image });
  };

  return (
    <div className=" ">
      <TabBar />
      <Outlet />
      <UploadWidget addImages={addImages} />
      <PostModal imageUrls={imageUrls} removeImages={removeImages} />
    </div>
  );
};

export default NavigationLayout;
