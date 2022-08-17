import React, { useState, useContext, useEffect } from 'react'
import uniqid from 'uniqid'
import { saveBook } from '../Firebase';
import { firestore } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore'

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
                const librarySnapshot = await getDocs(libraryCol);
                setLibrary(librarySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
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



