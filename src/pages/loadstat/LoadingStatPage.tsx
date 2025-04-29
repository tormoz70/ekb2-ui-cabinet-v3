import Box from '@mui/material/Box';
import LoadingStatFilterForm from "./LoadingStatFilter";
import LoadingStatGrid from "./LoadingStatGrid";


export default function LoadingStatPage() {
  return (
      <Box>
        <LoadingStatFilterForm height={150}/>
        <LoadingStatGrid/>
      </Box>
  );
}