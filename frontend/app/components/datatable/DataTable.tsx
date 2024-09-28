import React from 'react';
import { DatatableProps } from '../../interface';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const DataTable: React.FC<Partial<DatatableProps>> = ({ column, data }) => {
  return (
    <div className='overflow-x-scroll'>
      <Table >
        <Thead>
          <Tr>
            {column?.map((item, index) => (
              <Th key={index}>{item}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((item, index) => (
            <Tr key={index}>
              {Object.keys(item)?.map((col, index) => (
                <Td key={index}>{item[col]}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default DataTable;
