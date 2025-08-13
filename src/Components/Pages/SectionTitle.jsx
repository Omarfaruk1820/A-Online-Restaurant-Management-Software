

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className=' text-center mx-auto md:w-3/12 '>
           
           <p className='text-yellow-600 py-2'>---{subHeading}---</p> 
           <p className=' text-3xl uppercase border-y-4 py-2 mb-3 ' >{heading}</p>
        </div>
    );
};

export default SectionTitle;