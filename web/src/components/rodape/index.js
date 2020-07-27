import React from 'react';

import './styles.css';

const Rodape = props =>{

    const { idProp } = props;
    
    return(
        <footer id={idProp}>
            <div className="rodape-componente">
                <p>&copy; Jocimar Braga</p>
            </div>
        </footer>
    );
}

export default Rodape;