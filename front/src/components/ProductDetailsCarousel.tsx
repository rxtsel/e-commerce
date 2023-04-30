import { BiArrowBack } from 'react-icons/bi'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export function ProductDetailsCarousel() {
  const images = [
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/7f2528f8-eca7-48d5-8ce1-ade41e06381b/calzado-talla-grande-blazer-mid-77-4VfSTd.png',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/2d3517db-f50e-4ba5-ad03-5530f2ea0919/calzado-talla-grande-blazer-mid-77-4VfSTd.png',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/78481c5f-1bf4-494a-aec6-e0fd8a40b01d/calzado-talla-grande-blazer-mid-77-4VfSTd.png'
  ]

  return (
    <div
      className='text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]'
    >
      <Carousel
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className='productCarousel'
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              className='aspect-[16/10] md:aspect-auto object-cover select-none md:max-h-[calc(95vh-80px)]'
              src={image}
              alt='puede ser una imagen de un producto'/>

          </div>
        ))}
      </Carousel>
    </div>
  )
}
