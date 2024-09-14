"use client";
import { useState } from 'react';
import Image from "next/image";
import Avatar from "../img/Avatar.png";
import { PostStats } from "./common";

const PostContent = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <p className="text-slate-600 mb-3">
      {isExpanded ? text : `${text.substring(0, 80)}...`}
      {text.length > 80 ?
      <a href="#" onClick={toggleExpansion} className="text-metaversal-primary hover:underline text-nowrap ml-1">
        {isExpanded ? 'view less' : 'view more'}
      </a>
      : ""}
      
    </p>
  );
};

const PostCard = () => {
  return (
    <div className="pt-4 drop-shadow-sm border-2 border-solid border-slate-100 rounded-xl">
      <div className="grid grid-cols-5">
        <div className="pl-4">
        <Image 
            className="rounded-full"
            src={Avatar}
            alt="Avatar"
            width={46}
            height={30}
            priority
          />
        </div>
        <div className="col-span-4 pr-4">
          <h4 className="text-lg font-bold">Skylar Dryden</h4>
          <p className="text-sm text-slate-600 mb-3.5">@emilys</p>
          <PostContent text="Post body lorem ipsum dolor sit amet consectetur. Sem vestibulum massa lacus interdum enim fringilla." />
          <div className="grid grid-flow-col auto-cols-min gap-4 mb-4">
            {/* TODO: Map over tags */}
            <a href="#" className="text-metaversal-primary hover:underline">#tag1</a>
            <a href="#" className="text-metaversal-primary hover:underline">#tag2</a>
            <a href="#" className="text-metaversal-primary hover:underline">#tag3</a>
          </div>
        </div>
      </div>
      <div className="p-4 w-full border-solid border-slate-100 border-t-2 rounded-b-xl grid grid-flow-col auto-cols-min gap-4">
        {/* TODO: will need to pass in the stats here to be mapped over. */}
        <PostStats />
      </div>
    </div>
  )
}

export default PostCard;