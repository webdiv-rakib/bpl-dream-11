import React from 'react';
import '../Footer/Footer.css'
const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
            {/* Footer First Subscribe */}
            <div className='absolute mb-200 w-1/2 h-1/2 rounded-3xl footer-bg'>
                <div className='space-y-5'>
                    <h1 className='text-3xl font-bold'>Subscribe to our Newsletter</h1>
                    <p className='text-xl font-semibold'>Get the latest updates and news right in your inbox!</p>
                    <div className="join">
                        <div>
                            <label className="input validator join-item">
                                <input type="email" placeholder="mail@site.com" required />
                            </label>
                            <div className="validator-hint hidden">Enter valid email address</div>
                        </div>
                        <button className="btn btn-neutral join-item">Subscribe</button>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img className='w-36 mt-60' src="../../../src/assets/logo.png" alt="" />
                </div>
                <footer className="footer sm:footer-horizontal bg-base-200 p-10 flex justify-center items-center gap-20">
                    <nav className='text-left w-1/3'>
                        <h6 className="footer-title">About Us</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta eos voluptatibus porro praesentium inventore ipsam suscipit et. Quidem, eligendi.</p>
                    </nav>
                    <nav className='w-1/3'>
                        <h6 className="footer-title">Quick Links</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <form className='w-1/3'>
                        <h6 className="footer-title">Subscribe</h6>
                        <fieldset className="">
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item text-left" />
                                <button className="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </footer>
            </div>
            <hr className='border w-full' />
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by webdiv-rakib</p>
            </aside>
        </footer>
    );
};

export default Footer;