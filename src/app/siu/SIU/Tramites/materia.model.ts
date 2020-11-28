import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Oficina } from '../Lugares/oficina.entity';
import { Materia } from './materia.entity';
import { SubMateria } from './submateria.entity';
import { OficinaModel } from '../Lugares/oficina.model';
import { SubMateriaModel } from './submateria.model';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { MateriaCollection } from './materia.collection';
import { SubMateriaCollection } from './submateria.collection';
//#endregion

export class MateriaModel<E extends Materia> extends ODataModel<E> {
  //#region ODataApi Properties
  nombre: string;
  descripcion?: string;
  oculto?: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  subMaterias?: SubMateriaCollection<SubMateria, SubMateriaModel<SubMateria>>;
  oficinas?: OficinaCollection<Oficina, OficinaModel<Oficina>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}