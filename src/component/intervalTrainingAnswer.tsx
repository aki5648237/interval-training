import Typography from '@mui/material/Typography';

type Props = {
	currentQuestion: number
}

export const Answer = ({currentQuestion}: Props) => {
	
	return (
		<div>
			<Typography>{currentQuestion+1}問</Typography>

		</div>
	)
	
}

export default Answer;