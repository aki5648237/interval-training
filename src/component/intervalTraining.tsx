import { useNavigate } from "react-router-dom"
import { Typography, Button, Box, Container, Card} from '@mui/material/';
import AppHeader from "./appHeader";

export const IntervalTraining = () => {
  const navigate = useNavigate();
  return (
    <Box className="container">
     <AppHeader />
     <Box sx={{textAlign: 'center', marginTop: '40px', marginBottom: '20px', }}>
      <Typography className="sub-title" variant="h2">インターバルクイズ</Typography>
     </Box>
      <Box sx={{margin: '0 20px 40px 20px'}}>  
        <Typography className="text">このクイズは、二つの音を聞き、インターバルを当てるトレーニングです。</Typography>
        <Typography className="text">問題数は10問です。</Typography>
      </Box>

      <Box sx={{ textAlign: 'center'}}>
        <Button className="main-button" onClick={() => navigate('/IntervalTrainingQuiz')}>クイズスタート</Button>
      </Box>
    </Box>
)
}

export default IntervalTraining;