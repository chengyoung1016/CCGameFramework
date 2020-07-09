
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tools/buffer/index.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '336f2wMyyRAz4WiOIs0jvyM', 'index');
// script/tools/buffer/index.js

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

/* eslint-disable no-proto */
'use strict';

var base64 = require('base64.min');

var ieee754 = require('ieee754');

var customInspectSymbol = typeof Symbol === 'function' && typeof Symbol["for"] === 'function' ? Symbol["for"]('nodejs.util.inspect.custom') : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
var K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */

Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') {
  console.error('This browser lacks typed array (Uint8Array) support which is required by ' + '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
}

function typedArraySupport() {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1);
    var proto = {
      foo: function foo() {
        return 42;
      }
    };
    Object.setPrototypeOf(proto, Uint8Array.prototype);
    Object.setPrototypeOf(arr, proto);
    return arr.foo() === 42;
  } catch (e) {
    return false;
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function get() {
    if (!Buffer.isBuffer(this)) return undefined;
    return this.buffer;
  }
});
Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function get() {
    if (!Buffer.isBuffer(this)) return undefined;
    return this.byteOffset;
  }
});

function createBuffer(length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"');
  } // Return an augmented `Uint8Array` instance


  var buf = new Uint8Array(length);
  Object.setPrototypeOf(buf, Buffer.prototype);
  return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */


function Buffer(arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError('The "string" argument must be of type string. Received type number');
    }

    return allocUnsafe(arg);
  }

  return from(arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation

function from(value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset);
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value);
  }

  if (value == null) {
    throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
  }

  if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
    return fromArrayBuffer(value, encodingOrOffset, length);
  }

  if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length);
  }

  if (typeof value === 'number') {
    throw new TypeError('The "value" argument must not be of type number. Received type number');
  }

  var valueOf = value.valueOf && value.valueOf();

  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length);
  }

  var b = fromObject(value);
  if (b) return b;

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
  }

  throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/


Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length);
}; // Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148


Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number');
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"');
  }
}

function alloc(size, fill, encoding) {
  assertSize(size);

  if (size <= 0) {
    return createBuffer(size);
  }

  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
  }

  return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/


Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding);
};

function allocUnsafe(size) {
  assertSize(size);
  return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */


Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */


Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size);
};

function fromString(string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding);
  }

  var length = byteLength(string, encoding) | 0;
  var buf = createBuffer(length);
  var actual = buf.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
  }

  return buf;
}

function fromArrayLike(array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  var buf = createBuffer(length);

  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255;
  }

  return buf;
}

function fromArrayBuffer(array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds');
  }

  var buf;

  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array);
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset);
  } else {
    buf = new Uint8Array(array, byteOffset, length);
  } // Return an augmented `Uint8Array` instance


  Object.setPrototypeOf(buf, Buffer.prototype);
  return buf;
}

function fromObject(obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    var buf = createBuffer(len);

    if (buf.length === 0) {
      return buf;
    }

    obj.copy(buf, 0, 0, len);
    return buf;
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0);
    }

    return fromArrayLike(obj);
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data);
  }
}

function checked(length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
  }

  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }

  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return b != null && b._isBuffer === true && b !== Buffer.prototype; // so Buffer.isBuffer(Buffer.prototype) will be false
};

Buffer.compare = function compare(a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);

  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
  }

  if (a === b) return 0;
  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;

  if (length === undefined) {
    length = 0;

    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;

  for (i = 0; i < list.length; ++i) {
    var buf = list[i];

    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf);
    }

    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    buf.copy(buffer, pos);
    pos += buf.length;
  }

  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }

  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength;
  }

  if (typeof string !== 'string') {
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + 'Received type ' + typeof string);
  }

  var len = string.length;
  var mustMatch = arguments.length > 2 && arguments[2] === true;
  if (!mustMatch && len === 0) return 0; // Use a for loop to avoid recursion

  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;

      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length;

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;

      case 'hex':
        return len >>> 1;

      case 'base64':
        return base64ToBytes(string).length;

      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length; // assume utf8
        }

        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}

Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.
  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

  if (start === undefined || start < 0) {
    start = 0;
  } // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.


  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
} // This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154


Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;

  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }

  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }

  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;

  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }

  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }

  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;

  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }

  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }

  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.toLocaleString = Buffer.prototype.toString;

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
  if (this.length > max) str += ' ... ';
  return '<Buffer ' + str + '>';
};

if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
}

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength);
  }

  if (!Buffer.isBuffer(target)) {
    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + 'Received type ' + typeof target);
  }

  if (start === undefined) {
    start = 0;
  }

  if (end === undefined) {
    end = target ? target.length : 0;
  }

  if (thisStart === undefined) {
    thisStart = 0;
  }

  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }

  if (thisStart >= thisEnd) {
    return -1;
  }

  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
}; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf


function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1; // Normalize byteOffset

  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }

  byteOffset = +byteOffset; // Coerce to Number.

  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  } // Normalize byteOffset: negative offsets start from the end of the buffer


  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  } // Normalize val


  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  } // Finally, search either indexOf (if dir is true) or lastIndexOf


  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }

    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]

    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }

    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();

    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }

      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;

  if (dir) {
    var foundIndex = -1;

    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

    for (i = byteOffset; i >= 0; i--) {
      var found = true;

      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }

      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  }

  var strLen = string.length;

  if (length > strLen / 2) {
    length = strLen / 2;
  }

  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (numberIsNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }

  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0; // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0; // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0;

    if (isFinite(length)) {
      length = length >>> 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';
  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;

  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }

          break;

        case 2:
          secondByte = buf[i + 1];

          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }

      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
} // Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety


var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;

  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  } // Decode in chunks to avoid "call stack size exceeded".


  var res = '';
  var i = 0;

  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }

  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }

  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }

  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';

  for (var i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]];
  }

  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';

  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }

  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;
  var newBuf = this.subarray(start, end); // Return an augmented `Uint8Array` instance

  Object.setPrototypeOf(newBuf, Buffer.prototype);
  return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */


