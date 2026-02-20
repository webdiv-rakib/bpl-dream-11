import '../Hero/Hero.css'
const Hero = () => {
    return (
        <div className='hero-bg flex flex-col justify-center items-center'>
            <div>
                <img className='w-full max-w-lg object-contain' src="../../../src/assets/banner-main.png" alt="" />
            </div>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <h3 className='text-xl'>Beyond Boundaries Beyond Limits</h3>
                <button className='btn rounded-2xl'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Hero;