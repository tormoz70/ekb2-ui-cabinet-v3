import {styled} from "@mui/material";
import {DataGrid, DataGridProps} from "@mui/x-data-grid";
import colorConfigs from "../../configs/colorConfigs";
import {localConfigs} from "../../configs/localConfigs";


interface CustomDataGridProps extends DataGridProps {
    heightDeltaMinus: number;
}

const StyledDataGrid = styled(DataGrid)<CustomDataGridProps>(({ theme, heightDeltaMinus }) => ({
    height: `calc(100vh - ${heightDeltaMinus}px)`,
    display: 'flex',
    width: "100%",
    '& .MuiDataGrid-columnHeader': {
        backgroundColor: colorConfigs.dbGrid.header.bg,
        color: colorConfigs.dbGrid.header.color,
    },
    '& .MuiDataGrid-sortIcon': {
        color: colorConfigs.dbGrid.header.color,
    },
    '& .MuiDataGrid-columnSeparator': {
        visibility: 'hidden',
    },
    '& .MuiDataGrid-columnHeaderTitle': {
        fontWeight: 'bold',
    },

}));

function DGrid(props: CustomDataGridProps) {
    return (
        <StyledDataGrid
            {...props}
            localeText={localConfigs.dbGrid}
        />
    );
}

export default DGrid;
