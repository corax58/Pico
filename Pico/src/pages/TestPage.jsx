import React, { useEffect } from "react";

const TestPage = () => {
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src =
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg";
    if (img.width > img.height) {
      setWide(true);
    }
  });
  return (
    <div className=" grid grid-cols-3">
      <div></div>
    </div>
  );
};

export default TestPage;
