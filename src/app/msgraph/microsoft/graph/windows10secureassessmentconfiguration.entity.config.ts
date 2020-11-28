import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Windows10SecureAssessmentConfiguration } from './windows10secureassessmentconfiguration.entity';
import { Windows10SecureAssessmentConfigurationModel } from './windows10secureassessmentconfiguration.model';
import { Windows10SecureAssessmentConfigurationCollection } from './windows10secureassessmentconfiguration.collection';
//#endregion

export const Windows10SecureAssessmentConfigurationConfig = {
  name: "windows10SecureAssessmentConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  model: Windows10SecureAssessmentConfigurationModel,
  collection: Windows10SecureAssessmentConfigurationCollection,
  annotations: [],
  fields: {
    allowPrinting: {type: 'Edm.Boolean', nullable: false},
    allowScreenCapture: {type: 'Edm.Boolean', nullable: false},
    allowTextSuggestion: {type: 'Edm.Boolean', nullable: false},
    configurationAccount: {type: 'Edm.String'},
    launchUri: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Windows10SecureAssessmentConfiguration>;