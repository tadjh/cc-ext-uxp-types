type BinaryType = "arraybuffer" | "blob";
type BlobPart = BufferSource | Blob | string;
type BodyInit = ReadableStream | XMLHttpRequestBodyInit;
type BufferSource = ArrayBufferView | ArrayBuffer;
type ClipboardItems = Record<string, string | Blob | PromiseLike<string | Blob>>; //ClipboardItem[]; // NOTE: Non-standard API as `ClipboardItem` is not supported
type EndingType = "native" | "transparent";
type FormDataEntryValue = string | Blob; // File; NOTE: Non-standard API as `File` is overwritten in UXP
type HeadersInit = [string, string][] | Record<string, string> | Headers;
type RequestInfo = Request | string;
type RequestCredentials = "include" | "omit";
type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";
type XMLHttpRequestBodyInit = Blob | BufferSource | FormData | URLSearchParams | string;
type XMLHttpRequestResponseType = "" | "arraybuffer" | "blob" | "document" | "json" | "text";

interface BlobPropertyBag {
    endings?: EndingType;
    type?: string;
}

interface ResponseInit {
    headers?: HeadersInit;
    status?: number;
    statusText?: string;
}

/**
 * A file-like object of immutable, raw data. Blobs represent data that isn't necessarily in a JavaScript-native format. The File interface is based on Blob, inheriting blob functionality and expanding it to support files on the user's system.
 *
 * Note: byte() method is not available in UXP.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob)
 */
interface Blob {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/size) */
    readonly size: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/type) */
    readonly type: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/arrayBuffer) */
    arrayBuffer(): Promise<ArrayBuffer>;
    // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/bytes) */
    // bytes(): Promise<Uint8Array>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/slice) */
    slice(start?: number, end?: number, contentType?: string): Blob;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/stream) */
    stream(): ReadableStream<Uint8Array>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/text) */
    text(): Promise<string>;
}

declare var Blob: {
    prototype: Blob;
    new (blobParts?: BlobPart[], options?: BlobPropertyBag): Blob;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams) */
interface URLSearchParams {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/size) */
    readonly size: number;
    /**
     * Appends a specified key/value pair as a new search parameter.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/append)
     */
    append(name: string, value: string): void;
    /**
     * Deletes the given search parameter, and its associated value, from the list of all search parameters.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/delete)
     */
    delete(name: string, value?: string): void;
    /**
     * Returns the first value associated to the given search parameter.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/get)
     */
    get(name: string): string | null;
    /**
     * Returns all the values association with a given search parameter.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/getAll)
     */
    getAll(name: string): string[];
    /**
     * Returns a Boolean indicating if such a search parameter exists.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/has)
     */
    has(name: string, value?: string): boolean;
    /**
     * Sets the value associated to a given search parameter to the given value. If there were several values, delete the others.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/set)
     */
    set(name: string, value: string): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/sort) */
    sort(): void;
    /** Returns a string containing a query string suitable for use in a URL. Does not include the question mark. */
    toString(): string;
    forEach(callbackfn: (value: string, key: string, parent: URLSearchParams) => void, thisArg?: any): void;
}

declare var URLSearchParams: {
    prototype: URLSearchParams;
    new (init?: string[][] | Record<string, string> | string | URLSearchParams): URLSearchParams;
};

/**
 * Available only in secure contexts.
 *
 * Note: Clipboard access is not supported for 3P plugins with manifest version upto 4. Valid manifest entry required from manifest version 5.
 * NOTE: Non-standard API as `Clipboard` does not extend `EventTarget`.
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Clipboard)
 */
interface Clipboard {
    /**
     * @deprecated This method is deprecated. Use write() instead.
     */
    setContent(): never;
    /**
     * @deprecated This method is deprecated. Use read() instead.
     */
    getContent(): never;
    /**
     * @deprecated This method is deprecated. Use writeText("") instead.
     */
    clearContent(): never;
    /**
     * Read data from clipboard.
     * @returns Promise resolving to the data read from the clipboard.
     * @example
     * navigator.clipboard.read();
     */
    read(): Promise<ClipboardItems>;
    /**
     * Read text from clipboard.
     * @returns Promise resolving to the text read from the clipboard.
     * @example
     * navigator.clipboard.readText();
     */
    readText(): Promise<string>;
    /**
     * Write data to clipboard. This can be used to implement cut and copy functionality.
     * @param data The data to set.
     * @example
     * navigator.clipboard.write({"text/plain": "Hello!"});
     */
    write(data: ClipboardItems): Promise<void>;
    /**
     * Write text to clipboard. This can be used to implement cut and copy text functionality.
     * @param text text string. Note that the object format is deprecated and shouldn't be used.
     * @example
     * navigator.clipboard.writeText("Hello!");
     */
    writeText(text: string): Promise<void>;
}

