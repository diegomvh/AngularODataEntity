import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaContentRatingJapan } from './mediacontentratingjapan.complex';
import { MediaContentRatingJapanModel } from './mediacontentratingjapan.model';
import { MediaContentRatingJapanCollection } from './mediacontentratingjapan.collection';
//#endregion

export const MediaContentRatingJapanConfig = {
  name: "mediaContentRatingJapan",
  model: MediaContentRatingJapanModel,
  collection: MediaContentRatingJapanCollection,
  annotations: [],
  fields: {
    movieRating: {type: 'graph.ratingJapanMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingJapanTelevisionType', nullable: false}
  }
} as StructuredTypeConfig<MediaContentRatingJapan>;