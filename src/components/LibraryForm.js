import useBook from "./useBook";
import { useLibraryUpdate } from "./LibraryProvider";
import { firestore } from '../firebase-config';

const LibraryForm = () => {

    const {  handleTitleChange, 
             handleAuthorChange, 
             handlePagesChange, 
             handleStatusChange,
             title,
             author,
             pages,
             status } = useBook();

    const handleOnSubmit = useLibraryUpdate();

    return (
        <>
            <form>
                <label htmlFor="title">Title</label>
                <input type="text" name='title' id="title" minLength="1" maxLength="20" value={title} onChange={handleTitleChange} required />

                <label htmlFor="author">Author</label>
                <input type="text" name='author' id="author" minLength="1" maxLength="20" value={author} onChange={handleAuthorChange} required />
                
                <label htmlFor="pages">Pages</label>
                <input type="text" name='pages' id="pages" minLength="1" maxLength="20" value={pages} onChange={handlePagesChange} required />

                <select name="status" id="status" onChange={handleStatusChange}>
                    <option value="Read">Read</option>
                    <option value="Not Read">Not Read</option>
                </select>

                <button type="button" onClick={() => handleOnSubmit(firestore, title, author, pages, status)}>Add Book</button>
            </form>
        </>
    );
};

export default LibraryForm;