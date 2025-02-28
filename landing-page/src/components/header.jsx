import '../styles.css';

export default function Header() {
    return (
        <div className='text-white flex justify-between p-4 w-full '>
            <div className='flex space-x-50 mx-8'> 
                <p >COUCHER</p>
                <ul className='flex space-x-4 '>
                    <li>SERVICES</li>
                    <li>ABOUT US</li>
                    <li>CASES</li>
                </ul>
            </div>
            <p className='flex justify-end mx-8'>SIGN UP</p>
        </div>
    )
}