declare var Clipboard: {
    prototype: Clipboard;
    new (): Clipboard;
};

interface NavigatorLanguage {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/language) */
    readonly language: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/languages) */
    readonly languages: ReadonlyArray<string>;
}

/**
 * The state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities.
 *
 * Note: `Navigator` is not a standard API and does not extend NavigatorAutomationInformation, NavigatorBadge, NavigatorConcurrentHardware, NavigatorContentUtils, NavigatorCookies, NavigatorID, NavigatorLocks, NavigatorOnLine, NavigatorPlugins and NavigatorStorage.
 * Note: `Navigator` is not a standard API and does not implement the following methods:
 * - canShare
 * - getGamepads
 * - requestMIDIAccess
 * - requestMediaKeySystemAccess
 * - sendBeacon
 * - share
 * - vibrate
 * Note: `Navigator` is not a standard API and does not implement the following properties:
 * - credentials
 * - doNotTrack
 * - geolocation
 * - maxTouchPoints
 * - mediaCapabilities
 * - mediaDevices
 * - mediaSession
 * - permissions
 * - serviceWorker
 * - userActivation
 * - wakeLock
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator)
 */
interface Navigator extends NavigatorLanguage {
    /**
     * Available only in secure contexts.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/clipboard)
     */
    readonly clipboard: Clipboard;
    // /**
    //  * Available only in secure contexts.
    //  *
    //  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/credentials)
    //  */
    // readonly credentials: CredentialsContainer;
    // readonly doNotTrack: string | null;
    // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/geolocation) */
    // readonly geolocation: Geolocation;
    // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/maxTouchPoints) */
    // readonly maxTouchPoints: number;
    // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/mediaCapabilities) */
    // readonly mediaCapabilities: MediaCapabilities;
    // /**
    //  * Available only in secure contexts.
    //  *
    //  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/mediaDevices)
    //  */
    // readonly mediaDevices: MediaDevices;
    // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/mediaSession) */
    // readonly mediaSession: MediaSession;
    // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/permissions) */
    // readonly permissions: Permissions;
    // /**
    //  * Available only in secure contexts.
    //  *
    //  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/serviceWorker)
    //  */
    // readonly serviceWorker: ServiceWorkerContainer;
    // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/userActivation) */
    // readonly userActivation: UserActivation;
    // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/wakeLock) */
    // readonly wakeLock: WakeLock;
    // /**
    //  * Available only in secure contexts.
    //  *
    //  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/canShare)
    //  */
    // canShare(data?: ShareData): boolean;
    // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/getGamepads) */
    // getGamepads(): (Gamepad | null)[];
    // /**
    //  * Available only in secure contexts.
    //  *
    //  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/requestMIDIAccess)
    //  */
    // requestMIDIAccess(options?: MIDIOptions): Promise<MIDIAccess>;
    // /**
    //  * Available only in secure contexts.
    //  *
    //  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/requestMediaKeySystemAccess)
    //  */
    // requestMediaKeySystemAccess(keySystem: string, supportedConfigurations: MediaKeySystemConfiguration[]): Promise<MediaKeySystemAccess>;
    // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/sendBeacon) */
    // sendBeacon(url: string | URL, data?: BodyInit | null): boolean;
    // /**
    //  * Available only in secure contexts.
    //  *
    //  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/share)
    //  */
    // share(data?: ShareData): Promise<void>;
    // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/vibrate) */
    // vibrate(pattern: VibratePattern): boolean;
}

declare var Navigator: {
    prototype: Navigator;
    new (): Navigator;
};

declare var navigator: Navigator;

