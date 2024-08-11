import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'


const Navbar = () => {
 
  return (
    <header className='flex justify-between item-center w-full py-5 px-5 sm:px-10' >
      <nav className='flex w-full screen-max-width'>
        <img src={appleImg} alt="Apple Img" width={14} height={18} />

        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navLists.map((nav) => (
            <div key={nav} className=' px-5 cursor-pointer text-gray text-sm hover:text-white transition:all'>
              {nav}
            </div>
          ))}
        </div>


        <div className='flex items-baseline gap-7 max-sm:flex-1  cursor-pointer max-sm:justify-end'>
          <img src={searchImg} alt="searching" height={18} width={18} />
          <img src={bagImg} alt="bag Img" height={18} width={18} />
        </div>
        <div></div>
      </nav>
    </header>
  )
}

export default Navbar
