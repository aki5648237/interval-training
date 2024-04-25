import { useNavigate } from "react-router-dom"
import React from 'react';
import { Typography, Button, Box, List, ListItem, ListItemText} from '@mui/material/';

type Props = {
	handleResetButton : () => void
}

export const IntervalQuizResultContents : React.FC<Props> = (
	{handleResetButton} : Props
) => {
	const navigate = useNavigate();
	return (
		<>
			<Box sx={{textAlign: 'center'}}>
				<Typography className="sub-title" variant="h2" sx={{paddingTop: '50px', marginBottom: '10px'}}>
					クイズの結果
				</Typography>
			</Box>
			<Box sx={{margin: '0 20px 40px 20px', textAlign: 'center'}}>
				<Box>
					<List>
						<ListItem>
							<ListItemText></ListItemText>
						</ListItem>
						<ListItem>
							{/* <ListItemText>間違えた回数{missCount}</ListItemText> */}
						</ListItem>
						<ListItem>
							<ListItemText>得点</ListItemText>
						</ListItem>
					</List>
				</Box>
			</Box>
			<Box sx={{ textAlign: 'center', marginTop: '10px'}}>
				<Button className="button" sx={{width: '130px', height: '50px', marginRight:'20px', fontSize: '18px'}} onClick={() => navigate('/')} variant='outlined'>Top</Button>
				<Button className="button" sx={{width: '130px', height: '50px', marginLeft: '20px', fontSize: '18px'}} onClick={() => handleResetButton()} variant='outlined'>もう一度</Button>
			</Box>
		</>
	)
}