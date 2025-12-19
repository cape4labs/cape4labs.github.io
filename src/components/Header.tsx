import Image from 'next/image'


export default function Header() {
  return (
    <header className="flex flex-row bg-midnight w-full h-24 sticky justify-center font-primary font-bold">
      <div className="flex items-center justify-center p-3 bg-white text-midnight">
        <h1 className='font-bold text-4xl'>Cape⁴ <br />labs</h1>
      </div>
      <nav className='flex flex-row text-2xl w-[80%] text-center items-center'>

        <div className="p-2 w-1/5 h-full relative items-center text-start flex justify-center bg-midnight z-0">
          <h2 className='z-2 relative'>About <br /> cape⁴labs</h2>
          <Image src="/imgs/nav/first-nav-bg.png" alt='flower' width={100} height={100} className='absolute z-1 w-full h-full' unoptimized />
        </div>

        <Image alt='flower' src="/imgs/nav/first-nav-flower.png" width={100} height={100} className='w-1/20' unoptimized />

        <div className="p-2 w-1/5 h-full relative items-center text-start flex justify-center">
          <h2 className='z-1 relative'>About </h2>
          <Image src="/imgs/nav/second-nav-bg.png" alt='flower' width={100} height={100} className="absolute z-0 w-full h-full" unoptimized />
        </div>

        <Image src="/imgs/nav/second-nav-flower.png" alt='flower' width={100} height={100} className='w-1/20' />

        <div className="p-2 w-1/5 h-full relative items-center text-start flex justify-center">
          <h2 className='z-1 relative'>Where we can <br /> help you</h2>
          <Image src="/imgs/nav/third-nav-bg.png" alt='flower' width={100} height={100} className="absolute z-0 w-full h-full" unoptimized />
        </div>

        <Image src="/imgs/nav/third-nav-flower.png" alt='flower' width={100} height={100} className='' unoptimized />

        <div className="p-2 w-1/5 h-full relative items-center text-start flex justify-center">
          <h2 className='z-1 relative'>Contact</h2>
          <Image src="/imgs/nav/fourth-nav-bg.png" alt='flower' width={100} height={100} className="absolute z-0 w-full h-full" unoptimized />
        </div>

        <Image src="/imgs/nav/fourth-nav-flower.png" alt='flower' width={100} height={100} className='w-1/20' unoptimized />

      </nav>
    </header>
  )
}
