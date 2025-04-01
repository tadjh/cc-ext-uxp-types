/**
 * The Blob object represents a blob, which is a file-like object of immutable, raw data;
 * they can be read as text or binary data, or converted into a [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)
 * so its methods can be used for processing the data.
 * @param array - Iterable object such as an Array, having ArrayBuffers, TypedArrays, DataViews, Blobs, strings, or a mix of any of such elements,
 * that will be put inside the Blob. Note that strings here are encoded as UTF-8, unlike the usual JavaScript UTF-16 strings.
 * @param [options] - `(optional)` Object which may specify any of the following properties:
 * @param [options.type] - `(optional)` MIME type of the data that will be stored into the blob. The default value is the empty string, ("").
 * @param [options.endings] - `(optional)` How to interpret newline characters (\n) within the contents, if the data is text. The default value, transparent,
 * copies newline characters into the blob without changing them. To convert newlines to the host system's native convention, specify the value native.
 */
declare class Blob {
  constructor(
    array: any[],
    options?: {
      type?: string;
      endings?: string;
    }
  );
  /**
   * Size of the Blob in bytes.
   */
  readonly size: number;
  /**
   * MIME type of the Blob.
   */
  readonly type: string;
  /**
   * Get the contents of the Blob in the form of an ArrayBuffer.
   * @returns `Promise<ArrayBuffer>` Promise that resolves with an ArrayBuffer that contains the blob's data in binary form.
   */
  arrayBuffer(): Promise<ArrayBuffer>;
  /**
   * Get a portion of the Blob's data selected from start to end (end not included).
   * @param [start = 0] - `(Optional)` Index into the Blob indicating the first byte to include in the new Blob
   * @param [end = size] - `(Optional)` Index into the Blob indicating the first byte that will NOT be included in the new Blob
   * @param [contentType = ""] - `(Optional)` String containing the file's {@link https://developer.mozilla.org/en-US/docs/Glossary/MIME_type | MIME type},
   * or empty string if the type could not be determined. Refer {@link https://developer.mozilla.org/en-US/docs/Web/API/Blob/type#value | Blob.type}
   * @returns New Blob object containing the specified subset of the data contained with the blob on which this method was called.
   * The original blob is not altered.
   */
  slice(start?: number, end?: number, contentType?: string): Blob;
  /**
   * Get the data contained within the Blob as a ReadableStream.
   * @returns Content of the Blob.
   */
  stream(): ReadableStream;
  /**
   * Get contents of the Blob as a string.
   * @returns `Promise<string>` Promise that resolves with a string which contains the blob's data as a text string.
   * The data is always presumed to be in UTF-8 format.
   */
  text(): Promise<string>;
}

interface URLSearchParams {
  append(name: string, value: string): void;
  delete(name: string): void;
  get(name: string): string | null;
  getAll(name: string): string[];
  has(name: string): boolean;
  set(name: string, value: string): void;
  forEach(
    callbackfn: (value: string, key: string, parent: URLSearchParams) => void
  ): void;
  sort(): void;
  toString(): string;

  // Add iterator methods if your target supports them
  entries(): IterableIterator<[string, string]>;
  keys(): IterableIterator<string>;
  values(): IterableIterator<string>;
  [Symbol.iterator](): IterableIterator<[string, string]>;
}

declare var URLSearchParams: {
  prototype: URLSearchParams;
  new (
    init?:
      | string
      | URLSearchParams
      | Record<string, string>
      | string[][]
      | Record<string, string[]>
      | null
  ): URLSearchParams;
};

/**
 * Defines MIME type and corresponding value type mappings
 */
type MimeTypeMap = {
  "text/plain": string;
  "text/html": string;
  "image/png": Blob | ArrayBuffer;
  "image/jpeg": Blob | ArrayBuffer;
  "application/json": object | string;
  // Add more MIME types as needed
};

/**
 * Represents a specific MIME type entry with proper type checking
 */
type MimeTypeEntry<T extends keyof MimeTypeMap = keyof MimeTypeMap> = {
  type: T;
  value: MimeTypeMap[T];
};

