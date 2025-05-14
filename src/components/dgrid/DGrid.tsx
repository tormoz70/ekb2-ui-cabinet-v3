import {
    IconButton,
    styled, TablePagination
} from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import {localConfigs} from "../../configs/localConfigs";
import {
    DataGrid, DataGridProps,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
} from '@mui/x-data-grid';
import {
    FirstPage as FirstPageIcon,
    LastPage as LastPageIcon,
    KeyboardArrowLeft,
    KeyboardArrowRight,
} from '@mui/icons-material';

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

function CustomPaginationActions() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
        <div style={{ display: 'flex' }}>
            <IconButton
                onClick={() => apiRef.current.setPage(0)}
                disabled={page === 0}
                aria-label="first page"
            >
                <FirstPageIcon />
            </IconButton>
            <IconButton
                onClick={() => apiRef.current.setPage(page - 1)}
                disabled={page === 0}
                aria-label="previous page"
            >
                <KeyboardArrowLeft />
            </IconButton>
            <IconButton
                onClick={() => apiRef.current.setPage(page + 1)}
                disabled={page >= pageCount - 1}
                aria-label="next page"
            >
                <KeyboardArrowRight />
            </IconButton>
            <IconButton
                onClick={() => apiRef.current.setPage(pageCount - 1)}
                disabled={page >= pageCount - 1}
                aria-label="last page"
            >
                <LastPageIcon />
            </IconButton>
        </div>
    );
}

function CustomPagination(props) {
    return <TablePagination ActionsComponent={CustomPaginationActions} {...props} />;
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
