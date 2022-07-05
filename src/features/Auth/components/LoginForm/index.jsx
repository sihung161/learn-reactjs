import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Button, LinearProgress, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-control/inputField';
import PasswordField from '../../../../components/form-control/passwordField';


LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
    onSubmit: null,
};

function LoginForm(props) {

    const schema = yup.object().shape({
        identifier: yup.string().required('Please enter your Email').email('Please enter a valid Email'),
        password: yup.string().required('Please enter your Password'),
    });

    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmitForm = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }
        console.log(values);
        // form.reset();
    };

    const { isSubmitting } = form.formState;

    return (
        <div>
            {isSubmitting && <LinearProgress />}

            <Avatar>
                <LockOutlined></LockOutlined>
            </Avatar>
            <Typography component="h3" variant="h5">
                Sign In
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmitForm)}>
                <InputField name="identifier" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <Button disabled={isSubmitting} type="submit" variant="contained" color="primary" fullWidth>
                    Sign in
                </Button>
            </form>
        </div>
        // <form onSubmit={handleSubmit}>
        //     <label style={{ marginRight: '10px' }}>Input new task:</label> <input type="text" value={value} onChange={handleValueChange} placeholder='Input new task and enter'></input>
        // </form>
    );
}

export default LoginForm;
