import image from '../images/mainImage.png'
import { Typography, Button, Card, Box, List, ListItem, ListItemText} from '@mui/material/';

export const MainText = () => {
	return (
		<Box>
			<img src={image} className='image'></img>
		</Box>
	);

}
export default MainText;