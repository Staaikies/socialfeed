import Image from "next/image";
import Avatar from "../img/Avatar.png";

const PostCard = () => {
  return (
    <div className="p-3 drop-shadow-sm border-2 border-solid border-slate-100 rounded-lg">
      <div className="grid grid-cols-3">
        <div>
        <Image 
            className="rounded-full"
            src={Avatar}
            alt="Avatar"
            width={50}
            height={38}
            priority
          />
        </div>
        <div className="cols-span-2">
          <div>name</div>
          <div>content</div>
        </div>
      </div>
      <div>stats</div>
    </div>
  )
}

export default PostCard;