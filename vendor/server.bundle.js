var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// apps/api/src/server.ts
import express from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import pino2 from "pino";

// packages/engine/dist/index.js
import { chromium } from "playwright";

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message == null ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: (params == null ? void 0 : params.async) ?? false,
        contextualErrorMap: params == null ? void 0 : params.errorMap
      },
      path: (params == null ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    var _a, _b;
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if ((_b = (_a = err == null ? void 0 : err.message) == null ? void 0 : _a.toLowerCase()) == null ? void 0 : _b.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params == null ? void 0 : params.errorMap,
        async: true
      },
      path: (params == null ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && (decoded == null ? void 0 : decoded.typ) !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options == null ? void 0 : options.precision) === "undefined" ? null : options == null ? void 0 : options.precision,
      offset: (options == null ? void 0 : options.offset) ?? false,
      local: (options == null ? void 0 : options.local) ?? false,
      ...errorUtil.errToObj(options == null ? void 0 : options.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof (options == null ? void 0 : options.precision) === "undefined" ? null : options == null ? void 0 : options.precision,
      ...errorUtil.errToObj(options == null ? void 0 : options.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options == null ? void 0 : options.position,
      ...errorUtil.errToObj(options == null ? void 0 : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (params == null ? void 0 : params.coerce) ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params == null ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (params == null ? void 0 : params.coerce) ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params == null ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: (params == null ? void 0 : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a, _b;
          const defaultError = ((_b = (_a = this._def).errorMap) == null ? void 0 : _b.call(_a, issue, ctx).message) ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = /* @__PURE__ */ Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: ((arg) => ZodString.create({ ...arg, coerce: true })),
  number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
  boolean: ((arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  })),
  bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
  date: ((arg) => ZodDate.create({ ...arg, coerce: true }))
};
var NEVER = INVALID;

// packages/core/dist/index.js
function ok(value) {
  return { ok: true, value };
}
var auditCounter = 0;
function createAuditId() {
  auditCounter += 1;
  return `audit-${Date.now()}-${auditCounter}`;
}
function createFindingId(module, type, target) {
  const slug = `${module}-${type}-${target}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `finding-${slug}-${Date.now()}`;
}
var auditConfigSchema = external_exports.object({
  url: external_exports.string().url(),
  flow: external_exports.any().optional(),
  auth: external_exports.object({
    cookies: external_exports.array(external_exports.object({ name: external_exports.string(), value: external_exports.string(), domain: external_exports.string() })),
    headers: external_exports.record(external_exports.string()).optional()
  }).optional(),
  budget: external_exports.object({
    lcp: external_exports.number().optional(),
    inp: external_exports.number().optional(),
    cls: external_exports.number().optional(),
    bundle: external_exports.number().optional()
  }).optional(),
  maxRoutes: external_exports.number().default(10),
  output: external_exports.object({ dir: external_exports.string() }).default({ dir: "./vibe-out" }),
  modules: external_exports.record(external_exports.string(), external_exports.object({ enabled: external_exports.boolean().optional(), options: external_exports.unknown().optional() })).optional(),
  network: external_exports.enum(["fast", "slow_4g", "3g"]).default("fast"),
  cpu: external_exports.number().default(1)
});

// packages/evidence/dist/index.js
import { mkdir, writeFile, readFile } from "fs/promises";
import { join } from "path";
var EvidenceStore = class {
  rootDir;
  entries = [];
  totalSize = 0;
  constructor(outputDir, auditId) {
    this.rootDir = join(outputDir, auditId);
  }
  async init() {
    await mkdir(this.rootDir, { recursive: true });
    await mkdir(join(this.rootDir, "har"), { recursive: true });
    await mkdir(join(this.rootDir, "traces"), { recursive: true });
    await mkdir(join(this.rootDir, "screenshots"), { recursive: true });
    await mkdir(join(this.rootDir, "heap"), { recursive: true });
    await mkdir(join(this.rootDir, "console"), { recursive: true });
    await mkdir(join(this.rootDir, "mutations"), { recursive: true });
  }
  addEntry(entry) {
    this.entries.push(entry);
    this.totalSize += entry.size;
    return entry;
  }
  async appendHarEntry(entry) {
    const requestId = entry.requestId;
    const method = entry.method;
    const url = entry.url;
    const filename = `${requestId}.json`;
    const filepath = join(this.rootDir, "har", filename);
    const content = JSON.stringify(entry, null, 2);
    await writeFile(filepath, content, "utf8");
    const manifestEntry = this.addEntry({
      kind: "har",
      path: filepath,
      size: Buffer.byteLength(content),
      route: url,
      timestamp: Date.now()
    });
    return {
      kind: "har_entry",
      path: manifestEntry.path,
      description: `HAR entry for ${method} ${url}`
    };
  }
  async appendTraceEvents(events) {
    const filename = `trace-${Date.now()}.json`;
    const filepath = join(this.rootDir, "traces", filename);
    const content = JSON.stringify({ traceEvents: events }, null, 2);
    await writeFile(filepath, content, "utf8");
    const manifestEntry = this.addEntry({
      kind: "trace",
      path: filepath,
      size: Buffer.byteLength(content),
      timestamp: Date.now()
    });
    return {
      kind: "cdp_trace",
      path: manifestEntry.path,
      description: `CDP trace with ${events.length} events`
    };
  }
  async saveScreenshot(name, png, meta) {
    const filename = `${name}.png`;
    const filepath = join(this.rootDir, "screenshots", filename);
    await writeFile(filepath, png);
    const manifestEntry = this.addEntry({
      kind: "screenshot",
      path: filepath,
      size: png.byteLength,
      ...(meta == null ? void 0 : meta.route) ? { route: meta.route } : {},
      timestamp: (meta == null ? void 0 : meta.timestamp) ?? Date.now()
    });
    return {
      kind: "screenshot",
      path: manifestEntry.path,
      ...(meta == null ? void 0 : meta.selector) ? { selector: meta.selector } : {},
      description: `Screenshot: ${name}`
    };
  }
  async saveHeapSnapshot(name, snapshotPath) {
    const filename = `${name}.heapsnapshot`;
    const destPath = join(this.rootDir, "heap", filename);
    const content = await readFile(snapshotPath);
    await writeFile(destPath, content);
    const manifestEntry = this.addEntry({
      kind: "heap",
      path: destPath,
      size: Buffer.byteLength(content),
      timestamp: Date.now()
    });
    return {
      kind: "heap_snapshot",
      path: manifestEntry.path,
      description: `Heap snapshot: ${name}`
    };
  }
  async appendConsoleLog(msg) {
    const timestamp = msg.timestamp;
    const url = msg.url;
    const filename = `console-${timestamp}.json`;
    const filepath = join(this.rootDir, "console", filename);
    const content = JSON.stringify(msg, null, 2);
    await writeFile(filepath, content, "utf8");
    const manifestEntry = this.addEntry({
      kind: "console",
      path: filepath,
      size: Buffer.byteLength(content),
      ...url ? { route: url } : {},
      timestamp
    });
    return {
      kind: "console_log",
      path: manifestEntry.path,
      description: `Console ${msg.type}: ${msg.text.slice(0, 100)}`
    };
  }
  async finalize() {
    const manifest = { entries: this.entries, totalSize: this.totalSize };
    await writeFile(join(this.rootDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
    return { rootDir: this.rootDir, manifest };
  }
};

// packages/injector/dist/index.js
import { readFileSync } from "fs";
import { join as join2, dirname } from "path";
import { fileURLToPath } from "url";
var __dirname = dirname(fileURLToPath(import.meta.url));
function buildInjectorScript() {
  return readFileSync(join2(__dirname, "perf-observer.js"), "utf8");
}
function attachEventCollector(page, onEvent) {
  const messageHandler = (msg) => {
    if (msg.type() !== "info") return;
    try {
      const payload = JSON.parse(msg.text());
      if (payload && payload.__vibe) {
        const { __vibe, ...rest } = payload;
        onEvent(rest);
      }
    } catch {
    }
  };
  page.on("console", messageHandler);
  return () => page.off("console", messageHandler);
}

// packages/reporter/dist/index.js
import { writeFile as writeFile2 } from "fs/promises";
import { join as join3 } from "path";

// packages/correlator/dist/index.js
function getLowestConfidence(findings) {
  const confidenceOrder = { high: 0, medium: 1, low: 2 };
  let lowest = "high";
  let lowestValue = 0;
  for (const finding of findings) {
    const value = confidenceOrder[finding.confidence] ?? 0;
    if (value > lowestValue) {
      lowestValue = value;
      lowest = finding.confidence;
    }
  }
  return lowest;
}
function sumScoreImpact(findings) {
  return findings.reduce((sum, f) => sum + f.scoreImpact, 0);
}
function mergeMetrics(findings) {
  const merged = {};
  for (const finding of findings) {
    for (const [key, value] of Object.entries(finding.metrics)) {
      merged[key] = value;
    }
  }
  return merged;
}
function flattenEvidence(findings) {
  const evidence = [];
  for (const finding of findings) {
    evidence.push(...finding.evidence);
  }
  return evidence;
}
var rules = [
  {
    id: "list-virtualization",
    match(findings) {
      const unvirtualized = findings.find((f) => f.type === "unvirtualized_list");
      if (unvirtualized) {
        return { matchedFindings: [unvirtualized] };
      }
      const excessiveDom = findings.find((f) => f.type === "excessive_dom_size");
      const wastedMutation = findings.find((f) => f.type === "wasted_mutation");
      if (excessiveDom && wastedMutation) {
        return { matchedFindings: [excessiveDom, wastedMutation] };
      }
      return null;
    },
    synthesize(match, allFindings) {
      var _a;
      const badInp = allFindings.find((f) => f.type === "bad_inp");
      const contributing = match.matchedFindings.map((f) => f.id);
      const confidence = getLowestConfidence(match.matchedFindings);
      const severity = badInp ? "critical" : "high";
      return {
        id: `root_cause_list-virtualization_${((_a = match.matchedFindings[0]) == null ? void 0 : _a.id) || "unknown"}`,
        module: "correlator",
        type: "unvirtualized_list",
        category: "direct_impact",
        severity,
        confidence,
        title: "List virtualization gap \u2014 rendering full list without recycling",
        description: "A list or scrollable container renders all items without recycling DOM nodes, causing excessive DOM size and costly mutations. This is reinforced by input latency issues.",
        observedIn: "Scrollable list rendering",
        evidence: flattenEvidence(match.matchedFindings),
        metrics: mergeMetrics(match.matchedFindings),
        recommendation: "Implement windowing/virtualization using libraries like react-window or react-virtualized. Render only visible items in the viewport.",
        scoreImpact: sumScoreImpact(match.matchedFindings),
        isRootCause: true,
        contributingFindings: contributing,
        consolidationConfidence: confidence
      };
    }
  },
  {
    id: "timer-leak",
    match(findings) {
      const leakedInterval = findings.find((f) => f.type === "leaked_interval");
      if (!leakedInterval) return null;
      const leakedListener = findings.find((f) => f.type === "leaked_listener");
      const heapLeak = findings.find((f) => f.type === "heap_leak");
      if (leakedListener || heapLeak) {
        const matching = [leakedInterval];
        if (leakedListener) matching.push(leakedListener);
        if (heapLeak) matching.push(heapLeak);
        return { matchedFindings: matching };
      }
      return null;
    },
    synthesize(match) {
      var _a;
      const confidence = getLowestConfidence(match.matchedFindings);
      return {
        id: `root_cause_timer-leak_${((_a = match.matchedFindings[0]) == null ? void 0 : _a.id) || "unknown"}`,
        module: "correlator",
        type: "leaked_interval",
        category: "direct_impact",
        severity: "high",
        confidence,
        title: "Timer/listener leak \u2014 likely missing cleanup in a custom hook",
        description: "An interval or listener is created without proper cleanup, either missing from useEffect dependency arrays or not properly unsubscribed. This causes memory growth over time.",
        observedIn: match.matchedFindings.map((f) => f.observedIn).join(", "),
        evidence: flattenEvidence(match.matchedFindings),
        metrics: mergeMetrics(match.matchedFindings),
        recommendation: "Review useEffect cleanup functions and event listener subscriptions. Ensure all timers are cleared and listeners are removed on unmount or when dependencies change.",
        scoreImpact: sumScoreImpact(match.matchedFindings),
        isRootCause: true,
        contributingFindings: match.matchedFindings.map((f) => f.id),
        consolidationConfidence: confidence
      };
    }
  },
  {
    id: "waterfall-parallel",
    match(findings) {
      const waterfalls = findings.filter((f) => f.type === "waterfall");
      if (waterfalls.length >= 2) {
        return { matchedFindings: waterfalls };
      }
      return null;
    },
    synthesize(match) {
      var _a;
      const confidence = getLowestConfidence(match.matchedFindings);
      return {
        id: `root_cause_waterfall-parallel_${((_a = match.matchedFindings[0]) == null ? void 0 : _a.id) || "unknown"}`,
        module: "correlator",
        type: "waterfall",
        category: "direct_impact",
        severity: "high",
        confidence,
        title: "Fetch waterfall \u2014 sequential requests that could parallelize",
        description: `${match.matchedFindings.length} fetch operations are executing sequentially when they could be parallelized, unnecessarily extending the critical path.`,
        observedIn: "Network waterfall pattern",
        evidence: flattenEvidence(match.matchedFindings),
        metrics: mergeMetrics(match.matchedFindings),
        recommendation: "Identify which requests have no dependency on each other and fire them in parallel. Use Promise.all() to initiate multiple fetches simultaneously.",
        scoreImpact: sumScoreImpact(match.matchedFindings),
        isRootCause: true,
        contributingFindings: match.matchedFindings.map((f) => f.id),
        consolidationConfidence: confidence
      };
    }
  },
  {
    id: "search-input-storm",
    match(findings) {
      const badInp = findings.find((f) => f.type === "bad_inp");
      const renderStorm = findings.find((f) => f.type === "render_storm");
      if (badInp && renderStorm) {
        return { matchedFindings: [badInp, renderStorm] };
      }
      return null;
    },
    synthesize(match) {
      var _a;
      const confidence = getLowestConfidence(match.matchedFindings);
      return {
        id: `root_cause_search-input-storm_${((_a = match.matchedFindings[0]) == null ? void 0 : _a.id) || "unknown"}`,
        module: "correlator",
        type: "bad_inp",
        category: "direct_impact",
        severity: "high",
        confidence,
        title: "Search/filter input causes full-tree re-render per keystroke",
        description: "Input handlers trigger full tree re-renders on every keystroke without debouncing, creating a storm of renders and blocking user input.",
        observedIn: match.matchedFindings.map((f) => f.observedIn).join(", "),
        evidence: flattenEvidence(match.matchedFindings),
        metrics: mergeMetrics(match.matchedFindings),
        recommendation: "Add debouncing to input handlers using a utility like lodash.debounce or a custom hook. Debounce search/filter requests by 300-500ms.",
        scoreImpact: sumScoreImpact(match.matchedFindings),
        isRootCause: true,
        contributingFindings: match.matchedFindings.map((f) => f.id),
        consolidationConfidence: confidence
      };
    }
  },
  {
    id: "bundle-megamonolith",
    match(findings) {
      const oversizedBundle = findings.find((f) => f.type === "oversized_bundle");
      const noCodeSplitting = findings.find((f) => f.type === "no_code_splitting");
      if (oversizedBundle && noCodeSplitting) {
        return { matchedFindings: [oversizedBundle, noCodeSplitting] };
      }
      return null;
    },
    synthesize(match, allFindings) {
      var _a;
      const badLcp = allFindings.find((f) => f.type === "bad_lcp");
      const confidence = getLowestConfidence(match.matchedFindings);
      const severity = badLcp ? "critical" : "high";
      return {
        id: `root_cause_bundle-megamonolith_${((_a = match.matchedFindings[0]) == null ? void 0 : _a.id) || "unknown"}`,
        module: "correlator",
        type: "oversized_bundle",
        category: "direct_impact",
        severity,
        confidence,
        title: "Single megabundle blocking initial render",
        description: "JavaScript is bundled into a single large file without code splitting, causing the entire bundle to block initial render and increasing time to interactive.",
        observedIn: "Initial script loading",
        evidence: flattenEvidence(match.matchedFindings),
        metrics: mergeMetrics(match.matchedFindings),
        recommendation: "Implement code splitting at route and component boundaries. Use dynamic imports (React.lazy) to load code only when needed.",
        scoreImpact: sumScoreImpact(match.matchedFindings),
        isRootCause: true,
        contributingFindings: match.matchedFindings.map((f) => f.id),
        consolidationConfidence: confidence
      };
    }
  },
  {
    id: "n-plus-one-list",
    match(findings) {
      const nPlusOne = findings.find((f) => f.type === "n_plus_one");
      if (!nPlusOne) return null;
      const listPatterns = ["/list", "/search", "/products", "/items"];
      const isListUrl = listPatterns.some((pattern) => (nPlusOne.observedIn || "").toLowerCase().includes(pattern));
      if (isListUrl) {
        return { matchedFindings: [nPlusOne] };
      }
      return null;
    },
    synthesize(match) {
      var _a, _b;
      const confidence = getLowestConfidence(match.matchedFindings);
      return {
        id: `root_cause_n-plus-one-list_${((_a = match.matchedFindings[0]) == null ? void 0 : _a.id) || "unknown"}`,
        module: "correlator",
        type: "n_plus_one",
        category: "direct_impact",
        severity: "high",
        confidence,
        title: "Listing page N+1 \u2014 fetches details per item row",
        description: "A listing page fetches a list of items then fires individual requests for each item details, creating an N+1 query pattern.",
        observedIn: ((_b = match.matchedFindings[0]) == null ? void 0 : _b.observedIn) || "List endpoint",
        evidence: flattenEvidence(match.matchedFindings),
        metrics: mergeMetrics(match.matchedFindings),
        recommendation: "Ask the backend to include detail data in the list response, or use a batch endpoint to fetch multiple item details in one request.",
        scoreImpact: sumScoreImpact(match.matchedFindings),
        isRootCause: true,
        contributingFindings: match.matchedFindings.map((f) => f.id),
        consolidationConfidence: confidence
      };
    }
  },
  {
    id: "lcp-sabotaged",
    match(findings) {
      const badLcp = findings.find((f) => f.type === "bad_lcp");
      const syncScript = findings.find((f) => f.type === "sync_script");
      if (badLcp && syncScript) {
        return { matchedFindings: [badLcp, syncScript] };
      }
      return null;
    },
    synthesize(match) {
      var _a;
      const confidence = getLowestConfidence(match.matchedFindings);
      return {
        id: `root_cause_lcp-sabotaged_${((_a = match.matchedFindings[0]) == null ? void 0 : _a.id) || "unknown"}`,
        module: "correlator",
        type: "bad_lcp",
        category: "direct_impact",
        severity: "critical",
        confidence,
        title: "LCP delayed by render-blocking JS",
        description: "Synchronous scripts in the head or early body are blocking the main thread, delaying the rendering of the largest contentful paint element.",
        observedIn: "Critical rendering path",
        evidence: flattenEvidence(match.matchedFindings),
        metrics: mergeMetrics(match.matchedFindings),
        recommendation: "Move scripts to the end of the document or mark as async. Consider deferring non-critical script initialization until after LCP.",
        scoreImpact: sumScoreImpact(match.matchedFindings),
        isRootCause: true,
        contributingFindings: match.matchedFindings.map((f) => f.id),
        consolidationConfidence: confidence
      };
    }
  },
  {
    id: "third-party-blocker",
    match(findings) {
      const heavyThirdParty = findings.find((f) => f.type === "heavy_third_party");
      if (!heavyThirdParty) return null;
      const highTbt = findings.find((f) => f.type === "high_tbt");
      const longTask = findings.find((f) => f.type === "long_task");
      if (highTbt || longTask) {
        const matching = [heavyThirdParty];
        if (highTbt) matching.push(highTbt);
        if (longTask) matching.push(longTask);
        return { matchedFindings: matching };
      }
      return null;
    },
    synthesize(match) {
      var _a;
      const confidence = getLowestConfidence(match.matchedFindings);
      return {
        id: `root_cause_third-party-blocker_${((_a = match.matchedFindings[0]) == null ? void 0 : _a.id) || "unknown"}`,
        module: "correlator",
        type: "heavy_third_party",
        category: "direct_impact",
        severity: "high",
        confidence,
        title: "Third-party scripts dominate main thread",
        description: "Third-party scripts (analytics, ads, widgets) are consuming significant CPU time and blocking the main thread, degrading user interactivity.",
        observedIn: match.matchedFindings.map((f) => f.observedIn).join(", "),
        evidence: flattenEvidence(match.matchedFindings),
        metrics: mergeMetrics(match.matchedFindings),
        recommendation: "Defer third-party script loading using async or defer attributes. Use web workers for non-blocking computation. Consider sandboxing with iframes.",
        scoreImpact: sumScoreImpact(match.matchedFindings),
        isRootCause: true,
        contributingFindings: match.matchedFindings.map((f) => f.id),
        consolidationConfidence: confidence
      };
    }
  }
];
function correlateFindings(findings) {
  const contributingMap = /* @__PURE__ */ new Map();
  const rootCauses = [];
  for (const rule of rules) {
    const match = rule.match(findings);
    if (match) {
      const rootCause = rule.synthesize(match, findings);
      rootCauses.push(rootCause);
      for (const finding of match.matchedFindings) {
        if (!contributingMap.has(finding.id)) {
          contributingMap.set(finding.id, rootCause.id);
        }
      }
    }
  }
  const standalone = findings.filter((f) => !contributingMap.has(f.id));
  rootCauses.sort((a, b) => b.scoreImpact - a.scoreImpact);
  const severityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
  standalone.sort((a, b) => {
    const severityDiff = (severityOrder[a.severity] ?? 4) - (severityOrder[b.severity] ?? 4);
    if (severityDiff !== 0) return severityDiff;
    return b.scoreImpact - a.scoreImpact;
  });
  return {
    rootCauses,
    standalone,
    contributingMap
  };
}
var SEVERITY_MAP = { critical: 1, high: 0.7, medium: 0.4, low: 0.2 };
var CONFIDENCE_MAP = { high: 1, medium: 0.7, low: 0.4 };
var MODULE_WEIGHTS = {
  observer: 25,
  proxy: 18,
  "asset-inspector": 22,
  render: 17,
  memory: 12,
  architect: 18
};
function computeVibeScore(correlated) {
  const allFindings = [...correlated.rootCauses, ...correlated.standalone];
  const modulePenalties = {};
  const breakdown = {};
  for (const finding of allFindings) {
    const severityMult = SEVERITY_MAP[finding.severity] ?? 0;
    const confidenceMult = CONFIDENCE_MAP[finding.confidence] ?? 0;
    const penalty = finding.scoreImpact * severityMult * confidenceMult;
    const mod = finding.module;
    modulePenalties[mod] = (modulePenalties[mod] ?? 0) + penalty;
    const key = `${mod}:${finding.type}`;
    breakdown[key] = (breakdown[key] ?? 0) + penalty;
  }
  let totalPenalty = 0;
  const moduleBreakdown = {};
  for (const [mod, penalty] of Object.entries(modulePenalties)) {
    const weight = MODULE_WEIGHTS[mod] ?? 20;
    const capped = Math.min(penalty, weight);
    totalPenalty += capped;
    moduleBreakdown[mod] = { weight, penalty, score: Math.max(0, weight - capped) };
  }
  let unknownWeight = 0;
  for (const mod of Object.keys(modulePenalties)) {
    if (!(mod in MODULE_WEIGHTS)) unknownWeight += 20;
  }
  const totalWeight = Object.values(MODULE_WEIGHTS).reduce((s, w) => s + w, 0) + unknownWeight;
  const raw = totalWeight > 0 ? (totalWeight - totalPenalty) / totalWeight * 100 : 100;
  const score = Math.max(0, Math.min(100, raw));
  const roundedScore = Math.round(score);
  let grade;
  if (roundedScore >= 90) grade = "A";
  else if (roundedScore >= 75) grade = "B";
  else if (roundedScore >= 60) grade = "C";
  else if (roundedScore >= 40) grade = "D";
  else grade = "F";
  const rootCauseCount = correlated.rootCauses.length;
  const standaloneCount = correlated.standalone.length;
  const summary = `${rootCauseCount} root cause${rootCauseCount === 1 ? "" : "s"} and ${standaloneCount} standalone finding${standaloneCount === 1 ? "" : "s"} found. Score: ${roundedScore}/100 (grade ${grade}).`;
  return {
    value: roundedScore,
    grade,
    breakdown,
    moduleBreakdown,
    summary
  };
}

// packages/reporter/dist/index.js
function renderJson(report) {
  const serializable = {
    ...report,
    correlated: {
      rootCauses: report.correlated.rootCauses,
      standalone: report.correlated.standalone,
      contributingMap: Object.fromEntries(report.correlated.contributingMap)
    }
  };
  return JSON.stringify(serializable, null, 2);
}
function renderMarkdown(report) {
  const { score, correlated, modules, timestamp, url, duration } = report;
  let markdown = "";
  markdown += `# VibeCheck Ultra \u2014 Performance Audit Report

`;
  markdown += `**URL:** ${url}
`;
  markdown += `**Timestamp:** ${timestamp}
`;
  markdown += `**Duration:** ${duration}

`;
  markdown += `## Score & Grade

`;
  markdown += `**Score:** ${score.value}/100 | **Grade:** ${score.grade}

`;
  markdown += `${score.summary}

`;
  markdown += `## Summary by Module

`;
  markdown += `| Module | Critical | High | Medium | Low |
`;
  markdown += `|--------|----------|------|--------|-----|
`;
  for (const section of Object.values(modules)) {
    const mediumCount = section.findings.filter((f) => f.severity === "medium").length;
    const lowCount = section.findings.filter((f) => f.severity === "low").length;
    markdown += `| ${section.name} | ${section.criticalCount} | ${section.highCount} | ${mediumCount} | ${lowCount} |
`;
  }
  markdown += `
`;
  markdown += `## Root Causes

`;
  markdown += `The following issues represent fundamental performance problems that should be addressed first.

`;
  if (correlated.rootCauses.length === 0) {
    markdown += `No root causes identified.

`;
  } else {
    for (const rootCause of correlated.rootCauses) {
      markdown += `### ${rootCause.title}

`;
      markdown += `**Severity:** ${rootCause.severity} | **Confidence:** ${rootCause.confidence}
`;
      markdown += `**Impact:** ${rootCause.scoreImpact} points

`;
      markdown += `${rootCause.description}

`;
      if (rootCause.evidence && rootCause.evidence.length > 0) {
        markdown += `**Evidence:**
`;
        for (const ev of rootCause.evidence) {
          markdown += `- ${ev.kind}: ${ev.description}
`;
        }
        markdown += `
`;
      }
      if (rootCause.contributingFindings && rootCause.contributingFindings.length > 0) {
        markdown += `**Contributing Findings:** ${rootCause.contributingFindings.join(", ")}

`;
      }
      markdown += `**Recommendation:** ${rootCause.recommendation}

`;
      markdown += `---

`;
    }
  }
  markdown += `## Standalone Findings

`;
  const directImpact = correlated.standalone.filter((f) => f.category === "direct_impact");
  const theoreticalDebt = correlated.standalone.filter((f) => f.category === "theoretical_debt");
  if (directImpact.length > 0) {
    markdown += `### Direct Impact

`;
    for (const finding of directImpact) {
      markdown += `#### ${finding.title}

`;
      markdown += `**Type:** ${finding.type} | **Severity:** ${finding.severity} | **Confidence:** ${finding.confidence}
`;
      markdown += `**Module:** ${finding.module} | **Impact:** ${finding.scoreImpact} points

`;
      markdown += `${finding.description}

`;
      if (finding.observedIn) {
        markdown += `**Observed In:** ${finding.observedIn}

`;
      }
      if (finding.evidence && finding.evidence.length > 0) {
        markdown += `**Evidence:**
`;
        for (const ev of finding.evidence) {
          markdown += `- ${ev.kind}: ${ev.description}
`;
        }
        markdown += `
`;
      }
      markdown += `**Recommendation:** ${finding.recommendation}

`;
    }
  }
  if (theoreticalDebt.length > 0) {
    markdown += `### Theoretical Debt

`;
    for (const finding of theoreticalDebt) {
      markdown += `#### ${finding.title}

`;
      markdown += `**Type:** ${finding.type} | **Severity:** ${finding.severity} | **Confidence:** ${finding.confidence}
`;
      markdown += `**Module:** ${finding.module} | **Impact:** ${finding.scoreImpact} points

`;
      markdown += `${finding.description}

`;
      if (finding.observedIn) {
        markdown += `**Observed In:** ${finding.observedIn}

`;
      }
      if (finding.evidence && finding.evidence.length > 0) {
        markdown += `**Evidence:**
`;
        for (const ev of finding.evidence) {
          markdown += `- ${ev.kind}: ${ev.description}
`;
        }
        markdown += `
`;
      }
      markdown += `**Recommendation:** ${finding.recommendation}

`;
    }
  }
  markdown += `## Score Breakdown

`;
  markdown += `| Finding Type | Points Docked |
`;
  markdown += `|--------------|---------------|
`;
  const sortedBreakdown = Object.entries(score.breakdown).sort((a, b) => b[1] - a[1]);
  for (const [type, points] of sortedBreakdown) {
    markdown += `| ${type} | ${points.toFixed(2)} |
`;
  }
  markdown += `
`;
  markdown += `## Audit Metadata

`;
  markdown += `- **Audit ID:** ${report.auditId}
`;
  markdown += `- **Report Version:** ${report.reportVersion}
`;
  markdown += `- **Generated:** ${(/* @__PURE__ */ new Date()).toISOString()}
`;
  return markdown;
}
var MODULE_DISPLAY_NAMES = {
  observer: "Runtime Performance",
  proxy: "Network Patterns",
  "asset-inspector": "Assets & Bundle",
  render: "React Rendering",
  memory: "Memory Health",
  architect: "Inferred Backend",
  correlator: "Root Cause Analysis"
};
var ReportGenerator = class {
  async generate(input) {
    const correlated = correlateFindings(input.findings);
    const score = computeVibeScore(correlated);
    const modules = {};
    for (const finding of input.findings) {
      if (!modules[finding.module]) {
        modules[finding.module] = {
          name: MODULE_DISPLAY_NAMES[finding.module] || finding.module,
          findings: [],
          criticalCount: 0,
          highCount: 0
        };
      }
      modules[finding.module].findings.push(finding);
      if (finding.severity === "critical") {
        modules[finding.module].criticalCount += 1;
      } else if (finding.severity === "high") {
        modules[finding.module].highCount += 1;
      }
    }
    const durationMs = input.completedAt - input.startedAt;
    const durationStr = formatDuration(durationMs);
    const report = {
      reportVersion: "1.0",
      auditId: input.auditId,
      url: input.url,
      timestamp: new Date(input.startedAt).toISOString(),
      duration: durationStr,
      score,
      summary: score.summary,
      correlated,
      modules
    };
    return report;
  }
  async writeReport(report, outputDir) {
    const jsonPath = join3(outputDir, "VIBE_REPORT.json");
    const markdownPath = join3(outputDir, "VIBE_REPORT.md");
    const jsonContent = renderJson(report);
    const markdownContent = renderMarkdown(report);
    await writeFile2(jsonPath, jsonContent, "utf-8");
    await writeFile2(markdownPath, markdownContent, "utf-8");
  }
};
function formatDuration(ms) {
  const seconds = Math.floor(ms / 1e3);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  if (minutes > 0) {
    return `${minutes}m ${remainingSeconds}s`;
  }
  return `${seconds}s`;
}

// packages/engine/dist/index.js
import pino from "pino";
import { join as join4 } from "path";
var EventBus = class {
  listeners = [];
  log;
  constructor(log2) {
    this.log = log2;
  }
  on(fn) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== fn);
    };
  }
  emit(event) {
    this.log.trace({ type: event.type }, "event");
    for (const fn of this.listeners) {
      fn(event);
    }
  }
};
var BROWSER_ARGS = [
  "--no-sandbox",
  "--disable-setuid-sandbox",
  "--disable-dev-shm-usage",
  "--disable-gpu",
  "--disable-extensions",
  "--disable-background-networking",
  "--disable-default-apps",
  "--disable-sync",
  "--disable-translate",
  "--metrics-recording-only",
  "--no-first-run",
  "--disable-background-timer-throttling",
  "--disable-backgrounding-occluded-windows",
  "--disable-renderer-backgrounding",
  "--js-flags=--max-old-space-size=128"
];
var BrowserLauncher = class {
  browser = null;
  log;
  constructor(log2) {
    this.log = log2;
  }
  async launch() {
    try {
      this.browser = await chromium.launch({
        headless: true,
        args: BROWSER_ARGS
      });
      const context = await this.browser.newContext({ viewport: { width: 1440, height: 900 } });
      const page = await context.newPage();
      return { ok: true, value: { context, page } };
    } catch (err) {
      return { ok: false, error: { code: "E_ENGINE_ERROR", module: "engine", message: `Browser launch failed: ${err}`, recoverable: true } };
    }
  }
  async dispose() {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }
};
var CDPBridge = class {
  cdp = null;
  log;
  bus;
  page;
  constructor(page, log2, bus) {
    this.page = page;
    this.log = log2;
    this.bus = bus;
  }
  async initialize() {
    try {
      this.cdp = await this.page.context().newCDPSession(this.page);
      await this.cdp.send("Network.enable");
      await this.cdp.send("Performance.enable");
      this.cdp.on("Network.requestWillBeSent", (params) => {
        this.bus.emit({ type: "network.request", requestId: params.requestId, url: params.request.url, method: params.request.method, resourceType: params.type || "Other", timestamp: params.timestamp * 1e3 });
      });
      this.cdp.on("Network.responseReceived", (params) => {
        this.bus.emit({ type: "network.response", requestId: params.requestId, url: params.response.url, status: params.response.status, mimeType: params.response.mimeType, timestamp: params.timestamp * 1e3 });
      });
      return { ok: true, value: this.cdp };
    } catch (err) {
      return { ok: false, error: { code: "E_ENGINE_ERROR", module: "engine", message: `CDP init failed: ${err}`, recoverable: true } };
    }
  }
  getSession() {
    return this.cdp;
  }
  async dispose() {
    if (this.cdp) {
      await this.cdp.detach();
      this.cdp = null;
    }
  }
};
var FlowRunner = class {
  page;
  log;
  bus;
  constructor(page, log2, bus) {
    this.page = page;
    this.log = log2;
    this.bus = bus;
  }
  async run(flow, signal) {
    for (const step of flow.steps) {
      if (signal.aborted) return { ok: false, error: { code: "E_TIMEOUT", module: "engine", message: "Audit aborted", recoverable: false } };
      this.bus.emit({ type: "flow.step.before", step, url: this.page.url(), timestamp: Date.now() });
      try {
        await this.executeStep(step);
        this.bus.emit({ type: "flow.step.after", step, url: this.page.url(), timestamp: Date.now(), success: true });
      } catch (err) {
        this.bus.emit({ type: "flow.step.after", step, url: this.page.url(), timestamp: Date.now(), success: false });
        return { ok: false, error: { code: "E_ENGINE_ERROR", module: "engine", message: `Step failed: ${err.message}`, recoverable: true } };
      }
    }
    return { ok: true, value: void 0 };
  }
  async executeStep(step) {
    switch (step.action) {
      case "goto":
        if (step.url) {
          await this.page.goto(step.url, { waitUntil: "load", timeout: 3e4 });
          await this.page.waitForLoadState("networkidle", { timeout: 5e3 }).catch(() => {
          });
        }
        break;
      case "click":
        if (step.selector) await this.page.click(step.selector, { timeout: 1e4 });
        break;
      case "type":
        if (step.selector && step.text) await this.page.fill(step.selector, step.text);
        break;
      case "wait":
        if (step.ms) await this.page.waitForTimeout(step.ms);
        break;
      case "scroll":
        if (step.to) {
          await this.page.evaluate(() => {
            window.__vibeScrolling = true;
          }).catch(() => {
          });
          await this.page.evaluate((sel) => {
            var _a;
            return (_a = document.querySelector(sel)) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
          }, step.to).catch(() => {
          });
          await this.page.evaluate(() => {
            window.__vibeScrolling = false;
          }).catch(() => {
          });
        }
        break;
      case "scroll_bottom":
        await this.page.evaluate(() => {
          window.__vibeScrolling = true;
        }).catch(() => {
        });
        await this.page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })).catch(() => {
        });
        await this.page.evaluate(() => {
          window.__vibeScrolling = false;
        }).catch(() => {
        });
        await this.page.waitForTimeout(800);
        break;
      case "screenshot":
        break;
    }
  }
};
var ModuleRegistry = class {
  modules = [];
  register(mod) {
    this.modules.push(mod);
  }
  async initializeAll(ctx) {
    for (const mod of this.modules) {
      const result = await mod.initialize(ctx);
      if (!result.ok) return result;
    }
    return { ok: true, value: void 0 };
  }
  async dispatchEvent(event) {
    for (const mod of this.modules) {
      await mod.onEvent(event);
    }
  }
  async finalizeAll() {
    const findings = [];
    for (const mod of this.modules) {
      findings.push(...await mod.finalize());
    }
    return findings;
  }
  async disposeAll() {
    for (const mod of this.modules) {
      await mod.dispose();
    }
  }
  getWeights() {
    const w = {};
    for (const mod of this.modules) {
      w[mod.name] = mod.weight;
    }
    return w;
  }
};
var ERROR_CATALOG = {
  E_DNS_FAILURE: {
    code: "E_DNS_FAILURE",
    message: "Could not resolve hostname",
    actions: [
      "Check that the URL is spelled correctly",
      "Verify you have internet connectivity",
      "The site may be behind a VPN you are not connected to"
    ]
  },
  E_TIMEOUT: {
    code: "E_TIMEOUT",
    message: "Page did not load within 30 seconds",
    actions: [
      "The site may be slow or unresponsive",
      "Try auditing a simpler page on the same domain first",
      "Check if the site requires authentication"
    ]
  },
  E_BOT_BLOCKED: {
    code: "E_BOT_BLOCKED",
    message: "Site blocked headless browser access",
    actions: [
      "Try auditing a staging or preview URL instead",
      "Some sites block automated tools \u2014 this is expected behavior"
    ]
  },
  E_CAPTCHA: {
    code: "E_CAPTCHA",
    message: "CAPTCHA detected \u2014 cannot proceed",
    actions: [
      "VibeCheck does not bypass CAPTCHAs",
      "Audit a staging URL that does not require CAPTCHA"
    ]
  },
  E_EMPTY_RESPONSE: {
    code: "E_EMPTY_RESPONSE",
    message: "Server returned an empty response",
    actions: [
      "Verify the URL returns a page in a browser",
      "The endpoint may require POST or authentication"
    ]
  },
  E_SSL_ERROR: {
    code: "E_SSL_ERROR",
    message: "SSL certificate error",
    actions: [
      "The site may have an expired or self-signed certificate",
      "If this is a local dev server, use http:// instead of https://"
    ]
  },
  E_ENGINE_ERROR: {
    code: "E_ENGINE_ERROR",
    message: "Audit engine encountered an internal error",
    actions: [
      "Check the audit log for details",
      "Try again \u2014 transient errors sometimes resolve on retry"
    ]
  }
};
function classifyError(err) {
  const msg = err instanceof Error ? err.message.toLowerCase() : String(err).toLowerCase();
  if (msg.includes("dns") || msg.includes("getaddrinfo") || msg.includes("enotfound")) return { ...ERROR_CATALOG.E_DNS_FAILURE, message: err instanceof Error ? err.message : String(err) };
  if (msg.includes("timeout") || msg.includes("timed out")) return { ...ERROR_CATALOG.E_TIMEOUT, message: err instanceof Error ? err.message : String(err) };
  if (msg.includes("captcha")) return { ...ERROR_CATALOG.E_CAPTCHA, message: err instanceof Error ? err.message : String(err) };
  if (msg.includes("blocked") || msg.includes("403") || msg.includes("cloudflare")) return { ...ERROR_CATALOG.E_BOT_BLOCKED, message: err instanceof Error ? err.message : String(err) };
  if (msg.includes("ssl") || msg.includes("certificate") || msg.includes("self-signed")) return { ...ERROR_CATALOG.E_SSL_ERROR, message: err instanceof Error ? err.message : String(err) };
  if (msg.includes("empty") || msg.includes("empty response")) return { ...ERROR_CATALOG.E_EMPTY_RESPONSE, message: err instanceof Error ? err.message : String(err) };
  return { ...ERROR_CATALOG.E_ENGINE_ERROR, message: err instanceof Error ? err.message : String(err) };
}
var AuditRunner = class {
  log;
  launcher;
  registry;
  constructor(log2) {
    this.log = log2 ?? pino({ level: "info" });
    this.launcher = new BrowserLauncher(this.log);
    this.registry = new ModuleRegistry();
  }
  registerModule(mod) {
    this.registry.register(mod);
  }
  async run(config, id) {
    id = id ?? createAuditId();
    const run = { id, status: "running", findings: [], startedAt: Date.now() };
    this.log.info({ id, url: config.url }, "audit.start");
    const { mkdir: mkdir2 } = await import("fs/promises");
    try {
      await mkdir2(config.output.dir, { recursive: true });
    } catch (err) {
      this.log.warn({ err, dir: config.output.dir }, "audit.outputDirCreate");
    }
    const launcherResult = await this.launcher.launch();
    if (!launcherResult.ok) {
      this.log.error({ id, err: launcherResult.error }, "audit.launchFailed");
      const userError = classifyError(launcherResult.error);
      return { ...run, status: "failed", error: launcherResult.error, userError, completedAt: Date.now() };
    }
    let { page } = launcherResult.value;
    const bus = new EventBus(this.log);
    const cdpBridge = new CDPBridge(page, this.log, bus);
    const cdpResult = await cdpBridge.initialize();
    if (!cdpResult.ok) {
      this.log.error({ id, err: cdpResult.error }, "audit.cdpFailed");
      await this.launcher.dispose();
      const userError = classifyError(cdpResult.error);
      return { ...run, status: "failed", error: cdpResult.error, userError, completedAt: Date.now() };
    }
    const evidenceStore = new EvidenceStore(config.output.dir, id);
    await evidenceStore.init();
    run.outputDir = join4(config.output.dir, id);
    const flow = typeof config.flow === "string" ? { name: "default", steps: [{ action: "goto", url: config.url }] } : config.flow ?? {
      name: "default",
      steps: [
        { action: "goto", url: config.url },
        { action: "wait", ms: 3e3 },
        { action: "scroll_bottom" },
        { action: "wait", ms: 3e3 }
      ]
    };
    const controller = new AbortController();
    const ctx = { url: config.url, flow, page, cdp: cdpBridge.getSession(), evidenceStore, logger: this.log, config, signal: controller.signal };
    await page.context().addInitScript(`(function(){if(window.__vibeMessageBridgeInjected)return;window.__vibeMessageBridgeInjected=true;window.addEventListener('message',function(e){var d=e.data;if(d&&d.__vibe){var r={};for(var k in d){if(k!=='__vibe')r[k]=d[k];}console.info(JSON.stringify(Object.assign({__vibe:true},r)));}});})()`);
    const modResult = await this.registry.initializeAll(ctx);
    if (!modResult.ok) {
      this.log.error({ id, err: modResult.error }, "audit.moduleInitFailed");
      await this.launcher.dispose();
      const userError = classifyError(modResult.error);
      return { ...run, status: "failed", error: modResult.error, userError, completedAt: Date.now() };
    }
    bus.on((event) => this.registry.dispatchEvent(event));
    attachEventCollector(page, (event) => bus.emit(event));
    await page.context().addInitScript(buildInjectorScript());
    page.on("close", () => {
      this.log.warn({ id }, "audit.browserCrash");
      controller.abort();
    });
    try {
      const flowRunner = new FlowRunner(page, this.log, bus);
      const flowResult = await flowRunner.run(flow, controller.signal);
      if (!flowResult.ok) {
        this.log.error({ id, err: flowResult.error }, "audit.flowFailed");
        await this.launcher.dispose();
        const userError = classifyError(flowResult.error);
        return { ...run, status: "failed", error: flowResult.error, userError, completedAt: Date.now() };
      }
      if (page.isClosed()) {
        await this.launcher.dispose();
        return {
          ...run,
          status: "failed",
          error: { code: "E_ENGINE_ERROR", module: "engine", message: "Browser crashed during audit \u2014 likely out of memory. The target site may be too resource-heavy for the current environment.", recoverable: false },
          userError: { code: "E_ENGINE_ERROR", message: "Browser crashed during audit. The target site may be too heavy for this environment.", actions: ["Try a simpler page or deploy with more memory (\u22651GB)"] },
          completedAt: Date.now()
        };
      }
      const findings = await this.registry.finalizeAll();
      await this.registry.disposeAll();
      await evidenceStore.finalize();
      await this.launcher.dispose();
      const completedAt = Date.now();
      const generator = new ReportGenerator();
      const report = await generator.generate({
        auditId: id,
        url: config.url,
        startedAt: run.startedAt,
        completedAt,
        findings,
        outputDir: config.output.dir
      });
      await generator.writeReport(report, run.outputDir);
      this.log.info({ id, findings: findings.length, score: report.score.value }, "audit.end");
      return { ...run, status: "completed", findings, score: report.score.value, scoreResult: report.score, report, completedAt };
    } catch (err) {
      this.log.error({ err, id }, "audit.unexpectedError");
      await this.launcher.dispose().catch(() => {
      });
      return {
        ...run,
        status: "failed",
        error: { code: "E_ENGINE_ERROR", module: "engine", message: `Unexpected error during audit: ${err.message}`, recoverable: false },
        userError: { code: "E_ENGINE_ERROR", message: `Unexpected error: ${err.message}`, actions: ["Check server logs for details"] },
        completedAt: Date.now()
      };
    }
  }
};

// packages/observer/dist/index.js
var LongTaskDetector = class {
  constructor(ctx) {
    this.ctx = ctx;
  }
  ctx;
  name = "long-task";
  tasks = [];
  route = "";
  async onEvent(event) {
    if (event.type === "cdp.long_task") {
      this.tasks.push({
        duration: event.duration,
        startTime: event.startTime,
        url: event.url,
        timestamp: Date.now()
      });
    }
  }
  async finalize() {
    const findings = [];
    const significant = this.tasks.filter((t) => t.duration > 150);
    if (significant.length < 3) return findings;
    for (const task of significant) {
      const severity = this.durationToSeverity(task.duration);
      findings.push({
        id: createFindingId(this.name, "long_task", `ts-${task.startTime}`),
        module: this.name,
        type: "long_task",
        category: "direct_impact",
        severity,
        confidence: "medium",
        title: `Long task: ${Math.round(task.duration)}ms`,
        description: `A main thread task blocked for ${Math.round(task.duration)}ms, exceeding the 50ms budget.`,
        observedIn: task.url ?? "unknown",
        evidence: [{
          kind: "cdp_trace",
          path: "",
          range: { start: task.startTime, end: task.startTime + task.duration },
          description: `Long task trace at ${task.startTime}ms`
        }],
        metrics: { durationMs: task.duration, startTime: task.startTime },
        recommendation: "Break up this task with scheduler.yield() or move to a Web Worker.",
        scoreImpact: Math.min(Math.round(task.duration / 30), 18)
      });
    }
    return findings;
  }
  async dispose() {
  }
  durationToSeverity(ms) {
    if (ms > 300) return "critical";
    if (ms > 150) return "high";
    if (ms > 80) return "medium";
    return "low";
  }
};
var LoAFDetector = class {
  constructor(ctx) {
    this.ctx = ctx;
  }
  ctx;
  name = "loaf";
  entries = [];
  async onEvent(event) {
    if (event.type === "cdp.long_animation_frame") {
      this.entries.push(event.entry);
    }
  }
  async finalize() {
    const findings = [];
    const significant = this.entries.filter((e) => e.duration > 50);
    if (significant.length > 15) {
      findings.push({
        id: createFindingId(this.name, "loaf", "systemic"),
        module: this.name,
        type: "long_animation_frame",
        category: "direct_impact",
        severity: "high",
        confidence: "medium",
        title: `Systemic long animation frames: ${significant.length} detected`,
        description: `Found ${significant.length} long animation frames exceeding 50ms. This indicates persistent main thread contention.`,
        observedIn: this.ctx.url,
        evidence: [{ kind: "cdp_trace", path: "", description: `${significant.length} LoAF entries` }],
        metrics: { count: significant.length, avgDuration: significant.reduce((s, e) => s + e.duration, 0) / significant.length },
        recommendation: "Audit long-running scripts and reduce style/layout work during animation frames.",
        scoreImpact: 15
      });
    }
    for (const entry of significant.filter((e) => e.duration > 300)) {
      const styleDominated = entry.styleAndLayoutDuration > entry.duration * 0.5;
      findings.push({
        id: createFindingId(this.name, "loaf", `ts-${entry.startTime}`),
        module: this.name,
        type: "long_animation_frame",
        category: "direct_impact",
        severity: entry.duration > 500 ? "critical" : "high",
        confidence: styleDominated ? "medium" : "medium",
        title: `Long animation frame: ${Math.round(entry.duration)}ms${styleDominated ? " (style/layout dominated)" : ""}`,
        description: `A frame took ${Math.round(entry.duration)}ms. Blocking duration: ${Math.round(entry.blockingDuration)}ms. Style/layout: ${Math.round(entry.styleAndLayoutDuration)}ms.`,
        observedIn: this.ctx.url,
        evidence: [{ kind: "cdp_trace", path: "", description: `LoAF at ${entry.startTime}ms` }],
        metrics: { duration: entry.duration, blockingDuration: entry.blockingDuration, styleAndLayoutDuration: entry.styleAndLayoutDuration, scriptCount: entry.scriptEntries.length },
        recommendation: styleDominated ? "Reduce style recalculation by batching DOM reads/writes and avoiding layout-triggering properties in animations." : "Break up scripts with setTimeout or scheduler.yield() to yield to the main thread.",
        scoreImpact: 15
      });
    }
    return findings;
  }
  async dispose() {
  }
};
var THRESHOLDS = {
  LCP: { poor: 4e3, needsImprovement: 2500 },
  INP: { poor: 500, needsImprovement: 200 },
  CLS: { poor: 0.25, needsImprovement: 0.1 },
  TTFB: { poor: 1800, needsImprovement: 800 },
  FCP: { poor: 3e3, needsImprovement: 1800 }
};
var VITAL_FINDING_TYPE = {
  LCP: "bad_lcp",
  CLS: "bad_cls",
  FCP: "bad_fcp"
};
var WebVitalsDetector = class {
  constructor(ctx) {
    this.ctx = ctx;
  }
  ctx;
  name = "web-vitals";
  reports = [];
  async onEvent(event) {
    if (event.type === "web_vital") {
      this.reports.push(event.metric);
    }
  }
  async finalize() {
    const findings = [];
    const byName = /* @__PURE__ */ new Map();
    for (const r of this.reports) {
      const list = byName.get(r.name) ?? [];
      list.push(r);
      byName.set(r.name, list);
    }
    for (const [name, reports] of byName) {
      if (name === "TTFB") continue;
      if (name === "INP") continue;
      const threshold = THRESHOLDS[name];
      if (!threshold) continue;
      const poor = reports.filter((r) => r.value > threshold.poor);
      if (poor.length > 0) {
        const worst = [...reports].sort((a, b) => b.value - a.value)[0];
        if (!worst) continue;
        const findingType = VITAL_FINDING_TYPE[name];
        if (!findingType) continue;
        const severity = "high";
        findings.push({
          id: createFindingId(this.name, findingType, name),
          module: this.name,
          type: findingType,
          category: "direct_impact",
          severity,
          confidence: "medium",
          title: `Poor ${name}: ${Math.round(worst.value)}ms`,
          description: `${name} measured at ${Math.round(worst.value)}ms (poor threshold: ${threshold.poor}ms). ${reports.length} sample(s) collected.`,
          observedIn: this.ctx.url,
          evidence: [{ kind: "console_log", path: "", description: `${name} = ${worst.value}` }],
          metrics: { value: worst.value, rating: worst.rating, samples: reports.length },
          recommendation: this.getRecommendation(name),
          scoreImpact: 25
        });
      }
    }
    return findings;
  }
  async dispose() {
  }
  getRecommendation(metric) {
    switch (metric) {
      case "LCP":
        return "Optimize the largest contentful element: preload images, reduce server response time, and eliminate render-blocking resources.";
      case "INP":
        return "Reduce JavaScript execution time during interactions. Use event delegation and avoid synchronous work in event handlers.";
      case "CLS":
        return "Reserve space for dynamic content, use size attributes on images, and avoid inserting content above existing content.";
      case "TTFB":
        return "Optimize server response time: use caching, CDN, and optimize backend queries.";
      case "FCP":
        return "Eliminate render-blocking resources, preload critical fonts, and reduce critical rendering path.";
      default:
        return "Optimize this metric using Web Vitals best practices.";
    }
  }
};
var ForcedReflowDetector = class {
  constructor(ctx) {
    this.ctx = ctx;
  }
  ctx;
  name = "forced-reflow";
  events = [];
  bySelector = /* @__PURE__ */ new Map();
  async onEvent(event) {
    if (event.type === "cdp.forced_reflow") {
      this.events.push({ selector: event.selector, timestamp: event.timestamp });
      const key = event.selector ?? "unknown";
      this.bySelector.set(key, (this.bySelector.get(key) ?? 0) + 1);
    }
  }
  async finalize() {
    const findings = [];
    for (const [selector, count] of this.bySelector) {
      if (count >= 3) {
        findings.push({
          id: createFindingId(this.name, "forced_reflow", selector),
          module: this.name,
          type: "forced_reflow",
          category: "direct_impact",
          severity: count > 20 ? "high" : "medium",
          confidence: "medium",
          title: `Forced synchronous layout on ${selector} (${count} times)`,
          description: `Reading layout properties (${selector}) forced the browser to recalculate layout ${count} times.`,
          observedIn: selector,
          evidence: [{ kind: "cdp_trace", path: "", description: `${count} forced reflows on ${selector}` }],
          metrics: { count, selector },
          recommendation: "Batch DOM reads and writes. Read layout properties before any writes to avoid forcing synchronous layout.",
          scoreImpact: 15
        });
      }
    }
    return findings;
  }
  async dispose() {
  }
};
var ReflowHotspotDetector = class {
  constructor(ctx) {
    this.ctx = ctx;
  }
  ctx;
  name = "reflow-hotspot";
  reflowCount = 0;
  async onEvent(event) {
    if (event.type === "cdp.forced_reflow") {
      this.reflowCount++;
    }
  }
  async finalize() {
    const findings = [];
    if (this.reflowCount > 10) {
      findings.push({
        id: createFindingId(this.name, "reflow_hotspot", "hot"),
        module: this.name,
        type: "reflow_hotspot",
        category: "direct_impact",
        severity: "medium",
        confidence: "medium",
        title: `Reflow hotspot: ${this.reflowCount} forced layouts`,
        description: `Detected ${this.reflowCount} forced synchronous layouts, indicating a reflow hotspot during interaction.`,
        observedIn: this.ctx.url,
        evidence: [{ kind: "cdp_trace", path: "", description: `${this.reflowCount} reflows` }],
        metrics: { reflowCount: this.reflowCount },
        recommendation: "Batch DOM reads and writes. Use requestAnimationFrame for visual updates and avoid reading layout properties after writes.",
        scoreImpact: 6
      });
    }
    return findings;
  }
  async dispose() {
  }
};
var PaintStormDetector = class {
  constructor(ctx) {
    this.ctx = ctx;
  }
  ctx;
  name = "paint-storm";
  paintCount = 0;
  paintTimestamps = [];
  async onEvent(event) {
    if (event.type === "cdp.paint") {
      this.paintCount++;
      this.paintTimestamps.push(event.startTime);
    }
  }
  async finalize() {
    const findings = [];
    if (this.paintTimestamps.length > 10) {
      const sorted = [...this.paintTimestamps].sort((a, b) => a - b);
      const first = sorted[0];
      const last = sorted[sorted.length - 1];
      if (first !== void 0 && last !== void 0 && last > first) {
        const durationSec = (last - first) / 1e3;
        const rate = this.paintCount / durationSec;
        if (rate > 5 && durationSec > 2) {
          findings.push({
            id: createFindingId(this.name, "paint_storm", "analysis"),
            module: this.name,
            type: "paint_storm",
            category: "direct_impact",
            severity: "medium",
            confidence: "medium",
            title: `Paint storm: ${Math.round(rate)} paints/sec over ${Math.round(durationSec)}s`,
            description: `Layer painted ${this.paintCount} times over ${Math.round(durationSec)}s (${Math.round(rate)} paints/sec), exceeding the 5 paints/sec threshold.`,
            observedIn: this.ctx.url,
            evidence: [{ kind: "cdp_trace", path: "", description: `${this.paintCount} paint events` }],
            metrics: { paintCount: this.paintCount, rate, durationSec },
            recommendation: "Avoid triggering paints in animation loops. Use transform and opacity for animations instead of properties that trigger repaint.",
            scoreImpact: 6
          });
        }
      }
    }
    return findings;
  }
  async dispose() {
  }
};
var WEB_VITALS_SCRIPT = `
(function() {
  if (window.__vibeWebVitalsInjected) return;
  window.__vibeWebVitalsInjected = true;

  var emit = function(data) {
    console.info(JSON.stringify({ __vibe: true, type: 'web_vital', metric: data }));
  };

  function reportMetric(name, value, rating, delta) {
    emit({ name: name, value: value, rating: rating, delta: delta, timestamp: Date.now() });
  }

  // LCP \u2014 must use 'largest-contentful-paint' entry type, not 'paint'
  try {
    new PerformanceObserver(function(list) {
      var entries = list.getEntries();
      var entry = entries[entries.length - 1];
      if (entry) {
        reportMetric('LCP', entry.startTime, entry.startTime > 4000 ? 'poor' : entry.startTime > 2500 ? 'needs-improvement' : 'good', entry.startTime);
      }
    }).observe({ type: 'largest-contentful-paint', buffered: true });
  } catch(e) {}

  // FCP
  try {
    new PerformanceObserver(function(list) {
      for (var entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          reportMetric('FCP', entry.startTime, entry.startTime > 3000 ? 'poor' : entry.startTime > 1800 ? 'needs-improvement' : 'good', 0);
        }
      }
    }).observe({ type: 'paint', buffered: true });
  } catch(e) {}

  // CLS
  try {
    new PerformanceObserver(function(list) {
      for (var entry of list.getEntries()) {
        reportMetric('CLS', entry.value, entry.value > 0.25 ? 'poor' : entry.value > 0.1 ? 'needs-improvement' : 'good', entry.value);
      }
    }).observe({ type: 'layout-shift', buffered: true });
  } catch(e) {}

  // TTFB
  try {
    new PerformanceObserver(function(list) {
      var entries = list.getEntries();
      if (entries.length > 0) {
        var entry = entries[0];
        reportMetric('TTFB', entry.startTime, entry.startTime > 1800 ? 'poor' : entry.startTime > 800 ? 'needs-improvement' : 'good', 0);
      }
    }).observe({ type: 'navigation', buffered: true });
  } catch(e) {}

  // INP \u2014 interaction next paint
  try {
    new PerformanceObserver(function(list) {
      var entries = list.getEntries();
      var entry = entries[entries.length - 1];
      if (entry) {
        reportMetric('INP', entry.duration, entry.duration > 500 ? 'poor' : entry.duration > 200 ? 'needs-improvement' : 'good', entry.duration);
      }
    }).observe({ type: 'event', durationThreshold: 16, buffered: true });
  } catch(e) {}
})();
`;
var REFLOW_DETECTOR_SCRIPT = `
(function() {
  if (window.__vibeReflowInjected) return;
  window.__vibeReflowInjected = true;

  var originalOffsetWidth = Object.getOwnPropertyDescriptor(Element.prototype, 'offsetWidth');
  var originalOffsetHeight = Object.getOwnPropertyDescriptor(Element.prototype, 'offsetHeight');
  var originalScrollHeight = Object.getOwnPropertyDescriptor(Element.prototype, 'scrollHeight');
  var originalClientHeight = Object.getOwnPropertyDescriptor(Element.prototype, 'clientHeight');

  function emitReflow(el) {
    if (window.__vibeScrolling) return;
    window.postMessage({ __vibe: true, type: 'cdp.forced_reflow', selector: el.tagName.toLowerCase(), timestamp: Date.now() }, '*');
  }

  Object.defineProperty(Element.prototype, 'offsetWidth', {
    configurable: true,
    get: function() {
      emitReflow(this);
      return originalOffsetWidth.get.call(this);
    }
  });

  Object.defineProperty(Element.prototype, 'offsetHeight', {
    configurable: true,
    get: function() {
      emitReflow(this);
      return originalOffsetHeight.get.call(this);
    }
  });

  Object.defineProperty(Element.prototype, 'scrollHeight', {
    configurable: true,
    get: function() {
      emitReflow(this);
      return originalScrollHeight.get.call(this);
    }
  });

  Object.defineProperty(Element.prototype, 'clientHeight', {
    configurable: true,
    get: function() {
      emitReflow(this);
      return originalClientHeight.get.call(this);
    }
  });
})();
`;
var LISTENER_COUNTER_SCRIPT = `
(function() {
  if (window.__vibeListenerInjected) return;
  window.__vibeListenerInjected = true;

  var originalAddEventListener = EventTarget.prototype.addEventListener;
  var originalRemoveEventListener = EventTarget.prototype.removeEventListener;
  var listenerCount = 0;

  EventTarget.prototype.addEventListener = function(type, listener, options) {
    listenerCount++;
    window.postMessage({ __vibe: true, type: 'listener_add', count: listenerCount, listenerType: type, target: this.tagName || 'unknown', timestamp: Date.now() }, '*');
    return originalAddEventListener.call(this, type, listener, options);
  };

  EventTarget.prototype.removeEventListener = function(type, listener, options) {
    listenerCount = Math.max(0, listenerCount - 1);
    window.postMessage({ __vibe: true, type: 'listener_remove', count: listenerCount, listenerType: type, target: this.tagName || 'unknown', timestamp: Date.now() }, '*');
    return originalRemoveEventListener.call(this, type, listener, options);
  };

  window.__vibeGetListenerCount = function() { return listenerCount; };
})();
`;
var ObserverModule = class {
  name = "observer";
  weight = 25;
  detectors = [];
  ctx = null;
  async initialize(ctx) {
    this.ctx = ctx;
    this.detectors = [
      new LongTaskDetector(ctx),
      new LoAFDetector(ctx),
      new WebVitalsDetector(ctx),
      new ForcedReflowDetector(ctx),
      new ReflowHotspotDetector(ctx),
      new PaintStormDetector(ctx)
    ];
    await ctx.page.context().addInitScript(WEB_VITALS_SCRIPT + REFLOW_DETECTOR_SCRIPT + LISTENER_COUNTER_SCRIPT);
    return ok(void 0);
  }
  async onEvent(event) {
    await Promise.all(this.detectors.map((d) => d.onEvent(event)));
  }
  async finalize() {
    const all = await Promise.all(this.detectors.map((d) => d.finalize()));
    return all.flat();
  }
  async dispose() {
    await Promise.all(this.detectors.map((d) => d.dispose()));
  }
};

// packages/proxy/dist/index.js
var NetworkRecorder = class {
  requests = /* @__PURE__ */ new Map();
  completed = [];
  onRequestStart(id, url, method, resourceType, requestHeaders, initiator, timestamp) {
    this.requests.set(id, {
      id,
      url,
      method,
      resourceType,
      initiator,
      requestHeaders,
      responseHeaders: {},
      status: 0,
      protocol: "",
      timing: { startTime: timestamp, duration: 0, dns: 0, connect: 0, ssl: 0, send: 0, wait: 0, receive: 0 },
      bytesTransferred: 0,
      bytesEncoded: 0,
      fromCache: false,
      requestId: id,
      timestamp,
      mimeType: ""
    });
  }
  onResponse(id, status, mimeType, responseHeaders, protocol, _timestamp) {
    const req = this.requests.get(id);
    if (req) {
      req.status = status;
      req.mimeType = mimeType;
      req.responseHeaders = responseHeaders;
      req.protocol = protocol;
    }
  }
  onDataReceived(id, dataLength, encodedDataLength) {
    const req = this.requests.get(id);
    if (req) {
      req.bytesTransferred += dataLength;
      req.bytesEncoded += encodedDataLength;
    }
  }
  onLoadingFinished(id, encodedDataLength, timestamp) {
    const req = this.requests.get(id);
    if (req) {
      req.bytesEncoded = encodedDataLength;
      req.timing.duration = (timestamp - req.timing.startTime) * 1e3;
      this.completed.push(req);
      this.requests.delete(id);
    }
  }
  onLoadingFailed(id) {
    this.requests.delete(id);
  }
  onServedFromCache(id) {
    const req = this.requests.get(id);
    if (req) req.fromCache = true;
  }
  setParsedKeys(id, keys) {
    const req = this.requests.get(id);
    if (req) req.parsedKeys = keys;
  }
  setAccessedKeys(id, keys) {
    const req = this.requests.get(id);
    if (req) req.accessedKeys = keys;
  }
  getCompletedRequests() {
    return [...this.completed];
  }
  reset() {
    this.requests.clear();
    this.completed = [];
  }
};
var CACHE_BUST_PARAMS = /* @__PURE__ */ new Set(["_t", "_", "v", "cb", "noCache", "nocache", "t", "timestamp"]);
var UrlNormalizer = class {
  static normalize(url) {
    try {
      const parsed = new URL(url);
      const origin = parsed.origin;
      const pathRaw = parsed.pathname;
      const pathPattern = pathRaw.replace(/\/[a-f0-9]{8,}(\b|\/)/g, "/{id}$1").replace(/\/\d+(\b|\/)/g, "/{id}$1");
      const queryParams = new URLSearchParams(parsed.search);
      const sortedEntries = Array.from(queryParams.entries()).filter(([key]) => !CACHE_BUST_PARAMS.has(key.toLowerCase())).sort(([a], [b]) => a.localeCompare(b));
      const sortedQuery = new URLSearchParams(sortedEntries).toString();
      const resourceKey = `${origin}${pathPattern}?${sortedQuery}`;
      return { origin, pathPattern, pathRaw, sortedQuery, resourceKey };
    } catch {
      return { origin: "", pathPattern: url, pathRaw: url, sortedQuery: "", resourceKey: url };
    }
  }
  static matchPattern(url, pattern) {
    const a = this.normalize(url);
    const b = this.normalize(pattern);
    return a.origin === b.origin && a.pathPattern === b.pathPattern;
  }
};
var DuplicateFetchDetector = class {
  name = "duplicate-fetch";
  async onEvent(_event) {
  }
  async finalize(requests) {
    const findings = [];
    const groups = /* @__PURE__ */ new Map();
    for (const req of requests) {
      if (req.method === "OPTIONS") continue;
      const normalized = UrlNormalizer.normalize(req.url);
      const key = `${normalized.resourceKey}-${req.method}`;
      const group = groups.get(key) ?? [];
      group.push(req);
      groups.set(key, group);
    }
    for (const [key, group] of groups) {
      if (group.length < 2) continue;
      const sorted = [...group].sort((a, b) => a.timestamp - b.timestamp);
      for (let i = 0; i < sorted.length - 1; i++) {
        const current = sorted[i];
        const next = sorted[i + 1];
        if (!current || !next) continue;
        if (next.timestamp - current.timestamp < 2e3) {
          const duplicates = group.filter((r) => r.timestamp >= current.timestamp && r.timestamp <= current.timestamp + 2e3);
          findings.push({
            id: createFindingId(this.name, "duplicate_fetch", key),
            module: this.name,
            type: "duplicate_fetch",
            category: "direct_impact",
            severity: duplicates.length > 3 ? "high" : "medium",
            confidence: "high",
            title: `Duplicate fetch: ${key} (${duplicates.length} times in 2s)`,
            description: `The URL ${key} was fetched ${duplicates.length} times within 2 seconds.`,
            observedIn: key,
            evidence: duplicates.map((r) => ({ kind: "har_entry", path: r.id, description: `Request ${r.id} at ${r.timestamp}ms` })),
            metrics: { url: key, count: duplicates.length, windowMs: 2e3 },
            recommendation: "Deduplicate requests using a shared cache or AbortController.",
            scoreImpact: 12
          });
          break;
        }
      }
    }
    return findings;
  }
  async dispose() {
  }
};
var CrossComponentDupDetector = class {
  name = "cross-component-dup";
  async onEvent(_event) {
  }
  async finalize(requests) {
    const findings = [];
    const groups = /* @__PURE__ */ new Map();
    for (const req of requests) {
      if (req.method === "OPTIONS") continue;
      const normalized = UrlNormalizer.normalize(req.url);
      const key = `${normalized.resourceKey}-${req.method}`;
      const group = groups.get(key) ?? [];
      group.push(req);
      groups.set(key, group);
    }
    for (const [key, group] of groups) {
      if (group.length < 2) continue;
      const initiatorKeys = new Set(group.map((r) => {
        var _a, _b, _c;
        return (_c = (_b = (_a = r.initiator) == null ? void 0 : _a.stack) == null ? void 0 : _b[0]) == null ? void 0 : _c.url;
      }).filter(Boolean));
      if (initiatorKeys.size >= 2) {
        const windowMs = 5e3;
        const sorted = [...group].sort((a, b) => a.timestamp - b.timestamp);
        const clusters = [];
        let current = [sorted[0]];
        for (let i = 1; i < sorted.length; i++) {
          const req = sorted[i];
          const prev = sorted[i - 1];
          if (req && prev && req.timestamp - prev.timestamp < windowMs) {
            current.push(req);
          } else {
            if (current.length >= 2) clusters.push(current);
            current = req ? [req] : [];
          }
        }
        if (current.length >= 2) clusters.push(current);
        for (const cluster of clusters) {
          findings.push({
            id: createFindingId(this.name, "cross_component_dup", key),
            module: this.name,
            type: "cross_component_dup",
            category: "direct_impact",
            severity: "medium",
            confidence: "medium",
            title: `Cross-component duplicate fetch: ${key}`,
            description: `The URL ${key} was fetched by ${initiatorKeys.size} different components within 5s.`,
            observedIn: key,
            evidence: cluster.map((r) => {
              var _a, _b, _c;
              return { kind: "har_entry", path: r.id, description: `Request from ${(_c = (_b = (_a = r.initiator) == null ? void 0 : _a.stack) == null ? void 0 : _b[0]) == null ? void 0 : _c.url}` };
            }),
            metrics: { url: key, componentCount: initiatorKeys.size },
            recommendation: "Implement shared data fetching at a higher component level or use a cache like React Query.",
            scoreImpact: 8
          });
        }
      }
    }
    return findings;
  }
  async dispose() {
  }
};
var NPlusOneDetector = class {
  name = "n-plus-one";
  async onEvent(_event) {
  }
  async finalize(requests) {
    const findings = [];
    const fetchRequests = requests.filter((r) => r.method === "GET" && r.mimeType.includes("json"));
    for (const parent of fetchRequests) {
      const parentEnd = parent.timing.startTime + parent.timing.duration;
      const childWindow = 2e3;
      const children = fetchRequests.filter((r) => {
        if (r.id === parent.id) return false;
        return r.timestamp > parentEnd && r.timestamp < parentEnd + childWindow;
      });
      const childPatterns = /* @__PURE__ */ new Map();
      for (const child of children) {
        const normalized = UrlNormalizer.normalize(child.url);
        const pathPattern = normalized.pathPattern;
        const hasIdPattern = pathPattern.includes("{id}") || pathPattern.includes("{uuid}");
        const isParameterized = (pathPattern.match(/\//g) || []).length >= 2;
        if (hasIdPattern || isParameterized) {
          const pattern = `${normalized.origin}${pathPattern}`;
          const group = childPatterns.get(pattern) ?? [];
          group.push(child);
          childPatterns.set(pattern, group);
        }
      }
      for (const [pattern, group] of childPatterns) {
        if (group.length >= 4) {
          findings.push({
            id: createFindingId(this.name, "n_plus_one", `${parent.url}->${pattern}`),
            module: this.name,
            type: "n_plus_one",
            category: "direct_impact",
            severity: "high",
            confidence: "high",
            title: `N+1 pattern: ${parent.url} \u2192 ${pattern} (${group.length} requests)`,
            description: `After fetching ${parent.url}, the app made ${group.length} individual requests matching ${pattern}.`,
            observedIn: parent.url,
            evidence: [{ kind: "har_entry", path: parent.id, description: "Parent request" }, ...group.slice(0, 5).map((r) => ({ kind: "har_entry", path: r.id, description: `Child ${r.id}` }))],
            metrics: { parentRequest: parent.url, childPattern: pattern, childCount: group.length, totalDuration: group.reduce((s, r) => s + r.timing.duration, 0) },
            recommendation: "Use batched fetching (e.g., ?include=profile or /api/users/profiles?ids=...).",
            scoreImpact: 20
          });
        }
      }
    }
    return findings;
  }
  async dispose() {
  }
};
var DependencyGraph = class {
  nodes = /* @__PURE__ */ new Map();
  build(requests) {
    var _a;
    this.nodes.clear();
    for (const req of requests) {
      this.nodes.set(req.id, { request: req, dependsOn: /* @__PURE__ */ new Set(), dependents: /* @__PURE__ */ new Set() });
    }
    for (const req of requests) {
      if (((_a = req.initiator) == null ? void 0 : _a.type) === "parser") continue;
      const parentRequests = requests.filter((r) => r.id !== req.id && r.timing.startTime < req.timing.startTime && r.timing.startTime + r.timing.duration >= req.timing.startTime);
      for (const parent of parentRequests) {
        const parentNode = this.nodes.get(parent.id);
        const node = this.nodes.get(req.id);
        if (parentNode && node) {
          node.dependsOn.add(parent.id);
          parentNode.dependents.add(req.id);
        }
      }
    }
  }
  findLongestChain() {
    const visited = /* @__PURE__ */ new Set();
    const dfs = (id) => {
      if (visited.has(id)) return [];
      visited.add(id);
      const node = this.nodes.get(id);
      if (!node) return [];
      let longest = [];
      for (const depId of node.dependents) {
        const subChain = dfs(depId);
        if (subChain.length > longest.length) longest = subChain;
      }
      return [node.request, ...longest];
    };
    let best = [];
    for (const id of this.nodes.keys()) {
      const c = dfs(id);
      if (c.length > best.length) best = c;
    }
    return best;
  }
  findWaterfalls(minLength = 3) {
    const visited = /* @__PURE__ */ new Set();
    const waterfalls = [];
    const dfs = (id) => {
      if (visited.has(id)) return [];
      visited.add(id);
      const node = this.nodes.get(id);
      if (!node) return [];
      let longest = [];
      for (const depId of node.dependents) {
        const depNode = this.nodes.get(depId);
        if (depNode) {
          const parentEnd = node.request.timing.startTime + node.request.timing.duration;
          const childStart = depNode.request.timing.startTime;
          if (childStart >= parentEnd) {
            const subChain = dfs(depId);
            if (subChain.length > longest.length) longest = subChain;
          }
        }
      }
      return [node.request, ...longest];
    };
    for (const id of this.nodes.keys()) {
      const chain = dfs(id);
      if (chain.length >= minLength) waterfalls.push(chain);
    }
    return waterfalls;
  }
};
var WaterfallDetector = class {
  name = "waterfall";
  async onEvent(_event) {
  }
  async finalize(requests) {
    const findings = [];
    const graph = new DependencyGraph();
    graph.build(requests);
    const waterfalls = graph.findWaterfalls(3);
    for (const chain of waterfalls) {
      const totalDuration = chain.reduce((s, r) => s + r.timing.duration, 0);
      const urls = chain.map((r) => r.url);
      findings.push({
        id: createFindingId(this.name, "waterfall", urls.join("->")),
        module: this.name,
        type: "waterfall",
        category: "direct_impact",
        severity: chain.length > 4 ? "high" : "medium",
        confidence: "medium",
        title: `Request waterfall: ${chain.length} sequential requests`,
        description: `${chain.length} requests were executed sequentially when they could potentially be parallelized.`,
        observedIn: urls[0] ?? "",
        evidence: chain.map((r) => ({ kind: "har_entry", path: r.id, description: r.url })),
        metrics: { chainLength: chain.length, totalDuration, urls },
        recommendation: "Evaluate whether these requests can be parallelized or combined into a single batched request.",
        scoreImpact: 15
      });
    }
    return findings;
  }
  async dispose() {
  }
};
var CriticalPathDetector = class {
  name = "critical-path";
  async onEvent(_event) {
  }
  async finalize(requests) {
    var _a;
    const graph = new DependencyGraph();
    graph.build(requests);
    const chain = graph.findLongestChain();
    if (chain.length === 0) return [];
    const totalDuration = chain.reduce((s, r) => s + r.timing.duration, 0);
    return [{
      id: createFindingId(this.name, "critical_path", "root"),
      module: this.name,
      type: "direct_impact",
      category: "direct_impact",
      severity: "low",
      confidence: "medium",
      title: `Critical path: ${chain.length} requests, ${Math.round(totalDuration)}ms total`,
      description: `The longest request dependency chain has ${chain.length} steps totaling ${Math.round(totalDuration)}ms.`,
      observedIn: ((_a = chain[0]) == null ? void 0 : _a.url) ?? "",
      evidence: chain.map((r) => ({ kind: "har_entry", path: r.id, description: r.url })),
      metrics: { chainLength: chain.length, totalDuration },
      recommendation: "Reduce the critical path by parallelizing independent requests or inlining critical data.",
      scoreImpact: 5
    }];
  }
  async dispose() {
  }
};
var OverFetchDetector = class {
  name = "overfetch";
  async onEvent(_event) {
  }
  async finalize(requests) {
    const findings = [];
    for (const req of requests) {
      if (!req.parsedKeys || req.parsedKeys.length === 0) continue;
      if (req.bytesTransferred < 5e3) continue;
      const parsedSet = new Set(req.parsedKeys);
      const accessedSet = new Set(req.accessedKeys ?? []);
      const unusedKeys = [...parsedSet].filter((k) => !accessedSet.has(k));
      const unusedRatio = unusedKeys.length / parsedSet.length;
      if (unusedRatio > 0.3) {
        findings.push({
          id: createFindingId(this.name, "overfetch", req.url),
          module: this.name,
          type: "overfetch",
          category: "direct_impact",
          severity: unusedRatio > 0.7 ? "high" : "medium",
          confidence: "medium",
          title: `Over-fetching on ${req.url}: ${Math.round(unusedRatio * 100)}% unused`,
          description: `${Math.round(unusedRatio * 100)}% of response keys were parsed but never accessed. ${unusedKeys.length} of ${parsedSet.size} keys.`,
          observedIn: req.url,
          evidence: [{ kind: "har_entry", path: req.id, description: `${req.bytesTransferred} bytes, ${parsedSet.size} keys` }],
          metrics: { url: req.url, parsedKeys: parsedSet.size, accessedKeys: accessedSet.size, unusedKeys: unusedKeys.length, unusedRatio, responseSize: req.bytesTransferred },
          recommendation: "Request only the fields you need. Consider implementing GraphQL or field selection parameters.",
          scoreImpact: 8
        });
      }
    }
    return findings;
  }
  async dispose() {
  }
};
var UnderPaginateDetector = class {
  name = "under-paginate";
  async onEvent(_event) {
  }
  async finalize(requests) {
    const findings = [];
    for (const req of requests) {
      if (req.method !== "GET" || !req.mimeType.includes("json")) continue;
      if (req.bytesTransferred > 1e6) {
        findings.push({
          id: createFindingId(this.name, "under_paginate", req.url),
          module: this.name,
          type: "under_paginate",
          category: "direct_impact",
          severity: "high",
          confidence: "medium",
          title: `Under-pagination: ${req.url} returned ${Math.round(req.bytesTransferred / 1024)}KB`,
          description: `Response exceeded 1MB without pagination. This suggests the API returns all records in a single response.`,
          observedIn: req.url,
          evidence: [{ kind: "har_entry", path: req.id, description: `${Math.round(req.bytesTransferred / 1024)}KB response` }],
          metrics: { url: req.url, responseSize: req.bytesTransferred },
          recommendation: "Implement cursor-based or offset pagination. For chronological data, use cursor pagination.",
          scoreImpact: 8
        });
      }
    }
    return findings;
  }
  async dispose() {
  }
};
var CompressionDetector = class {
  name = "compression";
  async onEvent(_event) {
  }
  async finalize(requests) {
    var _a;
    const findings = [];
    const TEXT_TYPES = ["text/", "application/json", "application/javascript", "application/xml", "text/html"];
    for (const req of requests) {
      if (req.bytesTransferred < 1e4) continue;
      const isText = TEXT_TYPES.some((t) => req.mimeType.startsWith(t));
      if (!isText) continue;
      const encoding = ((_a = req.responseHeaders["content-encoding"]) == null ? void 0 : _a.toLowerCase()) ?? "";
      if (["gzip", "br", "deflate", "zstd"].includes(encoding)) continue;
      findings.push({
        id: createFindingId(this.name, "no_compression", req.url),
        module: this.name,
        type: "no_compression",
        category: "direct_impact",
        severity: req.bytesTransferred > 1e5 ? "high" : "medium",
        confidence: "high",
        title: `Missing compression: ${req.url} (${Math.round(req.bytesTransferred / 1024)}KB)`,
        description: `Response is ${Math.round(req.bytesTransferred / 1024)}KB without compression (gzip/br).`,
        observedIn: req.url,
        evidence: [{ kind: "har_entry", path: req.id, description: `Uncompressed ${req.mimeType}` }],
        metrics: { url: req.url, size: req.bytesTransferred, mimeType: req.mimeType },
        recommendation: "Enable gzip or Brotli compression on the server for text-based responses.",
        scoreImpact: 15
      });
    }
    return findings;
  }
  async dispose() {
  }
};
var CacheHeadersDetector = class {
  name = "cache-headers";
  async onEvent(_event) {
  }
  async finalize(requests) {
    var _a;
    const findings = [];
    const CACHEABLE_TYPES = ["image/", "font/", "application/javascript", "text/css", "application/json"];
    for (const req of requests) {
      if (req.method !== "GET" || ![200, 203, 300].includes(req.status)) continue;
      const isCacheable = CACHEABLE_TYPES.some((t) => req.mimeType.startsWith(t));
      if (!isCacheable) continue;
      const cc = ((_a = req.responseHeaders["cache-control"]) == null ? void 0 : _a.toLowerCase()) ?? "";
      const hasEtag = !!req.responseHeaders["etag"] || !!req.responseHeaders["last-modified"];
      const isApiPath = req.url.includes("/api/");
      if (!cc && !hasEtag) {
        findings.push({
          id: createFindingId(this.name, "no_cache_headers", req.url),
          module: this.name,
          type: "no_cache_headers",
          category: "direct_impact",
          severity: isApiPath ? "medium" : "high",
          confidence: "high",
          title: `Missing cache headers: ${req.url}`,
          description: `Cacheable response (${req.mimeType}) has no Cache-Control or ETag headers.`,
          observedIn: req.url,
          evidence: [{ kind: "har_entry", path: req.id, description: `No cache headers for ${req.mimeType}` }],
          metrics: { url: req.url, mimeType: req.mimeType, isApi: isApiPath },
          recommendation: isApiPath ? "Consider adding short cache headers (e.g., Cache-Control: max-age=60) for stable API responses." : "Add Cache-Control and ETag headers for cacheable static assets.",
          scoreImpact: 8
        });
      }
    }
    return findings;
  }
  async dispose() {
  }
};
var HttpVersionDetector = class {
  name = "http-version";
  async onEvent(_event) {
  }
  async finalize(requests) {
    const findings = [];
    const origins = /* @__PURE__ */ new Map();
    for (const req of requests) {
      try {
        const origin = new URL(req.url).origin;
        const stats = origins.get(origin) ?? { h1: 0, h2: 0, h3: 0 };
        const proto = req.protocol.toLowerCase();
        if (proto === "h2") stats.h2++;
        else if (proto === "h3") stats.h3++;
        else stats.h1++;
        origins.set(origin, stats);
      } catch {
      }
    }
    for (const [origin, stats] of origins) {
      if (stats.h1 > 5) {
        findings.push({
          id: createFindingId(this.name, "http_version", origin),
          module: this.name,
          type: "http_version",
          category: "theoretical_debt",
          severity: "medium",
          confidence: "high",
          title: `HTTP/1.1 on ${origin} (${stats.h1} requests)`,
          description: `${stats.h1} requests to ${origin} used HTTP/1.1, missing out on multiplexing benefits.`,
          observedIn: origin,
          evidence: [{ kind: "har_entry", path: "", description: `${stats.h1} HTTP/1.1 requests` }],
          metrics: { origin, h1: stats.h1, h2: stats.h2, h3: stats.h3 },
          recommendation: "Upgrade the origin to HTTP/2 or HTTP/3 for multiplexed connections and header compression.",
          scoreImpact: 5
        });
      }
    }
    return findings;
  }
  async dispose() {
  }
};
var OriginCountDetector = class {
  name = "origin-count";
  async onEvent(_event) {
  }
  async finalize(requests) {
    const findings = [];
    const origins = /* @__PURE__ */ new Set();
    for (const req of requests) {
      try {
        origins.add(new URL(req.url).origin);
      } catch {
      }
    }
    if (origins.size > 10) {
      findings.push({
        id: createFindingId(this.name, "excessive_origins", "audit"),
        module: this.name,
        type: "excessive_origins",
        category: "direct_impact",
        severity: "medium",
        confidence: "high",
        title: `Excessive origins: ${origins.size} distinct origins`,
        description: `The page loads from ${origins.size} distinct origins. Each origin requires separate DNS + TLS handshakes.`,
        observedIn: "audit",
        evidence: [{ kind: "har_entry", path: "", description: `${origins.size} origins` }],
        metrics: { originCount: origins.size, origins: [...origins] },
        recommendation: "Consolidate origins and use preconnect hints for required third-party origins.",
        scoreImpact: 5
      });
    }
    return findings;
  }
  async dispose() {
  }
};
var InfiniteRefetchDetector = class {
  name = "infinite-refetch";
  async onEvent(_event) {
  }
  async finalize(requests) {
    const findings = [];
    const counts = /* @__PURE__ */ new Map();
    for (const req of requests) {
      if (req.method === "OPTIONS") continue;
      const normalized = UrlNormalizer.normalize(req.url);
      const key = `${normalized.origin}${normalized.pathPattern}`;
      const group = counts.get(key) ?? [];
      group.push(req);
      counts.set(key, group);
    }
    for (const [pattern, group] of counts) {
      if (group.length < 3) continue;
      const severity = group.length >= 10 ? "critical" : group.length >= 6 ? "high" : "medium";
      findings.push({
        id: createFindingId(this.name, "infinite_refetch", pattern),
        module: "proxy",
        type: "infinite_refetch",
        category: "direct_impact",
        severity,
        confidence: "high",
        title: `Infinite re-fetch: ${pattern} called ${group.length} times`,
        description: `The endpoint "${pattern}" was fetched ${group.length} times during the audit. This pattern is characteristic of a useEffect with missing or unstable dependencies causing an infinite fetch loop.`,
        observedIn: pattern,
        evidence: group.slice(0, 5).map((r) => ({
          kind: "har_entry",
          path: r.id,
          description: `Fetch ${r.id} at t=${Math.round(r.timestamp)}ms`
        })),
        metrics: { url: pattern, count: group.length },
        recommendation: "Audit useEffect dependencies. Stabilize object/array deps with useMemo or useRef. Use React Query or SWR for data fetching to avoid manual effect-based fetching.",
        scoreImpact: 18
      });
    }
    return findings;
  }
  async dispose() {
  }
};
var JSON_PARSE_TAP = `
(function() {
  if (window.__vibeJsonTapInjected) return;
  window.__vibeJsonTapInjected = true;

  var originalParse = JSON.parse;
  var originalJson = Response.prototype.json;

  function collectAllKeys(obj, path) {
    var keys = [];
    if (obj === null || typeof obj !== 'object') return keys;
    if (Array.isArray(obj)) {
      for (var i = 0; i < Math.min(obj.length, 10); i++) {
        keys.push.apply(keys, collectAllKeys(obj[i], path + '[' + i + ']'));
      }
      return keys;
    }
    for (var k in obj) {
      if (obj.hasOwnProperty(k)) {
        keys.push(path + '.' + k);
        keys.push.apply(keys, collectAllKeys(obj[k], path + '.' + k));
      }
    }
    return keys;
  }

  var idCounter = 0;
  var idMap = new WeakMap();

  var originalFetch = window.fetch;
  window.fetch = function(input, init) {
    var id = 'vibe-fetch-' + (++idCounter);
    var result = originalFetch.apply(this, arguments);
    result.then(function(resp) {
      idMap.set(resp, id);
      resp.__vibeRequestId = id;
    }).catch(function() {});
    return result;
  };

  Response.prototype.json = function() {
    var id = idMap.get(this) || 'unknown-' + (++idCounter);
    var p = originalJson.call(this);
    var self = this;
    return p.then(function(data) {
      var allKeys = collectAllKeys(data, '$');
      if (window.__VIBE_PARSED__) {
        window.__VIBE_PARSED__(id, allKeys);
      }
      return proxyTrack(data, '$', id);
    });
  };

  function proxyTrack(obj, path, id) {
    if (obj === null || typeof obj !== 'object' || obj instanceof Date) return obj;
    if (Array.isArray(obj)) {
      return obj.map(function(item, i) { return proxyTrack(item, path + '[' + i + ']', id); });
    }
    return new Proxy(obj, {
      get: function(target, prop) {
        if (typeof prop === 'string' && window.__VIBE_KEY_ACCESS__) {
          window.__VIBE_KEY_ACCESS__(id, path + '.' + prop);
        }
        var value = target[prop];
        return (typeof value === 'object' && value !== null) ? proxyTrack(value, path + '.' + prop, id) : value;
      }
    });
  }
})();
`;
var ProxyModule = class {
  name = "proxy";
  weight = 18;
  recorder = new NetworkRecorder();
  detectors = [];
  getRecorder() {
    return this.recorder;
  }
  async initialize(ctx) {
    this.detectors = [
      new DuplicateFetchDetector(),
      new CrossComponentDupDetector(),
      new NPlusOneDetector(),
      new WaterfallDetector(),
      new CriticalPathDetector(),
      new OverFetchDetector(),
      new UnderPaginateDetector(),
      new CompressionDetector(),
      new CacheHeadersDetector(),
      new HttpVersionDetector(),
      new OriginCountDetector(),
      new InfiniteRefetchDetector()
    ];
    try {
      await ctx.page.context().addInitScript(JSON_PARSE_TAP);
    } catch (err) {
      ctx.logger.warn({ err }, "Failed to inject JSON parse tap");
    }
    return ok(void 0);
  }
  async onEvent(event) {
    if (event.type === "network.request") {
      this.recorder.onRequestStart(event.requestId, event.url, event.method, event.resourceType, {}, { type: "other" }, event.timestamp);
    }
    if (event.type === "network.response") {
      this.recorder.onResponse(event.requestId, event.status, event.mimeType, {}, "http/1.1", event.timestamp);
    }
    await Promise.all(this.detectors.map((d) => d.onEvent(event)));
  }
  async finalize() {
    const requests = this.recorder.getCompletedRequests();
    const all = await Promise.all(this.detectors.map((d) => d.finalize(requests)));
    return all.flat();
  }
  async dispose() {
    this.recorder.reset();
  }
};

// packages/asset-inspector/dist/index.js
var DEVICE_PIXEL_RATIO = 2;
var OversizedImageDetector = class {
  static name = "oversized-image";
  finalize(images) {
    const findings = [];
    for (const img of images) {
      if (!Number.isFinite(img.renderedWidth) || !Number.isFinite(img.renderedHeight) || img.renderedWidth < 1 || img.renderedHeight < 1) continue;
      const targetWidth = img.renderedWidth * DEVICE_PIXEL_RATIO;
      const targetHeight = img.renderedHeight * DEVICE_PIXEL_RATIO;
      const excessWidth = img.naturalWidth - targetWidth;
      const excessHeight = img.naturalHeight - targetHeight;
      if (excessWidth <= targetWidth * 0.5 && excessHeight <= targetHeight * 0.5) continue;
      if (!Number.isFinite(excessWidth) || !Number.isFinite(excessHeight)) continue;
      const name = img.url.split("/").pop() ?? img.url;
      const maxExcessRatio = Math.max(
        img.naturalWidth / targetWidth,
        img.naturalHeight / targetHeight
      );
      if (!Number.isFinite(maxExcessRatio)) continue;
      let severity = "low";
      if (maxExcessRatio > 4) severity = "high";
      else if (maxExcessRatio > 2) severity = "medium";
      findings.push({
        id: createFindingId("asset-inspector", "oversized_image", img.url),
        module: "asset-inspector",
        type: "oversized_image",
        category: "direct_impact",
        severity,
        confidence: "high",
        title: `Oversized image: ${name} (${img.naturalWidth}\xD7${img.naturalHeight} \u2192 ${Math.round(img.renderedWidth)}\xD7${Math.round(img.renderedHeight)})`,
        description: `${name}: natural ${img.naturalWidth}\xD7${img.naturalHeight}px, rendered ${Math.round(img.renderedWidth)}\xD7${Math.round(img.renderedHeight)}px \u2014 excess of ${Math.round(excessWidth)}\xD7${Math.round(excessHeight)}px. Serving the full-size image wastes bandwidth and decode time.`,
        observedIn: `<img src="${name}"> \xB7 rendered ${Math.round(img.renderedWidth)}\xD7${Math.round(img.renderedHeight)}px`,
        evidence: [{
          kind: "har_entry",
          path: img.url,
          description: `${name}: natural ${img.naturalWidth}x${img.naturalHeight} rendered ${Math.round(img.renderedWidth)}x${Math.round(img.renderedHeight)} \u2014 excess ${Math.round(excessWidth)}x${Math.round(excessHeight)}px`
        }],
        metrics: {
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight,
          renderedWidth: img.renderedWidth,
          renderedHeight: img.renderedHeight,
          excessWidth: Math.round(excessWidth),
          excessHeight: Math.round(excessHeight)
        },
        recommendation: `Resize ${name} to ${Math.round(targetWidth)}\xD7${Math.round(targetHeight)}px to eliminate waste.`,
        scoreImpact: 12
      });
    }
    return findings;
  }
};
function estimateFormatSavings(mimeType, transferSize) {
  if (mimeType.includes("jpeg") || mimeType.includes("jpg")) {
    return {
      webpBytes: Math.round(transferSize * 0.7),
      avifBytes: Math.round(transferSize * 0.6),
      savingsPercent: 35
      // average of the two
    };
  }
  if (mimeType.includes("png")) {
    return {
      webpBytes: Math.round(transferSize * 0.65),
      avifBytes: Math.round(transferSize * 0.55),
      savingsPercent: 40
      // average of the two
    };
  }
  return {
    webpBytes: transferSize,
    avifBytes: transferSize,
    savingsPercent: 0
  };
}
var ImageFormatDetector = class {
  static name = "image-format";
  finalize(images) {
    const findings = [];
    for (const img of images) {
      if (!img.mimeType.includes("jpeg") && !img.mimeType.includes("jpg") && !img.mimeType.includes("png")) {
        continue;
      }
      if (img.transferSize < 30 * 1024) {
        continue;
      }
      const estimate = estimateFormatSavings(img.mimeType, img.transferSize);
      if (estimate.savingsPercent > 30) {
        const avgSavings = Math.round((img.transferSize - (estimate.webpBytes + estimate.avifBytes) / 2) / 1024);
        findings.push({
          id: createFindingId("asset-inspector", "wrong_format", img.url),
          module: "asset-inspector",
          type: "wrong_format",
          category: "direct_impact",
          severity: avgSavings > 100 ? "high" : avgSavings > 50 ? "medium" : "low",
          confidence: "medium",
          title: `Image format inefficiency: ${img.url.split("/").pop()}`,
          description: `${img.mimeType.toUpperCase()} image could save ~${avgSavings}KB by converting to WebP or AVIF.`,
          observedIn: img.url,
          evidence: [{
            kind: "har_entry",
            path: img.url,
            description: `${Math.round(img.transferSize / 1024)}KB ${img.mimeType} \u2014 estimated WebP: ${Math.round(estimate.webpBytes / 1024)}KB, AVIF: ${Math.round(estimate.avifBytes / 1024)}KB`
          }],
          metrics: {
            originalBytes: img.transferSize,
            estimatedWebPBytes: estimate.webpBytes,
            estimatedAVIFBytes: estimate.avifBytes,
            estimatedSavingsPercent: estimate.savingsPercent,
            estimatedSavingsKB: avgSavings
          },
          recommendation: `Convert this image to WebP (~${Math.round(estimate.webpBytes / 1024)}KB) or AVIF (~${Math.round(estimate.avifBytes / 1024)}KB) format for better compression. Provide fallback for older browsers.`,
          scoreImpact: 6
        });
      }
    }
    return findings;
  }
};
var LazyLoadImageDetector = class {
  static name = "lazy-load";
  finalize(images) {
    const findings = [];
    for (const img of images) {
      if (img.belowFold && !img.hasLazy && !img.isLcp) {
        findings.push({
          id: createFindingId("asset-inspector", "no_lazy", img.url),
          module: "asset-inspector",
          type: "no_lazy",
          category: "direct_impact",
          severity: "medium",
          confidence: "high",
          title: `Image below fold not lazy-loaded: ${img.url.split("/").pop()}`,
          description: `This image is below the fold but not using lazy loading. Consider adding loading="lazy" to defer its loading.`,
          observedIn: img.url,
          evidence: [{
            kind: "console_log",
            path: img.url,
            selector: img.url,
            description: `Image is below fold (getBoundingClientRect.top > innerHeight) without loading="lazy"`
          }],
          metrics: {},
          recommendation: `Add loading="lazy" attribute to this <img> tag to defer loading until the image is near the viewport.`,
          scoreImpact: 12
        });
      }
    }
    return findings;
  }
};
var LCPPriorityDetector = class {
  static name = "lcp-priority";
  finalize(images, lcpTime) {
    const findings = [];
    const lcpImage = images.find((img) => img.isLcp);
    if (!lcpImage) {
      return findings;
    }
    if (lcpTime > 2e3 && !lcpImage.hasFetchPriority) {
      findings.push({
        id: createFindingId("asset-inspector", "bad_lcp_priority", lcpImage.url),
        module: "asset-inspector",
        type: "bad_lcp_priority",
        category: "direct_impact",
        severity: "high",
        confidence: "high",
        title: `LCP image not prioritized`,
        description: `The Largest Contentful Paint (LCP) image loads in ${Math.round(lcpTime)}ms without high fetch priority. Consider adding fetchpriority="high" or a link preload.`,
        observedIn: lcpImage.url,
        evidence: [{
          kind: "console_log",
          path: lcpImage.url,
          description: `LCP entry observed at ${Math.round(lcpTime)}ms; fetchpriority="high" not set on this image`
        }],
        metrics: { lcpTimeMs: Math.round(lcpTime) },
        recommendation: `Add fetchpriority="high" to the <img> tag or use <link rel="preload" as="image" href="${lcpImage.url}" fetchpriority="high"> to prioritize loading.`,
        scoreImpact: 1
      });
    }
    return findings;
  }
};
var CLSContributorDetector = class {
  static name = "cls-contributor";
  finalize(images, clsValue) {
    const findings = [];
    if (clsValue <= 0.1) {
      return findings;
    }
    for (const img of images) {
      if (img.naturalHeight <= 0) continue;
      if (!img.hasWidthHeight && !img.hasAspectRatio) {
        findings.push({
          id: createFindingId("asset-inspector", "img_cls", img.url),
          module: "asset-inspector",
          type: "img_cls",
          category: "direct_impact",
          severity: "medium",
          confidence: "medium",
          title: `Image without dimensions contributing to CLS: ${img.url.split("/").pop()}`,
          description: `This image (${img.naturalWidth}x${img.naturalHeight}) lacks width/height or aspect-ratio attributes, likely contributing to layout shifts.`,
          observedIn: img.url,
          evidence: [{
            kind: "console_log",
            path: img.url,
            description: `CLS = ${clsValue.toFixed(3)}; image missing width/height and aspect-ratio attributes`
          }],
          metrics: { clsValue: parseFloat(clsValue.toFixed(3)) },
          recommendation: `Add width="${img.naturalWidth}" height="${img.naturalHeight}" or CSS aspect-ratio: ${(img.naturalWidth / img.naturalHeight).toFixed(2)} to reserve space and prevent shifts.`,
          scoreImpact: 1
        });
      }
    }
    return findings;
  }
};
var LAYOUT_TRIGGERING_PROPS = ["top", "left", "right", "bottom", "width", "height", "margin", "padding", "font-size", "border-width"];
var LayoutAnimationDetector = class {
  static name = "layout-animations";
  finalize(animations) {
    const findings = [];
    for (const anim of animations) {
      if (LAYOUT_TRIGGERING_PROPS.includes(anim.property)) {
        findings.push({
          id: createFindingId("asset-inspector", "layout_animation", anim.animationName),
          module: "asset-inspector",
          type: "layout_animation",
          category: "theoretical_debt",
          severity: "medium",
          confidence: "high",
          title: `Layout-triggering animation: ${anim.animationName}`,
          description: `Animation "${anim.animationName}" animates "${anim.property}", which triggers layout recalculation on every frame. This causes performance issues.`,
          observedIn: anim.selector,
          evidence: [{
            kind: "console_log",
            path: "",
            selector: anim.selector,
            description: `getComputedStyle(${anim.selector}).transitionProperty includes "${anim.property}" (layout-triggering)`
          }],
          metrics: { property: anim.property },
          recommendation: `Use transform or opacity animations instead. For ${anim.property}, consider using transform: translate, scale, or rotate. Or use will-change: transform sparingly.`,
          scoreImpact: 8
        });
      }
    }
    return findings;
  }
};
var WillChangeDetector = class {
  static name = "will-change-spam";
  finalize(willChangeCount) {
    const findings = [];
    if (willChangeCount > 20) {
      let severity = "low";
      if (willChangeCount > 100) severity = "high";
      else if (willChangeCount > 50) severity = "medium";
      findings.push({
        id: createFindingId("asset-inspector", "will_change_spam", "page"),
        module: "asset-inspector",
        type: "will_change_spam",
        category: "theoretical_debt",
        severity,
        confidence: "high",
        title: `Excessive will-change usage: ${willChangeCount} elements`,
        description: `Found ${willChangeCount} elements with will-change property set. Over-using will-change creates render layer overhead and reduces performance.`,
        observedIn: "document",
        evidence: [{
          kind: "console_log",
          path: "",
          description: `getComputedStyle scan: ${willChangeCount} elements have will-change !== "auto"`
        }],
        metrics: { elementCount: willChangeCount },
        recommendation: `Reduce will-change usage to only elements that actually animate or transform. Typical pages should use will-change on < 10 elements. Consider using it only in JavaScript during active animations, then removing it.`,
        scoreImpact: 6
      });
    }
    return findings;
  }
};
var BlockingCSSDetector = class {
  static name = "blocking-css";
  finalize(stylesheets, auditUrl) {
    const findings = [];
    if (auditUrl && (auditUrl.includes("localhost") || auditUrl.includes("127.0.0.1"))) {
      return [];
    }
    for (const sheet of stylesheets) {
      if (!sheet.isRenderBlocking) continue;
      if (sheet.url.includes("fonts.googleapis.com") || sheet.url.includes("fonts.gstatic.com")) continue;
      if (sheet.url.includes("/@vite/") || sheet.url.includes("@vite/client") || sheet.url.includes("webpack-dev-server") || sheet.url.includes("/@fs/")) continue;
      let severity = "low";
      if (sheet.transferSize > 50 * 1024) {
        severity = "high";
      } else if (sheet.transferSize > 10 * 1024) {
        severity = "medium";
      }
      findings.push({
        id: createFindingId("asset-inspector", "blocking_css", sheet.url),
        module: "asset-inspector",
        type: "blocking_css",
        category: "direct_impact",
        severity,
        confidence: "high",
        title: `Render-blocking stylesheet: ${sheet.url.split("/").pop()}`,
        description: `${Math.round(sheet.transferSize / 1024)}KB stylesheet blocks rendering. Consider using critical CSS or media queries to unblock the page.`,
        observedIn: sheet.url,
        evidence: [{
          kind: "har_entry",
          path: sheet.url,
          description: `${Math.round(sheet.transferSize / 1024)}KB stylesheet in <head> with media="${sheet.mediaAttr || "all"}" \u2014 blocks first render`
        }],
        metrics: { sizeKB: Math.round(sheet.transferSize / 1024) },
        recommendation: `Inline critical CSS, defer non-critical styles using media queries or rel="print", or use a critical CSS extractor. Keep above-the-fold CSS < 14KB.`,
        scoreImpact: 15
      });
    }
    return findings;
  }
};
var UnusedCSSDetector = class {
  static name = "unused-css";
  finalize(stylesheets) {
    const findings = [];
    for (const sheet of stylesheets) {
      const unused = sheet.totalBytes - sheet.usedBytes;
      if (unused > 50 * 1024 && sheet.totalBytes > 0 && sheet.usedBytes / sheet.totalBytes < 0.3) {
        findings.push({
          id: createFindingId("asset-inspector", "unused_css", sheet.url),
          module: "asset-inspector",
          type: "unused_css",
          category: "theoretical_debt",
          severity: unused > 200 * 1024 ? "high" : unused > 100 * 1024 ? "medium" : "low",
          confidence: "medium",
          title: `Unused CSS: ${sheet.url.split("/").pop()}`,
          description: `${Math.round(unused / 1024)}KB of ${Math.round(sheet.totalBytes / 1024)}KB CSS is unused. Only ${(sheet.usedBytes / sheet.totalBytes * 100).toFixed(0)}% of this stylesheet is actually used on the page.`,
          observedIn: sheet.url,
          evidence: [{
            kind: "cdp_trace",
            path: sheet.url,
            description: `CSS.stopRuleUsageTracking: ${sheet.usedBytes} of ${sheet.totalBytes} bytes used (${(sheet.usedBytes / sheet.totalBytes * 100).toFixed(0)}%)`
          }],
          metrics: {
            unusedBytes: unused,
            totalBytes: sheet.totalBytes,
            usedRatio: parseFloat((sheet.usedBytes / sheet.totalBytes).toFixed(2))
          },
          recommendation: `Review and remove unused CSS. Consider splitting critical styles from optional ones. Use PurgeCSS, Tailwind, or similar tools to automatically remove unused styles.`,
          scoreImpact: 6
        });
      }
    }
    return findings;
  }
};
var SyncScriptDetector = class {
  static name = "sync-script";
  isDevToolScript(url) {
    if (url.includes("/@vite/") || url.includes("@vite/client") || url.includes("@react-refresh") || url.includes("webpack-dev-server") || url.includes("webpack-hmr") || url.includes("hot-update") || url.includes(".vite/deps/") || url.includes("/@fs/")) return true;
    const pathOnly = url.split("?")[0] ?? "";
    if (/\.(tsx?|jsx?)$/.test(pathOnly)) return true;
    if (/[?&]t=\d+/.test(url)) return true;
    return false;
  }
  finalize(scripts) {
    const findings = [];
    const seenUrls = /* @__PURE__ */ new Set();
    for (const script of scripts) {
      if (seenUrls.has(script.url)) continue;
      seenUrls.add(script.url);
      if (this.isDevToolScript(script.url)) continue;
      if (script.hasAsync || script.hasDefer || script.isModule) {
        continue;
      }
      let severity = "medium";
      if (script.isThirdParty) {
        severity = "high";
      }
      const filename = script.url.split("/").pop() ?? script.url;
      const location = script.inHead ? "in <head>" : "in <body>";
      const attr = script.isThirdParty ? "async" : "defer";
      findings.push({
        id: createFindingId("asset-inspector", "sync_script", script.url),
        module: "asset-inspector",
        type: "sync_script",
        category: "direct_impact",
        severity,
        confidence: "high",
        title: `Sync script blocks parsing: ${filename} (${location})`,
        description: `<script src="${filename}"> ${location} has no async or defer \u2014 it pauses HTML parsing until the script downloads and executes.${script.isThirdParty ? " Third-party scripts without async are especially risky because their load time is outside your control." : ""}`,
        observedIn: `${location} \xB7 ${script.url}`,
        evidence: [{
          kind: "console_log",
          path: script.url,
          description: `<script src="${filename}"> found ${location} \u2014 neither async nor defer attribute present`
        }],
        metrics: { sizeKB: Math.round(script.transferSize / 1024), isThirdParty: script.isThirdParty ? 1 : 0, inHead: script.inHead ? 1 : 0 },
        recommendation: `Add \`${attr}\` to the <script> tag ${location}: <script src="${filename}" ${attr}>. ${script.inHead ? `Move it before </head> or to end of <body> if possible.` : `This tag is already in <body> \u2014 adding defer is the minimal fix.`}`,
        scoreImpact: 15
      });
    }
    return findings;
  }
};
var BundleSizeDetector = class {
  static name = "bundle-size";
  isDevToolScript(url) {
    return url.includes("/@vite/") || url.includes("@vite/client") || url.includes("@react-refresh") || url.includes("webpack-dev-server") || url.includes("webpack-hmr") || url.includes("hot-update") || url.includes(".vite/deps/") || url.includes("/@fs/");
  }
  finalize(scripts) {
    const findings = [];
    const appScripts = scripts.filter((s) => !this.isDevToolScript(s.url));
    const totalJS = appScripts.reduce((sum, s) => sum + s.transferSize, 0);
    if (totalJS > 250 * 1024) {
      let severity = "low";
      let scoreImpact = 10;
      if (totalJS > 1e3 * 1024) {
        severity = "high";
        scoreImpact = 20;
      } else if (totalJS > 500 * 1024) {
        severity = "medium";
        scoreImpact = 20;
      }
      const largeScripts = appScripts.filter((s) => s.transferSize > 100 * 1024);
      const evidence = largeScripts.map((s) => `${s.url.split("/").pop()}: ${Math.round(s.transferSize / 1024)}KB`);
      findings.push({
        id: createFindingId("asset-inspector", "oversized_bundle", "page"),
        module: "asset-inspector",
        type: "oversized_bundle",
        category: "direct_impact",
        severity,
        confidence: "high",
        title: `Large JavaScript bundle: ${Math.round(totalJS / 1024)}KB total`,
        description: `Total JavaScript is ${Math.round(totalJS / 1024)}KB. ${largeScripts.length} script(s) exceed 100KB. Large bundles slow page load on slow networks.`,
        observedIn: "page",
        evidence: largeScripts.map((s) => ({
          kind: "har_entry",
          path: s.url,
          description: `${s.url.split("/").pop()}: ${Math.round(s.transferSize / 1024)}KB transferred`
        })),
        metrics: {
          totalJSKB: Math.round(totalJS / 1024),
          scriptCount: scripts.length,
          largeScriptCount: largeScripts.length,
          largeScripts: evidence
        },
        recommendation: `Reduce JavaScript bundle size through code splitting, tree shaking, or removing unused dependencies. Aim for < 250KB total, < 100KB per route.`,
        scoreImpact
      });
    }
    return findings;
  }
};
function detectLibraries(bundleText, signatures) {
  const detected = [];
  for (const sig of signatures) {
    let matches = 0;
    for (const fingerprint of sig.fingerprints) {
      if (bundleText.includes(fingerprint)) {
        matches++;
      }
    }
    if (matches >= 2) {
      detected.push({ name: sig.name, urls: [] });
    }
  }
  return detected;
}
var DuplicateLibsDetector = class {
  static name = "duplicate-libs";
  finalize(scripts, signatures) {
    const findings = [];
    const libsByName = /* @__PURE__ */ new Map();
    for (const script of scripts) {
      if (!script.body) {
        continue;
      }
      const detected = detectLibraries(script.body, signatures);
      for (const lib of detected) {
        const urls = libsByName.get(lib.name) || [];
        urls.push(script.url);
        libsByName.set(lib.name, urls);
      }
    }
    for (const [libName, urls] of libsByName) {
      if (urls.length > 1) {
        findings.push({
          id: createFindingId("asset-inspector", "duplicate_lib", libName),
          module: "asset-inspector",
          type: "duplicate_lib",
          category: "theoretical_debt",
          severity: "medium",
          confidence: "medium",
          title: `Duplicate library: ${libName} in ${urls.length} bundles`,
          description: `Library "${libName}" appears in ${urls.length} different bundles, increasing page weight unnecessarily.`,
          observedIn: urls[0],
          evidence: urls.map((u) => ({
            kind: "har_entry",
            path: u,
            description: `"${libName}" signature detected in ${u.split("/").pop()}`
          })),
          metrics: { libraryName: libName, bundleCount: urls.length, bundles: urls },
          recommendation: `Deduplicate "${libName}" across bundles. Extract it to a shared vendor bundle or consolidate into a single entry point.`,
          scoreImpact: 1
        });
      }
    }
    return findings;
  }
};
var FULL_LODASH_SIGS = ["_.chain", "_.range", "_.partition", "_.groupBy"];
var FULL_MOMENT_SIGS = ["moment.locale", "moment.utcOffset", "moment.isoWeekday"];
var TreeShakingDetector = class {
  static name = "tree-shaking";
  finalize(scripts) {
    const findings = [];
    for (const script of scripts) {
      if (!script.body) {
        continue;
      }
      const lodashMatches = FULL_LODASH_SIGS.filter((sig) => script.body.includes(sig)).length;
      if (lodashMatches === FULL_LODASH_SIGS.length) {
        findings.push({
          id: createFindingId("asset-inspector", "tree_shaking_fail", `${script.url}-lodash`),
          module: "asset-inspector",
          type: "tree_shaking_fail",
          category: "theoretical_debt",
          severity: "medium",
          confidence: "medium",
          title: `Appears to bundle full lodash`,
          description: `This bundle contains multiple lodash utilities (${FULL_LODASH_SIGS.slice(0, 2).join(", ")}, etc.), suggesting the full lodash library is included rather than individual utilities.`,
          observedIn: script.url,
          evidence: [{
            kind: "har_entry",
            path: script.url,
            description: `Full lodash signatures found: ${FULL_LODASH_SIGS.filter((sig) => script.body.includes(sig)).join(", ")}`
          }],
          metrics: { detectedSignatures: FULL_LODASH_SIGS.filter((sig) => script.body.includes(sig)) },
          recommendation: `Use lodash-es or import only needed utilities: import { chain, groupBy } from 'lodash-es'; to enable tree-shaking.`,
          scoreImpact: 1
        });
      }
      const momentMatches = FULL_MOMENT_SIGS.filter((sig) => script.body.includes(sig)).length;
      if (momentMatches === FULL_MOMENT_SIGS.length) {
        findings.push({
          id: createFindingId("asset-inspector", "tree_shaking_fail", `${script.url}-moment`),
          module: "asset-inspector",
          type: "tree_shaking_fail",
          category: "theoretical_debt",
          severity: "medium",
          confidence: "medium",
          title: `Appears to bundle full moment.js`,
          description: `This bundle contains multiple moment.js features (locales, utilities), suggesting the full library is included. moment.js is large and mostly unused in modern apps.`,
          observedIn: script.url,
          evidence: [{
            kind: "har_entry",
            path: script.url,
            description: `Full moment.js signatures found: ${FULL_MOMENT_SIGS.filter((sig) => script.body.includes(sig)).join(", ")}`
          }],
          metrics: { detectedSignatures: FULL_MOMENT_SIGS.filter((sig) => script.body.includes(sig)) },
          recommendation: `Replace moment.js with a lighter alternative like date-fns, Day.js, or native Intl API for modern browsers.`,
          scoreImpact: 1
        });
      }
    }
    return findings;
  }
};
var CodeSplittingDetector = class {
  static name = "code-splitting";
  finalize(scripts) {
    const findings = [];
    if (scripts.length === 1) {
      const script = scripts[0];
      if (script.transferSize > 200 * 1024) {
        findings.push({
          id: createFindingId("asset-inspector", "no_code_splitting", script.url),
          module: "asset-inspector",
          type: "no_code_splitting",
          category: "theoretical_debt",
          severity: "medium",
          confidence: "medium",
          title: `No code splitting detected`,
          description: `Single ${Math.round(script.transferSize / 1024)}KB JavaScript bundle suggests no route-based code splitting. Users download all code on first load.`,
          observedIn: script.url,
          evidence: [{
            kind: "har_entry",
            path: script.url,
            description: `Single bundle ${Math.round(script.transferSize / 1024)}KB \u2014 no code splitting detected`
          }],
          metrics: { totalSizeKB: Math.round(script.transferSize / 1024), scriptCount: scripts.length },
          recommendation: `Implement code splitting with dynamic imports or route-based splitting. Use Webpack/Vite/Next.js built-in code splitting to load only necessary code per page.`,
          scoreImpact: 10
        });
      }
    }
    return findings;
  }
};
var ANALYTICS_DOMAINS = ["google-analytics.com", "googletagmanager.com", "segment.com", "heap.io", "mixpanel.com", "amplitude.com"];
var ADS_DOMAINS = ["doubleclick.net", "adsense.google.com", "ads.google.com", "adservice.google.com"];
var AB_TESTING_DOMAINS = ["optimizely.com", "launchdarkly.com", "split.io"];
var CDN_DOMAINS = ["cloudflare.com", "cdn.jsdelivr.net", "unpkg.com", "cdnjs.cloudflare.com"];
var TAG_MANAGER_DOMAINS = ["googletagmanager.com", "tagmanager.google.com"];
function classifyOrigin(scriptUrl, auditUrl) {
  try {
    const scriptHostname = new URL(scriptUrl).hostname;
    const auditHostname = new URL(auditUrl).hostname;
    if (scriptHostname === auditHostname) {
      return "first_party";
    }
    if (TAG_MANAGER_DOMAINS.some((d) => scriptHostname.includes(d))) {
      return "tag_manager";
    }
    if (ANALYTICS_DOMAINS.some((d) => scriptHostname.includes(d))) {
      return "analytics";
    }
    if (ADS_DOMAINS.some((d) => scriptHostname.includes(d))) {
      return "ads";
    }
    if (AB_TESTING_DOMAINS.some((d) => scriptHostname.includes(d))) {
      return "ab_testing";
    }
    if (CDN_DOMAINS.some((d) => scriptHostname.includes(d))) {
      return "cdn";
    }
    return "other_third_party";
  } catch {
    return "other_third_party";
  }
}
var ThirdPartyCostDetector = class {
  static name = "third-party-cost";
  finalize(scripts, auditUrl) {
    const findings = [];
    const totalJS = scripts.reduce((sum, s) => sum + s.transferSize, 0);
    let thirdPartyBytes = 0;
    const breakdown = {
      first_party: 0,
      analytics: 0,
      ads: 0,
      ab_testing: 0,
      cdn: 0,
      tag_manager: 0,
      other_third_party: 0
    };
    for (const script of scripts) {
      const category = classifyOrigin(script.url, auditUrl);
      if (category === "first_party") {
        breakdown.first_party += script.transferSize;
      } else {
        thirdPartyBytes += script.transferSize;
        breakdown[category] += script.transferSize;
      }
    }
    const thirdPartyPercent = totalJS > 0 ? thirdPartyBytes / totalJS * 100 : 0;
    if (thirdPartyPercent > 30 || thirdPartyBytes > 200 * 1024) {
      let severity = "low";
      if (thirdPartyPercent > 50) severity = "high";
      else if (thirdPartyPercent > 40) severity = "medium";
      findings.push({
        id: createFindingId("asset-inspector", "heavy_third_party", "page"),
        module: "asset-inspector",
        type: "heavy_third_party",
        category: "direct_impact",
        severity,
        confidence: "high",
        title: `Heavy third-party JavaScript: ${Math.round(thirdPartyPercent)}% of bundle`,
        description: `Third-party scripts account for ${Math.round(thirdPartyBytes / 1024)}KB (${Math.round(thirdPartyPercent)}% of total). This includes analytics, ads, and other external scripts.`,
        observedIn: "page",
        evidence: scripts.filter((s) => classifyOrigin(s.url, auditUrl) !== "first_party" && s.transferSize > 0).map((s) => ({
          kind: "har_entry",
          path: s.url,
          description: `${classifyOrigin(s.url, auditUrl)}: ${Math.round(s.transferSize / 1024)}KB`
        })),
        metrics: {
          thirdPartyBytes,
          totalBytes: totalJS,
          thirdPartyPercent: parseFloat(thirdPartyPercent.toFixed(1)),
          breakdown: {
            analytics: Math.round(breakdown.analytics / 1024),
            ads: Math.round(breakdown.ads / 1024),
            ab_testing: Math.round(breakdown.ab_testing / 1024),
            cdn: Math.round(breakdown.cdn / 1024),
            tag_manager: Math.round(breakdown.tag_manager / 1024),
            other: Math.round(breakdown.other_third_party / 1024)
          }
        },
        recommendation: `Evaluate necessity of each third-party script. Consider lazy-loading analytics, deferring non-critical tracking, or finding lighter alternatives. Aim for < 30% third-party JS.`,
        scoreImpact: 15
      });
    }
    return findings;
  }
};
function processCSSCoverage(coverage) {
  var _a;
  const result = [];
  for (const entry of coverage) {
    if (!entry.styleSheetId) continue;
    let usedBytes = 0;
    let totalBytes = ((_a = entry.text) == null ? void 0 : _a.length) ?? 0;
    if (entry.ranges && Array.isArray(entry.ranges)) {
      for (const range of entry.ranges) {
        if (range.start !== void 0 && range.end !== void 0) {
          usedBytes += range.end - range.start;
        }
      }
    }
    result.push({
      url: entry.sourceURL || `stylesheet-${entry.styleSheetId}`,
      usedBytes,
      totalBytes
    });
  }
  return result;
}
var lib_signatures_default = [
  {
    name: "react",
    fingerprints: ["React.createElement", "react.version", "__REACT"],
    duplicateRiskWeight: 1
  },
  {
    name: "react-dom",
    fingerprints: ["react-dom", "createRoot", "ReactDOM.render"],
    duplicateRiskWeight: 1
  },
  {
    name: "vue",
    fingerprints: ["Vue.prototype", "__vue__", "vue@"],
    duplicateRiskWeight: 1
  },
  {
    name: "angular",
    fingerprints: ["angular.module", "angular.bootstrap", "$injector"],
    duplicateRiskWeight: 1
  },
  {
    name: "lodash",
    fingerprints: ["lodash.VERSION", "_.chain", "_.groupBy"],
    duplicateRiskWeight: 1
  },
  {
    name: "moment",
    fingerprints: ["moment.fn.isUtc", "moment.locale", "moment.utcOffset"],
    duplicateRiskWeight: 0.9
  },
  {
    name: "date-fns",
    fingerprints: ["date-fns", "formatISO", "differenceInDays"],
    duplicateRiskWeight: 0.8
  },
  {
    name: "rxjs",
    fingerprints: ["rxjs", "Observable.prototype", "Subject.prototype"],
    duplicateRiskWeight: 0.9
  },
  {
    name: "axios",
    fingerprints: ["axios", "axios.create", "axios.interceptors"],
    duplicateRiskWeight: 0.8
  },
  {
    name: "jquery",
    fingerprints: ["jQuery", "$.ajax", "jQuery.prototype"],
    duplicateRiskWeight: 0.9
  },
  {
    name: "bootstrap",
    fingerprints: ["bootstrap", "Dropdown", "Tooltip"],
    duplicateRiskWeight: 0.7
  },
  {
    name: "chart.js",
    fingerprints: ["Chart", "Chart.helpers", "Chart.types"],
    duplicateRiskWeight: 0.8
  },
  {
    name: "d3",
    fingerprints: ["d3", "d3.select", "d3.scale"],
    duplicateRiskWeight: 0.8
  },
  {
    name: "three.js",
    fingerprints: ["THREE", "THREE.Scene", "THREE.WebGLRenderer"],
    duplicateRiskWeight: 0.8
  }
];
var ASSET_COLLECTION_SCRIPT = `
window.__vibecheck_assets = {
  images: [],
  willChangeCount: 0,
  animations: []
};
window.__vibecheck_collect_assets = function() {
  const imgs = [...document.querySelectorAll('img')];
  const vp = { w: window.innerWidth, h: window.innerHeight };
  window.__vibecheck_assets.images = imgs.map(img => {
    const r = img.getBoundingClientRect();
    return {
      src: img.src,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      renderedWidth: r.width,
      renderedHeight: r.height,
      hasLazy: img.loading === 'lazy',
      hasFetchPriority: img.fetchPriority === 'high',
      hasWidthHeight: img.hasAttribute('width') && img.hasAttribute('height'),
      hasAspectRatio: getComputedStyle(img).aspectRatio !== 'auto',
      belowFold: r.top > vp.h
    };
  });
  const wc = [...document.querySelectorAll('*')].filter(el => {
    const v = getComputedStyle(el).willChange;
    return v && v !== 'auto';
  });
  window.__vibecheck_assets.willChangeCount = wc.length;

  // Collect animated elements with layout-triggering properties
  const layoutProps = new Set(['top','left','right','bottom','width','height','margin','padding','font-size','border-width']);
  const animatedEls = [...document.querySelectorAll('*')].filter(el => {
    const s = getComputedStyle(el);
    return s.animationName !== 'none' || s.transitionProperty !== 'all';
  });
  const animations = [];
  for (const el of animatedEls.slice(0, 100)) {
    const s = getComputedStyle(el);
    const animProps = s.transitionProperty.split(',').map(p => p.trim());
    for (const prop of animProps) {
      if (layoutProps.has(prop)) {
        animations.push({
          selector: el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + (el.className ? '.' + [...el.classList].join('.') : ''),
          property: prop,
          animationName: s.animationName
        });
      }
    }
  }
  window.__vibecheck_assets.animations = animations;
};
`;
var AssetInspectorModule = class {
  name = "asset-inspector";
  weight = 22;
  ctx = null;
  imageInfos = [];
  scriptInfos = [];
  stylesheetInfos = [];
  animationInfos = [];
  cssUsage = [];
  lcpTime = 0;
  clsValue = 0;
  lcpImageUrl = "";
  // Network data: requestId → URL (from network.request events)
  requestIdToUrl = /* @__PURE__ */ new Map();
  // URL → mimeType (from network.response events)
  imageUrlToMimeType = /* @__PURE__ */ new Map();
  // requestId → transferSize (from CDP Network.loadingFinished)
  transferSizes = /* @__PURE__ */ new Map();
  async initialize(ctx) {
    this.ctx = ctx;
    try {
      await ctx.cdp.send("DOM.enable", {});
      await ctx.cdp.send("CSS.enable", {});
      await ctx.cdp.send("CSS.startRuleUsageTracking", {});
      ctx.logger.debug("CSS coverage tracking started");
    } catch (err) {
      ctx.logger.warn({ err }, "Failed to start CSS coverage tracking");
    }
    try {
      ctx.cdp.on("Network.loadingFinished", (params) => {
        this.transferSizes.set(params.requestId, params.encodedDataLength);
      });
    } catch (err) {
      ctx.logger.warn({ err }, "Failed to register Network.loadingFinished listener");
    }
    try {
      await ctx.cdp.send("Animation.enable", {});
    } catch (err) {
      ctx.logger.debug({ err }, "Animation CDP domain not available");
    }
    try {
      await ctx.page.context().addInitScript(ASSET_COLLECTION_SCRIPT);
      ctx.logger.debug("Asset collection script injected");
    } catch (err) {
      ctx.logger.warn({ err }, "Failed to inject asset collection script");
    }
    return ok(void 0);
  }
  async onEvent(event) {
    if (event.type === "network.request") {
      this.requestIdToUrl.set(event.requestId, event.url);
    }
    if (event.type === "network.response") {
      const { url, mimeType, requestId } = event;
      this.requestIdToUrl.set(requestId, url);
      if (mimeType == null ? void 0 : mimeType.includes("image")) {
        this.imageUrlToMimeType.set(url, mimeType);
      } else if (((mimeType == null ? void 0 : mimeType.includes("javascript")) || url.endsWith(".js") || url.endsWith(".mjs")) && !url.split("?")[0].match(/\.(tsx?|jsx?|css)$/)) {
        if (!this.scriptInfos.some((s) => s.url === url)) {
          this.scriptInfos.push({
            url,
            transferSize: 0,
            // filled in finalize() once loadingFinished fires
            isThirdParty: false,
            // filled in finalize() with proper hostname comparison
            hasAsync: false,
            // filled in finalize() from DOM
            hasDefer: false,
            // filled in finalize() from DOM
            isModule: (mimeType == null ? void 0 : mimeType.includes("module")) ?? false,
            inHead: false
            // filled in finalize() from DOM
          });
        }
      } else if ((mimeType == null ? void 0 : mimeType.includes("css")) || url.endsWith(".css")) {
        if (!this.stylesheetInfos.some((s) => s.url === url)) {
          this.stylesheetInfos.push({
            url,
            transferSize: 0,
            // filled in finalize()
            isRenderBlocking: false,
            // filled in finalize() from DOM
            mediaAttr: "",
            usedBytes: 0,
            totalBytes: 0
          });
        }
      }
    }
    if (event.type === "web_vital") {
      if (event.metric.name === "LCP") {
        this.lcpTime = event.metric.value;
        const entries = event.metric.entries;
        if (Array.isArray(entries) && entries.length > 0) {
          const lcpEntry = entries[entries.length - 1];
          const lcpUrl = lcpEntry == null ? void 0 : lcpEntry.url;
          if (lcpUrl) this.lcpImageUrl = lcpUrl;
        }
      } else if (event.metric.name === "CLS") {
        this.clsValue = event.metric.value;
      }
    }
  }
  async finalize() {
    if (!this.ctx) return [];
    const findings = [];
    const urlToTransferSize = /* @__PURE__ */ new Map();
    for (const [requestId, transferSize] of this.transferSizes) {
      const url = this.requestIdToUrl.get(requestId);
      if (url) urlToTransferSize.set(url, transferSize);
    }
    let auditHostname = "";
    try {
      auditHostname = new URL(this.ctx.url).hostname;
    } catch {
    }
    for (const script of this.scriptInfos) {
      script.transferSize = urlToTransferSize.get(script.url) ?? 0;
      try {
        const scriptHostname = new URL(script.url).hostname;
        script.isThirdParty = scriptHostname !== auditHostname;
      } catch {
        script.isThirdParty = false;
      }
    }
    for (const sheet of this.stylesheetInfos) {
      sheet.transferSize = urlToTransferSize.get(sheet.url) ?? 0;
    }
    try {
      const coverageResult = await this.ctx.cdp.send("CSS.stopRuleUsageTracking", {});
      const ruleUsage = coverageResult == null ? void 0 : coverageResult.ruleUsage;
      if (Array.isArray(ruleUsage)) {
        this.cssUsage = ruleUsage;
        const coverage = processCSSCoverage(this.cssUsage);
        for (const cov of coverage) {
          const sheet = this.stylesheetInfos.find((s) => s.url === cov.url);
          if (sheet) {
            sheet.usedBytes = cov.usedBytes;
            sheet.totalBytes = cov.totalBytes;
          }
        }
      }
    } catch (err) {
      this.ctx.logger.debug({ err }, "Failed to get CSS coverage");
    }
    try {
      const assetData = await this.ctx.page.evaluate(() => {
        const w = window;
        if (typeof w.__vibecheck_collect_assets === "function") {
          w.__vibecheck_collect_assets();
        }
        return window.__vibecheck_assets;
      });
      if ((assetData == null ? void 0 : assetData.images) && Array.isArray(assetData.images)) {
        const seenImageUrls = /* @__PURE__ */ new Set();
        for (const imgData of assetData.images) {
          if (!imgData.src) continue;
          if (seenImageUrls.has(imgData.src)) continue;
          seenImageUrls.add(imgData.src);
          const mimeType = this.imageUrlToMimeType.get(imgData.src) ?? "image/jpeg";
          const transferSize = urlToTransferSize.get(imgData.src) ?? 0;
          const imageInfo = {
            url: imgData.src,
            naturalWidth: imgData.naturalWidth,
            naturalHeight: imgData.naturalHeight,
            renderedWidth: imgData.renderedWidth,
            renderedHeight: imgData.renderedHeight,
            transferSize,
            mimeType,
            hasLazy: imgData.hasLazy,
            hasFetchPriority: imgData.hasFetchPriority,
            hasWidthHeight: imgData.hasWidthHeight,
            hasAspectRatio: imgData.hasAspectRatio,
            belowFold: imgData.belowFold,
            isLcp: !!this.lcpImageUrl && imgData.src === this.lcpImageUrl
          };
          this.imageInfos.push(imageInfo);
        }
      }
      if ((assetData == null ? void 0 : assetData.animations) && Array.isArray(assetData.animations)) {
        this.animationInfos = assetData.animations;
      }
      const willChangeCount = (assetData == null ? void 0 : assetData.willChangeCount) ?? 0;
      const scriptDomData = await this.ctx.page.evaluate(() => {
        return [...document.querySelectorAll("script[src]")].map((el) => {
          const s = el;
          return { src: s.src, async: s.async, defer: s.defer, type: s.type, inHead: document.head.contains(s) };
        });
      });
      for (const domScript of scriptDomData) {
        const info = this.scriptInfos.find((s) => s.url === domScript.src || domScript.src.includes(new URL(s.url).pathname));
        if (info) {
          info.hasAsync = domScript.async;
          info.hasDefer = domScript.defer;
          info.isModule = domScript.type === "module";
          info.inHead = domScript.inHead;
        }
      }
      const sheetDomData = await this.ctx.page.evaluate(() => {
        return [...document.querySelectorAll('link[rel="stylesheet"]')].map((el) => {
          const l = el;
          const media = l.media ?? "";
          const isBlocking = media === "" || media === "all" || media === "screen";
          return { href: l.href, media, isBlocking };
        });
      });
      for (const domSheet of sheetDomData) {
        const info = this.stylesheetInfos.find((s) => s.url === domSheet.href);
        if (info) {
          info.mediaAttr = domSheet.media;
          info.isRenderBlocking = domSheet.isBlocking;
        }
      }
      try {
        findings.push(...new OversizedImageDetector().finalize(this.imageInfos));
      } catch (err) {
        this.ctx.logger.warn({ err }, "OversizedImageDetector failed");
      }
      const detectedImageUrls = new Set(this.imageInfos.map((i) => i.url));
      for (const [url, mimeType] of this.imageUrlToMimeType) {
        if (!mimeType.includes("image")) continue;
        const transferSize = urlToTransferSize.get(url) ?? 0;
        if (transferSize > 2e5 && !detectedImageUrls.has(url)) {
          findings.push({
            id: createFindingId("asset-inspector", "oversized_image", url),
            module: "asset-inspector",
            type: "oversized_image",
            category: "theoretical_debt",
            severity: transferSize > 1e6 ? "high" : "medium",
            confidence: "medium",
            title: `Large image transfer: ${url.split("/").pop()} (${Math.round(transferSize / 1024)}KB)`,
            description: `Image transferred ${Math.round(transferSize / 1024)}KB over the network. Serving images at full resolution wastes bandwidth and increases decode time.`,
            observedIn: url,
            evidence: [{ kind: "har_entry", path: url, description: `${Math.round(transferSize / 1024)}KB image response` }],
            metrics: { transferSize, threshold: 2e5 },
            recommendation: "Resize and compress images. Use modern formats (WebP/AVIF). Serve responsive sizes with srcset.",
            scoreImpact: transferSize > 1e6 ? 8 : 4
          });
        }
      }
      try {
        findings.push(...new ImageFormatDetector().finalize(this.imageInfos));
      } catch (err) {
        this.ctx.logger.warn({ err }, "ImageFormatDetector failed");
      }
      try {
        findings.push(...new LazyLoadImageDetector().finalize(this.imageInfos));
      } catch (err) {
        this.ctx.logger.warn({ err }, "LazyLoadImageDetector failed");
      }
      try {
        findings.push(...new LCPPriorityDetector().finalize(this.imageInfos, this.lcpTime));
      } catch (err) {
        this.ctx.logger.warn({ err }, "LCPPriorityDetector failed");
      }
      try {
        findings.push(...new CLSContributorDetector().finalize(this.imageInfos, this.clsValue));
      } catch (err) {
        this.ctx.logger.warn({ err }, "CLSContributorDetector failed");
      }
      try {
        findings.push(...new LayoutAnimationDetector().finalize(this.animationInfos));
      } catch (err) {
        this.ctx.logger.warn({ err }, "LayoutAnimationDetector failed");
      }
      try {
        findings.push(...new WillChangeDetector().finalize(willChangeCount));
      } catch (err) {
        this.ctx.logger.warn({ err }, "WillChangeDetector failed");
      }
      try {
        findings.push(...new BlockingCSSDetector().finalize(this.stylesheetInfos, this.ctx.url));
      } catch (err) {
        this.ctx.logger.warn({ err }, "BlockingCSSDetector failed");
      }
      try {
        findings.push(...new UnusedCSSDetector().finalize(this.stylesheetInfos));
      } catch (err) {
        this.ctx.logger.warn({ err }, "UnusedCSSDetector failed");
      }
      try {
        findings.push(...new SyncScriptDetector().finalize(this.scriptInfos));
      } catch (err) {
        this.ctx.logger.warn({ err }, "SyncScriptDetector failed");
      }
      try {
        findings.push(...new BundleSizeDetector().finalize(this.scriptInfos));
      } catch (err) {
        this.ctx.logger.warn({ err }, "BundleSizeDetector failed");
      }
      try {
        findings.push(...new DuplicateLibsDetector().finalize(this.scriptInfos, lib_signatures_default));
      } catch (err) {
        this.ctx.logger.warn({ err }, "DuplicateLibsDetector failed");
      }
      try {
        findings.push(...new TreeShakingDetector().finalize(this.scriptInfos));
      } catch (err) {
        this.ctx.logger.warn({ err }, "TreeShakingDetector failed");
      }
      try {
        findings.push(...new CodeSplittingDetector().finalize(this.scriptInfos));
      } catch (err) {
        this.ctx.logger.warn({ err }, "CodeSplittingDetector failed");
      }
      try {
        findings.push(...new ThirdPartyCostDetector().finalize(this.scriptInfos, this.ctx.url));
      } catch (err) {
        this.ctx.logger.warn({ err }, "ThirdPartyCostDetector failed");
      }
    } catch (err) {
      this.ctx.logger.error({ err }, "Error in asset inspector finalize");
    }
    return findings;
  }
  async dispose() {
  }
};