/**
 * Creates an instance of Clipboard.
 *
 * Note: Clipboard access is not supported for 3P plugins with manifest version upto 4. Valid manifest entry required from manifest version 5.;
 */
declare class Clipboard {
  /**
   * Set data to clipboard. Note: This is a non-standard API.
   * @param data The data to store in the clipboard. The object keys are the mime types, so for text, use text/plain as a key.
   * @example
   * navigator.clipboard.setContent({"text/plain": "Hello!"});
   * @deprecated This method is deprecated. Use write() instead.
   */
  setContent<T extends keyof MimeTypeMap>(
    data: Partial<{ [K in T]: MimeTypeMap[K] }>
  ): Promise<void>;

  /**
   * Get data from clipboard. Note: This is a non-standard API.
   * @returns Promise resolving to the data stored in the clipboard.
   * @example
   * navigator.clipboard.getContent();
   * @deprecated This method is deprecated. Use read() instead.
   */
  getContent(): Promise<Partial<MimeTypeMap>>;

  /**
   * Write data to clipboard. This can be used to implement cut and copy functionality.
   * @param data The data to set.
   * @example
   * navigator.clipboard.write({"text/plain": "Hello!"});
   */
  write(data: Partial<MimeTypeMap>): Promise<void>;

  /**
   * Write text to clipboard. This can be used to implement cut and copy text functionality.
   * @param text text string. Note that the object format is deprecated and shouldn't be used.
   * @example
   * navigator.clipboard.writeText("Hello!");
   */
  writeText(text: string): Promise<void>;

  /**
   * Read data from clipboard.
   * @returns Promise resolving to the data read from the clipboard.
   * @example
   * navigator.clipboard.read();
   */
  read(): Promise<Partial<MimeTypeMap>>;

  /**
   * Read text from clipboard.
   * @returns Promise resolving to the text read from the clipboard.
   * @example
   * navigator.clipboard.readText();
   */
  readText(): Promise<string>;

  /**
   * Clear clipboard content. Note: Nonstandard: This method is non-standard.
   * @returns Promise resolving when the content is cleared.
   * @example
   * navigator.clipboard.clearContent();
   * @deprecated This method is deprecated. Use writeText("") instead.
   */
  clearContent(): Promise<void>;
}

interface Navigator {
  clipboard: Clipboard;
}

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
    body?:
      | string
      | ArrayBuffer
      | TypedArray
      | Blob
      | FormData
      | ReadableStream
      | URLSearchParams;
    credentials?: RequestCredentials;
  }
): Promise<Response>;

type RequestCredentials = "include" | "omit";

/**
 * FormData provides a way to construct a set of key/value pairs, which can be used in fetch(), XMLHttpRequest.
 */
declare class FormData {
  /**
   * Appends a key value pair into FormData.
   * If the value is either ArrayBuffer and TypedArray, its buffer as well as the object are copied.
   * However, if the value is a File object value, the File object is cloned but its content is not cloned.
   * Consequently, the File object and the cloned one refer to the same content.
   * @param name - Key string for the pair
   * @param value - Value for the pair
   * @param fileName - 'Optional' file name to use for a File or a Blob object value.
   * The default filename is "blob" for Blob object and the file name would be taken from the name property for File object.
   */
  append(
    name: string,
    value: string | ArrayBuffer | TypedArray | File | Blob,
    fileName: string
  ): void;
  /**
   * Removes all entries from FormData whose name is same with the input name.
   * @param name - Name of the key to delete
   */
  delete(name: string): void;
  /**
   * Returns an iterator which iterates through all key/value pairs contained in the FormData.
   * The key of each pair is a string object and the value is either a string or a Blob object.
   * @returns Iterator for all key-value pairs in FormData.
   */
  entries(): iterator;
  /**
   * Returns the first value associated with a given key from within a FormData object.
   * Use getAll() if you expect multiple values and want all of them.
   * @param name - Name of the key to retrieve
   * @returns Value whose key matches the specified name. Otherwise, null.
   */
  get(name: string): string | Blob;
  /**
   * Returns all the values associated with a given key from within a FormData object.
   * @param name - Name of the key to retrieve
   * @returns Array of values whose key matches the specified name. Otherwise, an empty list.
   */
  getAll(name: string): any[];
  /**
   * Test if a FormData object contains a certain key.
   * @param name - Name of the key to test
   * @returns True if a key of FormData matches the specified name. Otherwise, false.
   */
  has(name: string): boolean;
  /**
   * Returns an iterator which iterates through all keys in FormData.
   * The keys are strings.
   * @returns Iterator of FormData's keys.
   */
  keys(): iterator;
  /**
   * If there are entries whose name is same with the input name,
   * replaces the first existing entry with new entry and removes the others.
   * If not, appends a new entry with name/value.
   * @param name - Name of the field
   * @param value - Field's value. The value is converted to a string if the value is neither string nor Blob.
   * @param filename - Filename reported to the server when a Blob object or a File object is passed as a value.
   *      The default filename is "blob" for Blob object and the file name would be taken from the name property for File object.
   */
  set(name: string, value: string | Blob, filename: string): void;
  /**
   * Returns an iterator which iterates through all values in the FormData.
   * The values are strings or Blob objects.
   * @returns Iterator of FormData's values.
   */
  values(): iterator;
}

