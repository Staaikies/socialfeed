export const Button = ({style, size, children}) => {
  return(
    <button type="button" className={`${size === ("small" || "sm") ? "text-sm" : "text-lg"} ${size === ("large" || "lg") ? "p-4" : "p-2"}`}>
      {children}
      {console.log(size)}
    </button>
  )
}

export const PostsAndLikes = ({posts, likes}) => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 content-center max-w-32 ml-auto mr-auto lg:ml-0 lg:mr-0">
      <div className="">
        <p className="text-lg w-full font-bold">{posts}</p>
        <p className="text-xs uppercase text-slate-700">Posts</p>
      </div>
      <div className="">
        <p className="text-lg w-full font-bold">{likes}</p>
        <p className="text-xs uppercase text-slate-700">Likes</p>
      </div>
    </div>
  )
}
