import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Oficina } from '../Lugares/oficina.entity';
import { Audiencia } from '../Tramites/audiencia.entity';
import { Cita } from './cita.entity';
import { TemaCita } from './temacita.entity';
import { OficinaModel } from '../Lugares/oficina.model';
import { AudienciaModel } from '../Tramites/audiencia.model';
import { CitaModel } from './cita.model';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { AudienciaCollection } from '../Tramites/audiencia.collection';
import { CitaCollection } from './cita.collection';
import { TemaCitaCollection } from './temacita.collection';
//#endregion

export class TemaCitaModel<E extends TemaCita> extends ODataModel<E> {
  //#region ODataApi Properties
  descripcion: string;
  diasAnticipacion: number;
  sistema: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  audiencias?: AudienciaCollection<Audiencia, AudienciaModel<Audiencia>>;
  citas?: CitaCollection<Cita, CitaModel<Cita>>;
  oficinas?: OficinaCollection<Oficina, OficinaModel<Oficina>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}