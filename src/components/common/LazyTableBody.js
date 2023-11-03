import React from 'react';
import IconGroup from '../common/IconGroup';
import { faPen, faTrash, faBookReader } from '@fortawesome/free-solid-svg-icons';

export default function LazyTableBody({ data, onIconClick }) {
  return (
    <>
      {data.map((item) => (
        <tr
          key={item.id}
          className="border-b text-justify text-[#444b6e] rounded-lg border-gray-300 border my-2 flex flex-col p-3 md:table-row md:border-0 md:border-b "
        >
          <td className="md:p-2 before:content-['Id'] before:mr-0.5 before:font-bold before:text-[#1a6e6a] md:before:content-[]">
            {item.id}
          </td>
          <td className="md:p-2 capitalize before:content-['Nombre'] before:mr-0.5 before:font-bold before:text-[#1a6e6a] md:before:content-[]">
            {item.title === 'miss' ? 'Sra' : item.title} {item.firstName} {item.lastName}
          </td>
          <td
            className="md:p-2 flex gap-x-2.5 before:content-['Foto'] before:mr-0.5 before:font-bold before:text-[#1a6e6a]  md:before:content-[] md:table-cell"
            data-header="Picture"
          >
            <img
              src={item.picture}
              alt={`${item.title} ${item.firstName} ${item.lastName}`}
              className="max-w-[30px] max-h-[30px] w-auto h-auto rounded-full"
            />
          </td>
          <td className="cursor-pointer flex gap-x-2.5 before:content-['Acciones'] before:mr-0.5 before:font-bold before:text-[#1a6e6a] md:before:content-[] md:table-cell ">
            <IconGroup icons={[faTrash, faPen, faBookReader]} onItemClick={(icon) => onIconClick(icon, item)} />
          </td>
        </tr>
      ))}
    </>
  );
}
