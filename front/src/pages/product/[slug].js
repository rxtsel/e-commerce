import { IoMdHeartEmpty } from 'react-icons/io'
import { Wrapper, ProductDetailsCarousel } from '@/components'

export default function ProductDetail () { 
  const SIZES = [
    { id: 1, value: 7, label: '7 US' },
    { id: 2, value: 7.5, label: '7.5 US' },
    { id: 3, value: 8, label: '8 US' },
    { id: 4, value: 8.5, label: '8.5 US' },
    { id: 5, value: 9, label: '9 US' },
    { id: 6, value: 9.5, label: '9.5 US' },
  ]

  return (
    <div className='w-full md:py-20'>
      <Wrapper>
        <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
          {/* start left column */}
          <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
            <ProductDetailsCarousel />
          </div>
          {/* end left column */}

          {/* start right column */}
          <div className='flex-[1] py-3'>
            {/* PRODUCT TITLE */} 
            <h1
              className='text-[34px] font-semibold mb-2'
            >
              Nike Blazer
            </h1>

            {/* PRODUCT SUBTITLE */} 
            <h2
              className='text-lg font-semibold mb-5'
            >
              Unisex Shoes
            </h2>

            {/* PRODUCT PRICE */} 
            <p
              className='text-lg font-semibold mb-5'
            >
              $ 499.000 COP 
            </p>

            <p
              className='text-md font-medium text-black/[0.5]'
            >
              incl. envío
            </p>

            <span
              className='text-md font-medium text-black/[0.5] mb-20 block'
            >
              (Impuestos incluidos)
            </span>

            {/* PRODUCT SIZE RANGE */}
            <div className='mb-10'>
              {/* START HEADING */}
              <div className='flex justify-between mb-2'>
                <p className='text-md font-semibold'>Seleccione una talla</p>
                <button
                  type='button'
                  className='text-md font-semibold text-black/[0.5] cursor-pointer'
                >
                  Seleccione una guía
                </button>
              </div>
              {/* END HEADING */}

              {/* START SIZE */}
              <div
                className='grid grid-cols-3 gap-2'
              >
                {SIZES.map(({ id, value, label }) => (
                  <Size
                    key={id}
                    value={value}
                    label={label}
                  />
                ))}
              </div>
              {/* END SIZE */}
            </div>

          </div>
          {/* end right column */}
        </div>
      </Wrapper>
    </div>
  )
}

export function Size({ value, label }) {
  return (
    <label
      className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer transition-all duration-300'
    >
      <input
        type='radio'
        name='size'
        value={value}
        className='hidden'
      />

      {label} 
    </label>
  )
}
