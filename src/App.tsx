import React, { useState } from 'react';

import { Report } from './models/Report';

import ExportFormat from './components/ExportFormat';
import Reports from './components/Reports';
import Result from './components/Result';

const App: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);

  const handleSelectReport = (report: Report) => {
    setSelectedReport(report);
    setStep(2);
  };

  const handleSelectFormat = (format: string) => {
    setSelectedFormat(format);
    setStep(3);
  };

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      {step === 1 && <Reports onSelectReport={handleSelectReport} />}
      {step === 2 && (
        <>
          <button onClick={goBack} style={{ marginBottom: '10px' }}>
            Back
          </button>
          <ExportFormat onSelectFormat={handleSelectFormat} />
        </>
      )}
      {step === 3 && selectedReport && selectedFormat && (
        <>
          <button onClick={goBack} style={{ marginBottom: '10px' }}>
            Back
          </button>
          <Result
            selectedReport={selectedReport.id}
            selectedFormat={selectedFormat}
          />
        </>
      )}
    </div>
  );
};

export default App;
