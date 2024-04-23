import { useNavigate, } from "react-router-dom"
import { Typography, Button, Box} from '@mui/material/';
import AppHeader from '../common/appHeader';

export const IntervalTrainingTop = () => {
	const navigate = useNavigate();

	return (
		<Box className="container">
     <AppHeader />
     <Box sx={{textAlign: 'center', marginTop: '40px'}}>
      <Typography className="sub-title" variant="h2">インターバルクイズ</Typography>
     </Box>
      <Box sx={{margin: '35px 20px 35px 20px'}}>  
        <Typography className="text">このクイズは、二つの音を聞き、インターバルを当てるトレーニングです。</Typography>
        <Typography className="text">問題数は10問です。</Typography>
      </Box>

      <Box sx={{ textAlign: 'center'}}>
        <Button className="main-button" onClick={() => navigate('/IntervalTrainingQuiz')}>クイズスタート</Button>
      </Box>
    </Box>
	)
}
export default IntervalTrainingTop;