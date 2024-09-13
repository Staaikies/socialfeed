import Image from "next/image";

export const Button = ({style, size, children}) => {
  let buttonSize;
  if (size === "small" || "sm") {
    buttonSize = "text-sm pl-3 pt-1 pr-3 pb-1";
  } else if (size === "large" || "lg") {
    buttonSize = "text-lg pl-5 pt-3 pr-5 pb-3";
  } else {
    buttonSize = "text-md pl-2 pr-2";
  }

  return(
    <button 
      type="button" 
      className={`
        rounded-full ${buttonSize}
        ${style === "secondary" ? "text-metaversal-primary border-metaversal-primary border-2 border-solid hover:bg-violet-100" : "metaversal-btn-primary text-white font-bold"} 
        
      `}>
      {children}
    </button>
  )
}

export const PostsAndLikes = ({posts, likes}) => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 content-center max-w-32 ml-auto mr-auto lg:ml-0 lg:mr-0">
      <div className="">
        <p className="text-lg w-full font-bold">{posts}</p>
        <p className="text-xs uppercase text-slate-600">Posts</p>
      </div>
      <div className="">
        <p className="text-lg w-full font-bold">{likes}</p>
        <p className="text-xs uppercase text-slate-600">Likes</p>
      </div>
    </div>
  )
}

export const Icon = ({icon}) => {
  return (
    <Image src={icon} width={12} height={12} className="inline ml-1 mr-1" />
  )
}