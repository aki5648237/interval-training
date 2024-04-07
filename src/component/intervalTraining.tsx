import { useNavigate } from "react-router-dom"
import { Typography, Button, Box, Container, Card} from '@mui/material/';
import AppHeader from "./appHeader";

export const IntervalTraining = () => {
  const navigate = useNavigate();
  return (
    <Box className="container">
     <AppHeader />
     <Typography variant="h2" sx={{ textAlign: 'center', marginTop: '50px', marginBottom: '10px', fontWeight: 'bold'}}>インターバルクイズ</Typography>
      <Box sx={{margin: '0 20px 50px 20px', height: '130px'}}>  
        <Typography>このクイズは、二つの音を聞き、インターバルを当てるトレーニングです。</Typography>
        <Typography>問題数は10問です。</Typography>
      </Box>

      <Box sx={{ textAlign: 'center'}}>
        <Button className="button" onClick={() => navigate('/IntervalTrainingQuiz')} sx={{width: '200px', height: '50px', fontSize: '18px'}}>クイズスタート</Button>
      </Box>
    </Box>
)
}

export default IntervalTraining;