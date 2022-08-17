import React, { useState, useContext, useEffect } from 'react'
import { saveBook } from '../Firebase';
import { firestore } from '../firebase-config';
import { collection, query, onSnapshot } from 'firebase/firestore'

const LibraryContext = React.createContext();
const LibraryUpdateContext = React.createContext();

export function useLibrary() {
    return useContext(LibraryContext);
}

export function useLibraryUpdate() {
    return useContext(LibraryUpdateContext);
}

export function LibraryProvider({ children }) {
    const [library, setLibrary] = useState([]);

    useEffect(() => {
        const getLibrary = async () => {
            try {
                const libraryCol = collection(firestore, 'library');
                const q = query(libraryCol);
                
                const libraryChange = onSnapshot(q, (snapshot) => {
                    snapshot.docChanges().forEach((change) => {
                        if(change.type === 'added') {
                            setLibrary((prevLibrary) => [...prevLibrary, ({...change.doc.data(), id: change.doc.id})]);
                        }
                    })
                });
            } catch (error) {
                console.error('Could not retrieve data from Firestore database', error);
            }}

        getLibrary();
    }, []);

    useEffect(() => {
        console.log(library);
    }, [library])

    const handleOnSubmit = (db, title, author, pages, status) => {
        saveBook(db, title, author, pages, status);
    }
    
    return (
        <LibraryContext.Provider value={library}>
            <LibraryUpdateContext.Provider value={handleOnSubmit}>
                {children}
            </LibraryUpdateContext.Provider>
        </LibraryContext.Provider>
    );
};



