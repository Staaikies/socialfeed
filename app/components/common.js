export const Button = ({style, size, className, children}) => {
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
        ${className}
      `}>
      {children}
    </button>
  )
}

export const LoadingSpinner = () => {
  return (
    <div className="text-center">
      <div className="ml-auto mr-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]">
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
      </div>
      <p>Loading...</p>
    </div>
  )  
}

export const PostStats = ({likes, dislikes, views}) => {
  return (
    <div className="grid grid-flow-col auto-cols-max gap-4">
      <p className="post-stat text-sm text-slate-500 hover:text-slate-700 active:text-metaversal-primary">
        <i className="icon icon--thumbsup"></i>
        {likes}
      </p>
      <p className="post-stat text-sm text-slate-500 hover:text-slate-700 active:text-metaversal-primary">
        <i className="icon icon--share"></i>
        {dislikes}
      </p>
      <p className="post-stat text-sm text-slate-500">
        <i className="icon icon--eye"></i>
        {views}
      </p>
    </div>
  )
}

export const ErrorCard = ({error}) => {
  return (
    <div className="p-4 ml-auto mr-auto text-center content-center bg-white drop-shadow-sm rounded-xl border-2 border-solid border-slate-100 relative min-h-48 max-w-64 lg:max-w-full">
      <i className="icon icon--error"></i>
      <h4 className="text-lg font-bold mt-2">{error.toString()}</h4>
      <p className="text-slate-500">We're so sorry but it's for the test.</p>
    </div>
  )
}