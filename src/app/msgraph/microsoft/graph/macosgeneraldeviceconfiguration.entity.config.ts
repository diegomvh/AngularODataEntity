import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MacOSGeneralDeviceConfiguration } from './macosgeneraldeviceconfiguration.entity';
//#endregion

export const MacOSGeneralDeviceConfigurationConfig = {
  name: "macOSGeneralDeviceConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  annotations: [],
  fields: {
    compliantAppsList: {type: 'graph.appListItem', collection: true},
    compliantAppListType: {type: 'graph.appListType', nullable: false},
    emailInDomainSuffixes: {type: 'Edm.String', collection: true},
    passwordBlockSimple: {type: 'Edm.Boolean', nullable: false},
    passwordExpirationDays: {type: 'Edm.Int32'},
    passwordMinimumCharacterSetCount: {type: 'Edm.Int32'},
    passwordMinimumLength: {type: 'Edm.Int32'},
    passwordMinutesOfInactivityBeforeLock: {type: 'Edm.Int32'},
    passwordMinutesOfInactivityBeforeScreenTimeout: {type: 'Edm.Int32'},
    passwordPreviousPasswordBlockCount: {type: 'Edm.Int32'},
    passwordRequiredType: {type: 'graph.requiredPasswordType', nullable: false},
    passwordRequired: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<MacOSGeneralDeviceConfiguration>;