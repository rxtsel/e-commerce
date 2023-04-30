import { HeroBanner, ProductCard, Wrapper } from '@/components'

export default function Home () {
  return (
    <>
      <main>
        <HeroBanner />
        <Wrapper>
          {/* heading start */}
          <div className='text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]'>
            <h1 className='text-[28px] md:text-[34px] mb-5 font-semibold'>Lo más vendido</h1>
            <p 
              className='text-md md:text-xl'
            >Estos son algunos de nuestros productos más vendidos</p>
          </div>
          {/* heading end */}

          {/* products grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
            <ProductCard />             
            <ProductCard />             
            <ProductCard />             
            <ProductCard />             
            <ProductCard />             
            <ProductCard />             
          </div>
          {/* end products grid */}
        </Wrapper>
      </main>
    </>
  )
}
