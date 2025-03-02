import '../styles.css';
import Chat from '../images/chat.jpg';
export default function Bottom() {
    return(
    <>
        <div className='flex'>
            <div>
                <div className='flex border-1 bg-yellow space-x-1'>
                    <img src={Chat} alt="chat icon" className='w-1/35'/>
                    <p>HOW ABOUT A CHAT</p>
                </div>
                <p>Have a BIG IDEA in <br /> mind? Let's discuss <br /> what we can achieve <br /> together.</p>
            </div>
            <div>

            </div>
        </div>
        <div>
        </div>
    </>
    )
}