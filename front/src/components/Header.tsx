import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Wrapper, Menu } from '@/components'
import { BsCart } from 'react-icons/bs'
import { BiMenuAltRight } from 'react-icons/bi'
import { VscChromeClose } from 'react-icons/vsc'

export function Header () {
  const [isOpen, setIsOpen] = useState(false)
  const [showCat, setShowCat] = useState(false)
  const [show, setShow] = useState('translate-y-0')
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow('-translate-y-[80px]')
      } else {
        setShow('shadow-sm')
      }
    } else {
      setShow('translate-y-0')
    }
    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY])

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper
        className='h-[60px] flex items-center justify-between'
      >
        <Link href='/'>
          <Image
            src='/logo.svg'
            className='w-[40px] md:w-[80px] aspect-square object-contain'
            width={40}
            height={40}
            alt='puede ser una imagen del logo de rxtsel'
          />
        </Link>

        <Menu
          showCat={showCat}
          setShowCat={setShowCat}
          isOpen={isOpen}
        />

        <div
          className='flex items-center gap-2 text-black'
        >
          {/* cart icon */}
          <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-black/[0.05] cursor-pointer relative'>
            <BsCart className='text-[15px] md:text-[20px]' />
            <span
              className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full flex justify-center items-center bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] px-[2px] md:px-[5px]'
            >
              2
            </span>
          </div>
          {/* end cart icon */}

          {/* burger icon */}
          <div
            className='md:hidden w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-black/[0.05] cursor-pointer relative -mr-2'
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen
              ? <BiMenuAltRight className='text-[15px] md:text-[20px]' />
              : <VscChromeClose className='text-[15px] md:text-[20px]' />
            }
          </div>
          {/* end burger icon */}
        </div>
      </Wrapper>
    </header>
  )
}
