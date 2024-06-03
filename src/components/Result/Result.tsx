import React from 'react';

import { ReportFormat } from '../../models/Report';

import ReportViewer from '../ReportViewer';

import { ReportType } from '../../utils/constants/report-types';

interface ResultProps {
  selectedReport: keyof typeof ReportType;
  selectedFormat: ReportFormat | null;
}

export const Result: React.FC<ResultProps> = ({
  selectedReport,
  selectedFormat,
}) => {
  return (
    <div className="result-container">
      <h1>Download Report</h1>
      <ReportViewer
        reportSource={ReportType[selectedReport]}
        reportParameters={{}}
        selectedFormat={selectedFormat}
      />
    </div>
  );
};
