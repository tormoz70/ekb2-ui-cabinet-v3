import Box from "@mui/material/Box";
import DataStatFilterForm from "./DataStatFilter";
import DataStatGrid from "./DataStatGrid";

type Props = {}

const DataStatPage = (props: Props) => {
  return (
      <Box>
        <DataStatFilterForm height={90}/>
        <DataStatGrid topPadding={90}/>
      </Box>
  )
}

export default DataStatPage;