import { TelerikReportViewer } from '@progress/telerik-react-report-viewer';

import { BASE_URL } from '../../utils/constants/api-constants';

interface TelerikReportViewerProps {
  reportSource: string;
  reportParameters?: any;
}
let viewer: any;
export const ReportViewer: React.FC<TelerikReportViewerProps> = ({
  reportSource,
  reportParameters,
}) => {
  return (
    <>
      <button onClick={() => viewer.commands.print.exec()}>Download</button>
      <div>
        <TelerikReportViewer
          ref={(el: any) => (viewer = el)}
          reportServer={{
            url: BASE_URL,
          }}
          reportSource={{
            report: reportSource,
          }}
          viewerContainerStyle={{
            position: 'absolute',
            left: '5px',
            right: '5px',
            top: '40px',
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
