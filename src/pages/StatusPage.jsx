import React from 'react';
import { useParams } from 'react-router-dom';
import useStatusData from '../components/statusHook';


export default function StatusPage() {
    const { statusNumber } = useParams();
    const statusData = useStatusData();
    const selectedStatus = statusData.find((status) => status.number === parseInt(statusNumber));
    if (!selectedStatus) {
        return <div>Status not found.</div>;
    }
    return (
        <div className="flex items-center justify-center h-screen p-16">
            <div className={`text-center h-4/5 w-5/6 grid justify-items-center ${'xl:border rounded border-blue-light'}`}>
                <div>
                    <h2 className="text-6xl font-semibold mt-16 mb-2">{selectedStatus.number}</h2>
                    <h3 className="text-5xl">{selectedStatus.name}</h3>
                </div>
                <div className="flex items-center justify-center">
                    <img src={selectedStatus.emote} alt="Status" className="w-24 h-24 mb-12 mt-5" />
                </div>
                <div className="w-96">
                    <p>{selectedStatus.description}</p>
                </div>
                <p className="text-sm text-gray-600 self-end">{`made by @${selectedStatus.credits} on 7tv`}</p>
            </div>
        </div>
    )
}
