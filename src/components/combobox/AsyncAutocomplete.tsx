import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import {useEffect, useState} from "react";

const AsyncAutocomplete = ({ label, fetchOptions, value, onChange }) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        let active = true;

        if (inputValue === '') {
            setOptions(value ? [value] : []);
            return undefined;
        }

        const fetchData = async () => {
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

        const debounceTimer = setTimeout(fetchData, 500);

        return () => {
            active = false;
            clearTimeout(debounceTimer);
        };
    }, [inputValue, fetchOptions, value]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <Autocomplete
            sx={{ width: 300 }}
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
            renderInput={(params) => (
                <TextField
                    {...params}

                    label={label}
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