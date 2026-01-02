const bs = require('browser-sync').create();

bs.init({
    proxy: "https://www.weiluntsou.com/",
    serveStatic: ["."],
    files: ["style.css", "script.js"],
    snippetOptions: {
        rule: {
            match: /<\/head>/i,
            fn: function (snippet, match) {
                return '<link rel="stylesheet" type="text/css" href="/style.css">' +
                    '<script src="/script.js"></script>' +
                    snippet + match;
            }
        }
    }
});
