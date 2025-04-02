import {styled} from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";

const MainStatusBar = styled('div')(({theme}) => ({
    backgroundColor: colorConfigs.statusBar.bg,
    border: '1px solid rgba(0, 0, 0, 0.5)',
    width: `100%`,
    height: `${sizeConfigs.statusBar.height}px`,
    display: 'flex',
    alignItems: 'center',
    paddingRight: "5px",
    justifyContent: 'right'
}));

export default MainStatusBar;