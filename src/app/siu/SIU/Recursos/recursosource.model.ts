import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoSource } from './recursosource.entity';
import { AllowConversion } from '../Onlyoffice/allowconversion.entity';
import { AllowConversionModel } from '../Onlyoffice/allowconversion.model';
import { RecursoSourceCollection } from './recursosource.collection';
import { AllowConversionCollection } from '../Onlyoffice/allowconversion.collection';
//#endregion

export class RecursoSourceModel<E extends RecursoSource> extends ODataModel<E> {
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
  convert?: AllowConversionModel<AllowConversion>;
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
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}