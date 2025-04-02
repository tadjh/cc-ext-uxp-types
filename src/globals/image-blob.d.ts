/**
 * Blobs are used to create URLs, which can be used as `src` in `HTMLImageElement`. It can be created using image data in the standard compression formats such as PNG, JPG, JPEG ,etc.
 * ImageBlob is a custom type that extends the support to use uncompressed image data. <br></br>
 * e.g. ImageBlob can be created by passing arrayBuffer containing the RGB values for each pixel and options containing metadata to interpret the data in arraybuffer.
 *
 * ImageBlob can be created in the following ways
 * - standard image compression formats: pass ArrayBuffer of the `standard compression formats` and mimeType of the compression in the options.type.
 * - uncompressed image: pass ArrayBuffer of the uncompressed image data i.e. raw data of each pixel and options to interpret the data, option.type should be passed as "image/uncompressed".<br></br>
 *
 * [PhotoshopImageData](/ps_reference/media/imaging/#photoshopimagedata-1) is compatible with ImageBlob,
 * `PhotoshopImageData` object can be directly passed in for options.
 *
 * <b>Note: `ImageBlob support is subject to enablement by HostApp. Currently supported by Photoshop.`</b>
 * @example
 * // Updating HTML with ImageBlob
 * <!DOCTYPE html>
 * <html>
 *
 * <head>
 * <script src="index.js"></script>
 * </head>
 * <style>
 * body {
 *   background-color: whitesmoke;
 *   padding: 0 16px;
 * }
 *
 * #image,
 *
 * container {
 *    margin: 8px;
 *    display: flex;
 *    flex-direction: row;
 *    justify-content: flex-start
 * }
 * </style>
 *
 *  <body>
 * <div class="container">
 *    <sp-button id="pixel-btn" variant="secondary" quiet>Paint image</sp-button>
 *    <img id="image"></img>
 * </div>
 *
 * </body>
 * </html>
 *
 * //Creating ImageBlob by creating the options Object seperatly and then pass the Object as argument
 * function getPixel() {
 *  const imageMetaData = {
 *     width : 8,
 *     height : 8,
 *     colorSpace : "RGB",
 *     colorProfile : "",
 *     pixelFormat : "RGB",
 *     components : 3,
 *     componentSize : 8,
 *     hasAlpha : false, // Alpha is set to false
 *     type : "image/uncompressed",
 *  }
 *
 *  let buffer = new ArrayBuffer(imageMetaData.width * imageMetaData.height * 3);
 *  let colorArrayView = new Uint8Array(buffer);
 *  for(let i = 0; i < colorArrayView.length / 4; i++) {
 *     // here we are creating a red image, update values to see the variations
 *     colorArrayView[i * 3] = 255; // Red Component
 *     colorArrayView[i * 3 + 1] = 0; // Green Component
 *     colorArrayView[i * 3 + 2] = 0; // Blue Component
 *  }
 *  let imageBlob = new ImageBlob(colorArrayView, imageMetaData);
 *  // Generate url which can be used as src on HTMLImageElement
 *  const url = URL.createObjectURL(imageBlob);
 *  // ensure that there is a HTMLImageElement in the Document with id `image`.
 *  const imageElement = document.getElementById("image");
 *  imageElement.src = url;
 *
 *  // revoke(destroy image from the memory) when url is no more required.
 *  URL.revokeObjectURL(url);
 * }
 * document.addEventListener("DOMContentLoaded", () => {
 * document.getElementById("pixel-btn").addEventListener("click", getPixel);
 * });
 * @example
 * // Creating ImageBlob using PhotoshopImageData object(more details about PhotoshopImageData in description).
 * const photoshopImageObject; // get image object using Photoshp's imaging apis.
 * let colorArrayView = await photoshopImageObject.getData();
 *
 * let imageBlob = new ImageBlob(colorArrayView, photoshopImageObject);
 * // Generate url which can be used as src on HTMLImageElement
 * const url = URL.createObjectURL(imageBlob);
 * // ensure that there is a HTMLImageElement in the Document with id `image`.
 * const imageElement = document.getElementById("image");
 * imageElement.src = url;
 *
 * // revoke(destroy image from the memory) when url is no more required.
 * URL.revokeObjectURL(url);
 * @param arrayBuffer - ArrayBuffer containing the image data
 * @param options - Meta data to interpret ArrayBuffer passed. For standard compression options.type is mandatory, for uncompressed image data all the values are mandatory unless mentioned optional
 * @param options.type - mimeType of the imageData passed. Could be standard formats "image/png", "image/jpg" and for uncompressed data "image/uncompressed"
 * @param options.width - The width in pixels of the image data
 * @param options.height - The height in pixels of the image data
 * @param options.colorSpace - The color space (or mode) for the image data. This can be "RGB" or "Grayscale"
 * @param options.hasAlpha - True if the image includes an alpha channel
 * @param options.components - Number of components per pixel. This is 3 for RGB, 4 for RGBA and so forth
 * @param options.componentSize - Number of bits per component. This can be 8 or 16
 * @param options.pixelFormat - Memory layout (order) of components in a pixel. Could be "RGB", "RGBA", or "Gray"
 * @param options.colorProfile - `[Optional]` - The color profile (or mode) for the image data. This could be be "Adobe RGB (1998)"
 */
declare class ImageBlob extends Blob {
    constructor(
        arrayBuffer: ArrayBuffer,
        options: {
            type: string;
            width: number;
            height: number;
            colorSpace: string;
            hasAlpha: boolean;
            components: number;
            componentSize: number;
            pixelFormat: string;
            colorProfile: string;
        },
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
     * or empty string if the type could not be determined. Refer {@link https://developer.mozilla.org/en-US/docs/Web/API/Blob/type#value | UxpBlob.type}
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
    text(): Promise<string>; // Updated return type to Promise<string>
}
