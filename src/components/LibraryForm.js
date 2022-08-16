const LibraryForm = () => {
    return (
        <>
            <form>
                <label for="title">Title</label>
                <input type="text" id="title" minlength="1" maxlength="20" required />

                <label for="author">Author</label>
                <input type="text" id="author" minlength="1" maxlength="20" required />
                
                <label for="pages">Pages</label>
                <input type="text" id="pages" minlength="1" maxlength="20" required />

                <select name="status" id="status">
                    <option value="Read">Read</option>
                    <option value="Not Read">Not Read</option>
                </select>

                <button type="button">Add Book</button>
            </form>
        </>
    );
};

export default LibraryForm;