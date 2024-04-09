import { Typography, Box, Container} from '@mui/material/';
import image from '../images/wood.jpeg';

export const AppHeader = () => {
	return (
		<Box sx={{position: 'relative'}} maxWidth="xs">
				<img src={image} className='image'></img>
				<Box sx={{width: '100%', textAlign: 'center', position: 'absolute', top: '17px'}}>
					<Typography className="title" variant='h1'>音感トレーニング.jp</Typography>
				</Box>
				
				{/* <Typography>君の音楽戦闘力をあげよう</Typography> */}
		</Box>
	);
}
export default AppHeader;