import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PersonGender } from './persongender.enum';
import { Location } from './location.entity';
import { Photo } from './photo.entity';
import { Trip } from './trip.entity';
//#endregion

export interface Person {
  //#region ODataApi Properties
  userName: string;
  firstName: string;
  lastName: string;
  emails?: string[];
  addressInfo?: Location[];
  gender?: PersonGender;
  concurrency: number;
  friends?: Person[];
  trips?: Trip[];
  photo?: Photo;
  //#endregion
}