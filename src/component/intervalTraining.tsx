import { useNavigate } from "react-router-dom"
import { Typography, Button, Box, Container, Card} from '@mui/material/';
import AppHeader from "./appHeader";

export const IntervalTraining = () => {
  const navigate = useNavigate();
  return (
    <Box>
     <AppHeader />
      <Card sx={{margin: '50px 20px 50px 20px', height: '170px'}} variant="outlined">
        <Typography variant="h2" sx={{ textAlign: 'center', marginTop: '10px', marginBottom: '15px'}}>インターバルクイズ</Typography>
        <Typography>このクイズは、二つの音を聞き、インターバルを当てるトレーニングです。</Typography>
        <Typography>問題数は10問です。</Typography>
      </Card>

      <Box sx={{ textAlign: 'center'}}>
        <Button onClick={() => navigate('/IntervalTrainingQuiz')} sx={{width: '200px', height: '50px', fontSize: '18px'}}>クイズスタート</Button>
      </Box>

    </Box>
)
}

export default IntervalTraining;