// packages/render/dist/index.js
var MemoizationGapDetector = class {
  static detectorName = "memoization-gap";
  name = "memoization-gap";
  ctx;
  constructor(ctx) {
    this.ctx = ctx;
  }
  async onEvent(_event) {
  }
  async finalize() {
    let renderEvents = [];
    try {
      renderEvents = await this.ctx.page.evaluate(() => {
        return window.__VIBE_RENDER_EVENTS__ ?? [];
      });
    } catch {
      return [];
    }
    if (renderEvents.length === 0) return [];
    const counts = /* @__PURE__ */ new Map();
    for (const ev of renderEvents) {
      counts.set(ev.componentName, (counts.get(ev.componentName) ?? 0) + 1);
    }
    const hotComponents = [...counts.entries()].filter(([, c]) => c > 3).sort((a, b) => b[1] - a[1]);
    if (hotComponents.length === 0) return [];
    const totalComponents = counts.size;
    const worstComponent = hotComponents[0];
    return [{
      id: createFindingId("render", "memoization_gap", worstComponent[0]),
      module: "render",
      type: "memoization_gap",
      category: "direct_impact",
      severity: hotComponents.length > 20 ? "high" : "medium",
      confidence: "medium",
      title: `"${worstComponent[0]}" and ${hotComponents.length - 1} other component${hotComponents.length > 2 ? "s" : ""} re-render without memoization`,
      description: `"${worstComponent[0]}" re-rendered ${worstComponent[1]} times during the audit. ${hotComponents.length} components total lack React.memo/useMemo/useCallback, causing cascading re-renders on every parent state change.`,
      observedIn: `React profiler \xB7 "${worstComponent[0]}" \xD7 ${worstComponent[1]} renders (worst offender of ${hotComponents.length})`,
      evidence: hotComponents.slice(0, 5).map(([name, count]) => ({
        kind: "console_log",
        path: "",
        description: `Component "${name}" re-rendered ${count} times during audit`
      })),
      metrics: {
        componentsWithoutMemo: hotComponents.length,
        totalComponents,
        worstComponent: worstComponent[0],
        worstCount: worstComponent[1]
      },
      recommendation: `Wrap leaf components in React.memo(). Stabilize callbacks with useCallback() and computed values with useMemo(). Focus first on "${worstComponent[0]}" (${worstComponent[1]} re-renders).`,
      scoreImpact: Math.min(Math.ceil(hotComponents.length / 5) * 2, 15)
    }];
  }
  async dispose() {
  }
};
var InlineAllocationsDetector = class {
  name = "inline-allocations";
  ctx;
  constructor(ctx) {
    this.ctx = ctx;
  }
  async onEvent(_event) {
  }
  async finalize() {
    let inlineStyleCount = 0;
    let hotElementCount = 0;
    try {
      const result = await this.ctx.page.evaluate(() => {
        const allElements = Array.from(document.querySelectorAll("[style]"));
        const withManyChildren = allElements.filter((el) => el.children.length > 5);
        return { inlineStyleCount: allElements.length, hotElementCount: withManyChildren.length };
      });
      inlineStyleCount = result.inlineStyleCount;
      hotElementCount = result.hotElementCount;
    } catch {
      return [];
    }
    if (inlineStyleCount < 100) return [];
    return [{
      id: createFindingId("render", "inline_allocations", "page"),
      module: "render",
      type: "inline_allocations",
      category: "theoretical_debt",
      severity: inlineStyleCount > 500 ? "medium" : "low",
      confidence: "low",
      title: `${inlineStyleCount} elements use inline style objects`,
      description: `${inlineStyleCount} elements with inline style attributes detected (${hotElementCount} on hot components with children). Inline style objects and arrow-function props create new allocations on every render, preventing memoization from working.`,
      observedIn: `DOM scan: ${inlineStyleCount} elements with style attribute`,
      evidence: [{
        kind: "console_log",
        path: "",
        description: `DOM scan found ${inlineStyleCount} elements with inline style attributes; ${hotElementCount} on parent elements`
      }],
      metrics: { inlineStyleCount, hotElementCount },
      recommendation: "Move inline style objects to module-level constants or CSS classes. Replace inline arrow-function props with stable useCallback references to allow React.memo() to work effectively.",
      scoreImpact: 12
    }];
  }
  async dispose() {
  }
};
var VirtualizationGapDetector = class {
  name = "virtualization-gap";
  ctx;
  constructor(ctx) {
    this.ctx = ctx;
  }
  async onEvent(_event) {
  }
  async finalize() {
    let containers = [];
    try {
      containers = await this.ctx.page.evaluate(() => {
        const w = window;
        if (w.__VIBE_COUNT_CONTAINERS__) {
          return w.__VIBE_COUNT_CONTAINERS__() ?? [];
        }
        const totalNodes = document.querySelectorAll("*").length;
        if (totalNodes > 1500) {
          return [{
            selector: "document",
            childCount: totalNodes,
            isScrollable: false
          }];
        }
        return [];
      });
    } catch {
      return [];
    }
    const largeLists = containers.filter((c) => c.childCount > 50);
    if (largeLists.length === 0) return [];
    let hasVirtualization = false;
    try {
      hasVirtualization = await this.ctx.page.evaluate(() => {
        const scripts = Array.from(document.querySelectorAll("script")).map((s) => s.textContent ?? "");
        const all = scripts.join(" ");
        return /react-window|react-virtuoso|@tanstack\/react-virtual|FixedSizeList|VariableSizeList|VirtualList/.test(all);
      });
    } catch {
    }
    if (hasVirtualization) return [];
    const findings = [];
    for (const container of largeLists) {
      const count = container.childCount;
      const severity = count >= 2e3 ? "critical" : count >= 500 ? "high" : "medium";
      findings.push({
        id: createFindingId("render", "unvirtualized_list", container.selector),
        module: "render",
        type: "unvirtualized_list",
        category: "direct_impact",
        severity,
        confidence: "high",
        title: `Unvirtualized list with ${count} DOM nodes (${container.selector})`,
        description: `Container "${container.selector}" renders ${count} child elements directly in the DOM without a virtualization library. This causes excessive layout, style calculation, and painting work.`,
        observedIn: `DOM scan: container "${container.selector}" has ${count} direct children`,
        evidence: [{
          kind: "console_log",
          path: "",
          description: `Container ${container.selector} has ${count} direct children \u2014 no virtualization library detected in page scripts`
        }],
        metrics: { childCount: count, isScrollable: container.isScrollable ? 1 : 0 },
        recommendation: `Replace the list render with a virtualization library such as react-window (FixedSizeList/VariableSizeList), react-virtuoso, or @tanstack/react-virtual. Only render the ~10\u201330 items visible in the viewport at any time.`,
        scoreImpact: severity === "critical" ? 25 : severity === "high" ? 25 : 25
      });
    }
    return findings;
  }
  async dispose() {
  }
};
var MissingKeysDetector = class {
  name = "missing-keys";
  ctx;
  constructor(ctx) {
    this.ctx = ctx;
  }
  async onEvent(_event) {
  }
  async finalize() {
    let keylessList = 0;
    try {
      keylessList = await this.ctx.page.evaluate(() => {
        const candidates = Array.from(document.querySelectorAll("ul, ol, [data-list], .list, .items"));
        let count = 0;
        for (const parent of candidates) {
          const children = Array.from(parent.children);
          if (children.length < 5) continue;
          const tags = new Set(children.map((c) => c.tagName));
          if (tags.size !== 1) continue;
          const hasKeyAttr = children.some(
            (c) => c.hasAttribute("data-key") || c.hasAttribute("data-id") || c.hasAttribute("data-reactid")
          );
          if (!hasKeyAttr) {
            count += 1;
          }
        }
        const divContainers = Array.from(document.querySelectorAll("div, section, main"));
        for (const parent of divContainers) {
          const children = Array.from(parent.children);
          if (children.length < 6) continue;
          const tags = new Set(children.map((c) => c.tagName));
          if (tags.size !== 1) continue;
          const tag = [...tags][0];
          if (!tag || tag === "DIV" && children.length < 10) continue;
          const hasKeyAttr = children.some(
            (c) => c.hasAttribute("data-key") || c.hasAttribute("data-id") || c.hasAttribute("data-reactid")
          );
          if (!hasKeyAttr && children.length >= 6) {
            count += 1;
          }
        }
        return count;
      });
    } catch {
      return [];
    }
    if (keylessList === 0) return [];
    return [{
      id: createFindingId("render", "missing_keys", "list"),
      module: "render",
      // 'render_storm' is the closest available type; using a valid FindingType
      type: "wasted_mutation",
      category: "theoretical_debt",
      severity: "low",
      confidence: "low",
      title: `${keylessList} list container(s) may render items without stable keys`,
      description: `${keylessList} list container(s) contain uniform sibling elements with no key-indicative attributes (data-key, data-id, data-reactid). Missing React list keys cause full subtree reconciliation on reorder or insert.`,
      observedIn: `DOM scan: ${keylessList} list container(s) with uniform children lacking key attributes`,
      evidence: [{
        kind: "console_log",
        path: "",
        description: `${keylessList} container(s) with 5+ same-tag children and no key attributes found`
      }],
      metrics: { keylessList },
      recommendation: "Add a stable unique key prop to every item in .map() renders \u2014 use item.id or a stable content hash, never the array index.",
      scoreImpact: 5
    }];
  }
  async dispose() {
  }
};
var RerenderStormDetector = class {
  name = "rerender-storm";
  ctx;
  constructor(ctx) {
    this.ctx = ctx;
  }
  async onEvent(_event) {
  }
  async finalize() {
    let renderEvents = [];
    try {
      renderEvents = await this.ctx.page.evaluate(() => {
        return window.__VIBE_RENDER_EVENTS__ ?? [];
      });
    } catch {
      return [];
    }
    if (renderEvents.length === 0) return [];
    const WINDOW_MS = 1e3;
    const BURST_THRESHOLD = 20;
    let maxBurst = 0;
    let burstStart = 0;
    let burstComponents = [];
    for (let i = 0; i < renderEvents.length; i++) {
      const windowStart = renderEvents[i].timestamp;
      const windowEnd = windowStart + WINDOW_MS;
      const inWindow = renderEvents.filter(
        (e) => e.timestamp >= windowStart && e.timestamp < windowEnd
      );
      if (inWindow.length > maxBurst) {
        maxBurst = inWindow.length;
        burstStart = windowStart;
        const names = new Set(inWindow.map((e) => e.componentName));
        burstComponents = [...names].slice(0, 10);
      }
    }
    if (maxBurst < BURST_THRESHOLD) return [];
    return [{
      id: createFindingId("render", "render_storm", "page"),
      module: "render",
      type: "render_storm",
      category: "direct_impact",
      severity: "high",
      confidence: "medium",
      title: `Re-render storm: ${maxBurst} renders in 1000ms`,
      description: `A burst of ${maxBurst} component renders was observed within a 1000ms window starting at t=${Math.round(burstStart)}ms. Components involved: ${burstComponents.join(", ")}. This indicates cascading state updates propagating through the tree.`,
      observedIn: `React profiler: ${maxBurst} renders in 1000ms window \u2014 components: ${burstComponents.slice(0, 3).join(", ")}`,
      evidence: [{
        kind: "console_log",
        path: "",
        description: `${maxBurst} render events in a 500ms window at t=${Math.round(burstStart)}ms involving ${burstComponents.length} components`
      }],
      metrics: { burstCount: maxBurst, burstStart: Math.round(burstStart), uniqueComponents: burstComponents.length },
      recommendation: "Identify the state update triggering the cascade and batch related setState calls using React 18 automatic batching or flushSync. Consider lifting shared state to a context or Zustand/Jotai store to avoid prop-drilling re-renders.",
      scoreImpact: 28
    }];
  }
  async dispose() {
  }
};
var REACT_PROFILER_TAP = `
window.__VIBE_RENDER_EVENTS__ = [];

(function installReactProfilerTap() {
  // Create the hook BEFORE React loads so React uses it during initialization.
  // React DevTools works the same way: the extension creates the hook first, then React registers itself.
  if (!window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {
      renderers: new Map(),
      supportsFiber: true,
      isDisabled: false,
      inject: function() {},
      onScheduleFiberRoot: function() {},
      onCommitFiberRoot: function() {},
      onCommitFiberUnmount: function() {},
      onPostCommitFiberRoot: function() {},
      checkDCE: function() {},
    };
  }

  var hook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
  var originalOnCommitFiberRoot = hook.onCommitFiberRoot;

  hook.onCommitFiberRoot = function(rendererID, root, priorityLevel) {
    try {
      var fiber = root.current;
      var now = performance.now();
      function visitFiber(f) {
        if (!f) return;
        // Capture any function or class component fiber
        if (f.type && (typeof f.type === 'function' || (typeof f.type === 'object' && f.type !== null))) {
          var name = (typeof f.type === 'function'
            ? f.type.displayName || f.type.name
            : f.type.displayName) || '';
          if (name) {
            window.__VIBE_RENDER_EVENTS__.push({
              componentName: name,
              reason: f.alternate ? 'parent-render' : 'initial',
              timestamp: now,
            });
          }
        }
        visitFiber(f.child);
        visitFiber(f.sibling);
      }
      visitFiber(fiber);
    } catch(e) {}
    if (originalOnCommitFiberRoot) return originalOnCommitFiberRoot.call(this, rendererID, root, priorityLevel);
  };
})();
`;
var DOM_COUNTER_SCRIPT = `
window.__VIBE_COUNT_CONTAINERS__ = function() {
  var results = [];
  var seen = new WeakSet();

  function isScrollable(el) {
    var style = window.getComputedStyle(el);
    var overflow = style.overflow + style.overflowX + style.overflowY;
    return /auto|scroll/.test(overflow);
  }

  var candidates = Array.from(document.querySelectorAll('*'));
  for (var i = 0; i < candidates.length; i++) {
    var el = candidates[i];
    if (seen.has(el)) continue;
    seen.add(el);
    var childCount = el.children.length;
    if (childCount > 50) {
      var sel = el.id
        ? '#' + el.id
        : (el.getAttribute('data-testid')
          ? '[data-testid="' + el.getAttribute('data-testid') + '"]'
          : el.tagName.toLowerCase() + (el.className ? '.' + el.className.split(' ')[0] : ''));
      results.push({
        selector: sel,
        childCount: childCount,
        isScrollable: isScrollable(el),
      });
    }
  }
  // Also check body if it has many direct children
  if (document.body && document.body.children.length > 50) {
    results.push({ selector: 'body', childCount: document.body.children.length, isScrollable: false });
  }
  return results;
};
`;
var RenderModule = class {
  name = "render";
  weight = 17;
  detectors = [];
  async initialize(ctx) {
    this.detectors = [
      new MemoizationGapDetector(ctx),
      new InlineAllocationsDetector(ctx),
      new VirtualizationGapDetector(ctx),
      new MissingKeysDetector(ctx),
      new RerenderStormDetector(ctx)
    ];
    try {
      await ctx.page.context().addInitScript(REACT_PROFILER_TAP + "\n" + DOM_COUNTER_SCRIPT);
    } catch (err) {
      ctx.logger.warn({ err }, "Failed to inject render scripts");
    }
    return ok(void 0);
  }
  async onEvent(event) {
    await Promise.all(this.detectors.map((d) => d.onEvent(event)));
  }
  async finalize() {
    const all = await Promise.all(this.detectors.map((d) => d.finalize()));
    return all.flat();
  }
  async dispose() {
    await Promise.all(this.detectors.map((d) => d.dispose()));
  }
};

