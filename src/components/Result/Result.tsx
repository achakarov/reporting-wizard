import React from 'react';
import { TelerikReportViewer } from '@progress/telerik-react-report-viewer';

import { generateReport } from '../../services/ReportsService';

import { ReportFormat } from '../../models/Report';

interface ResultProps {
  selectedReport: number;
  selectedFormat: ReportFormat;
}

export const Result: React.FC<ResultProps> = ({
  selectedReport,
  selectedFormat,
}) => {
  const downloadReport = () => {
    generateReport(selectedReport, selectedFormat.name)
      .then((documentId) => {
        window.location.href = `https://demos.telerik.com/reporting/api/documents/${documentId}?content-disposition=attachment`;
      })
      .catch((error) => console.error('Error generating report', error));
  };

  return (
    <div>
      <h1>Download Report</h1>
      <button onClick={downloadReport}>Download</button>
      {selectedFormat.name === 'HTML' && (
        <TelerikReportViewer
          serviceUrl="https://demos.telerik.com/reporting/api/reports/"
          reportSource={{ report: selectedReport, parameters: {} }}
          viewerContainerStyle={{ width: '100%', height: '100%' }}
          viewMode="INTERACTIVE"
        />
      )}
    </div>
  );
};
