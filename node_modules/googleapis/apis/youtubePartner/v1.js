'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * YouTube Partner API
 *
 * @classdesc Retrieve your YouTube Analytics reports.
 * @namespace youtubePartner
 * @version  v1
 * @variation v1
 * @this Youtubepartner
 * @param {object=} options Options for Youtubepartner
 */
function Youtubepartner(options) {
  var self = this;
  this._options = options || {};

  this.claims = {
    /**
     * youtubePartner.claims.get
     *
     * @desc Retrieves a specific claim by ID.
     *
     * @alias youtubePartner.claims.get
     * @memberOf! youtubePartner(v1)
     *
     * @param  {object}  params - Parameters for request
     * @param  {object}  params.claimId - The claimId parameter specifies the claim ID of the claim being retrieved.
     * @param  {string=} params.onBehalfOfContentOwner - The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback){
       var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/partner/v1/claims/{claimId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['claimId'],
        pathParams: ['claimId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.claims.update
     *
     * @desc Updates an existing claim by either changing its policy or its status. You can update a claim's status from active to inactive to effectively release the claim.
     *
     * @alias youtubePartner.claims.update
     * @memberOf! youtubePartner(v1)
     *
     * @param  {object}  params - Parameters for request
     * @param  {object}  params.claimId - The claimId parameter specifies the claim ID of the claim being updated.
     * @param  {string=} params.onBehalfOfContentOwner - The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param  {object}  params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */

    update: function(params, callback){
       var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/partner/v1/claims/{claimId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['claimId'],
        pathParams: ['claimId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.claimSearch = {

    /**
    * youtubePartner.claimSearch.list
    *
    * @desc Retrieves a list of claims that match the search criteria.
    *
    * @alias youtubePartner.claimSearch.get
    * @memberOf! youtubePartner(v1)
    *
    * @param  {object} params - Parameters for request
    * @param  {string} params.assetId - The assetId parameter specifies the YouTube asset ID of the asset for which you are retrieving claims.
    * @param  {string} params.q - The q parameter specifies the query string to use to filter search results. YouTube searches for the query string in the following claim fields: video_title, video_keywords, user_name, isrc, iswc, grid, custom_id, and in the content owner's email address.
    * @param  {string} params.referenceId - The referenceId parameter specifies the YouTube reference ID of the reference for which you are retrieving claims.
    * @param  {string} params.videoId - The videoId parameter specifies comma-separated list of YouTube video IDs for which you are retrieving claims.
    * @param  {string} params.contentType - The contentType parameter specifies the content type of claims that you want to retrieve.
    * @param  {string} params.onBehalfOfContentOwner - The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
    * @param  {callback} callback - The callback that handles the response.
    * @return {object} Request object
    */ 
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/partner/v1/claimSearch',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }
  };

  this.whitelists = {

    /**
     * youtubePartner.whitelists.get
     *
     * @desc Get specific channel on whitelist.
     *
     * @alias youtubePartner.whitelists.get
     * @memberOf! youtubePartner(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The Youtube channel id.
     * @param  {string} params.onBehalfOfContentOwner - The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/partner/v1/whitelists/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.whitelists.list
     *
     * @desc List all whitelist channels.
     *
     * @alias youtubePartner.whitelists.list
     * @memberOf! youtubePartner(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.id - The id parameter specifies a comma-separated list of YouTube channel IDs that identify the whitelisted channels you want to retrieve.
     * @param  {string=} params.onBehalfOfContentOwner - The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param  {string=} params.pageToken - The pageToken parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of results.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/partner/v1/whitelists',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.whitelists.insert
     *
     * @desc Creates a whitelist item.
     *
     * @alias youtubePartner.whitelists.insert
     * @memberOf! youtubePartner(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.onBehalfOfContentOwner - The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/partner/v1/whitelists',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtubePartner.whitelists.delete
     *
     * @desc Delete a whitelist item.
     *
     * @alias youtubePartner.whitelists.delete
     * @memberOf! youtubePartner(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The Youtube channel id.
     * @param  {string=} params.onBehalfOfContentOwner - The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/partner/v1/whitelists/{id}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Youtubepartner object
 * @type Youtubepartner
 */
module.exports = Youtubepartner;
