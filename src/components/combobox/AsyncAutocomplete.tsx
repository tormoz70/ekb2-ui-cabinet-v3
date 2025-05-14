import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import {useEffect, useState} from "react";

const AsyncAutocomplete = ({ label, fetchOptions, value, onChange, width, dropdownWidth }) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const fetchData = async () => {
        let active = true;

        const _fetchData = async () => {
            setLoading(true);
            try {
                const results = await fetchOptions(inputValue);
                if (active) {
                    setOptions(results.data);
                }
            } catch (error) {
                console.error('Error fetching options:', error);
            } finally {
                if (active) {
                    setLoading(false);
                }
            }
        };

        const debounceTimer = setTimeout(_fetchData, 500);

        return () => {
            active = false;
            clearTimeout(debounceTimer);
        };

    }

    useEffect(() => {

        if (inputValue === '') {
            setOptions(value ? [value] : []);
            return undefined;
        }

        fetchData();
    }, [inputValue, fetchOptions, value]);

    useEffect(() => {
        if (open) {
            //setOptions([]);
            setLoading(true);
            fetchData().then(() => {
                setLoading(false);
            });
        }
    }, [open]);

    // const handleFocus = () => {
    //     if (!hasFocused) {
    //         setLoading(true);
    //         fetchData().then(() => {
    //             setLoading(false);
    //         });
    //         setHasFocused(true);
    //     }
    // };

    return (
        <Autocomplete
            sx={{ width: width }}
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            getOptionLabel={(option) => option.name || ''}
            options={options}
            loading={loading}
            value={value}
            onChange={(event, newValue) => onChange(newValue)}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
            slotProps={{
                paper: {
                    sx: {
                        width: dropdownWidth
                    }
                }
            }}
            renderInput={(params) => (
                <TextField
                    {...params}

                    label={label}
                    variant="outlined"
                    //onFocus={handleFocus}
                    endadornment={
                        <>
                            {loading ? <CircularProgress color="inherit" size={20} /> : null}
                            {params.InputProps.endAdornment}
                        </>
                    }
                />
            )}
            noOptionsText="Нет результатов"
        />
    );
};

export default AsyncAutocomplete;