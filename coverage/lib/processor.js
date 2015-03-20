if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (typeof _$jscoverage['lib/processor.js'] === 'undefined'){_$jscoverage['lib/processor.js']=[];
_$jscoverage['lib/processor.js'].source=['/*jslint node: true */',
'\'use strict\';',
'var async     = require("async")',
'    , _       = require("lodash")',
'    , request = require("request")',
'    , utils   = require("./../utils")',
'    , commons = require("./../commons")',
'    , config',
'    , log;',
'',
'',
'/**',
' * callback method to be called once request return from call',
' * @param req',
' * @param error',
' * @param response',
' * @param body',
' * @param callback',
' * @private',
' */',
'function _process(req, error, response, body, callback) {',
'    log.debug("[processor] _process called");',
'    var _result = {};',
'',
'    if (!response) {',
'        log.error("[processor] _process no response: " + response);',
'        _result = utils.builder.buildResponse(error.code || commons.CONST.RESPONSE_TYPE.ERROR_API_URL);',
'    }',
'    else {',
'        if (error) {',
'            log.error(commons.CONST.BODY_RESPONSE.ERROR_API_URL + " " + req.url +  " Error Code: " + error.code + ", IP: " + req.ip);',
'            _result = utils.builder.buildResponse(commons.CONST.RESPONSE_TYPE.ERROR_API_URL);',
'        } else {',
'            try {',
'                log.debug("[processor] _process body: " + body);',
'                _result.body = JSON.parse(body);',
'            } catch (err) {',
'                log.error(commons.CONST.BODY_RESPONSE.NO_JSON_OBJECT + ", IP: " + req.ip);',
'                _result = utils.builder.buildResponse(commons.CONST.RESPONSE_TYPE.NO_JSON_OBJECT);',
'            }',
'        }',
'',
'        // set the headers/status in the _result object',
'        _result.headers = response.headers;',
'        _result.statusCode = response.statusCode;',
'',
'    }',
'',
'    // callback of the async.parallel method (async.parallel(reqs, function (err, _results) {...))',
'    // in the callback expects two parameters - error and _results',
'    return callback(null, _result);',
'}',
'',
'/**',
' * method to be called in parallel from async.parallelLimit',
' * @param req - request to threat',
' * @returns {Function}',
' * @private',
' */',
'function _getReq(req) {',
'    return function (cb) {',
'        try {',
'            // body - entity body for PATCH, POST and PUT requests. Must be a Buffer or String, unless json is true. If json is true, then body must be a JSON-serializable object.',
'            var body = JSON.stringify(req.body);',
'            req = req || {};',
'            var options = {',
'                url: req.url,',
'                headers: req.headers || {},',
'                method: req.method,',
'                body: body,',
'                timeout: (req.timeout <= config.request_default_values.timeout) ? req.timeout : config.request_default_values.timeout,',
'                pool : {',
'                    maxSockets : 200',
'                }',
'            };',
'',
'            options.headers.HTTP_X_FORWARDED_FOR = req.ip;',
'',
'            log.debug("[processor] Requesting URL: " + options.url + ", headers: " + options.headers + ", method: " + options.method + ", body(when POST method): " + options.body + ", timeout: "  + options.timeout);',
'',
'            // request to the API host for every job',
'            request(options, function(error, response, body) {',
'                _process(req, error, response, body, cb);',
'            });',
'        }',
'        catch (e) {',
'            log.error("[processor] exception parsing the body or in request");',
'        }',
'',
'    };',
'}',
'',
'/**',
' * configure object',
' * @param cfg',
' * @returns {*}',
' */',
'exports.configure = function (cfg) {',
'    config = commons.helper.configure(cfg);',
'    utils.configure(cfg);',
'    log = config.logger || console;',
'    return config;',
'};',
'',
'/**',
' * entry point to start running jobs',
' * @param job - job containing one or more requests',
' * @param cb - callback method to call once finish processing job',
' */',
'exports.run = function (job, cb) {',
'',
'    log.debug("[processor] running processor ...");',
'    var _reqs = {};',
'',
'    // creates the collection of \'requests\' (holds a collection of getReq methods)',
'    _.forEach(job, function (cReq) {',
'        _reqs[cReq.name] =_getReq(cReq);',
'    });',
'',
'    async.parallelLimit(_reqs, config.maxConcurrentJobs, function (err, results) {',
'        if (err) {',
'            log.error("[processor] Error in running the job, err: " + err);',
'            return cb(err);',
'        }',
'        else {',
'            return cb(null, results);',
'        }',
'    });',
'',
'};',
''];
_$jscoverage['lib/processor.js'][77]=0;
_$jscoverage['lib/processor.js'][2]=0;
_$jscoverage['lib/processor.js'][79]=0;
_$jscoverage['lib/processor.js'][22]=0;
_$jscoverage['lib/processor.js'][3]=0;
_$jscoverage['lib/processor.js'][21]=0;
_$jscoverage['lib/processor.js'][82]=0;
_$jscoverage['lib/processor.js'][31]=0;
_$jscoverage['lib/processor.js'][23]=0;
_$jscoverage['lib/processor.js'][26]=0;
_$jscoverage['lib/processor.js'][27]=0;
_$jscoverage['lib/processor.js'][25]=0;
_$jscoverage['lib/processor.js'][30]=0;
_$jscoverage['lib/processor.js'][60]=0;
_$jscoverage['lib/processor.js'][34]=0;
_$jscoverage['lib/processor.js'][32]=0;
_$jscoverage['lib/processor.js'][99]=0;
_$jscoverage['lib/processor.js'][39]=0;
_$jscoverage['lib/processor.js'][38]=0;
_$jscoverage['lib/processor.js'][35]=0;
_$jscoverage['lib/processor.js'][36]=0;
_$jscoverage['lib/processor.js'][102]=0;
_$jscoverage['lib/processor.js'][66]=0;
_$jscoverage['lib/processor.js'][64]=0;
_$jscoverage['lib/processor.js'][65]=0;
_$jscoverage['lib/processor.js'][45]=0;
_$jscoverage['lib/processor.js'][51]=0;
_$jscoverage['lib/processor.js'][62]=0;
_$jscoverage['lib/processor.js'][61]=0;
_$jscoverage['lib/processor.js'][44]=0;
_$jscoverage['lib/processor.js'][117]=0;
_$jscoverage['lib/processor.js'][87]=0;
_$jscoverage['lib/processor.js'][83]=0;
_$jscoverage['lib/processor.js'][122]=0;
_$jscoverage['lib/processor.js'][101]=0;
_$jscoverage['lib/processor.js'][98]=0;
_$jscoverage['lib/processor.js'][100]=0;
_$jscoverage['lib/processor.js'][110]=0;
_$jscoverage['lib/processor.js'][112]=0;
_$jscoverage['lib/processor.js'][113]=0;
_$jscoverage['lib/processor.js'][116]=0;
_$jscoverage['lib/processor.js'][120]=0;
_$jscoverage['lib/processor.js'][121]=0;
_$jscoverage['lib/processor.js'][123]=0;
_$jscoverage['lib/processor.js'][126]=0;
}/*jslint node: true */
_$jscoverage['lib/processor.js'][2]++;
'use strict';
_$jscoverage['lib/processor.js'][3]++;
var async     = require("async")
    , _       = require("lodash")
    , request = require("request")
    , utils   = require("./../utils")
    , commons = require("./../commons")
    , config
    , log;


