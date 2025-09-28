import img1 from "../assets/Ellipse22.png";
import img2 from "../assets/Vector.png";
import img3 from "../assets/Ellipse222.png";
const Main = () => {
  return (
    <div className="bg-[#f5f5f5]">
        <div className="w-8/12 mx-auto">
      <div className="flex justify-between w-[1440px] gap-8">
        <div>
            <h1 className="text-xl font-bold  mb-6">Customer Tickets</h1>
        <div className="flex justify-between gap-8">
        <div className="w-auto">

          <div className="card  bg-base-100 card-xs shadow-sm mb-5">
            <div className="card-body p-5">
              <div className="flex justify-between">
                <h2 className="card-title font-bold text-lg">
                  Login Issues - Can't Access Account
                </h2>
                <button className="btn btn-primary text-[#0B5E06] bg-[#B9F8CF] rounded-2xl border-none w-[88px] h-[32px]">
                  <img src={img1} alt=""/> Open
                </button>
              </div>
              <p className=" text-[#627382] font-bold mt-1 mb-1">
                Customer is unable to log in to their account. They've tried
                resetting their password multiple times but still...
              </p>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <p className=" text-[#627382] font-bold">#1001</p>
                  <p className="text-red-600">HIGH PRIORITY</p>
                </div>
                <div className="flex gap-3">
                  <p className=" text-[#627382] font-bold">John Smith</p>
                  <div className="flex gap-2">
                    <img src={img2} alt="" className="w-4 h-4"/>
                    <p className=" text-[#627382] font-bold"> 1/15/2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

             <div className="card bg-base-100 card-xs shadow-sm mb-5">
            <div className="card-body p-5">
              <div className="flex justify-between">
                <h2 className="card-title font-bold text-lg">Unable to Download Invoice</h2>
                <button className="btn btn-primary text-[#9C7700] bg-[#F8F3B9] rounded-2xl border-none w-[140px] h-[32px]">
                  <img src={img3} alt="" /> In- Progress
                </button>
              </div>
              <p className=" text-[#627382]  font-bold mt-1 mb-1">
                Customer cannot download their January invoice from the billing section. The download button is...
              </p>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <p className=" text-[#627382]  font-bold">#1003</p>
                  <p className="text-[#FEBB0C]">MEDIUM PRIORITY</p>
                </div>
                <div className="flex gap-3">
                  <p className=" text-[#627382]  font-bold">Michael Brown</p>
                  <div className="flex gap-2">
                    <img src={img2} alt="" className="w-4 h-4" />
                    <p className="text-[#627382] font-bold"> 1/17/2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 card-xs shadow-sm mb-5">
            <div className="card-body p-5">
              <div className="flex justify-between">
                <h2 className="card-title font-bold text-lg">App Crash on Launch</h2>
                <button className="btn btn-primary text-[#0B5E06] bg-[#B9F8CF] rounded-2xl border-none w-[88px] h-[32px]">
                  <img src={img1} alt=""/> Open
                </button>
              </div>
              <p className=" text-[#627382]  font-bold mt-1 mb-1">
               Customer reports that the mobile app crashes immediately upon opening on Android 13.
              </p>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <p className=" text-[#627382]  font-bold">#1005</p>
                  <p className="text-red-600">HIGH PRIORITY</p>
                </div>
                <div className="flex gap-3">
                  <p className=" text-[#627382]  font-bold">David Wilson</p>
                  <div className="flex gap-2">
                    <img src={img2} alt="" className="w-4 h-4" />
                    <p className="text-[#627382] font-bold"> 1/19/2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 card-xs shadow-sm mb-5">
            <div className="card-body p-5">
              <div className="flex justify-between">
                <h2 className="card-title font-bold text-lg">Two-Factor Authentication Issue</h2>
                <button className="btn btn-primary text-[#0B5E06] bg-[#B9F8CF] rounded-2xl border-none w-[88px] h-[32px]">
                  <img src={img1} alt=""/> Open
                </button>
              </div>
              <p className=" text-[#627382]  font-bold mt-1 mb-1">
           Customer is not receiving 2FA codes on their registered phone number.
              </p>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <p className=" text-[#627382]  font-bold">#1007</p>
                  <p className="text-red-600">HIGH PRIORITY</p>
                </div>
                <div className="flex gap-3">
                  <p className=" text-[#627382]  font-bold">James Anderson</p>
                  <div className="flex gap-2">
                    <img src={img2} alt="" className="w-4 h-4" />
                    <p className="text-[#627382] font-bold"> 1/21/2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 card-xs shadow-sm mb-5">
            <div className="card-body p-5">
              <div className="flex justify-between">
                <h2 className="card-title font-bold text-lg">Subscription Auto-Renewal</h2>
                <button className="btn btn-primary text-[#9C7700] bg-[#F8F3B9] rounded-2xl border-none w-[140px] h-[32px]">
                  <img src={img3} alt="" /> In- Progress
                </button>
              </div>
              <p className=" text-[#627382]  font-bold mt-1 mb-1">
                Customer wants to enable auto-renewal for their subscription but the toggle is disabled.
              </p>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <p className=" text-[#627382]  font-bold">#1009</p>
                  <p className="text-[#FEBB0C]">MEDIUM PRIORITY</p>
                </div>
                <div className="flex gap-3">
                  <p className=" text-[#627382]  font-bold">Liam Thomas</p>
                  <div className="flex gap-2">
                    <img src={img2} alt="" className="w-4 h-4" />
                    <p className="text-[#627382] font-bold"> 1/17/2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-auto">
            <div className="card bg-base-100 card-xs shadow-sm mb-5">
            <div className="card-body p-5">
              <div className="flex justify-between">
                <h2 className="card-title font-bold text-lg">
                 Payment Failed - Card Declined
                </h2>
                <button className="btn btn-primary text-[#0B5E06] bg-[#B9F8CF] rounded-2xl border-none w-[88px] h-[32px]">
                  <img src={img1} alt=""/> Open
                </button>
              </div>
              <p className=" text-[#627382] font-bold mt-1 mb-1">
               Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.
              </p>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <p className=" text-[#627382] font-bold">#1002</p>
                  <p className="text-red-600">HIGH PRIORITY</p>
                </div>
                <div className="flex gap-3">
                  <p className=" text-[#627382] font-bold">Sarah Johnson</p>
                  <div className="flex gap-2">
                    <img src={img2} alt="" className="w-4 h-4"/>
                    <p className=" text-[#627382] font-bold"> 1/16/2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 card-xs shadow-sm mb-5">
            <div className="card-body p-5">
              <div className="flex justify-between">
                <h2 className="card-title font-bold text-lg">
                 Incorrect Billing Address
                </h2>
                <button className="btn btn-primary text-[#0B5E06] bg-[#B9F8CF] rounded-2xl border-none w-[88px] h-[32px]">
                  <img src={img1} alt=""/> Open
                </button>
              </div>
              <p className=" text-[#627382] font-bold mt-1 mb-1">
               Customer’s billing address shows a different city. They updated it but it still displays the old one.
              </p>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <p className=" text-[#627382] font-bold">#1004</p>
                  <p className="text-[#02A53B]">LOW PRIORITY</p>
                </div>
                <div className="flex gap-3">
                  <p className=" text-[#627382] font-bold">Emily Davis</p>
                  <div className="flex gap-2">
                    <img src={img2} alt="" className="w-4 h-4"/>
                    <p className=" text-[#627382] font-bold"> 1/18/2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

           <div className="card bg-base-100 card-xs shadow-sm mb-5">
            <div className="card-body p-5">
              <div className="flex justify-between">
                <h2 className="card-title font-bold text-lg">Refund Not Processed</h2>
                <button className="btn btn-primary text-[#9C7700] bg-[#F8F3B9] rounded-2xl border-none w-[140px] h-[32px]">
                  <img src={img3} alt="" /> In- Progress
                </button>
              </div>
              <p className=" text-[#627382]  font-bold mt-1 mb-1">
                Customer requested a refund two weeks ago but has not received the amount yet.
              </p>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <p className=" text-[#627382]  font-bold">#1006</p>
                  <p className="text-[#FEBB0C]">MEDIUM PRIORITY</p>
                </div>
                <div className="flex gap-3">
                  <p className=" text-[#627382]  font-bold">Sophia Taylor</p>
                  <div className="flex gap-2">
                    <img src={img2} alt="" className="w-4 h-4" />
                    <p className="text-[#627382] font-bold"> 1/20/2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 card-xs shadow-sm mb-5">
            <div className="card-body p-5">
              <div className="flex justify-between">
                <h2 className="card-title font-bold text-lg">
                 Unable to Update Profile Picture
                </h2>
                <button className="btn btn-primary text-[#0B5E06] bg-[#B9F8CF] rounded-2xl border-none w-[88px] h-[32px]">
                  <img src={img1} alt=""/> Open
                </button>
              </div>
              <p className=" text-[#627382] font-bold mt-1 mb-1">
               Customer tries to upload a new profile picture but gets 'Upload failed' error.
              </p>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <p className=" text-[#627382] font-bold">#1008</p>
                  <p className="text-[#02A53B]">LOW PRIORITY</p>
                </div>
                <div className="flex gap-3">
                  <p className=" text-[#627382] font-bold">Olivia Martinez</p>
                  <div className="flex gap-2">
                    <img src={img2} alt="" className="w-4 h-4"/>
                    <p className=" text-[#627382] font-bold"> 1/22/2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 card-xs shadow-sm mb-5">
            <div className="card-body p-5">
              <div className="flex justify-between">
                <h2 className="card-title font-bold text-lg">
                Missing Order Confirmation Email
                </h2>
                <button className="btn btn-primary text-[#0B5E06] bg-[#B9F8CF] rounded-2xl border-none w-[88px] h-[32px]">
                  <img src={img1} alt=""/> Open
                </button>
              </div>
              <p className=" text-[#627382] font-bold mt-1 mb-1">
               Customer placed an order but didn't receive a confirmation email even though payment succeeded.
              </p>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <p className=" text-[#627382] font-bold">#1010</p>
                  <p className="text-[#FEBB0C]">MEDIUM PRIORITY</p>
                </div>
                <div className="flex gap-3">
                  <p className=" text-[#627382] font-bold">Isabella Garcia</p>
                  <div className="flex gap-2">
                    <img src={img2} alt="" className="w-4 h-4"/>
                    <p className=" text-[#627382] font-bold"> 1/24/2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        </div>
        </div>
         <div>
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
