import { db } from "../firebase/firebaseConfig";

export const loadNotes = async(uid) => {

    const data = await db.collection(`${uid}/journal/notes`).get();
    
    const notes = data.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }) );
    
    return notes;
}