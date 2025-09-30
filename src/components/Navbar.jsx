const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
 <div className="flex flex-col md:flex-row justify-between items-center w-11/12 mx-auto">
     <div className="navbar-left">
    
    <h1 className="text-2xl font-bold">CS — Ticket System</h1> 
  </div>
 
  <div className="navbar-right flex flex-col md:flex-row gap-6 items-center">
     
    <ul className="flex flex-col md:flex-row justify-center items-center gap-6">
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
    </ul>
   
    <button className="btn bg-[#422AD5] text-white text-lg">+ New Ticket</button>
    </div>
 </div>
  </div>
    
  </div>

        
    );
};
export default Navbar;