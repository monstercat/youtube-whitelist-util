/*
 * Thomas Mathews
 * 2016 May 30
 */

var async  = require('async')

function isOnList (whitelist, opts, done) {
  opts.api.whitelists.get({
    id: whitelist.id,
    onBehalfOfContentOwner: whitelist.owner
  }, function (err, obj) {
    if (err && err.code != 404) return done(err)
    done(null, !!obj)
  })
}

function addToList (whitelist, opts, done) {
  opts.api.whitelists.insert({
    resource: {
      kind: "youtubePartner#whitelist",
      id: whitelist.id
    },
    onBehalfOfContentOwner: whitelist.owner
  }, function (err, obj) {
    done(err, 'added')
  })
}

function removeFromList (whitelist, opts, done) {
  opts.api.whitelists.delete({
    id: whitelist.id,
    onBehalfOfContentOwner: whitelist.owner
  }, function (err, obj) {
    done(err, 'removed')
  })
}

/**
  * getApi
  *
  * @desc Basic method to quickly get an API object used for this module.
  */
function getApi (opts, done) {
  var scopes = opts.scopes || [
    "https://www.googleapis.com/auth/youtubepartner",
  ]
  var keys = opts.keys
  var google = require('googleapis')
  var jwt = new google.auth.JWT(keys.client_email, null, keys.private_key, scopes, null)
  jwt.authorize(function (err, tokens) {
    if (err) return done(err)
    google.options({auth: jwt})
    Object.keys(google).forEach((key)=> console.log(key))
    console.log(Object.keys(google.youtube))
    done(null, google.youtubePartner('v1'))
  })
}

/**
  * handleMany
  *
  * @desc Uses handleOne to handle many.
  *
  * @param {array} whitelists - A list of whitelist.
  * @param {object} opts - Same options as handleOne.
  * @param {callback} done - Supplies an array of object with errors and their whitelist struct.
  * @return {undefined}
  */
function handleMany (whitelists, opts, done) {
  async.mapSeries(whitelists, function (whitelist, next) {
    handleOne(whitelist, opts, function (err, status) {
      setTimeout(function delay () {
        next(null, {
          error: err,
          whitelist: whitelist,
          status: status
        })
      }, opts.delay || 0)
    })
  }, function (err, results) {
    done(results)
  })
}

/**
  * handleOne
  *
  * @desc Adds or removes channel from owner's whitelist.
  *
  * @param  {object} whitelist - Structure of whitelist.
  * @param  {string} whitelist.id - The YouTube channel Id.
  * @param  {string} whitelist.owner - Owner to diff from.
  * @param  {string} whitelist.on - Wheither to add or remove.
  * @param  {object} opts - Structure of options.
  * @param  {object} opts.api - API object to operate with.
  * @param  {callback} done - The callback that returns an error if unsuccesful.
  * @return {undefined}
  */
function handleOne (whitelist, opts, done) {
  if (!opts.api) return done(Error('Api not supplied.'))
  if (!whitelist.owner) return done(Error('Owner not supplied.'))
  isOnList(whitelist, opts, function (err, inlist) {
    if (err) return done(err, 'nochange')
    if (whitelist.on && !inlist) {
      return addToList(whitelist, opts, done)
    }
    if (!whitelist.on && inlist) {
      return removeFromList(whitelist, opts, done)
    }
    done(null, 'nochange')
  })
}

module.exports = {
  handleMany: handleMany,
  handleOne: handleOne,
  getApi: getApi
}
