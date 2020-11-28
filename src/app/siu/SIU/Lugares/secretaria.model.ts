import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Juzgado } from './juzgado.entity';
import { Secretaria } from './secretaria.entity';
import { Expediente } from '../Tramites/expediente.entity';
import { JuzgadoModel } from './juzgado.model';
import { ExpedienteModel } from '../Tramites/expediente.model';
import { JuzgadoCollection } from './juzgado.collection';
import { SecretariaCollection } from './secretaria.collection';
import { ExpedienteCollection } from '../Tramites/expediente.collection';
//#endregion

export class SecretariaModel<E extends Secretaria> extends ODataModel<E> {
  //#region ODataApi Properties
  juzgadoId?: number;
  nombre: string;
  nombresSecretario: string;
  apellidosSecretario: string;
  telefono: string;
  secreatariaSigdoId?: number;
  guid: string;
  name?: string;
  longname?: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  expedientes?: ExpedienteCollection<Expediente, ExpedienteModel<Expediente>>;
  juzgado?: JuzgadoModel<Juzgado>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}