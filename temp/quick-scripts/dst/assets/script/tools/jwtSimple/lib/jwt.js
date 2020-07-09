
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tools/jwtSimple/lib/jwt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}(function (Buffer){
"use strict";
cc._RF.push(module, '1f2cec0ZjJH9oYxAMLtmaMp', 'jwt');
// script/tools/jwtSimple/lib/jwt.js

"use strict";

/*
 * jwt-simple
 *
 * JSON Web Token encode and decode module for node.js
 *
 * Copyright(c) 2011 Kazuhito Hokamura
 * MIT Licensed
 */

/**
 * module dependencies
 */
console.log("platform:", window.navigator.platform);
var crypto;

if (window.navigator.platform === "MacIntel" || window.navigator.platform === "Win32" || window.navigator.platform === "Windows") {
  crypto = require('crypto-browserify');
} else {
  crypto = require('crypto');
}
/**
 * support algorithm mapping
 */


var algorithmMap = {
  HS256: 'sha256',
  HS384: 'sha384',
  HS512: 'sha512',
  RS256: 'RSA-SHA256'
};
/**
 * Map algorithm to hmac or sign type, to determine which crypto function to use
 */

var typeMap = {
  HS256: 'hmac',
  HS384: 'hmac',
  HS512: 'hmac',
  RS256: 'sign'
};
/**
 * expose object
 */

var jwt = module.exports;
/**
 * version
 */

jwt.version = '0.5.6';
/**
 * Decode jwt
 *
 * @param {Object} token
 * @param {String} key
 * @param {Boolean} [noVerify]
 * @param {String} [algorithm]
 * @return {Object} payload
 * @api public
 */

jwt.decode = function jwt_decode(token, key, noVerify, algorithm) {
  // check token
  if (!token) {
    throw new Error('No token supplied');
  } // check segments


  var segments = token.split('.');

  if (segments.length !== 3) {
    throw new Error('Not enough or too many segments');
  } // All segment should be base64


  var headerSeg = segments[0];
  var payloadSeg = segments[1];
  var signatureSeg = segments[2]; // base64 decode and parse JSON

  var header = JSON.parse(base64urlDecode(headerSeg));
  var payload = JSON.parse(base64urlDecode(payloadSeg));

  if (!noVerify) {
    if (!algorithm && /BEGIN( RSA)? PUBLIC KEY/.test(key.toString())) {
      algorithm = 'RS256';
    }

    var signingMethod = algorithmMap[algorithm || header.alg];
    var signingType = typeMap[algorithm || header.alg];

    if (!signingMethod || !signingType) {
      throw new Error('Algorithm not supported');
    } // verify signature. `sign` will return base64 string.


    var signingInput = [headerSeg, payloadSeg].join('.');

    if (!verify(signingInput, key, signingMethod, signingType, signatureSeg)) {
      throw new Error('Signature verification failed');
    } // Support for nbf and exp claims.
    // According to the RFC, they should be in seconds.


    if (payload.nbf && Date.now() < payload.nbf * 1000) {
      throw new Error('Token not yet active');
    }

    if (payload.exp && Date.now() > payload.exp * 1000) {
      throw new Error('Token expired');
    }
  }

  return payload;
};
/**
 * Encode jwt
 *
 * @param {Object} payload
 * @param {String} key
 * @param {String} algorithm
 * @param {Object} options
 * @return {String} token
 * @api public
 */


jwt.encode = function jwt_encode(payload, key, algorithm, options) {
  // Check key
  if (!key) {
    throw new Error('Require key');
  } // Check algorithm, default is HS256


  if (!algorithm) {
    algorithm = 'HS256';
  }

  var signingMethod = algorithmMap[algorithm];
  var signingType = typeMap[algorithm];

  if (!signingMethod || !signingType) {
    throw new Error('Algorithm not supported');
  } // header, typ is fixed value.


  var header = {
    typ: 'JWT',
    alg: algorithm
  };

  if (options && options.header) {
    assignProperties(header, options.header);
  } // create segments, all segments should be base64 string


  var segments = [];
  segments.push(base64urlEncode(JSON.stringify(header)));
  segments.push(base64urlEncode(JSON.stringify(payload)));
  segments.push(sign(segments.join('.'), key, signingMethod, signingType));
  return segments.join('.');
};
/**
 * private util functions
 */


function assignProperties(dest, source) {
  for (var attr in source) {
    if (source.hasOwnProperty(attr)) {
      dest[attr] = source[attr];
    }
  }
}

function verify(input, key, method, type, signature) {
  if (type === "hmac") {
    return signature === sign(input, key, method, type);
  } else if (type == "sign") {
    return crypto.createVerify(method).update(input).verify(key, base64urlUnescape(signature), 'base64');
  } else {
    throw new Error('Algorithm type not recognized');
  }
}

function sign(input, key, method, type) {
  var base64str;

  if (type === "hmac") {
    base64str = crypto.createHmac(method, key).update(input).digest('base64');
  } else if (type == "sign") {
    base64str = crypto.createSign(method).update(input).sign(key, 'base64');
  } else {
    throw new Error('Algorithm type not recognized');
  }

  return base64urlEscape(base64str);
}

function base64urlDecode(str) {
  return Buffer.from(base64urlUnescape(str), 'base64').toString();
}

function base64urlUnescape(str) {
  str += new Array(5 - str.length % 4).join('=');
  return str.replace(/\-/g, '+').replace(/_/g, '/');
}

function base64urlEncode(str) {
  return base64urlEscape(Buffer.from(str).toString('base64'));
}

function base64urlEscape(str) {
  return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

cc._RF.pop();

}).call(this,require("buffer").Buffer)
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hc3NldHMvc2NyaXB0L3Rvb2xzL2p3dFNpbXBsZS9saWIvand0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7QUFTQTs7O0FBSUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCLE1BQU0sQ0FBQyxTQUFQLENBQWlCLFFBQTFDO0FBQ0EsSUFBSSxNQUFKOztBQUNBLElBQUcsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsUUFBakIsS0FBOEIsVUFBOUIsSUFBNEMsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsUUFBakIsS0FBOEIsT0FBMUUsSUFBcUYsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsUUFBakIsS0FBOEIsU0FBdEgsRUFBaUk7QUFDL0gsRUFBQSxNQUFNLEdBQUcsT0FBTyxDQUFDLG1CQUFELENBQWhCO0FBQ0QsQ0FGRCxNQUVPO0FBQ0wsRUFBQSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQUQsQ0FBaEI7QUFDRDtBQUdEOzs7OztBQUdBLElBQUksWUFBWSxHQUFHO0FBQ2pCLEVBQUEsS0FBSyxFQUFFLFFBRFU7QUFFakIsRUFBQSxLQUFLLEVBQUUsUUFGVTtBQUdqQixFQUFBLEtBQUssRUFBRSxRQUhVO0FBSWpCLEVBQUEsS0FBSyxFQUFFO0FBSlUsQ0FBbkI7QUFPQTs7OztBQUdBLElBQUksT0FBTyxHQUFHO0FBQ1osRUFBQSxLQUFLLEVBQUUsTUFESztBQUVaLEVBQUEsS0FBSyxFQUFFLE1BRks7QUFHWixFQUFBLEtBQUssRUFBRSxNQUhLO0FBSVosRUFBQSxLQUFLLEVBQUU7QUFKSyxDQUFkO0FBUUE7Ozs7QUFHQSxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsT0FBakI7QUFHQTs7OztBQUdBLEdBQUcsQ0FBQyxPQUFKLEdBQWMsT0FBZDtBQUVBOzs7Ozs7Ozs7OztBQVVBLEdBQUcsQ0FBQyxNQUFKLEdBQWEsU0FBUyxVQUFULENBQW9CLEtBQXBCLEVBQTJCLEdBQTNCLEVBQWdDLFFBQWhDLEVB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QUFnQztBQUM5QixFQUFBLEdBQUcsSUFBSSxJQUFJLEtBQUosQ0FBVSxJQUFJLEdBQUcsQ0FBQyxNQUFKLEdBQWEsQ0FBM0IsRUFBOEIsSUFBOUIsQ0FBbUMsR0FBbkMsQ0FBUDtBQUNBLFNBQU8sR0FBRyxDQUFDLE9BQUosQ0FBWSxLQUFaLEVBQW1CLEdBQW5CLEVBQXdCLE9BQXhCLENBQWdDLElBQWhDLEVBQXNDLEdBQXRDLENBQVA7QUFDRDs7QUFFRCxTQUFTLGVBQVQsQ0FBeUIsR0FBekIsRUFBOEI7QUFDNUIsU0FBTyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQVAsQ0FBWSxHQUFaLEVBQWlCLFFBQWpCLENBQTBCLFFBQTFCLENBQUQsQ0FBdEI7QUFDRDs7QUFFRCxTQUFTLGVBQVQsQ0FBeUIsR0FBekIsRUFBOEI7QUFDNUIsU0FBTyxHQUFHLENBQUMsT0FBSixDQUFZLEtBQVosRUFBbUIsR0FBbkIsRUFBd0IsT0FBeEIsQ0FBZ0MsS0FBaEMsRUFBdUMsR0FBdkMsRUFBNEMsT0FBNUMsQ0FBb0QsSUFBcEQsRUFBMEQsRUFBMUQsQ0FBUDtBQUNEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogand0LXNpbXBsZVxuICpcbiAqIEpTT04gV2ViIFRva2VuIGVuY29kZSBhbmQgZGVjb2RlIG1vZHVsZSBmb3Igbm9kZS5qc1xuICpcbiAqIENvcHlyaWdodChjKSAyMDExIEthenVoaXRvIEhva2FtdXJhXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4vKipcbiAqIG1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuXG5jb25zb2xlLmxvZyhcInBsYXRmb3JtOlwiLCB3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtKTtcbnZhciBjcnlwdG87XG5pZih3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtID09PSBcIk1hY0ludGVsXCIgfHwgd2luZG93Lm5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gXCJXaW4zMlwiIHx8IHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0gPT09IFwiV2luZG93c1wiKSB7XG4gIGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0by1icm93c2VyaWZ5Jyk7XG59IGVsc2Uge1xuICBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcbn1cblxuXG4vKipcbiAqIHN1cHBvcnQgYWxnb3JpdGhtIG1hcHBpbmdcbiAqL1xudmFyIGFsZ29yaXRobU1hcCA9IHtcbiAgSFMyNTY6ICdzaGEyNTYnLFxuICBIUzM4NDogJ3NoYTM4NCcsXG4gIEhTNTEyOiAnc2hhNTEyJyxcbiAgUlMyNTY6ICdSU0EtU0hBMjU2J1xufTtcblxuLyoqXG4gKiBNYXAgYWxnb3JpdGhtIHRvIGhtYWMgb3Igc2lnbiB0eXBlLCB0byBkZXRlcm1pbmUgd2hpY2ggY3J5cHRvIGZ1bmN0aW9uIHRvIHVzZVxuICovXG52YXIgdHlwZU1hcCA9IHtcbiAgSFMyNTY6ICdobWFjJyxcbiAgSFMzODQ6ICdobWFjJyxcbiAgSFM1MTI6ICdobWFjJyxcbiAgUlMyNTY6ICdzaWduJ1xufTtcblxuXG4vKipcbiAqIGV4cG9zZSBvYmplY3RcbiAqL1xudmFyIGp3dCA9IG1vZHVsZS5leHBvcnRzO1xuXG5cbi8qKlxuICogdmVyc2lvblxuICovXG5qd3QudmVyc2lvbiA9ICcwLjUuNic7XG5cbi8qKlxuICogRGVjb2RlIGp3dFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0b2tlblxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHtCb29sZWFufSBbbm9WZXJpZnldXG4gKiBAcGFyYW0ge1N0cmluZ30gW2FsZ29yaXRobV1cbiAqIEByZXR1cm4ge09iamVjdH0gcGF5bG9hZFxuICogQGFwaSBwdWJsaWNcbiAqL1xuand0LmRlY29kZSA9IGZ1bmN0aW9uIGp3dF9kZWNvZGUodG9rZW4sIGtleSwgbm9WZXJpZnksIGFsZ29yaXRobSkge1xuICAvLyBjaGVjayB0b2tlblxuICBpZiAoIXRva2VuKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyB0b2tlbiBzdXBwbGllZCcpO1xuICB9XG4gIC8vIGNoZWNrIHNlZ21lbnRzXG4gIHZhciBzZWdtZW50cyA9IHRva2VuLnNwbGl0KCcuJyk7XG4gIGlmIChzZWdtZW50cy5sZW5ndGggIT09IDMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBlbm91Z2ggb3IgdG9vIG1hbnkgc2VnbWVudHMnKTtcbiAgfVxuXG4gIC8vIEFsbCBzZWdtZW50IHNob3VsZCBiZSBiYXNlNjRcbiAgdmFyIGhlYWRlclNlZyA9IHNlZ21lbnRzWzBdO1xuICB2YXIgcGF5bG9hZFNlZyA9IHNlZ21lbnRzWzFdO1xuICB2YXIgc2lnbmF0dXJlU2VnID0gc2VnbWVudHNbMl07XG5cbiAgLy8gYmFzZTY0IGRlY29kZSBhbmQgcGFyc2UgSlNPTlxuICB2YXIgaGVhZGVyID0gSlNPTi5wYXJzZShiYXNlNjR1cmxEZWNvZGUoaGVhZGVyU2VnKSk7XG4gIHZhciBwYXlsb2FkID0gSlNPTi5wYXJzZShiYXNlNjR1cmxEZWNvZGUocGF5bG9hZFNlZykpO1xuXG4gIGlmICghbm9WZXJpZnkpIHtcbiAgICBpZiAoIWFsZ29yaXRobSAmJiAvQkVHSU4oIFJTQSk/IFBVQkxJQyBLRVkvLnRlc3Qoa2V5LnRvU3RyaW5nKCkpKSB7XG4gICAgICBhbGdvcml0aG0gPSAnUlMyNTYnO1xuICAgIH1cblxuICAgIHZhciBzaWduaW5nTWV0aG9kID0gYWxnb3JpdGhtTWFwW2FsZ29yaXRobSB8fCBoZWFkZXIuYWxnXTtcbiAgICB2YXIgc2lnbmluZ1R5cGUgPSB0eXBlTWFwW2FsZ29yaXRobSB8fCBoZWFkZXIuYWxnXTtcbiAgICBpZiAoIXNpZ25pbmdNZXRob2QgfHwgIXNpZ25pbmdUeXBlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FsZ29yaXRobSBub3Qgc3VwcG9ydGVkJyk7XG4gICAgfVxuXG4gICAgLy8gdmVyaWZ5IHNpZ25hdHVyZS4gYHNpZ25gIHdpbGwgcmV0dXJuIGJhc2U2NCBzdHJpbmcuXG4gICAgdmFyIHNpZ25pbmdJbnB1dCA9IFtoZWFkZXJTZWcsIHBheWxvYWRTZWddLmpvaW4oJy4nKTtcbiAgICBpZiAoIXZlcmlmeShzaWduaW5nSW5wdXQsIGtleSwgc2lnbmluZ01ldGhvZCwgc2lnbmluZ1R5cGUsIHNpZ25hdHVyZVNlZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2lnbmF0dXJlIHZlcmlmaWNhdGlvbiBmYWlsZWQnKTtcbiAgICB9XG5cbiAgICAvLyBTdXBwb3J0IGZvciBuYmYgYW5kIGV4cCBjbGFpbXMuXG4gICAgLy8gQWNjb3JkaW5nIHRvIHRoZSBSRkMsIHRoZXkgc2hvdWxkIGJlIGluIHNlY29uZHMuXG4gICAgaWYgKHBheWxvYWQubmJmICYmIERhdGUubm93KCkgPCBwYXlsb2FkLm5iZioxMDAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Rva2VuIG5vdCB5ZXQgYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgaWYgKHBheWxvYWQuZXhwICYmIERhdGUubm93KCkgPiBwYXlsb2FkLmV4cCoxMDAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Rva2VuIGV4cGlyZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGF5bG9hZDtcbn07XG5cblxuLyoqXG4gKiBFbmNvZGUgand0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBheWxvYWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7U3RyaW5nfSBhbGdvcml0aG1cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRva2VuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5qd3QuZW5jb2RlID0gZnVuY3Rpb24gand0X2VuY29kZShwYXlsb2FkLCBrZXksIGFsZ29yaXRobSwgb3B0aW9ucykge1xuICAvLyBDaGVjayBrZXlcbiAgaWYgKCFrZXkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmUga2V5Jyk7XG4gIH1cblxuICAvLyBDaGVjayBhbGdvcml0aG0sIGRlZmF1bHQgaXMgSFMyNTZcbiAgaWYgKCFhbGdvcml0aG0pIHtcbiAgICBhbGdvcml0aG0gPSAnSFMyNTYnO1xuICB9XG5cbiAgdmFyIHNpZ25pbmdNZXRob2QgPSBhbGdvcml0aG1NYXBbYWxnb3JpdGhtXTtcbiAgdmFyIHNpZ25pbmdUeXBlID0gdHlwZU1hcFthbGdvcml0aG1dO1xuICBpZiAoIXNpZ25pbmdNZXRob2QgfHwgIXNpZ25pbmdUeXBlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBbGdvcml0aG0gbm90IHN1cHBvcnRlZCcpO1xuICB9XG5cbiAgLy8gaGVhZGVyLCB0eXAgaXMgZml4ZWQgdmFsdWUuXG4gIHZhciBoZWFkZXIgPSB7IHR5cDogJ0pXVCcsIGFsZzogYWxnb3JpdGhtIH07XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuaGVhZGVyKSB7XG4gICAgYXNzaWduUHJvcGVydGllcyhoZWFkZXIsIG9wdGlvbnMuaGVhZGVyKTtcbiAgfVxuXG4gIC8vIGNyZWF0ZSBzZWdtZW50cywgYWxsIHNlZ21lbnRzIHNob3VsZCBiZSBiYXNlNjQgc3RyaW5nXG4gIHZhciBzZWdtZW50cyA9IFtdO1xuICBzZWdtZW50cy5wdXNoKGJhc2U2NHVybEVuY29kZShKU09OLnN0cmluZ2lmeShoZWFkZXIpKSk7XG4gIHNlZ21lbnRzLnB1c2goYmFzZTY0dXJsRW5jb2RlKEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKSk7XG4gIHNlZ21lbnRzLnB1c2goc2lnbihzZWdtZW50cy5qb2luKCcuJyksIGtleSwgc2lnbmluZ01ldGhvZCwgc2lnbmluZ1R5cGUpKTtcblxuICByZXR1cm4gc2VnbWVudHMuam9pbignLicpO1xufTtcblxuLyoqXG4gKiBwcml2YXRlIHV0aWwgZnVuY3Rpb25zXG4gKi9cblxuZnVuY3Rpb24gYXNzaWduUHJvcGVydGllcyhkZXN0LCBzb3VyY2UpIHtcbiAgZm9yICh2YXIgYXR0ciBpbiBzb3VyY2UpIHtcbiAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGF0dHIpKSB7XG4gICAgICBkZXN0W2F0dHJdID0gc291cmNlW2F0dHJdO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB2ZXJpZnkoaW5wdXQsIGtleSwgbWV0aG9kLCB0eXBlLCBzaWduYXR1cmUpIHtcbiAgaWYodHlwZSA9PT0gXCJobWFjXCIpIHtcbiAgICByZXR1cm4gKHNpZ25hdHVyZSA9PT0gc2lnbihpbnB1dCwga2V5LCBtZXRob2QsIHR5cGUpKTtcbiAgfVxuICBlbHNlIGlmKHR5cGUgPT0gXCJzaWduXCIpIHtcbiAgICByZXR1cm4gY3J5cHRvLmNyZWF0ZVZlcmlmeShtZXRob2QpXG4gICAgICAgICAgICAgICAgIC51cGRhdGUoaW5wdXQpXG4gICAgICAgICAgICAgICAgIC52ZXJpZnkoa2V5LCBiYXNlNjR1cmxVbmVzY2FwZShzaWduYXR1cmUpLCAnYmFzZTY0Jyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBbGdvcml0aG0gdHlwZSBub3QgcmVjb2duaXplZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNpZ24oaW5wdXQsIGtleSwgbWV0aG9kLCB0eXBlKSB7XG4gIHZhciBiYXNlNjRzdHI7XG4gIGlmKHR5cGUgPT09IFwiaG1hY1wiKSB7XG4gICAgYmFzZTY0c3RyID0gY3J5cHRvLmNyZWF0ZUhtYWMobWV0aG9kLCBrZXkpLnVwZGF0ZShpbnB1dCkuZGlnZXN0KCdiYXNlNjQnKTtcbiAgfVxuICBlbHNlIGlmKHR5cGUgPT0gXCJzaWduXCIpIHtcbiAgICBiYXNlNjRzdHIgPSBjcnlwdG8uY3JlYXRlU2lnbihtZXRob2QpLnVwZGF0ZShpbnB1dCkuc2lnbihrZXksICdiYXNlNjQnKTtcbiAgfVxuICBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0FsZ29yaXRobSB0eXBlIG5vdCByZWNvZ25pemVkJyk7XG4gIH1cblxuICByZXR1cm4gYmFzZTY0dXJsRXNjYXBlKGJhc2U2NHN0cik7XG59XG5cbmZ1bmN0aW9uIGJhc2U2NHVybERlY29kZShzdHIpIHtcbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKGJhc2U2NHVybFVuZXNjYXBlKHN0ciksICdiYXNlNjQnKS50b1N0cmluZygpO1xufVxuXG5mdW5jdGlvbiBiYXNlNjR1cmxVbmVzY2FwZShzdHIpIHtcbiAgc3RyICs9IG5ldyBBcnJheSg1IC0gc3RyLmxlbmd0aCAlIDQpLmpvaW4oJz0nKTtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXC0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XG59XG5cbmZ1bmN0aW9uIGJhc2U2NHVybEVuY29kZShzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NHVybEVzY2FwZShCdWZmZXIuZnJvbShzdHIpLnRvU3RyaW5nKCdiYXNlNjQnKSk7XG59XG5cbmZ1bmN0aW9uIGJhc2U2NHVybEVzY2FwZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXCsvZywgJy0nKS5yZXBsYWNlKC9cXC8vZywgJ18nKS5yZXBsYWNlKC89L2csICcnKTtcbn0iXX0=