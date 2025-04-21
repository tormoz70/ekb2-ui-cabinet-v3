
export const localConfigs = {
    dbGrid: {
        // Root
        noRowsLabel: 'No rows',
        noResultsOverlayLabel: 'No results found.',

        // Density selector toolbar button
        toolbarDensity: 'Density',
        toolbarDensityLabel: 'Density',
        toolbarDensityCompact: 'Compact',
        toolbarDensityStandard: 'Standard',
        toolbarDensityComfortable: 'Comfortable',

        // Columns selector toolbar button
        toolbarColumns: 'Columns',
        toolbarColumnsLabel: 'Show columns',

        // Filters toolbar button
        toolbarFilters: 'Filters',
        toolbarFiltersLabel: 'Show filters',
        toolbarFiltersTooltipHide: 'Hide filters',
        toolbarFiltersTooltipShow: 'Show filters',
        toolbarFiltersTooltipActive: count => `${count} active filter(s)`,

        // Export button
        toolbarExport: 'Export',
        toolbarExportLabel: 'Export',
        toolbarExportCSV: 'Download as CSV',
        toolbarExportPrint: 'Print',

        // Columns panel text
        columnsPanelTextFieldLabel: 'Find column',
        columnsPanelTextFieldPlaceholder: 'Column title',
        columnsPanelDragIconLabel: 'Reorder column',
        columnsPanelShowAllButton: 'Show all',
        columnsPanelHideAllButton: 'Hide all',

        // Filter panel text
        filterPanelAddFilter: 'Add filter',
        filterPanelDeleteIconLabel: 'Delete',
        filterPanelOperators: 'Operators',
        filterPanelOperatorAnd: 'And',
        filterPanelOperatorOr: 'Or',
        filterPanelColumns: 'Columns',
        filterPanelInputLabel: 'Value',
        filterPanelInputPlaceholder: 'Filter value',

        // Filter operators text
        filterOperatorContains: 'contains',
        filterOperatorEquals: 'equals',
        filterOperatorStartsWith: 'starts with',
        filterOperatorEndsWith: 'ends with',
        filterOperatorIs: 'is',
        filterOperatorNot: 'is not',
        filterOperatorAfter: 'is after',
        filterOperatorOnOrAfter: 'is on or after',
        filterOperatorBefore: 'is before',
        filterOperatorOnOrBefore: 'is on or before',
        filterOperatorIsEmpty: 'is empty',
        filterOperatorIsNotEmpty: 'is not empty',

        // Column menu text
        columnMenuLabel: 'Menu',
        columnMenuShowColumns: 'Show columns',
        columnMenuFilter: 'Filter',
        columnMenuHideColumn: 'Hide',
        columnMenuUnsort: 'Unsort',
        columnMenuSortAsc: 'Sort by ASC',
        columnMenuSortDesc: 'Sort by DESC',

        // Column header text
        columnHeaderFiltersTooltipActive: count => `${count} filter(s) active`,
        columnHeaderFiltersLabel: 'Show filters',
        columnHeaderSortIconLabel: 'Sort',

        // Rows selected footer text
        footerRowSelected: count => `${count.toLocaleString()} row(s) selected`,

        // Total rows footer text
        footerTotalRows: 'Total Rows:',

        // Pagination footer text
        footerPaginationRowsPerPage: 'На странице:',

        MuiTablePagination: {
            labelRowsPerPage: "На странице",
            labelDisplayedRows: ({from, to, count}) =>
                `${from} - ${to} из ${count === -1 ? `более чем ${to}` : count}`,
        },
    },

    dateTimePicker: {
        // months: [
        //     'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
        //     'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
        // ],
        // Can override other texts too
        //previousMonth: 'Пред месяц',
        //nextMonth: 'След месяц',
        okButtonLabel: 'OK',
        cancelButtonLabel: 'ОТМЕНА',
        clearButtonLabel: 'Сбросить',
        todayButtonLabel: "Сегодня"
    },
};

