import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploding } from '../../actions/notes';

export const NotesAppBar = () => {

    const {active} = useSelector(state => state.notes)
    const dispatch = useDispatch()

    const handleSave = () => {
        
        dispatch(startSaveNote(active));

    }

    const handlePicture = () => {
        
        document.querySelector("#fileSelected").click();
    }

    const handleFile = (event) => {
        const file = event.target.files[0];
        
        if(file) {
            dispatch(startUploding(file));
        }
    }

    return (
        <div className="notes__appbar">
            <span>28 de Febrero de 2021</span>    
            
            <input 
                id="fileSelected" 
                name="fileSelected" 
                type="file" 
                style={{ display: "none" }}
                onChange={ handleFile }
            />

            <div>
                <button className="btn"
                    onClick={ handlePicture }
                >
                    Picture
                </button>

                <button className="btn"
                    onClick={ handleSave }
                >
                    Save
                </button>
            </div>

        </div>
    )
}
