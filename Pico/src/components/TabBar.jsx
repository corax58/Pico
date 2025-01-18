import { Link } from "react-router-dom";
const TabBar = () => {
  return (
    <div className=" w-full px-1">
      <div role="tablist" className="tabs  tabs-bordered">
        <a role="tab" className="tab" href="/">
          Fyp
        </a>
        <a role="tab" className="tab tab-active" href="/myalbums">
          Tab 2
        </a>
      </div>
    </div>
  );
};

export default TabBar;