/**
 * Fetches a resource from the network.
 * @param input - Either the URL string to connect with or a Request object having the URL and the init option.
 * @param [init] - Custom settings for a HTTP request.
 * @param [init.method] - HTTP request method. The default value is "GET".
 * @param [init.headers] - HTTP request headers to add.
 * @param [init.body] - Body to add to HTTP request.
 * @param [init.credentials] - Indicates whether to send cookies. The default value is "include".
 * Possible values and functions are as follows:
 * <ul style="list-style: none;">
 *  <li>"omit" : cookies are NOT sent.
 *  <li>"include" : cookies are sent.
 * </ul>
 * @returns `Promise<Response>` Promise that resolves to a Response object.
 */
declare function fetch(
    input: string | Request,
    init?: {
        method?: string;
        headers?: Headers;
        body?: string | ArrayBuffer | TypedArray | Blob | FormData | ReadableStream | URLSearchParams;
        credentials?: RequestCredentials;
    },
): Promise<Response>;

/**
 * Provides a way to easily construct a set of key/value pairs representing form fields and their values, which can then be easily sent using the XMLHttpRequest.send() method. It uses the same format a form would use if the encoding type were set to "multipart/form-data".
 *
 * NOTE: Non-standard API as FormData does not support the following methods:
 * - forEach()
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData)
 */
interface FormData {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData/append) */
    append(name: string, value: string | Blob): void;
    append(name: string, value: string): void;
    append(name: string, blobValue: Blob, filename?: string): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData/delete) */
    delete(name: string): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData/get) */
    get(name: string): FormDataEntryValue | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData/getAll) */
    getAll(name: string): FormDataEntryValue[];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData/has) */
    has(name: string): boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData/set) */
    set(name: string, value: string | Blob): void;
    set(name: string, value: string): void;
    set(name: string, blobValue: Blob, filename?: string): void;
    // forEach(callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void;
}

declare var FormData: {
    prototype: FormData;
    new (): FormData;
    // new (form?: HTMLFormElement, submitter?: HTMLElement | null): FormData;
};

// TODO Improve typing and rename to Iterator
declare type iterator = any;

/**
 * This Fetch API interface allows you to perform various actions on HTTP request and response headers. These actions include retrieving, setting, adding to, and removing. A Headers object has an associated header list, which is initially empty and consists of zero or more name and value pairs.  You can add to this using methods like append() (see Examples.) In all methods of this interface, header names are matched by case-insensitive byte sequence.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers)
 */
interface Headers {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/append) */
    append(name: string, value: string): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/delete) */
    delete(name: string): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/get) */
    get(name: string): string | null;
    // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/getSetCookie) */
    // getSetCookie(): string[];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/has) */
    has(name: string): boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/set) */
    set(name: string, value: string): void;
    forEach(callbackfn: (value: string, key: string, parent: Headers) => void, thisArg?: any): void;
}

declare var Headers: {
    prototype: Headers;
    new (init?: HeadersInit): Headers;
};

/**
 * NOTE: Non-standard API as `Body` does not support bytes() method.
 */
interface Body {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/body) */
    readonly body: ReadableStream<Uint8Array> | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/bodyUsed) */
    readonly bodyUsed: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/arrayBuffer) */
    arrayBuffer(): Promise<ArrayBuffer>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/blob) */
    blob(): Promise<Blob>;
    // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/bytes) */
    // bytes(): Promise<Uint8Array>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/formData) */
    formData(): Promise<FormData>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/json) */
    json(): Promise<any>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/text) */
    text(): Promise<string>;
}

interface RequestInit {
    /** A BodyInit object or null to set request's body. */
    body?: BodyInit | null;
    // /** A string indicating how the request will interact with the browser's cache to set request's cache. */
    // cache?: RequestCache;
    /** A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials. */
    credentials?: RequestCredentials;
    /** A Headers object, an object literal, or an array of two-item arrays to set request's headers. */
    headers?: HeadersInit;
    // /** A cryptographic hash of the resource to be fetched by request. Sets request's integrity. */
    // integrity?: string;
    // /** A boolean to set request's keepalive. */
    // keepalive?: boolean;
    /** A string to set request's method. */
    method?: string;
    // /** A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode. */
    // mode?: RequestMode;
    // priority?: RequestPriority;
    // /** A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect. */
    // redirect?: RequestRedirect;
    // /** A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer. */
    // referrer?: string;
    // /** A referrer policy to set request's referrerPolicy. */
    // referrerPolicy?: ReferrerPolicy;
    /** An AbortSignal to set request's signal. */
    signal?: AbortSignal | null;
    // /** Can only be null. Used to disassociate request from any Window. */
    // window?: null;
}

