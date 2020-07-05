/* eslint-disable dot-notation */
const logger = (() => {
    let oldConsoleLog = null;
    const pub = {};

    pub.enableLogger = () => {
        if (oldConsoleLog == null) {
            return;
        }

        window['console']['log'] = oldConsoleLog;
    };

    pub.disableLogger = () => {
        oldConsoleLog = console.log;
        window['console']['log'] = () => { };
    };

    return pub;
})();

export default {
    enable: () => logger.enableLogger(),
    disable: () => logger.disableLogger()
};
