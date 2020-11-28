import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MacOSGeneralDeviceConfiguration } from './macosgeneraldeviceconfiguration.entity';
import { MacOSGeneralDeviceConfigurationModel } from './macosgeneraldeviceconfiguration.model';
import { MacOSGeneralDeviceConfigurationCollection } from './macosgeneraldeviceconfiguration.collection';
//#endregion

export const MacOSGeneralDeviceConfigurationConfig = {
  name: "macOSGeneralDeviceConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  model: MacOSGeneralDeviceConfigurationModel,
  collection: MacOSGeneralDeviceConfigurationCollection,
  annotations: [],
  fields: {
    compliantAppListType: {type: 'graph.appListType', nullable: false},
    compliantAppsList: {type: 'graph.appListItem', collection: true},
    emailInDomainSuffixes: {type: 'Edm.String', collection: true},
    passwordBlockSimple: {type: 'Edm.Boolean', nullable: false},
    passwordExpirationDays: {type: 'Edm.Int32'},
    passwordMinimumCharacterSetCount: {type: 'Edm.Int32'},
    passwordMinimumLength: {type: 'Edm.Int32'},
    passwordMinutesOfInactivityBeforeLock: {type: 'Edm.Int32'},
    passwordMinutesOfInactivityBeforeScreenTimeout: {type: 'Edm.Int32'},
    passwordPreviousPasswordBlockCount: {type: 'Edm.Int32'},
    passwordRequired: {type: 'Edm.Boolean', nullable: false},
    passwordRequiredType: {type: 'graph.requiredPasswordType', nullable: false}
  }
} as StructuredTypeConfig<MacOSGeneralDeviceConfiguration>;