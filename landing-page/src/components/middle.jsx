import '../styles.css';
import play from '../images/play.png';
import image1 from '../images/image1.svg';
import image2 from '../images/image2.svg';
import image3 from '../images/image3.svg';

export default function Middle() {
    return(
        <div className='text-white flex justify-between ml-18 mr-18 mt-25'>
            <div>
                <div className='flex space-x-5'>
                <img src={play} alt="paly icon" className='w-13'  />
                <p>Let's See <br /> How We Did It</p>
                </div>
                <div className='mt-30  space-y-3'>
                    <p className='border-1 px-3 border-white rounded-3xl text-center inline-block'>WEB ANALYTICS</p>
                    <p className='border-1 px-1 border-white rounded-3xl text-center '>EMAIL MARKETING</p>
                    <p className='border-1 px-3 border-white rounded-3xl text-center inline-block'>SEO 2.0</p>
                </div>
            </div>
            <div className='flex space-x-1'>
                <img src={image1} alt="orange card" />
                <img src={image2} alt="white card" />
                <img src={image3} alt="yellow card" />
            </div>
        </div> 
    )
}