import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Windows10SecureAssessmentConfiguration } from './windows10secureassessmentconfiguration.entity';
//#endregion

export const Windows10SecureAssessmentConfigurationConfig = {
  name: "Windows10SecureAssessmentConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  annotations: [],
  fields: {
    launchUri: {type: 'Edm.String'},
    configurationAccount: {type: 'Edm.String'},
    allowPrinting: {type: 'Edm.Boolean', nullable: false},
    allowScreenCapture: {type: 'Edm.Boolean', nullable: false},
    allowTextSuggestion: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<Windows10SecureAssessmentConfiguration>;