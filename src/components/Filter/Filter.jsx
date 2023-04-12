import { useDispatch, useSelector } from 'react-redux';
import { setFilteredValue } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { Input, Text } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const handleChange = evt => {
    const filterName = evt.target.value.trim().toLowerCase();
    dispatch(setFilteredValue(filterName));
  };

  return (
    <>
      <Text>Find contact by name</Text>
      <Input
        type="text"
        name="filter"
        onChange={handleChange}
        value={filterValue}
      />
    </>
  );
};

export default Filter;
