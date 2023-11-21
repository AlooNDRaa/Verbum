import { MouseEventHandler } from "react"
import '../../../Styles/index.css'
import {IoIosCloseCircleOutline} from 'react-icons/io'
import { BiMailSend } from "react-icons/bi";

export function Modal(props: {
  onClose: MouseEventHandler | undefined,
  show: unknown,
  Onclick: undefined
}) {
  if (!props.show) {
      return null;
  }

  return (
      <div className="fixed left-0 top-0 right-0 bottom-0 flex items-center justify-center" onClick={props.onClose}>
          <div className="fixed inset-0  opacity-115 backdrop-filter backdrop-blur-3xl"></div>
          <div onClick={(e) => e.stopPropagation()} className="lg:w-[20%] lg:h-[13rem] flex z-40 bg-[#101015] flex-col p-4">
              <div className="p-2">
                  <h3 className="flex text-white lg:mb-2 justify-center">Restore your account</h3>
                  <p className="flex text-xs text-white justify-center">Please, enter your email</p>
              </div>
              <div className="p-2">
                  <input className="border-moving-input rounded lg:ml-2 justify-center p-3 bg-transparent text-white" 
                  type="email"
                  name="email"
                  required 
                  placeholder="Email" />
              </div>
              <div className="p-3  flex justify-around items-center">
                  <button onClick={props.onClose} 
                  className="text-white lg:mt-2">
                      <IoIosCloseCircleOutline size={21}/>
                  </button>
                  <button
                  onClick={props.Onclick}
                  type="button" 
                  className="text-white mt-2">
                    <BiMailSend size={21}/>
                  </button>
              </div>
          </div>
      </div>
  );
}
