import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DiagnosticDataSubmissionMode } from './diagnosticdatasubmissionmode.enum';
//#endregion

export const DiagnosticDataSubmissionModeConfig = {
  name: "diagnosticDataSubmissionMode",
  members: DiagnosticDataSubmissionMode
} as EnumConfig<DiagnosticDataSubmissionMode>;