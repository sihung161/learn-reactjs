import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Button, LinearProgress, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-control/inputField';
import PasswordField from '../../../../components/form-control/passwordField';


RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

RegisterForm.defaultProps = {
    onSubmit: null,
};

function RegisterForm(props) {
    // const { onSubmit } = props;
    // const [value, setValue] = useState('');

    // function handleValueChange(e) {
    //     console.log(e.target.value);
    //     setValue(e.target.value);
    // }

    // function handleSubmit(e) {
    //     //chặn reload khi enter
    //     e.preventDefault();
    //     if (!onSubmit) return;

    //     const formValues = {
    //         title: value,

    //     }
    //     onSubmit(formValues);

    //     //reset form
    //     setValue('');
    // }

    const schema = yup.object().shape({
        fullName: yup
            .string()
            .required('Please enter your Full Name')
            .test('Should has at least two words', 'Please enter at least two words', (value) => {
                return value.split(' ').length >= 2;
            }),
        email: yup.string().required('Please enter your Email').email('Please enter a valid Email'),
        password: yup.string().required('Please enter your Password').min(6, 'Please enter at least 6 characters.'),
        retypePassword: yup
            .string()
            .required('Please enter your Retype Password')
            .oneOf([yup.ref('password')], 'Password does not match'),

        // fullName: yup.string().required('Please enter title').min(5, 'Title is too short'),
        // email: yup.string().required('Please enter email').min(5, 'Title is too short'),
        // password: yup.string().required('Please enter Password').min(5, 'Title is too short'),
        // retypePassword: yup.string().required('Please enter Retype Password').min(5, 'Title is too short'),
    });

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
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
                Create An Account
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmitForm)}>
                <InputField name="fullName" label="Full Name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <PasswordField name="retypePassword" label="Retype Password" form={form} />
                <Button disabled={isSubmitting} type="submit" variant="contained" color="primary" fullWidth>
                    Create an account
                </Button>
            </form>
        </div>
        // <form onSubmit={handleSubmit}>
        //     <label style={{ marginRight: '10px' }}>Input new task:</label> <input type="text" value={value} onChange={handleValueChange} placeholder='Input new task and enter'></input>
        // </form>
    );
}

export default RegisterForm;
