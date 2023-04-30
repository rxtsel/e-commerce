import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
// import Image from 'next/image'
import { BiArrowBack } from 'react-icons/bi'

export function HeroBanner () {
  const images = [
    'https://media.gq.com/photos/63d847ef0dad895db53c8686/16:9/w_960,c_limit/3525-12D%20TIF%20RGB%20801264-01_SP23_Project212_TM_Shot%2012_038_main.jpg',
    'https://media.gq.com/photos/630549f10b7945eccee17e25/16:9/w_1600,c_limit/summerofsamba.jpg',
    'https://media.gq.com/photos/644bd98139f062c6af6bdfbb/16:9/w_1600%2Cc_limit/adidas-sale-2023.jpg'
  ]

  type clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => void

  const handleNext = (clickHandler: clickHandler) => (
    <button
      type='button'
      onClick={clickHandler}
      className='absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity duration-300'
      title='next item'
    >
      <BiArrowBack
        className='text-sm md:text-lg rotate-180'
      />
    </button>
  )

  const handlePrev = (clickHandler: clickHandler) => (
    <button
      type='button'
      onClick={clickHandler}
      className='absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity duration-300'
      title='prev item'
    >
      <BiArrowBack
        className='text-sm md:text-lg'
      />
    </button>
  )

  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowNext={handleNext}
        renderArrowPrev={handlePrev}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              className='aspect-[16/10] md:aspect-auto object-cover select-none'
              src={image}
              alt='puede ser una imagen de un producto'/>

            <div
              className='px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90 transition-opacity duration-300'
            >Comprar ahora</div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
