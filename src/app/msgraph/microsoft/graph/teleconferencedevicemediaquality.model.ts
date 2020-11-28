import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TeleconferenceDeviceMediaQuality } from './teleconferencedevicemediaquality.entity';
import { TeleconferenceDeviceMediaQualityCollection } from './teleconferencedevicemediaquality.collection';
//#endregion

export class TeleconferenceDeviceMediaQualityModel<E extends TeleconferenceDeviceMediaQuality> extends ODataModel<E> {
  //#region ODataApi Properties
  averageInboundJitter?: Duration;
  averageInboundPacketLossRateInPercentage?: number;
  averageInboundRoundTripDelay?: Duration;
  averageOutboundJitter?: Duration;
  averageOutboundPacketLossRateInPercentage?: number;
  averageOutboundRoundTripDelay?: Duration;
  channelIndex: number;
  inboundPackets?: number;
  localIPAddress?: string;
  localPort?: number;
  maximumInboundJitter?: Duration;
  maximumInboundPacketLossRateInPercentage?: number;
  maximumInboundRoundTripDelay?: Duration;
  maximumOutboundJitter?: Duration;
  maximumOutboundPacketLossRateInPercentage?: number;
  maximumOutboundRoundTripDelay?: Duration;
  mediaDuration?: Duration;
  networkLinkSpeedInBytes?: number;
  outboundPackets?: number;
  remoteIPAddress?: string;
  remotePort?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}