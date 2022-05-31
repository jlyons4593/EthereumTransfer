import React from 'react'
import { Nav, Header, Footer, Services, Transactions, Form } from './components'

const App = () => {
  return (
    
    <div className=' min-h-screen'>
      <div className=' bg-[#301934] text-2xl pt-7'>
        <Nav/>
        <Header/>
        <Form/>
      
        
      </div>
      <Services/>
      <Transactions/>
      <Footer/> 
      
    </div>
   
  )
}

export default App