function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;

  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;

  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];

  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  this[offset] = value & 0xff;
  this[offset + 1] = value >>> 8;
  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  this[offset] = value >>> 8;
  this[offset + 1] = value & 0xff;
  return offset + 2;
};

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  this[offset + 3] = value >>> 24;
  this[offset + 2] = value >>> 16;
  this[offset + 1] = value >>> 8;
  this[offset] = value & 0xff;
  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  this[offset] = value >>> 24;
  this[offset + 1] = value >>> 16;
  this[offset + 2] = value >>> 8;
  this[offset + 3] = value & 0xff;
  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  this[offset] = value & 0xff;
  this[offset + 1] = value >>> 8;
  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  this[offset] = value >>> 8;
  this[offset + 1] = value & 0xff;
  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  this[offset] = value & 0xff;
  this[offset + 1] = value >>> 8;
  this[offset + 2] = value >>> 16;
  this[offset + 3] = value >>> 24;
  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  this[offset] = value >>> 24;
  this[offset + 1] = value >>> 16;
  this[offset + 2] = value >>> 8;
  this[offset + 3] = value & 0xff;
  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  value = +value;
  offset = offset >>> 0;

  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  value = +value;
  offset = offset >>> 0;

  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }

  if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;

  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
  }

  return len;
}; // Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])


Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }

    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }

    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }

    if (val.length === 1) {
      var code = val.charCodeAt(0);

      if (encoding === 'utf8' && code < 128 || encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code;
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } else if (typeof val === 'boolean') {
    val = Number(val);
  } // Invalid ranges are not set to a default, so can range check early.


  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;

  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
    var len = bytes.length;

    if (len === 0) {
      throw new TypeError('The value "' + val + '" is invalid for argument "value"');
    }

    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
}; // HELPER FUNCTIONS
// ================


var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]; // Node strips out invalid characters like \n and \t from the string, base64-js does not

  str = str.trim().replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

  if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

  while (str.length % 4 !== 0) {
    str = str + '=';
  }

  return str;
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i); // is surrogate component

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } // valid lead


        leadSurrogate = codePoint;
        continue;
      } // 2 leads in a row


      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      } // valid surrogate pair


      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null; // encode utf8

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }

  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
} // ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166


function isInstance(obj, type) {
  return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}

function numberIsNaN(obj) {
  // For IE11 support
  return obj !== obj; // eslint-disable-line no-self-compare
} // Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219


