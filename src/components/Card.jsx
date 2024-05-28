import {useState, useEffect} from 'react'
import { MdDelete } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { FaRegFileAlt } from "react-icons/fa";
function Card(props) {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    
    const delt =()=>{
        alert("it isn't work stil \n visist  again in  some days to se it functional \n #React Zindabad")
    }
    // Format the date and time
    const formattedDateTime = currentDateTime.toLocaleString();
    return (
        <>
            <div className=" m-1 relative card h-64 overflow-y-scroll bg-black text-yellow-50 rounded-3xl py-3 px-4 w-52">
                <i className='absolute right-4 top-5 text-right'><FaRegFileAlt/></i>
                <h2 className=' text-gray-300 text-xl font font-semibold'>{props.flName}</h2>
                <h6>{formattedDateTime}</h6>    
                <p className='pl-2 text-sm pt-5'>{props.fileNote}</p>
                <div className="flex absolute bottom-2 gap-2 buttons">
                    <button className='py-1 px-3 flex gap-4 align-middle items-center text-center rounded-full bg-green-500' onClick={delt}>share<IoIosShareAlt/></button>
                    <button className='py-1 px-3 flex gap-4 align-middle items-center text-center rounded-full bg-red-500' onClick={delt}><MdDelete/></button>
                    <button className='py-1 px-3 flex gap-4 align-middle items-center text-center rounded-full' onClick={delt}><FaRegStar/></button>
                </div>
            </div>
        </>
    )
}

export default Card
