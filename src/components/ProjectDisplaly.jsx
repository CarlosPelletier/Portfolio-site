
const ProjectDisplaly = ({ title, url, img, description, tags, num }) => {
  return (
    <>
        
        <section className='bg-projectbg bg-cover bg-no-repeat mt-10 pb-40 pt-10'>
            <div className='flex justify-center mb-7 md:hidden'>
                <span className='px-2 rounded-full bg-neutral-400'>Project {num}</span>
            </div>
            <div className='flex max-w-6xl mx-auto justify-center px-10 md:flex-row flex-col'>
                <div className='md:w-1/2 w-full mb-10 md:mb-0'>
                    <img onClick={() => window.open(url)} className='w-full drop-shadow-xl hover:brightness-50 cursor-pointer' src={img} alt={title} />
                </div>
                <div className='flex flex-col justify-around md:w-1/2 w-full md:pl-20 space-y-10'>
                    <h4 onClick={() => window.open(url)} className='font-bold mb-3 text-3xl cursor-pointer'>{title}</h4>
                    <p className='text-sm text-justify'>{description}</p>
                    <ul className='list-none no-underline flex flex-wrap text-sm'>
                        {tags.map((tag, index) => {
                            return (
                            <li key={index} className='px-2 rounded-full mb-2 bg-neutral-100 mr-5'>{tag}</li>
                            )
                        })}

                    </ul>
                </div>
            </div>
        </section>
    
    </>
  )
}

export default ProjectDisplaly