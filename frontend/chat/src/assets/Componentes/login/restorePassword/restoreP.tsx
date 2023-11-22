import { MouseEventHandler } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";


export function RestoreModal(propis: {
    onClose: MouseEventHandler | undefined,
    show: unknown,
  }) {
   
    return (
        <>
        <div className="fixed left-0 top-0 right-0 bottom-0 flex items-center justify-center">
            <div className="cont-modal fixed bg-[#101015] rounded justify-center p-5 w-[17rem] h-[16rem]">
                <h3 className="text-white text-center mb-3">
                    Set you new password
                </h3>
                    <input type="password"
                    required
                    name="password"
                    placeholder="New Password"
                     className="bg-transparent border-moving-input text-gray-500 p-2" />
                <h3 className="text-white  text-center my-3">
                    Repet your password
                </h3>
                    <input type="password" 
                    required
                    name="password"
                    placeholder="Password"
                    className="bg-transparent border-moving-input text-gray-500 p-2"/>
                <div className="mt-3 flex  mt-6">
                <button className="">
                <AiOutlineSend size={20}/>
                </button>
                </div>
                <button onClick={propis.onClose} 
                  className="text-white lg:mt-2">
                      <IoIosCloseCircleOutline size={21}/>
                  </button>
            </div>
        </div>
        </>
    )
}