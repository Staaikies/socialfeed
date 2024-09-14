import Link from "next/link";

const TitleBar = ({title, href}) => {
  return (
    <div className="flex justify-between items-center h-12 z-10  bg-white drop-shadow-sm sticky top-0 left-0 right-0">
      {href ?
      <Link href={href} className="back-button p-6 text-center"><i className="icon icon--chevron-left"></i></Link>
      : <div></div>}
      
      <h2 className="text-lg font-bold">{title}</h2>
      <div></div>
    </div>
  )
}

export default TitleBar;