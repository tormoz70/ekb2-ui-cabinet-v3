import {
    Box,
    IconButton, MenuItem, Pagination, Select,
    styled, TablePagination, TablePaginationProps
} from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import {localConfigs} from "../../configs/localConfigs";
import {
    DataGrid, DataGridProps,
    gridPageCountSelector,
    gridPageSelector, gridPaginationModelSelector,
    useGridApiContext,
    useGridSelector,
    GridPagination
} from '@mui/x-data-grid';
import {
    FirstPage as FirstPageIcon,
    LastPage as LastPageIcon,
    KeyboardArrowLeft,
    KeyboardArrowRight,
} from '@mui/icons-material';
import MuiPagination from '@mui/material/Pagination';


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

function PPagination({
                        page,
                        onPageChange,
                        className,
                    }: Pick<TablePaginationProps, 'page' | 'onPageChange' | 'className'>) {
    const apiRef = useGridApiContext();
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
        <MuiPagination
            color="primary"
            className={className}
            count={pageCount}
            page={page + 1}
            onChange={(event, newPage) => {
                onPageChange(event as any, newPage - 1);
            }}
            showFirstButton
            showLastButton
        />
    );
}

function CustomPagination(props: any) {
    return <GridPagination ActionsComponent={PPagination} {...props} />;
}


function DGrid(props: CustomDataGridProps) {
    return (
        <StyledDataGrid
            {...props}
            localeText={localConfigs.dbGrid}
            slots={{
                pagination: CustomPagination,
            }}
        />
    );
}

export default DGrid;
