import React, { useEffect, useState } from 'react';

import { fetchFormats } from '../../services/ReportsService';

interface ExportFormatProps {
  onSelectFormat: (format: string) => void;
}

export const ExportFormat: React.FC<ExportFormatProps> = ({
  onSelectFormat,
}) => {
  const [formats, setFormats] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFormats()
      .then((data) => setFormats(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      <h1>Select Export Format</h1>
      {error && <p>{error}</p>}
      <ul>
        {formats.map((format) => (
          <li key={format}>
            <button onClick={() => onSelectFormat(format)}>{format}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
