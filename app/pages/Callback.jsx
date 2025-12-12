
import Link from "next/link";
import { Globe, Mail } from "lucide-react";

const Callback = () => {


  return (


    <div className='border-2 flex flex-col bg-black font-inter pt-5'>



      <div className=' animateabout flex items-center flex-col'>
        <h1 className='text-3xl text-zinc-400 font-black tracking-widest mt-10'>( Your Advantage starts here )</h1>
        <h1 className='text-9xl text-white font-black mt-10 mb-20'>LET'S MAKE <br /> <strong className='pl-11'>
          IT HAPPEN
        </strong>
        </h1>

        <Link href="#contact">
          <button className=' text-2xl text-white tracking-widest border border-gray-700 rounded-full p-5 bg-gray-950 cursor-pointer 
               hover:scale-105 transition-all ease-in duration-200 pl-10 pr-10
            
            '>Contact Now</button>
        </Link>
      </div>

      <div className='animateabout p-10 flex flex-row justify-between items-center mt-7'>

        <div className='text-xl text-zinc-200 border border-gray-700 bg-gray-950 flex items-center gap-3 rounded-xl p-7 '>
          <Globe size={24} />
          ✦ Available Globally
        </div>

        <div className='text-zinc-400 text-sm flex items-start gap-3'>
          <Mail size={20} className="mt-1" />
          <div>
            Drop an email <br />
            <strong className='text-lg text-zinc-300'>zainulabdin.atd@gmail.com</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Callback