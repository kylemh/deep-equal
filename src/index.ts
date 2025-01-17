/* eslint-disable @typescript-eslint/no-use-before-define */

import {
  compareArrayBuffers,
  compareArrays,
  compareDataViews,
  compareDates,
  compareMaps,
  compareObjects,
  compareObjectsReact,
  compareRegexps,
  compareSets,
} from './comparators';

const { valueOf, toString } = Object.prototype;

export const isEqual = (a: any, b: any): boolean => {
  if (a === b) return true;

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    const ctor = a.constructor;

    if (ctor !== b.constructor) return false;

    if (ctor === Array) return compareArrays(a, b, isEqual);

    if (ctor === Date) return compareDates(a, b);

    if (ctor === RegExp) return compareRegexps(a, b);

    if (ctor === Map && a instanceof Map && b instanceof Map) return compareMaps(a, b, isEqual);

    if (ctor === Set && a instanceof Set && b instanceof Set) return compareSets(a, b);

    if (ctor === DataView) return compareDataViews(a, b);

    if (ctor === ArrayBuffer) {
      return compareArrayBuffers(new Uint8Array(a), new Uint8Array(b));
    }

    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      return compareArrayBuffers(a as any, b as any);
    }

    if (a.valueOf !== valueOf) return a.valueOf() === b.valueOf();

    if (a.toString !== toString) return a.toString() === b.toString();

    return compareObjects(a, b, isEqual);
  }

  // eslint-disable-next-line no-self-compare
  return a !== a && b !== b;
};

export const isEqualReact = (a: any, b: any): boolean => {
  if (a === b) return true;

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    const ctor = a.constructor;

    if (ctor !== b.constructor) return false;

    if (ctor === Array) return compareArrays(a, b, isEqual);

    if (ctor === Date) return compareDates(a, b);

    if (ctor === RegExp) return compareRegexps(a, b);

    if (ctor === Map && a instanceof Map && b instanceof Map) return compareMaps(a, b, isEqual);

    if (ctor === Set && a instanceof Set && b instanceof Set) return compareSets(a, b);

    if (ctor === DataView) return compareDataViews(a, b);

    if (ctor === ArrayBuffer) {
      return compareArrayBuffers(new Uint8Array(a), new Uint8Array(b));
    }

    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      return compareArrayBuffers(a as any, b as any);
    }

    if (a.valueOf !== valueOf) return a.valueOf() === b.valueOf();

    if (a.toString !== toString) return a.toString() === b.toString();

    return compareObjectsReact(a, b, isEqual);
  }

  // eslint-disable-next-line no-self-compare
  return a !== a && b !== b;
};

export const isEqualSimple = (a: any, b: any): boolean => {
  if (a === b) return true;

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    const ctor = a.constructor;

    if (ctor !== b.constructor) return false;

    if (ctor === Array) return compareArrays(a, b, isEqual);

    if (ctor === Date) return compareDates(a, b);

    if (ctor === RegExp) return compareRegexps(a, b);

    if (a.valueOf !== valueOf) return a.valueOf() === b.valueOf();

    if (a.toString !== toString) return a.toString() === b.toString();

    return compareObjects(a, b, isEqual);
  }

  // eslint-disable-next-line no-self-compare
  return a !== a && b !== b;
};

export const isEqualReactSimple = (a: any, b: any): boolean => {
  if (a === b) return true;

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    const ctor = a.constructor;

    if (ctor !== b.constructor) return false;

    if (ctor === Array) return compareArrays(a, b, isEqual);

    if (ctor === Date) return compareDates(a, b);

    if (ctor === RegExp) return compareRegexps(a, b);

    if (a.valueOf !== valueOf) return a.valueOf() === b.valueOf();

    if (a.toString !== toString) return a.toString() === b.toString();

    return compareObjectsReact(a, b, isEqual);
  }

  // eslint-disable-next-line no-self-compare
  return a !== a && b !== b;
};
