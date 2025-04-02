import {styled} from "@mui/material";
import {DataGrid, DataGridProps} from "@mui/x-data-grid";
import sizeConfigs from "../../configs/sizeConfigs";


const DGrid = styled(DataGrid)<DataGridProps>(({ theme }) => ({
    height: `calc(100vh - ${sizeConfigs.sidebar.height + sizeConfigs.statusBar.height + 20}px)`,
    display: 'flex',
    width: "100%",
}));

export default DGrid;
