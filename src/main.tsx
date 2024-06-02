import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
// import './index.css';
// import { TelerikReportViewer } from '@progress/telerik-react-report-viewer';

// let viewer;
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <div>
//     <TelerikReportViewer
//       ref={(el: any) => (viewer = el)}
//       serviceUrl="https://demos.telerik.com/reporting/api/reports/"
//       reportSource={{
//         report: 'Report Catalog.trdp',
//         parameters: {},
//       }}
//       viewerContainerStyle={{
//         position: 'absolute',
//         left: '5px',
//         right: '5px',
//         top: '40px',
//         bottom: '5px',
//         overflow: 'hidden',
//         clear: 'both',
//         fontFamily: 'ms sans serif',
//       }}
//       viewMode="INTERACTIVE"
//       scaleMode="SPECIFIC"
//       scale={1.0}
//       enableAccessibility={false}
//     />
//   </div>
// );
