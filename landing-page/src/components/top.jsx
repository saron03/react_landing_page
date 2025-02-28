import '../styles.css';
import purple from '../images/purple.svg';
export default function Top() {
    return(
        <div className="text-white flex justify-between gap-x-10 m-15 ml-20 mr-20">
            <div className='flex-1 '>
                <p className='mb-5 text-7xl' >UNLIMITED <br /> PRETENTIOUS <br/>IDEAS</p>
                <hr className="max-w-md"/>
                <div className='flex space-x-40 mt-5'>
                    <p className='text-1xl'>OUR SOLUTIONS</p>
                    <p>WE PROVIDE THE FULL <br />FUNNEL APPROACH</p>
                </div>
            </div>
            <div className='flex-1 flex items-center justify-end'>
                <img src={purple} alt="women image" className="w-4/5" />
            </div>
        </div>
    );
}
