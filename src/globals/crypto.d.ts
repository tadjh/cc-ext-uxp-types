declare var crypto: Crypto;

/**
 * Basic cryptography features available in the current context. It allows access to a cryptographically strong random number generator and to cryptographic primitives.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Crypto)
 *
 * Note: UXP does not support the full Web Crypto API, but only a subset of it. The following methods are available:
 * - `getRandomValues()`: Generates cryptographically strong random values.
 * - `randomUUID()`: Generates a new version 4 UUID.
 *
 */
declare class Crypto {
    /**
     * Generates cryptographically strong random values
     * @param array - An integer-based TypedArray, that is one of Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, BigInt64Array, BigUint64Array but not Float32Array nor Float64Array
     * @returns The same array passed as 'array' but with its contents replaced with the newly generated random numbers
     */
    getRandomValues(array: IntegerArray): IntegerArray;
    /**
     * Generates a new version 4 UUID
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Crypto/randomUUID)
     * @returns String containing a randomly generated, 36 character long v4 UUID
     */
    randomUUID(): `${string}-${string}-${string}-${string}-${string}`;
}

/**
 * Integer-based TypedArray, that is one of Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, BigInt64Array, BigUint64Array
 * but not Float32Array nor Float64Array
 */
declare type IntegerArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array;
// | BigInt64Array // Questionable support in UXP ES2015
// | BigUint64Array; // Questionable support in UXP ES2015
