import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploadingImage } from '../../actions/notes';
import moment from 'moment';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const {active, notes} = useSelector(state => state.notes);

    const noteDate = moment(notes.date);

    const handleSave = () => {
        dispatch(startSaveNote(active));
    }

    const handlePictureUpload = () => {

        document.querySelector('#fileSelector').click();
    }
    const handleFileChange = (e) => {
        const file = e.target.files;

        if(file){

            dispatch(startUploadingImage(file[0]));
        }
    }

    return (
        <div className="notes_appbar">
            <span>{noteDate.format('LL')}</span>

            <input 
                id="fileSelector"
                type="file"
                style={{display: 'none'}}
                name="file"
                onChange={handleFileChange}
            />

            <div>
                <button 
                    className="btn"
                    onClick={handlePictureUpload}
                >
                    Picture
                </button>
                <button 
                    className="btn"
                    onClick={handleSave}
                >
                    Save
                </button>

            </div>
        </div>
    )
}
