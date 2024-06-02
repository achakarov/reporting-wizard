import { Report, ReportFormat } from '../models/Report';

import {
  BASE_API_URL,
  BASE_URL,
  FORMATS_URL,
} from '../utils/constants/api-constants';

export const fetchReports = async (): Promise<Report[]> => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(
        `Network response was not ok: ${response.statusText} (Status Code: ${response.status})`
      );
    }
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    // Extract the list items and filter out the "Web Report Designer"
    const items = [...doc.querySelectorAll('.accordion-item')].filter(
      (item) => {
        const header = item
          .querySelector('.accordion-header')
          ?.textContent?.trim();
        return header !== 'Web Report Designer';
      }
    );

    // Map the filtered items to the desired structure
    const reports = items.map((item, index) => {
      const name = item.querySelector('.accordion-header')?.textContent?.trim();
      const description = item
        .querySelector('.accordion-description')
        ?.innerHTML.trim();
      const href = item
        .querySelector('.button-secondary-ghost')
        ?.closest('a')
        ?.getAttribute('href');
      const thumbnail = item.getAttribute('data-thumbnail');

      return {
        id: index,
        name: name,
        description: description,
        href: href,
        thumbnail: thumbnail,
      };
    });
    return reports;
  } catch (error) {
    console.error('Error fetching reports:', error);
    throw error;
  }
};

export const fetchFormats = async (): Promise<ReportFormat[]> => {
  try {
    const response = await fetch(`${BASE_URL}${BASE_API_URL}${FORMATS_URL}`);
    if (!response.ok) {
      throw new Error(
        `Network response was not ok: ${response.statusText} (Status Code: ${response.status})`
      );
    }
    const data: ReportFormat[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching formats:', error);
    throw error;
  }
};

export const generateReport = async (
  selectedReport: number,
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
