import React from 'react'

function Tweet() {
  return (
    <div className='w-full px-[16px] py-[9px] flex align-top gap-[16px]'>
        <div className='w-[48px]'>
            <img src="Images/user-avatar.png" alt="" srcset="" className='w-[48px]' />
        </div>
        <section className='tweet'>
            <header className='inline '>
                <p className='inline'>Name
                <span className='inline mx-1 text-gray-500'>@handle 32m</span> </p>
            </header>
            <article className='mt-[4px] mb-[8px]  max-w-xs' style={{
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
            }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis repellat cumque magni et necessitatibus animi fugit doloremque cupiditate possimus blanditiis.
            </article>
            <footer className="flex justify-between py-[12px]">
                <h1 className='inline-flex gap-1'> <img src="Images/copy-link-comment.svg" alt="" srcset="" /> <span className='text-gray-500'>11</span></h1>
                <h2 className="inline-flex gap-1"><img src="Images/copy-link-group-26840.svg" alt="" /><span className='text-gray-500'>270</span></h2>
                <h2 className="inline-flex gap-1"><img src="Images/copy-link-heart.svg" alt="" /><span className='text-gray-500'>1892</span></h2>
                <h2 className="inline-flex gap-1"><img src="Images/copy-link-vector.svg" alt="" /><span className='text-gray-500'>100k</span></h2>
            </footer>
        </section>
    </div>
  )
}

export default Tweet