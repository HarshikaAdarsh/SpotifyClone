import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
	Avatar,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
	Typography,
} from '@mui/material';

import { getMinAndSec } from '@/common/utils/time';

import playingMusic from '@/assets/gifs/playing-music.gif';

function Song({ song, onClick }) {
	const { currentlyPlaying, isCurrentlyPlayingPaused } = useSelector(
		(state) => state.music
	);

	const { _id, title, photo, duration, artist } = song;

	const { min, seconds } = getMinAndSec(duration);

	const isCurrentlyPlaying = currentlyPlaying?._id == _id;

	return (
		<ListItemButton
			key={_id}
			selected={isCurrentlyPlaying}
			sx={{
				borderRadius: 2,
				transition: 'all 200ms linear',
				':hover': {
					backgroundColor: 'rgba(25, 118, 210, 0.08)',
				},
			}}
			onClick={onClick}>
			<ListItem disablePadding>
				<ListItemAvatar>
					<Avatar src={photo} alt={title} />
				</ListItemAvatar>
				<ListItemText
					primary={title}
					secondary={artist}
					sx={{
						'& p': {
							color: '#fff',
							opacity: '0.6',
						},
						'& span': {
							width: '85%',
						},
					}}
				/>

				{isCurrentlyPlaying && !isCurrentlyPlayingPaused && (
					<Avatar
						sx={{ width: 30, height: 30, mr: 3 }}
						src={playingMusic}
						alt="audio-playing"
						variant="square"
					/>
				)}

				<Typography variant="subtitle1">
					{min}:{seconds}
				</Typography>
			</ListItem>
		</ListItemButton>
	);
}

Song.propTypes = {
	song: PropTypes.object,
	onClick: PropTypes.func,
};

export default Song;
