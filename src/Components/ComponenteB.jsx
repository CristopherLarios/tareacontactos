import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../Models/Contacto';



const ComponenteB = ({ contacto }) => {
    return (
        <div>
            <h1>
                Usuario: {contacto.nombre}
            </h1>
            <h2>
                Apellido: {contacto.apellido}
            </h2>

            <p>
                Email:  {contacto.email}
            </p>

            <span>
                Estado {contacto.conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}
            </span>

        </div>
    );
};


ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponenteB;
