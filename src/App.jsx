import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [customers, setCustomers] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [resolvedList, setResolvedList] = useState([]);

  useEffect(() => {
    fetch("/customers.json")
      .then(res => res.json())
      .then(data => setCustomers(data));
  }, []);

  return (
    <div>
      <Navbar />
      <Banner inProgressCount={taskList.length} resolvedCount={resolvedList.length} />
      <Main
        customers={customers}
        setCustomers={setCustomers}
        taskList={taskList}
        setTaskList={setTaskList}
        resolvedList={resolvedList}
        setResolvedList={setResolvedList}
      />
      <Footer />
    </div>
  );
}

export default App;
