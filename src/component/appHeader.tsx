import { Typography, Box, Container} from '@mui/material/';

export const AppHeader = () => {
	return (
		<Box sx={{ textAlign: 'center'}} maxWidth="xs">
			<Box sx={{backgroundColor: 'rgba(250,163,0,0.9)'}}>
				<h1 className='title'>音楽トレーニング.jp</h1>
				<Typography>君の音楽戦闘力をあげよう</Typography>
			</Box>
		</Box>
	);
}
export default AppHeader;