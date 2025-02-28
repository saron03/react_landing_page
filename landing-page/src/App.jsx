import './components/header.jsx';
import Header from './components/header.jsx';
import Top from './components/top.jsx';
import Middle from './components/middle.jsx';
import './styles.css';

export default function App() {
  return (
      <div className='bg-black'>
        <Header/>
        <hr className="border-t-2 border-white ml-20 mr-20"/>
       < Top/>
       <Middle/>
      </div>
  )
}