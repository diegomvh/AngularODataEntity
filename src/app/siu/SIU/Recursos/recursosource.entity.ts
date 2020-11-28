import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { AllowConversion } from '../Onlyoffice/allowconversion.entity';
import { AllowConversionModel } from '../Onlyoffice/allowconversion.model';
import { AllowConversionCollection } from '../Onlyoffice/allowconversion.collection';
//#endregion

export interface RecursoSource {
  //#region ODataApi Properties
  recursoId?: number;
  contentType?: string;
  scheme?: string;
  authority?: string;
  port: number;
  path?: string;
  query?: string;
  file?: string;
  extension?: string;
  basePath?: string;
  baseName?: string;
  view: boolean;
  edit: boolean;
  convert?: AllowConversion;
  isUrl: boolean;
  isRecurso: boolean;
  isSiu: boolean;
  isSerconexPenal: boolean;
  isEureka: boolean;
  isEurekaDocumento: boolean;
  isSkua: boolean;
  isSkuaDocumento: boolean;
  isSkuaMedio: boolean;
  isHttp: boolean;
  isHttps: boolean;
  //#endregion
}