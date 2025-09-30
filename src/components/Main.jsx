import img1 from "../assets/Ellipse22.png";
import img2 from "../assets/Vector.png";
import img3 from "../assets/Ellipse222.png";
import { use } from "react";
const Main = ({customersPromise}) => {

  const customerData = use(customersPromise);
  console.log(customerData);
  return (
    <div className="bg-[#f5f5f5]">
        <div className="w-11/12 mx-auto">

  

      <div className="flex flex-col lg:flex-row justify-between w-[1440px] gap-8">
        <div className="flex-1">
            <h1 className="text-xl font-bold  mb-6">Customer Tickets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 space-y-5">
          
              {
        customerData.map(customer =>   <div className="card  bg-base-100 card-xs shadow-sm mb-5">
            <div className="card-body p-5">
              <div className="flex justify-between">
                <h2 className="card-title font-bold text-lg">
                 {customer.title}
                </h2>
                <button className="btn btn-primary text-[#0B5E06] bg-[#B9F8CF] rounded-2xl border-none w-[88px] h-[32px]">
                  <img src={img1} alt=""/>{customer.status}
                </button>
              </div>
              <p className=" text-[#627382] font-bold mt-1 mb-1">{customer.description}
              </p>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <p className=" text-[#627382] font-bold">#{customer.id}</p>
                  <p className="text-red-600">{customer.priority}</p>
                </div>
                <div className="flex gap-3">
                  <p className=" text-[#627382] font-bold">{customer.customer}</p>
                  <div className="flex gap-2">
                    <img src={img2} alt="" className="w-4 h-4"/>
                    <p className=" text-[#627382] font-bold">{customer.createdAt}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>)
      }

        </div>
        </div>
         <div  >
            <h1 className="text-xl font-bold mb-4 ">Task Status</h1>
             <div className="w-[358px] h-[804px]">
            <p className="mb-6 text-[#627382]">Select a ticket to add to Task Status</p>
            <div>
                <h1 className="text-xl font-bold  mb-4">Resolved Task</h1>
                <p className="text-[#627382]">No resolved tasks yet.</p>
            </div>
        </div>
        </div>
        </div>
      
      </div>
    </div>
  );
};
export default Main;
