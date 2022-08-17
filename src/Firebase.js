import { collection, addDoc, serverTimestamp } from 'firebase/firestore'


export async function saveBook(db, title, author, pages, status) {
    try {
        await addDoc(collection(db, 'library'), {
            title: title,
            author: author, 
            pages: pages,
            status: status,
            timestamp: serverTimestamp()
        })
        console.log('Wrote to database');
    } catch (error) {
        console.error('Error writing new book to Firebase Database', error);
    }
};