import { useEffect, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmarks");
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  return (
    <div className="App">
      <Header onSetOpen={setIsOpen} />
      <Main
        isOpen={isOpen}
        onSetOpen={setIsOpen}
        onSetBookmarks={setBookmarks}
        bookmarks={bookmarks}
      />
      <Footer />
    </div>
  );
}

function Main({ isOpen, onSetOpen, onSetBookmarks, bookmarks }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  function handleEditAction(id) {
    const bookmark = bookmarks.find((currBookmark) => currBookmark.id === id);
    if (bookmark) {
      setTitle(bookmark.title);
      setUrl(bookmark.url);
      setDescription(bookmark.description);
      setIsEditing(true);
      setEditId(id);
      onSetOpen(true);
    }
  }

  function handleDeleteAction(id) {
    onSetBookmarks([...bookmarks.filter((bookmark) => bookmark.id !== id)]);
  }

  function handleGoToLink(url) {
    window.open(url, "_blank");
  }

  return (
    <main>
      {isOpen && (
        <>
          <Modal
            onSetOpen={onSetOpen}
            onSetBookmarks={onSetBookmarks}
            bookmarks={bookmarks}
            title={title}
            url={url}
            description={description}
            onSetTitle={setTitle}
            onSetDescription={setDescription}
            onSetUrl={setUrl}
            isEditing={isEditing}
            editId={editId}
          />
        </>
      )}
      <div className="bookmark_table">
        <h2>Bookmarks</h2>
        {bookmarks.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th colSpan="6">S. No.</th>
                <th colSpan="3">Title</th>
                <th colSpan="5">Description</th>
                <th colSpan="5">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookmarks.map((bookmark, index) => (
                <tr key={index}>
                  <td colSpan="6">{index + 1}</td>
                  <td colSpan="3">{bookmark.title}</td>
                  <td colSpan="5">{bookmark.description}</td>
                  <td colSpan="5" className="action_buttons">
                    <Button onClick={() => handleEditAction(bookmark.id)}>
                      Edit
                    </Button>
                    <Button onClick={() => handleGoToLink(bookmark.url)}>
                      Go to Link
                    </Button>
                    <Button onClick={() => handleDeleteAction(bookmark.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>You don't have any bookmark now.</p>
        )}
      </div>
    </main>
  );
}

function Modal({
  onSetOpen,
  onSetBookmarks,
  bookmarks,
  title,
  onSetTitle,
  url,
  onSetUrl,
  description,
  onSetDescription,
  isEditing,
  editId,
}) {
  function resetForm() {
    onSetTitle("");
    onSetUrl("");
    onSetDescription("");
  }
  function handleCloseModal() {
    onSetOpen(false);
    resetForm();
  }

  function handleInputTitle(e) {
    const value = e.target.value;
    if (value.length <= 16) {
      onSetTitle(value.charAt(0).toUpperCase() + value.slice(1));
    }
  }

  function handleInputUrl(e) {
    const value = e.target.value;
    onSetUrl(value);
  }

  function handleInputDescription(e) {
    const value = e.target.value;
    if (value.length <= 80) {
      onSetDescription(value.charAt(0).toUpperCase() + value.slice(1));
    }
  }

  function handleAddBookmark(e) {
    e.preventDefault();

    if (title === "" || url === "" || description === "") return;

    if (isEditing) {
      const updatedBookmarks = [...bookmarks].map((bookmark) =>
        bookmark.id === editId
          ? { ...bookmark, title, url, description }
          : bookmark
      );
      onSetBookmarks(updatedBookmarks);
    } else {
      const newBookmark = {
        id: crypto.randomUUID(),
        title: title,
        url: url,
        description: description,
      };

      onSetBookmarks([newBookmark, ...bookmarks]);
    }
    onSetOpen(false);
    resetForm();
  }

  return (
    <div className="overlay">
      <div className="modal-window">
        <Button onClick={handleCloseModal}>X</Button>
        <form>
          <h2>Add Bookmark 📝</h2>

          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => handleInputTitle(e)}
          />
          <input
            type="text"
            placeholder="Enter URL"
            value={url}
            onChange={(e) => handleInputUrl(e)}
          />
          <input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => handleInputDescription(e)}
          />

          <Button onClick={(e) => handleAddBookmark(e)}>Add</Button>
        </form>
      </div>
    </div>
  );
}

function Header({ onSetOpen }) {
  function handleModal() {
    onSetOpen((val) => !val);
  }
  return (
    <header>
      <h1>LinkVault</h1>
      <Button onClick={handleModal}>Add Bookmark</Button>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>
        &copy; by{" "}
        <a href="https://www.linkedin.com/in/gourav-mishra-622657255/">
          Gourav Mishra
        </a>
      </p>
    </footer>
  );
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default App;
