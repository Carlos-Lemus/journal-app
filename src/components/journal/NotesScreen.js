import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleteNote } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NotesScreen = () => {

    const { active: note } = useSelector(state => state.notes);

    const [formValues, handleChangeInput, reset] = useForm(note);

    const { title, body, id } = formValues;

    const activeId = useRef(note.id);

    const dispatch = useDispatch()

    useEffect(() => {

        if(note.id !== activeId.current) {  
            reset(note);
            activeId.current = note.id;
        }

    }, [note, reset]);

    useEffect(() => {

        dispatch(activeNote(formValues.id, {...formValues}));
        
    }, [formValues, dispatch]);

    const handleDelete = () => {
        dispatch(startDeleteNote(id));
    }

    return (
        <div className="notes__content-main">
            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    name="title"
                    value={title}
                    onChange={handleChangeInput}
                />

                <textarea
                    placeholder="What happened today"
                    className="notes_textarea"
                    name="body"
                    value={body}
                    onChange={handleChangeInput}
                >
                </textarea>

                {
                    note.url &&
                    <div className="notes__image">
                        <img
                            src={note.url}
                            alt="imagen"
                        />
                    </div>
                }

            </div>

            <div 
                className="btn btn-danger"
                onClick={ handleDelete }
            >
                Delete
            </div>

        </div>
    )
}