// TODO Improve typing and rename to Iterator
declare type iterator = any;

/**
 * Headers class represents HTTP request and response headers.
 * @param init - Object containing any HTTP headers you want to pre-populate your Headers with.
 */
declare class Headers {
  constructor(init: string | Headers);
  /**
   * Appends a new value onto an existing header inside a Header object, or add the header if it does not exist.
   * @param name - Name of the HTTP header
   * @param value - Value of the HTTP header
   */
  append(name: string, value: string): void;
  /**
   * Deletes a header from the current Header object.
   * @param name - Name of the HTTP header
   */
  delete(name: string): void;
  /**
   * Returns a byte string of all the values of a header within the Headers object with given name.
   * If the requested header does not exist in the Headers object, it returns null.
   * @param name - Name of the HTTP header.
   * @returns Value of the retrieved header.
   */
  get(name: string): string;
  /**
   * Indicates whether the Headers object contains a certain header.
   * @param name - Name of the HTTP header.
   * @returns Indicates whether the Headers object contains the input name.
   */
  has(name: string): boolean;
  /**
   * Sets a new value for the existing header inside the Headers object, or add the header if it does not exist.
   * @param name - Name of the HTTP header.
   * @param value - Value of the HTTP header.
   */
  set(name: string, value: string): void;
  /**
   * Executes a callback function once per each key/value pair in the Headers object.
   * @param callbackFn - Function to execute for each entry in the map. It takes the following arguments.
   * @param thisArg - Value to use as this when executing callback.
   */
  forEach(callbackFn: (...params: any[]) => any, thisArg: any): void;
  /**
   * Returns an iterator object allowing to go through all keys contained in the Headers object.
   * @returns Iterator.
   */
  keys(): iterator;
  /**
   * Returns an iterator object allowing to go through all values contained in the Headers object.
   * @returns Iterator.
   */
  values(): iterator;
  /**
   * Returns an iterator object allowing to go through all key/value pairs contained in the Headers object.
   * @returns Iterator.
   */
  entries(): iterator;
}

declare class Request {
  constructor(
    input: string | Request,
    options: {
      method?: string;
      headers?: string | Headers;
      body?:
        | Blob
        | ArrayBuffer
        | TypedArray
        | FormData
        | string
        | ReadableStream
        | URLSearchParams;
      credentials?: RequestCredentials;
      signal?: AbortSignal;
    }
  );

  /**
   * The `ReadableStream` object with the body contents that have been added to the request or null if body is null.
   */
  readonly body: ReadableStream | null;

  /**
   * Indicates whether the request body has been read yet.
   */
  readonly bodyUsed: boolean;

  /**
   * Indicates whether the user agent should send or receive cookies
   * Possible values are:
   * ```
   *  "omit": Never send or receive cookies.
   *  "include": Always send cookies.
   * ```
   */
  readonly credentials: RequestCredentials;

