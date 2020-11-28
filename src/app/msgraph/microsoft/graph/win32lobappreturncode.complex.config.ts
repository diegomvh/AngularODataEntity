import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppReturnCode } from './win32lobappreturncode.complex';
import { Win32LobAppReturnCodeModel } from './win32lobappreturncode.model';
import { Win32LobAppReturnCodeCollection } from './win32lobappreturncode.collection';
//#endregion

export const Win32LobAppReturnCodeConfig = {
  name: "win32LobAppReturnCode",
  model: Win32LobAppReturnCodeModel,
  collection: Win32LobAppReturnCodeCollection,
  annotations: [],
  fields: {
    returnCode: {type: 'Edm.Int32', nullable: false},
    type: {type: 'graph.win32LobAppReturnCodeType', nullable: false}
  }
} as StructuredTypeConfig<Win32LobAppReturnCode>;