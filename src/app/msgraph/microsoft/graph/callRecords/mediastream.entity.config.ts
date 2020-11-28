import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaStream } from './mediastream.entity';
import { MediaStreamModel } from './mediastream.model';
import { MediaStreamCollection } from './mediastream.collection';
//#endregion

export const MediaStreamConfig = {
  name: "mediaStream",
  model: MediaStreamModel,
  collection: MediaStreamCollection,
  annotations: [],
  fields: {
    averageAudioDegradation: {type: 'Edm.Single'},
    averageAudioNetworkJitter: {type: 'Edm.Duration'},
    averageBandwidthEstimate: {type: 'Edm.Int64'},
    averageJitter: {type: 'Edm.Duration'},
    averagePacketLossRate: {type: 'Edm.Single'},
    averageRatioOfConcealedSamples: {type: 'Edm.Single'},
    averageReceivedFrameRate: {type: 'Edm.Single'},
    averageRoundTripTime: {type: 'Edm.Duration'},
    averageVideoFrameLossPercentage: {type: 'Edm.Single'},
    averageVideoFrameRate: {type: 'Edm.Single'},
    averageVideoPacketLossRate: {type: 'Edm.Single'},
    endDateTime: {type: 'Edm.DateTimeOffset'},
    lowFrameRateRatio: {type: 'Edm.Single'},
    lowVideoProcessingCapabilityRatio: {type: 'Edm.Single'},
    maxAudioNetworkJitter: {type: 'Edm.Duration'},
    maxJitter: {type: 'Edm.Duration'},
    maxPacketLossRate: {type: 'Edm.Single'},
    maxRatioOfConcealedSamples: {type: 'Edm.Single'},
    maxRoundTripTime: {type: 'Edm.Duration'},
    packetUtilization: {type: 'Edm.Int64'},
    postForwardErrorCorrectionPacketLossRate: {type: 'Edm.Single'},
    startDateTime: {type: 'Edm.DateTimeOffset'},
    streamDirection: {type: 'microsoft.graph.callRecords.mediaStreamDirection', nullable: false},
    streamId: {type: 'Edm.String'},
    wasMediaBypassed: {type: 'Edm.Boolean'}
  }
} as EntityConfig<MediaStream>;