  /**
   * The `Headers` object associated with the request.
   */
  readonly headers: Headers;

  /**
   * Request's method. Possible values are "GET", "POST", "HEAD", "PUT", "DELETE" and "OPTIONS".
   */
  readonly method: "GET" | "POST" | "HEAD" | "PUT" | "DELETE" | "OPTIONS";

  /**
   * URL of the request.
   */
  readonly url: string;

  /**
   * Reads the request body and returns it as a Promise that resolves with an ArrayBuffer.
   * @returns `Promise<ArrayBuffer>` Promise that resolves with an ArrayBuffer.
   */
  arrayBuffer(): Promise<ArrayBuffer>;

  /**
   * Reads the request body and returns it as a Promise that resolves with a Blob.
   * @returns `Promise<Blob>` Promise that resolves with a Blob.
   */
  blob(): Promise<Blob>;

  /**
   * Creates a copy of the current request object.
   * @returns `Request` Copy of the request.
   */
  clone(): Request;

  /**
   * Reads the request body and returns it as a Promise that resolves with a FormData.
   * @returns `Promise<FormData>` Promise that resolves with a FormData.
   */
  formData(): Promise<FormData>;

  /**
   * Reads the request body and returns it as a Promise that resolves with a JSON object.
   * @returns `Promise<object>` Promise that resolves with the parsed JSON object.
   */
  json(): Promise<object>;

  /**
   * Reads the request body and returns it as a Promise that resolves with a String decoded using UTF-8.
   * @returns `Promise<string>` Promise that resolves with a String.
   */
  text(): Promise<string>;
}

declare type TypedArray =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array
  // | BigInt64Array // TODO Not available in es2015
  // | BigUint64Array; // TODO Not available in es2015

/**
 * Response class represents a resource request.
 * @param [body = null] - Body of the response.
 * @param [options = {}] - Custom settings that you want to apply to the response.
 * @param [options.status = 200] - Status code of the response.
 * @param [options.statusText] - Status message associated with the status code. The default value is "".
 * @param [options.headers = {}] - Any headers that you want to add to the response.
 */
declare class Response {
  constructor(
    body?:
      | string
      | Blob
      | ArrayBuffer
      | TypedArray
      | FormData
      | ReadableStream
      | URLSearchParams
      | null,
    options?: {
      status?: number;
      statusText?: string;
      headers?: Headers | string;
    }
  );
  /**
   * ReadableStream object with the body contents or null if response's body is empty.
   */
  readonly body: ReadableStream;
  /**
   * Indicates whether the response body has been read yet.
   */
  readonly bodyUsed: boolean;
  /**
   * Headers object associated with the response.
   */
  readonly headers: Headers;
  /**
   * Indicates whether the response was successful (if status is in range 200-299) or not.
   */
  readonly ok: boolean;
  /**
   * HTTP status codes of the response.
   */
  readonly status: number;
  /**
   * Status message corresponding to the HTTP status code. Default is "".
   */
  readonly statusText: string;
  /**
   * URL of the response.
   */
  readonly url: string;
  /**
   * Reads the response stream to completion and returns it as a Promise that resolves with an ArrayBuffer.
   * @returns `Promise<ArrayBuffer>` Promise that resolves with an ArrayBuffer.
   */
  arrayBuffer(): Promise<ArrayBuffer>;
  /**
   * Reads the response stream to completion and returns it as a Promise that resolves with a Blob.
   * @returns `Promise<Blob>` Promise that resolves with a Blob.
   */
  blob(): Promise<Blob>;
  /**
   * Creates a copy of the current response object.
   * @returns Copy of the response.
   */
  clone(): Response;
  /**
   * Reads the response stream to completion and returns it as a Promise that resolves with a FormData.
   * @returns `Promise<FormData>` Promise that resolves with a FormData.
   */
  formData(): Promise<FormData>;
  /**
   * Reads the response stream to completion and
   * returns it as a Promise that resolves with the result of parsing the body text as JSON.
   * @returns `Promise<Object>` Promise that resolves to JSON object.
   */
  json(): Promise<object>;
  /**
   * Reads the response stream to completion and returns it as a Promise that resolves with a String decoded using UTF-8.
   * @returns `Promise<string>` Promise that resolves with a String.
   */
  text(): Promise<string>;
  /**
   * @returns Response object
   */
  static error(): Response;
  /**
   * @param url - URL that the new response is to originate from.
   * @param [status = 302] - Status code for the response. Possible values are 301, 302, 303, 307 and 308.
   * @returns Response object
   */
  static redirect(url: string, status?: 301 | 302 | 303 | 307 | 308): Response;
}

