import { BiMessageRoundedDetail} from "react-icons/bi";
import { Link } from "react-router-dom";
import { RiPhoneLine } from "react-icons/ri";
import { FaRegSun } from "react-icons/fa";

function Nav (){
    return(
        <>
        <div className="text-white border border-stone-700 w-[60px] h-screen bg-[#161616] opacity-95 " >
        <div className="ml-[5px] pt-10 ...">
         <Link to="/chat" className=" text-[#B80E65] text-4xl hover:text-[#f472b6] active:text-[#f472b6] focus:outline-none  focus:text-[#f472b6] ">
            <BiMessageRoundedDetail/>
         </Link>
         <Link to="" className=" text-4xl text-[#B80E65] hover:text-[#f472b6] active:text-[#f472b6] focus:outline-none  focus:text-[#f472b6]">
            <RiPhoneLine/>
         </Link>
        </div>
        <div className="ml-[7%]">
        <a href="#" className=" text-4xl absolute bottom-16 text-[#B80E65] hover:text-[#f472b6] active:text-[#f472b6] focus:outline-none  focus:text-[#f472b6]">
            <FaRegSun/>
         </a> 
         <a href="#" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlVcXrm9fqNaAC8VTQIrGsfGsfQacAHWUHSQ&usqp=CAU" alt="" className="w-10 h-10  rounded-full text-4xl absolute bottom-4 " /></a>
        </div>
        </div>


        </>
    )
}
export default Nav;