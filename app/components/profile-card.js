import Image from "next/image";
import Avatar from "../img/Avatar.png";



const ProfileCard = () => {
  return (
    <div className="bg-white rounded relative">
      <div className="h-10 bg-gradient-to-r from-metaversal-light-purple to-metaversal-light-peach rounded-t"></div>
      <div className="grid grid-cols-4 grid-rows-1">
        <div className="h-full">
          <Image 
            className="border-solid border-white border-4 rounded-full drop-shadow-md absolute top-8 left-2"
            src={Avatar}
            alt="Avatar"
            width={80}
            height={38}
            priority
          />
        </div>
        <div className="pt-4 pl-2 col-span-3">
          <h4 className="text-xl text-black">Skylar Dryden</h4>
          <span className="text-sm text-black">@emilys New York, United States</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;