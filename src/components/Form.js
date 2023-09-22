import illustrationMobile from '../assets/images/illustration-sign-up-mobile.svg';
import illustrationDesktop from '../assets/images/illustration-sign-up-desktop.svg';
import List from './List';
import { useState } from 'react';
import SuccessMessage from './SuccessMessage';


function Form(){
    const emailRegex = /\S+@\S+\.\S+/;
    const[email,setEmail] = useState('');
    const[validEmail,setValidEmail] = useState(false);
    const[error,setError] = useState(false);
    const[modalOpen, setModalOpen] = useState(false);
   
    
    function handleChange(e){
        const inputEmail=e.target.value;
        setEmail(inputEmail);
        setValidEmail(emailRegex.test(inputEmail) || inputEmail === "" )
    }

    function handleClick(){
        if(validEmail){
            setModalOpen(true);
        }else{
            setError(true);
        }

    }

    function handleModalClose(){
        setModalOpen(false);
        setEmail("")
    }



    return(
        <>
            {modalOpen? <SuccessMessage message={email} modalClose={handleModalClose}/> :
            
                (<div className='h-screen w-screen bg-gray-700 flex justify-center place-items-center'>
                <div className='xl:w-2/3 bg-white grid grid-cols-1 xl:grid-cols-2 gap-x-8 place-items-center rounded-md box-border'>
                    <img src={illustrationMobile} alt="illustration of data" className='visible xl:hidden'/>
            
                    <div className='p-5 xl:mt-7 xl:ml-5'>
                        <p className='mt-3 text-3xl font-bold'>Stay updated!</p>
                        <p className='mt-5 '> Join 60,000+ product managers receiving monthly updates on:</p>
                        <List text="Product discovery and building what matters"/>
                        <List text="Measuring to ensure updates are a success "/>
                        <List text="And much more! "/>
                        <form className='mt-5' onSubmit={(e)=>e.preventDefault()}>
                            <div className='flex justify-between'>
                                <p className='font-bold'>Email addres</p>
                                {error && <div style={{ color: 'red' }}>Valid email required</div>}
                            </div>
                            <input value={email} className='border hover:border-black rounded-md w-full p-2' type='email' placeholder='email@company.com' onChange={handleChange}/>
                            <button type='submit' className='bg-black hover:bg-gradient-to-r from-red-400 to-orange-500 text-white mt-3 p-3 rounded-md w-full' onClick={handleClick}>Subscribe to monthly newsletter</button>
    
                        </form>
             
                    </div>
                    <img src={illustrationDesktop} alt="illustraion of data for desktop" className='hidden xl:block p-3'/>
    
                </div>
    
    
    
                </div>)

             }
            
        
        </>
    )
}

export default Form;
