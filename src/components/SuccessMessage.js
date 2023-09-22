import tick from '../assets/images/icon-success.svg'


function SuccessMessage(props){
function handleDismiss(){
    props.modalClose()
    
}

    return(
        <>
        <div className='h-screen w-screen bg-gray-700 flex justify-center place-items-center'>
            <div className='bg-white w-1/4 p-6 rounded-xl'>
                <img src={tick} alt="tick for message success"/>
                <p className='text-3xl font-bold'>Thank you for subscribing!</p>
                <p className='text-xs text-gray-500 mt-3 mb-3'>A confirmation email has been sent to <strong>{props.message}</strong>. Please open it and click the button inside to confirm your subscription.</p>
                <button className='bg-black hover:bg-gradient-to-r from-red-400 to-orange-500 text-white p-3 rounded-md w-full' onClick={handleDismiss}>Dismiss message</button>


            </div>

        </div>
        
        </>
    )
}

export default SuccessMessage;