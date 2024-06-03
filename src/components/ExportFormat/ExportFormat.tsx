import React, { useEffect, useState } from 'react';

import { fetchFormats } from '../../services/ReportsService';

import { ReportFormat } from '../../models/Report';

interface ExportFormatProps {
  onSelectFormat: (format: ReportFormat) => void;
}

export const ExportFormat: React.FC<ExportFormatProps> = ({
  onSelectFormat,
}) => {
  const [formats, setFormats] = useState<ReportFormat[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFormats()
      .then((data) => setFormats(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="export-format-container">
      <h1>Select Export Format</h1>
      {error && <p>{error}</p>}
      <ul>
        {formats.map((format) => (
          <li key={format.name}>
            <button onClick={() => onSelectFormat(format)}>
              {format.localizedName}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
