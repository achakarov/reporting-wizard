# Telerik Reporting Wizard

This application is a wizard-like UI that allows users to select a report from the Telerik Reporting REST Service, choose an export format, and then download the selected report in the chosen format. The application consists of three pages: Reports, Export Format, and Result.

## Functional Requirements

- **Reports:** This page displays a list of available reports that can be rendered by the Telerik Reporting REST Service. The list is fetched from [Telerik Demos](https://demos.telerik.com/reporting), excluding the "Web Report Designer" entry. The wizard allows advancing to the next page only when a single report is selected.
- **Export Format:** This page lists all the export formats supported by the online REST Service. The wizard allows advancing to the next page even if no export format is selected.
- **Result:** This page shows a "Download" button that connects to the REST Service, creates, and downloads the selected report in the requested export format. This page also previews the report in HTML format using the TelerikReportViewer when requesting the report document from the REST Service.

## Running the Project

This project uses Vite for a build tool. To run the project, follow these steps:

1. Install the project dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your web browser and navigate to [http://localhost:5137](http://localhost:5137).
