import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function PasswordField(props) {
    const { form, name, label, disabled } = props;
    const {
        //formState,
        formState: { errors },
    } = form;
    //const hasError = errors[name] && formState.touchedFields[name];
    const hasError = errors[name];
    const [showPassword, setShowPassword] = useState(false);

    // const toggleShowPassword = () => {
    //     setShowPassword((x) => !x);
    // };

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    return (
        <div>
            <Controller
                render={({ field: { onChange, onBlur, value, name, ref } }) => (
                    <TextField
                        value={value}
                        onChange={onChange} // send value to hook form
                        onBlur={onBlur} // notify when input is touched
                        label={label}
                        disabled={disabled}
                        error={!!hasError}
                        helperText={errors[name]?.message}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        type={showPassword ? 'text' : 'password'} // <-- This is where the magic happens
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                )}
                name={name}
                control={form.control}
                rules={{ required: true }}
            />
            {/* <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
          id={name}
          type={showPassword ? 'text' : 'password'}
          label={label}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword} edge="end">
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl> */}
        </div>
    );
}

export default PasswordField;