// packages/memory/dist/index.js
var LeakedIntervalDetector = class {
  name = "leaked-interval";
  ctx;
  constructor(ctx) {
    this.ctx = ctx;
  }
  async onEvent(_event) {
  }
  async finalize() {
    const census = await this.ctx.page.evaluate(
      () => {
        var _a;
        return ((_a = window.__VIBE_INTERVAL_CENSUS__) == null ? void 0 : _a.call(window)) ?? { active: 0, intervals: [] };
      }
    );
    const appIntervals = census.intervals.filter((i) => {
      const stack = i.stack ?? "";
      return !stack.includes("/@vite/") && !stack.includes("@vite/client") && !stack.includes("webpack-dev-server");
    });
    if (appIntervals.length < 1) return [];
    const active = appIntervals.length;
    const evidence = appIntervals.slice(0, 5).map((interval) => ({
      kind: "console_log",
      path: "memory/interval-census",
      description: `Leaked interval id=${interval.id} delay=${interval.delay}ms stack=${(interval.stack ?? "").slice(0, 200)}`
    }));
    const finding = {
      id: createFindingId("memory", "leaked_interval", "setInterval"),
      module: "memory",
      type: "leaked_interval",
      category: "direct_impact",
      severity: active >= 10 ? "critical" : active >= 5 ? "high" : active >= 2 ? "medium" : "low",
      confidence: "medium",
      title: `Leaked setInterval \u2014 ${active} active timer${active !== 1 ? "s" : ""} at audit end`,
      description: `${active} interval${active !== 1 ? "s" : ""} (or self-rescheduling timeouts) remained active at the end of the audit. Leaked timers prevent garbage collection of their captured closures and run indefinitely, increasing CPU usage.`,
      observedIn: `setInterval census \xB7 ${active} active timer${active !== 1 ? "s" : ""} at audit end`,
      evidence,
      metrics: {
        activeTimers: active,
        threshold: 1
      },
      recommendation: "Wrap setInterval in useEffect and return a cleanup function: `useEffect(() => { const id = setInterval(...); return () => clearInterval(id); }, [])`",
      scoreImpact: 22
    };
    return [finding];
  }
  async dispose() {
  }
};
var LeakedListenerDetector = class {
  name = "leaked-listener";
  ctx;
  constructor(ctx) {
    this.ctx = ctx;
  }
  async onEvent(_event) {
  }
  async finalize() {
    if (this.ctx.url.includes("localhost") || this.ctx.url.includes("127.0.0.1")) {
      return [];
    }
    const census = await this.ctx.page.evaluate(
      () => {
        var _a;
        return ((_a = window.__VIBE_LISTENER_CENSUS__) == null ? void 0 : _a.call(window)) ?? {
          total: 0,
          addCount: 0,
          removeCount: 0,
          byType: {}
        };
      }
    );
    const net = census.addCount - census.removeCount;
    if (net <= 30) return [];
    const topTypes = Object.entries(census.byType).sort(([, a], [, b]) => b - a).slice(0, 3);
    const evidence = topTypes.map(([type, count]) => ({
      kind: "console_log",
      path: "memory/listener-census",
      description: `Event type "${type}": ${count} add calls`
    }));
    if (evidence.length === 0) {
      evidence.push({
        kind: "console_log",
        path: "memory/listener-census",
        description: `Net listeners: ${net} (${census.addCount} added, ${census.removeCount} removed)`
      });
    }
    const finding = {
      id: createFindingId("memory", "leaked_listener", "addEventListener"),
      module: "memory",
      type: "leaked_listener",
      category: "direct_impact",
      severity: "medium",
      confidence: "medium",
      title: `Leaked event listeners \u2014 ${net} net listeners`,
      description: `${net} more addEventListener calls than removeEventListener calls were observed (${census.addCount} added, ${census.removeCount} removed). Leaked listeners hold references to DOM nodes and closures, preventing garbage collection.`,
      observedIn: `addEventListener census \xB7 ${net} net listeners (${census.addCount} added, ${census.removeCount} removed)`,
      evidence,
      metrics: {
        netListeners: net,
        addCount: census.addCount,
        removeCount: census.removeCount,
        threshold: 50
      },
      recommendation: "Match every addEventListener with a removeEventListener in cleanup. In React: `useEffect(() => { el.addEventListener('click', handler); return () => el.removeEventListener('click', handler); }, [])`",
      scoreImpact: 22
    };
    return [finding];
  }
  async dispose() {
  }
};
var UnboundedStateDetector = class {
  name = "unbounded-state";
  ctx;
  snapshots = [];
  constructor(ctx) {
    this.ctx = ctx;
  }
  async onEvent(event) {
    if (event.type === "flow.step.after") {
      await this.takeSample();
    }
  }
  async takeSample() {
    try {
      const result = await this.ctx.page.evaluate(
        () => {
          var _a;
          return ((_a = window.__VIBE_SAMPLE_STATE__) == null ? void 0 : _a.call(window)) ?? { samples: [] };
        }
      );
      const snapshot = /* @__PURE__ */ new Map();
      for (const s of result.samples) {
        snapshot.set(s.storeName, s.size);
      }
      this.snapshots.push(snapshot);
    } catch {
    }
  }
  async finalize() {
    var _a;
    await this.takeSample();
    if (this.snapshots.length === 0) return [];
    const findings = [];
    const finalSnapshot = this.snapshots[this.snapshots.length - 1];
    for (const [storeName, finalSize] of finalSnapshot) {
      const firstSize = ((_a = this.snapshots[0]) == null ? void 0 : _a.get(storeName)) ?? 0;
      const growth = finalSize - firstSize;
      const isGrowing = this.snapshots.length >= 2 && growth > 20;
      const isLarge = finalSize > 50;
      if (!isLarge && !isGrowing) continue;
      const severity = finalSize > 500 || growth > 100 ? "high" : "medium";
      const description = isGrowing ? `"${storeName}" grew from ${firstSize} to ${finalSize} entries (+${growth}) during the audit. Unbounded growth indicates a missing eviction policy.` : `"${storeName}" contains ${finalSize} entries with no apparent eviction policy. Large state arrays increase serialization cost on every render.`;
      findings.push({
        id: createFindingId("memory", "unbounded_state", storeName),
        module: "memory",
        type: "unbounded_state",
        category: "direct_impact",
        severity,
        confidence: isGrowing ? "high" : "low",
        title: `Unbounded state: "${storeName}" has ${finalSize} entries${isGrowing ? ` (+${growth} during audit)` : ""}`,
        description,
        observedIn: `${storeName} \xB7 ${finalSize} entries`,
        evidence: [
          {
            kind: "console_log",
            path: "memory/state-tracker",
            description: isGrowing ? `"${storeName}" grew from ${firstSize} \u2192 ${finalSize} entries over ${this.snapshots.length} samples` : `"${storeName}" size=${finalSize} at audit end`
          }
        ],
        metrics: {
          storeName,
          entryCount: finalSize,
          growth: isGrowing ? growth : 0,
          threshold: 50
        },
        recommendation: "Cap the array at a fixed size (e.g. 500) and evict oldest entries. Consider using a circular buffer.",
        scoreImpact: 15
      });
    }
    return findings;
  }
  async dispose() {
  }
};
var RecursiveHandlerDetector = class {
  name = "recursive-handler";
  ctx;
  constructor(ctx) {
    this.ctx = ctx;
  }
  async onEvent(_event) {
  }
  async finalize() {
    const result = await this.ctx.page.evaluate(() => {
      const inputs = document.querySelectorAll("input");
      if (inputs.length === 0) return { heavyHandlerMs: 0, selector: "" };
      const input = inputs[0];
      const start = performance.now();
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.dispatchEvent(new Event("keyup", { bubbles: true }));
      const elapsed = performance.now() - start;
      let selector = "input";
      if (input.id) selector = `#${input.id}`;
      else if (input.name) selector = `input[name="${input.name}"]`;
      return { heavyHandlerMs: elapsed, selector };
    });
    if (result.heavyHandlerMs <= 10) return [];
    const finding = {
      id: createFindingId("memory", "recursive_handler", result.selector),
      module: "memory",
      type: "recursive_handler",
      category: "direct_impact",
      severity: "medium",
      confidence: "medium",
      title: `Heavy interaction handler \u2014 ${result.heavyHandlerMs.toFixed(1)}ms on synthetic input event`,
      description: `Dispatching a synthetic input/keyup event on "${result.selector}" took ${result.heavyHandlerMs.toFixed(1)}ms synchronously. Heavy handlers on user input events block the main thread, causing poor INP scores.`,
      observedIn: `${result.selector} \xB7 ${result.heavyHandlerMs.toFixed(1)}ms on synthetic input event`,
      evidence: [
        {
          kind: "console_log",
          path: "memory/recursive-handler",
          description: `Synthetic input event on ${result.selector} took ${result.heavyHandlerMs.toFixed(1)}ms`
        }
      ],
      metrics: {
        handlerMs: Math.round(result.heavyHandlerMs * 10) / 10,
        selector: result.selector,
        threshold: 10
      },
      recommendation: "Debounce or throttle input handlers. Use `lodash.debounce(handler, 200)` or `useCallback` with a debounce wrapper.",
      scoreImpact: 12
    };
    return [finding];
  }
  async dispose() {
  }
};
var StaleClosureDetector = class {
  name = "stale-closure";
  ctx;
  constructor(ctx) {
    this.ctx = ctx;
  }
  async onEvent(_event) {
  }
  async finalize() {
    const result = await this.ctx.page.evaluate(() => {
      var _a;
      const census = (_a = window.__VIBE_INTERVAL_CENSUS__) == null ? void 0 : _a.call(window);
      if (!census) return { staleCandidates: 0 };
      const now = performance.now();
      const staleCandidates = census.intervals.filter(
        (i) => {
          var _a2;
          return now - i.created > 5e3 && ((_a2 = i.stack) == null ? void 0 : _a2.includes("useEffect"));
        }
      ).length;
      return { staleCandidates };
    });
    if (result.staleCandidates === 0) return [];
    const finding = {
      id: createFindingId("memory", "stale_closure", "useEffect-interval"),
      module: "memory",
      type: "stale_closure",
      category: "theoretical_debt",
      severity: "low",
      confidence: "low",
      title: `Stale closure \u2014 ${result.staleCandidates} interval(s) alive >5s, likely from useEffect with empty deps`,
      description: `${result.staleCandidates} setInterval call(s) have been alive for more than 5 seconds and appear to originate from a useEffect. Intervals created inside useEffect with an empty dependency array capture state at mount time and never see updated values (stale closure).`,
      observedIn: "setInterval census \xB7 interval alive >5s, likely created in useEffect with stale closure",
      evidence: [
        {
          kind: "console_log",
          path: "memory/stale-closure",
          description: `${result.staleCandidates} interval(s) alive >5s with useEffect in stack trace`
        }
      ],
      metrics: {
        staleCandidates: result.staleCandidates,
        aliveThresholdMs: 5e3
      },
      recommendation: "Add the captured state variable to the useEffect dependency array, or use a ref (`useRef`) to always read the latest value without triggering re-subscription.",
      scoreImpact: 12
    };
    return [finding];
  }
  async dispose() {
  }
};
var INTERVAL_CENSUS_SCRIPT = `
(function() {
  if (window.__VIBE_INTERVAL_CENSUS__) return;

  var _intervals = {};
  var _origSetInterval = window.setInterval;
  var _origClearInterval = window.clearInterval;
  var _origSetTimeout = window.setTimeout;
  var _origClearTimeout = window.clearTimeout;

  window.setInterval = function(fn, delay) {
    var args = Array.prototype.slice.call(arguments, 2);
    var id = _origSetInterval.apply(window, arguments);
    _intervals[id] = {
      id: id,
      created: performance.now(),
      delay: delay || 0,
      stack: (new Error().stack || '').slice(0, 500)
    };
    return id;
  };

  window.clearInterval = function(id) {
    if (id != null) delete _intervals[id];
    return _origClearInterval.call(window, id);
  };

  window.setTimeout = function(fn, delay) {
    var id;
    var wrappedFn = function() {
      delete _intervals[id];
      if (typeof fn === 'function') fn.apply(this, arguments);
    };
    var newArgs = [wrappedFn, delay].concat(Array.prototype.slice.call(arguments, 2));
    id = _origSetTimeout.apply(window, newArgs);
    _intervals[id] = {
      id: id,
      created: performance.now(),
      delay: delay || 0,
      stack: (new Error().stack || '').slice(0, 500)
    };
    return id;
  };

  window.clearTimeout = function(id) {
    if (id != null) delete _intervals[id];
    return _origClearTimeout.call(window, id);
  };

  window.__VIBE_INTERVAL_CENSUS__ = function() {
    var entries = Object.values(_intervals);
    return { active: entries.length, intervals: entries };
  };
})();
`;
var LISTENER_CENSUS_SCRIPT = `
(function() {
  if (window.__VIBE_LISTENER_CENSUS__) return;

  var addCount = 0;
  var removeCount = 0;
  var byType = {};
  var devStacks = 0; // listeners from known dev tools

  var _origAdd = EventTarget.prototype.addEventListener;
  var _origRemove = EventTarget.prototype.removeEventListener;

  var DEV_PATTERNS = ['/@vite/', '@vite/client', '@react-refresh', 'webpack-dev-server', 'webpack-hmr'];

  function isDevStack(stack) {
    for (var i = 0; i < DEV_PATTERNS.length; i++) {
      if (stack.indexOf(DEV_PATTERNS[i]) !== -1) return true;
    }
    return false;
  }

  EventTarget.prototype.addEventListener = function(type, listener, options) {
    var stack = (new Error().stack || '');
    if (isDevStack(stack)) {
      devStacks++;
    } else {
      addCount++;
      byType[type] = (byType[type] || 0) + 1;
    }
    return _origAdd.call(this, type, listener, options);
  };

  EventTarget.prototype.removeEventListener = function(type, listener, options) {
    removeCount++;
    return _origRemove.call(this, type, listener, options);
  };

  window.__VIBE_LISTENER_CENSUS__ = function() {
    return {
      total: addCount - removeCount,
      addCount: addCount,
      removeCount: removeCount,
      byType: Object.assign({}, byType)
    };
  };
})();
`;
var STATE_TRACKER_SCRIPT = `
(function() {
  if (window.__VIBE_SAMPLE_STATE__) return;

  window.__VIBE_SAMPLE_STATE__ = function() {
    var samples = [];
    var now = performance.now();

    // Check Redux store
    try {
      if (window.__REDUX_STORE__ && typeof window.__REDUX_STORE__.getState === 'function') {
        var state = window.__REDUX_STORE__.getState();
        if (state && typeof state === 'object') {
          Object.keys(state).forEach(function(key) {
            var val = state[key];
            var size = 0;
            if (Array.isArray(val)) {
              size = val.length;
            } else if (val && typeof val === 'object') {
              size = Object.keys(val).length;
            }
            if (size > 0) {
              samples.push({ storeName: 'redux.' + key, size: size, timestamp: now });
            }
          });
        }
      }
    } catch (e) {}

    // Check Zustand stores
    try {
      if (window.__zustand_stores__ && typeof window.__zustand_stores__ === 'object') {
        Object.keys(window.__zustand_stores__).forEach(function(storeName) {
          try {
            var store = window.__zustand_stores__[storeName];
            var stateVal = typeof store.getState === 'function' ? store.getState() : store;
            if (stateVal && typeof stateVal === 'object') {
              Object.keys(stateVal).forEach(function(key) {
                var val = stateVal[key];
                var size = Array.isArray(val) ? val.length : 0;
                if (size > 0) {
                  samples.push({ storeName: 'zustand.' + storeName + '.' + key, size: size, timestamp: now });
                }
              });
            }
          } catch (e) {}
        });
      }
    } catch (e) {}

    // Check window-level arrays that look like logs (length > 100)
    try {
      Object.keys(window).forEach(function(key) {
        try {
          var val = window[key];
          if (Array.isArray(val) && val.length > 100) {
            samples.push({ storeName: 'window.' + key, size: val.length, timestamp: now });
          }
        } catch (e) {}
      });
    } catch (e) {}

    return { samples: samples };
  };
})();
`;
var MemoryModule = class {
  name = "memory";
  weight = 12;
  detectors = [];
  ctx = null;
  async initialize(ctx) {
    this.ctx = ctx;
    this.detectors = [
      new LeakedIntervalDetector(ctx),
      new LeakedListenerDetector(ctx),
      new UnboundedStateDetector(ctx),
      new RecursiveHandlerDetector(ctx),
      new StaleClosureDetector(ctx)
    ];
    try {
      await ctx.page.context().addInitScript(INTERVAL_CENSUS_SCRIPT + "\n" + LISTENER_CENSUS_SCRIPT + "\n" + STATE_TRACKER_SCRIPT);
    } catch (err) {
      ctx.logger.warn({ err }, "Failed to inject memory scripts");
    }
    return ok(void 0);
  }
  async onEvent(event) {
    await Promise.all(this.detectors.map((d) => d.onEvent(event)));
  }
  async finalize() {
    const all = await Promise.all(this.detectors.map((d) => d.finalize()));
    return all.flat();
  }
  async dispose() {
    await Promise.all(this.detectors.map((d) => d.dispose()));
  }
};

