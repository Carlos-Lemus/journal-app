import { db } from "../firebase/firebaseConfig";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
import Swal from 'sweetalert2';

export const startNewNote = () => {

    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);

        dispatch(activeNote(docRef.id, newNote));
    }

}

export const startLoadNotes = (uid) => {
    return async (dispatch) => {

        const notes = await loadNotes(uid);

        dispatch(setNotes(notes))

    }
}

export const activeNote = (id, note) => ({

    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
});

export const startSaveNote = (note) => {

    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        const noteFireStore = { ...note };

        delete noteFireStore.id;

        if (!noteFireStore.url) {
            delete noteFireStore.url;
        }

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteFireStore);

        dispatch(startRefresNotes(note.id, noteFireStore));
        dispatch(addNewNote(note.id, noteFireStore));

        Swal.fire({
            icon: 'success',
            title: "Saved",
            text: note.title,
        });

    }

}

export const addNewNote = (id, note) => {
    return {
        type: types.notesAddNew,
        payload: { 
            id, ...note
        }
    }
}

export const startRefresNotes = (id, note) => ({

    type: types.notesUpdate,
    payload: {
        id,
        ...note
    }

})

export const startUploding = (file) => {

    return async (dispatch, getState) => {

        Swal.fire({
            title: 'Uploading...',
            text: "Please wait",
            showConfirmButton: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        })

        const { active: activeNote } = getState().notes;

        const urlUpload = await fileUpload(file);

        activeNote.url = urlUpload;

        dispatch(startSaveNote(activeNote));

        Swal.close();
    }
}

export const startDeleteNote = (id) => {

    return async(dispatch, getState) => {

        const { uid } = getState().auth;
        
        await db.doc(`${uid}/journal/notes/${id}`).delete();

        dispatch(deleteNote(id));
    }

}

export const deleteNote = (id) => {
    return {
        type: types.notesDelete,
        payload: id
    }
}

export const startLogoutClear = () => {
    return {
        type: types.notesLogoutClear
    }
}