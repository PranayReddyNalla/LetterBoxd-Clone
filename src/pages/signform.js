import './signform.css';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React from 'react';



function Signform (){

    const {register,handleSubmit,getValues,formState : {isDirty,dirtyFields}}=useForm({ defaultValues: {} });
    React.useEffect(() => {
        console.log(isDirty);
        console.log(dirtyFields);
    }, [isDirty, dirtyFields]);
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(getValues());
    }
    return (
         <Box height={400}  width={200} sx={{ p: 10, border: '1px dashed grey'}}>
            <form className="SignInForm" onSubmit={onSubmit} >
            <Stack direction="column" spacing={2}>
                <TextField id="outlined-basic" {...register("username")} label="Username" variant="outlined" />
                <TextField id="outlined-basic" {...register("password")} label="Password" variant="outlined" />
                <Link href="#" underline="hover">Forgotten?</Link>
                <FormControlLabel required control={<Checkbox />} label="Remember me" />
                <Button type="submit" disabled={!isDirty} size="small" color="success" variant="contained">LogIn</Button>
            </Stack>
            </form>
            </Box>
    
    );

}

export default Signform;