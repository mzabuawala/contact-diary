import {useState} from 'react';

export default () => {
    const [form, setForm] = useState({});

    const onChange = (e, {name, value}) => {
        setForm({...form, [name]: value});
    };

    console.log('form', form);

    const isFormInvalid = !form.username?.length ||
    !form.firstname?.length ||
    !form.lastname?.length ||
    !form.email?.length ||
    !form.password?.length;

    console.log('isFormValid', isFormInvalid);

    return {form, onChange, isFormInvalid};
};