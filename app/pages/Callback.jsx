
import Link from "next/link";
import { Globe, Mail } from "lucide-react";

const Callback = () => {


  return (


    <div className='border-2 flex flex-col bg-black font-inter pt-5 px-4 sm:px-6 md:px-8'>



      <div className='animateabout flex items-center flex-col'>
        <h1 className='text-lg sm:text-2xl md:text-3xl text-zinc-400 font-black tracking-widest mt-6 sm:mt-8 md:mt-10 text-center'>( Your Advantage starts here )</h1>
        <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-black mt-6 sm:mt-8 md:mt-10 mb-12 sm:mb-16 md:mb-20 text-center leading-tight'>LET'S MAKE <br /> <strong className='pl-0 sm:pl-6 md:pl-11'>
          IT HAPPEN
        </strong>
        </h1>

        <Link href="#contact">
          <button className='text-base sm:text-lg md:text-xl lg:text-2xl text-white tracking-widest border border-gray-700 rounded-full p-4 sm:p-5 bg-gray-950 cursor-pointer 
               hover:scale-105 transition-all ease-in duration-200 px-8 sm:px-10
            
            '>Contact Now</button>
        </Link>
      </div>

      <div className='animateabout p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 mt-6 md:mt-7'>

        <div className='text-base sm:text-lg md:text-xl text-zinc-200 border border-gray-700 bg-gray-950 flex items-center gap-2 sm:gap-3 rounded-xl p-5 sm:p-6 md:p-7 w-full sm:w-auto'>
          <Globe size={20} className="sm:w-6 sm:h-6" />
          ✦ Available Globally
        </div>

        <div className='text-zinc-400 text-sm sm:text-base flex items-start gap-2 sm:gap-3 w-full sm:w-auto'>
          <Mail size={18} className="mt-1 sm:w-5 sm:h-5" />
          <div>
            Drop an email <br />
            <strong className='text-base sm:text-lg text-zinc-300'>zainulabdin.atd@gmail.com</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Callback