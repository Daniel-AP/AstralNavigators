export const Card = ({ title, content, imgPath }) => {
    
    return (
        <div className='flex flex-col w-full lg:w-2/5'>
            <h1 className="uppercase">
                { title }
            </h1>
            <img className='w-full mt-2 md:w-1/2 lg:w-full self-center' src={imgPath} />
            <p className="mt-6">{ content }</p>
            <p>
                Learn more with <a target="_blank" className="text-blue-600 cursor-pointer" href={"https://chatgpt.com/"}>ChatGPT AI</a>
            </p>
        </div>
    )

}