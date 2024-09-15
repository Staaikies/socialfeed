import { Button } from "../common";
import Image from "next/image";
import Avatar from "../../img/Avatar.png";
import Link from "next/link";

export const UserCardSmall = ({id, firstName, lastName, username}) => {
  return (
    <Link href={`/profile/${id}`} className="p-4 drop-shadow-sm flex border-2 border-solid border-slate-100 hover:border-slate-300 hover:cursor-pointer rounded-xl transition-all duration-100 ease-linear">
      <div className="min-w-14">
        <Image 
          className="rounded-full hover:opacity-70"
          src={Avatar}
          alt="Avatar"
          width={46}
          height={30}
          priority
        />
      </div>
      <div className="grow">
        <h4 className="text-lg font-bold hover:underline">{firstName} {lastName}</h4>
        <p className="text-sm text-slate-600">@{username}</p>
      </div>
      <Button style="secondary" size="large" className="self-center justify-self-end col-start-6 col-end-6 z-10">Follow</Button>
    </Link>
  )
}