var hexSliceLookupTable = function () {
  var alphabet = '0123456789abcdef';
  var table = new Array(256);

  for (var i = 0; i < 16; ++i) {
    var i16 = i * 16;

    for (var j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j];
    }
  }

  return table;
}();

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbHMvYnVmZmVyL2luZGV4LmpzIl0sIm5hbWVzIjpbImJhc2U2NCIsInJlcXVpcmUiLCJpZWVlNzU0IiwiY3VzdG9tSW5zcGVjdFN5bWJvbCIsIlN5bWJvbCIsImV4cG9ydHMiLCJCdWZmZXIiLCJTbG93QnVmZmVyIiwiSU5TUEVDVF9NQVhfQllURVMiLCJLX01BWF9MRU5HVEgiLCJrTWF4TGVuZ3RoIiwiVFlQRURfQVJSQVlfU1VQUE9SVCIsInR5cGVkQXJyYXlTdXBwb3J0IiwiY29uc29sZSIsImVycm9yIiwiYXJyIiwiVWludDhBcnJheSIsInByb3RvIiwiZm9vIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJlIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiaXNCdWZmZXIiLCJ1bmRlZmluZWQiLCJidWZmZXIiLCJieXRlT2Zmc2V0IiwiY3JlYXRlQnVmZmVyIiwibGVuZ3RoIiwiUmFuZ2VFcnJvciIsImJ1ZiIsImFyZyIsImVuY29kaW5nT3JPZmZzZXQiLCJUeXBlRXJyb3IiLCJhbGxvY1Vuc2FmZSIsImZyb20iLCJwb29sU2l6ZSIsInZhbHVlIiwiZnJvbVN0cmluZyIsIkFycmF5QnVmZmVyIiwiaXNWaWV3IiwiZnJvbUFycmF5TGlrZSIsImlzSW5zdGFuY2UiLCJmcm9tQXJyYXlCdWZmZXIiLCJTaGFyZWRBcnJheUJ1ZmZlciIsInZhbHVlT2YiLCJiIiwiZnJvbU9iamVjdCIsInRvUHJpbWl0aXZlIiwiYXNzZXJ0U2l6ZSIsInNpemUiLCJhbGxvYyIsImZpbGwiLCJlbmNvZGluZyIsImNoZWNrZWQiLCJhbGxvY1Vuc2FmZVNsb3ciLCJzdHJpbmciLCJpc0VuY29kaW5nIiwiYnl0ZUxlbmd0aCIsImFjdHVhbCIsIndyaXRlIiwic2xpY2UiLCJhcnJheSIsImkiLCJvYmoiLCJsZW4iLCJjb3B5IiwibnVtYmVySXNOYU4iLCJ0eXBlIiwiQXJyYXkiLCJpc0FycmF5IiwiZGF0YSIsInRvU3RyaW5nIiwiX2lzQnVmZmVyIiwiY29tcGFyZSIsImEiLCJvZmZzZXQiLCJ4IiwieSIsIk1hdGgiLCJtaW4iLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImNvbmNhdCIsImxpc3QiLCJwb3MiLCJtdXN0TWF0Y2giLCJhcmd1bWVudHMiLCJsb3dlcmVkQ2FzZSIsInV0ZjhUb0J5dGVzIiwiYmFzZTY0VG9CeXRlcyIsInNsb3dUb1N0cmluZyIsInN0YXJ0IiwiZW5kIiwiaGV4U2xpY2UiLCJ1dGY4U2xpY2UiLCJhc2NpaVNsaWNlIiwibGF0aW4xU2xpY2UiLCJiYXNlNjRTbGljZSIsInV0ZjE2bGVTbGljZSIsInN3YXAiLCJuIiwibSIsInN3YXAxNiIsInN3YXAzMiIsInN3YXA2NCIsImFwcGx5IiwidG9Mb2NhbGVTdHJpbmciLCJlcXVhbHMiLCJpbnNwZWN0Iiwic3RyIiwibWF4IiwicmVwbGFjZSIsInRyaW0iLCJ0YXJnZXQiLCJ0aGlzU3RhcnQiLCJ0aGlzRW5kIiwidGhpc0NvcHkiLCJ0YXJnZXRDb3B5IiwiYmlkaXJlY3Rpb25hbEluZGV4T2YiLCJ2YWwiLCJkaXIiLCJhcnJheUluZGV4T2YiLCJpbmRleE9mIiwiY2FsbCIsImxhc3RJbmRleE9mIiwiaW5kZXhTaXplIiwiYXJyTGVuZ3RoIiwidmFsTGVuZ3RoIiwicmVhZCIsInJlYWRVSW50MTZCRSIsImZvdW5kSW5kZXgiLCJmb3VuZCIsImoiLCJpbmNsdWRlcyIsImhleFdyaXRlIiwiTnVtYmVyIiwicmVtYWluaW5nIiwic3RyTGVuIiwicGFyc2VkIiwicGFyc2VJbnQiLCJzdWJzdHIiLCJ1dGY4V3JpdGUiLCJibGl0QnVmZmVyIiwiYXNjaWlXcml0ZSIsImFzY2lpVG9CeXRlcyIsImxhdGluMVdyaXRlIiwiYmFzZTY0V3JpdGUiLCJ1Y3MyV3JpdGUiLCJ1dGYxNmxlVG9CeXRlcyIsImlzRmluaXRlIiwiRXJyb3IiLCJ0b0pTT04iLCJfYXJyIiwiZnJvbUJ5dGVBcnJheSIsInJlcyIsImZpcnN0Qnl0ZSIsImNvZGVQb2ludCIsImJ5dGVzUGVyU2VxdWVuY2UiLCJzZWNvbmRCeXRlIiwidGhpcmRCeXRlIiwiZm91cnRoQnl0ZSIsInRlbXBDb2RlUG9pbnQiLCJwdXNoIiwiZGVjb2RlQ29kZVBvaW50c0FycmF5IiwiTUFYX0FSR1VNRU5UU19MRU5HVEgiLCJjb2RlUG9pbnRzIiwiZnJvbUNoYXJDb2RlIiwicmV0Iiwib3V0IiwiaGV4U2xpY2VMb29rdXBUYWJsZSIsImJ5dGVzIiwibmV3QnVmIiwic3ViYXJyYXkiLCJjaGVja09mZnNldCIsImV4dCIsInJlYWRVSW50TEUiLCJub0Fzc2VydCIsIm11bCIsInJlYWRVSW50QkUiLCJyZWFkVUludDgiLCJyZWFkVUludDE2TEUiLCJyZWFkVUludDMyTEUiLCJyZWFkVUludDMyQkUiLCJyZWFkSW50TEUiLCJwb3ciLCJyZWFkSW50QkUiLCJyZWFkSW50OCIsInJlYWRJbnQxNkxFIiwicmVhZEludDE2QkUiLCJyZWFkSW50MzJMRSIsInJlYWRJbnQzMkJFIiwicmVhZEZsb2F0TEUiLCJyZWFkRmxvYXRCRSIsInJlYWREb3VibGVMRSIsInJlYWREb3VibGVCRSIsImNoZWNrSW50Iiwid3JpdGVVSW50TEUiLCJtYXhCeXRlcyIsIndyaXRlVUludEJFIiwid3JpdGVVSW50OCIsIndyaXRlVUludDE2TEUiLCJ3cml0ZVVJbnQxNkJFIiwid3JpdGVVSW50MzJMRSIsIndyaXRlVUludDMyQkUiLCJ3cml0ZUludExFIiwibGltaXQiLCJzdWIiLCJ3cml0ZUludEJFIiwid3JpdGVJbnQ4Iiwid3JpdGVJbnQxNkxFIiwid3JpdGVJbnQxNkJFIiwid3JpdGVJbnQzMkxFIiwid3JpdGVJbnQzMkJFIiwiY2hlY2tJRUVFNzU0Iiwid3JpdGVGbG9hdCIsImxpdHRsZUVuZGlhbiIsIndyaXRlRmxvYXRMRSIsIndyaXRlRmxvYXRCRSIsIndyaXRlRG91YmxlIiwid3JpdGVEb3VibGVMRSIsIndyaXRlRG91YmxlQkUiLCJ0YXJnZXRTdGFydCIsImNvcHlXaXRoaW4iLCJzZXQiLCJjb2RlIiwiY2hhckNvZGVBdCIsIklOVkFMSURfQkFTRTY0X1JFIiwiYmFzZTY0Y2xlYW4iLCJzcGxpdCIsInVuaXRzIiwiSW5maW5pdHkiLCJsZWFkU3Vycm9nYXRlIiwiYnl0ZUFycmF5IiwiYyIsImhpIiwibG8iLCJ0b0J5dGVBcnJheSIsInNyYyIsImRzdCIsImNvbnN0cnVjdG9yIiwibmFtZSIsImFscGhhYmV0IiwidGFibGUiLCJpMTYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0FBTUE7QUFFQTs7QUFFQSxJQUFJQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxZQUFELENBQXBCOztBQUNBLElBQUlDLE9BQU8sR0FBR0QsT0FBTyxDQUFDLFNBQUQsQ0FBckI7O0FBQ0EsSUFBSUUsbUJBQW1CLEdBQ3BCLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0MsT0FBT0EsTUFBTSxPQUFiLEtBQXNCLFVBQXZELEdBQ0lBLE1BQU0sT0FBTixDQUFXLDRCQUFYLENBREosR0FFSSxJQUhOO0FBS0FDLE9BQU8sQ0FBQ0MsTUFBUixHQUFpQkEsTUFBakI7QUFDQUQsT0FBTyxDQUFDRSxVQUFSLEdBQXFCQSxVQUFyQjtBQUNBRixPQUFPLENBQUNHLGlCQUFSLEdBQTRCLEVBQTVCO0FBRUEsSUFBSUMsWUFBWSxHQUFHLFVBQW5CO0FBQ0FKLE9BQU8sQ0FBQ0ssVUFBUixHQUFxQkQsWUFBckI7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FBY0FILE1BQU0sQ0FBQ0ssbUJBQVAsR0FBNkJDLGlCQUFpQixFQUE5Qzs7QUFFQSxJQUFJLENBQUNOLE1BQU0sQ0FBQ0ssbUJBQVIsSUFBK0IsT0FBT0UsT0FBUCxLQUFtQixXQUFsRCxJQUNBLE9BQU9BLE9BQU8sQ0FBQ0MsS0FBZixLQUF5QixVQUQ3QixFQUN5QztBQUN2Q0QsRUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQ0UsOEVBQ0Esc0VBRkY7QUFJRDs7QUFFRCxTQUFTRixpQkFBVCxHQUE4QjtBQUM1QjtBQUNBLE1BQUk7QUFDRixRQUFJRyxHQUFHLEdBQUcsSUFBSUMsVUFBSixDQUFl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O0FBQzlCLFNBQU9KLEdBQUcsWUFBWUksSUFBZixJQUNKSixHQUFHLElBQUksSUFBUCxJQUFlQSxHQUFHLENBQUNnTCxXQUFKLElBQW1CLElBQWxDLElBQTBDaEwsR0FBRyxDQUFDZ0wsV0FBSixDQUFnQkMsSUFBaEIsSUFBd0IsSUFBbEUsSUFDQ2pMLEdBQUcsQ0FBQ2dMLFdBQUosQ0FBZ0JDLElBQWhCLEtBQXlCN0ssSUFBSSxDQUFDNkssSUFGbEM7QUFHRDs7QUFDRCxTQUFTOUssV0FBVCxDQUFzQkgsR0FBdEIsRUFBMkI7QUFDekI7QUFDQSxTQUFPQSxHQUFHLEtBQUtBLEdBQWYsQ0FGeUIsQ0FFTjtBQUNwQixFQUVEO0FBQ0E7OztBQUNBLElBQUkwRyxtQkFBbUIsR0FBSSxZQUFZO0FBQ3JDLE1BQUl3RSxRQUFRLEdBQUcsa0JBQWY7QUFDQSxNQUFJQyxLQUFLLEdBQUcsSUFBSTlLLEtBQUosQ0FBVSxHQUFWLENBQVo7O0FBQ0EsT0FBSyxJQUFJTixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCLEVBQUVBLENBQTFCLEVBQTZCO0FBQzNCLFFBQUlxTCxHQUFHLEdBQUdyTCxDQUFDLEdBQUcsRUFBZDs7QUFDQSxTQUFLLElBQUlzRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCLEVBQUVBLENBQTFCLEVBQTZCO0FBQzNCOEcsTUFBQUEsS0FBSyxDQUFDQyxHQUFHLEdBQUcvRyxDQUFQLENBQUwsR0FBaUI2RyxRQUFRLENBQUNuTCxDQUFELENBQVIsR0FBY21MLFFBQVEsQ0FBQzdHLENBQUQsQ0FBdkM7QUFDRDtBQUNGOztBQUNELFNBQU84RyxLQUFQO0FBQ0QsQ0FWeUIsRUFBMUIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQubWluJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG52YXIgY3VzdG9tSW5zcGVjdFN5bWJvbCA9XG4gICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuZm9yID09PSAnZnVuY3Rpb24nKVxuICAgID8gU3ltYm9sLmZvcignbm9kZWpzLnV0aWwuaW5zcGVjdC5jdXN0b20nKVxuICAgIDogbnVsbFxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gU2xvd0J1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5cbnZhciBLX01BWF9MRU5HVEggPSAweDdmZmZmZmZmXG5leHBvcnRzLmtNYXhMZW5ndGggPSBLX01BWF9MRU5HVEhcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgUHJpbnQgd2FybmluZyBhbmQgcmVjb21tZW5kIHVzaW5nIGBidWZmZXJgIHY0Lnggd2hpY2ggaGFzIGFuIE9iamVjdFxuICogICAgICAgICAgICAgICBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogV2UgcmVwb3J0IHRoYXQgdGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0eXBlZCBhcnJheXMgaWYgdGhlIGFyZSBub3Qgc3ViY2xhc3NhYmxlXG4gKiB1c2luZyBfX3Byb3RvX18uIEZpcmVmb3ggNC0yOSBsYWNrcyBzdXBwb3J0IGZvciBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgXG4gKiAoU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzgpLiBJRSAxMCBsYWNrcyBzdXBwb3J0XG4gKiBmb3IgX19wcm90b19fIGFuZCBoYXMgYSBidWdneSB0eXBlZCBhcnJheSBpbXBsZW1lbnRhdGlvbi5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbmlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgY29uc29sZS5lcnJvcihcbiAgICAnVGhpcyBicm93c2VyIGxhY2tzIHR5cGVkIGFycmF5IChVaW50OEFycmF5KSBzdXBwb3J0IHdoaWNoIGlzIHJlcXVpcmVkIGJ5ICcgK1xuICAgICdgYnVmZmVyYCB2NS54LiBVc2UgYGJ1ZmZlcmAgdjQueCBpZiB5b3UgcmVxdWlyZSBvbGQgYnJvd3NlciBzdXBwb3J0LidcbiAgKVxufVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIC8vIENhbiB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZD9cbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSlcbiAgICB2YXIgcHJvdG8gPSB7IGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfSB9XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHByb3RvLCBVaW50OEFycmF5LnByb3RvdHlwZSlcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoYXJyLCBwcm90bylcbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MlxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlci5wcm90b3R5cGUsICdwYXJlbnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKHRoaXMpKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgcmV0dXJuIHRoaXMuYnVmZmVyXG4gIH1cbn0pXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIucHJvdG90eXBlLCAnb2Zmc2V0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0aGlzKSkgcmV0dXJuIHVuZGVmaW5lZFxuICAgIHJldHVybiB0aGlzLmJ5dGVPZmZzZXRcbiAgfVxufSlcblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKGxlbmd0aCA+IEtfTUFYX0xFTkdUSCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgXCInICsgbGVuZ3RoICsgJ1wiIGlzIGludmFsaWQgZm9yIG9wdGlvbiBcInNpemVcIicpXG4gIH1cbiAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2VcbiAgdmFyIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGJ1ZiwgQnVmZmVyLnByb3RvdHlwZSlcbiAgcmV0dXJuIGJ1ZlxufVxuXG4vKipcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgaGF2ZSB0aGVpclxuICogcHJvdG90eXBlIGNoYW5nZWQgdG8gYEJ1ZmZlci5wcm90b3R5cGVgLiBGdXJ0aGVybW9yZSwgYEJ1ZmZlcmAgaXMgYSBzdWJjbGFzcyBvZlxuICogYFVpbnQ4QXJyYXlgLCBzbyB0aGUgcmV0dXJuZWQgaW5zdGFuY2VzIHdpbGwgaGF2ZSBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgbWV0aG9kc1xuICogYW5kIHRoZSBgVWludDhBcnJheWAgbWV0aG9kcy4gU3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXRcbiAqIHJldHVybnMgYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogVGhlIGBVaW50OEFycmF5YCBwcm90b3R5cGUgcmVtYWlucyB1bm1vZGlmaWVkLlxuICovXG5cbmZ1bmN0aW9uIEJ1ZmZlciAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmdPck9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdUaGUgXCJzdHJpbmdcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgc3RyaW5nLiBSZWNlaXZlZCB0eXBlIG51bWJlcidcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKGFyZylcbiAgfVxuICByZXR1cm4gZnJvbShhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbmZ1bmN0aW9uIGZyb20gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUxpa2UodmFsdWUpXG4gIH1cblxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgJyArXG4gICAgICAnb3IgQXJyYXktbGlrZSBPYmplY3QuIFJlY2VpdmVkIHR5cGUgJyArICh0eXBlb2YgdmFsdWUpXG4gICAgKVxuICB9XG5cbiAgaWYgKGlzSW5zdGFuY2UodmFsdWUsIEFycmF5QnVmZmVyKSB8fFxuICAgICAgKHZhbHVlICYmIGlzSW5zdGFuY2UodmFsdWUuYnVmZmVyLCBBcnJheUJ1ZmZlcikpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIChpc0luc3RhbmNlKHZhbHVlLCBTaGFyZWRBcnJheUJ1ZmZlcikgfHxcbiAgICAgICh2YWx1ZSAmJiBpc0luc3RhbmNlKHZhbHVlLmJ1ZmZlciwgU2hhcmVkQXJyYXlCdWZmZXIpKSkpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIFwidmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBvZiB0eXBlIG51bWJlci4gUmVjZWl2ZWQgdHlwZSBudW1iZXInXG4gICAgKVxuICB9XG5cbiAgdmFyIHZhbHVlT2YgPSB2YWx1ZS52YWx1ZU9mICYmIHZhbHVlLnZhbHVlT2YoKVxuICBpZiAodmFsdWVPZiAhPSBudWxsICYmIHZhbHVlT2YgIT09IHZhbHVlKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHZhbHVlT2YsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIHZhciBiID0gZnJvbU9iamVjdCh2YWx1ZSlcbiAgaWYgKGIpIHJldHVybiBiXG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1ByaW1pdGl2ZSAhPSBudWxsICYmXG4gICAgICB0eXBlb2YgdmFsdWVbU3ltYm9sLnRvUHJpbWl0aXZlXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbShcbiAgICAgIHZhbHVlW1N5bWJvbC50b1ByaW1pdGl2ZV0oJ3N0cmluZycpLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGhcbiAgICApXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICdUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCAnICtcbiAgICAnb3IgQXJyYXktbGlrZSBPYmplY3QuIFJlY2VpdmVkIHR5cGUgJyArICh0eXBlb2YgdmFsdWUpXG4gIClcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbSh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG4vLyBOb3RlOiBDaGFuZ2UgcHJvdG90eXBlICphZnRlciogQnVmZmVyLmZyb20gaXMgZGVmaW5lZCB0byB3b3JrYXJvdW5kIENocm9tZSBidWc6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzE0OFxuT2JqZWN0LnNldFByb3RvdHlwZU9mKEJ1ZmZlci5wcm90b3R5cGUsIFVpbnQ4QXJyYXkucHJvdG90eXBlKVxuT2JqZWN0LnNldFByb3RvdHlwZU9mKEJ1ZmZlciwgVWludDhBcnJheSlcblxuZnVuY3Rpb24gYXNzZXJ0U2l6ZSAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIG51bWJlcicpXG4gIH0gZWxzZSBpZiAoc2l6ZSA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIFwiJyArIHNpemUgKyAnXCIgaXMgaW52YWxpZCBmb3Igb3B0aW9uIFwic2l6ZVwiJylcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxvYyAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcihzaXplKVxuICB9XG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPbmx5IHBheSBhdHRlbnRpb24gdG8gZW5jb2RpbmcgaWYgaXQncyBhIHN0cmluZy4gVGhpc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWxseSBzZW5kaW5nIGluIGEgbnVtYmVyIHRoYXQgd291bGRcbiAgICAvLyBiZSBpbnRlcnByZXR0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcihzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcihzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2Moc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlIChzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcihzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB2YXIgYnVmID0gY3JlYXRlQnVmZmVyKGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gYnVmLndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICBidWYgPSBidWYuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlIChhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIHZhciBidWYgPSBjcmVhdGVCdWZmZXIobGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgYnVmW2ldID0gYXJyYXlbaV0gJiAyNTVcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJvZmZzZXRcIiBpcyBvdXRzaWRlIG9mIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcImxlbmd0aFwiIGlzIG91dHNpZGUgb2YgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICB2YXIgYnVmXG4gIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBidWYgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0KVxuICB9IGVsc2Uge1xuICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZVxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoYnVmLCBCdWZmZXIucHJvdG90eXBlKVxuXG4gIHJldHVybiBidWZcbn1cblxuZnVuY3Rpb24gZnJvbU9iamVjdCAob2JqKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkge1xuICAgIHZhciBsZW4gPSBjaGVja2VkKG9iai5sZW5ndGgpIHwgMFxuICAgIHZhciBidWYgPSBjcmVhdGVCdWZmZXIobGVuKVxuXG4gICAgaWYgKGJ1Zi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBidWZcbiAgICB9XG5cbiAgICBvYmouY29weShidWYsIDAsIDAsIGxlbilcbiAgICByZXR1cm4gYnVmXG4gIH1cblxuICBpZiAob2JqLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBudW1iZXJJc05hTihvYmoubGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcigwKVxuICAgIH1cbiAgICByZXR1cm4gZnJvbUFycmF5TGlrZShvYmopXG4gIH1cblxuICBpZiAob2JqLnR5cGUgPT09ICdCdWZmZXInICYmIEFycmF5LmlzQXJyYXkob2JqLmRhdGEpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUxpa2Uob2JqLmRhdGEpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IEtfTUFYX0xFTkdUSGAgaGVyZSBiZWNhdXNlIHRoYXQgZmFpbHMgd2hlblxuICAvLyBsZW5ndGggaXMgTmFOICh3aGljaCBpcyBvdGhlcndpc2UgY29lcmNlZCB0byB6ZXJvLilcbiAgaWYgKGxlbmd0aCA+PSBLX01BWF9MRU5HVEgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2l6ZTogMHgnICsgS19NQVhfTEVOR1RILnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuICB9XG4gIHJldHVybiBsZW5ndGggfCAwXG59XG5cbmZ1bmN0aW9uIFNsb3dCdWZmZXIgKGxlbmd0aCkge1xuICBpZiAoK2xlbmd0aCAhPSBsZW5ndGgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcbiAgICBsZW5ndGggPSAwXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5hbGxvYygrbGVuZ3RoKVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlciAoYikge1xuICByZXR1cm4gYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyID09PSB0cnVlICYmXG4gICAgYiAhPT0gQnVmZmVyLnByb3RvdHlwZSAvLyBzbyBCdWZmZXIuaXNCdWZmZXIoQnVmZmVyLnByb3RvdHlwZSkgd2lsbCBiZSBmYWxzZVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgaWYgKGlzSW5zdGFuY2UoYSwgVWludDhBcnJheSkpIGEgPSBCdWZmZXIuZnJvbShhLCBhLm9mZnNldCwgYS5ieXRlTGVuZ3RoKVxuICBpZiAoaXNJbnN0YW5jZShiLCBVaW50OEFycmF5KSkgYiA9IEJ1ZmZlci5mcm9tKGIsIGIub2Zmc2V0LCBiLmJ5dGVMZW5ndGgpXG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBcImJ1ZjFcIiwgXCJidWYyXCIgYXJndW1lbnRzIG11c3QgYmUgb25lIG9mIHR5cGUgQnVmZmVyIG9yIFVpbnQ4QXJyYXknXG4gICAgKVxuICB9XG5cbiAgaWYgKGEgPT09IGIpIHJldHVybiAwXG5cbiAgdmFyIHggPSBhLmxlbmd0aFxuICB2YXIgeSA9IGIubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV1cbiAgICAgIHkgPSBiW2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiBpc0VuY29kaW5nIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdsYXRpbjEnOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdCAobGlzdCwgbGVuZ3RoKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShsaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gIH1cblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApXG4gIH1cblxuICB2YXIgaVxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWZmZXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUobGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBidWYgPSBsaXN0W2ldXG4gICAgaWYgKGlzSW5zdGFuY2UoYnVmLCBVaW50OEFycmF5KSkge1xuICAgICAgYnVmID0gQnVmZmVyLmZyb20oYnVmKVxuICAgIH1cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBpc0luc3RhbmNlKHN0cmluZywgQXJyYXlCdWZmZXIpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5ieXRlTGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgXCJzdHJpbmdcIiBhcmd1bWVudCBtdXN0IGJlIG9uZSBvZiB0eXBlIHN0cmluZywgQnVmZmVyLCBvciBBcnJheUJ1ZmZlci4gJyArXG4gICAgICAnUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIHN0cmluZ1xuICAgIClcbiAgfVxuXG4gIHZhciBsZW4gPSBzdHJpbmcubGVuZ3RoXG4gIHZhciBtdXN0TWF0Y2ggPSAoYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdID09PSB0cnVlKVxuICBpZiAoIW11c3RNYXRjaCAmJiBsZW4gPT09IDApIHJldHVybiAwXG5cbiAgLy8gVXNlIGEgZm9yIGxvb3AgdG8gYXZvaWQgcmVjdXJzaW9uXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHtcbiAgICAgICAgICByZXR1cm4gbXVzdE1hdGNoID8gLTEgOiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICB9XG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcblxuZnVuY3Rpb24gc2xvd1RvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIC8vIE5vIG5lZWQgdG8gdmVyaWZ5IHRoYXQgXCJ0aGlzLmxlbmd0aCA8PSBNQVhfVUlOVDMyXCIgc2luY2UgaXQncyBhIHJlYWQtb25seVxuICAvLyBwcm9wZXJ0eSBvZiBhIHR5cGVkIGFycmF5LlxuXG4gIC8vIFRoaXMgYmVoYXZlcyBuZWl0aGVyIGxpa2UgU3RyaW5nIG5vciBVaW50OEFycmF5IGluIHRoYXQgd2Ugc2V0IHN0YXJ0L2VuZFxuICAvLyB0byB0aGVpciB1cHBlci9sb3dlciBib3VuZHMgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBvdXQgb2YgcmFuZ2UuXG4gIC8vIHVuZGVmaW5lZCBpcyBoYW5kbGVkIHNwZWNpYWxseSBhcyBwZXIgRUNNQS0yNjIgNnRoIEVkaXRpb24sXG4gIC8vIFNlY3Rpb24gMTMuMy4zLjcgUnVudGltZSBTZW1hbnRpY3M6IEtleWVkQmluZGluZ0luaXRpYWxpemF0aW9uLlxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCB8fCBzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICAvLyBSZXR1cm4gZWFybHkgaWYgc3RhcnQgPiB0aGlzLmxlbmd0aC4gRG9uZSBoZXJlIHRvIHByZXZlbnQgcG90ZW50aWFsIHVpbnQzMlxuICAvLyBjb2VyY2lvbiBmYWlsIGJlbG93LlxuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChlbmQgPD0gMCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gRm9yY2UgY29lcnNpb24gdG8gdWludDMyLiBUaGlzIHdpbGwgYWxzbyBjb2VyY2UgZmFsc2V5L05hTiB2YWx1ZXMgdG8gMC5cbiAgZW5kID4+Pj0gMFxuICBzdGFydCA+Pj49IDBcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhpcyBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIChhbmQgdGhlIGBpcy1idWZmZXJgIG5wbSBwYWNrYWdlKVxuLy8gdG8gZGV0ZWN0IGEgQnVmZmVyIGluc3RhbmNlLiBJdCdzIG5vdCBwb3NzaWJsZSB0byB1c2UgYGluc3RhbmNlb2YgQnVmZmVyYFxuLy8gcmVsaWFibHkgaW4gYSBicm93c2VyaWZ5IGNvbnRleHQgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBtdWx0aXBsZSBkaWZmZXJlbnRcbi8vIGNvcGllcyBvZiB0aGUgJ2J1ZmZlcicgcGFja2FnZSBpbiB1c2UuIFRoaXMgbWV0aG9kIHdvcmtzIGV2ZW4gZm9yIEJ1ZmZlclxuLy8gaW5zdGFuY2VzIHRoYXQgd2VyZSBjcmVhdGVkIGZyb20gYW5vdGhlciBjb3B5IG9mIHRoZSBgYnVmZmVyYCBwYWNrYWdlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9pc3N1ZXMvMTU0XG5CdWZmZXIucHJvdG90eXBlLl9pc0J1ZmZlciA9IHRydWVcblxuZnVuY3Rpb24gc3dhcCAoYiwgbiwgbSkge1xuICB2YXIgaSA9IGJbbl1cbiAgYltuXSA9IGJbbV1cbiAgYlttXSA9IGlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMTYgPSBmdW5jdGlvbiBzd2FwMTYgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDIgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDE2LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAxKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDMyID0gZnVuY3Rpb24gc3dhcDMyICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA0ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAzMi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgMilcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXA2NCA9IGZ1bmN0aW9uIHN3YXA2NCAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgOCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNjQtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gOCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDcpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDYpXG4gICAgc3dhcCh0aGlzLCBpICsgMiwgaSArIDUpXG4gICAgc3dhcCh0aGlzLCBpICsgMywgaSArIDQpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvTG9jYWxlU3RyaW5nID0gQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZ1xuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLnJlcGxhY2UoLyguezJ9KS9nLCAnJDEgJykudHJpbSgpXG4gIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cbmlmIChjdXN0b21JbnNwZWN0U3ltYm9sKSB7XG4gIEJ1ZmZlci5wcm90b3R5cGVbY3VzdG9tSW5zcGVjdFN5bWJvbF0gPSBCdWZmZXIucHJvdG90eXBlLmluc3BlY3Rcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKGlzSW5zdGFuY2UodGFyZ2V0LCBVaW50OEFycmF5KSkge1xuICAgIHRhcmdldCA9IEJ1ZmZlci5mcm9tKHRhcmdldCwgdGFyZ2V0Lm9mZnNldCwgdGFyZ2V0LmJ5dGVMZW5ndGgpXG4gIH1cbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIFwidGFyZ2V0XCIgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBCdWZmZXIgb3IgVWludDhBcnJheS4gJyArXG4gICAgICAnUmVjZWl2ZWQgdHlwZSAnICsgKHR5cGVvZiB0YXJnZXQpXG4gICAgKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAobnVtYmVySXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmICh0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbdmFsXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKG51bWJlcklzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBsYXRpbjFXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgICBpZiAoaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgbGVuZ3RoID0gbGVuZ3RoID4+PiAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQnVmZmVyLndyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldFssIGxlbmd0aF0pIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQnXG4gICAgKVxuICB9XG5cbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCB8fCBsZW5ndGggPiByZW1haW5pbmcpIGxlbmd0aCA9IHJlbWFpbmluZ1xuXG4gIGlmICgoc3RyaW5nLmxlbmd0aCA+IDAgJiYgKGxlbmd0aCA8IDAgfHwgb2Zmc2V0IDwgMCkpIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgLy8gV2FybmluZzogbWF4TGVuZ3RoIG5vdCB0YWtlbiBpbnRvIGFjY291bnQgaW4gYmFzZTY0V3JpdGVcbiAgICAgICAgcmV0dXJuIGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1Y3MyV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuICB2YXIgcmVzID0gW11cblxuICB2YXIgaSA9IHN0YXJ0XG4gIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgdmFyIGZpcnN0Qnl0ZSA9IGJ1ZltpXVxuICAgIHZhciBjb2RlUG9pbnQgPSBudWxsXG4gICAgdmFyIGJ5dGVzUGVyU2VxdWVuY2UgPSAoZmlyc3RCeXRlID4gMHhFRikgPyA0XG4gICAgICA6IChmaXJzdEJ5dGUgPiAweERGKSA/IDNcbiAgICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICAgICAgOiAxXG5cbiAgICBpZiAoaSArIGJ5dGVzUGVyU2VxdWVuY2UgPD0gZW5kKSB7XG4gICAgICB2YXIgc2Vjb25kQnl0ZSwgdGhpcmRCeXRlLCBmb3VydGhCeXRlLCB0ZW1wQ29kZVBvaW50XG5cbiAgICAgIHN3aXRjaCAoYnl0ZXNQZXJTZXF1ZW5jZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKGZpcnN0Qnl0ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IGZpcnN0Qnl0ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweDFGKSA8PCAweDYgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0YpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHhDIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAodGhpcmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3RkYgJiYgKHRlbXBDb2RlUG9pbnQgPCAweEQ4MDAgfHwgdGVtcENvZGVQb2ludCA+IDB4REZGRikpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgZm91cnRoQnl0ZSA9IGJ1ZltpICsgM11cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKGZvdXJ0aEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4MTIgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4QyB8ICh0aGlyZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAoZm91cnRoQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4RkZGRiAmJiB0ZW1wQ29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50ID09PSBudWxsKSB7XG4gICAgICAvLyB3ZSBkaWQgbm90IGdlbmVyYXRlIGEgdmFsaWQgY29kZVBvaW50IHNvIGluc2VydCBhXG4gICAgICAvLyByZXBsYWNlbWVudCBjaGFyIChVK0ZGRkQpIGFuZCBhZHZhbmNlIG9ubHkgMSBieXRlXG4gICAgICBjb2RlUG9pbnQgPSAweEZGRkRcbiAgICAgIGJ5dGVzUGVyU2VxdWVuY2UgPSAxXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPiAweEZGRkYpIHtcbiAgICAgIC8vIGVuY29kZSB0byB1dGYxNiAoc3Vycm9nYXRlIHBhaXIgZGFuY2UpXG4gICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgcmVzLnB1c2goY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKVxuICAgICAgY29kZVBvaW50ID0gMHhEQzAwIHwgY29kZVBvaW50ICYgMHgzRkZcbiAgICB9XG5cbiAgICByZXMucHVzaChjb2RlUG9pbnQpXG4gICAgaSArPSBieXRlc1BlclNlcXVlbmNlXG4gIH1cblxuICByZXR1cm4gZGVjb2RlQ29kZVBvaW50c0FycmF5KHJlcylcbn1cblxuLy8gQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjI3NDcyNzIvNjgwNzQyLCB0aGUgYnJvd3NlciB3aXRoXG4vLyB0aGUgbG93ZXN0IGxpbWl0IGlzIENocm9tZSwgd2l0aCAweDEwMDAwIGFyZ3MuXG4vLyBXZSBnbyAxIG1hZ25pdHVkZSBsZXNzLCBmb3Igc2FmZXR5XG52YXIgTUFYX0FSR1VNRU5UU19MRU5HVEggPSAweDEwMDBcblxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50c0FycmF5IChjb2RlUG9pbnRzKSB7XG4gIHZhciBsZW4gPSBjb2RlUG9pbnRzLmxlbmd0aFxuICBpZiAobGVuIDw9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlUG9pbnRzKSAvLyBhdm9pZCBleHRyYSBzbGljZSgpXG4gIH1cblxuICAvLyBEZWNvZGUgaW4gY2h1bmtzIHRvIGF2b2lkIFwiY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCIuXG4gIHZhciByZXMgPSAnJ1xuICB2YXIgaSA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShcbiAgICAgIFN0cmluZyxcbiAgICAgIGNvZGVQb2ludHMuc2xpY2UoaSwgaSArPSBNQVhfQVJHVU1FTlRTX0xFTkdUSClcbiAgICApXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSAmIDB4N0YpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBsYXRpbjFTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgb3V0ICs9IGhleFNsaWNlTG9va3VwVGFibGVbYnVmW2ldXVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyAoYnl0ZXNbaSArIDFdICogMjU2KSlcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICB2YXIgbmV3QnVmID0gdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKVxuICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZVxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YobmV3QnVmLCBCdWZmZXIucHJvdG90eXBlKVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50QkUgPSBmdW5jdGlvbiByZWFkVUludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgdmFyIG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRMRSA9IGZ1bmN0aW9uIHJlYWRJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gcmVhZEludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiByZWFkRG91YmxlTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludEJFID0gZnVuY3Rpb24gd3JpdGVVSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgKDggKiBieXRlTGVuZ3RoKSAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsICg4ICogYnl0ZUxlbmd0aCkgLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpICsgMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiB3cml0ZUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gY29weSAodGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBzaG91bGQgYmUgYSBCdWZmZXInKVxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0U3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aCkgdGFyZ2V0U3RhcnQgPSB0YXJnZXQubGVuZ3RoXG4gIGlmICghdGFyZ2V0U3RhcnQpIHRhcmdldFN0YXJ0ID0gMFxuICBpZiAoZW5kID4gMCAmJiBlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVybiAwXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKHRhcmdldFN0YXJ0IDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgfVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuY29weVdpdGhpbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIFVzZSBidWlsdC1pbiB3aGVuIGF2YWlsYWJsZSwgbWlzc2luZyBmcm9tIElFMTFcbiAgICB0aGlzLmNvcHlXaXRoaW4odGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpXG4gIH0gZWxzZSBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHN0YXJ0IDwgdGFyZ2V0U3RhcnQgJiYgdGFyZ2V0U3RhcnQgPCBlbmQpIHtcbiAgICAvLyBkZXNjZW5kaW5nIGNvcHkgZnJvbSBlbmRcbiAgICBmb3IgKHZhciBpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnRcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmICgoZW5jb2RpbmcgPT09ICd1dGY4JyAmJiBjb2RlIDwgMTI4KSB8fFxuICAgICAgICAgIGVuY29kaW5nID09PSAnbGF0aW4xJykge1xuICAgICAgICAvLyBGYXN0IHBhdGg6IElmIGB2YWxgIGZpdHMgaW50byBhIHNpbmdsZSBieXRlLCB1c2UgdGhhdCBudW1lcmljIHZhbHVlLlxuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgdmFsID0gTnVtYmVyKHZhbClcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgdmFsdWUgXCInICsgdmFsICtcbiAgICAgICAgJ1wiIGlzIGludmFsaWQgZm9yIGFyZ3VtZW50IFwidmFsdWVcIicpXG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teKy8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgdGFrZXMgZXF1YWwgc2lnbnMgYXMgZW5kIG9mIHRoZSBCYXNlNjQgZW5jb2RpbmdcbiAgc3RyID0gc3RyLnNwbGl0KCc9JylbMF1cbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0ci50cmltKCkucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eVxuICB2YXIgY29kZVBvaW50XG4gIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIHZhciBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICB2YXIgYnl0ZXMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuXG4gICAgLy8gaXMgc3Vycm9nYXRlIGNvbXBvbmVudFxuICAgIGlmIChjb2RlUG9pbnQgPiAweEQ3RkYgJiYgY29kZVBvaW50IDwgMHhFMDAwKSB7XG4gICAgICAvLyBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCFsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIC8vIG5vIGxlYWQgeWV0XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdW5wYWlyZWQgbGVhZFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZCBsZWFkXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyIGxlYWRzIGluIGEgcm93XG4gICAgICBpZiAoY29kZVBvaW50IDwgMHhEQzAwKSB7XG4gICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjb2RlUG9pbnQgPSAobGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCkgKyAweDEwMDAwXG4gICAgfSBlbHNlIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAvLyB2YWxpZCBibXAgY2hhciwgYnV0IGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICB9XG5cbiAgICBsZWFkU3Vycm9nYXRlID0gbnVsbFxuXG4gICAgLy8gZW5jb2RlIHV0ZjhcbiAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4ODAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgfCAweEMwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4MTIgfCAweEYwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuXG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoYmFzZTY0Y2xlYW4oc3RyKSlcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuLy8gQXJyYXlCdWZmZXIgb3IgVWludDhBcnJheSBvYmplY3RzIGZyb20gb3RoZXIgY29udGV4dHMgKGkuZS4gaWZyYW1lcykgZG8gbm90IHBhc3Ncbi8vIHRoZSBgaW5zdGFuY2VvZmAgY2hlY2sgYnV0IHRoZXkgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgb2YgdGhhdCB0eXBlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9pc3N1ZXMvMTY2XG5mdW5jdGlvbiBpc0luc3RhbmNlIChvYmosIHR5cGUpIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIHR5cGUgfHxcbiAgICAob2JqICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yLm5hbWUgIT0gbnVsbCAmJlxuICAgICAgb2JqLmNvbnN0cnVjdG9yLm5hbWUgPT09IHR5cGUubmFtZSlcbn1cbmZ1bmN0aW9uIG51bWJlcklzTmFOIChvYmopIHtcbiAgLy8gRm9yIElFMTEgc3VwcG9ydFxuICByZXR1cm4gb2JqICE9PSBvYmogLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbn1cblxuLy8gQ3JlYXRlIGxvb2t1cCB0YWJsZSBmb3IgYHRvU3RyaW5nKCdoZXgnKWBcbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvaXNzdWVzLzIxOVxudmFyIGhleFNsaWNlTG9va3VwVGFibGUgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgYWxwaGFiZXQgPSAnMDEyMzQ1Njc4OWFiY2RlZidcbiAgdmFyIHRhYmxlID0gbmV3IEFycmF5KDI1NilcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgdmFyIGkxNiA9IGkgKiAxNlxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgdGFibGVbaTE2ICsgal0gPSBhbHBoYWJldFtpXSArIGFscGhhYmV0W2pdXG4gICAgfVxuICB9XG4gIHJldHVybiB0YWJsZVxufSkoKVxuIl19