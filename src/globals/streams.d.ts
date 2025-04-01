/**
 * Creates a new CountQueuingStrategy object with the provided high water mark.
 * @param init - Object with high water mark property.
 * @param init.highWaterMark - The total number of chunks that can be contained in the internal queue before backpressure is applied.
 */
declare class CountQueuingStrategy {
  constructor(init: { highWaterMark: number });
  /**
   * The high water mark.
   */
  highWaterMark: number;
  /**
   * The size of chunk, always 1.
   */
  size(): 1;
}

/**
 * Creates a ReadableStream object from the given handlers.
 * <br></br>Note that `underlyingSource.type` and `underlyingSource.autoAllocateChunkSize` are not supported.
 * @param underlyingSource - Define how the constructed stream instance will behave.
 * @param underlyingSource.start(controller) - Called immediately when the object is constructed.
 *          This method needs to do anything else required to set up the stream functionality.
 *          If this process is to be done asynchronously, it can return a promise to signal success or failure.
 *          The controller parameter passed to this method is a ReadableStreamDefaultController.
 * @param underlyingSource.pull(controller) - Called repeatedly when the stream's internal queue of chunks is not full,
 *          up until it reaches its high water mark.
 *          If pull() returns a promise, then it won't be called again until that promise fulfills.
 *          If the promise rejects, the stream will become errored.
 *          The controller parameter passed to this method is a ReadableStreamDefaultController.
 * @param underlyingSource.cancel(reason) - Called if the app signals that the stream is to be cancelled.
 *          The contents should do whatever is necessary to release access to the stream source.
 *          If this process is asynchronous, it can return a promise to signal success or failure.
 *          The reason parameter contains a string describing why the stream was cancelled.
 * @param strategy - Defines a queuing strategy for the stream.
 * @param strategy.highWaterMark - Defines the total number of chunks that can be contained in the internal queue
 *          before backpressure is applied.
 * @param strategy.size(chunk) - Indicates the size to use for each chunk, in bytes.
 */
declare class ReadableStream {
  constructor(
    underlyingSource: {
      start(
        controller: ReadableStreamDefaultController
      ): (...params: any[]) => any;
      pull(
        controller: ReadableStreamDefaultController
      ): (...params: any[]) => any;
      cancel(reason: string): (...params: any[]) => any;
    },
    strategy: {
      highWaterMark: number;
      size(chunk: number): (...params: any[]) => any;
    }
  );
  /**
   * Indicate whether the readable stream is locked.
   */
  readonly locked: boolean;
  /**
   * Cancel the readable stream.
   * @param reason - reason for the cancellation.
   * @returns `Promise<void>`
   */
  cancel(reason: string): Promise<void>;
  /**
   * Create a reader and lock the stream to it.
   * <br></br>Note that currently ReadableStreamDefaultReader object is returned as options.mode <b>"byob" is not supported.</b>
   * @param options - Object with mode property.
   * @param options.mode - ReadableStreamDefaultReader being created, defaults to `undefined` and `byob` is not yet supported.
   */
  getReader(options: { mode: any }): ReadableStreamDefaultReader;
  /**
   * Provides a chainable way of piping the current stream through a transform stream.
   * @param transform - TransformStream or an object with the structure {writable, readable}
   * @param options.preventClose - If true, the source ReadableStream closing will no loger cause the destination WritableStream
   *          to be closed.
   * @param options.preventAbort - If true, errors in the source ReadableStream will no longer abort the destination WritableStream.
   * @param options.preventCancel - If true, errors in the destination WritableStream will no longer cancel the source ReadableStream.
   * @param options.signal - If aborted, ongoing pipe operations can be aborted.
   * @returns ReadableStream of the input transform stream.
   */
  pipeThrough(
    transform: TransformStream | WritableAndReadable,
    options: {
      preventClose: boolean;
      preventAbort: boolean;
      preventCancel: boolean;
      signal: AbortSignal;
    }
  ): ReadableStream;
  /**
   * Pipes this readable stream to a given writable stream destination.
   * @param destination - Final destination for the ReadableStream.
   * @param options - (Optional) Used when piping to the writable stream.
   * @param options.preventClose - If true, the source ReadableStream closing will no loger cause the destination WritableStream to be closed.
   * @param options.preventAbort - If true, errors in the source ReadableStream will no longer abort the destination WritableStream.
   * @param options.preventCancel - If true, errors in the destination WritableStream will no longer cancel the source ReadableStream.
   * @param options.signal - If aborted, ongoing pipe operations can be aborted.
   * @returns `Promise<void>` resolves when the piping process has completed.
   */
  pipeTo(
    destination: WritableStream,
    options: {
      preventClose: boolean;
      preventAbort: boolean;
      preventCancel: boolean;
      signal: AbortSignal;
    }
  ): any;
  /**
   * Tees the current ReadableStream, returning a two-element array
   * containing the two resulting branches as new ReadableStream instances.
   * @returns an array containing two ReadableStream instances.
   */
  tee(): any[];
}

