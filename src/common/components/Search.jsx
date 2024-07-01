import { useDispatch, useSelector } from 'react-redux';
import { InputAdornment, InputBase } from '@mui/material';
import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

import { debounce } from '@/common/utils/debounce';

import { setFilteredData } from '@/reducers/music';

function Search() {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.music);

  const handleSearch = debounce(e => {
    const { value } = e.target;

    const filteredData = data.filter(
      ({ title, artist }) =>
        title.toLowerCase().includes(value.toLowerCase()) ||
        artist.toLowerCase().includes(value.toLowerCase())
    );

    dispatch(setFilteredData(filteredData));
  });

  return (
    <Box px={{ xs: 0, md: 2 }}>
      <InputBase
        fullWidth
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.08);',
          my: 2,
          height: '2.5rem',
          px: 2,
          borderRadius: 2,
          maxWidth: '400px',
          '& input': {
            py: 1,
            color: '#fff',
          },
        }}
        onChange={handleSearch}
        placeholder="Search Song, Artist"
        endAdornment={
          <InputAdornment sx={{ color: '#fff' }} position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </Box>
  );
}

export default Search;
