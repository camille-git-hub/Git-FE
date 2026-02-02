const FilterComponent = ({ setFilter }) => {
  const setFilteredView = (filter) => {
      setFilter(filter);
  };
 
  return (
    <div className='mb-4 flex space-x-2'>
      <button onClick={() => setFilteredView('all')} className='bg-gray-200 px-3 py-1 rounded'>
        All
      </button>
      <button onClick={() => setFilteredView('active')} className='bg-gray-200 px-3 py-1 rounded'>
        Active
      </button>
      <button
        onClick={() => setFilteredView('completed')}
        className='bg-gray-200 px-3 py-1 rounded'
      >
        Completed
      </button>
    </div>
  );
};
 
export default FilterComponent;