// components/InputBox.js

import React, { useState } from 'react';

export function InputBox({label,classname, tick,isPassword,setter}) {
    const [PasswordVisible, setPasswordVisible] = useState(false)
    const [inputBoxValue, setInputBoxValue] = useState('')

   
function togglePasswordVisiblity() {
    setPasswordVisible(!PasswordVisible);

}
    return (
        <div className={`border-0 border-green-400 group relative flex  justify-start items-center w-full bg-black  ${classname}`}>
            <input
                type={isPassword && !PasswordVisible ?"password":"text"}
                onChange={(e)=>{
                    const newValue = e.target.value;
                    setInputBoxValue(newValue);
                    if (setter) {
                        setter(newValue);  // Calling the setName function passed as prop
                    }
                }}
                id="label"
                className={`box-content ml-2 w-full block  border border-gray-300 bg-black rounded-lg
                 focus:border-blue-500 px-6 py-[16px] focus:outline-none`
                }
            />
            <label
                htmlFor="label"
                className={`absolute top-[-0.5rem] bg-black m-0 text-gray-500 text-sm  px-2 transition-all duration-300 
                 left-4 group-active:text-xs  group-hover:text-blue-500 ${true?'top-[-0.5rem]':''}`}>
                {label}

            </label>
            {tick && <img src="images/tick_icon.svg" alt="" className='absolute right-1 ' />}
            {isPassword && <img src="images/eye.svg" alt="" srcset="" className={`absolute right-1 ${PasswordVisible?'bg-blue-700':''} rounded-full`} onClick={()=>{
                setPasswordVisible(!PasswordVisible)
            }}/>}

        </div>
    );
}


export function TweetBox(params) {
    return (
        <div className="inline-flex gap-x-[12px]">
            <img src="images/user-avatar.png" alt="" className='w-[36px] h-[36px]' />
            <input type="text" placeholder='Whats happening?!'
                className='w-[434px] bg-black text-white placeholder:text-lg '
            />
        </div>
    )
}


export function SearchBox(params) {
    return (
        <div className="inline-flex gap-x-[15px] py-[10px] px-[16px] group border-0 border-blue-500 focus-within:border-2 rounded-full">
            <img src="images/dark-theme-search-group.svg" alt="" className='w-[36px] h-[36px]  group-active:filter-blue-500' />
            <input type="text" xplaceholder='Search'
                className='w-[434px] outline-none bg-black text-white placeholder:text-lg  '
            />
        </div>
    )
}

