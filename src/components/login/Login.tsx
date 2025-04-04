import {KeyboardEvent, useEffect} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {Dialog, DialogTitle} from "@mui/material";
import {RootState, useAppDispatch, useAppSelector} from "../../redux/store";
import {loginUser} from "../../redux/userProfile/userProfileThunk";
import {appStateSlice, setLoginError, setLoginOpened} from "../../redux/appState/appStateSlice";
import {EkbLoginError} from "../../model/EkbLoginError";

const LoginDialog = () => {
    const dispatch = useAppDispatch();
    const {loginOpened} = useAppSelector((state: RootState) => state.appStateState)
    const {loginError} = useAppSelector((state: RootState) => state.appStateState)
    const {user} = useAppSelector((state: RootState) => state.userProfileState)
    const {error} = useAppSelector((state: RootState) => state.userProfileState)

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        dispatch(loginUser(data.get("email") as string, data.get("password") as string));
    };

    const handleCancel = (event: any) => {
        dispatch(appStateSlice.actions.setLoginOpened(false));
    };

    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
        if (event.key === 'Escape') {
            handleCancel(event);
        }
    }

    const handleEscapeKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            handleCancel(event);
        }
    }

    useEffect(() => {
        if (user && user.name) {
            console.log("userProfile loaded: ", user);
            dispatch(appStateSlice.actions.setLoginOpened(false));
        }
    }, [user])

    useEffect(() => {
        if (error && loginOpened) {
            console.log("error: ", error);
            // @ts-ignore
            const msg: string = error['msg'];
            dispatch(appStateSlice.actions.setLoginError(new EkbLoginError(msg)))
        }
    }, [error])

    return (
        <Dialog aria-labelledby="simple-dialog-title" open={loginOpened} onKeyDown={handleEscapeKeyPress}>
            <DialogTitle id="simple-dialog-title">Вход в систему</DialogTitle>
            <Container component="main" maxWidth="sm">
                <Box
                    sx={{
                        boxShadow: 3,
                        borderRadius: 2,
                        px: 4,
                        py: 6,
                        marginTop: 8,
                        marginBottom: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Введите данные пользователя:
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}} onKeyDown={handleKeyPress}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email адрес"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Typography component="p" variant="body2" color={"red"}>
                            {loginError?.message}
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{mt: 2, mb: 2}}
                                >
                                    Вход
                                </Button>
                            </Grid>
                            <Grid item xs>
                                <Button
                                    type="button"
                                    fullWidth
                                    variant="contained"
                                    sx={{mt: 2, mb: 2}}
                                    onClick={handleCancel}
                                >
                                    Отмена
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Dialog>
    );
}

export default LoginDialog;