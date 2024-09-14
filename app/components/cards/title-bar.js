const TitleBar = ({title}) => {
  return (
    <div className="flex justify-between items-center h-10 z-10 p-6 bg-white drop-shadow-sm sticky top-0 left-0 right-0">
      <a href="#"><i className="icon icon--chevron-left"></i></a>
      <h2 className="text-lg font-bold">{title}</h2>
      <div></div>
    </div>
  )
}

export default TitleBar;