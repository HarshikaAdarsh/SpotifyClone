import { Suspense, useEffect } from 'react';
import { Await, useLoaderData, useLocation } from 'react-router-dom';
import { List } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';

import {
  setCurrentlyPlaying,
  setSongs,
  setCurrentPlaylist,
} from '@/reducers/music';
import { openSnackbar } from '@/reducers/snackbar';

import { Loader } from './components/Loader';
import Song from './components/Song';

function Songs() {
  const { data: songsPromise } = useLoaderData() || {};

  const dispatch = useDispatch();
  const { filteredData, currentTab } = useSelector(state => state.music);

  const location = useLocation();

  const handleSelectMusic = id => () => {
    const music = filteredData.find(({ _id }) => _id == id);

    if (music) {
      dispatch(setCurrentlyPlaying(music));
    }

    if (!currentTab || currentTab != location.pathname) {
      dispatch(setCurrentPlaylist());
    }
  };

  useEffect(() => {
    songsPromise
      ?.then(data => {
        dispatch(setSongs(data?.data?.data?.getSongs || []));
      })
      ?.catch(err => {
        dispatch(openSnackbar({ severity: 'error', msg: err }));
      });
  }, [songsPromise, dispatch]);

  return (
    <Box
      className="music-list-container"
      sx={{
        height: { xs: 'none', sm: '44vh', md: '77vh' },
        overflowY: { xs: 'none', sm: 'scroll' },
      }}
    >
      <Suspense fallback={<Loader />}>
        <Await resolve={songsPromise} errorElement={<p>Error loading songs</p>}>
          <List sx={{ bgcolor: 'transparent' }}>
            {filteredData.map(song => {
              return (
                <Song
                  key={song._id}
                  song={song}
                  onClick={handleSelectMusic(song._id)}
                />
              );
            })}
          </List>
        </Await>
      </Suspense>
    </Box>
  );
}

export default Songs;
