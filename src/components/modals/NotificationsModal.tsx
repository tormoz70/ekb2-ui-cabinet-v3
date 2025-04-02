// @ts-nocheck
import React, {KeyboardEvent} from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import DGrid from "../dgrid/DGrid";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import sizeConfigs from "../../configs/sizeConfigs";

const columns1: GridColDef<(typeof rows1)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'notificationMessage',
        headerName: 'First name',
        width: 150,
        editable: false
    },
    {
        field: 'notificationTime',
        headerName: 'Last name',
        width: 150,
        editable: false
    }
];

const rows1 = [
    { id: 1, notificationMessage: 'Snow', notificationTime: '2024-08-01 23:55:00'},
    { id: 2, notificationMessage: 'Rain', notificationTime: '2024-08-02 23:55:00'},
    { id: 3, notificationMessage: 'Sunny', notificationTime: '2024-08-03 23:55:00'},
    { id: 4, notificationMessage: 'Dark', notificationTime: '2024-08-04 23:55:00'},
    { id: 5, notificationMessage: 'Dark', notificationTime: '2024-08-04 23:55:00'},
    { id: 6, notificationMessage: 'Dark', notificationTime: '2024-08-04 23:55:00'},
    { id: 7, notificationMessage: 'Dark', notificationTime: '2024-08-04 23:55:00'},
    { id: 8, notificationMessage: 'Dark', notificationTime: '2024-08-04 23:55:00'},
    { id: 9, notificationMessage: 'Dark', notificationTime: '2024-08-04 23:55:00'},
    { id: 10, notificationMessage: 'Dark', notificationTime: '2024-08-04 23:55:00'},
    { id: 11, notificationMessage: 'Dark', notificationTime: '2024-08-04 23:55:00'},
    { id: 12, notificationMessage: 'Dark', notificationTime: '2024-08-04 23:55:00'},
    { id: 13, notificationMessage: 'Dark', notificationTime: '2024-08-04 23:55:00'},
    { id: 14, notificationMessage: 'Dark', notificationTime: '2024-08-04 23:55:00'},
    { id: 15, notificationMessage: 'Dark', notificationTime: '2024-08-04 23:55:00'},
    { id: 16, notificationMessage: 'Dark', notificationTime: '2024-08-04 23:55:00'},
];

type Props = {
    openModal: boolean,
    onClose: () => void
}

const NotificationsModal = ({ openModal, onClose }: Props) => {

    const handleCancel = (event: any) => {
        onClose();
    };

    const handleKeyPress = (event: KeyboardEvent) => {
        if(event.key === 'Escape'){
            handleCancel(event);
        }
    };


    return (
        <Dialog aria-labelledby="simple-dialog-title" open={openModal} onKeyDown={handleKeyPress}
                title="Dialog Tile attr"
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "800px",  // Set your width here
                            height: "100%",
                            maxHeight: "600px",  // Set your width here
                        },
                    },
                }}
        >
            <DialogTitle id="simple-dialog-title" sx={{padding: 1}} >Уведомления</DialogTitle>
            <DialogContent sx={{padding: 1}}>
                <Box
                    sx={{
                        boxShadow: 3,
                        borderRadius: 2,
                        px: 1,
                        py: 1,
                        margin: 0,
                        display: "flex",
                        height: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <DataGrid
                        sx={{
                            margin: 0,
                            padding: 0,
                        }}
                        rows={rows1}
                        columns={columns1}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 50,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection={false}
                        disableRowSelectionOnClick
                    />
                </Box>
            </DialogContent>
        </Dialog>
    );
}

export default NotificationsModal;