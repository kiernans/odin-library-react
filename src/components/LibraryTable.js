import React from "react";
import { useLibrary } from "./LibraryProvider";

const LibraryTable = () => {

    const library = useLibrary();

     return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Pages</th>
                        <th>Status</th>
                        <th colSpan="1">&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        library.map(book => {
                            return <tr key={book.id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.pages}</td>
                                <td>{book.status}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    );
};

export default LibraryTable;
