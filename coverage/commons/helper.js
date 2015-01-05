if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (typeof _$jscoverage['commons/helper.js'] === 'undefined'){_$jscoverage['commons/helper.js']=[];
_$jscoverage['commons/helper.js'].source=['/*jslint node: true */',
'\'use strict\';',
'',
'var idCounter = 0;',
'',
'exports.configure = function (cfg) {',
'    var config = {};',
'    for (var key in cfg) {',
'        config[key] = cfg[key];',
'    }',
'    return config;',
'};',
'',
'exports.merge = function (source, target) {',
'    for (var cur in source) {',
'        target[cur] = source[cur];',
'    }',
'',
'    return target;',
'};',
'',
'exports.setDefaultValues = function (source, target) {',
'    for(var key in source) {',
'        if (!target.hasOwnProperty(key)) {',
'            target[key] = source[key];',
'        }',
'    }',
'    return target;',
'};',
'',
'exports.convert2Array = function(obj) {',
'    var arr = [];',
'    if (obj.constructor === Array) {',
'        arr = obj.slice(0);',
'    }',
'    else {',
'        arr.push(obj);',
'    }',
'',
'    return arr;',
'};',
'',
'exports.getUniqueId = function (prefix) {',
'    var id = ++idCounter + "";',
'    return prefix ? prefix + id : id;',
'};',
'exports.isEmptyObject = function (obj) {',
'    return Object.keys(obj).length === 0;',
'};'];
_$jscoverage['commons/helper.js'][23]=0;
_$jscoverage['commons/helper.js'][2]=0;
_$jscoverage['commons/helper.js'][28]=0;
_$jscoverage['commons/helper.js'][7]=0;
_$jscoverage['commons/helper.js'][4]=0;
_$jscoverage['commons/helper.js'][6]=0;
_$jscoverage['commons/helper.js'][32]=0;
_$jscoverage['commons/helper.js'][11]=0;
_$jscoverage['commons/helper.js'][9]=0;
_$jscoverage['commons/helper.js'][8]=0;
_$jscoverage['commons/helper.js'][37]=0;
_$jscoverage['commons/helper.js'][14]=0;
_$jscoverage['commons/helper.js'][33]=0;
_$jscoverage['commons/helper.js'][24]=0;
_$jscoverage['commons/helper.js'][15]=0;
_$jscoverage['commons/helper.js'][22]=0;
_$jscoverage['commons/helper.js'][16]=0;
_$jscoverage['commons/helper.js'][19]=0;
_$jscoverage['commons/helper.js'][25]=0;
_$jscoverage['commons/helper.js'][31]=0;
_$jscoverage['commons/helper.js'][34]=0;
_$jscoverage['commons/helper.js'][40]=0;
_$jscoverage['commons/helper.js'][43]=0;
_$jscoverage['commons/helper.js'][44]=0;
_$jscoverage['commons/helper.js'][45]=0;
_$jscoverage['commons/helper.js'][47]=0;
_$jscoverage['commons/helper.js'][48]=0;
}/*jslint node: true */
_$jscoverage['commons/helper.js'][2]++;
'use strict';

_$jscoverage['commons/helper.js'][4]++;
var idCounter = 0;

_$jscoverage['commons/helper.js'][6]++;
exports.configure = function (cfg) {
    _$jscoverage['commons/helper.js'][7]++;
var config = {};
    _$jscoverage['commons/helper.js'][8]++;
for (var key in cfg) {
        _$jscoverage['commons/helper.js'][9]++;
config[key] = cfg[key];
    }
    _$jscoverage['commons/helper.js'][11]++;
return config;
};

_$jscoverage['commons/helper.js'][14]++;
exports.merge = function (source, target) {
    _$jscoverage['commons/helper.js'][15]++;
for (var cur in source) {
        _$jscoverage['commons/helper.js'][16]++;
target[cur] = source[cur];
    }

    _$jscoverage['commons/helper.js'][19]++;
return target;
};

_$jscoverage['commons/helper.js'][22]++;
exports.setDefaultValues = function (source, target) {
    _$jscoverage['commons/helper.js'][23]++;
for(var key in source) {
        _$jscoverage['commons/helper.js'][24]++;
if (!target.hasOwnProperty(key)) {
            _$jscoverage['commons/helper.js'][25]++;
target[key] = source[key];
        }
    }
    _$jscoverage['commons/helper.js'][28]++;
return target;
};

_$jscoverage['commons/helper.js'][31]++;
exports.convert2Array = function(obj) {
    _$jscoverage['commons/helper.js'][32]++;
var arr = [];
    _$jscoverage['commons/helper.js'][33]++;
if (obj.constructor === Array) {
        _$jscoverage['commons/helper.js'][34]++;
arr = obj.slice(0);
    }
    else {
        _$jscoverage['commons/helper.js'][37]++;
arr.push(obj);
    }

    _$jscoverage['commons/helper.js'][40]++;
return arr;
};

_$jscoverage['commons/helper.js'][43]++;
exports.getUniqueId = function (prefix) {
    _$jscoverage['commons/helper.js'][44]++;
var id = ++idCounter + "";
    _$jscoverage['commons/helper.js'][45]++;
return prefix ? prefix + id : id;
};
_$jscoverage['commons/helper.js'][47]++;
exports.isEmptyObject = function (obj) {
    _$jscoverage['commons/helper.js'][48]++;
return Object.keys(obj).length === 0;
};