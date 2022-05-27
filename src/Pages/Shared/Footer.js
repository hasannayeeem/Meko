import React from 'react';
// import logo from '../../assets/images'
const Footer = () => {
    return (


        <footer className="">
            <div className='grid grid-cols-3 p-20 bg-accent text-white'>
                <div className=''>
                    <span className="footer-title opacity-100 text-white">About Us</span>
                    <p className="text-white  mb-3 ml-3">
                        Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac, consequat velit. Quisquemos sodales suscipit tortor ditaemcos condimentum lacus meleifend.
                    </p>
                    <img className='mb-3' src="https://cdn.shopify.com/s/files/1/0046/1769/9457/files/Footer-logo_x34@2x.png?v=1593582163" alt=''></img>
                    <div className='flex'>
                        <img className='h-10  w-14 rounded ml-1' src='https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg' alt=''></img>
                        <img className='h-10  w-14 rounded ml-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnrIe-OfO-NGyPCNEvzu6mfQXCf6YWfbQt4w&usqp=CAU' alt=''></img>
                        <img className='h-10  w-14 rounded ml-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMMMBZ7pEhP9XcipgVOFDFXogo1F7gTtlNTW3m6mvGacClNc6ZLDvJyD8LxEFCYW3Bcl4&usqp=CAU' alt=''></img>
                        <img className='h-10  w-14 rounded ml-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNDJA6nsAFc1W6mcoqsp72ARJb2IZKX1wHDYr8UHZsy0DOJF6p-PrRPo109_j0uaz8Qeg&usqp=CAU' alt=''></img>
                        <img className='h-10  w-14 rounded ml-1' src='https://www.investopedia.com/thmb/jXHWp56gMqrRjSpZu3qoDSeGt1w=/735x0/Discover-logo-28a70026a79d4023adafb0f5e2e773cf.jpg' alt=''></img>
                    </div>
                </div>
                <div  className=''>
                    <span className="footer-title opacity-100 block text-white">Opening Hours</span>
                    <a className="text-white block">Monday ---------------- 09.00 - 22.00</a>
                    <a className="text-white block">Tuesday ---------------- 09.00 - 22.00</a>
                    <a className="text-white block">Wednesday ------------ 09.00 - 22.00</a>
                    <a className="text-white block">Thursday --------------- 09.00 - 22.00</a>
                    <a className="text-white block">Friday ------------------ 09.00 - 22.00</a>
                    <a className="text-white block">Saturday --------------- 09.00 - 22.00</a>
                    <a className="text-white block">Sunday ----------------- 09.00 - 22.00</a>
                </div>
                <div  className=''>
                    <span className="footer-title opacity-100 block text-white">Contact us</span>
                    <span className='text-white block'>support@domain.com</span>
                    <div>
                        <span className="footer-title opacity-100 text-white">Newsletter</span>
                        <div className="form-control w-80">
                            <label className="label">
                                <span className="label-text text-white">Enter your email address</span>
                            </label>
                            <div className="relative">
                                <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='py-5 text-center text-xl bg-white text-accent'>Copyright © 2022 - All right reserved</p>
        </footer>



        //     </div>
        // </footer>
    );
};

export default Footer;