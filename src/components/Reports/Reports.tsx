import React, { useEffect, useState } from 'react';

import { fetchReports } from '../../services/ReportsService';

import { Report } from '../../models/Report';

interface ReportsProps {
  onSelectReport: (report: Report) => void;
}

export const Reports: React.FC<ReportsProps> = ({ onSelectReport }) => {
  const [reports, setReports] = useState<Report[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchReports()
      .then((data) => setReports(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      <h1>Select a Report</h1>
      {error && <p>{error}</p>}
      <ul>
        {reports.map((report) => (
          <li key={report.id}>
            <button onClick={() => onSelectReport(report)}>
              {report.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
