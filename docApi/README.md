@xhubiotable/logger / [Exports](modules.md)

# Logger

This is a logger facade. It stores all the log entries in Memory. This
is very useful for testing but not for production.

It has the following methods:

    // Logs debug messages
    debug(arg)

    // Logs info messages
    info(arg)

    // Logs warning messages
    warning(arg)

    // Logs error messages
    error(arg)

    // Logs fatal messages
    fatal(arg)

## LoggerInterface

This is the interface each logger must implement to be used in
xhaubiotable.

The following loglevels exists:

**loglevel names and the level number**

    {
      debug: 0,
      info: 1,
      warning: 2,
      error: 3,
      fatal: 4,
    }

### Functions

    /**
     * Clears all the existing log entries
     * Placeholder for the implementing loggers.
     */
    async clear() {}

    /**
     * Returns the logLevel as a number for a given level String.
     * If the level string is invalid, the level number for
     * error will be returned
     *
     *
