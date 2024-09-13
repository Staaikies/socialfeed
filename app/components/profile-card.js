import Image from "next/image";
import Avatar from "../img/Avatar.png";

import { PostsAndLikes, Button } from "./common";

const DepartmentPill = ({department}) => {
  let colorClasses; 
  if(department.toLowerCase() === "engineering") {
    colorClasses = "bg-sky-100 text-sky-700"
  } else if (department.toLowerCase() === "hr") {
    colorClasses = "bg-green-50 text-green-700"
  }
  return (
    <span className={`pl-2 pt-1 pr-2 pb-1 ${colorClasses} text-center rounded-full font-bold`}>{department}</span>
  )
}

const ProfileCard = () => {
  return (
    <div className="bg-white drop-shadow-md rounded relative min-h-48">
      <div className="h-10 bg-gradient-to-r from-metaversal-light-purple to-metaversal-light-peach rounded-t"></div>
      <div className="grid grid-cols-4 grid-rows-1 content-center">
        <div className="lg:col-span-1 col-span-full -mt-14 lg:-mt-6">
          <Image 
            className="border-solid border-white border-4 rounded-full drop-shadow-md ml-auto mr-auto"
            src={Avatar}
            alt="Avatar"
            width={80}
            height={38}
            priority
          />
        </div>
        <div className="pt-4 pl-2 pr-2 col-span-full lg:col-span-3 text-center lg:text-left">
          <h4 className="text-xl text-black">Skylar Dryden</h4>
          <span className="text-sm text-black">@emilys New York, United States</span>
          <div className="col-span-full">
            <DepartmentPill department="Engineering" />
          </div>
          <div className="col-span-full">
          <PostsAndLikes posts="100" likes="3455" />
          </div>
        </div>
      </div>
      <div className="p-2 w-full border-solid border-slate-50 border-t-2 bg-gradient-to-b from-white to-slate-50 rounded-b">
        <Button size="large">Follow</Button> <button>Message</button>
      </div>
    </div>
  );
}

export default ProfileCard;