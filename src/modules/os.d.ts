declare module "os" {
    class OS {
      /**
       * Gets the platform we are running on (eg. "win32", "win10", "darwin")
       * @returns the string representing the platform
       */
      public platform(): string;
      /**
       * Gets the release number of the os (eg. "10.0.1.1032")
       * @returns the string representing the release
       */
      public release(): string;
      /**
       * Gets the platform architecture we are running on (eg. "x32, x64, x86_64 etc")
       * @returns the string representing the architecture
       */
      public arch(): string;
      /**
       * Gets the platform cpu information we are running on (eg. "{'Intel(R) Core(TM) i9-8950HK CPU @ 2.90GHz', 2900}")
       * @returns the array of objects containing information about each logical CPU core
       * Currently only model and speed properties are supported. times property is not supported.
       * Access to CPU information, such as model string and frequency, is limited on UWP.
       * "ARM based architecture" or "X86 based architecture" is returned as a 'model' value on UWP.
       * 0 is returned as a 'speed' value on UWP.
       */
      public cpus(): { model: string; speed: number }[];
      /**
       * Gets the total amount of system memory in bytes
       * @returns the total amount of system memory in bytes as an integer
       */
      public totalmem(): number;
      /**
       * Gets the total amount of free system memory in bytes
       * @returns the total amount of free system memory in bytes as an integer
       */
      public freemem(): number;
      /**
       * Gets the home directory path of the user
       * @returns the home directory path of the user
       */
      public homedir(): string;
    }
    const _os: OS;
    export = _os;
  }
  