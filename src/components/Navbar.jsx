// @client
'use clinet';
import { useState } from 'react';


export function Navbar() {
    const [navtoggle, setNavtoggle] = useState(true);

    const toggleNavigation = (x) => {
        if (x == navtoggle) { }
        else
            setNavtoggle((prev) => !prev)
    }

    return (
        <main className="border-b-[1px]  border-gray-400 max-w-[500px] flex justify-between
        px-[80px] py-[20px] relative">

            <div className='flex flex-col justify-around'
                onClick={() => { toggleNavigation(true) }}>
                <h1 className=''>For You</h1>
                {/* <p className={`${navtoggle ? '' : 'opacity-0'}
            w-[56px] h-[4px] bg-twitter-blue-default mt-[16px]`}></p> */}
            </div>

            <div className='flex flex-col justify-around'
                onClick={()=>{toggleNavigation(false)}}>
                <h1 className=''>Following</h1>
                {/* <p className={`${navtoggle ? 'opacity-0' : ''}
            w-[75px] h-[4px] bg-twitter-blue-default mt-[16px]`}></p> */}
            </div>
            {/* <p className={`${navtoggle ? 'w-[56px] left-[0px]' : 'w-[75px] left-[calc(50%+100px)]'}
            transition-transform  duration-500 ease-in-out
            absolute bottom-0 h-[4px] bg-twitter-blue-default rounded-full`}></p> */}
            <p className={`${navtoggle ? 'w-[56px]' : 'w-[75px] left-[calc(50%+100px)]'}
        transition-all duration-500 ease-in-out
        absolute bottom-0 h-[4px] bg-twitter-blue-default rounded-full`}></p>

        </main>
    )
}

