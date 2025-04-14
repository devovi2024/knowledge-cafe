import React, { useState } from 'react';
import './App.css';

import Bookmarks from './components/Bookmarks/Bookmarks'; // Make sure this path matches the exact file location
import Header from './components/Header/Header';
import Blogs from './Components/Blogs/Blogs';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  // Add blog to bookmarks
  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  // Mark blog as read, remove from bookmarks and update reading time
  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    // Remove the read blog from bookmarks
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  };

  return (
    <>
      <Header />
      
      {/* Main content layout */}
      <div className="md:flex p-4 max-w-7xl mx-auto space-x-8">
        
        {/* Blogs section */}
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} />

        {/* Bookmarks section */}
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
      </div>
    </>
  );
}

export default App;
