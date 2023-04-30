import { useRouter } from 'next/router'
import { Wrapper, ProductCard } from '@/components'

export default function Category () {
  const router = useRouter()
  const { slug } = router.query
  return (
    <div className='w-full md:py-20'>
      <Wrapper>
        <div className='text-center max-w-[800px] mx-auto md:mt-0'>
          <h1
            className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'
          >
            {
              slug.includes('-')
                ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                : slug.charAt(0).toUpperCase() + slug.slice(1)
            }
          </h1>
        </div>

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
    </div>
  )
}
