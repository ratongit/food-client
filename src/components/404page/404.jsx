import Header from '../Header/Header';
import './404.css'

function NotFound() {
  return (
    <>
    <Header></Header>
    <div className='hrader text-white '>
      <h1>404 - Page Not Found</h1>
      <br />
      <p>দুঃখিত, আপনি যে পেজটি অনুরোধ করেছেন তা খুঁজে পাওয়া যায়নি।</p>
  <img className='w-50 mx-auto mt-5 h-50' src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000' alt="" />
  <br /><br />
  <h3> Enter Right Url </h3>
    
    </div>
    </>
  );
}

export default NotFound;
