import illustrationMobile from './assets/images/illustration-sign-up-mobile.svg';
import illustrationDesktop from './assets/images/illustration-sign-up-desktop.svg';
import './App.css';
import List from './components/List';

function App() {
  return (
    <div className='h-screen w-screen bg-gray-700 flex justify-center place-items-center'>
      <div className='w-2/3 bg-white grid grid-cols-1 lg:grid-cols-2 rounded-md box-border'>
        <img src={illustrationMobile} alt="illustration of data" className='visible lg:hidden'/>
        
        <div className='p-5 lg:mt-7 lg:ml-5'>
          <p className='mt-3 text-3xl font-bold'>Stay updated!</p>
          <p className='mt-5 '> Join 60,000+ product managers receiving monthly updates on:</p>
          <List text="Product discovery and building what matters"/>
          <List text="Measuring to ensure updates are a success "/>
          <List text="And much more! "/>
          <form className='mt-5'>
            <legend className='text-sm font-bold'>Email addresss</legend>
            <input className='border rounded-md w-full p-2' type='email' placeholder='email@company.com'/>
            <button className='bg-black text-white mt-3 p-3 rounded-md w-full '>Subscribe to monthly newsletter</button>

          </form>
         
        </div>
        <img src={illustrationDesktop} alt="illustraion of data for desktop" className='hidden lg:block p-3 max-w-xs'/>

      </div>
     


    </div>
  );
}

export default App;
