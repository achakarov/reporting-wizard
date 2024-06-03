import { Report, ReportFormat } from '../models/Report';

import {
  BASE_API_URL,
  BASE_URL,
  FORMATS_URL,
} from '../utils/constants/api-constants';

import { fetchData } from '../utils/helpers/https';

export const fetchReports = async (): Promise<Report[]> => {
  try {
    const text = await fetchData(BASE_URL, false);
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

    return items.map((item, index) => ({
      id: index,
      name:
        item.querySelector('.accordion-header')?.textContent?.trim() ||
        'Unnamed Report',
    }));
  } catch (error) {
    console.error('Error processing reports:', error);
    throw error;
  }
};

export const fetchFormats = async (): Promise<ReportFormat[]> => {
  const url = `${BASE_URL}${BASE_API_URL}${FORMATS_URL}`;
  try {
    return await fetchData(url);
  } catch (error) {
    console.error('Error fetching formats:', error);
    throw error;
  }
};
