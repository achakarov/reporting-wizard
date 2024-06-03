import React from 'react';

import { Report } from '../../models/Report';

interface ReportsProps {
  onSelectReport: (report: Report) => void;
  reports: Report[];
  error: string | null;
}

export const Reports: React.FC<ReportsProps> = ({
  onSelectReport,
  reports,
  error,
}) => {
  return (
    <div className="reports-container">
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
