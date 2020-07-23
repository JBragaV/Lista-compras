import React from 'react';

import TextField from '@material-ui/core/TextField';

const CampoFormulario = props => {
    const { nomeCampo, textoAjuda, id, name, value, onChange } = props;
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
            />
        </div>
    );
}

export default CampoFormulario;