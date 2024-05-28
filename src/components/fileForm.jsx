import React, { useState } from 'react';
import './fileForm.css';
import Card from './Card';

function FileForm() {
    const [click1, setClick1] = useState(false);
    const [click2, setClick2] = useState(false);
    const [formData, setFormData] = useState([]); // State to store form data for each card

    const [fName, setFName] = useState('');
    const [fNote, setFNote] = useState('');
    const [saveNote, setSaveNote] = useState(false);

    const save = () => {
        // Add current form data to the formData array
        setFormData([...formData, { fName, fNote }]);
        setSaveNote(!saveNote);
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

    return (
        <div>
            <div className=" z-[20] w-96 flex rounded-2xl justify-evenly  text-yellow-50 px-5 absolute bottom-14 right-2 py-5 bg-black input_data">
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
                <div className=" h-40 w-96 z-[21] flex rounded-2xl justify-evenly  text-yellow-50 px-5 absolute bottom-14 right-2 py-5 bg-black input_data">
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
                <div className=" h-40 w-96 z-[21] flex flex-col rounded-2xl justify-evenly  text-yellow-50 px-5 absolute bottom-14 right-2 py-5 bg-black input_data">
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

            {/* Render multiple Card components based on formData */}
            {formData.map((data, index) => (
                <Card key={index} flName={data.fName} fileNote={data.fNote} />
            ))}
        </div>
    );
}

export default FileForm;
