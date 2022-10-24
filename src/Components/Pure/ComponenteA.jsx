import React from 'react';
import { Contacto } from '../../Models/Contacto';
import ComponenteB from '../ComponenteB';


const ComponenteA = () => {

    const defaultContacto = new Contacto('Cristopher', 'Larios', 'Alexlarios17@gmail.com', true);

    return (
        <div>
            <div>
                <h1>
                    Contacto
                </h1>
            </div>
            <ComponenteB contacto={defaultContacto}></ComponenteB>
        </div>
    );
};


export default ComponenteA;
