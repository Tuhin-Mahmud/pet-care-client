import logo from '../../../assets/images/logo/logo2.png'

const Footer = () => {
    return (
        <div className="bg-base-200">
            <footer className="footer p-10 text-base-content">
                <div className="flex ">
                    <aside>
                        <img className='w-1/4' src={logo} alt="" />
                        <p>Peat Care Adoption Ltd.<br />Providing reliable tech since 1992</p>
                    </aside>
                    <nav className="flex flex-col ml-14">
                        <h6 className="footer-title text-xl">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                </div>
                <div className='flex  w-full justify-between'>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title text-xl">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className='flex flex-col ml-14 '>
                        <h6 className="footer-title text-xl text-sky-600">Opening Ours</h6>
                        <a className="link link-hover text-lg font-mono">Mon - Fri: 9.00AM - 6.00PM</a>
                        <a className="link link-hover text-lg font-mono">Saturday: 9.00AM - 6.00PM</a>
                        <a className="link link-hover text-lg font-mono">Sunday: Closed
                        </a>
                    </nav>
                </div>
            </footer>
            <div className='divide-x-2'></div>
            <aside>
                <p className="text-center">Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
            </aside>
        </div>
    );
};

export default Footer;