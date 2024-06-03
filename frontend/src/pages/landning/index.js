import { Link } from "react-router-dom"
import HERO_IMG from "../../assets/hero_img.png"
import CHAT_BOT from "../../assets/chat-bot.gif"
import { useState } from "react"
const Landing = ()=>{
    const [frame,setFrame]=useState(false)
    const openFrame=()=>{
         if(!frame)
            setFrame(true);
         else 
            setFrame(false);
    }
    return(
        <>
    <header>
         <div className="flex justify-around py-8 pr-4 ">
           <div style={{fontFamily: "'Lobster', sans-serif"}} className="text-5xl text-primary"><h2>Chat-Serve</h2></div>
            <nav style={{fontFamily:"'Open Sans', sans-serif"}} className="flex justify-center items-center w-1/3">  
               <ul className="flex justify-between w-3/4">
               <Link to="/"><li className="text-xl hover:text-orange-500">Home</li></Link>
               <Link to="/"><li className="text-xl hover:text-orange-500">About</li></Link>
               <Link to="/"><li className="text-xl hover:text-orange-500">Blog</li></Link>
               <Link to="/"><li className="text-xl hover:text-orange-500">Contact</li></Link>
               </ul>
            </nav>
            <div style={{fontFamily:"'Open Sans', sans-serif"}} className="flex justify-evenly items-center ">
             <Link to="/login"><span className="text-lg cursor-pointer bg-orange-500 ring-2 ring-orange-600 rounded-lg px-7 py-2 hover:bg-orange-400">LogIn</span></Link>
            </div>
         </div>
         <div className="flex items-center justify-around my-24 px-4">
            <div className="mt-16 flex flex-col items-start">
                <h1 style={{width:"50rem"}} className="text-7xl text-primary font-semibold">Chat-Serve: Elevate Your Dining, Effortless Service Await!</h1>
                <p style={{width:"35rem"}} className="mt-4 text-2xl text-gray-500">Revolutionize Dining Experience With Our ChatBot-Powered Wireless Service-Seamless, Smart, and Swift!</p>
                <Link to="/signup" className="mt-12"><span className="text-xl cursor-pointer bg-orange-500 ring-2 ring-orange-600 rounded-lg px-8 py-4 hover:bg-orange-400">SignUp</span></Link>
            </div>
            <div>
            <img src={HERO_IMG} alt="" />
            </div>
         </div>
         <div style={{display:"flex",justifyContent:"flex-end",marginRight:"30px"}}>
            {
              frame?<div style={{position:"absolute",top:"30%",right:"5%"}}>
              <iframe title="Chat-Serve" width="350" height="500" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/b493af1b-334a-4416-b628-adc497f7eb2a"></iframe>
              </div>:""
            }
            
            <img src={CHAT_BOT} alt="" style={{width:"150px",height:"150px",cursor:"pointer"}} onClick={openFrame}/>
         </div>
    </header>
        </>
    )
}

export default Landing