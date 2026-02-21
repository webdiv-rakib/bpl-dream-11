import '../Hero/Hero.css'
const Hero = ({ handleFreeCredit, claimCount }) => {
    const isLimitReached = claimCount >= 3;
    return (
        <div className='hero-bg flex flex-col justify-center items-center space-y-8'>
            <div>
                <img className='w-full max-w-lg object-contain' src="../../../src/assets/banner-main.png" alt="" />
            </div>
            <div className='text-center space-y-5 flex flex-col items-center'>
                <h1 className='text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <h3 className='text-xl'>Beyond Boundaries Beyond Limits</h3>
                <div className='p-2 border-2 max-w-fit rounded-2xl border-[#e7fe29]'>
                    <button className={`btn rounded-2xl text-black ${isLimitReached ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#e7fe29]'}`} onClick={handleFreeCredit} disabled={isLimitReached}>Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;