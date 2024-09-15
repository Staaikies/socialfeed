"use client";
import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Avatar from "../../img/Avatar.png";
import { PostStats } from "../common";


const PostCard = ({userId, firstName, lastName, username, body, tags, reactions, views}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  let postContent = String(body);

  return (
    <div className="pt-4 drop-shadow-sm border-2 border-solid border-slate-100 rounded-xl mb-4">
      <div className="flex">
        <div className="min-w-20 pl-4">
          <Link href={`/profile/${userId}`}>
            <Image 
              className="rounded-full hover:opacity-70"
              src={Avatar}
              alt="Avatar"
              width={50}
              height={36}
              priority
            />
          </Link>
        </div>
        <div className="grow pr-4">
          <Link href={`/profile/${userId}`}>
            <h4 className="text-lg font-bold hover:underline">{firstName} {lastName}</h4>
          </Link>
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
        <PostStats likes={reactions.likes} dislikes={reactions.dislikes} views={views} />
      </div>
    </div>
  )
}

export default PostCard;