import React, { useEffect, useState } from 'react';

import './index.scss';

import { Report, ReportFormat } from './models/Report';

import ExportFormat from './components/ExportFormat';
import Reports from './components/Reports';
import Result from './components/Result';

import { fetchReports } from './services/ReportsService';

import { ReportType } from './utils/constants/report-types';

const App: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<ReportFormat | null>(
    null
  );
  const [reports, setReports] = useState<Report[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchReports()
      .then((data) => setReports(data))
      .catch((error) => setError(error.message));
  }, []);

  const handleSelectReport = (report: Report) => {
    setSelectedReport(report);
    setStep(2);
  };

  const handleSelectFormat = (format: ReportFormat) => {
    setSelectedFormat(format);
    setStep(3);
  };

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const goNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Report Viewer</h1>
      </header>
      <div className="navigation-buttons">
        {step > 1 && <button onClick={goBack}>Back</button>}
        {step < 3 && step > 1 && <button onClick={goNext}>Next</button>}
      </div>
      <div className="content-container">
        {step === 1 && (
          <Reports
            reports={reports}
            error={error}
            onSelectReport={handleSelectReport}
          />
        )}
        {step === 2 && <ExportFormat onSelectFormat={handleSelectFormat} />}
        {step === 3 && selectedReport && (
          <Result
            selectedReport={selectedReport.name as keyof typeof ReportType}
            selectedFormat={selectedFormat}
          />
        )}
      </div>
    </div>
  );
};

export default App;
