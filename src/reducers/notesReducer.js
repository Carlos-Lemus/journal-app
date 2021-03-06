import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.notesAddNew:

            return {
                ...state,
                notes: (state.notes.find( note => note.id === action.payload.id )?
                state.notes
                :
                [action.payload, ...state.notes]
                )
            }

        case types.notesActive:

            return {
                ...state,
                active: {
                    ...action.payload
                }
            };

        case types.notesLoad:

            return {
                ...state,
                notes: [...action.payload]
            }

        case types.notesUpdate:

            return {
                ...state,
                notes: state.notes.map(
                    (note) => (note.id === action.payload.id
                        ? action.payload
                        : note
                    )
                )
            }

        case types.notesDelete:

            return {
                active: null,
                notes: state.notes.filter(note => note.id !== action.payload)
            }

        case types.notesLogoutClear:

            return {
                ...state,
                notes: [],
                active: null
            }

        default:
            return state;
    }

}