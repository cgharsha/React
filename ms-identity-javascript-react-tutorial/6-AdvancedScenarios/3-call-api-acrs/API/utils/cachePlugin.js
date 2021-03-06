const fs = require("fs");
const cachePath = './data/cache.json' // replace this string with the path to your valid cache file.

/**
 * This implements ICachePlugin for persistent caching. For more information, visit: 
 * https://azuread.github.io/microsoft-authentication-library-for-js/ref/interfaces/_azure_msal_common.icacheplugin.html
 */

const beforeCacheAccess = async (cacheContext) => {
    return new Promise(async (resolve, reject) => {
        if (fs.existsSync(cachePath)) {
            fs.readFile(cachePath, "utf-8", (err, data) => {
                if (err) {
                    reject();
                } else {
                    cacheContext.tokenCache.deserialize(data);
                    resolve();
                }
            });
        } else {
            fs.writeFile(cachePath, cacheContext.tokenCache.serialize(), (err) => {
                if (err) {
                    reject();
                }
            });
        }
    });
};

const afterCacheAccess = async (cacheContext) => {
    if (cacheContext.cacheHasChanged) {
        await fs.writeFile(cachePath, cacheContext.tokenCache.serialize(), (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
};

module.exports = {
    beforeCacheAccess,
    afterCacheAccess
};