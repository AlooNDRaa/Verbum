function AboutUs() {
  return (
    <div className='pl-4 lg:pl-12 pt-6 flex flex-col'>
      <div className="text-white ml-3 text-5xl lg:text-8xl mt-14">
        <h1 className="font-semibold">About <span className="text-pink-600">us</span>:</h1>
      </div>
      <div className="mt-8 flex flex-wrap lg:flex-nowrap lg:justify-bertween px-3">
        <div className="md:flex md:flex-col">
        <h2 className="text-xl lg:text-3xl text-white">
        We are a <span className="text-pink-600">team</span> that decided to venture
        into the design of <span className="text-pink-600">web aplications</span> and striking, <br/>
        delicate but interesting <span className="text-pink-600">designs</span>
        </h2>
        <h2 className=" text-xl lg:text-3xl text-white mt-2">
        <span className="text-pink-600">Within</span>  that journey, we <span className="text-pink-600">began</span> with the development of this project, a <span className="text-pink-600">chat</span>.
        </h2>
        </div>
      <div className="lg:mt-[19rem] mt-6 mr-4 xl:mt-60 ">
        <h2 className="text-xl lg:text-3xl text-white">
        <span className="text-pink-600">Maybe</span> as a user you <span className="text-pink-600">say</span>: "What's so <span className="text-pink-600">special</span> about it?"
        There are many <span className="text-pink-600">alike.</span>"
        </h2>
        <h2 className="text-xl lg:text-3xl text-white">
        <span className="text-pink-600">Well</span>, let me tell you, this is <span className="text-pink-600">not just</span> any chat. <br/>
        The <span className="text-pink-600">details</span> you will find here and the big <span className="text-pink-600">surprise</span> that awaits you, 
        (Only if you are <span className="text-pink-600">good</span> enough to <span className="text-pink-600">see</span> it), will surprise you.
        </h2>
      </div>
      </div>
      <div className="mt-5 pl-4 lg:mt-12 mb-7">
        <h2 className="text-xl lg:text-3xl text-white">
        <span className="text-pink-600">So</span> we cordially <span className="text-pink-600">invite</span> you to take on this great project <br/>
        and <span className="text-pink-600">have fun</span> with your <span className="text-pink-600">friends.</span>
        </h2>
      </div>
    </div>
  )
}

export default AboutUs