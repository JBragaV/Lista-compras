import React from 'react';

import TextField from '@material-ui/core/TextField';

const CampoFormulario = props => {
    const { nomeCampo, textoAjuda, id, name, value, onChange, erro, type="text" } = props;
    return (
        <div>
            <TextField
                id={ id }
                name={ name }
                label={ nomeCampo }
                value={ value }
                onChange={ onChange }
                style={{ marginBottom: 8 }}
                fullWidth
                helperText={ textoAjuda }
                variant="filled"
                error = { erro }
                type = { type }
            />
        </div>
    );
}

export default CampoFormulario;