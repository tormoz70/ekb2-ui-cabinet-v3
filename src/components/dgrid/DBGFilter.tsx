import {styled} from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";

interface DBGFilterProps {
    height: number;
}

const DBGFilter = styled('div')<DBGFilterProps>(({theme, height}) => ({
    backgroundColor: colorConfigs.statusBar.bg,
    border: '1px solid rgba(0, 0, 0, 0.5)',
    width: `100%`,
    height: `${height}px`,
    display: 'flex',
    alignItems: 'top',
    paddingTop: "7px",
    paddingRight: "5px",
    paddingLeft: "5px",
    justifyContent: 'left'
}));

export default DBGFilter;