declare class ReadableStreamDefaultController {
  /**
   * Returns the desired size to fill the controlled stream’s internal queue.
   * It can be negative, if the queue is over-full.
   */
  desiredSize: number;
  /**
   * Closes the controlled readable stream.
   * Consumers will still be able to read any previously-enqueued chunks from the stream,
   * but once those are read, the stream will become closed.
   */
  close(): void;
  /**
   * Enqueues the given chunk in the controlled readable stream.
   */
  enqueue(chunk: any): void;
  /**
   * Errors the controlled readable stream, making all future interactions with it fail with the given error.
   */
  error(error: any): void;
}

/**
 * Create a new ReadableStreamDefaultReader object and locks the stream to the new reader.
 */
declare class ReadableStreamDefaultReader {
  constructor(stream: ReadableStream);
  /**
   * Returns a promise that will be fulfilled when the stream becomes closed,
   * or rejected if the stream ever errors or the reader’s lock is released before the stream finishes closing.
   */
  closed: any;
  /**
   * Cancels the stream, signaling a loss of interest in the stream by a consumer.
   * The supplied reason argument will be given to the underlying source’s cancel() method.
   * The returned promise will fulfill if the stream shuts down successfully,
   * or reject if the underlying source signaled that there was an error doing so.
   * It will reject with a TypeError (without attempting to cancel the stream) if the stream is currently locked.
   * @returns `Promise<string>`
   */
  cancel(reason: string): any;
  /**
   * Returns a promise that allows access to the next chunk from the stream’s internal queue, if available.
   * @returns <br></br>&emsp;If a chunk is available, the promise will be fulfilled with an object of the form
   *          { value: theChunk, done: false }.
   *      <br></br>&emsp;If the stream becomes closed, the promise will be fulfilled with an object of the form
   *          { value: undefined, done: true }.
   *      <br></br>&emsp;If the stream becomes errored, the promise will be rejected with the relevant error.
   */
  read(): Promise<object>;
  /**
   * Releases the reader’s lock on the corresponding stream.
   * After the lock is released, the reader is no longer active.
   * If the associated stream is errored when the lock is released,
   * the reader will appear errored in the same way from now on; otherwise, the reader will appear closed.
   * If the reader’s lock is released while it still has pending read requests,
   * then the promises returned by the reader’s read() method are immediately rejected with a TypeError.
   * Any unread chunks remain in the stream’s internal queue and can be read later by acquiring a new reader.
   */
  releaseLock(): void;
}

/**
 * Cretes a new TransformStream object wrapping the provided transformer.
 * If no transformer argument is supplied, then the result will be an identity transform stream.
 * @param transformer - Defines algorithms for the specific transformation to be performed.
 * @param transformer.start - Called when the TransfromStream is constructed.
 * @param transformer.transform - Called when a chunk written to the writable is ready to be transformed.
 *          If no transform method is supplied, the identity transform is used.
 * @param transformer.flush - Called after all chunks written to the writable have been successfully transformed,
 *          and the writable is about to be closed.
 * @param writableStrategy - Queuing strategy for the stream.
 * @param writableStrategy.highWaterMark - A non-negative number.
 *          The total number of chunks that can be contained in the internal queue before backpressure is applied
 * @param writableStrategy.size - The size to use for each chunk, in bytes.
 * @param readableStrategy - Queuing strategy for the stream.
 * @param readableStrategy.highWaterMark - A non-negative number.
 *          The total number of chunks that can be contained in the internal queue before backpressure is applied
 * @param readableStrategy.size - The size to use for each chunk, in bytes.
 */
declare class TransformStream {
  constructor(
    transformer: {
      start: (...params: any[]) => any;
      transform: (...params: any[]) => any;
      flush: (...params: any[]) => any;
    },
    writableStrategy: {
      highWaterMark: number;
      size: (...params: any[]) => any;
    },
    readableStrategy: {
      highWaterMark: number;
      size: (...params: any[]) => any;
    }
  );
  /**
   * ReadableStream representing the readable of this TransformStream.
   */
  readable: ReadableStream;
  /**
   * WritableStream representing the writable of this TransformStream.
   */
  writable: WritableStream;
}

declare class TransformStreamDefaultController {
  /**
   * Returns the desired size to fill the readable side’s internal queue.
   * It can be negative, if the queue is over-full.
   */
  desiredSize: number;
  /**
   * Enqueues the given chunk chunk in the readable side of the controlled transform stream.
   * @param chunk - The chunk being queued. A chunk is a single piece of data.
   */
  enqueue(chunk: any): void;
  /**
   * Errors both the readable side and the writable side of the controlled transform stream,
   * making all future interactions with it fail with the given error.
   * Any chunks queued for transformation will be discarded.
   */
  error(reason: string): void;
  /**
   * Closes the readable side and errors the writable side of the controlled transform stream.
   * This is useful when the transformer only needs to consume a portion of the chunks written to the writable side.
   */
  terminate(): void;
}

