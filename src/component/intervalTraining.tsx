import { useNavigate } from "react-router-dom"
import { Typography, Button, Box, Container, Card} from '@mui/material/';
import AppHeader from "./appHeader";

export const IntervalTraining = () => {
  const navigate = useNavigate();
  return (
    <Box>
     <AppHeader />
      <Card sx={{margin: '50px 20px 50px 20px'}} variant="outlined">
        <Typography sx={{ textAlign: 'center'}}>インターバルクイズ</Typography>
        <Typography>このクイズは、二つの音を聞き、インターバルを当てるトレーニングです。</Typography>
        <Typography>問題数は10問です。</Typography>
      </Card>

      <Box sx={{ textAlign: 'center'}}>
        <Button onClick={() => navigate('/IntervalTrainingQuiz')}>クイズスタート</Button>
      </Box>

    </Box>
)
}

export default IntervalTraining;