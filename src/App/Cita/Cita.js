import React from 'react';
import './Cita.css';
import BotonEliminar from './BotonEliminar/BotonEliminar';

export default function Cita(props) {
    return (
        <div className="cita">
            <p>Mascota: <span>{props.nombre}</span></p>
            <p>Dueño: <span>{props.dueño}</span></p>
            <p>Fecha: <span>{props.fecha}</span></p>
            <p>Hora: <span>{props.hora}</span></p>
            <p>Sintomas: <span>{props.sintomas}</span></p><BotonEliminar />
        </div>
    )
}