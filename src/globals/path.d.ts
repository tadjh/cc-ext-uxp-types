/// <reference path="../modules/uxp.d.ts" />

type Entry = import("uxp").storage.Entry;

declare var path: Path;
/**
 * The `path` module provides utilities for working with file and directory paths.
 * This module accepts string and Entry object as path parameters.
 * However, local file schemes, such as `plugin-data:` or `plugin-temp:`, will not be resolved to a native path in string paths.
 * The `path` module is registered in the global scope and can be used without declaration.
 */
declare class Path {
  /**
   * Normalize a string path, reducing '..' and '.' parts.
   * When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved. On Windows backslashes are used.
   * @param path - path to normalize
   * @returns normalized string path
   */
  normalize(path: string | Entry): string;
  /**
   * Join all arguments together and normalize the resulting path.
   * @param paths - paths to join
   * @returns joined string path
   */
  join(paths: (string | Entry)[]): string;
  /**
   * The right-most parameter is considered {to}. Other parameters are considered an array of {from}.
   *
   * Starting from leftmost {from} parameter, resolves {to} to an absolute path.
   *
   * If {to} isn't already absolute, {from} arguments are prepended in right to left order,
   * until an absolute path is found. If after using all {from} paths still no absolute path is found,
   * the current working directory is used as well. The resulting path is normalized,
   * and trailing slashes are removed unless the path gets resolved to the root directory.
   * @param paths - a sequence of paths or path segments
   * @returns resolved string path
   */
  resolve(paths: (string | Entry)[]): string;
  /**
   * Determines whether {path} is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.
   *
   * If the given {path} is a zero-length string, `false` will be returned.
   * @param path - path to test
   * @returns if the path is an absolute path or not
   */
  isAbsolute(path: string | Entry): boolean;
  /**
   * Solve the relative path from {from} to {to} based on the current working directory.
   * At times we have two absolute paths, and we need to derive the relative path from one to the other. This is actually the reverse transform of path.resolve.
   * @param from - base path to find from
   * @param to - relative path to find to
   * @returns relative string path
   */
  relative(from: string, to: string): string;
  /**
   * Return the directory name of a path. Similar to the Unix dirname command.
   * @param path - the path to evaluate
   * @returns the directory name of a path
   */
  dirname(path: string | Entry): string;
  /**
   * Return the last portion of a path. Similar to the Unix basename command.
   * Often used to extract the file name from a fully qualified path.
   * @param path - the path to evaluate
   * @param [ext] - an extension to remove from the result
   * @returns the last portion of a path
   */
  basename(path: string | Entry, ext?: string): string;
  /**
   * Return the extension of the path, from the last '.' to end of string in the last portion of the path.
   * If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string.
   * @param path - the path to evaluate
   * @returns the extension of the path
   */
  extname(path: string | Entry): string;
  /**
   * The platform-specific file separator. '\\' or '/'.
   */
  sep: string;
  /**
   * The platform-specific file delimiter. ';' or ':'.
   */
  delimiter: string;
  /**
   * Returns an object from a path string - the opposite of format().
   * @param path - path to evaluate
   * @returns { dir: `string`, root: `string`, base: `string`, name: `string`, ext: `string` }
   */
  parse(path: string | Entry): any;
  /**
   * Returns a path string from an object - the opposite of parse().
   * @param pathObject - { dir: `string`, root: `string`, base: `string`, name: `string`, ext: `string` } path to evaluate
   * @returns a path string from an object
   */
  format(pathObject: any): string;
  /**
   * It provides access to POSIX specific implementations of the path methods.
   * Same as parent object on posix.
   */
  posix: any;
  /**
   * It provides access to Windows-specific implementations of the path methods.
   * Same as parent object on Windows
   */
  win32: any;
}
