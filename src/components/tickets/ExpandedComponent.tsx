/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {ExpanderComponentProps} from 'react-data-table-component';

type DataRow = {
  title: string;
  director: string;
  year: string;
};

const ExpandedComponent: React.FC<ExpanderComponentProps<DataRow>> = ({
  data
}) => {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default ExpandedComponent;
