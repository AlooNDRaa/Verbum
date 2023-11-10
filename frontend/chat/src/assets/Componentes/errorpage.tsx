import { Link } from 'react-router-dom'
import Logo from '../imgs/verbumlog.png'

export function Error404() {
    return (
        <>
        <div className="bg-[#101015] h-screen text-white">
           <div className="">
            <img className='w-[30rem]' src={Logo} alt="Logo"/>
            <h1>
                Oops! Page not found...
            </h1>
           </div>
           <Link to='/home'>
            <button>
                back to home 
            </button>
           </Link>
           <div className=""></div>
        </div>
        </>
    )
}