import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className="mb-12 space-y-6 bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-2xl">
            {/* Blog Cover Image */}
            <img className="w-full rounded-lg mb-6" src={cover} alt={`Cover picture of the title ${title}`} />

            {/* Author and Read Time */}
            <div className="flex justify-between mb-4">
                <div className="flex items-center">
                    <img className="w-12 h-12 rounded-full" src={author_img} alt={author} />
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold">{author}</h3>
                        <p className="text-gray-500 text-sm">{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="text-gray-500">{reading_time} min read</span>
                    <button
                        onClick={() => handleAddToBookmark(blog)}
                        className="ml-4 text-2xl text-red-600 hover:text-red-700 transition-colors"
                    >
                        <FaBookmark />
                    </button>
                </div>
            </div>

            {/* Blog Title */}
            <h2 className="text-3xl font-bold text-gray-800">{title}</h2>

            {/* Hashtags */}
            <p className="text-sm text-gray-500">
                {hashtags.map((hash, idx) => (
                    <span key={idx}>
                        <a href="#" className="text-blue-600 hover:underline">#{hash}</a>
                        {idx < hashtags.length - 1 && ', '}
                    </span>
                ))}
            </p>

            {/* Mark As Read Button */}
            <button
                onClick={() => handleMarkAsRead(id, reading_time)}
                className="mt-4 text-purple-800 font-bold underline hover:text-purple-600 transition-colors"
            >
                Mark As Read
            </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
};

export default Blog;
