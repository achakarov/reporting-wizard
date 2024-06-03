import { TelerikReportViewer } from '@progress/telerik-react-report-viewer';

import { BASE_URL } from '../../utils/constants/api-constants';

import { ReportFormat } from '../../models/Report';

interface TelerikReportViewerProps {
  reportSource: string;
  reportParameters?: any;
  selectedFormat: ReportFormat | null;
}
let viewer: any;
export const ReportViewer: React.FC<TelerikReportViewerProps> = ({
  reportSource,
  reportParameters,
  selectedFormat,
}) => {
  const downloadReport = () => {
    if (viewer && selectedFormat) {
      viewer.commands.export.exec(selectedFormat.name);
    }
  };

  return (
    <>
      <button onClick={downloadReport} disabled={!selectedFormat}>
        Download
      </button>
      <div>
        <TelerikReportViewer
          ref={(el: any) => (viewer = el)}
          reportServer={{
            url: BASE_URL,
          }}
          reportSource={{
            report: reportSource,
            parameters: reportParameters,
          }}
          viewerContainerStyle={{
            position: 'absolute',
            left: '5px',
            right: '5px',
            top: '240px',
            bottom: '5px',
            overflow: 'hidden',
            clear: 'both',
            fontFamily: 'ms sans serif',
          }}
          viewMode="INTERACTIVE"
          scaleMode="SPECIFIC"
          scale={1.0}
          enableAccessibility={false}
        />
      </div>
    </>
  );
};
