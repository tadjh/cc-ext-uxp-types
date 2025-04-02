/**
 * Provides a local key-value store useful for setting preferences and other kinds of data.
 * This data is technically persistent, but can be cleared in a variety of ways,
 * so you should not store data using localStorage that you cannot otherwise reconstruct.
 * <InlineAlert variant="warning" slots="text"/>
 *
 * Do not store passwords or other secure forms of data using `localStorage`. Instead, use [storage.secureStorage]{@link /uxp-api/reference-js/Modules/uxp/Key-Value%20Storage/SecureStorage/}
 */
declare class LocalStorage {
    /**
     * Number of items stored in the local storage.
     */
    readonly length: number;
    /**
     * Remove all key/value pairs from the local storage.
     */
    clear(): void;
    /**
     * Gets the value for the key from the local storage.
     * Returns null if the key does not exist.
     * @param key - Key to retrieve the value of.
     * @returns Value corresponding to the key as string. If the key does not exist, null is returned.
     */
    getItem(key: string): string | null;
    /**
     * Returns the name of the nth key in the local storage.
     * @param index - Integer representing the number of the key
     * @returns Name of the key. If the index does not exist, null is returned.
     */
    key(index: number): string | null;
    /**
     * Removes a key/value pair from the local storage if it exists.
     * Nothing happens if there's no item associated with the given key.
     * @param key - Key to remove
     */
    removeItem(key: string): void;
    /**
     * Adds key and value to the local storage.
     * Updates the value if the given key already exists.
     * @param key - Key to set value
     * @param value - Value for the key
     */
    setItem(key: string, value: string): void;
}
declare var localStorage: LocalStorage;

/**
 * SessionStorage is available as `window.sessionStorage`
 * Provides a local key/value store useful for storing data that persists only for the plugin's current session.
 * For more information about the API itself, see the [localStorage]{@link ./LocalStorage} API
 */
declare class SessionStorage extends LocalStorage {}
declare var sessionStorage: SessionStorage;
