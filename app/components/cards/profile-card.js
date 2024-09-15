import Image from "next/image";
import Avatar from "../../img/Avatar.png";
import { Button } from "../common";

const PostsAndLikes = ({posts, likes}) => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 content-center min-w-32 max-w-32">
      <div>
        <p className="text-lg w-full font-bold">{posts}</p>
        <p className="text-xs uppercase text-slate-600">Posts</p>
      </div>
      <div>
        <p className="text-lg w-full font-bold">{likes}</p>
        <p className="text-xs uppercase text-slate-600">Likes</p>
      </div>
    </div>
  )
}

const ProfileCard = ({firstName, lastName, username, address, department, posts, }) => {
  return (
    <div className="mb-8 bg-white drop-shadow-sm rounded-xl border-2 border-solid border-slate-100 relative min-h-48 max-w-full">
      <div className="h-11 bg-gradient-to-r from-metaversal-light-purple to-metaversal-light-peach rounded-t-xl"></div>
      <div className="grid grid-cols-6 grid-rows-1 content-center md:pl-3 md:pr-3">
        <div className="md:col-span-1 col-span-full -mt-16 md:-mt-6">
          <Image 
            className="border-solid border-white border-4 rounded-full drop-shadow-md ml-auto mr-auto"
            src={Avatar}
            alt="Avatar"
            width={90}
            height={38}
            priority
          />
        </div>
        <div className="pl-2 pt-2 pr-2 pb-5 col-span-full md:col-span-5 text-center md:text-left">
          <h4 className="text-xl text-black font-bold">{firstName} {lastName}</h4>
          <p className="text-sm text-slate-600 md:inline">@{username}</p>
          <p className="text-sm text-slate-600 md:inline md:ml-1"><i className="icon icon--location"></i>{address.city}, {address.country}</p>
          <div className="col-span-full mt-1 mb-3">
            <span className={`pl-2.5 pt-1 pr-2.5 pb-1.5 bg-sky-100 text-sky-700 text-center rounded-xl text-sm font-bold`}>{department}</span>
          </div>
          <div className="col-span-full">
            <div className="w-fit ml-auto mr-auto md:ml-0 md:mr-0">
              <PostsAndLikes posts={posts.length} likes={posts.reduce((sum, post) => sum + post.reactions.likes, 0)} />
            </div>
            
          </div>
        </div>
      </div>
      <div className="p-2.5 w-full border-solid border-slate-100 border-t-2 bg-gradient-to-b from-white to-slate-50 rounded-b-xl text-center md:text-left">
        <Button size="large">Follow</Button> <Button style="secondary">Message</Button>
      </div>
    </div>
  );
}

export default ProfileCard;