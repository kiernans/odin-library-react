import { useState } from "react";

const useBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pages, setPages] = useState('');
    const [status, setStatus] = useState('Read');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    };
    const handlePagesChange = (e) => {
        setPages(e.target.value);
    };
    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };
    return {
        title,
        author,
        pages,
        status,
        handleTitleChange,
        handleAuthorChange,
        handlePagesChange,
        handleStatusChange,
    };
};

export default useBook;