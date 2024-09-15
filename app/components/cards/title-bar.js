import Link from "next/link";

const TitleBar = ({title, href}) => {
  return (
    <div className="relative h-12 z-10 content-center bg-white drop-shadow-sm sticky top-0 left-0 right-0">
      {href && (
        <Link href={href} className="back-button pl-6 pt-2.5 pr-6 absolute top-0 bottom-0 left-0"><i className="icon icon--chevron-left"></i></Link>
      )}
      
      <h2 className="text-lg font-bold text-center">{title}</h2>
    </div>
  )
}

export default TitleBar;