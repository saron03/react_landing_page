import '../styles.css';
import purple from '../images/purple.svg';
export default function Top() {
    return(
        <div className="text-white flex justify-between  p-4 gap-x-10">
            <div className='flex-1 ml-10 mr-10'>
                <p>UNLIMITED PRETENTIOUS IDEAS</p>
                <hr/>
                <div>
                    <p>OUR SOLUTIONS</p>
                    <p>WE PROVIDE TEH FULL FUNNEL APPROACH</p>
                </div>
            </div>
            <div className='flex-1 flex items-center justify-end'>
                <img src={purple} alt="women image" className="w-1/2 max-w-xs" />
            </div>
        </div>
    );
}