/**
 * NOTE: Non-standard API as `Request` does not support the following properties:
 * - cache
 * - destination
 * - integrity
 * - keepalive
 * - mode
 * - redirect
 * - referrer
 * - referrerPolicy
 * - signal
 */
interface Request extends Body {
    // /**
    //  * Returns the cache mode associated with request, which is a string indicating how the request will interact with the browser's cache when fetching.
    //  *
    //  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/cache)
    //  */
    // readonly cache: RequestCache;
    /**
     * Returns the credentials mode associated with request, which is a string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/credentials)
     */
    readonly credentials: RequestCredentials;
    // /**
    //  * Returns the kind of resource requested by request, e.g., "document" or "script".
    //  *
    //  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/destination)
    //  */
    // readonly destination: RequestDestination;
    /**
     * Returns a Headers object consisting of the headers associated with request. Note that headers added in the network layer by the user agent will not be accounted for in this object, e.g., the "Host" header.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/headers)
     */
    readonly headers: Headers;
    // /**
    //  * Returns request's subresource integrity metadata, which is a cryptographic hash of the resource being fetched. Its value consists of multiple hashes separated by whitespace. [SRI]
    //  *
    //  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/integrity)
    //  */
    // readonly integrity: string;
    // /**
    //  * Returns a boolean indicating whether or not request can outlive the global in which it was created.
    //  *
    //  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/keepalive)
    //  */
    // readonly keepalive: boolean;
    /**
     * Returns request's HTTP method, which is "GET" by default.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/method)
     */
    readonly method: string;
    // /**
    //  * Returns the mode associated with request, which is a string indicating whether the request will use CORS, or will be restricted to same-origin URLs.
    //  *
    //  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/mode)
    //  */
    // readonly mode: RequestMode;
    // /**
    //  * Returns the redirect mode associated with request, which is a string indicating how redirects for the request will be handled during fetching. A request will follow redirects by default.
    //  *
    //  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/redirect)
    //  */
    // readonly redirect: RequestRedirect;
    // /**
    //  * Returns the referrer of request. Its value can be a same-origin URL if explicitly set in init, the empty string to indicate no referrer, and "about:client" when defaulting to the global's default. This is used during fetching to determine the value of the `Referer` header of the request being made.
    //  *
    //  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/referrer)
    //  */
    // readonly referrer: string;
    // /**
    //  * Returns the referrer policy associated with request. This is used during fetching to compute the value of the request's referrer.
    //  *
    //  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/referrerPolicy)
    //  */
    // readonly referrerPolicy: ReferrerPolicy;
    // /**
    //  * Returns the signal associated with request, which is an AbortSignal object indicating whether or not request has been aborted, and its abort event handler.
    //  *
    //  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/signal)
    //  */
    // readonly signal: AbortSignal;
    /**
     * Returns the URL of request as a string.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/url)
     */
    readonly url: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/clone) */
    clone(): Request;
}

/**
 * NOTE: Non-standard API as `Request` does not accept a URL Class as an input.
 */
declare var Request: {
    prototype: Request;
    new (
        input: RequestInfo, // | URL,
        init?: RequestInit,
    ): Request;
};

declare type TypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
// | BigInt64Array // TODO Not available in es2015
// | BigUint64Array; // TODO Not available in es2015

/**
 * This Fetch API interface represents the response to a request.
 *
 * NOTE: Non-standard API as `Response` does not support the following properties:
 * - redirected
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response)
 */
interface Response extends Body {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/headers) */
    readonly headers: Headers;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/ok) */
    readonly ok: boolean;
    // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/redirected) */
    // readonly redirected: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/status) */
    readonly status: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/statusText) */
    readonly statusText: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/type) */
    readonly type: ResponseType;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/url) */
    readonly url: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/clone) */
    clone(): Response;
}

declare var Response: {
    prototype: Response;
    new (body?: BodyInit | null, init?: ResponseInit): Response;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/error_static) */
    error(): Response;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/json_static) */
    json(data: any, init?: ResponseInit): Response;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/redirect_static) */
    redirect(
        url: string, // URL
        status?: number,
    ): Response;
};

