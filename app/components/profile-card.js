import Image from "next/image";
import Avatar from "../img/Avatar.png";
import LocationIcon from "../img/icons/location-icon.svg";

import { PostsAndLikes, Button, Icon } from "./common";

const DepartmentPill = ({department}) => {
  let colorClasses; 
  if(department.toLowerCase() === "engineering") {
    colorClasses = "bg-sky-100 text-sky-700"
  } else if (department.toLowerCase() === "hr") {
    colorClasses = "bg-green-50 text-green-700"
  }
  return (
    <span className={`pl-2 pt-1 pr-2 pb-1 ${colorClasses} text-center rounded-full text-sm font-bold`}>{department}</span>
  )
}

const ProfileCard = () => {
  return (
    <div className="bg-white drop-shadow-sm rounded-xl border-2 border-solid border-slate-100 relative min-h-48 max-w-64 lg:max-w-full">
      <div className="h-11 bg-gradient-to-r from-metaversal-light-purple to-metaversal-light-peach rounded-t-xl"></div>
      <div className="grid grid-cols-4 grid-rows-1 content-center lg:pl-3 lg:pr-3">
        <div className="lg:col-span-1 col-span-full -mt-16 lg:-mt-6">
          <Image 
            className="border-solid border-white border-4 rounded-full drop-shadow-md ml-auto mr-auto"
            src={Avatar}
            alt="Avatar"
            width={90}
            height={38}
            priority
          />
        </div>
        <div className="pl-2 pt-2 pr-2 pb-5 col-span-full lg:col-span-3 text-center lg:text-left">
          <h4 className="text-xl text-black font-bold">Skylar Dryden</h4>
          <p className="text-sm text-slate-600 lg:inline">@emilys</p>
          <p className="text-sm text-slate-600 mb-1.5 lg:inline lg:ml-1"><Icon icon={LocationIcon} />New York, United States</p>
          <div className="col-span-full mb-3">
            <DepartmentPill department="Engineering" />
          </div>
          <div className="col-span-full">
            <div className="w-fit ml-auto mr-auto lg:ml-0 lg:mr-0">
              <PostsAndLikes posts="100" likes="3455" />
            </div>
            
          </div>
        </div>
      </div>
      <div className="p-2.5 w-full border-solid border-slate-100 border-t-2 bg-gradient-to-b from-white to-slate-50 rounded-b-xl text-center lg:text-left">
        <Button size="large">Follow</Button> <Button style="secondary">Message</Button>
      </div>
    </div>
  );
}

export default ProfileCard;