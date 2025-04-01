declare var crypto: Crypto;

declare class Crypto {
  /**
   * Generates cryptographically strong random values
   * @param array - An integer-based TypedArray, that is one of Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, BigInt64Array, BigUint64Array but not Float32Array nor Float64Array
   * @returns The same array passed as 'array' but with its contents replaced with the newly generated random numbers
   */
  getRandomValues(array: IntegerArray): IntegerArray;
  /**
   * Generates a new version 4 UUID
   * @returns String containing a randomly generated, 36 character long v4 UUID
   */
  randomUUID(): string;
}

/**
 * Integer-based TypedArray, that is one of Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, BigInt64Array, BigUint64Array
 * but not Float32Array nor Float64Array
 */
declare type IntegerArray =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | BigInt64Array
  | BigUint64Array;
