import React from "react";
import LibraryForm from './LibraryForm'
import LibraryTable from "./LibraryTable";
import '../styles/Library.css'

const Library = () => {
    return (
        <>
            <h1>My Library</h1>
            <LibraryForm />
            <LibraryTable />
        </>
    );
};

export default Library;