/**
 * WebSocket provides the API for creating and managing a WebSocket connection to a server,
 * as well as for sending and receiving data on the connection.
 * @example
 * var ws = new WebSocket("wss://demos.kaazing.com/echo","wss");
 * @param url - URL to which to connect; this should be the URL to which the WebSocket server will respond.
 * @param protocols - Either a single protocol string or an array of protocol strings.
 */
declare class WebSocket {
  constructor(url: string, protocols: string | string[]);
  /**
   * Current state of the WebSocket connection.
   * One of the following values:
   *
   *      CONNECTING(0)   : Socket has been created. The connection is not yet open.
   *      OPEN(1)         : Connection is open and ready to communicate.
   *      CLOSING(2)      : Connection is in the process of closing.
   *      CLOSED(3)       : Connection is closed or couldn't be opened.
   */
  readonly readyState:
    | typeof WebSocket.CONNECTING
    | typeof WebSocket.OPEN
    | typeof WebSocket.CLOSING
    | typeof WebSocket.CLOSED;
  /**
   * URL of the WebSocket as resolved by the constructor.
   */
  readonly url: string;
  /**
   * Name of the sub-protocol the server selected.
   * This will be one of the strings specified in the protocols parameter when creating the WebSocket object.
   * It returns an empty string if no connection is established.
   */
  protocol: string;
  /**
   * Number of bytes of data that have been queued using calls to send() but not yet transmitted to the network.
   * This value resets to zero once all queued data has been sent.
   * This value does not reset to zero when the connection is closed;
   * If you keep calling send(), this will continue to climb.
   */
  readonly bufferedAmount: number;
  /**
   * Type of the binary data being received over WebSocket connection.
   * Available binary types: "blob", "arraybuffer".
   */
  binaryType: "blob" | "arraybuffer";
  /**
   * Enqueues the specified data to be transmitted to the other end over the WebSocket connection,
   * increasing the value of bufferedAmount by the number of bytes needed to contain the data.
   * If the data can't be sent (for example, because it needs to be buffered but the buffer is full), the socket is closed automatically.
   * @example
   * ws.send(new Float32Array([ 5, 2, 1, 3, 6, -1 ]))
   * @example
   * ws.send(new Int32Array([5,-1]).buffer)
   * @param data - Data to send to the server.
   */
  send(data: string | ArrayBuffer | ArrayBufferView): void;
  /**
   * Closes the websocket connection.
   * @param [code = 1000] - Integer value as per https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#close().
   * @param [reason = ""] - Human-readable string explaining why the connection is closing. The default value is "".
   */
  close(code?: number, reason?: string): void;
  static CONNECTING: 0;
  static OPEN: 1;
  static CLOSING: 2;
  static CLOSED: 3;
}

declare type XMLHttpRequestEventUpload = {
  /**
   * The upload has begun.
   * @returns void
   */
  onloadstart: (event: ProgressEvent) => void;
  /**
   * Periodically delivered to indicate the amount of progress made so far.
   * @returns void
   */
  onprogress: (event: ProgressEvent) => void;
  /**
   * The upload operation was aborted.
   * @returns void
   */
  onabort: (event: ProgressEvent) => void;
  /**
   * The upload operation was aborted.
   * @returns void
   */
  onerror: (event: ProgressEvent) => void;
  /**
   * The upload completed successfully.
   * @returns void
   */
  onload: (event: ProgressEvent) => void;
  /**
   * The upload timed out because a reply did not arrive within the time interval specified by the `XMLHttpRequest.timeout`.
   * @returns void
   */
  ontimeout: (event: ProgressEvent) => void;
  /**
   * Upload finished. This event does not differentiate between success or failure, and is sent at the end of the upload regardless of the outcome. Prior to this event, one of load, error, abort, or timeout will already have been delivered to indicate why the upload ended.
   * @returns void
   */
  onloadend: (event: ProgressEvent) => void;
};

