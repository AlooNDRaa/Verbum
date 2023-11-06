import { BiMessageRoundedDetail} from "react-icons/bi";
import { RiPhoneLine } from "react-icons/ri";
import { FaRegSun } from "react-icons/fa";

function Nav (){
    return(
        <>
        <div className="text-white border border-stone-700 w-10 h-screen bg-[#161616] opacity-95" >
        <div className="pt-10 ...">
         <a  href= "#"className=" text-[#B80E65] text-4xl " >
            <BiMessageRoundedDetail/>
            
         </a>
         <a href="#" className=" text-4xl text-[#B80E65]">       
            <RiPhoneLine/>
         </a>
      
        </div>
        <a href="#" className="text-4xl absolute bottom-16 text-[#B80E65] ">
            <FaRegSun/>
         </a> 
         <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlVcXrm9fqNaAC8VTQIrGsfGsfQacAHWUHSQ&usqp=CAU" alt="" className="w-10 h-10  rounded-full text-4xl absolute bottom-4 " /></a>
        </div>


        </>
    )
}
export default Nav;