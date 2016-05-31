var util = require('../')

describe('youtube whitelist automation', function () {
  var api

  before(function (done) {
    util.getApi({
      keys: require('./keys.json')
    }, function (err, obj) {
      if (err || !obj) return done(err)
      api = obj
      done()
    })
  })

  describe('handleMany', function () {
    it('should remove all from whitelist', function (done) {
      var data = require('./data.json')
      var owner = data.owners[0]
      var arr = data.whitelists.map(function (whitelist) {
        return {
          owner: owner,
          id: whitelist.id,
          on: false
        }
      })
      util.handleMany(arr, {api: api, delay: 600}, function (results) {
        for (var i = 0; i < results.length; i++) {
          var result = results[i]
          if (result.err) return done(err)
          if (result.status != 'removed' && result.status != 'nochange')
            return done(Error('Channel failed to be removed. ' + result.whitelist.id))
        }
        done()
      })
    })

    it('should add all to whitelist', function (done) {
      var data = require('./data.json')
      var owner = data.owners[0]
      var arr = data.whitelists.map(function (whitelist) {
        return {
          owner: owner,
          id: whitelist.id,
          on: true
        }
      })
      util.handleMany(arr, {api: api, delay: 600}, function (results) {
        for (var i = 0; i < results.length; i++) {
          var result = results[i]
          if (result.err) return done(err)
          if (result.status != 'added' && result.status != 'nochange')
            return done(Error('Channel failed to be added. ' + result.whitelist.id))
        }
        done()
      })
    })
  })
})
