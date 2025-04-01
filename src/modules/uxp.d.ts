/*
 *  Copyright 2023 Adobe Systems Incorporated. All rights reserved.
 *  This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License. You may obtain a copy
 *  of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software distributed under
 *  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *  OF ANY KIND, either express or implied. See the Licrrense for the specific language
 *  governing permissions and limitations under the License.
 *
 */

// Type definitions for Unified Extensibility Platform (UXP) 7.3
// Project: https://adobe.io/photoshop/uxp/2022/uxp-api/
// Definitions by: Adobe UXP <https://github.com/adobe-uxp>
//                 Apoorva Sharma <https://github.com/Apoorva2405>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "uxp" {
  namespace storage {
    /**
     * Common locations that we can use when displaying a file picker.
     */
    namespace domains {
      /**
       * The user's desktop folder
       */
      var userDesktop: symbol;
      /**
       * The user's documents folder
       */
      var userDocuments: symbol;
      /**
       * The user's pictures folder or library
       */
      var userPictures: symbol;
      /**
       * The user's videos / movies folder or library
       */
      var userVideos: symbol;
      /**
       * The user's music folder or library
       */
      var userMusic: symbol;
      /**
       * Local application data
       */
      var appLocalData: symbol;
      /**
       * Local application library
       */
      var appLocalLibrary: symbol;
      /**
       * Local application cache directory (persistence not guaranteed)
       */
      var appLocalCache: symbol;
      /**
       * Local application shared data folder
       */
      var appLocalShared: symbol;
      /**
       * Local temporary directory
       */
      var appLocalTemporary: symbol;
      /**
       * Roaming application data
       */
      var appRoamingData: symbol;
      /**
       * Roaming application library data
       */
      var appRoamingLibrary: symbol;
    }
    /**
     * This namespace describes the various file type extensions that can used be used in some FS file open methods.
     */
    namespace fileTypes {
      /**
       * Text file extensions
       */
      var text: string[];
      /**
       * Image file extensions
       */
      var images: string[];
      /**
       * All file types
       */
      var all: string[];
    }
    /**
     * This namespace describes the file content formats supported in FS methods like read and write.
     */
    namespace formats {
      /**
       * UTF8 File encoding
       */
      var utf8: symbol;
      /**
       * Binary file encoding
       */
      var binary: symbol;
    }
    /**
     * This namespace describes the file open modes. for eg: open file in read-only or both read-write
     */
    namespace modes {
      /**
       * The file is read-only; attempts to write will fail.
       */
      var readOnly: symbol;
      /**
       * The file is read-write.
       */
      var readWrite: symbol;
    }
    /**
     * This namespace describes the type of the entry. Whether file or folder etc.
     */
    namespace types {
      /**
       * A file; used when creating an entity
       */
      var file: symbol;
      /**
       * A folder; used when creating an entity
       */
      var folder: symbol;
    }
    /**
     * An `Entry` is the base class for `File` and `Folder`.
     * You can get an instance of Entry via the `localFileSystem` by fetching an instance of a File or Folder
     *
     * <b>Example</b>
     * ```js
     * // Since Entry cannot be called directly we can use a File or Folder object to invoke Entry as shown below
     * const fs =  require('uxp').storage.localFileSystem;
     * const folder = await fs.getPluginFolder(); // returns a Folder instance
     * const folderEntry = await folder.getEntry("entryName.txt");
     *
     * // Now we can use folderEntry to invoke the APIs provided by Entry
     * console.log(folderEntry.isEntry); // isEntry is an API of Entry, in this example it will return true
     * ```
     */
    export class Entry {
      /**
       * Indicates that this instance is an `Entry`. Useful for type-checking.
       * @example
       * if (something.isEntry) {
       *     return something.getMetadata();
       * }
       */
      isEntry: boolean;
      /**
       * Indicates that this instance is **not** a `File`. Useful for type-
       * checking.
       * @example
       * if (!anEntry.isFile) {
       *     return "This entry is not a file.";
       * }
       */
      readonly isFile: boolean;
      /**
       * Indicates that this instance is **not** a folder. Useful for type-
       * checking.
       * @example
       * if (!anEntry.isFolder) {
       *     return "This entry is not a folder.";
       * }
       */
      readonly isFolder: boolean;
      /**
       * The name of this entry. Read-only.
       * @example
       * console.log(anEntry.name);
       */
      readonly name: string;
      /**
       * The associated provider that services this entry. Read-only.
       * @example
       * if (entryOne.provider !== entryTwo.provider) {
       *     throw new Error("Providers are not the same");
       * }
       */
      readonly provider: FileSystemProvider;
      /**
       * The url of this entry. You can use this url as input to other entities of the extension system like for eg: set as src attribute of a Image widget in UI. Read-only.
       * @example
       * console.log(anEntry.url);
       */
      readonly url: string;
      /**
       * Returns the details of the given entry like name, type and native path in a readable string format.
       */
      toString(): string;
      /**
       * The platform native file-system path of this entry. Read-only
       * @example
       * console.log(anEntry.nativePath);
       */
      readonly nativePath: string;
      /**
       * Copies this entry to the specified `folder`.
       * @example
       * await someFile.copyTo(someFolder);
       * @example
       * await someFile.copyTo(someFolder, {overwrite: true});
       * @example
       * await someFolder.copyTo(anotherFolder, {overwrite: true, allowFolderCopy: true});
       * @param folder - the folder to which to copy this entry
       * @param [options.overwrite = false] - if `true`, allows overwriting existing entries
       * @param [options.allowFolderCopy = false] - if `true`, allows copying the folder
       * @returns `Promise<File | Folder>`
       */
      copyTo(
        folder: Folder,
        options?: {
          overwrite?: boolean;
          allowFolderCopy?: boolean;
        }
      ): Promise<File | Folder>;
      /**
       * Moves this entry to the target folder, optionally specifying a new name.
       * @example
       * await someFile.moveTo(someFolder);
       * @example
       * await someFile.moveTo(someFolder, {overwrite: true});
       * @example
       * await someFolder.moveTo(anotherFolder, {overwrite: true});
       * @example
       * await someFile.moveTo(someFolder, {newName: 'masterpiece.txt'})
       * @example
       * await someFile.moveTo(someFolder, {newName: 'novel.txt', {overwrite: true})
       * @param folder - the folder to which to move this entry
       * @param [options.overwrite = false] - If `true` allows the move to overwrite existing files
       * @param [options.newName] - If specified, the entry is renamed to this name
       * @returns `Promise<void>`
       */
      moveTo(
        folder: Folder,
        options?: {
          overwrite?: boolean;
          newName?: string;
        }
      ): Promise<void>;
      /**
       * Removes this entry from the file system. If the entry is a folder, it must be empty before deletion.
       * Note: Currently when using this method, a permission denied error will occur if attempting to delete
       * a folder that was selected from a storage picker or added via drag-and-drop.
       * @example
       * await aFile.delete();
       * @returns `Promise<number>` - the number is 0 if succeeded, otherwise throws an Error
       */
      delete(): Promise<number>;
      /**
       * Returns this entry's metadata.
       * @example
       * const metadata = aFile.getMetadata();
       * @returns `Promise<EntryMetadata>`
       */
      getMetadata(): Promise<EntryMetadata>;
    }
    /**
     * Metadata for an `Entry`. It includes useful information such as:
     *
     * * size of the file (if a file)
     * * date created
     * * date modified
     * * name
     *
     * Instantiate `EntryMetadata` by using {@link Entry.md#getmetadata|Entry's - getMetadata()}.
     * In order to instantiate `Entry`, you will need to first invoke the `localFileSystem` and then fetch an instance of a File or Folder.
     *
     * <b>Example</b>
     * ```js
     * const fs = require('uxp').storage.localFileSystem;
     * const folder = await fs.getPluginFolder(); // Gets an instance of Folder (or Entry)
     * const entryMetaData = await folder.getMetadata();
     * console.log(entryMetaData.name);
     * ```
     */
    export class EntryMetadata {
      /**
       * The name of the entry.
       */
      name: string;
      /**
       * The size of the entry, if a file. Zero if a folder.
       */
      size: number;
      /**
       * The date this entry was created.
       */
      dateCreated: Date;
      /**
       * The date this entry was modified.
       */
      dateModified: Date;
      /**
       * Indicates if the entry is a file
       */
      isFile: boolean;
      /**
       * Indicates if the entry is a folder
       */
      isFolder: boolean;
    }
    /**
     * Represents a file on a file system. Provides methods for reading from and
     * writing to the file. You'll never instantiate a `File` directly; instead
     * you'll get access via a [storage.FileSystemProvider]{@link ./FileSystemProvider}.
     * Keep in mind that `File` as such doesn't need a `require()` statement, however a `localFileSystem` will need it.
     *
     * <b>Example</b>
     * ```js
     * // Get the object of a File instance
     * const fs = require('uxp').storage.localFileSystem;
     * const file = await fs.createEntryWithUrl("file:/Users/user/Documents/tmp"); // Gets a File instance
     * console.log(file.isFile); // returns true
     * ```
     */
    export class File {
      /**
       * Indicates that this instance is a file.
       * @example
       * if (anEntry.isFile) {
       *     await anEntry.read();
       * }
       */
      isFile: boolean;
      /**
       * Indicates whether this file is read-only or read-write. See [readOnly]{@link ./modes#readonly--symbol} and [readWrite]{@link ./modes#readwrite--symbol}.
       * @example
       * if (aFile.mode === modes.readOnly) {
       *     throw new Error("Can't write to a file opened as read-only.");
       * }
       */
      mode: symbol;
      /**
       * Reads data from the file and returns it. The file format can be specified
       * with the `format` option. If a format is not supplied, the file is assumed
       * to be a text file using UTF8 encoding.
       * @example
       * const text = await myNovel.read();
       * @example
       * const data = await myNovel.read({format: formats.binary});
       * @param [options.format = formats.utf8] - The format of the file; see [utf8]{@link ./formats#utf8--symbol} and [binary]{@link ./formats#binary--symbol}.
       * @returns `Promise<string|ArrayBuffer>` the contents of the file
       */
      read(options?: { format?: symbol }): Promise<string | ArrayBuffer>;
      /**
       * Writes data to a file, appending if desired. The format of the file
       * is controlled via the `format` option, and defaults to UTF8.
       * @example
       * await myNovel.write("It was a dark and stormy night.\n");
       * await myNovel.write("Cliches and tropes aside, it really was.", {append: true});
       * @example
       * const data = new ArrayBuffer();
       * await aDataFile.write(data, {format: formats.binary});
       * @param data - the data to write to the file
       * @param [options.format = formats.utf8] - the format of the file; see [utf8]{@link ./formats#utf8--symbol} and [binary]{@link ./formats#binary--symbol}.
       * @param [options.append = false] - if `true`, the data is written to the end of the file
       * @returns `Promise<number>` -  the length of the contents written to the file
       */
      write(
        data: string | ArrayBuffer,
        options?: {
          format?: symbol;
          append?: boolean;
        }
      ): Promise<number>;
      /**
       * Determines if the entry is a file or not. This is safe to use even if the
       * entry is `null` or `undefined`.
       * @param entry - the entry to check
       * @returns if `true`, the entry is a file.
       */
      static isFile(entry: File | Entry | null | undefined): boolean;
    }
    /**
     * Provides access to files and folders on a file system. You'll typically not
     * instantiate this directly; instead you'll use an instance of one that has
     * already been created for you by UXP.
     * @example
     * const fs = uxp.fs.localFileSystem;
     */
    export class FileSystemProvider {
      /**
       * Indicates that this is a `FileSystemProvider`. Useful for type-checking.
       */
      isFileSystemProvider: boolean;
      /**
       * An array of the domains this file system supports. If the file system can
       * open a file picker to the user's `documents` folder, for example, then [userDocuments]{@link ./domains#module-storage-domains-userdocuments} will be in this list.
       * @example
       * if (fs.supportedDomains.contains(domains.userDocuments)) {
       *     console.log("We can open a picker to the user's documents.")
       * }
       */
      supportedDomains: symbol[];
      /**
       * Gets a file (or files) from the file system provider for the purpose of
       * opening them. Files are read-only.
       *
       * Multiple files can be returned if the `allowMultiple` option` is `true`.
       * @example
       * const folder = await fs.getFolder({initialDomain: domains.userDocuments});
       * const file = await fs.getFileForOpening({initialLocation: folder});
       * if (!file) {
       *     // no file selected
       *     return;
       * }
       * const text = await file.read();
       * @example
       * const files = await fs.getFileForOpening({allowMultiple: true, types: fileTypes.images});
       * if (files.length === 0) {
       *     // no files selected
       * }
       * @param [options.initialDomain] - the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead.
       * @param [options.types = [".*"]] - array of file types that the file open picker displays.
       * @param [options.initialLocation] - the initial location of the file picker.
       * You can pass an existing file or folder entry to suggest the picker to start at this location.
       * If this is a file entry then the method will pick its parent folder as initial location. This will override initialDomain option.
       * @param [options.allowMultiple = false] - if true, multiple files can be selected
       * @returns `Promise<File|Array<File>>` based on `allowMultiple`. Return empty if no file was selected.
       */
      getFileForOpening(options?: {
        initialDomain?: symbol;
        types?: string[];
        initialLocation?: File | Folder;
        allowMultiple?: false;
      }): Promise<File | null>;
      getFileForOpening(options?: {
        initialDomain?: symbol;
        types?: string[];
        initialLocation?: File | Folder;
        allowMultiple: true;
      }): Promise<Array<File> | null>;
      /**
       * Gets a file reference suitable for read-write. Displays a file picker to select a location to "Save" the file.
       *
       * If the act of writing to the file would overwrite it, the file picker
       * will prompt the user to confirm before returning a result to you.
       * @example
       * const file = await fs.getFileForSaving("output.txt", { types: [ "txt" ]});
       * if (!file) {
       *     // file picker was cancelled
       *     return;
       * }
       * await file.write("It was a dark and stormy night");
       * @param suggestedName - Required when `options.types` is not defined.
       * @param [options.initialDomain] - The preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead.
       * @param [options.types] - Allowed file extensions, with no "." prefix.
       * @returns `Promise<File>` - returns the selected file, or `null` if no file were selected.
       */
      getFileForSaving(
        suggestedName: string,
        options: {
          initialDomain?: symbol;
          types?: string[];
        }
      ): Promise<File | null>;
      /**
       * Gets a folder from the file system via a folder picker dialog. The files
       * and folders within can be accessed via [Folder#getEntries]{@link ./Folder#getentries}. Any
       * files within are read-write.
       *
       * If the user dismisses the picker, `null` is returned instead.
       * @example
       * const folder = await fs.getFolder();
       * const myNovel = (await fs.getEntries()).filter(entry => entry.name.indexOf('novel') > 0);
       * const text = await myNovel.read();
       * @param [options.initialDomain] - the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead.
       * @returns `Promise<Folder | null>` - the selected folder or `null` if no folder is selected.
       */
      getFolder(options?: { initialDomain?: symbol }): Promise<Folder | null>;
      /**
       * Returns a temporary folder. The contents of the folder will be removed when
       * the extension is disposed.
       * @example
       * const temp = await fs.getTemporaryFolder();
       * @returns `Promise<Folder>`
       */
      getTemporaryFolder(): Promise<Folder>;
      /**
       * Returns a folder that can be used for extension's data storage without user interaction.
       * It is persistent across host-app version upgrades.
       * @returns `Promise<Folder>`
       */
      getDataFolder(): Promise<Folder>;
      /**
       * Returns an plugin's folder – this folder and everything within it are read only.
       * This contains all the Plugin related packaged assets.
       * @returns `Promise<Folder>`
       */
      getPluginFolder(): Promise<Folder>;
      /**
       * Creates an entry for the given url and returns the appropriate instance.
       * @example
       * const newImgFolder = await fs.createEntryWithUrl("plugin-temp:/img", { type: types.folder });
       * const newTmpFolder = await fs.createEntryWithUrl("file:/Users/user/Documents/tmp", { type: types.folder });
       * @example
       * const newDatFile = await fs.createEntryWithUrl("plugin-temp:/tmp/test.dat", { overwrite: true });
       * const newTxtFile = await fs.createEntryWithUrl("file:/Users/user/Documents/test.txt", { overwrite: true });
       * @param url - the url to create an Entry object.
       * Note that file: scheme has limited support in UWP due to the strict [File access permissions]{@link https://learn.microsoft.com/en-us/windows/uwp/files/file-access-permissions}
       * @param [options.type = types.file] - indicates which kind of entry to create. Pass types.folder to create a new folder.
       * Note that if the type is file then this method just create"s" a file entry object and not the actual file on the disk.
       * File on the storage is created when data is written into the file. eg: call write method on the file entry object.
       * @param [options.overwrite = false] - if true, the create attempt can overwrite an existing file
       * @returns `Promise<File|Folder>` the File or Folder object which is created for the given url
       */
      public createEntryWithUrl(
        url: string,
        options: {
          type?: symbol;
          overwrite?: boolean;
        }
      ): Promise<File | Folder>;
      /**
       * Gets an entry of the given url and returns the appropriate instance.
       * @example
       * const tmpFolder = await fs.getEntryWithUrl("plugin-temp:/tmp");
       * const docFolder = await fs.getEntryWithUrl("file:/Users/user/Documents");
       * @example
       * const tmpFile = await fs.getEntryWithUrl("plugin-temp:/tmp/test.dat");
       * const docFile = await fs.getEntryWithUrl("file:/Users/user/Documents/test.txt");
       * @param url - the url to get an Entry object
       * Note that file: scheme has limited support in UWP due to the strict [File access permissions]{@link https://learn.microsoft.com/en-us/windows/uwp/files/file-access-permissions}
       * @returns `Promise<File|Folder>` the File or Folder object for the given url
       */
      public getEntryWithUrl(url: string): Promise<File | Folder>;
      /**
       * Returns the fs url of given entry.
       * @returns `string`
       */
      public getFsUrl(entry: Entry): string;
      /**
       * Returns the platform native file system path of given entry.
       * @returns `string`
       */
      public getNativePath(entry: Entry): string;
      /**
       * Returns a token suitable for use with certain host-specific APIs (such as Photoshop). This token is valid only for the current plugin session. As such, it is of no use if you serialize the token to persistent storage, as the token will be invalid in the future.
       *
       * Note: When using the Photoshop DOM API, pass the instance of the file instead of a session token -- Photoshop will convert the entry into a session token automatically on your behalf.
       * @example
       * const fs = require('uxp').storage.localFileSystem;
       * let entry = await fs.getFileForOpening();
       * let token = fs.createSessionToken(entry);
       * let result = await require('photoshop').action.batchPlay([{
       *     _obj: "open",
       *     "target": {
       *        _path: token, // Rather than a system path, this expects a session token
       *         _kind: "local",
       *     }
       * }], {});
       * @returns the session token for the given entry
       */
      createSessionToken(entry: Entry): string;
      /**
       * Returns the file system Entry that corresponds to the session token obtained from `createSessionToken`. If an entry cannot be found that matches the token, then a `Reference Error: token is not defined` error is thrown.
       * @returns the corresponding entry for the session token
       */
      getEntryForSessionToken(token: string): Entry;
      /**
       * Returns a token suitable for use with host-specific APIs (such as Photoshop), or for storing a persistent reference to an entry (useful if you want to only ask for permission to access a file or folder once). A persistent token is not guaranteed to last forever -- certain scenarios can cause the token to longer work (including moving files, changing permissions, or OS-specific limitations). If a persistent token cannot be reused, you'll get an error at the time of use.
       * @example
       * const fs = require('uxp').storage.localFileSystem;
       * let entry = await fs.getFileForOpening();
       * let token = await fs.createPersistentToken(entry);
       * localStorage.setItem("persistent-file", token);
       * @returns `Promise<string>` - the persistent token for the given entry
       */
      createPersistentToken(entry: Entry): Promise<string>;
      /**
       * Returns the file system Entry that corresponds to the persistent token obtained from `createPersistentToken`. If an entry cannot be found that matches the token, then a `Reference Error: token is not defined` error is thrown.
       *
       * Note: retrieving an entry for a persistent token does _not_ guarantee that the entry is valid for use. You'll need to properly handle the case where the entry no longer exists on the disk, or the permissions have changed by catching the appropriate errors. If that occurs, the suggested practice is to prompt the user for the entry again and store the new token.
       * @example
       * const fs = require('uxp').storage.localFileSystem;
       * let entry, contents, tries = 3, success = false;
       * while (tries > 0) {
       *     try {
       *         entry = await fs.getEntryForPersistentToken(localStorage.getItem("persistent-file"));
       *         contents = await entry.read();
       *         tries = 0;
       *         success = true;
       *     } catch (err) {
       *         entry = await fs.getFileForOpening();
       *         localStorage.setItem("persistent-token", await fs.createPersistentToken(entry));
       *         tries--;
       *     }
       * }
       * if (!success) {
       *     // fail gracefully somehow
       * }
       * @returns `Promise<Entry>` - the corresponding entry for the persistent token
       */
      getEntryForPersistentToken(token: string): Promise<Entry>;
      /**
       * Checks if the supplied object is a `FileSystemProvider`. It's safe to use even
       * if the object is `null` or `undefined`. Useful for type checking.
       * @param fs - the object to check
       * @returns If `true`, the object is a file system provider
       */
      static isFileSystemProvider(fs: FileSystemProvider): boolean;
    }
    export const localFileSystem: FileSystemProvider;
    /**
     * Represents a folder on a file system. You'll never instantiate this directly,
     * but will get it by calling [FileSystemProvider.getTemporaryFolder]{@link ./storage#gettemporaryfolder},
     * [FileSystemProvider.getFolder]{@link ./storage#getfolderoptions}, or via [Folder.getEntries]{@link ./Folder#getentries}.
     *
     * <b>Example</b>
     * ```js
     * // Get the Folder instance via localFileSystem
     * const fs = require('uxp').storage.localFileSystem;
     * const folder = await fs.getTemporaryFolder(); // Gets the Folder instance
     * console.log(folder.isFolder); // returns true
     * ```
     */
    export class Folder extends Entry {
      /**
       * Indicates that this instance is a folder. Useful for type checking.
       */
      isFolder: boolean;
      /**
       * Returns an array of entries contained within this folder.
       * @example
       * const entries = await aFolder.getEntries();
       * const allFiles = entries.filter(entry => entry.isFile);
       * @returns `Promise<Array<Entry>>` - The entries within the folder.
       */
      getEntries(): Promise<Array<Entry>>;
      /**
       * Creates an entry within this folder and returns the appropriate instance.
       * @example
       * const myNovel = await aFolder.createEntry("mynovel.txt");
       * @example
       * const catImageCollection = await aFolder.createEntry("cats", {type: types.folder});
       * @param name - the name of the entry to create
       * @param [options.type = types.file] - Indicates which kind of entry to create. Pass `Folder` to create a new folder.
       * Note that if the type is file then this method just create a file entry object and not the actual file on the disk.
       * The file actually gets created when you call for eg: write method on the file entry object.
       * @param [options.overwrite = false] - If `true`, the create attempt can overwrite an existing file
       * @returns `Promise<File | Folder>` the created entry
       */
      createEntry(
        name: string,
        options?: {
          type?: symbol;
          overwrite?: boolean;
        }
      ): Promise<File | Folder>;
      /**
       * Creates a File Entry object within this folder and returns the appropriate instance.
       * Note that this method just create a file entry object and not the actual file on the disk.
       * The file actually gets created when you call for eg: write method on the file entry object.
       * @example
       * const myNovelTxtFile = await aFolder.createFile("mynovel.txt");
       * @param name - the name of the file to create.
       * @param [options.overwrite = false] - If `true`, the create attempt can overwrite an existing file
       * @returns `Promise<File>` - the created file entry
       */
      createFile(
        name: string,
        options?: {
          overwrite?: boolean;
        }
      ): Promise<File>;
      /**
       * Creates a Folder within this folder and returns the appropriate instance.
       * @example
       * const myCollectionsFolder = await aFolder.createFolder("collections");
       * @param name - the name of the folder to create.
       * @returns `Promise<Folder>` - the created folder entry object
       */
      createFolder(name: string): Promise<Folder>;
      /**
       * Gets an entry from within this folder and returns the appropriate instance.
       * @example
       * const myNovel = await aFolder.getEntry("mynovel.txt");
       * @param filePath - the name/path of the entry to fetch
       * @returns `Promise<File | Folder>` the fetched entry.
       */
      getEntry(filePath: string): Promise<File | Folder>;
      /**
       * Renames an entry to a new name.
       * @example
       * await myNovels.rename(myNovel, "myFantasticNovel.txt");
       * @param entry - the entry to rename
       * @param newName - the new name to assign
       * @param [options.overwrite = false] - if `true`, renaming can overwrite an existing entry
       * @returns `Promise<void>`
       */
      renameEntry(
        entry: Entry,
        newName: string,
        options?: {
          overwrite?: boolean;
        }
      ): Promise<void>;
      /**
       * Checks if an entry is a folder. Safe to use if entry might be `null` or
       * `undefined`. Useful for type checking.
       */
      static isFolder(entry: Folder | Entry | null | undefined): boolean;
    }

    // TODO Need examples for the below APIs, not sure if they are instances of Error or not
    namespace errors {
      class AbstractMethodInvocationError extends Error {}
      class ProviderMismatchError extends Error {}
      class EntryIsNotAnEntryError extends Error {}
      class EntryIsNotAFolderError extends Error {}
      class EntryIsNotAFileError extends Error {}
      class NotAFileSystemError extends Error {}
      class FileNotFoundError extends Error {}
      class OutOfSpaceError extends Error {}
      class PermissionDeniedError extends Error {}
      class EntryExistsError extends Error {}
      class FileIsReadOnlyError extends Error {}
      class DomainNotSupportedError extends Error {}
      class InvalidFileNameError extends Error {}
      class InvalidFileFormatError extends Error {}
      class DataFileFormatMismatchError extends Error {}
    }
  }

  /**
   * Plugin object received in the PluginManager.getPlugins list,
   * used for IPC(Inter Plugin Communication)
   */
  export class Plugin {
    /**
     * Get plugin id
     */
    readonly id: string;
    /**
     * Get plugin version
     */
    readonly version: string;
    /**
     * Get plugin name
     */
    name: string;
    /**
     * Get plugin manifest
     */
    readonly manifest: UxpPluginManifest;
    /**
     * Get plugin enabled/disabled state
     */
    readonly enabled: boolean;
    /**
     * Show panel with the given ID. This api may be routed to the host app which can chose to disallow it.
     * Used for commmunicating with other plugins (IPC : Inter Plugin Communication)
     * Note: Currently there is no API to hide a panel, panels can be shown but can not be hidden.
     * @param panelId - id of the panel to be shown
     * @returns `Promise<void>|string` Resolves with a void if success else returns a rejection message
     */
    showPanel(panelId: string): Promise<void> | string;
    /**
     * Invoke command with given ID. This api may be routed to the host app which can chose to disallow it.
     * Used for commmunicating with other plugins (IPC : Inter Plugin Communication)
     * @param commandId - id of the command to be invoked
     * @param params - arguments to be passed to the command entrypoint as defined in the plugin
     * @returns `Promise<void>`
     */
    invokeCommand(commandId: string, ...params: any[]): Promise<void>;
  }
  /**
   * Thrown whenever a call to `entrypoints.setup` fails or is executed more than once.
   */
  export class EntryPointsError {}

  interface Shortcut {
    shortcutKey: string;
    commandKey: boolean;
    altKey: boolean;
    shiftKey: boolean;
    ctrlKey: boolean;
  }

  export class UxpCommandInfo {
    /**
     * Get command id
     */
    id: string;
    /**
     * Get command label, localized string
     */
    label: string;
    /**
     * Get command description, localized string
     */
    description: string;
    /**
     * Get command shortcut
     */
    shortcut: Shortcut;
    /**
     * Get isManifestCommand
     * @returns `true` if the command is a manifest command, `false` otherwise.
     */
    isManifestCommand: boolean;
    /**
     * Get command options parameter
     */
    commandOptions: object;
  }
  /**
   * Class describing a single menu item of a panel
   */
  export class UxpMenuItem {
    /**
     * Get menu item id
     */
    readonly id: string;
    /**
     * Get menu item label, localized string
     */
    label: string;
    /**
     * Get or Set menu item enable state
     */
    enabled: boolean;
    /**
     * Get or Set menu item checked state
     */
    checked: boolean;
    /**
     * Get menu submenu
     */
    submenu: (UxpMenuItem | string)[];
    /**
     * Get menu parent.
     */
    parent: UxpMenuItems;
    /**
     * Remove the menu item
     */
    remove(): void;
  }

  /**
   * Class describing the menu of a panel.
   */
  export class UxpMenuItems {
    /**
     * Get number of menu items
     */
    readonly size: number;
    /**
     * Get menu item with specified id
     */
    getItem(id: string): UxpMenuItem;
    /**
     * Get menu item at specified index
     */
    getItemAt(index: number): UxpMenuItem;
    /**
     * Inserts/replaces the menu item at the specified index with the new menu item.
     * index < size of menuItems array : replaces the existing menu item
     * index = size of menuItems array : Inserts menu item at end
     * index > size of menuItems array : throws invalid index exception
     * @param newItem - see 'entrypoints.setup' api for menu item description.
     */
    insertAt(index: number, newItem: UxpMenuItem): void;
    /**
     * Removes menu item from specified index.
     */
    removeAt(index: number): void;
  }

  interface PanelSize {
    width: number;
    height: number;
  }

  /**
   * UXP Plugin Manifest Interface
   * Defines the structure of a UXP plugin manifest.json file
   */
  export interface UxpPluginManifest {
    /**
     * The manifest version (currently 5)
     */
    manifestVersion: number;

    /**
     * Unique identifier for the plugin
     */
    id: string;

    /**
     * Display name of the plugin
     */
    name: string;

    /**
     * Version of the plugin in semver format
     */
    version: string;

    /**
     * Entry point HTML file for the plugin
     */
    main: string;

    /**
     * Host application requirements
     */
    host: {
      /**
       * Target application code (PS for Photoshop)
       */
      app: "PS" | "XD" | "ID" | string;

      /**
       * Minimum supported host application version
       */
      minVersion: string;
    };

    /**
     * Plugin entry points (commands, panels, etc.)
     */
    entrypoints: Array<UxpCommandInfo | PanelEntryPoint>;

    /**
     * Plugin icons definition
     */
    icons: Array<IconDefinition>;

    /**
     * Required permissions for plugin functionality
     */
    requiredPermissions: {
      /**
       * Network permission configuration
       */
      network?: {
        /**
         * Allowed domains for network requests
         */
        domains: string[];
      };

      /**
       * Clipboard access level
       */
      clipboard?: "read" | "write" | "readAndWrite";

      /**
       * Webview configuration
       */
      webview?: {
        /**
         * Whether webviews are allowed
         */
        allow: "yes" | "no";

        /**
         * Allowed domains for webviews
         */
        domains?: string[];
      };

      /**
       * Process launching configuration
       */
      launchProcess?: {
        /**
         * Allowed URL schemes
         */
        schemes?: string[];

        /**
         * Allowed file extensions
         */
        extensions?: string[];
      };
    };

    featureFlags:
      | {
          enableSWCSupport?: boolean;
          enableFillAsCustomAttribute?: boolean;
        }
      | {
          enableSWCSupport: never;
          enableFillAsCustomAttribute?: boolean;
          CSSNextSupport?: boolean | ("boxShadow" | "transformFunctions" | "transformProperties")[];
        };
  }

  /**
   * Command entry point definition
   */
  interface CommandEntryPoint {
    /**
     * Type of entry point
     */
    type: "command";

    /**
     * Unique identifier for this command
     */
    id: string;

    /**
     * Display label for the command
     */
    label: {
      /**
       * Default label text
       */
      default: string;

      /**
       * Optional localized labels
       */
      [locale: string]: string;
    };
  }

  /**
   * Panel entry point definition
   */
  interface PanelEntryPoint {
    /**
     * Type of entry point
     */
    type: "panel";

    /**
     * Unique identifier for this panel
     */
    id: string;

    /**
     * Display label for the panel
     */
    label: {
      /**
       * Default label text
       */
      default: string;

      /**
       * Optional localized labels
       */
      [locale: string]: string;
    };

    /**
     * Minimum panel size
     */
    minimumSize: PanelSize;

    /**
     * Maximum panel size
     */
    maximumSize: PanelSize;

    /**
     * Preferred docked panel size
     */
    preferredDockedSize: PanelSize;

    /**
     * Preferred floating panel size
     */
    preferredFloatingSize: PanelSize;

    /**
     * Panel icons definition
     */
    icons: IconDefinition[];
  }

  /**
   * Icon definition
   */
  interface IconDefinition {
    /**
     * Width of the icon in pixels
     */
    width: number;

    /**
     * Height of the icon in pixels
     */
    height: number;

    /**
     * Path to the icon file
     */
    path: string;

    /**
     * Scale factors (1x, 2x)
     */
    scale: number[];

    /**
     * Themes where this icon should be used
     */
    theme: Array<"darkest" | "dark" | "medium" | "light" | "lightest">;

    /**
     * Optional species classification
     */
    species?: Array<"generic" | string>;
  }

  /**
   * Class describing a panel of the plugin.
   */
  export class UxpPanelInfo {
    /**
     * Get panel id
     */
    readonly id: string;
    /**
     * Get panel label, localized string
     */
    readonly label: string;
    /**
     * Get panel description, localized string
     */
    readonly description: string;
    /**
     * Get panel shortcut
     */
    readonly shortcut: Shortcut;
    /**
     * Get panel title, localized string
     */
    readonly title: string;
    /**
     * Get panel icons
     */
    readonly icons: IconDefinition[];
    /**
     * Get panel minimum size
     */
    readonly minimumSize: PanelSize;
    /**
     * Get panel maximum size
     */
    readonly maximumSize: PanelSize;
    /**
     * Get panel preferred docked size
     */
    readonly preferredDockedSize: PanelSize;
    /**
     * Get panel preferred floating size
     */
    readonly preferredFloatingSize: PanelSize;
    /**
     * Get panel menu items
     */
    readonly menuItems: UxpMenuItems;
  }
  export class UxpPluginInfo {
    /**
     * Get plugin id
     */
    id: string;
    /**
     * Get plugin version
     */
    version: string;
    /**
     * Get plugin name
     */
    name: string;
    /**
     * Get plugin manifest
     */
    manifest: UxpPluginManifest;
    /**
     * Check if the plugin is First Party Plugin
     */
    isFirstParty(): boolean;
  }
  export type ExecutionContext = any;
  /**
   * Host defines the contract on what can be returned from scripts and its format.
   */
  export type HostDefinition = any;

  namespace xmp {
    /**
     * XMPDateTime class represents a date and time.
     * XMP's time includes time zone, and can have up to nanosecond resolution.
     */
    export class XMPDateTime {
      /**
       * The year, in the range [0000…9999].
       */
      year: number;
      /**
       * The month, in the range [1…12].
       */
      month: number;
      /**
       * The day, in the range [1…31].
       */
      day: number;
      /**
       * The hour, in the range [1…23].
       */
      hour: number;
      /**
       * The minute, in the range [1…59].
       */
      minute: number;
      /**
       * The second, in the range [1…59].
       */
      second: number;
      /**
       * The nanosecond, in the range [0…1e+9 -1].
       */
      nanosecond: number;
      /**
       * The time zone direction of offset. - 0: UTC - -1: west - 1: east
       */
      tzSign: number;
      /**
       * The time zone hour offset from the prime meridian, in the range [1…23].
       */
      tzHour: number;
      /**
       * The time zone minute offset from the prime meridian, in the range [1…59].
       */
      tzMinute: number;
      /**
       * Reports the time order of two date-time values.
       * @param dateTime - Another XMPDateTime object.
       * @returns 0 if the two values are the same,<br></br>
       *                    1 if this date-time is later than the comparison value,<br></br>
       *                    -1 if this date-time is earlier than the comparison value.<br></br>
       */
      compareTo(dateTime: XMPDateTime): void;
      /**
       * Sets the time zone in this object to the local operating-system time zone,
       * adjusting the time values from the previous time zone, if necessary.
       */
      convertToLocalTime(): void;
      /**
       * Sets the time zone in this object to UTC (coordinated universal time),
       * adjusting the time values from the previous time zone, if necessary.
       */
      convertToUTCTime(): void;
      /**
       * Converts this date-time value to a JavaScript Date. The time zone is normalized
       * (time zones are not supported in the JavaScript format), and the accuracy is reduced to milliseconds.
       */
      getDate(): Date;
      /**
       * Sets the time zone in this object to the current operation-system value,
       * replacing any existing value. Does not affect other fields.
       */
      setLocalTimeZone(): void;
      /**
       * To check if the date is available
       */
      hasDate(): boolean;
      /**
       * To check if time is available
       */
      hasTime(): boolean;
      /**
       * To check if timezone is available
       */
      hasTimeZone(): boolean;
      /**
       * To get the string value of the object
       */
      toString(): string;
    }
    /**
     * This class corresponds to the Adobe XMP Toolkit’s File Handler component, which provides convenient I/O access to the main,
     * or document level, XMP for a file. The File Handler supports those file formats in which you can embed XMP metadata,
     * as defined in the XMP Specification. It allows you to add XMP where none currently exists, expand existing XMP without
     * regard to existing padding, and reconcile XMP with other metadata formats. The XMP Toolkit also supplies the Packet
     * Scanner as a fallback solution for unsupported file formats. It provides more limited accesses to all file formats by
     * performing a dump file scan. It can update a file, but cannot extend the packet or reconcile other metadata formats.
     * The XMPScript API does not currently support retrieving thumbnails.
     * @example
     * // Example of using the XMPFile class to get the XMPMeta object
     * // Import the XMPFile class
     * const { XMPFile } = require("uxp").xmp;
     *
     * // Create a new XMPFile object
     * const xmpFile = new XMPFile("sample.psd", XMPConst.FILE_PHOTOSHOP, XMPConst.OPEN_FOR_UPDATE);
     *
     * // Get the XMPMeta object
     * const xmpMeta = xmpFile.getXMP();
     * @example
     * // Example of using the XMPFile class to get the XMPPacketInfo object
     * // Import the XMPFile class
     * const { XMPFile } = require("uxp").xmp;
     *
     * // Create a new XMPFile object
     * const xmpFile = new XMPFile("sample.psd", XMPConst.FILE_PHOTOSHOP, XMPConst.OPEN_FOR_UPDATE);
     *
     * Get XMPPacketInfo object
     * const xmpPacketInfo = xmpFile.getPacketInfo();
     * console.log(xmpPacketInfo.length);
     * console.log(xmpPacketInfo.offset);
     * console.log(xmpPacketInfo.padSize);
     * console.log(xmpPacketInfo.charForm);
     * @example
     * // Example of using the XMPFile class to get the XMPFileInfo object
     * // Import the XMPFile class
     * const { XMPFile } = require("uxp").xmp;
     *
     * // Create a new XMPFile object
     * const xmpFile = new XMPFile("sample.psd", XMPConst.FILE_PHOTOSHOP, XMPConst.OPEN_FOR_UPDATE);
     *
     * // Get XMPFileInfo object
     * const xmpFileInfo = xmpFile.getFileInfo();
     * console.log(xmpFileInfo.filePath);
     * console.log(xmpFileInfo.format);
     */
    export class XMPFile {
      /**
       * Reports whether XMP metadata of a given size can be updated for this file.
       * This is particularly important if the packet size is increased.
       *
       * Considers only the length of the serialized packet; does not keep the provided XMP.
       * Use putXMP() to actually update the XMP in the open file.
       * @param xmpData - The XMP metadata as an XMPMeta object<br></br>
       *                or The XMP metadata as a string containing an XMP packet<br></br>
       *                or The XMP metadata as an Array of Number containing raw XMP packet data.<br></br>
       * @returns boolean Returns true if the given XMP can be put into this file.
       */
      canPutXMP(xmpData: any): any;
      /**
       * Closes this open file, after writing to it as necessary; that is, if the file was opened for update,
       * and if the XMP metadata was updated or injected. The options provided when the file was opened determine
       * whether this function reconciles the XMP with other forms of metadata; that is, whether any legacy metadata
       * is also updated to be consistent with the XMP metadata.
       * @param closeFlags - A close-option constant, or 0. Close options are:
       *                          XMPConst.``CLOSE_UPDATE_SAFELY`` - Write into a temporary file then swap for crash safety.
       */
      closeFile(closeFlags: number): void;
      /**
       * Retrieves and parses the existing XMP metadata from this file. If the file format contains legacy metadata in a format
       * that is recognized by the File Handler, the function creates an XMP packet containing the metadata.
       * @returns Returns an XMPMeta object, or null if the files does not contain XMP or convertible legacy metadata.
       */
      getXMP(): XMPMeta;
      /**
       * Retrieves the raw XMP packet from this file, along with information about the packet. The options with
       * which the file was opened determine whether this function reconciles other forms of metadata with the XMP.
       * @returns Returns an XMPPacketInfo object, or null if the files does not contain XMP metadata.
       */
      getPacketInfo(): XMPPacketInfo;
      /**
       * Retrieves basic information about this file.
       * @returns Returns an XMPFileInfo object.
       */
      getFileInfo(): XMPFileInfo;
      /**
       * Supplies new XMP metadata for this file. The file is not actually written until closeFile() is called.
       * The options provided when the file was opened determine whether that function reconciles the XMP with other
       * forms of metadata; that is, whether any legacy metadata is also updated to be consistent with the XMP metadata.
       * @param xmpData - The XMP metadata as an XMPMeta object<br></br>
       *                or The XMP metadata as a String containing an XMP packet<br></br>
       *                or The XMP metadata as an Array of Number containing raw XMP packet data.<br></br>
       */
      putXMP(xmpData: any): void;
      /**
       * Reports the supported features for the given file format.
       * @param format - The file format constant. See XMPConst for more details
       * @returns Returns a logical OR of bit-flag constants, or 0 if the format is not handled
       */
      static getFormatInfo(format: number): number;
    }
    export class XMPFileInfo {
      /**
       * The absolute path of the file, in JavaScript notation.
       */
      readonly filePath: string;
      /**
       * One of the file-format constants. See [File format numeric constants](./XMPConst.md#file-format-numeric-constants).
       */
      readonly format: number;
      /**
       * The features that are supported for this format. A logical OR of these bit-flag constants:<br></br>                 - XMPConst.HANDLER_CAN_INJECT_XMP - Can inject first-time XMP into an existing file.<br></br>                 - XMPConst.HANDLER_CAN_EXPAND - Can expand XMP or other metadata in an existing file.<br></br>                 - XMPConst.HANDLER_CAN_REWRITE - Can copy one file to another, writing new metadata.<br></br>                 - XMPConst.HANDLER_PPEFERS_IN_PLACE - Can expand, but prefers in-place update. <br></br>                 - XMPConst.HANDLER_CAN_RECONCILE - Supports reconciliation between XMP and other forms.<br></br>                 - XMPConst.HANDLER_ALLOWS_ONLY_XMP - Allows access to just the XMP, ignoring other forms.<br></br>                 - XMPConst.HANDLER_RETURNS_RAW_PACKETS - File handler returns raw XMP packet information.<br></br>                 - XMPConst.HANDLER_RETURNS_TNAIL - File handler returns native thumbnail.<br></br>                 - XMPConst.HANDLER_OWNS_FILE - File handler does the file open and close.<br></br>                 - XMPConst.HANDLER_ALLOWS_SAFE_UPDATE - File handler allows crash-safe file updates.<br></br>
       */
      readonly handlerFlags: number;
      /**
       * The options with which this file was opened. One of these constants:<br></br>                 - XMPConst.OPEN_FOR_READ - Open for read-only access.<br></br>                 - XMPConst.OPEN_FOR_UPDATE - Open for reading and writing.<br></br>                 - XMPConst.OPEN_ONLY_XMP - Only the XMP is wanted, allows space/time optimizations.<br></br>                 - XMPConst.OPEN_STRICTLY - Be strict about locating XMP and reconciling with other forms.<br></br>                 - XMPConst.OPEN_USE_SMART_HANDLER - Require the use of a smart handler. No packet scanning is performed.<br></br>                 - XMPConst.OPEN_USE_PACKET_SCANNING - Force packet scanning, do not use a smart handler.<br></br>                 - XMPConst.OPEN_LIMITED_SCANNING - Only packet-scan files known to need scanning.
       */
      readonly openFlags: number;
    }
    export class XMPPacketInfo {
      /**
       * The character encoding in the packet, one of:                     0 - UTF8                     2 - UTF-16, MSB-first (big-endian)                     3 - UTF-16, LSB-first (little-endian)                     4 - UTF 32, MSB-first (big-endian)                     5 - UTF 32, LSB-first (little-endian)
       */
      readonly charForm: number;
      /**
       * The length of the packet in bytes.
       */
      readonly length: number;
      /**
       * The byte-offset from the start of the file where the packet begins.
       */
      readonly offset: number;
      /**
       * The raw packet data.
       */
      readonly packet: string;
      /**
       * The packet’s padding size in bytes, 0 if unknown.
       */
      readonly padSize: number;
      /**
       * If true, the packet is writeable.
       */
      readonly writeable: boolean;
    }
    export class XMPIterator {
      /**
       * Retrieves the next item in the metadata.
       */
      next(): XMPProperty | null;
      /**
       * Skips the subtree below and the siblings of the current node on the subsequent call to next().
       */
      skipSiblings(): void;
      /**
       * Skips the subtree below the current node on the subsequent call to next().
       */
      skipSubtree(): void;
    }
    /**
     * This object is returned by various property accessor functions of the [XMPMeta object](./XMPMeta.md),
     * such as [xmpmetaobj.getProperty](./XMPMeta.md#getpropertyschemans-propname-valuetype). The read-only properties describe a metadata property.
     */
    export class XMPProperty {
      /**
       * The language of the property value. This value is set by calls to getLocalizedText(),which assigns the language of the selected alternative text item,if an appropriate item is found.
       */
      readonly locale: string;
      /**
       * The namespace of the property; See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).Typically used when browsing metadata with an [XMPIterator object](./XMPIterator.md).
       */
      readonly namespace: string;
      /**
       * A constant that describes the property type, 0 for a simple property.<br></br>XMPConst.PROP_IS_ARRAY - The property is an array (of type alt, bag, or seq).<br></br>XMPConst.PROP_IS_STRUCT - The property is a structure with nested fields.<br></br>
       */
      readonly options: number;
      /**
       * The property path, including the property name.For a simple property, the entire path is the property name.
       */
      readonly path: number;
      /**
       * The value of the property, if any.Arrays and non-leaf levels of structures do not have values.
       */
      readonly value: string | number | boolean | XMPDateTime;
      /**
       * To get the Property Value as String
       * @returns The value of the property as a string.
       */
      toString(): string;
    }

    /**
     * This object contains the read-only constant definitions for use with the JavaScript XMP API. Some of these are listed in the context in which they are used. Longer lists are provided here.
     *
     * <br></br>
     * ## Schema namespace string constants
     * Constant values for the namespace URI strings used in all get and set property operations. See XMPMeta object.
     *
     * <table>
     *     <tr>
     *         <th>Name</th>
     *         <th>Type</th>
     *         <th>Access</th>
     *         <th>Description</th>
     *     </tr>
     *     <tr>
     *         <td>NS_DC</td>
     *         <td>string</td>
     *         <td>Read-only</td>
     *         <td>The XML namespace for the Dublin Core schema, http://purl.org/dc/elements/1.1</td>
     *     </tr>
     *     <tr>
     *         <td>NS_IPTC_CORE</td>
     *         <td>string</td>
     *         <td>Read-only</td>
     *         <td>The XML namespace for the IPTC Core schema.</td>
     *     </tr>
     *     <tr>
     *         <td>NS_RDF</td>
     *         <td>string</td>
     *         <td>Read-only</td>
     *         <td>The XML namespace for RDF.</td>
     *     </tr>
     *     <tr>
     *         <td>NS_XML</td>
     *         <td>string</td>
     *         <td>Read-only</td>
     *         <td>The XML namespace for XML.</td>
     *    </tr>
     *     <tr>
     *         <td>NS_XMP</td>
     *         <td>string</td>
     *         <td>Read-only</td>
     *         <td>The XML namespace for the XMP basic schema.</td>
     *     </tr>
     *     <tr>
     *         <td>NS_XMP_RIGHTS</td>
     *         <td>string</td>
     *         <td>Read-only</td>
     *         <td>The XML namespace for the XMP copyright schema.</td>
     *     </tr>
     *     <tr>
     *         <td>NS_XMP_MM</td>
     *         <td>string</td>
     *         <td>Read-only</td>
     *         <td>The XML namespace for the XMP digital asset management schema.</td>
     *     </tr>
     *     <tr>
     *         <td>NS_XMP_BJ</td>
     *         <td>string</td>
     *         <td>Read-only</td>
     *         <td>The XML namespace for the job management schema.</td>
     *     </tr>
     *     <tr>
     *         <td>NS_XMP_NOTE</td>
     *         <td>string</td>
     *         <td>Read-only</td>
     *         <td>The XML namespace for the XMP note schema. An Adobe private namespace; do not create new properties.</td>
     *     </tr>
     *     <tr>
     *         <td>NS_PDF</td>
     *         <td>string</td>
     *         <td>Read-only</td>
     *         <td>The XML namespace for the PDF schema.</td>
     *     </tr>
     *     <tr>
     *         <td>NS_PDFX</td>
     *         <td>string</td>
     *         <td>Read-only</td>
     *         <td>The XML namespace for the PDFX schema. An Adobe private namespace; do not create new properties.</td>
     *     </tr>
     *     <tr>
     *         <td>NS_PHOTOSHOP</td>
     *         <td>string</td>
     *         <td>Read-only</td>
     *         <td>The XML namespace for the Adobe Photoshop custom schema.</td>
     *     </tr>
     *     <tr>
     *         <td>NS_PS_ALBUM</td>
     *         <td>string</td>
     *         <td>Read-only</td>
     *         <td>The XML namespace for the Adobe Photoshop Album custom schema.</td>
     *     </tr>
     *     <tr>
     *         <td>NS_EXIF</td>
     *         <td>string</td>
     *         <td>Read-only</td>
     *         <td>The XML namespace for Adobe’s EXIF schema.</td>
     *     </tr>
     *     <tr>
     *         <td>NS_EXIF_AUX</td>
     *         <td>string</td>
     *         <td>Read-only</td>
     *         <td>The XML namespace for Adobe’s EXIF auxiliary schema.</td>
     *     </tr>
     *     <tr>
     *         <td>NS_TIFF</td>
     *         <td>string</td>
     *         <td>Read-only</td>
     *         <td>The XML namespace for Adobe’s TIFF schema.</td>
     *     </tr>
     *     <tr>
     *         <td>NS_PNG</td>
     *         <td>string</td>
     *         <td>Read-only</td>
     *         <td>The XML namespace for the PNG schema.</td>
     *     </tr>
     *     <tr>
     *         <td>NS_JPEG</td>
     *         <td>string</td>
     *         <td>Read-only</td>
     *         <td>The XML namespace for the JPEG schema.</td>
     *     </tr>
     *     <tr>
     *         <td>NS_SWF</td>
     *         <td>string</td>
     *         <td>Read-only</td>
     *         <td>The XML namespace for the Flash small web format schema.</td>
     *     </tr>
     *     <tr>
     *         <td>NS_JPK</td>
     *         <td>string</td>
     *         <td>Read-only</td>
     *         <td>The XML namespace for the JPK schema.</td>
     *     </tr>
     *     <tr>
     *         <td>NS_CAMERA_RAW</td>
     *         <td>string</td>
     *         <td>Read-only</td>
     *         <td>The XML namespace for the Camera Raw schema.</td>
     *     </tr>
     *     <tr>
     *         <td>NS_DM</td>
     *         <td>string</td>
     *         <td>Read-only</td>
     *         <td>The XML namespace for the DM schema.</td>
     *     <tr>
     *         <td>NS_ADOBE_STOCK_PHOTO</td>
     *         <td>string</td>
     *         <td>Read-only</td>
     *         <td>The XML namespace for the Adobe Stock Photo schema.</td>
     *     </tr>
     *     <tr>
     *         <td>NS_ASF</td>
     *         <td>string</td>
     *         <td>Read-only</td>
     *         <td>The XML namespace for the Microsoft advanced streaming format schema.</td>
     *     </tr>
     * </table>
     *
     * <br></br>
     * ## Type namespace string constants
     * Constant values for the field-type namespace URI strings used in all structured property operations. See XMPMeta object.
     *
     * <table>
     *    <tr>
     *        <th>Name</th>
     *        <th>Type</th>
     *        <th>Access</th>
     *        <th>Description</th>
     *    </tr>
     *    <tr>
     *        <td>TYPE_IDENTIFIER_QUAL</td>
     *        <td>string</td>
     *        <td>Read-only</td>
     *        <td>The XML namespace for qualifiers of the xmp:Identifier property.</td>
     *    </tr>
     *    <tr>
     *        <td>TYPE_DIMENSIONS</td>
     *        <td>string</td>
     *        <td>Read-only</td>
     *        <td>The XML namespace for fields of the Dimensions type.</td>
     *    </tr>
     *    <tr>
     *        <td>TYPE_TEXT</td>
     *        <td>string</td>
     *        <td>Read-only</td>
     *        <td>The XML namespace for the XMP text document schema.</td>
     *    </tr>
     *    <tr>
     *       <td>TYPE_PAGEDFILE</td>
     *       <td>string</td>
     *       <td>Read-only</td>
     *       <td>The XML namespace for the XMP paged document schema.</td>
     *    </tr>
     *   <tr>
     *      <td>TYPE_GRAPHICS</td>
     *      <td>string</td>
     *      <td>Read-only</td>
     *      <td>The XML namespace for a structure containing the characteristics of a colorant (swatch) used in a document.</td>
     *   </tr>
     *   <tr>
     *      <td>TYPE_IMAGE</td>
     *      <td>string</td>
     *      <td>Read-only</td>
     *      <td>The XML namespace for fields of a graphical image. Used for the Thumbnail type.</td>
     *   </tr>
     *   <tr>
     *      <td>TYPE_FONT</td>
     *      <td>string</td>
     *      <td>Read-only</td>
     *      <td>The XML namespace for a structure containing the characteristics of a font used in a document.</td>
     *   </tr>
     *   <tr>
     *      <td>TYPE_RESOURCE_EVENT</td>
     *      <td>string</td>
     *      <td>Read-only</td>
     *      <td>The XML namespace for fields of the ResourceEvent type.</td>
     *   </tr>
     *   <tr>
     *      <td>TYPE_RESOURCE_REF</td>
     *      <td>string</td>
     *      <td>Read-only</td>
     *      <td>The XML namespace for fields of the ResourceRef type.</td>
     *   </tr>
     *   <tr>
     *      <td>TYPE_ST_VERSION</td>
     *      <td>string</td>
     *      <td>Read-only</td>
     *      <td>The XML namespace for fields of the Version type.</td>
     *   </tr>
     *   <tr>
     *      <td>TYPE_ST_JOB</td>
     *      <td>string</td>
     *      <td>Read-only</td>
     *      <td>The XML namespace for fields of the JobRef type.</td>
     *   </tr>
     *   <tr>
     *      <td>TYPE_MANIFEST_ITEM</td>
     *      <td>string</td>
     *      <td>Read-only</td>
     *      <td>The XML namespace for fields of the ManifestItem type.</td>
     *   </tr>
     *   <tr>
     *      <td>TYPE_PDFA_SCHEMA</td>
     *      <td>string</td>
     *      <td>Read-only</td>
     *      <td>The XML namespace for fields of the PDFA schema.</td>
     *   </tr>
     *   <tr>
     *      <td>TYPE_PDFA_PROPERTY</td>
     *      <td>string</td>
     *      <td>Read-only</td>
     *      <td>The XML namespace for fields of the PDFA property.</td>
     *   </tr>
     *   <tr>
     *      <td>TYPE_PDFA_TYPE</td>
     *      <td>string</td>
     *      <td>Read-only</td>
     *      <td>The XML namespace for fields of the PDFA type.</td>
     *   </tr>
     *   <tr>
     *      <td>TYPE_PDFA_FIELD</td>
     *      <td>string</td>
     *      <td>Read-only</td>
     *      <td>The XML namespace for fields of the PDFA field.</td>
     *   </tr>
     *   <tr>
     *      <td>TYPE_PDFA_ID</td>
     *      <td>string</td>
     *      <td>Read-only</td>
     *      <td>The XML namespace for fields of the PDFA ID.</td>
     *   </tr>
     *   <tr>
     *      <td>TYPE_PDFA_EXTENSION</td>
     *      <td>string</td>
     *      <td>Read-only</td>
     *      <td>The XML namespace for PDF subtypes.</td>
     *    </tr>
     *  </table>
     *
     * <br></br>
     * ## File format numeric constants<br></br>
     * Constant values for supported file types, used in I/O operations. See XMPFile object.
     *
     * <table>
     *      <tr>
     *          <th>Name</th>
     *          <th>Type</th>
     *          <th>Access</th>
     *          <th>Description</th>
     *      </tr>
     *      <tr>
     *          <td>FILE_UNKNOWN</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>Unknown file-format.</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_PDF</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>PDF</td>
     *      </tr>
     *      <tr>
     *           <td>FILE_POSTSCRIPT</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>PS, general PostScript following DSC conventions</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_EPS</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>EPS, encapsulated PostScript</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_JPEG</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>JPEG</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_JPEG2K</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>JPX, JPEG 2000 file</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_TIFF</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>TIFF</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_GIF</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>GIF</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_PNG</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *           <td>PNG</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_SWF</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>SWF, Flash file</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_FLA</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>FLA, Flash authoring file</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_FLV</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>FLV, Flash video file</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_MOV</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>MOV, Quicktime</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_AVI</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>AVI</td>
     *      </tr>
     *      <tr>
     *           <td>FILE_CIN</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>CIN, Cineon</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_WAV</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>WAV</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_MP3</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>MP3</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_SES</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>SES, Audition session</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_CEL</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>CEL, Audition loop</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_MPEG</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>MPEG</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_MPEG2</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>MPEG2</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_MPEG4</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>MPEG4</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_WMAV</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>WMAV, Windows Media Audio and Video</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_AIFF</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>AIFF</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_HTML</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>HTML</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_XML</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>XML</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_TEXT</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>TEXT</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_PHOTOSHOP</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>PSD, Photoshop</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_ILUSTRATOR</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>AI, Illustrator</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_INDESIGN</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>INDD, InDesign</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_AE_PROJECT</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>AEP, After Effects project</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_AE_PROJECT_TEMPLATE</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>AET, After Effects project template</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_AE_FILTER_PRESET</td>
     *           <td>number</td>
     *          <td>Read-only</td>
     *          <td>FFX, After Effects filter preset file</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_ENCORE_PROJECT</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>NCOR, Encore project file</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_PREMIERE_PROJECT</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>PPJ, Premiere project file</td>
     *      </tr>
     *      <tr>
     *          <td>FILE_PREMIERE_TITLE</td>
     *          <td>number</td>
     *          <td>Read-only</td>
     *          <td>PRPROJ, Premiere title file</td>
     *      </tr>
     *
     * </table>
     */
    export class XMPConst {}

    /**
     * To create an XMPMeta object, use the new operator. The constructor accepts an RDF/XML
     * serialized metadata packet as a string, or as an array of numbers that contain only byte values.
     * It returns the new object. If no argument is supplied, the new object is empty; you can use the
     * object’s functions to add namespaces and properties.
     * @example
     * // Create an XMPMeta object using property based APIs
     *
     * let { XMPMeta, XMPConst } = require("uxp").xmp;
     * let meta = new XMPMeta();
     * meta.setProperty(XMPConst.NS_XMP, "Name", "vkumarg");
     * let prop = meta.getProperty(XMPConst.NS_XMP, "Name");
     * console.log(prop.namespace);
     * console.log(prop.options);
     * console.log(prop.path);
     * // checking for the property existence and deleting it
     * if(meta.doesPropertyExist(XMPConst.NS_XMP, "Name")) {
     *      meta.deleteProperty(XMPConst.NS_XMP, "Name");
     * }
     *
     * if(!meta.doesPropertyExist(XMPConst.NS_XMP, "Name")) {
     *      console.log("Property doesn't exist");
     * } else {
     *      console.log("Property exists");
     * }
     * @example
     * // Create an XMPMeta object using struct based APIs
     *
     * let { XMPDateTime, XMPMeta, XMPConst } = require("uxp").xmp;
     * let meta = new XMPMeta();
     *
     * let jsDate = new Date("2007-04-10T17:54:50+01:00");
     * let xmpDate = new XMPDateTime(jsDate);
     * meta.setProperty(XMPConst.NS_XMP, "CreateDate", xmpDate, XMPConst.XMPDATE);
     * meta.doesPropertyExist(XMPConst.NS_XMP, "CreateDate");
     * let prop = meta.getProperty(XMPConst.NS_XMP, "CreateDate", XMPConst.XMPDATE);
     * meta.deleteProperty(XMPConst.NS_XMP, "CreateDate");
     *
     * meta.setStructField(XMPConst.NS_XML, "structNameSample", XMPConst.NS_XMP, "sampleFieldName", "sampleFieldValue");
     * if (meta.doesStructFieldExist(XMPConst.NS_XML, "structNameSample", XMPConst.NS_XMP, "sampleFieldName")) {
     *      prop = meta.getStructField(XMPConst.NS_XML, "structNameSample", XMPConst.NS_XMP, "sampleFieldName");
     *      meta.deleteStructField(XMPConst.NS_XML, "structNameSample", XMPConst.NS_XMP, "sampleFieldName");
     *      if (meta.doesStructFieldExist(XMPConst.NS_XML, "structNameSample", XMPConst.NS_XMP, "sampleFieldName")) {
     *         console.log("Struct field exists");
     *     } else {
     *        console.log("Struct field doesn't exist");
     *    }
     * } else {
     *  console.log("Struct field doesn't exist");
     * }
     * @param packet - A String containing an XML file or an XMP packet.
     * @param buffer - An Array of Number. The UTF-8 or UTF-16 encoded bytes of an XML file or an XMP packet.
     * This array is the result of XMPMeta.:ref:xmpmeta-serializeToArray.
     */
    export class XMPMeta {
      constructor(packet: string, buffer: string);
      /**
       * Appends an item to an existing array, or creates a new array-type property if the named array does not exist.
       * @example
       * XMPMetaObj.appendArrayItem(schemaNS, arrayName, itemValue[, itemOptions, arrayOptions])
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param arrayName - The array-type property name string. Can be a general path expression.
       * @param itemValue - The new item value string. Pass null for array items that do not have values.
       * @param [itemOptions = 0] - A flag that describes the new item, if it is being created. One of:<br></br>
       * - 0: A simple item, or the type implied by the arrayOptions value.<br></br>
       * - XMPConst.PROP_IS_ARRAY: The item is an array (of type alt, bag, or seq).<br></br>
       * - XMPConst.PROP_IS_STRUCT: The item is a structure with nested fields.<br></br>
       * @param [arrayOptions = 0] - A flag that describes the array form.  Must be provided if the array is being created; ignored if the array already exists. One of:<br></br>
       * - XMPConst.ARRAY_IS_ORDERED: Item order is significant. Implies XMPConst.PROP_IS_ARRAY.<br></br>
       * - XMPConst.ARRAY_IS_ALTERNATIVE: Items are mutually exclusive alternates. Implies XMPConst.PROP_IS_ARRAY and XMPConst.ARRAY_IS_ORDERED`<br></br>
       */
      appendArrayItem(
        schemaNS: string,
        arrayName: string,
        itemValue: string,
        itemOptions?: number,
        arrayOptions?: number
      ): void;
      /**
       * Reports the number of items in an array-type metadata property.
       * @example
       * XMPMetaObj.countArrayItems(schemaNS, arrayName)
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param arrayName - The array-type property name string. Can be a general path expression.
       * @returns the number of items
       */
      countArrayItems(schemaNS: string, arrayName: string): number;
      /**
       * Deletes the metadata tree that has the given array item as its root.
       * @example
       * XMPMetaObj.deleteArrayItem(schemaNS, arrayName, itemIndex)
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param arrayName - The array-type property name string. Can be a general path expression.
       * @param itemIndex - The 1-based position index of the item. Use XMPConst.ARRAY_LAST_ITEM to reference the last existing item in the array.
       */
      deleteArrayItem(
        schemaNS: string,
        arrayName: string,
        itemIndex: number
      ): void;
      /**
       * Deletes the metadata tree that has the given property as its root. If the property does not exist, does nothing.
       * @example
       * XMPMetaObj.deleteProperty(schemaNS, propName)
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param propName - The property name string. Can be a general path expression.
       */
      deleteProperty(schemaNS: string, propName: string): void;
      /**
       * Deletes the metadata tree that has the given structure field as its root.
       * @example
       * XMPMetaObj.deleteStructField(schemaNS, structName, fieldNS, fieldName)
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param structName - The structure name string. Can be a general path expression.
       * @param fieldNS - The field type namespace string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param fieldName - The field name string. Must be a simple XML name.
       */
      deleteStructField(
        schemaNS: string,
        structName: string,
        fieldNS: string,
        fieldName: string
      ): void;
      /**
       * Deletes the metadata tree that has the given qualifier as its root. If the qualifier does not exist, does nothing.
       * @example
       * XMPMetaObj.deleteQualifier(schemaNS, structName, qualNS, qualName)
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param structName - The structure name string. Can be a general path expression.
       * @param qualNS - The URI string of the qualifier namespace.
       * @param qualName - The qualifier name string. Must be a simple XML name.
       */
      deleteQualifier(
        schemaNS: string,
        structName: string,
        qualNS: string,
        qualName: string
      ): void;
      /**
       * Reports whether an array item with a given index currently exists in an existing array in the metadata.
       * @example
       * XMPMetaObj.doesArrayItemExist(schemaNS, arrayName, itemIndex)
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param arrayName - The array name string. Can be a general path expression.
       * @param itemIndex - The 1-based position index of the item.
       * @returns true if the array and item exist.
       */
      doesArrayItemExist(
        schemaNS: string,
        arrayName: string,
        itemIndex: number
      ): boolean;
      /**
       * Reports whether a property with a given name currently exists in the metadata.
       * @example
       * XMPMetaObj.doesPropertyExist(schemaNS, propName)
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param propName - The property name string. Can be a general path expression.
       * @returns true if the property exists.
       */
      doesPropertyExist(schemaNS: string, propName: string): boolean;
      /**
       * Reports whether a structure field with a given name currently exists in the metadata.
       * @example
       * XMPMetaObj.doesStructFieldExist(schemaNS, structName, fieldNS, fieldName)
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param structName - The structure name string. Can be a general path expression.
       * @param fieldNS - The field type namespace string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param fieldName - The field name string. Must be a simple XML name.
       * @returns true if the structure and field exist.
       */
      doesStructFieldExist(
        schemaNS: string,
        structName: string,
        fieldNS: string,
        fieldName: string
      ): boolean;
      /**
       * Reports whether a qualifier with a given name currently exists for a given property.
       * @example
       * XMPMetaObj.doesQualifierExist(schemaNS, structName, qualNS, qualName)
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param structName - The structure name string. Can be a general path expression.
       * @param qualNS - The URI string of the qualifier namespace.
       * @param qualName - The qualifier name string. Must be a simple XML name.
       * @returns true if the property and qualifier exist.
       */
      doesQualifierExist(
        schemaNS: string,
        structName: string,
        qualNS: string,
        qualName: string
      ): boolean;
      /**
       * Creates and returns a string containing the metadata content of this object as RDF.
       * @example
       * XMPMetaObj.dumpObject()
       * @returns a string containing the metadata content of this object as RDF.
       */
      dumpObject(): string;
      /**
       * Retrieves an item from an array-type metadata property.
       * Returns an [XMPProperty object](./XMPProperty.md).
       * @example
       * XMPMetaObj.getArrayItem(schemaNS, arrayName, itemIndex)
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param arrayName - The array name string. Can be a general path expression.
       * @param itemIndex - The 1-based position index of the item. Use XMPConst.ARRAY_LAST_ITEM to reference the last existing item in the array.
       * @returns the contents of the file.
       */
      getArrayItem(
        schemaNS: string,
        arrayName: string,
        itemIndex: number
      ): XMPProperty | undefined;
      /**
       * Retrieves the text value for a specific language from an alternate-text array. First tries to match the specific language.
       * If not found, tries to match the generic language, if specified. If not found, gets the x-default item, if any. Otherwise, gets the first item.
       * @example
       * XMPMetaObj.getLocalizedText(schemaNS, altTextName, genericLang, specificLang)
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param altTextName - The alternate-text array name string. Can be a general path expression.
       * @param genericLang - The name of the generic language as an RFC 3066 primary subtag. Can be null or the empty string.
       * @param specificLang - The name of the specific language as an RFC 3066 primary subtag; for example, en-US. Must be specified.
       * @returns the text value for a specific language from an alternate-text array.
       */
      getLocalizedText(
        schemaNS: string,
        altTextName: string,
        genericLang: string,
        specificLang: string
      ): string | undefined;
      /**
       * Retrieves the value and options of a metadata property. Use for top-level, simple properties, or after using the path-composition functions in the [XMPUtils object](./XMPUtils.md).
       * Returns an [XMPProperty object](./XMPProperty.md).
       * @example
       * XMPMetaObj.getProperty(schemaNS, propName[, valueType])
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param propName - The property name string. Can be a general path expression.
       * @param [valueType = ""] - The property data type, one of: - XMPConst.STRING - XMPConst.INTEGER - XMPConst.NUMBER - XMPConst.BOOLEAN - XMPConst.XMPDATE
       * @returns the value and options of a metadata property
       */
      getProperty(
        schemaNS: string,
        propName: string,
        valueType?: string
      ): XMPProperty | undefined;
      /**
       * Retrieves a field value from within a nested structure in metadata.
       * Returns an [XMPProperty object](./XMPProperty.md).
       * @example
       * XMPMetaObj.getStructField(schemaNS, structName, fieldNS, fieldName)
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param structName - The structure name string. Can be a general path expression.
       * @param fieldNS - The field type namespace string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param fieldName - The field name string. Must be a simple XML name.
       * @returns the field value from within a nested structure in metadata.
       */
      getStructField(
        schemaNS: string,
        structName: string,
        fieldNS: string,
        fieldName: string
      ): XMPProperty | undefined;
      /**
       * Retrieves a qualifier attached to a metadata property.
       * Returns an [XMPProperty object](./XMPProperty.md).
       * @example
       * XMPMetaObj.getQualifier(schemaNS, structName, qualNS, qualName)
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param structName - The structure name string. Can be a general path expression.
       * @param qualNS - The URI string of the qualifier namespace.
       * @param qualName - The qualifier name string. Must be a simple XML name.
       * @returns the qualifier attached to a metadata property
       */
      getQualifier(
        schemaNS: string,
        structName: string,
        qualNS: string,
        qualName: string
      ): XMPProperty | undefined;
      /**
       * Inserts an item into an array, before an existing item. The index positions of all later items are incremented. The array must exist.
       * @example
       * XMPMetaObj.insertArrayItem(schemaNS, arrayName, itemIndex, itemValue[, itemOptions])
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param arrayName - The array-type property name string. Can be a general path expression.
       * @param itemIndex - The 1-based position index at which to insert the new item. Use XMPConst.ARRAY_LAST_ITEM to reference the last existing item in the array.
       * @param itemValue - The new item value. Pass null for array items that do not have values.
       * @param [itemOptions = 0] - A flag that describes the new item, if it is being created. One of:<br></br>
       * - 0: A simple item, the default.<br></br>
       * - XMPConst.PROP_IS_ARRAY: The item is an array (of type alt, bag, or seq).<br></br>
       * - XMPConst.PROP_IS_STRUCT: The item is a structure with nested fields.<br></br>
       */
      insertArrayItem(
        schemaNS: string,
        arrayName: string,
        itemIndex: number,
        itemValue: string,
        itemOptions?: number
      ): void;
      /**
       * Creates an iteration object that can iterate over the properties, arrays, and qualifiers within this metadata.
       * Specify options, a namespace, and a property to limit the range and granularity of the resulting items.
       * Returns an [XMPIterator object](./XMPIterator.md).
       * @example
       * XMPMetaObj.iterator(options, schemaNS, propName)
       * @param options - The set of options that control how the iteration is performed, and how values are returned. A logical OR of these bit-flag constants:<br></br>
       * XMPConst.ITERATOR_JUST_CHILDREN - Limit iteration to immediate children of the root property. By default, iterates into subtrees.<br></br>
       * XMPConst.ITERATOR_JUST_LEAFNODES - Limit iteration to leaf nodes. By default, iterates into all nodes of a subtree.<br></br>
       * XMPConst.ITERATOR_JUST_LEAFNAMES - Return only the leaf part of the path. By default, returns a full path.<br></br>
       * XMPConst.ITERATOR_INCLUDE_ALIASES - Include aliases. By default, considers only actual properties.<br></br>
       * XMPConst.ITERATOR_OMIT_QUALIFIERS - Omit qualifiers from iteration.<br></br>
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param propName - The array-type property name string. Can be a general path expression.
       * @returns the XMPIterator object for this metadata object
       */
      iterator(
        options: number,
        schemaNS: string,
        propName: string
      ): XMPIterator;
      /**
       * Serializes this XMP metadata into a string as RDF.
       * @example
       * XMPMetaObj.serialize([options, padding, indent, newline, baseIndent])
       * @param [options = 0] - The set of options that control how the serialization is performed.
       * The options must be logically consistent; if they conflict, the function throws an exception. A logical OR of these bit-flag constants:<br></br>
       * XMPConst.SERIALIZE_OMIT_PACKET_WRAPPER - Do not include an XML packet wrapper.<br></br>
       * XMPConst.SERIALIZE_READ_ONLY_PACKET - Create a read-only XML packet wrapper.<br></br>
       * XMPConst.SERIALIZE_USE_COMPACT_FORMAT - Use a highly compact RDF syntax and layout.<br></br>
       * XMPConst.SERIALIZE_USE_PLAIN_XMP - Serialize a plain XMP (not currently supported).<br></br>
       * XMPConst.SERIALIZE_INCLUDE_THUMBNAIL_PAD - Include typical space for a JPEG thumbnail in the padding if no xmp:Thumbnail property is present.<br></br>
       * XMPConst.SERIALIZE_EXACT_PACKET_LENGTH - Compute padding to meet the overall packet length provided by the padding parameter. Throws an exception if the unpadded packet exceeds this length.<br></br>
       * XMPConst.SERIALIZE_WRITE_ALIAS_COMMENTS - Include XML comments for aliases.<br></br>
       * @param [padding = 0] - If the options value is SERIALIZE_EXACT_PACKET_LENGTH, this the exact length of the packet, including padding characters that are added to meet this length.
       * If the options value is not SERIALIZE_EXACT_PACKET_LENGTH, this is a number of padding characters to add.Default is 0, meaning to use the appropriate amount of padding.
       * @param [indent = "  "] - The string to use as an indent. Default is two spaces.
       * @param [newline = "U+000A"] - The newline character to use.
       * @param [baseIndent = 0] - The level of indentation of the outermost XML element.
       * @returns the serialized XMP metadata as a RDF string
       */
      serialize(
        options?: number,
        padding?: number,
        indent?: string,
        newline?: string,
        baseIndent?: number
      ): string;
      /**
       * Serializes this XMP metadata into a string as RDF, then converts that to an array of one-byte numeric values, the UTF-8 or UTF-16 encoded characters.
       * @example
       * XMPMetaObj.serializeToArray([options, padding, indent, newline, baseIndent])
       * @param [options = 0] - The set of options that control how the serialization is performed.
       * The options must be logically consistent; if they conflict, the function throws an exception. A logical OR of these bit-flag constants:<br></br>
       * XMPConst.SERIALIZE_OMIT_PACKET_WRAPPER - Do not include an XML packet wrapper.<br></br>
       * XMPConst.SERIALIZE_READ_ONLY_PACKET - Create a read-only XML packet wrapper.<br></br>
       * XMPConst.SERIALIZE_USE_COMPACT_FORMAT - Use a highly compact RDF syntax and layout.<br></br>
       * XMPConst.SERIALIZE_USE_PLAIN_XMP - Serialize a plain XMP (not currently supported).<br></br>
       * XMPConst.SERIALIZE_INCLUDE_THUMBNAIL_PAD - Include typical space for a JPEG thumbnail in the padding if no xmp:Thumbnail property is present.<br></br>
       * XMPConst.SERIALIZE_EXACT_PACKET_LENGTH - Compute padding to meet the overall packet length provided by the padding parameter. Throws an exception if the unpadded packet exceeds this length.<br></br>
       * XMPConst.SERIALIZE_WRITE_ALIAS_COMMENTS - Include XML comments for aliases.<br></br>
       * @param [padding = 0] - If the options value is SERIALIZE_EXACT_PACKET_LENGTH, this the exact length of
       * the packet, including padding characters that are added to meet this length.
       * If the options value is not SERIALIZE_EXACT_PACKET_LENGTH, this is a number of padding characters to add.
       * Default is 0, meaning to use the appropriate amount of padding.
       * @param [indent = "  "] - The string to use as an indent. Default is two spaces.
       * @param [newline = "U+000A"] - The newline character to use.
       * @param [baseIndent = 0] - The level of indentation of the outermost XML element.
       * @returns the Array of Numbers.
       */
      serializeToArray(
        options?: number,
        padding?: number,
        indent?: string,
        newline?: string,
        baseIndent?: number
      ): any[];
      /**
       * Replaces an item within an array, or appends an item. The array must exist. To create an item, appendArrayItem() and insertArrayItem() are preferred.
       * @example
       * XMPMetaObj.setArrayItem(schemaNS, arrayName, itemIndex, itemValue[, itemOptions])
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param arrayName - The array-type property name string. Can be a general path expression.
       * @param itemIndex - The 1-based position index of the item. Use XMPConst.ARRAY_LAST_ITEM to reference the last existing item in the array.
       * @param itemValue - The new item value string. Pass null for array items that do not have values.
       * @param [itemOptions = 0] - A flag that describes the new item, if it is being created. One of:<br></br>
       * - 0: A simple item, or the type implied by the arrayOptions value.<br></br>
       * - XMPConst.PROP_IS_ARRAY: The item is an array (of type alt, bag, or seq).<br></br>
       * - XMPConst.PROP_IS_STRUCT: The item is a structure with nested fields.<br></br>
       */
      setArrayItem(
        schemaNS: string,
        arrayName: string,
        itemIndex: number,
        itemValue: string,
        itemOptions?: number
      ): void;
      /**
       * Sets the text value for a specific language in an alternate-text array. Handles special cases for the x-default item.
       * @example
       * XMPMetaObj.setLocalizedText(schemaNS, altTextName, genericLang, specificLang, itemValue, setOptions)
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param altTextName - The name string of the alternate-text array. Can be a general path expression.
       * @param genericLang - The name of the generic language as an RFC 3066 primary subtag. Can be null or the empty string.
       * @param specificLang - The name of the specific language as an RFC 3066 primary subtag; for example, en-US. Must be specified.
       * @param itemValueThe - new string value.
       */
      setLocalizedText(
        schemaNS: string,
        altTextName: string,
        genericLang: string,
        specificLang: string,
        itemValueThe: string
      ): void;
      /**
       * Sets the value of a field within a structure-type property, or creates a new field if the named field does not exist in the structure,
       * or creates a new structure containing the named field if the named structure does not exist.
       * @example
       * XMPMetaObj.setStructField(schemaNS, structName, fieldNS, fieldName, fieldValue[, options])
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param structName - The name string of an existing structure. Can be a general path expression.
       * @param fieldNS - The field type namespace string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param fieldName - The field name string. Must be a simple XML name.
       * @param fieldValue - he new field value string. Pass null for fields that do not have values.
       * @param [options = 0] - option flags that describe a new structure. Used only if the structure is being created. One of:<br></br>
       * - 0: A simple item, the default.<br></br>
       * - XMPConst.PROP_IS_ARRAY: The item is an array (of type alt, bag, or seq).<br></br>
       * - XMPConst.PROP_IS_STRUCT: The item is a structure with nested fields.<br></br>
       */
      setStructField(
        schemaNS: string,
        structName: string,
        fieldNS: string,
        fieldName: string,
        fieldValue: string,
        options?: number
      ): void;
      /**
       * Attaches a new qualifier to a metadata property. A qualifier can be added to a simple property, an array item, a struct field, or another qualifier.
       * @example
       * XMPMetaObj.setQualifier(schemaNS, propName, qualNS, qualName, qualValue[, options])
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param propName - The name string of an existing property. Can be a general path expression.
       * @param qualNS - The URI of the qualifier namespace. Has the same URI and prefix usage as a schema namespace.
       * @param qualName - The name of the qualifier. Must be a simple XML name. Has the same prefix usage as a property name.
       * @param qualValue - The new qualifier value string. Pass null for qualifiers that do not have values.
       * @param [options = 0] - option flags that describe a new structure. Used only if the structure is being created. One of:<br></br>
       * - 0: A simple item, the default.<br></br>
       * - XMPConst.PROP_IS_ARRAY: The item is an array (of type alt, bag, or seq).<br></br>
       * - XMPConst.PROP_IS_STRUCT: The item is a structure with nested fields.<br></br>
       */
      setQualifier(
        schemaNS: string,
        propName: string,
        qualNS: string,
        qualName: string,
        qualValue: string,
        options?: number
      ): void;
      /**
       * Sets the value of a simple metadata property, creating the property if necessary, or creates a new array or structure property.
       * For creating array and structure properties,  [setArrayItem()](#setarrayitemschemans-arrayname-itemindex-itemvalue-itemoptions) and [setStructField()](#setstructfieldschemans-structname-fieldns-fieldname-fieldvalue-options) are preferred.
       * Use this call to create or set top-level, simple properties, or after using the path-composition functions in the [[XMPUtils object](./XMPUtils.md)](./XMPUtils.md).
       * @example
       * XMPMetaObj.setProperty(schemaNS, propName, propValue[, setOptions, valueType])
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param propName - The property name string. Can be a general path expression.
       * @param propValue - The new property value string. Pass null to create an array or non-leaf level structure property.
       * @param [setOptions = 0] - option flags that describe a new structure. Used only if the structure is being created. One of:<br></br>
       * - 0: A simple item, the default.<br></br>
       * - XMPConst.PROP_IS_ARRAY: The item is an array (of type alt, bag, or seq).<br></br>
       * - XMPConst.PROP_IS_STRUCT: The item is a structure with nested fields.<br></br>
       * @param [valueType = ""] - The property data type, If supplied, the value is converted to this type.
       * one of: <br></br> - XMPConst.STRING<br></br>
       *         - XMPConst.INTEGER<br></br>
       *         - XMPConst.NUMBER<br></br>
       *         - XMPConst.BOOLEAN<br></br>
       *         - XMPConst.XMPDATE<br></br>
       */
      setProperty(
        schemaNS: string,
        propName: string,
        propValue: string,
        setOptions?: number,
        valueType?: string
      ): void;
      /**
       * Sorts the XMP contents alphabetically. At the top level, sorts namespaces by their prefixes.
       * Within a namespace, sorts top-level properties are sorted by name. Within a struct, sorts fields by their qualified name (that is, the XML prefix:local form.)
       * Sorts unordered arrays of simple items by value. Sorts language alternative arrays by the xml:lang qualifiers, with the "x-default" item placed first.
       * @example
       * XMPMetaObj.sort()
       */
      sort(): void;
      /**
       * Deletes a registered prefix - namespace URI pair.
       * @example
       * XMPMeta.deleteNamespace(namespaceURI)
       * @param namespaceURI - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       */
      static deleteNamespace(namespaceURI: string): void;
      /**
       * Creates and returns a human-readable string containing the list of registered namespace URIs and their associated prefixes.
       * @example
       * XMPMeta.dumpNamespaces()
       * @param namespaceURI - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @returns the list of registered namespace URIs and their associated prefixes.
       */
      static dumpNamespaces(namespaceURI: string): string;
      /**
       * Retrieves the prefix associated with a registered namespace URI.
       * @example
       * XMPMeta.getNamespacePrefix(namespaceURI)
       * @param namespaceURI - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @returns the prefix string followed by a colon.
       */
      static getNamespacePrefix(namespaceURI: string): string;
      /**
       * Retrieves the registered namespace URI associated with a namespace prefix.
       * @example
       * XMPMeta.getNamespaceURI(namespacePrefix)
       * @param namespacePrefix - The namespace prefix string.
       * @returns the URI String.
       */
      static getNamespaceURI(namespacePrefix: string): string;
      /**
       * Registers a namespace with a prefix. If the suggested prefix is already in use, generates, registers,
       * and returns a different prefix.
       * @example
       * XMPMeta.registerNamespace(namespaceURI, suggestedPrefix)
       * @param namespaceURI - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param suggestedPrefix - The suggested namespace prefix string.
       * @returns the String containing the actual registered prefix. This is the suggestedPrefix, unless that one is already assigned to another namespace.
       */
      static registerNamespace(
        namespaceURI: string,
        suggestedPrefix: string
      ): string;
    }

    /**
     * This class provides additional utility functions for the XMP Toolkit, layered upon the functionality of
     * the [XMPMeta object](./XMPMeta.md). It has only static functions, you cannot create an instance.
     *
     * Path-composition functions such as composeArrayItemPath(), provide support for composing path
     * expressions to deeply nested properties, which you can then pass to the accessor functions in
     * [XMPMeta object](./XMPMeta.md), such as xmpmetaobj-getProperty.
     *
     * Higher-level functions such as xmputils-duplicateSubtree allow you to manipulate the metadata tree
     * in an [XMPMeta object](./XMPMeta.md).
     */
    export class XMPUtils {
      /**
       * Copies properties from a source [XMPMeta object](./XMPMeta.md) and appends them to a destination [XMPMeta object](./XMPMeta.md).
       * @example
       * XMPUtils.appendProperties(source, dest, options)
       * @param source - The source [XMPMeta object](./XMPMeta.md).
       * @param dest - The destination [XMPMeta object](./XMPMeta.md).
       * @param [options = 0] - Option flags that control the copying operation. A logical OR of these bit-flag constants:<br></br>
       * - XMPConst.APPEND_ALL_PROPERTIES: Include both internal and external properties. By default, copies only external properties. This applies only to top-level properties.<br></br>
       * - XMPConst.APPEND_REPLACE_OLD_VALUES: Replace the values of existing properties with the value from the source object. By default, existing values are retained. This applies to properties at all levels of hierarchy.<br></br>
       * - XMPConst.APPEND_DELETE_EMPTY_VALUES: Delete properties if the new value is empty.
       */
      static appendProperties(
        source: XMPMeta,
        dest: XMPMeta,
        options?: number
      ): void;
      /**
       * Concatenates a set of array item values into a single string. The resulting string can be separated back out into array items using separateArrayItems().
       * @example
       * XMPUtils.catenateArrayItems(xmpObj, schemaNS, arrayName, separator, quotes, options)
       * @param xmpObj - The [XMPMeta object](./XMPMeta.md) containing the array.
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param arrayName - The array property name string. Can be a general path expression. Each item in the array must be a simple string value.
       * @param [separator = ;] - The string used to separate the items in the result string. Default is ‘; ‘, an ASCII semicolon and space (U+003B,U+0020).
       * @param [quotes =] - The character used to quote items that contain a separator. Default is ‘”’, an ASCII double quote (U+0022).
       * @param [options = 0] - Option flag that controls the concatenation. This constant value:<br></br>
       * - XMPConst.SEPARATE_ALLOW_COMMAS: Allow commas in item values (such as “LastName, FirstName”). This option must be set the same way in this function and in [separateArrayItems()](#separatearrayitemsxmpobj-schemans-arrayname-arrayoptions-concatstring) to reconstruct the items correctly.
       * @returns the concatenated string.
       */
      static catenateArrayItems(
        xmpObj: XMPMeta,
        schemaNS: string,
        arrayName: string,
        separator?: string,
        quotes?: string,
        options?: number
      ): string;
      /**
       * Creates and returns a string containing the path expression for an item in an array, using the registered prefix for the namespace, in the form:
       * schemaNS:arrayName[itemIndex]
       * @example
       * XMPUtils.composeArrayItemPath(schemaNS, arrayName, itemIndex)
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param arrayName - The array property name string. Can be a general path expression.
       * @param itemIndex - The 1-based position index of the item. Use XMPConst.ARRAY_LAST_ITEM to reference the last existing item in the array. In this case, the resulting path is ns:arrayName[last()].
       * @returns a string containing the path expression for an item in an array.
       */
      static composeArrayItemPath(
        schemaNS: string,
        arrayName: string,
        itemIndex: number
      ): string;
      /**
       * Creates and returns a string containing the path expression to select an alternate item by a field’s value, using the registered prefixes for the namespaces, in the form:
       * schemaNS:arrayName[fieldNS:fieldName='fieldValue']
       * @example
       * XMPUtils.composeFieldSelector(schemaNS, arrayName, fieldNS, fieldName, fieldValue)
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param arrayName - The array property name string. Can be a general path expression.
       * @param fieldNS - The field namespace URI string.
       * @param fieldName - The field name. Must be a simple XML name.
       * @param fieldValue - The desired field value.
       * @returns a string containing the path expression to select an alternate item by a field’s value.
       */
      static composeFieldSelector(
        schemaNS: string,
        arrayName: string,
        fieldNS: string,
        fieldName: string,
        fieldValue: string
      ): string;
      /**
       * Creates and returns a string containing the path expression to select an alternate item in an alt text array by language, using the registered prefix for the namespace, in the form:
       * schemaNS:arrayName[@xml:lang='langName']
       * @example
       * XMPUtils.composeLanguageSelector(schemaNS, arrayName, locale)
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param arrayName - The array property name string. Can be a general path expression.
       * @param locale - The RFC3066 locale code string for the desired language.
       * @returns a string containing the path expression to select an alternate item in an alt text array by language.
       */
      static composeLangSelector(
        schemaNS: string,
        arrayName: string,
        locale: string
      ): string;
      /**
       * Creates and returns a string containing the path expression for a field in a structure, using the registered prefixes for the namespaces, in the form:
       * schemaNS:structName/fieldNS:fieldName
       * @example
       * XMPUtils.composeStructFieldPath(schemaNS, structName, fieldNS, fieldName)
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param structName - The structure property name string. Can be a general path expression.
       * @param fieldNS - The field namespace URI string.
       * @param fieldName - The field name. Must be a simple XML name.
       * @returns a string containing the path expression for a field in a structure.
       */
      static composeStructFieldPath(
        schemaNS: string,
        structName: string,
        fieldNS: string,
        fieldName: string
      ): string;
      /**
       * Creates and returns a string containing the path expression for a qualifier attached to a property, using the registered prefix for the namespace, in the form:
       * schemaNS:propName/?qualNS:qualName
       * @example
       * XMPUtils.composeQualifierPath(schemaNS, propName, qualNS, qualName)
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param propName - The property name string. Can be a general path expression.
       * @param qualNS - The qualifier namespace URI string.
       * @param qualName - The qualifier name. Must be a simple XML name.
       * @returns a string containing the path expression for a qualifier attached to a property.
       */
      static composeQualifierPath(
        schemaNS: string,
        propName: string,
        qualNS: string,
        qualName: string
      ): string;
      /**
       * Copies properties in the specified subtree from a source [XMPMeta object](./XMPMeta.md) and adds them into a destination [XMPMeta object](./XMPMeta.md).
       * @example
       * XMPUtils.duplicateSubtree(source, dest, sourceNS, sourceRoot, destNS, destRoot, options)
       * @param source - The source [XMPMeta object](./XMPMeta.md).
       * @param dest - The destination [XMPMeta object](./XMPMeta.md).
       * @param sourceNS - The source namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param sourceRoot - The property name string for the root location of the source subtree. Can be a general path expression.
       * @param destNS - The destination namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param [destRoot] - The property name string for the root location of the destination subtree. Can be a general path expression. Default is the source root location.
       * @param [options = 0] - Option flags that control the copying operation. A logical OR of these bit-flag constants:<br></br>
       * - XMPConst.APPEND_ALL_PROPERTIES: Include both internal and external properties. By default, copies only external properties. This applies only to top-level properties.<br></br>
       * - XMPConst.APPEND_REPLACE_OLD_VALUES: Replace the values of existing properties with the value from the source object. By default, existing values are retained. This applies to properties at all levels of hierarchy.<br></br>
       * - XMPConst.APPEND_DELETE_EMPTY_VALUES: Delete properties if the new value is empty.
       */
      static duplicateSubtree(
        source: XMPMeta,
        dest: XMPMeta,
        sourceNS: string,
        sourceRoot: string,
        destNS: string,
        destRoot?: string,
        options?: number
      ): void;
      /**
       * Removes multiple properties from an [XMPMeta object](./XMPMeta.md).<br></br><br></br>
       * If both the namespace and property name are supplied, removes the property if it is external, even if it is an alias.<br></br>
       * If it is internal, removes it if the option XMPConst.REMOVE_ALL_PROPERTIES is specified.<br></br><br></br>
       * If the namespace is supplied and the property name is not, removes all external properties in the namespace,<br></br>
       * and optionally all internal properties. Removes aliases only if the option XMPConst.REMOVE_INCLUDE_ALIASES is specified.<br></br><br></br>
       * If neither the namespace nor the property name are supplied, removes all external properties, and optionally all internal properties.<br></br>
       * Aliases are handled implicitly, because the associated actual is removed.
       * @example
       * XMPUtils.removeProperties(xmpObj, schemaNS, propName, options)
       * @param xmpObj - The [XMPMeta object](./XMPMeta.md).
       * @param [schemaNS] - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants). Must be supplied if a property name is supplied.
       * @param [propName] - The property name string. Can be a general path expression.
       * @param [options = 0] - Option flags that control the deletion operation. A logical OR of these bit-flag constants:<br></br>
       * - XMPConst.REMOVE_ALL_PROPERTIES: Remove internal and external properties. By default, removes only external properties. Applies only to top-level properties.<br></br>
       * - XMPConst.REMOVE_INCLUDE_ALIASES: Remove aliases defined in the namespace. If the property name is supplied, removes it regardless of this option.
       */
      static removeProperties(
        xmpObj: XMPMeta,
        schemaNS?: string,
        propName?: string,
        options?: number
      ): void;
      /**
       * Updates individual array item strings in the [XMPMeta object](./XMPMeta.md) from a concatenated string returned by catenateArrayItems().
       * Recognizes a large set of separator characters, including semicolons, commas, tab, return, linefeed, and multiple spaces.
       * @example
       * XMPUtils.separateArrayItems(xmpObj, schemaNS, arrayName, arrayOptions, concatString)
       * @param xmpObj - The [XMPMeta object](./XMPMeta.md) containing the array.
       * @param schemaNS - The namespace URI string. See [Schema namespace string constants](./XMPConst.md#schema-namespace-string-constants).
       * @param arrayName - The array property name string. Can be a general path expression. Each item in the array must be a simple string value.
       * @param [arrayOptions = 0] - Option flags that control how the array property is updated from the separated string. A logical OR of these bit-flag constants:<br></br>
       * - XMPConst.APPEND_ALL_PROPERTIES: Include both internal and external properties. By default, copies only external properties. This applies only to top-level properties.<br></br>
       * - XMPConst.APPEND_REPLACE_OLD_VALUES: Replace the values of existing properties with the value from the source object. By default, existing values are retained. This applies to properties at all levels of hierarchy.<br></br>
       * - XMPConst.APPEND_DELETE_EMPTY_VALUES: Delete properties if the new value is empty.<br></br>
       * - XMPConst.SEPARATE_ALLOW_COMMAS: Allow commas in item values. If not specified, an item containing a comma (such as “LastName, FirstName”) is separated into two array items.
       * @param concatString - The string containing the concatenated array values, as returned by catenateArrayItems().
       */
      static separateArrayItems(
        xmpObj: XMPMeta,
        schemaNS: string,
        arrayName: string,
        arrayOptions: number,
        concatString: string
      ): void;
    }
  }

  /**
   * To get an instance: `require("uxp").shell`<br/>
   * These APIs require UXP Manifest v5 configurations. see [Launch Process]{@link https://developer.adobe.com/photoshop/uxp/2022/guides/uxp_guide/uxp-misc/manifest-v5/#launch-process}
   */
  class Shell {
    /**
     * Opens the given file or folder path in the system default application.<br/>
     * NOTE: UWP can access only files in the UWP App sandbox. see [File access permissions in UWP]{@link https://docs.microsoft.com/en-us/windows/uwp/files/file-access-permissions}
     * @example
     * // for MacOS
     * shell.openPath("/Users/[username]/Downloads");
     * shell.openPath("/Users/[username]/sample.txt");
     *
     * // for Windows
     * shell.openPath("C:\Users\[username]\Downloads");
     * shell.openPath("C:\Users\[username]\AppData\Local\...\sample.txt");
     * @param path - String representing the path to open
     * @param developerText - Information from the plugin developer to be displayed on the user consent dialog. Message should be localized in current host UI locale.
     * @returns Promise that resolves with "" if succeeded or String containing the error message if failed.
     */
    openPath(path: string, developerText?: string): Promise<string>;
    /**
     * Opens the url in the dedicated system applications for the scheme.<br/>
     * NOTE: file scheme is not allowed for openExternal. Use openPath for those cases.
     * @example
     * shell.openExternal("https://www.adobe.com/");
     * shell.openExternal("https://www.adobe.com/", "develop message for the user consent dialog");
     * @example
     * shell.openExternal("maps://?address=345+Park+Ave+San+Jose"); // for MacOS
     * shell.openExternal("bingmaps:?q=345+Park+Ave+San+Jose, +95110"); // for Windows
     * @param url - String representing the URL to open
     * @param developerText - Information from the plugin developer to be displayed on the user consent dialog. Message should be localized in current host UI locale.
     * @returns Promise that resolves with "" if succeeded or String containing the error message if failed.
     */
    openExternal(url: string, developerText?: string): Promise<string>;
  }
  export const shell: Shell;

  /**
   * To get an instance: `require("uxp").entrypoints`
   */
  class EntryPoints {
    /**
     * API for plugin to add handlers and menu items for entrypoints defined in manifest.
     * This API can only be called once and there after other apis can be used to modify menu items.
     * The function throws in case of any error in entrypoints data or if its called more than once.
     * @example
     * const { entrypoints } = require("uxp");
     *  entrypoints.setup({
     *      plugin: {
     *          create() {..},
     *          destroy() {..}
     *      },
     *      panels: {
     *          "panel1": {
     *              create() {..},
     *              show() {..},
     *              hide() {..},
     *              destroy() {..},
     *              invokeMenu() {..},
     *              update() {..}, // customEntrypoint example
     *              validatNode() {..} // customEntrypoint example
     *               menuItems: [
     *                   {
     *                       id: "signIn",
     *                       label: "Sign In...",
     *                       enabled: false,
     *                       checked: false
     *                       submenu: [
     *                           { id: "submenu1", label: "submenu1", enabled: false, checked: false},
     *                           { "submenu2" }
     *                       ]
     *                   },
     *                   "-",  // separator.
     *                   "Sign out",  // by default enabled, and the id will be same with the label.
     *               ]
     *           },
     *           "panel2": {..}
     *       },
     *       commands: {
     *           "command1": {
     *               run() {..},
     *               cancel() {..}
     *           },
     *           "command2": function(){..}
     *       }
     *   });
     * @param entrypoints - it consists of mainly three objects - 'plugin', 'panels' and 'commands'.
     * @param entrypoints.plugin - This can be an object or a function. If this is a function, it is
     *                                           assumed as the 'create' handler (described below).
     * @param entrypoints.plugin.create - This is called after plugin is loaded. 'this' can be used to access
     *                                         UxpPluginInfo object. If 'plugin' object is defined, 'create' must be defined.
     *                                         To signal failure, throw an exception.
     * @param entrypoints.plugin.destroy - This is called before plugin is unloaded. 'this' can be used to access
     *                                          UxpPluginInfo object.
     * @param entrypoints.panels - This contains a list of key-value pairs where each key is a panel id (string) and
     *                               value is the data for the panel whose type can be object/function.
     *                               If a function, it is assumed to be the 'show' method (described below).
     *                               If an object, it can contain following properties but it is must to
     *                               define either of 'create' or 'show'.
     * @param entrypoints.panels.create - This is called when a panel is created. 'this' can be used to access
     *                                         UxpPanelInfo object. This function can return a promise.
     *                                         To signal failure, throw an exception or return a rejected promise.
     *                                         This has a default Timeout of 300 MSec from manifest v5 onwards.
     *                              Parameters :
     *                                          create(event) {}, till Manifest Version V4
     *                                          create(rootNode) {}, from v5 onwards
     * @param entrypoints.panels.show - This is called when a panel is shown. 'this' can be used to access
     *                                         UxpPanelInfo object. This function can return a promise.
     *                                         To signal failure, throw an exception or return a rejected promise.
     *                                         This has a default Timeout of 300 MSec from manifest v5 onwards.
     *                              Parameters :
     *                                          show(event) {}, till Manifest Version V4
     *                                          show(rootNode, data) {}, from v5 onwards
     * @param entrypoints.panels.hide - This is called when a panel is hidden. 'this' can be used to access
     *                                       UxpPanelInfo object. This function can return a promise.
     *                                       To signal failure, throw an exception or return a rejected promise.
     *                                       This has a default Timeout of 300 MSec from manifest v5 onwards.
     *                              Parameters :
     *                                          hide(event) {}, till Manifest Version V4
     *                                          hide(rootNode, data) {}, from v5 onwards
     * @param entrypoints.panels.destroy - This is called when a panel is going to be destroyed. 'this' can be
     *                                          used to access UxpPanelInfo object. To signal failure, throw an exception.
     *                              Parameters :
     *                                          destroy(event) {}, till Manifest Version V4
     *                                          destroy(rootNode) {}, from v5 onwards
     * @param entrypoints.panels.invokeMenu - This is called when a panel menu item is invoked.
     *                                             Menu id is passed as the first argument to this function. 'this' can be
     *                                             used to access UxpPanelInfo object. This function can return a promise.
     *                                             To signal failure, throw an exception or return a rejected promise.
     * @param entrypoints.panels.customEntrypoint - Apart from the above default uxp panel entrypoints, Host Apps can define
     *                                                   additional entrypoints to support custon lifecycle events. Details of the entrypoint like
     *                                                   name, parameters passed, return type, etc. are defined by the host app.
     *
     *                                                   Currently, Photoshop hasn't defined any custom entrypoints.
     *                                                   Xd has defined one custom entrypoint `update`.
     *                                                        update entrypoint in XD is called whenever panel UI content should be updated.
     *                                                        Parameters : update(scenegraph.selection, scenegraph.update)
     *                                                        https://developer.adobe.com/xd/uxp/develop/reference/ui/panels/update/
     * @param entrypoints.panels.menuItems - array of menu items. Each menu item can be a string or an object with
     *                                         properties defined below. Menu items are displayed in the
     *                                         same order as specified in this array. For specifying a separator,
     *                                         a value of "-" or menu item with label "-" can be used at required place in the array.
     * @param entrypoints.panels.menuItems.id - identifier of the menu item.
     * @param entrypoints.panels.menuItems.label - display text for the menu item. Should be localized. If label is not
     *                                              specified, id is used as label.
     * @param entrypoints.panels.menuItems.enabled - enabled/disabled state for the menu item. Default - true.
     * @param entrypoints.panels.menuItems.checked - checked state for the menu item. Default - false.
     * @param entrypoints.panels.menuItems.submenu - submenu for this menu item again as an array of 'menuItems'.
     *                                               'id' of submenus should still be unique across panel.
     * @param entrypoints.commands - This object contains a list of key-value pairs where each key is the command id and
     *                                 value is command's data whose type can be an object or function.
     *                                 If a function, it is assumed to be 'run' method (described below).
     *                                 If an objet, it can contain following properties but 'run' is must to specify.
     * @param entrypoints.commands.run - This is called when the command is invoked via menu entry. 'this' can be used
     *                                      to access UxpCommandInfo object. This function can return a promise.
     *                                      To signal failure, throw an exception or return a rejected promise.
     *                              Parameters :
     *                                          run(event) {}, till Manifest Version V4
     *                                          run(executionContext, ...arguments) {}, from v5 onwards
     * @param entrypoints.commands.cancel - For future use.
     */
    setup(entrypoints: {
      plugin: {
        create: (...params: any[]) => any;
        destroy: (...params: any[]) => any;
      };
      panels: Record<
        string,
        {
          create: (rootNode: any) => void;
          show: (rootNode: any, data: any) => void;
          hide?: (rootNode: any, data: any) => void;
          destroy: (rootNode: any) => void;
          invokeMenu: (menuId: string) => void;
          update?: (selection: any, root: any) => void;
          menuItems: (UxpMenuItem | string)[];
        }
      >;
      commands: Record<
        string,
        {
          run: (...params: any[]) => any;
          cancel: (...params: any[]) => any;
        }
      >;
    }): void;
    /**
     * Get panel with specified id
     * @param id - panel id
     * @returns - panel object for a valid id
     *                           null for an invalid id
     */
    getPanel(id: string): UxpPanelInfo;
    /**
     * Get command with specified id
     * @param id - command id
     * @returns - command object for a valid id
     *                             null for an invalid id
     */
    getCommand(id: string): UxpCommandInfo;
  }

  export const entrypoints: EntryPoints;

  /**
   * To get the list of plugins in the host, used during IPC(Inter Plugin Communication)
   * To get an instance: `require("uxp").pluginManager`
   */
  class PluginManager {
    /**
     * To get the current list of plugins in Plugin Manager.
     */
    plugins: Set<UxpPluginInfo>;
  }
  export const pluginManager: PluginManager;

  /**
   * Script module, which contains essential properties and methods while writing scripts.
   */
  class Script {
    /**
     * To get the arguments(if any) passed by host app, while invoking the script.
     */
    readonly args: any[];
    /**
     * ExecutionContext passed by the host app, while invoking the script.
     */
    readonly executionContext: ExecutionContext;
    /**
     * To send the execution result back to the host (if required).
     * @param result - Host defines the contract on what can be returned from scripts and its format.
     */
    setResult(result: HostDefinition): void;
  }
  export const script: Script;

  export namespace storage {
    /**
     * SecureStorage provides a protected storage which can be used to store sensitive data
     * per plugin. SecureStorage takes a key-value pair and encrypts the value before being
     * stored. After encryption, it stores the key and the encrypted value pair. When the value
     * is requested with an associated key, it's retrieved after being decrypted. Please note
     * that the key is not encrypted thus it's not protected by the cryptographic operation.
     *
     * Caveats for SecureStorage are as follows:
     * 1. SecureStorage is not an appropriate storage for sensitive data which wants to keep
     * secret from the current user. SecureStorage is protected under the current user's
     * account credential. It means the encrypted data can be at risk of being decrypted
     * with the current user's privilege.
     * 2. Data in SecureStorage can be lost for various reasons. For an example, the user
     * could uninstall the host application and delete the secure storage. Or, the cryptographic
     * information used by the secure storage could be damaged by the user accidentally, and
     * it will result in loss of data without the secure storage being removed. SecureStorage
     * should be regarded as a cache rather than a persistent storage. Data in SecureStorage
     * should be able to be regenerated from plugins after the time of loss.
     */
    export class SecureStorage {
      /**
       * Number of items stored in the secure storage.
       */
      readonly length: number;
      /**
       * Stores a key and value pair after the value is encrypted in a secure storage.
       * @param key - Key to set value
       * @param value - Value for a key.
       * @returns `Promise<void>` Promise that resolves when the value is stored, rejected when the value is empty or not stored.
       */
      setItem(
        key: string,
        value: string | ArrayBuffer | TypedArray
      ): Promise<void>;
      /**
       * Retrieves a value associated with a provided key after the value is being decrypted from a secure storage.
       * @param key - Key to get value
       * @returns `Promise<Uint8Array>` Promise that resolves with an Uint8Array
       */
      getItem(key: string): Promise<Uint8Array>;
      /**
       * Removes a value associated with a provided key.
       * @param key - Key to remove value
       * @returns `Promise<void>` Promise that resolves when the value associated with the key is removed, rejected when the value is neither removed nor found.
       */
      removeItem(key: string): Promise<void>;
      /**
       * Returns a key which is stored at the given index.
       * @param index - Integer representing the number of the key
       * @returns Key which is stored at the given index.
       */
      key(index: number): number;
      /**
       * Clear all values in a secure storage.
       * @returns `Promise<void>` Promise that resolves when all the items are cleared, rejected when there is no item to clear or clear failed.
       */
      clear(): Promise<void>;
    }

    export const secureStorage: SecureStorage;
  }

  /**
   * Version information. To get an instance: require("uxp").versions
   */
  class Versions {
    /**
     * Returns the version of UXP. For example, uxp-6.0.0
     */
    uxp: string;
    /**
     * Returns the version of the plugin. This matches the version as specified in your plugin's manifest.
     */
    plugin: string;
  }
  export const versions: Versions;

  /**
   * Includes useful information about the operating environment the plugin finds itself executing in.
   * `require("uxp").host`
   */
  class Host {
    /**
     * The name of the host application. For ex, returns "photoshop" for Photoshop.
     */
    name: string;
    /**
     * The version of host application. For ex, "20.0.0".
     */
    version: string;
    /**
     * 5 letter UI locale of host application. For ex, "en_US".
     */
    uiLocale: string;
  }
  export const host: Host;

  /**
   * Includes information about the user.
   * Add below permissions in the `manifest.json` file to use this API.
   * @example
   * "requiredPermissions": {
   *   "enableUserInfo": true
   * }
   */
  class UserInfo {
    /**
     * Get the GUID of plugin user
     * @example
     * let userId = require('uxp').userInfo.userId(); // Get the GUID of plugin user
     * console.log(userId()); // e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
     */
    userId(): string;
  }
  export const userInfo: UserInfo;

  /**
   * @returns user opt-in information for logging analytics data
   */
  export function get(): boolean;
}