// apps/api/src/routes.ts
import { Router } from "express";
import { stat, rm } from "fs/promises";
import { join as join6 } from "path";

// apps/api/src/audit-store.ts
import { readdir, readFile as readFile2, writeFile as writeFile3 } from "fs/promises";
import { join as join5 } from "path";
import { tmpdir } from "os";
var STORE_DIR = join5(tmpdir(), "vibecheck-runs");
function runMetaPath(outputDir) {
  return join5(outputDir, "run.json");
}
async function persistRun(run, log2) {
  if (!run.outputDir) return;
  try {
    const { report: _report, ...meta } = run;
    await writeFile3(runMetaPath(run.outputDir), JSON.stringify(meta), "utf-8");
  } catch (err) {
    log2.warn({ err, id: run.id }, "audit-store.persistFailed");
  }
}
async function loadRuns(log2) {
  const map = /* @__PURE__ */ new Map();
  let dirs;
  try {
    dirs = await readdir(STORE_DIR);
  } catch {
    return map;
  }
  await Promise.all(
    dirs.map(async (dir) => {
      const metaPath = join5(STORE_DIR, dir, "run.json");
      try {
        const raw = await readFile2(metaPath, "utf-8");
        const run = JSON.parse(raw);
        if (run.status !== "running") {
          map.set(run.id, run);
        }
      } catch {
      }
    })
  );
  log2.info({ count: map.size }, "audit-store.loaded");
  return map;
}

