import { Report } from '../models/Report';

export const fetchReports = async (): Promise<Report[]> => {
  try {
    const response = await fetch(
      'https://demos.telerik.com/reporting/api/reports'
    );
    if (!response.ok) {
      throw new Error(
        `Network response was not ok: ${response.statusText} (Status Code: ${response.status})`
      );
    }
    const data: Report[] = await response.json();
    return data.filter((report) => report.name !== 'Web Report Designer');
  } catch (error) {
    console.error('Error fetching reports:', error);
    throw error;
  }
};

export const fetchFormats = async (): Promise<string[]> => {
  try {
    const response = await fetch(
      'https://demos.telerik.com/reporting/api/document-formats'
    );
    if (!response.ok) {
      throw new Error(
        `Network response was not ok: ${response.statusText} (Status Code: ${response.status})`
      );
    }
    const data: string[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching formats:', error);
    throw error;
  }
};

export const generateReport = async (
  selectedReport: string,
  selectedFormat: string
): Promise<string> => {
  try {
    const response = await fetch(
      'https://demos.telerik.com/reporting/api/documents',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          report: selectedReport,
          format: selectedFormat,
        }),
      }
    );
    if (!response.ok) {
      throw new Error(
        `Network response was not ok: ${response.statusText} (Status Code: ${response.status})`
      );
    }
    const data: { documentId: string } = await response.json();
    return data.documentId;
  } catch (error) {
    console.error('Error generating report:', error);
    throw error;
  }
};
