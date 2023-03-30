/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {ExpanderComponentProps} from 'react-data-table-component';

// type DataRow = {
//   folio: string;
//   asunto: string;
//   descripcion: string;
//   prioridad: string;
//   descripcion: string;
//   descripcion: string;
//   descripcion: string;
//   descripcion: string;
// };

// const ExpandedComponent: React.FC<ExpanderComponentProps<DataRow>> = ({
const ExpandedComponent = ({data}: any) => {
  return (
    <>
      <p>Folio: {data.folio}</p>
      <p>Asunto: {data.asunto}</p>
      <p>Prioridad: {data.prioridad}</p>
      <p>Estatus: {data.status.nombre}</p>
      <p>Asignado: {data.asignado ? data.asignado.name : ''}</p>
      <p>Departamento: {data.departamento.nombre}</p>
      <p>Tipo de servicio: {data.servicio.nombre}</p>
      <p>Descripcion: {data.descripcion}</p>
    </>
  );
};

export default ExpandedComponent;
