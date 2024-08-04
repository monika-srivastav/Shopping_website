// import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox m-[60px] max-md:my-[60px] max-sm:my-[60px] max-sm:mx-5'>
      <div className="descriptionbox-navigator flex">
        <div className="descriptionbox-nav-box flex items-center justify-center font-semibold text-base w-40 h-14 border  border-neutral-400">Description</div>
        <div className="descriptionbox-nav-box fade flex items-center justify-center font-semibold text-base w-40 h-14 border border-neutral-400  bg-zinc-100">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description flex flex-col max-sm:text-sm max-sm:p-8  gap-6 border border-neutral-400 p-10 ">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, dolorum dolores modi quae, illum totam minima cumque enim officiis similique quisquam necessitatibus expedita adipisci obcaecati sunt aperiam quaerat odio quidem.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt dolorum fugit minima autem pariatur veritatis possimus voluptates temporibus provident aut!</p>
      </div>
    </div>
  )
}

export default DescriptionBox
