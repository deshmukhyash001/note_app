import React from 'react'
import {useState} from 'react'
import FileForm from './fileForm';
import Card from './Card';

function Foreground() {
    const [click1, setClick1] = useState(false);
    const [click2, setClick2] = useState(false);
    const [formData, setFormData] = useState([]); // State to store form data for each card

    const [fName, setFName] = useState('');
    const [fNote, setFNote] = useState('');
    const [saveNote, setSaveNote] = useState(false);

    const [counter,setCounter] = useState(0)
    const [last,setLast] = useState(false)

    function reverse(){
      setClick1((click1)=>(!click1))
      setClick1((click2)=>(!click2))

    }

    const lastPage = () =>{
      setLast(!last)
    }
    const save = () => {
        // Add current form data to the formData array
        setFormData([...formData, { fName, fNote }]);
        setSaveNote(!saveNote);

    setFName('');
    setFNote('');
    setClick1(false);
    setClick2(false);
    };

    const fileName = (event) => {
        setFName(event.target.value);
    };
    const fileNote = (e) => {
        setFNote(e.target.value);
    };

    const afName = () => {
        setClick1(!click1);
    };
    const afPara = () => {
        setClick2(!click2);
    };

  let [click,setClick] = useState(false);

  let bttn =()=>{
    setClick(!click)
    setCounter(counter+1)
  }

  
  return (
    <div className=' p-1 absolute Foreground flex overflow-y-scroll flex-wrap z-[2] h-screen w-full'>
      <button onClick={bttn} style={{lineHeight:0.5}} className='add-file  rounded-full text-yellow-50 px-5 absolute bottom-1 right-2 py-5 bg-black '>+</button>

     {click &&         <div>
            <div className=" absolute z-[20] w-76 flex rounded-2xl justify-evenly  text-yellow-50 px-2 bottom-14 right-2 py-2 bg-black input_data">
                <input
                    value={fName}
                    onChange={fileName}
                    type="text"
                    className="Filename bg-white/5 rounded-l-lg py-1 px-3 outline-none "
                    placeholder="Enter file_name :"
                />
                <button onClick={afName} className="bg-yellow-50 text-black py1 px-3 rounded-r-lg">
                    next
                </button>
            </div>

            {click1 && (
                <div className=" h-40 w-76 z-[21] flex rounded-2xl justify-evenly  text-yellow-50 px-2 absolute bottom-14 right-2 py-2 bg-black input_data">
                    <textarea
                        maxLength={100}
                        value={fNote}
                        onChange={fileNote}
                        className=" bg-white/5 rounded-l-lg py-1 px-3 outline-none "
                        placeholder="Enter Notes :"
                    />
                    <button onClick={afPara} className="bg-yellow-50 text-black py1 px-3 rounded-r-lg">
                        next
                    </button>
                </div>
            )}
            {click2 && (
                <div className=" h-40 w-76 z-[21] flex flex-col rounded-2xl justify-evenly  text-yellow-50 px-2 absolute bottom-14 right-2 py-2 bg-black input_data">
                    <div className=" h-[50%] flex">
                        <input
                            type="file"
                            className="Filename W-[55%] bg-white/5 rounded-l-lg py-1 px-3 outline-none "
                            spellCheck="false"
                            placeholder="Enter Note :"
                        />
                        <button onClick={save} className="bg-green-500 w-[40%] text-black py1 px-3 rounded-r-full">
                            Save
                        </button>
                    </div>
                    <div className=" flex justify-between mx-auto">
                        <label htmlFor="filecolor">Make the note private</label>
                        <input className="radio ml-5 outline-none border-none" type="checkbox" name="filecolor" />
                    </div>
                </div>
            )}
            {}
        </div>}
        {formData.map((data, index) => (
                <Card key={index} flName={data.fName} fileNote={data.fNote} />
            ))}
        
    </div>
  )
}

export default Foreground
