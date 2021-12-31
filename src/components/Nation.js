import { Autocomplete, TextField } from "@mui/material";

const Nation = (props) => {
  const { countries, setCountriesSelected } = props;
  return (
    <>
      <Autocomplete
        sx={{ width: 300 }}
        options={countries}
        autoComplete={true}
        getOptionLabel={(option) => option.Country}
        onChange={(event, value) => {
            setCountriesSelected(value)
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Quốc gia"
            autoComplete="country"
            helperText="Lựa chọn quốc gia"
          />
        )}
      />
    </>
  );
};

export default Nation;