/**
 * callback method to be called once request return from call
 * @param req
 * @param error
 * @param response
 * @param body
 * @param callback
 * @private
 */
_$jscoverage['lib/processor.js'][21]++;
function _process(req, error, response, body, callback) {
    _$jscoverage['lib/processor.js'][22]++;
log.debug("[processor] _process called");
    _$jscoverage['lib/processor.js'][23]++;
var _result = {};

    _$jscoverage['lib/processor.js'][25]++;
if (!response) {
        _$jscoverage['lib/processor.js'][26]++;
log.error("[processor] _process no response: " + response);
        _$jscoverage['lib/processor.js'][27]++;
_result = utils.builder.buildResponse(error.code || commons.CONST.RESPONSE_TYPE.ERROR_API_URL);
    }
    else {
        _$jscoverage['lib/processor.js'][30]++;
if (error) {
            _$jscoverage['lib/processor.js'][31]++;
log.error(commons.CONST.BODY_RESPONSE.ERROR_API_URL + " " + req.url +  " Error Code: " + error.code + ", IP: " + req.ip);
            _$jscoverage['lib/processor.js'][32]++;
_result = utils.builder.buildResponse(commons.CONST.RESPONSE_TYPE.ERROR_API_URL);
        } else {
            _$jscoverage['lib/processor.js'][34]++;
try {
                _$jscoverage['lib/processor.js'][35]++;
log.debug("[processor] _process body: " + body);
                _$jscoverage['lib/processor.js'][36]++;
_result.body = JSON.parse(body);
            } catch (err) {
                _$jscoverage['lib/processor.js'][38]++;
log.error(commons.CONST.BODY_RESPONSE.NO_JSON_OBJECT + ", IP: " + req.ip);
                _$jscoverage['lib/processor.js'][39]++;
_result = utils.builder.buildResponse(commons.CONST.RESPONSE_TYPE.NO_JSON_OBJECT);
            }
        }

        // set the headers/status in the _result object
        _$jscoverage['lib/processor.js'][44]++;
_result.headers = response.headers;
        _$jscoverage['lib/processor.js'][45]++;
_result.statusCode = response.statusCode;

    }

    // callback of the async.parallel method (async.parallel(reqs, function (err, _results) {...))
    // in the callback expects two parameters - error and _results
    _$jscoverage['lib/processor.js'][51]++;
return callback(null, _result);
}

