export const HeroSection = () => {
  return (
    <div className="h-[60rem] px-8 flex items-center md:h-[35rem] md:items-start overflow-x-hidden ">
       <div className="bg-violet-200 border-2  h-[97%] w-[100%] rounded-lg p-4 relative flex flex-col justify-start items-start gap-4 md:w-[45rem] md:h-[30rem] md:justify-start md:mt-4">
          <h1 className="text-6xl font-extrabold w-[50%] md:w-[50%] md:text-7xl">
             Fast, Safe social payments
          </h1>
          <p className="w-[60%] text-xl font-semibold">
            Pay, get paid, grow a business, and more. Join 
            the tens of millions of people using ePurse
          </p>
          <button className="text-xl font-bold text-white bg-violet-900 p-2 rounded-lg">
            Signup
        </button>

        <img src="https://images.ctfassets.net/gkyt4bl1j2fs/5up9qIIl3KjCbKRNTo4rA0/dc90bd5478ba48d4109c54965c61f95b/home-hero.png?w=1600&h=1230&q=50&fm=webp&bg=transparent" alt="" className="md:absolute md:w-[35rem] md:top-20 md:right-[-20rem] rounded-lg"/>
       </div>
    </div>
  );
};
