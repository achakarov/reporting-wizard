import React, { useEffect, useState } from 'react';

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
    <>
      <div style={{ padding: '20px' }}>
        {step === 1 && (
          <Reports
            reports={reports}
            error={error}
            onSelectReport={handleSelectReport}
          />
        )}
        {step === 2 && (
          <>
            <button onClick={goBack} style={{ marginBottom: '10px' }}>
              Back
            </button>
            <button onClick={goNext} style={{ marginBottom: '10px' }}>
              Next
            </button>
            <ExportFormat onSelectFormat={handleSelectFormat} />
          </>
        )}
        {step === 3 && selectedReport && (
          <>
            <button onClick={goBack} style={{ marginBottom: '10px' }}>
              Back
            </button>
            {selectedReport.name && (
              <Result
                selectedReport={selectedReport.name as keyof typeof ReportType}
                selectedFormat={selectedFormat}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default App;
