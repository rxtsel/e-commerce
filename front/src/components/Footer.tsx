import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import { Wrapper } from './Wrapper'

export function Footer () {
  const facebookUser = 'rxtsel'
  const twitterUser = 'rxtsel'
  const youtubeUser = 'rxtsel'
  const instagramUser = 'rxtsel'
    return (
        <footer className="bg-black text-white pt-14 pb-3">
            <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
                {/* LEFT START */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* MENU START */}
                    <div className="flex flex-col gap-3 shrink-0">
                        <Link href="#" className="font-oswald font-medium uppercase text-sm cursor-pointer">
                          Newsletter 
                        </Link>
                        <Link href="#" className="font-oswald font-medium uppercase text-sm cursor-pointer">
                          Envíanos feedback
                        </Link>
                        <Link href="#" className="font-oswald font-medium uppercase text-sm cursor-pointer">
                          Descuentos
                        </Link>
                    </div>
                    {/* MENU END */}

                    {/* NORMAL MENU START */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <h3 className="font-oswald font-medium uppercase text-sm">
                              Obtén ayuda
                            </h3>
                            <Link href="#" className="text-sm text-white/[0.5] hover:text-white cursor-pointer transition-colors duration-300">
                              Estado del pedido
                            </Link>
                            <Link href="#" className="text-sm text-white/[0.5] hover:text-white cursor-pointer transition-colors duration-300">
                              Entrega 
                            </Link>
                            <Link href="#" className="text-sm text-white/[0.5] hover:text-white cursor-pointer transition-colors duration-300">
                              Devoluciones
                            </Link>
                            <Link href="#" className="text-sm text-white/[0.5] hover:text-white cursor-pointer transition-colors duration-300">
                              Métodos de pago
                            </Link>
                            <Link href="#" className="text-sm text-white/[0.5] hover:text-white cursor-pointer transition-colors duration-300">
                              Contáctanos
                            </Link>
                        </div>
                        {/* MENU END */}

                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <h3 className="font-oswald font-medium uppercase text-sm">
                              Sobre rxtsel shop
                            </h3>
                            <Link href="#" className="text-sm text-white/[0.5] hover:text-white cursor-pointer transition-colors duration-300">
                              Noticias
                            </Link>
                        </div>
                        {/* MENU END */}
                    </div>
                    {/* NORMAL MENU END */}
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-4 justify-center md:justify-start">
                    <Link
                      href={`https://facebook.com/${facebookUser}`}
                      target='_blank'
                      title='facebook'
                      className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer transition-colors duration-300"
                    >
                        <FaFacebookF size={20} />
                    </Link>
                    <Link
                      href={`https://twitter.com/${twitterUser}`}
                      target='_blank'
                      title='twitter'
                      className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer transition-colors duration-300"
                    >
                        <FaTwitter size={20} />
                    </Link>
                    <Link
                      href={`https://youtube.com/@${youtubeUser}`}
                      target='_blank'
                      title='youtube'
                      className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer transition-colors duration-300"
                    >
                        <FaYoutube size={20} />
                    </Link>
                    <Link
                      href={`https://instagram.com/${instagramUser}`}
                      target='_blank'
                      title='instagram'
                      className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer transition-colors duration-300"
                    >
                        <FaInstagram size={20} />
                    </Link>
                </div>
                {/* RIGHT END */}
            </Wrapper>
            <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* LEFT START */}
                <p className="text-[12px] text-white/[0.5] text-center md:text-left">
                    © {new Date().getFullYear()} rxtsel. Todos los derechos reservados.
                </p>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <Link href="#" className="text-[12px] text-white/[0.5] transition-colors duration-300 hover:text-white cursor-pointer">
                        Terminos de venta
                    </Link>
                    <Link href="#" className="text-[12px] text-white/[0.5] transition-colors duration-300 hover:text-white cursor-pointer">
                        Terminos de uso
                    </Link>
                    <Link href="#" className="text-[12px] text-white/[0.5] transition-colors duration-300 hover:text-white cursor-pointer">
                        Política de privacidad
                    </Link>
                </div>
                {/* RIGHT END */}
            </Wrapper>
        </footer>
    )
}