// apps/api/src/routes.ts
var MAX_CONCURRENT = 3;
var MAX_HOURLY = 10;
var ONE_HOUR_MS = 60 * 60 * 1e3;
var ipState = /* @__PURE__ */ new Map();
function getIp(req) {
  var _a, _b;
  return ((_b = (_a = req.headers["x-forwarded-for"]) == null ? void 0 : _a.split(",")[0]) == null ? void 0 : _b.trim()) ?? req.socket.remoteAddress ?? "unknown";
}
function createErrorResponse(details, run) {
  const errorResponse = {
    error: "Report not available",
    details
  };
  if (run.status === "failed" && run.userError) {
    errorResponse.auditError = {
      code: run.userError.code,
      message: run.userError.message,
      actions: run.userError.actions
    };
  }
  return errorResponse;
}
function auditRateLimiter(req, res, next) {
  const ip = getIp(req);
  const now = Date.now();
  let state = ipState.get(ip);
  if (!state || now - state.windowStart > ONE_HOUR_MS) {
    state = { concurrent: 0, hourlyCount: 0, windowStart: now };
    ipState.set(ip, state);
  }
  if (state.concurrent >= MAX_CONCURRENT) {
    res.status(429).json({ error: "Too many concurrent audits. Max 3 at a time.", code: "E_RATE_LIMIT" });
    return;
  }
  if (state.hourlyCount >= MAX_HOURLY) {
    res.status(429).json({ error: "Hourly audit limit reached (10/hour).", code: "E_RATE_LIMIT" });
    return;
  }
  state.concurrent++;
  state.hourlyCount++;
  res.on("finish", () => {
    const s = ipState.get(ip);
    if (s) s.concurrent = Math.max(0, s.concurrent - 1);
  });
  next();
}
function createRouter(runner, activeAudits, log2) {
  const router = Router();
  router.post("/audit", auditRateLimiter, (req, res) => {
    const parseResult = auditConfigSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({ error: "Invalid config", details: parseResult.error.errors });
    }
    const config = parseResult.data;
    const id = createAuditId();
    const placeholder = { id, status: "running", findings: [], startedAt: Date.now() };
    activeAudits.set(id, placeholder);
    runner.run(config, id).then((completedRun) => {
      activeAudits.set(id, completedRun);
      persistRun(completedRun, log2);
    }).catch((err) => {
      log2.error({ err, id }, "audit.backgroundError");
      const existing = activeAudits.get(id);
      if (existing) {
        const failed = { ...existing, status: "failed", completedAt: Date.now(), userError: classifyError(err) };
        activeAudits.set(id, failed);
        persistRun(failed, log2);
      }
    });
    return res.status(202).json({ id, status: "running" });
  });
  router.get("/audit/:id", (req, res) => {
    var _a;
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "Missing audit id" });
    const run = activeAudits.get(id);
    if (!run) return res.status(404).json({ error: "Audit not found" });
    return res.json({
      id: run.id,
      status: run.status,
      findings: run.findings,
      score: run.score,
      scoreResult: run.scoreResult,
      startedAt: run.startedAt,
      completedAt: run.completedAt,
      error: run.status === "failed" ? ((_a = run.userError) == null ? void 0 : _a.message) ?? "(no error message available)" : void 0
    });
  });
  router.get("/audit/:id/download", async (req, res, next) => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "Missing audit id" });
    const run = activeAudits.get(id);
    if (!run) return res.status(404).json({ error: "Audit not found" });
    if (!run.outputDir) return res.status(404).json({ error: "Evidence not available" });
    const reportPath = join6(run.outputDir, "VIBE_REPORT.md");
    try {
      await stat(reportPath);
    } catch (err) {
      return res.status(404).json(createErrorResponse(
        err instanceof Error ? err.message : String(err),
        run
      ));
    }
    if (!run.scoreResult) {
      return res.status(404).json(createErrorResponse(
        "No score result available for this audit",
        run
      ));
    }
    res.setHeader("Content-Type", "text/markdown; charset=utf-8");
    res.setHeader("Content-Disposition", `attachment; filename="VIBE_REPORT_${id}.md"`);
    res.sendFile(reportPath, (err) => {
      if (err && !res.headersSent) next(err);
    });
  });
  router.delete("/audit/:id", async (req, res) => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "Missing audit id" });
    const run = activeAudits.get(id);
    if (!run) return res.status(404).json({ error: "Audit not found" });
    if (run.outputDir) {
      try {
        await rm(run.outputDir, { recursive: true, force: true });
      } catch (err) {
        log2.warn({ err, outputDir: run.outputDir }, "failed to delete output directory");
      }
    }
    activeAudits.delete(id);
    return res.json({ deleted: true });
  });
  return router;
}

// apps/api/src/server.ts
var log = pino2({ level: process.env.LOG_LEVEL ?? "info" });
var app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(pinoHttp({ logger: log }));
var auditRunner = new AuditRunner(log);
auditRunner.registerModule(new ObserverModule());
auditRunner.registerModule(new ProxyModule());
auditRunner.registerModule(new AssetInspectorModule());
auditRunner.registerModule(new RenderModule());
auditRunner.registerModule(new MemoryModule());
app.get("/health", (_req, res) => {
  res.json({ ok: true, uptime: process.uptime() });
});
var port = parseInt(process.env.PORT ?? "4000", 10);
loadRuns(log).then((activeAudits) => {
  app.use("/api", createRouter(auditRunner, activeAudits, log));
  app.listen(port, () => {
    log.info({ port }, "vibecheck-api.started");
  });
});
