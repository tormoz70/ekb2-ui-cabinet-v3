import Box from "@mui/material/Box";
import FilmsRegFilterForm from "./FilmsRegFilter";
import FilmsRegGrid from "./FilmsRegGrid";

type Props = {}

const FilmsRegPage = (props: Props) => {
  return (
      <Box>
        <FilmsRegFilterForm height={90}/>
        <FilmsRegGrid topPadding={90}/>
      </Box>
  )
}

export default FilmsRegPage;