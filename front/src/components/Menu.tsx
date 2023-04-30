import React from 'react'
import Link from 'next/link'
import { BsChevronDown } from 'react-icons/bs'

interface MenuProps {
  showCat: boolean
  setShowCat: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
}

export function Menu ({ showCat, setShowCat, isOpen }: MenuProps) {
  const data = [
    {id: 1, name: 'Inicio', url: '/'},
    {id: 2, name: 'Nosotros', url: '/nosotros'},
    {id: 3, name: 'Categorías', subMenu: true},
    {id: 4, name: 'Contacto', url: '/contacto'}
  ]

  const subMenuData = [
    {id: 1, name: 'Old School', url: '/category/old-school'},
    {id: 2, name: 'Running', url: '/category/running'},
  ]

  const showSubMenu = (e: any) => {
    e.stopPropagation()
    if (window.innerWidth < 768) {
      setShowCat(!showCat)
    }
  }
  return (
    <ul
      className={`
      absolute top-[50px] min-h-[calc(100vh-50px)] left-0 right-0 bg-white z-10 flex flex-col justify-start gap-5 px-5 pt-10 text-black font-medium transition-transform duration-300 -translate-x-full
      md:flex md:items-center md:gap-8 md:static md:min-h-max md:flex-row md:pt-0 md:-translate-x-0 ${isOpen ? 'translate-x-0' : ''}
      `}
    >
      {data.map(item => (
        <React.Fragment
          key={item.id}
        >
          {item.subMenu
            ? (
              <li
                className='cursor-pointer flex items-center gap-2 relative py-4 md:py-0'
                onMouseEnter={() => setShowCat(!showCat)}
                onMouseLeave={() => setShowCat(!showCat)}
                onClick={showSubMenu}
                >
                {item.name}
                <BsChevronDown 
                  size={14}
                  className={`transform transition-transform duration-300 ${showCat ? 'rotate-180' : ''}`}
                />

                {showCat && (
                  <ul
                    className='bg-white absolute top-14 md:top-6 left-0 min-w-[250px] p-1 text-black shadow-lg rounded-md'
                  >
                    {subMenuData.map(subItem => (
                      <Link
                        key={subItem.id}
                        href={subItem.url}
                      >
                        <li
                          className='cursor-pointer h-12 flex items-center justify-between px-3 hover:bg-black/[0.03] rounded-md'
                        >
                          {subItem.name}
                          <span className='opacity-50 text-sm'>12</span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            )
            : (
              <Link href={item.url ?? ''}>
                <li className='cursor-pointer py-4 md:py-0'>{item.name}</li>
              </Link>
            )
          }
        </React.Fragment>
      ))}
    </ul>
  )
}
