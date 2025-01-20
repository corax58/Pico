import { useEffect, useRef } from "react";
import { FaPlus } from "react-icons/fa";

const UploadWidget = ({ addImages }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: import.meta.env.VITE_CLOUD_NAME,
        uploadPreset: "mgobhkeo",
        sources: ["local", "camera"],
        defaultSource: "local",
        clientAllowedFormats: ["jpg", "png", "jpeg", "webp"],
        maxFiles: 10,
        styles: {
          palette: {
            window: "#FFFFFF",
            windowBorder: "#90A0B3",
            tabIcon: "#FF3434",
            menuIcons: "#5A616A",
            textDark: "#000000",
            textLight: "#FFFFFF",
            link: "#FF3D3D",
            action: "#FF620C",
            inactiveTabIcon: "#FFBABA",
            error: "#F44235",
            inProgress: "#FF5D5D",
            complete: "#20B832",
            sourceBg: "#FFF6F6",
          },
        },
      },
      function (error, result) {
        if (result.event === "close") {
          document.getElementById("my_modal_3").showModal();
        }
        if (result.event === "success") {
          addImages({
            imageUrl: result.info.url,
            imagePublicId: result.info.public_id,
            imageThumbnailUrl: result.info.thumbnail_url,
            imageHeight: result.info.height,
            imageWidth: result.info.width,
          });
        }
        if (error) {
          console.log(error);
        }
      }
    );
  }, []);
  return (
    <div className=" w-max fixed bottom-0 items-center  group left-1/2 -ml-6">
      <button
        onClick={() => widgetRef.current.open()}
        className=" p-4 rounded-full      items-center right-1/2 mb-5 text-white bg-red-500 hover:bg-red-600"
      >
        <span className="absolute -left-12 bg-red-400 w-max p-3 rounded-xl bottom-20  scale-0 group-hover:scale-100 transition-all duration-100 origin-bottom font-medium">
          Upload new album
        </span>
        <FaPlus />
      </button>
    </div>
  );
};

export default UploadWidget;
