import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to load blogs.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="md:w-2/3 p-4">
        <h1 className="text-4xl font-semibold text-gray-700">Loading Blogs...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="md:w-2/3 p-4">
        <h1 className="text-4xl font-semibold text-red-600">Error: {error}</h1>
      </div>
    );
  }

  return (
    <div className="md:w-2/3 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Blogs: {blogs.length}</h1>
      <div className="space-y-6">
        {blogs.map(blog => (
          <Blog
            key={blog.id}
            blog={blog}
            handleAddToBookmark={handleAddToBookmark}
            handleMarkAsRead={handleMarkAsRead}
          />
        ))}
      </div>
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired
};

export default Blogs;
