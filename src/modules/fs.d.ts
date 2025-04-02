declare module "fs" {
    type Encoding = "utf-8" | "utf-16be" | "utf-16le";

    interface Stats {
        dev: number;
        ino: number;
        mode: number;
        nlink: number;
        uid: number;
        gid: number;
        rdev: number;
        size: number;
        blksize: number;
        blocks: number;
        atimeMs: number;
        mtimeMs: number;
        ctimeMs: number;
        birthtimeMs: number;
        atime: string;
        mtime: string;
        ctime: string;
        birthtime: string;
    }

    type FileDescriptor = number;

    /**
     * UXP Provides Node.js style file system API, FSAPI.
     * Unlike [Entry]{@link ./uxp/Persistent%20File%20Storage/Entry/} based [File]{@link ./uxp/Persistent%20File%20Storage/File/} or [Folder]{@link ./uxp/Persistent%20File%20Storage/Folder/} classes,
     * these methods can directly access a local file or folder with path or file descriptor.
     * The starting point of a path in the native filesystem depends on the scheme.
     * UXP supports plugin-specific storage schemes, such as "plugin:", "plugin-data:",
     * and "plugin-temp:", as well as a native "file:" scheme for the path parameter.<br></br>
     * Note:<br></br>
     * 1. If there are no schemes defined for the path parameter of FSAPI methods, it considers to have "file:" scheme for the path.<br></br>
     * 2. [UWP]{@link https://learn.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide}(Universal Windows Platform)
     * has the strict [File access permissions]{@link https://learn.microsoft.com/en-us/windows/uwp/files/file-access-permissions},
     * and UXP FSAPI may have access issues with anonymous filepaths. So, XD does not support this feature for compatibility across platforms.<br></br>
     * 3. The native layer of UXP FSAPI is based on [libUV]{@link https://libuv.org/} except UWP powered features, such as FilePicker and Drag&Drop on Win10 XD.<br></br>
     */
    class fs {
        /**
         * Reads data from the path asynchronously.
         * The file format can be specified with the encoding options.
         * If an encoding is not supplied, the file is assumed to be a binary format.
         * @example
         * const data = await fs.readFile("plugin-data:/binaryFile.obj");
         * @example
         * const text = await fs.readFile("plugin-data:/textFile.txt", {encoding: "utf-8"});
         * @param path - path where the file to read is located
         * @param [options.encoding] - the encoding of the file can be "utf-8", "utf-16be" or "utf-16le"
         * @param callback - if not provided, this function will return Promise object
         * @returns `Promise<string | ArrayBuffer>` - the contents of the file
         */
        readFile(
            path: string,
            options?: {
                encoding?: Encoding;
            },
        ): Promise<string | ArrayBuffer>;
        readFile(
            path: string,
            options: {
                encoding?: Encoding;
            },
            callback: (file: string | ArrayBuffer) => void,
        ): void;
        /**
         * Reads data from the path synchronously.
         * The file format can be specified with the encoding options.
         * If an encoding is not supplied, the file is assumed to be a binary format.
         * @example
         * const data = fs.readFileSync("plugin-data:/binaryFile.obj");
         * @example
         * const text = fs.readFileSync("plugin-data:/textFile.txt", {encoding: "utf-8"});
         * @param path - path where the file to read is located
         * @param [options.encoding] - the encoding of the file can be "utf-8", "utf-16be" or "utf-16le"
         * @returns `string | ArrayBuffer` - the contents of the file
         */
        readFileSync(
            path: string,
            options: {
                encoding?: Encoding;
            },
        ): string | ArrayBuffer;
        /**
         * Writes data to the path asynchronously, appending if desired.
         * The format of the file is controlled via the encoding option, and defaults to a binary format.
         * @example
         * const bufLen = await fs.writeFile("plugin-data:/binaryFile.obj", new Uint8Array([1, 2, 3]));
         * @example
         * const strLen = await fs.writeFile("plugin-data:/textFile.txt", "It was a dark and stormy night.\n", {encoding: "utf-8"});
         * @param path - path where the file to write is located
         * @param data - the data to write to the file
         * @param [options.flag = w] - see [file-system-flags]{@link https://nodejs.org/api/fs.html#file-system-flags} in Node.js
         * @param [options.mode = 0o666] - see [File modes]{@link https://nodejs.org/api/fs.html#file-modes} in Node.js
         * @param [options.encoding] - the encoding of the file can be "utf-8", "utf-16be" or "utf-16le"
         * @param callback - if not provided, this function will return Promise object
         * @returns `Promise<number>` - the length of contents written to the file
         */
        writeFile(
            path: string,
            data: string | ArrayBuffer | ArrayBufferView,
            options?: {
                flag?: number | string;
                mode?: number | string;
                encoding?: Encoding;
            },
        ): Promise<number>;
        writeFile(
            path: string,
            data: string | ArrayBuffer | ArrayBufferView,
            options:
                | {
                      flag?: number | string;
                      mode?: number | string;
                      encoding?: Encoding;
                  }
                | undefined,
            callback: (length: number) => void,
        ): void;
        /**
         * Writes data to a path synchronously, appending if desired.
         * The format of the file is controlled via the encoding option, and defaults to a binary format.
         * @example
         * const bufLen = fs.writeFileSync("plugin-data:/binaryFile.obj", new Uint8Array([1, 2, 3]));
         * @example
         * const strLen = fs.writeFileSync("plugin-data:/textFile.txt", "It was a dark and stormy night.\n", {encoding: "utf-8"});
         * @param path - path where the file to write is located
         * @param data - the data to write to the file
         * @param [options.flag = w] - see [file-system-flags]{@link https://nodejs.org/api/fs.html#file-system-flags} in Node.js
         * @param [options.mode = 0o666] - see [File modes]{@link https://nodejs.org/api/fs.html#file-modes} in Node.js
         * @param [options.encoding] - the encoding of the file can be "utf-8", "utf-16be" or "utf-16le"
         * @returns the length of contents written to the file
         */
        writeFileSync(
            path: string,
            data: string | ArrayBuffer | ArrayBufferView,
            options?: {
                flag?: number | string;
                mode?: number | string;
                encoding?: string;
            },
        ): number;
        /**
         * Opens or a creates a file asynchronously
         * @example
         * const fd = await fs.open("plugin-data:/fileToRead.txt", "r");
         * @param path - path where to open a file
         * @param [flag = r] - see [file-system-flags]{@link https://nodejs.org/api/fs.html#file-system-flags} in Node.js
         * @param [mode = 0o666] - see [File modes]{@link https://nodejs.org/api/fs.html#file-modes} in Node.js
         * @param [callback] - if not provided, this function will return Promise object
         * @returns `Promise<number>` - fd(file descriptor)
         */
        open(path: string, flag?: number | string, mode?: number | string): Promise<FileDescriptor>;
        open(path: string, flag: number | string, mode: number | string, callback: (fd: FileDescriptor) => void): void;
        /**
         * Closes a file descriptor asynchronously
         * @example
         * await fs.close(fd);
         * @param fd - file descriptor of the file to close
         * @param callback - if not provided, this function will return Promise object
         * @returns 0 if succeeded, otherwise throws an Error
         */
        close(fd: FileDescriptor): Promise<0> | never;
        close(fd: FileDescriptor, callback: (exitCode: 0) => void): void | never;
        /**
         * Reads data in chunks from the file it refers to the file descriptor
         * @example
         * const fileSize = 1024;
         * const buffer = new ArrayBuffer(fileSize);
         * const fd = await fs.open("plugin-data:/fileToRead.txt", "r");
         * let bytesReadInTotal = 0;
         * while (bytesReadInTotal < fileSize) {
         *     const { bytesRead } = await fs.read(fd, buffer, bytesReadInTotal, 128, -1);
         *     if (!bytesRead) {
         *         break;
         *     }
         *     bytesReadInTotal += bytesRead;
         * }
         * await fs.close(fd);
         * @param fd - a file descriptor obtained from fs.open
         * @param buffer - the buffer where read bytes are written to
         * @param offset - the offset to the buffer where read bytes are written from
         * @param length - the length to read
         * @param position - the position of the file to read from.
         * if -1, the current file position to read from.
         * when the bytes are read, the current file position advances by size of the read bytes.
         * if the value is greater than or equal to 0, it specifies a file position to read from.
         * after the bytes are read, a current file position stayed the same
         * @param callback - if not provided, this function will return Promise object
         * @returns `Promise<Object>` - { bytesRead: number, buffer: ArrayBuffer }
         */
        read(fd: number, buffer: ArrayBuffer, offset: number, length: number, position: number): Promise<{ bytesRead: number; buffer: ArrayBuffer }>;
        read(fd: number, buffer: ArrayBuffer, offset: number, length: number, position: number, callback: (bytesRead: number, buffer: ArrayBuffer) => void): void;
        /**
         * Writes data in chunks to the file it refers to the file descriptor
         * @example
         * const fd = await fs.open("plugin-data:/fileToWrite.txt", "w+");
         * const data = "It was a dark and stormy night.\n";
         * const srcBuffer = new Uint8Array(data.length);
         * for (let i = 0; i < data.length; i++) {
         *  srcBuffer[i] = data.charCodeAt(i);
         * }
         * const { bytesWritten } = await fs.write(fd, srcBuffer.buffer, 0, srcBuffer.length, 0);
         * await fs.close(fd);
         * @param fd - the file descriptor obtained from fs.open
         * @param buffer - the buffer where the data to write with
         * @param offset - the offset of the buffer where write bytes start from
         * @param length - the length to write
         * @param position - the position of the file to write from.
         * if -1,writing will start from the current file position.
         * when the bytes are written, the current file position advances by size of the written bytes.
         * if the value is greater than or equal to 0, it specifies a file position to write from.
         * After writing, it will not change the file position
         * @param callback - if not provided, this function will return Promise object
         * @returns `Promise<Object>` - { bytesWritten: number, buffer: ArrayBuffer }
         */
        write(fd: number, buffer: ArrayBuffer, offset: number, length: number, position: number): Promise<{ bytesWritten: number; buffer: ArrayBuffer }> | never;
        write(fd: number, buffer: ArrayBuffer, offset: number, length: number, position: number, callback: (bytesWritten: number, buffer: ArrayBuffer) => void): void;
        /**
         * Gets information asynchronously from a file or a folder of the path
         * @example
         * const stats = await fs.lstat("plugin-data:/textFile.txt");
         * const isFile = stats.isFile();
         * @param path - path where the file to get its information is located
         * @param callback - if not provided, this function will return Promise object
         * @returns `Promise<Object>` - see [Stats]{@link https://nodejs.org/api/fs.html#class-fsstats} class in Node.js
         * Note: Some methods or properties may not be supportive for the return object due to the platform limitation
         */
        lstat(path: string): Promise<Stats>;
        lstat(path: string, callback: (err: Error, stats: Stats) => void): void;
        /**
         * Gets information synchronously from a file or a folder of the path
         * @example
         * const stats = fs.lstatSync("plugin-data:/textFile.txt");
         * const birthTime = stats.birthtime;
         * @param path - path where the file to get its information is located
         * @returns see [Stats]{@link https://nodejs.org/api/fs.html#class-fsstats} class in Node.js
         * Note: Some methods or properties may not be supportive for the return object due to the platform limitation
         */
        lstatSync(path: string): Stats;
        /**
         * Renames or moves, if required, the file from the oldPath to the newPath
         * @example
         * fs.rename("plugin-data:/oldName.txt", "plugin-temp:/newName.txt");
         * @param oldPath - path where the old file name to change is located
         * @param newPath - path where the new file name will be
         * @param callback - if not provided, this function will return Promise object
         * @returns `Promise<number>` - 0 if succeeded, otherwise throws an Error
         */
        rename(oldPath: string, newPath: string): Promise<number>;
        rename(oldPath: string, newPath: string, callback: (exitCode: 0) => void): void;
        /**
         * Copies a file or a folder from the source path to the destination path
         * @example
         * const data = fs.copyFile("plugin-data:/copyFrom.txt", "plugin-temp:/copyTo.txt");
         * @param srcPath - path where the source file to copy is located
         * @param destPath - path where the source file will be copied to
         * @param flags - see flags in [uv_fs_copyfile]{@link https://docs.libuv.org/en/v1.x/fs.html}
         * @param callback - if not provided, this function will return Promise object
         * @returns `Promise<number>` - 0 if succeeded, otherwise throws an Error
         */
        copyFile(srcPath: string, destPath: string, flags?: 0 | number): Promise<0> | never;
        copyFile(srcPath: string, destPath: string, flags: 0 | number | undefined, callback: (exitCode: 0) => void): void | never;
        /**
         * Deletes a name with the file it refers to asynchronously
         * @example
         * await fs.unlink("plugin-data:/fileToDelete.txt");
         * @param path - path where the file to delete is located
         * @param callback - if not provided, this function will return Promise object
         * @returns `Promise<number>` - 0 if succeeded, otherwise throws an Error
         */
        unlink(path: string): Promise<0> | never;
        unlink(path: string, callback: (exitCode: 0) => void): void | never;
        /**
         * Creates a directory of the path asynchronously
         * @example
         * await fs.mkdir("plugin-data:/newDir");
         * @param path - path where to create the directory
         * @param [options.recursive = false] - whether parents folders should be created
         * @param callback - if not provided, this function will return Promise object
         * @returns `Promise<number>` - 0 if succeeded, otherwise throws an Error
         */
        mkdir(
            path: string,
            options: {
                recursive?: boolean;
            },
        ): Promise<0> | never;
        mkdir(
            path: string,
            options: {
                recursive?: boolean;
            },
            callback: (exitCode: 0) => void,
        ): void | never;
        /**
         * Removes a directory asynchronously
         * @example
         * await fs.rmdir("plugin-data:/dirToRemove");
         * @param path - path where to remove the directory
         * @param callback - if not provided, this function will return Promise object
         * @returns `Promise<number>` - 0 if succeeded, otherwise throws an Error
         */
        rmdir(path: string): Promise<0> | never;
        rmdir(path: string, callback: (exitCode: 0) => void): void;
        /**
         * Reads a directory to list the containing files and directories asynchronously
         * @example
         * const paths = await fs.readdir("plugin-data:/dirToRead");
         * @param path - path where to read the directory
         * @param callback - if not provided, this function will return Promise object
         * @returns `Promise<string[]>` - string array of containing files and directories in the path
         */
        readdir(path: string): Promise<string[]>;
        readdir(path: string, callback: (list: string[]) => void): void;
        /**
         * Reads a directory to list the containing files and directories synchronously
         * @example
         * const paths = fs.readdirSync("plugin-data:/dirToRead");
         * @param path - path where to read the directory
         * @returns string array of containing files and directories in the path
         */
        readdirSync(path: string): string[];
    }
    const _fs: fs;
    export = _fs;
}