/**
 * Creates a new WritableStream object wrapping the provided underlying sink.
 * @param underlyingSink - Defines how the constructred stream object will behave.
 * @param underlyingSink.start(contorller) - Called immediately when the object is constructed.
 *              If this process is to be done asynchronously, it can return a promise to signal success or failure.
 *              The controller parameter passed to this method is a WritableStreamDefaultController.
 *              This can be used by the developer to control the stream during set up.
 * @param underlyingSink.write(chunk,controller) - Called when a new chunk of data is ready to be written to the underlying sink.
 *              It can return a promise to signal success or failure of the write operation.
 *              The controller parameter passed to this method is a WritableStreamDefaultController.
 *              This method will be called only after previous writes have succeeded,
 *              and never after the stream is closed or aborted.
 * @param underlyingSink.close(controller) - Called if the app signals that it has finished writing chunks to the stream.
 *              If this process is asynchronous, it can return a promise to signal success or failure.
 *              This method will be called only after all queued-up writes have succeeded.
 *              The controller parameter passed to this method is a WritableStreamDefaultController.
 * @param strategy - Defines a queuing strategy for the stream.
 * @param strategy.highWaterMark - The total number of chunks that can be contained
 *              in the internal queue before backpressure is applied.
 * @param strategy.size(chunk) - Indicates the size to use for each chunk, in bytes.
 */
declare class WritableStream {
  constructor(
    underlyingSink: {
      start(
        controller: WritableStreamDefaultController
      ): (...params: any[]) => any;
      write(
        chunk: number,
        controller: WritableStreamDefaultController
      ): (...params: any[]) => any;
      close(
        controller: WritableStreamDefaultController
      ): (...params: any[]) => any;
    },
    strategy: {
      highWaterMark: number;
      size(chunk: number): (...params: any[]) => any;
    }
  );
  /**
   * Indicate whether the WritableStream is locked.
   */
  locked: boolean;
  /**
   * Aborts the stream, signalling that the producer can no longer successfully write to the stream and
   * it's to be immediately moved to an error state, with any queued writes discarded.
   * @returns `Promise<void>`
   */
  abort(reason: any): any;
  /**
   * Closes the stream.
   * @returns `Promise<void>`
   */
  close(): any;
  /**
   * Returns a new WritableStreamDefaultWriter object and locks the stream to that object.
   * While the stream is locked, no other writer can be acquired until this one is released.
   */
  getWriter(): WritableStreamDefaultWriter;
}

declare class WritableStreamDefaultController {
  /**
   * Returns AbortSignal that can be used to abort the pending write or close operation when the stream is aborted.
   */
  signal: AbortSignal;
  /**
   * Closes the controlled writable stream, making all future interactions with it fails with the given error.
   */
  error(message: string): void;
}

/**
 * Creates a new WritableStreamDefaultWriter object.
 */
declare class WritableStreamDefaultWriter {
  constructor(stream: WritableStream);
  /**
   * Returns a Promise that fullfils if the stream becomes closed,
   * or rejects if the stream errors or the writer's lock is released.
   */
  closed: Promise<void>;
  /**
   * The desired size required to fill the stream's internal queue.
   * It will return null if the stream cannot be successfully written to.
   * It will return zero if the stream is closed.
   */
  desiredSize: number;
  /**
   * Returns a Promise that resolves when the desired size of the stream's internal queue transitions
   * from non-positive to positive, signaling that it is no longer applying backpressure.
   * Once the desired size dips back to zero or below, the getter will return a new promise that stays pending until the next transition.
   * If the stream becomes errored or aborted, or the writer’s lock is released, the returned promise will become rejected.
   */
  ready: Promise<void>;
  /**
   * Aborts the stream, signaling that the producer can no longer successfully write to the stream
   * and it is to be immediately moved to an errored state, with any queued-up writes discarded.
   * The returned promise will fulfill if the stream shuts down successfully, or reject if the underlying sink signaled that there was an error doing so.
   * It will reject with a TypeError if the stream is curretly locked.
   * @returns `Promise<void>`
   */
  abort(reason: string): any;
  /**
   * Closes the stream and returns a Promise that will fulfill if all remaining chunks are successfully written
   * and the stream successfully closes, or rejects if an error is encountered during this process.
   * It will reject with a TypeError (without attempting to cancel the stream) if the stream is currently locked.
   * @returns `Promise<void>`
   */
  close(): any;
  /**
   * Releases the writer’s lock on the corresponding stream. After the lock is released, the writer is no longer active.
   * If the associated stream is errored when the lock is released, the writer will appear errored in the same way from now on;
   * otherwise, the writer will appear closed.
   */
  releaseLock(): void;
  /**
   * Writes the given chunk to the writable stream and its underlying sink,
   * then returns a Promise that resolves to indicate the success or failure of the write operation.
   * @returns `Promise<void>`
   */
  write(chunk: any): any;
}

/**
 * Object with the structure {writable, readable}
 */
declare type WritableAndReadable = any;
