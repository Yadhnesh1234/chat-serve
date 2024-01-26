import IMG_404 from '../assets/img_404.png'

const NoMatch=()=>{
   return(
      <>
    <div className="flex flex-col justify-center items-center h-screen">
    <img src={IMG_404} alt=""/>
    <h1 className="font-sans font-bold text-4xl opacity-50">Not Found</h1>
    </div>
      </>
   )
}

export default NoMatch