/**
 * Provides the API for creating and managing a WebSocket connection to a server, as well as for sending and receiving data on the connection.
 *
 * NOTE: Non-standard API as `WebSocket` does not support the following properties:
 * - extensions
 * NOTE: Non-standard API as `WebSocket` does not support the following methods:
 * - onclose()
 * - onerror()
 * - onmessage()
 * - onopen()
 * - addEventListener()
 * - removeEventListener()
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket)
 */
interface WebSocket {
    /**
     * Returns a string that indicates how binary data from the WebSocket object is exposed to scripts:
     *
     * Can be set, to change how binary data is returned. The default is "blob".
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/binaryType)
     */
    binaryType: BinaryType;
    /**
     * Returns the number of bytes of application data (UTF-8 text and binary data) that have been queued using send() but not yet been transmitted to the network.
     *
     * If the WebSocket connection is closed, this attribute's value will only increase with each call to the send() method. (The number does not reset to zero once the connection closes.)
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/bufferedAmount)
     */
    readonly bufferedAmount: number;
    // /**
    //  * Returns the extensions selected by the server, if any.
    //  *
    //  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/extensions)
    //  */
    // readonly extensions: string;
    // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/close_event) */
    // onclose: ((this: WebSocket, ev: CloseEvent) => any) | null;
    // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/error_event) */
    // onerror: ((this: WebSocket, ev: Event) => any) | null;
    // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/message_event) */
    // onmessage: ((this: WebSocket, ev: MessageEvent) => any) | null;
    // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/open_event) */
    // onopen: ((this: WebSocket, ev: Event) => any) | null;
    /**
     * Returns the subprotocol selected by the server, if any. It can be used in conjunction with the array form of the constructor's second argument to perform subprotocol negotiation.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/protocol)
     */
    readonly protocol: string;
    /**
     * Returns the state of the WebSocket object's connection. It can have the values described below.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/readyState)
     */
    readonly readyState: number;
    /**
     * Returns the URL that was used to establish the WebSocket connection.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/url)
     */
    readonly url: string;
    /**
     * Closes the WebSocket connection, optionally using code as the the WebSocket connection close code and reason as the the WebSocket connection close reason.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/close)
     */
    close(code?: number, reason?: string): void;
    /**
     * Transmits data using the WebSocket connection. data can be a string, a Blob, an ArrayBuffer, or an ArrayBufferView.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/send)
     */
    send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void;
    readonly CONNECTING: 0;
    readonly OPEN: 1;
    readonly CLOSING: 2;
    readonly CLOSED: 3;
    // addEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    // removeEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    // removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

/**
 * Provides the API for creating and managing a WebSocket connection to a server, as well as for sending and receiving data on the connection.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket)
 */
declare var WebSocket: {
    prototype: WebSocket;
    new (
        url: string, // | URL, NOTE: Non-standard API as URL is not supported
        protocols?: string | string[],
    ): WebSocket;
    readonly CONNECTING: 0;
    readonly OPEN: 1;
    readonly CLOSING: 2;
    readonly CLOSED: 3;
};

/**
 * NOTE: Non-standard API as `XMLHttpRequestEventTarget` does not extend nor support the following methods:
 * - addEventListener()
 * - removeEventListener()
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequestEventTarget)
 * */
interface XMLHttpRequestEventTarget {
    onabort: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onerror: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onload: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onloadend: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onloadstart: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onprogress: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    ontimeout: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    // addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    // removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    // removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

/**
 * NOTE: Non-standard API as `XMLHttpRequestUpload` does not support the following methods:
 * - addEventListener()
 * - removeEventListener()
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequestUpload)
 * */
interface XMLHttpRequestUpload extends XMLHttpRequestEventTarget {
    // addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    // removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    // removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

/**
 * Use XMLHttpRequest (XHR) objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.
 *
 * NOTE: Non-standard API as `XMLHttpRequest` does not extend `XMLHttpRequestEventTarget`.
 * NOTE: Non-standard API as `XMLHttpRequest` does not support the following methods:
 * - onreadystatechange()
 * - addEventListener()
 * - removeEventListener()
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest)
 */
interface XMLHttpRequest {
    // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/readystatechange_event) */
    // onreadystatechange: ((this: XMLHttpRequest, ev: Event) => any) | null;
    /**
     * Returns client's state.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/readyState)
     */
    readonly readyState: number;
    /**
     * Returns the response body.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/response)
     */
    readonly response: any;
    /**
     * Returns response as text.
     *
     * Throws an "InvalidStateError" DOMException if responseType is not the empty string or "text".
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/responseText)
     */
    readonly responseText: string;
    /**
     * Returns the response type.
     *
     * Can be set to change the response type. Values are: the empty string (default), "arraybuffer", "blob", "document", "json", and "text".
     *
     * When set: setting to "document" is ignored if current global object is not a Window object.
     *
     * When set: throws an "InvalidStateError" DOMException if state is loading or done.
     *
     * When set: throws an "InvalidAccessError" DOMException if the synchronous flag is set and current global object is a Window object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/responseType)
     */
    responseType: XMLHttpRequestResponseType;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/responseURL) */
    readonly responseURL: string;
    /**
     * Returns the response as document.
     *
     * Throws an "InvalidStateError" DOMException if responseType is not the empty string or "document".
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/responseXML)
     */
    readonly responseXML: Document | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/status) */
    readonly status: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/statusText) */
    readonly statusText: string;
    /**
     * Can be set to a time in milliseconds. When set to a non-zero value will cause fetching to terminate after the given time has passed. When the time has passed, the request has not yet completed, and this's synchronous flag is unset, a timeout event will then be dispatched, or a "TimeoutError" DOMException will be thrown otherwise (for the send() method).
     *
     * When set: throws an "InvalidAccessError" DOMException if the synchronous flag is set and current global object is a Window object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/timeout)
     */
    timeout: number;
    /**
     * Returns the associated XMLHttpRequestUpload object. It can be used to gather transmission information when data is transferred to a server.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/upload)
     */
    readonly upload: XMLHttpRequestUpload;
    /**
     * True when credentials are to be included in a cross-origin request. False when they are to be excluded in a cross-origin request and when cookies are to be ignored in its response.
     *
     * Note: Unlike Standard API, this property is initially true.
     *
     * When set: throws an "InvalidStateError" DOMException if state is not unsent or opened, or if the send() flag is set.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/withCredentials)
     */
    withCredentials: boolean;
    /**
     * Cancels any network activity.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/abort)
     */
    abort(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) */
    getAllResponseHeaders(): string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/getResponseHeader) */
    getResponseHeader(name: string): string | null;
    /**
     * Sets the request method, request URL, and synchronous flag.
     *
     * Note: Unlike Standard API, this method does not accept a URL Class as an url input.
     *
     * Throws a "SyntaxError" DOMException if either method is not a valid method or url cannot be parsed.
     *
     * Throws a "SecurityError" DOMException if method is a case-insensitive match for `CONNECT`, `TRACE`, or `TRACK`.
     *
     * Throws an "InvalidAccessError" DOMException if async is false, current global object is a Window object, and the timeout attribute is not zero or the responseType attribute is not the empty string.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/open)
     */
    open(method: string, url: string): void; // URL
    open(method: string, url: string, async: boolean, username?: string | null, password?: string | null): void; // URL
    /**
     * Acts as if the `Content-Type` header value for a response is mime. (It does not change the header.)
     *
     * Throws an "InvalidStateError" DOMException if state is loading or done.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/overrideMimeType)
     */
    overrideMimeType(mime: string): void;
    /**
     * Initiates the request. The body argument provides the request body, if any, and is ignored if the request method is GET or HEAD.
     *
     * NOTE: Non-standard API as `send()` does not support Document as an input;
     *
     * Throws an "InvalidStateError" DOMException if either state is not opened or the send() flag is set.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/send)
     */
    send(body?: XMLHttpRequestBodyInit | null): void; // Document
    /**
     * Combines a header in author request headers.
     *
     * Throws an "InvalidStateError" DOMException if either state is not opened or the send() flag is set.
     *
     * Throws a "SyntaxError" DOMException if name is not a header name or if value is not a header value.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/setRequestHeader)
     */
    setRequestHeader(name: string, value: string): void;
    readonly UNSENT: 0;
    readonly OPENED: 1;
    readonly HEADERS_RECEIVED: 2;
    readonly LOADING: 3;
    readonly DONE: 4;
    // addEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    // removeEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    // removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
