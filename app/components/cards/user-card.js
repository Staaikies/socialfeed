import { PostsAndLikes } from "../common";
import { Button } from "../common";
import Image from "next/image";
import Avatar from "../../img/Avatar.png";

export const UserCard = () => {
  return (
    <div className="max-w-56 p-4 drop-shadow-sm border-2 border-solid border-slate-100 hover:border-slate-300 hover:cursor-pointer rounded-xl transition-all duration-100 ease-linear text-center">
      <Image 
        className="rounded-full ml-auto mr-auto mb-2"
        src={Avatar}
        alt="Avatar"
        width={46}
        height={30}
        priority
      />
      <h4 className="text-lg font-bold">Skylar Dryden</h4>
      <p className="text-sm text-slate-600 mb-4">@emilys</p>
      <div className="w-fit ml-auto mr-auto">
        <PostsAndLikes likes="223" posts="400" />
      </div>
    </div>
  )
}

export const UserCardSmall = () => {
  return (
    <div className="p-4 drop-shadow-sm grid grid-cols-6 gap-4 border-2 border-solid border-slate-100 hover:border-slate-300 hover:cursor-pointer rounded-xl transition-all duration-100 ease-linear">
      <Image 
        className="rounded-full"
        src={Avatar}
        alt="Avatar"
        width={46}
        height={30}
        priority
      />
      <div className="col-span-3">
        <h4 className="text-lg font-bold">Skylar Dryden</h4>
        <p className="text-sm text-slate-600">@emilys</p>
      </div>
      <Button style="secondary" size="large" className="self-center justify-self-end col-start-6 col-end-6">Follow</Button>
    </div>
  )
}