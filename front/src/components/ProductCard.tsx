import Link from 'next/link'

export function ProductCard() {
  return (
    <Link
      href='/product/1'
      className='max-w-[350px] mx-auto transform overflow-hidden bg-white transition-transform duration-300 hover:scale-[1.015]'
    >
      <img
        className='w-full aspect-square object-cover cursor-pointer'
        src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/6eea83ac-7862-459e-abf5-2f566e2f0ac1/calzado-blazer-mid-77-vintage-nw30B2.png"
        alt=""
      />
      <div className="p-4 text-black font-medium">
        <h2 className='text-lg font-medium'>Nike Blazer</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className='mr-2 text-lg font-semibold'>$ 499.000</p>
          <p className='text-base font-medium line-through'>$ 719.000</p>
          <p className='ml-auto text-base font-medium text-green-500'>20% off</p>
        </div>
      </div>
    </Link>
  )
}
