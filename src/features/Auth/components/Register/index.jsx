import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { register } from '../../../../features/Auth/userSlice';
import RegisterForm from '../RegisterForm';

Register.propTypes = {
    closeDialog: PropTypes.func,
};

function Register(props) {

    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) => {
        try {
            // auto set username = email
            values.username = values.email;

            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            // closo Dialog
            const { closeDialog } = props;
            if (closeDialog) {
                closeDialog();
            }

            // do something here on register successfully
            console.log('New user', user);
            enqueueSnackbar('Register successfully', { variant: 'success' });
        } catch (error) {
            console.log('Failed to register', error);
            enqueueSnackbar(error.message, { variant: 'error' });
        }

    }

    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;