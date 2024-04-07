import { Typography, Box, Container} from '@mui/material/';
import image from '../images/wood.jpeg';

export const AppHeader = () => {
	return (
		<Box sx={{ textAlign: 'center'}} maxWidth="xs">
			<img src={image} className='image'></img>
			<Box sx={{backgroundColor: '#8e3b0b'}}>
				<h1 className='title'>音感トレーニング.jp</h1>
				<Typography>君の音楽戦闘力をあげよう</Typography>
			</Box>
		</Box>
	);
}
export default AppHeader;