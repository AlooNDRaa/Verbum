import { FaEllipsisV } from "react-icons/fa";

function Buscador () {
    return (
        <>
        <div>
            <div className="text-3xl pl-3 flex items-stretch mt-3">
                Chats
                <a href="#" className="pl-28">
                 <FaEllipsisV/>   
                </a>  
            </div>
            <p className="pl-5 pt-5 ">
                <input type="text" className="sinbordefondo bg-stone-900 rounded-md" placeholder=" Search.." />
            </p>
                   
        </div>
        </>
    )
}
export default Buscador