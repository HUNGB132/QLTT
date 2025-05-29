import { useState } from 'react';

export default function QLTTGiaLai() {
  const [officers, setOfficers] = useState<string[]>([]);
  const [reports, setReports] = useState<string[]>([]);
  const [inspections, setInspections] = useState<string[]>([]);
  const [penalties, setPenalties] = useState<string[]>([]);

  const [newOfficer, setNewOfficer] = useState('');
  const [newReport, setNewReport] = useState('');
  const [newInspection, setNewInspection] = useState('');
  const [newPenalty, setNewPenalty] = useState('');

  const handleAdd = (type: 'officer' | 'report' | 'inspection' | 'penalty') => {
    if (type === 'officer' && newOfficer) {
      setOfficers([...officers, newOfficer]);
      setNewOfficer('');
    }
    if (type === 'report' && newReport) {
      setReports([...reports, newReport]);
      setNewReport('');
    }
    if (type === 'inspection' && newInspection) {
      setInspections([...inspections, newInspection]);
      setNewInspection('');
    }
    if (type === 'penalty' && newPenalty) {
      setPenalties([...penalties, newPenalty]);
      setNewPenalty('');
    }
  };

  return (
    <div style={{ padding: 32 }}>
      <h1>Chi Cục Quản Lý Thị Trường Tỉnh Gia Lai</h1>
      <div>
        <h2>Cập Nhật Cán Bộ</h2>
        <input
          value={newOfficer}
          onChange={e => setNewOfficer(e.target.value)}
          placeholder="Tên cán bộ mới"
        />
        <button onClick={() => handleAdd('officer')}>Thêm Cán Bộ</button>
        <ul>
          {officers.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
      {/* Tương tự cho các phần khác: reports, inspections, penalties */}
    </div>
  );
}
