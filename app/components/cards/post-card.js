"use client";
import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Avatar from "../../img/Avatar.png";
import { PostStats } from "../common";


const PostCard = ({id, firstName, lastName, username, body, tags, likes, dislikes, views}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  let postContent = String(body);


  console.log(id);

  return (
    <div className="pt-4 drop-shadow-sm border-2 border-solid border-slate-100 rounded-xl mb-4">
      <div className="grid grid-cols-5">
        <div className="pl-4">
        <Link href={`/profile/${id}`}>
          <Image 
              className="rounded-full"
              src={Avatar}
              alt="Avatar"
              width={46}
              height={30}
              priority
            />
          </Link>
        </div>
        <div className="col-span-4 pr-4">
          <h4 className="text-lg font-bold">{firstName} {lastName}</h4>
          <p className="text-sm text-slate-600 mb-3.5">@{username}</p>
          {isExpanded ? postContent : `${postContent.substring(0, 150)}...`}
            {postContent.length > 80 && (
              <a href="#" onClick={toggleExpansion} className="text-metaversal-primary hover:underline text-nowrap ml-1">
                {isExpanded ? 'view less' : 'view more'}
              </a>
            )}
          <div className="grid grid-flow-col auto-cols-min gap-4 mt-2 mb-4">
            {tags ? tags.map((tag, index) => (
              <a href="#" key={index} className="text-metaversal-primary hover:underline">#{tag}</a>
            )) : ''}
          </div>
        </div>
      </div>
      <div className="p-4 w-full border-solid border-slate-100 border-t-2 rounded-b-xl grid grid-flow-col auto-cols-min gap-4">
        <PostStats likes={likes} dislikes={dislikes} views={views} />
      </div>
    </div>
  )
}

export default PostCard;