import { TextField } from '@material-ui/core';
import React from 'react'

function InputValidation({ estado, cambiarEstado, disabled, type, label, name, helperText, patterns, funcion }) {
    const onChange = (e) => {
        cambiarEstado({ ...estado, campo: e.target.value });
    }

    const validacion = () => {
        if (patterns) {
            if (patterns.test(estado.campo)) {
                cambiarEstado({ ...estado, valido: true });
            } else {
                cambiarEstado({ ...estado, valido: false });
            }
        }

        if (funcion) {
            funcion();
        }
    }

    return (
        <TextField
            fullWidth
            variant="filled"
            size="small"
            label={label}
            type={type}
            disabled={disabled}
            autoComplete="off"
            id={name}
            value={estado.campo}
            onChange={onChange}
            onKeyUp={validacion}
            onBlur={validacion}
            //valido={estado.valido}
            error={estado.valido === false}
            helperText={estado.valido === false ? helperText : ' '}
        />
    );
}

export default InputValidation
