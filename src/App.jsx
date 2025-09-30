import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css'
import { Suspense } from 'react';

const fetchCustomers = async () =>{
  const res = await fetch("/customers.json")
  return res.json()
}
function App() {

  const customersPromise = fetchCustomers()

  return (
    <div>
      <Navbar/>
      <Banner/>
      <Suspense>
        <Main customersPromise={customersPromise}></Main>
      </Suspense>
      <Footer/>
    </div>
  )
}

export default App
