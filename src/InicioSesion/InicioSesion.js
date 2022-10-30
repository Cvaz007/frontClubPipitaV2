import React, { useState } from "react"
import TextField from '@mui/material/TextField';
import css from './InicioSesion.module.css'
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function InicioSesion(props) {

    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return (
        <div
            className={css.fondo}>
            <div
                className={css.contenedorInicioSesion}>
                <div
                    className={css.TituloInicioSesion}>
                    <h1>Iniciar Sesión</h1>
                </div>
                <div
                    className={css.InfoSesion}>
                    <div
                        className={css.ContenedorUserName}>
                        <InputLabel htmlFor="filled-adornment-password">Usuario</InputLabel>
                        <TextField id="outlined-basic" variant="outlined" className={css.InputUsuario}/>
                    </div>
                    <div
                        className={css.ContenedorPassword}>
                        
                            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="filled-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                className={css.InputContrasena}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                    </div>
                    <button className={`btn btn-outline-info ${css.boton}`}>Iniciar sesión</button>
                </div>
                
            </div>
        </div>
    )
}

export { InicioSesion }