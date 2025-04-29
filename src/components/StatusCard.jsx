import React from 'react';
import { Link } from 'react-router-dom';
import useStatusData from './statusHook';

export default function StatusCard() {
  const statusData = useStatusData();

  statusData.sort((a, b) => a.number - b.number);

  return (
    <>
      {statusData.map((status) => (
        <Link to={`/StatusPage/${status.number}`} key={status.number} className="rounded-lg border border-blue-light shadow-md w-96 my-8 mx-10 cursor-pointer hover:scale-105 transition ease-in-out">
          <img src={status.emote} alt={status.name} className="w-16 h-16 mx-auto my-16 " />
          <div className='bg-blue-medium p-3 rounded-b-lg text-white border-t border-blue-light'>
            <h2 className="text-3xl font-semibold mb-2">{status.number}</h2>
            <h3 className="text-2xl">{status.name}</h3>
          </div>
        </Link>
      ))}
    </>
  );
}

