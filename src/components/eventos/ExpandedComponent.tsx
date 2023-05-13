/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {ExpanderComponentProps} from 'react-data-table-component';

const ExpandedComponent = ({data}: any) => {
  return (
    <>
      <p>Nombre del evento: {data.nombre}</p>
      <p>Evento Int/Ext: {data.int_ext}</p>
      <p>Fecha: {`${data.fecha_inicio} a ${data.fecha_fin}`}</p>
      <p>Coordinador: {data.coordinador}</p>
      <p>Tipo de evento: {data.tipo.nombre}</p>
      <p>Lugar del evento: {data.lugar.nombre}</p>
      <p>Autorizado: {data.autorizado}</p>
      <p>Revisado: {data.revisado}</p>
    </>
  );
};

export default ExpandedComponent;