/**
 * XMLHttpRequest objects are used to interact with servers.
 * You can retrieve data from a URL without having to do a full page refresh.
 * This enables a Web page to update just part of a page without disrupting what the user is doing.
 */
declare class XMLHttpRequest {
  /**
   * URL of the response or the empty string if the URL is null.
   * Any URL fragment present in the URL will be stripped away and will be the final URL obtained after any redirects.
   * @example
   * const xhr = new XMLHttpRequest();
   * xhr.onload = () => {
   *     console.log(xhr.responseURL);
   * };
   * xhr.open("GET", "https://www.adobe.com");
   * xhr.send();
   */
  readonly responseURL: string;
  /**
   * State of the XMLHttpRequest object. Available states are as follows.
   *
   *      UNSENT(0):           Object has been constructed.
   *      OPENED(1):           open() method has been successfully invoked.
   *      HEADERS_RECEIVED(2): All headers of a response have been received.
   *      LOADING(3):          Response body is being received.
   *      DONE(4):             Data transfer has been completed or something went wrong during the transfer.
   * @example
   * const xhr = new XMLHttpRequest();
   * xhr.onreadystatechange = () => {
   *     console.log(xhr.readyState);
   * };
   * xhr.open("GET", "https://www.adobe.com");
   * xhr.send();
   */
  readonly readyState:
    | typeof XMLHttpRequest.UNSENT
    | typeof XMLHttpRequest.OPENED
    | typeof XMLHttpRequest.HEADERS_RECEIVED
    | typeof XMLHttpRequest.LOADING
    | typeof XMLHttpRequest.DONE;
  /**
   * Text receive from a server following a request being sent.
   * If readyState is not either LOADING or DONE, it returns the empty string.
   * @example
   * const xhr = new XMLHttpRequest();
   * xhr.addEventListener("load", () => {
   *     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
   *         console.log(xhr.responseText);
   *     }
   * });
   * xhr.open("GET", "https://www.adobe.com");
   * xhr.send();
   */
  readonly responseText: string;
  /**
   * Document containing the XML or HTML received by the request or
   * null if the request was unsuccessful, has not yet been sent, or
   * if the data cannot be parsed as XML or HTML.
   * @example
   * const xhr = new XMLHttpRequest();
   * xhr.onload = () => {
   *     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
   *         console.log(xhr.responseXML);
   *     }
   * };
   * xhr.open("GET", "https://www.mydocumentserver.com");
   * xhr.responseType = "document";
   * xhr.send();
   */
  readonly responseXML: Document;
  /**
   * Response's body content.
   * The value is null if the request is not yet complete or was unsuccessful.
   * @example
   * const xhr = new XMLHttpRequest();
   * xhr.onload = () => {
   *     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
   *         console.log(xhr.response);
   *     }
   * };
   * xhr.open("GET", "https://www.adobe.com");
   * xhr.send();
   */
  readonly response: string | ArrayBuffer | Blob | Document | Object;
  /**
   * HTTP status code of the response.
   * @example
   * const xhr = new XMLHttpRequest();
   * xhr.onload = () => {
   *     console.log(xhr.status);
   * };
   * xhr.open("GET", "https://www.adobe.com");
   * xhr.send();
   */
  readonly status: number;
  /**
   * String containing the response's status message.
   * It will be an empty string if the request's readyState is UNSENT or OPENED.
   * @example
   * const xhr = new XMLHttpRequest();
   * xhr.onload = () => {
   *     console.log(xhr.statusText);
   * };
   * xhr.open("GET", "https://www.adobe.com");
   * xhr.send();
   */
  readonly statusText: string;
  /**
   * Number of milliseconds a request can take before automatically being terminated.
   * Default value is 0, which means there is no timeout.
   */
  timeout: number;
  /**
   * Type of data contained in the response.
   * Available types are as follows.
   *
   *      "" (Empty string): Default type. Same as "text".
   *      "text"           : Text in s string.
   *      "arrayBuffer"    : ArrayBuffer containing binary data.
   *      "blob"           : Blob object containing binary data.
   *      "document"       : HTML Document or XML Document based on MIME type of the received data.
   *      "json"           : Object created by parsing the contents of the received data as JSON.
   */
  responseType: "" | "text" | "arrayBuffer" | "blob" | "document" | "json";
  /**
   * Gets the value of the withCredentials. It indicates whether to send cookies on a HTTP request.
   * When the value is set to true, XMLHttpRequest sends cookies. Otherwise, cookies are not sent.
   * Note that unlike the specification, the default is true.
   * @example
   * const xhr = new XMLHttpRequest();
   * xhr.withCredentials = true;
   */
  withCredentials: boolean;
  /**
   * XMLHttpRequestEventUpload object that can be used to monitor an upload's progress.
   * The following events can be triggered on an upload object and used to monitor the upload.
   *
   *      'loadstart'  : Upload has begun.
   *      'progress'   : Periodically delivered to indicate the amount of progress made so far.
   *      'abort'      : Upload operation was aborted.
   *      'error'      : Upload failed due to an error.
   *      'load'       : Upload completed successfully.
   *      'timeout'    : Upload timed out because a reply did not arrive within the time interval specified by the timeout.
   *      'loadend'    : Upload finished.
   * @example
   * const xhr = new XMLHttpRequest();
   * xhr.open("POST", "https://www.myserver.com");
   * xhr.upload.onprogress = (e) => {
   *     console.log(`Uploading ${(e.loaded / e.total) * 100}%`);
   * };
   * const arraybuffer = new ArrayBuffer(1024 * 1024);
   * // fill the arraybuffer with contents.
   * xhr.send(arraybuffer);
   */
  readonly upload: XMLHttpRequestEventUpload;
  /**
   * Aborts the request if it has already been sent.
   * When a request is aborted, its readyState is changed to UNSENT(0) and the request's status code is set to 0.
   * @example
   * const xhr = new XMLHttpRequest();
   * xhr.onabort = () => {
   *     console.log("aborted");
   * };
   * xhr.open("GET", "https://www.adobe.com");
   * xhr.send();
   * abortButton.addEventListener("click", () => {
   *     xhr.abort();
   * });
   */
  abort(): void;
  /**
   * Returns sorted and combined response’s header list.
   * Each header field is defined by a group of [lower cased name]": "[value]"\r\n". Combined value is separated by ", ".
   * @example
   * const xhr = new XMLHttpRequest();
   * xhr.onreadystatechange = () => {
   *     if (xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
   *         console.log(xhr.getAllResponseHeaders());
   *     }
   * };
   * xhr.open("GET", "https://www.adobe.com");
   * xhr.send();
   * @returns All the response headers.
   */
  getAllResponseHeaders(): string;
  /**
   * Returns the matching value of the given field name in response's header.
   * The search key value is case-insensitive.
   * @example
   * const xhr = new XMLHttpRequest();
   * xhr.onreadystatechange = () => {
   *     if (xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
   *         console.log(xhr.getResponseHeader("Content-Type"));
   *     }
   * };
   * xhr.open("GET", "https://www.adobe.com");
   * xhr.send();
   * @param name - Name to search in response's header list.
   * @returns Value of the given name in response's header list.
   */
  getResponseHeader(name: string): string;
  /**
   * Initializes a request or re-initializes an existing one.
   * Self-signed certificates are not currently supported for HTTPS connections.
   * Note that UXP does not support synchronous request, which means 'async' is false.
   * @param method - HTTP request method to use, such as "GET", "POST", "PUT", "DELETE", etc. Ignored for non-HTTP(S) URLs.
   * @param url - String representing the URL to send the request to.
   * @param [async = true] - Optional Boolean parameter, defaulting to true, indicating whether or not to perform the operation asynchronously.
   *                               If this value is false, the send() method does not return until the response is received.
   *                               If true, notification of a completed transaction is provided using event listeners.
   *                               This must be true if the multipart attribute is true, or an exception will be thrown.
   * @param [user = null] - Optional user name to use for authentication purposes; by default, this is the null value.
   * @param [password = null] - Optional password to use for authentication purposes; by default, this is the null value.
   */
  open(
    method: string,
    url: string,
    async?: boolean,
    user?: string,
    password?: string
  ): void;
  /**
   * Specifies a MIME type other than the one specified in the response to be used
   * when interpreting the data being transferred in a request.
   * If it fails to parse the MIME type, "application/octet-stream" will be used to interpret the data.
   * @example
   * const xhr = new XMLHttpRequest();
   * xhr.onload = () => {
   *     console.log(xhr.response);
   *     console.log(xhr.responseText);
   * };
   * xhr.open("GET", "https://www.myxmlserver.com");
   * xhr.overrideMimeType("text/plain");
   * xhr.send();
   * @param mimetype - MIME type to use instead of the one specified in the response.
   * Since Only UTF-8 is supported for charset of text encoding, MIME type’s parameters "charset" with other values than 'UTF-8' is not valid.
   */
  overrideMimeType(mimetype: string): void;
  /**
   * Adds a new request header or appends a value to an existing request header.
   * If a header is forbidden request header, it does nothing and just returns.
   * The following are forbidden request headers.
   *
   *      `Accept-Charset`
   *      `Accept-Encoding`
   *      `Access-Control-Request-Headers`
   *      `Access-Control-Request-Method`
   *      `Connection`
   *      `Content-Length`
   *      `Cookie`
   *      `Cookie2`
   *      `Date`
   *      `DNT`
   *      `Expect`
   *      `Host`
   *      `Keep-Alive`
   *      `Origin`
   *      `Referer`
   *      `Set-Cookie`
   *      `TE`
   *      `Trailer`
   *      `Transfer-Encoding`
   *      `Upgrade`
   *      `Via`
   *      If header starts with `proxy-` or `sec-`.
   * @example
   * const xhr = new XMLHttpRequest();
   * xhr.open("GET", "https://www.mywebserver.com");
   * xhr.setRequestHeader("Accept", "text/xml");
   * xhr.send();
   * @param header - Name of the header whose value is to be set.
   * @param data - Value to set as the body of the header.
   */
  setRequestHeader(header: string, data: string): void;
  /**
   * Sends the request to the server.
   * Body can be a Blob, an ArrayBuffer, a TypedArray, a DataView, a FormData or a string.
   * If no value is specified for the body, a default value of null is used.
   *
   * There is a caveat for sending a FormData object. The files in the FormData object are being read after calling this method.
   * To ensure uploading files as-is, the file contents or files shouldn't be changed until uploading files to the server is done. see [XMLHttpRequest.upload]{@link #module:global.xmlhttprequest.upload}.
   * If there is a problem during reading files, the XMLHttpRequest transaction initiated by this method can be aborted with an error event fired.
   * @example
   * <caption>Getting the resource as text</caption>
   * const xhr = new XMLHttpRequest();
   * xhr.addEventListener("load", () => {
   *     console.log(xhr.responseText);
   * });
   * xhr.open("GET", "https://www.adobe.com");
   * xhr.send();
   * @example
   * <caption>Post request</caption>
   * const xhr = new XMLHttpRequest();
   * xhr.onreadystatechange = () => {
   *     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
   *         console.log(xhr.responseText);
   *     }
   * };
   * xhr.open("POST", "https://www.myserver.com");
   * xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   * xhr.send("foo=bar&lorem=ipsum");
   * @param [body = \null] - Body of data to be sent in the request.
   */
  send(
    body?: Blob | ArrayBuffer | TypedArray | DataView | FormData | string | null
  ): void;
  static UNSENT: 0;
  static OPENED: 1;
  static HEADERS_RECEIVED: 2;
  static LOADING: 3;
  static DONE: 4;
}
