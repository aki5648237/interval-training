import { Typography, Button, Box, Container, Card} from '@mui/material/';

export const AppHeader = () => {
	return (
		<Container sx={{ textAlign: 'center'}} maxWidth="xs">
		<Typography variant="h1" component="span">音楽トレーニング.jp</Typography>
		<Typography>君の音楽戦闘力をあげよう</Typography>
	</Container>
	);
}
export default AppHeader;