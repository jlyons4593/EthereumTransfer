import React, {useContext} from 'react'



import Loader from './Loader';
import { TransactionContext } from "../context/TransactionContext";


const Input = ({placeholder, name, type, value, handleChange})=>(
  <input
  placeholder={placeholder}
  type = {type}
  step = "0.0001"
  value={value}
  onChange={(e) => handleChange(e, name)}
  className="my-2 w-full rounded-sm p-2 outline-none border-none bg-transparent text-white text-sm white-glassmorphism"
  />
)


const Form = () => {
  const {formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);
  
  const handleSubmit = (e) => {
    
    const{ addressTo, amount, message, } = formData;
    e.preventDefault();
    if(!addressTo || !amount || !message )return;
    
    sendTransaction();
 }
  return (

    <div className='flex w-full justify-center items-center bg-[#301934]'>
      <div className='flex flex-col items-start justify-between md:p-10 py-4 px-4'>
          <div className='flex flex-col flex-1 items-center justify-center w-full mt-10'>
            
            <div className='mt-10 p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="text" handleChange={handleChange} />
            
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange}/>
            <div className='h-[1px] w-full bg-gray-400 my-2'/>
            {isLoading?(
              <Loader/>
            ):(
                
              <button
                type='button'
                onClick={handleSubmit}
                className='text-white text-md w-full mt-2 border-[1px] p-2 border-[#3d4f7c] bg-blue-600 rounded-full cursor-pointer'
              >Send Now
              </button>
            )}
          </div>
        </div>
        </div>
      </div>
    
  
  );
}
export default Form