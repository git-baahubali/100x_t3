export function InputTweet() {
    return (
        <div className="box-border bg-black max-w-[512px] h-[355px] px-[15px] py-[10px] border border-black rounded-[16px]">

        </div>
    )
}


export function SignUp({ children, closeClicked }) {
    return (
        <div className="flex justify-start items-center box-border bg-black  px-[15px] py-[10px]   rounded-[16px]">
            <div className="inline rounded-full ">
                <img src="images/close.svg" alt="" className="hover:bg-gray-700 active:bg-gray-700" />
            </div>
            <header className=" px-[12px] py-[16px] font-bold"> {children}</header>


        </div>
    )
}

