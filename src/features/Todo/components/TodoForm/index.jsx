import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-control/inputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const schema = yup.object({
        title: yup.string().required('Please enter title'),
    }).required();

    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema),
    })

    const handleSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values);
        }
    }

    return (
        <div>
            Todo Form
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name='title' label="Toddo" form={form} />
            </form>
        </div>
    );
}

export default TodoForm;