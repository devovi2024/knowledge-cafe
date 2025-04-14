import PropTypes from 'prop-types'; 

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;

  return (
    <div className="bg-slate-200 p-6 m-4 rounded-xl shadow-md hover:bg-slate-300 transition duration-300 ease-in-out">
      <h3 className="text-2xl font-semibold text-gray-800 hover:text-blue-600">
        {title}
      </h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
