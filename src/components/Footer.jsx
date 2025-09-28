import React from "react";
import img4 from "../assets/fi_5969020.png";
import img5 from "../assets/fi_145807.png";
import img6 from "../assets/fi_5968764.png";
import img7 from "../assets/fi_6244710.png";

const Footer = () => {
    return (
    <div className="bg-[#000000]">
        <div className='flex justify-between gap-4 py-10 w-11/12 mx-auto'>
            
            <div className='w-[300px]'>
                <h1 className='font-bold text-xl text-white mb-5'>CS — Ticket System</h1>
                <p className='text-[#A1A1AA] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="">
                <h1 className="font-bold text-xl mb-4 text-white"> Company</h1>
                <div className="text-[#A1A1AA] pb-4">

                <p>About Us</p>
                <p>Our Mission </p>
                <p>Contact Saled</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-xl text-white mb-5'>Services</h1>
                <div className='text-[#A1A1AA]'>

                <p>Products & Services</p>
                <p>Customer Stories</p>
                <p>Download Apps</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-xl text-white mb-5'>Information</h1>
                <div className='text-[#A1A1AA]'>

                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Join Us</p>
                </div>
            </div>
            <div className='mb-5'>
                <h1 className='font-bold text-xl text-white mb-5'>Social Links</h1>

                <div className='text-[#A1A1AA] '> 

                
                <div className='flex gap-4 mb-4'>
                    <img src={img4} alt="" />
                    <p>@CS — Ticket System</p>
                </div>
                <div className='flex gap-4 mb-4'>
                    <img src={img5} alt="" />
                    <p>@CS — Ticket System</p>
                </div>
                <div className='flex gap-4 mb-4'>
                    <img src={img6} alt="" />
                    <p>@CS — Ticket System</p>
                </div>
                <div className='flex gap-4'>
                    <img src={img7} alt="" />
                    <p>@CS — Ticket System</p>
                </div>
                </div>
            </div>
            
        </div>

        <div className='text-white text-center py-10 border-t-1 border-[#E5E7EB]'>
            <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
    </div>
    )
}
export default Footer;