/**
 * method to be called in parallel from async.parallelLimit
 * @param req - request to threat
 * @returns {Function}
 * @private
 */
_$jscoverage['lib/processor.js'][60]++;
function _getReq(req) {
    _$jscoverage['lib/processor.js'][61]++;
return function (cb) {
        _$jscoverage['lib/processor.js'][62]++;
try {
            // body - entity body for PATCH, POST and PUT requests. Must be a Buffer or String, unless json is true. If json is true, then body must be a JSON-serializable object.
            _$jscoverage['lib/processor.js'][64]++;
var body = JSON.stringify(req.body);
            _$jscoverage['lib/processor.js'][65]++;
req = req || {};
            _$jscoverage['lib/processor.js'][66]++;
var options = {
                url: req.url,
                headers: req.headers || {},
                method: req.method,
                body: body,
                timeout: (req.timeout <= config.request_default_values.timeout) ? req.timeout : config.request_default_values.timeout,
                pool : {
                    maxSockets : 200
                }
            };

            _$jscoverage['lib/processor.js'][77]++;
options.headers.HTTP_X_FORWARDED_FOR = req.ip;

            _$jscoverage['lib/processor.js'][79]++;
log.debug("[processor] Requesting URL: " + options.url + ", headers: " + options.headers + ", method: " + options.method + ", body(when POST method): " + options.body + ", timeout: "  + options.timeout);

            // request to the API host for every job
            _$jscoverage['lib/processor.js'][82]++;
request(options, function(error, response, body) {
                _$jscoverage['lib/processor.js'][83]++;
_process(req, error, response, body, cb);
            });
        }
        catch (e) {
            _$jscoverage['lib/processor.js'][87]++;
log.error("[processor] exception parsing the body or in request");
        }

    };
}

/**
 * configure object
 * @param cfg
 * @returns {*}
 */
_$jscoverage['lib/processor.js'][98]++;
exports.configure = function (cfg) {
    _$jscoverage['lib/processor.js'][99]++;
config = commons.helper.configure(cfg);
    _$jscoverage['lib/processor.js'][100]++;
utils.configure(cfg);
    _$jscoverage['lib/processor.js'][101]++;
log = config.logger || console;
    _$jscoverage['lib/processor.js'][102]++;
return config;
};

/**
 * entry point to start running jobs
 * @param job - job containing one or more requests
 * @param cb - callback method to call once finish processing job
 */
_$jscoverage['lib/processor.js'][110]++;
exports.run = function (job, cb) {

    _$jscoverage['lib/processor.js'][112]++;
log.debug("[processor] running processor ...");
    _$jscoverage['lib/processor.js'][113]++;
var _reqs = {};

    // creates the collection of 'requests' (holds a collection of getReq methods)
    _$jscoverage['lib/processor.js'][116]++;
_.forEach(job, function (cReq) {
        _$jscoverage['lib/processor.js'][117]++;
_reqs[cReq.name] =_getReq(cReq);
    });

    _$jscoverage['lib/processor.js'][120]++;
async.parallelLimit(_reqs, config.maxConcurrentJobs, function (err, results) {
        _$jscoverage['lib/processor.js'][121]++;
if (err) {
            _$jscoverage['lib/processor.js'][122]++;
log.error("[processor] Error in running the job, err: " + err);
            _$jscoverage['lib/processor.js'][123]++;
return cb(err);
        }
        else {
            _$jscoverage['lib/processor.js'][126]++;
return cb(null, results);
        }
    });

};