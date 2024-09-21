import React, { useState } from 'react'
import { TextField, Button, Typography, Box, Alert } from '@mui/material'

const SignupForm = () => {

    const [form, setForm] = useState({username: '', email: '', password: ''});
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const validate = () => {
        const errors = [];
        if(form.username.trim().length < 3) {
            errors.username = 'Username must be atleast 3 characters';
        }
        if(!/\S + @\S + \.S + /.test(form.email)) {
            errors.email = 'Email is invalid';
        }
        if(form.password.length < 8) {
            errors.password = 'Pawsword must be atleast 8 characters';
        }
        return errors;
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name] : e.target.value });
        setErrors({...errors, [e.target.name] : ''});
        setSuccess(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if(Object.keys(validationErrors).length === 0) {
            console.log('Form submitted', form);
            setForm({username: '', email: '', password: ''});
            setErrors({});
            setSuccess(true);

        } else {
            setErrors(validationErrors);
            setSuccess(false);
        }
    }

  return (
    <Box width={'400px'} margin={'50px auto'} padding={'20px'} component={'form'} onSubmit={handleSubmit} noValidate boxShadow={3} bgcolor={'#fafafa'} borderRadius={2}>
        <Typography variant='h5' gutterBottom align='center' >Signup Form</Typography>
        {success && <Alert severity='success'>Signup successful!</Alert>}
        <Box mt={2}>
            <TextField label="Username" name="username" variant='outlined' fullWidth value={form.username} onChange={handleChange} error={Boolean(errors.username)} helperText={errors.username} />
        </Box>

        <Box mt={2}>
            <TextField label="Email" name="email" variant='outlined' fullWidth value={form.email} onChange={handleChange} error={Boolean(errors.email)} helperText={errors.email} />
        </Box>

        <Box mt={2}>
            <TextField label="Password" name="password" variant='outlined' fullWidth value={form.password} onChange={handleChange} error={Boolean(errors.password)} helperText={errors.password} />
        </Box>

        <Box mt={2}>
            <Button variant='contained' color='primary' type='submit' fullWidth>Sign Up</Button>
        </Box>
    </Box>
  )
}

export default SignupForm;