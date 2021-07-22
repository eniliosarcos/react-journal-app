import { db } from "../firebase/firebaseConfig"


export const loadNotes = async(uid) => {

    const notesObtained = await db.collection(`${uid}/journal/notes`).get();

    const notes = [];

    notesObtained.forEach( note => {

        notes.push({
            id: note.id,
            ...note.data()
        });
    });
    notes.reverse();
    return notes;
}