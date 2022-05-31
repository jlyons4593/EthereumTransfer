import React, {useContext} from 'react'
import {SiEthereum} from 'react-icons/si'
import { TransactionContext } from "../context/TransactionContext";

const Header = () => {
  const {connectWallet, currentAccount} = useContext(TransactionContext);
  
  return (
    
    <div className='flex w-full justify-center items-center '>
      <div className='flex flex-col items-start justify-between md:pt-20 pt-5 px-4'>
        <div className='flex flex-1 justify-start flex-col'>
          <h1 className='text-3xl sm:text-5xl text-white '>
            Send Crypto <br/> accross the world
          </h1>
          
          {!currentAccount && ( <button
          type='button'
          onClick={connectWallet}
          className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] '
          >
            <p className='text-white text-base font-semibold'>Connect Wallet</p>

          </button>)}
          
          
        </div>
          <div className='flex flex-col flex-1 items-center justify-center w-full '>
            <div className=' justify-center items-center  rounded-xl h-40 sm:w-72 w-full '>
              <div className='flex justify-center w-full h-full'>
                
                  <div className=' rounded-full  flex justify-center items-center'>
                    <p className='text-white items-center flex '>Send Ethereum</p>
                  </div>
                  
              </div>
              <div className='flex justify-center h-full'>
                  <SiEthereum fontSize={70} color="#fff"/>
                  </div>
            </div>

          </div>
        </div>
      </div>
      
    
  
  );
}

export default Header