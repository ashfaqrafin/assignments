const API_URL = 'http://localhost:3001/bookmarks';

// Fetch bookmarks when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchBookmarks();
});

// Fetch bookmarks from the backend
async function fetchBookmarks() {
    try {
        const response = await axios.get(API_URL);
        const bookmarks = response.data;
        bookmarks.forEach(bookmark => addBookmarkToDOM(bookmark));
    } catch (error) {
        console.error('Error fetching bookmarks:', error);
    }
}

// Add a bookmark to the DOM
function addBookmarkToDOM(bookmark) {

    const bookmarkList = document.getElementById('bookmark-list');
    const bookmarkItem = document.createElement('li');
    bookmarkItem.classList.add('bookmark-item');
    bookmarkItem.setAttribute('data-id', bookmark.id);

    const url = document.createElement('span');
    console.log(bookmark.bookmark?.url)
    url.textContent = `${bookmark.url} (${bookmark.category})`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteBookmark(bookmark.id));

    bookmarkItem.appendChild(url);
    bookmarkItem.appendChild(deleteButton);

    bookmarkList.appendChild(bookmarkItem);

}

// Add a new bookmark
document.getElementById('add-bookmark-btn').addEventListener('click', () => {
    //  start here
});

// Delete a bookmark
function deleteBookmark(id) {
    //  start here;
}
