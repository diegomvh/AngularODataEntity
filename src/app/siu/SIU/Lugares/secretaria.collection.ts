import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Juzgado } from './juzgado.entity';
import { Secretaria } from './secretaria.entity';
import { Expediente } from '../Tramites/expediente.entity';
import { JuzgadoModel } from './juzgado.model';
import { SecretariaModel } from './secretaria.model';
import { ExpedienteModel } from '../Tramites/expediente.model';
import { JuzgadoCollection } from './juzgado.collection';
import { ExpedienteCollection } from '../Tramites/expediente.collection';
//#endregion

export class SecretariaCollection<E extends Secretaria, M extends SecretariaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}