import img1 from "../assets/Ellipse22.png";
import img2 from "../assets/Vector.png";
import img3 from "../assets/Ellipse222.png";

const Main = ({customers, taskList, setTaskList, resolvedList, setResolvedList}) => {
  const addTask = (ticket) => {
    if (!taskList.find((t) => t.id === ticket.id)) {
      setTaskList([...taskList, ticket]);
    }
  };

  const completeTask = (ticket) => {
    setTaskList(taskList.filter((t) => t.id !== ticket.id));
    setResolvedList([...resolvedList, ticket]);
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="w-8/12 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between w-[1440px] gap-8">
       
          <div className="flex-1">
            <h1 className="text-xl font-bold mb-6">Customer Tickets</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 space-y-5">
              {customers.map((customer) => (
                <div
                  key={customer.id}
                  onClick={() => addTask(customer)}
                  className="card bg-base-100 card-xs shadow-sm mb-5 cursor-pointer hover:shadow-lg transition"
                >
                  <div className="card-body p-5">
                    <div className="flex justify-between">
                      <h2 className="card-title font-bold text-lg">
                        {customer.title}
                      </h2>
                      <button
                        className={`rounded-2xl border-none w-[88px] h-[32px] flex items-center justify-center gap-2
    ${
      customer.status === "In-Progress"
        ? "bg-[#F8F3B9] text-[#FEBB0C] w-[140px]"
        : customer.status === "Open"
        ? "bg-[#B9F8CF] text-[#0B5E06]"
        : "bg-gray-300 text-black"
    }`}
                      >
                        <img
                          src={
                            customer.status === "In-Progress"
                              ? img3
                              : customer.status === "Open"
                              ? img1
                              : defaultImg
                          }
                          alt=""
                          className="w-4 h-4"
                        />
                        {customer.status}
                      </button>
                    </div>
                    <p className="text-[#627382] font-bold mt-1 mb-1">
                      {customer.description}
                    </p>
                    <div className="flex justify-between">
                      <div className="flex gap-3">
                        <p className="text-[#627382] font-bold">
                          #{customer.id}
                        </p>
                        <p
                          className={
                            customer.priority === "HIGH PRIORITY"
                              ? "text-red-500"
                              : customer.priority === "Medium"
                              ? "text-[#FEBB0C]"
                              : "text-green-500"
                          }
                        >
                          {customer.priority}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <p className="text-[#627382] font-bold">
                          {customer.customer}
                        </p>
                        <div className="flex gap-2">
                          <img src={img2} alt="" className="w-4 h-4" />
                          <p className="text-[#627382] font-bold">
                            {customer.createdAt}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Task Section */}
          <div className="w-[358px]">
            <h1 className="text-xl font-bold mb-4">Task Status</h1>
            {taskList.length === 0 ? (
              <p className="text-[#627382]">
                Select a ticket to add to Task Status
              </p>
            ) : (
              taskList.map((task) => (
                <div
                  key={task.id}
                  className="bg-white p-3 rounded-lg shadow mb-3"
                >
                  <h2 className="font-semibold mb-2">{task.title}</h2>
                  <button
                    type="button"
                    onClick={() => completeTask(task)}
                    className="bg-[#02A53B] text-white w-full px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Complete
                  </button>
                </div>
              ))
            )}

            <div className="mt-6">
              <h1 className="text-xl font-bold mb-4">Resolved Task</h1>
              {resolvedList.length === 0 ? (
                <p className="text-[#627382]">No resolved tasks yet.</p>
              ) : (
                resolvedList.map((task) => (
                  <div
                    key={task.id}
                    className="bg-[#E0E7FF] p-3 rounded-lg shadow mb-2"
                  >
                    <h2 className="font-semibold">{task.title}</h2>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
