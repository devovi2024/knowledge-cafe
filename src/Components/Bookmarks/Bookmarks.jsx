import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 p-4 bg-gray-100 ml-4 mt-2 pt-4 rounded-lg shadow-lg">
      {/* Reading Time */}
      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-gray-700">
          Reading Time: <span className="font-bold text-blue-600">{readingTime} min</span>
        </h3>
      </div>

      {/* Bookmarked Blogs Title */}
      <h2 className="text-3xl text-center font-bold text-gray-800 mb-4">
        Bookmarked Blogs: {bookmarks.length}
      </h2>

      {/* Display Message if No Bookmarks */}
      {bookmarks.length === 0 ? (
        <p className="text-center text-gray-500">No bookmarks available.</p>
      ) : (
        bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark} />
        ))
      )}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
