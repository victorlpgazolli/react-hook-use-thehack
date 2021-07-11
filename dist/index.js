'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

var requestHandler = ({
    defaultHandler = true,
    searchPostsSummaryFromPage = require("./searchPostsSummaryFromPage").default,
    getPostContentFromSlug = require("./getPostContentFromSlug").default,
    ...postOptions
}) => {

    const postGetterHandler = {
        [defaultHandler]: searchPostsSummaryFromPage,
        [!!postOptions.slug]: getPostContentFromSlug,
        [!!postOptions.page]: searchPostsSummaryFromPage,
    };

    const handler = postGetterHandler[true];

    return handler(postOptions)
};

//@ts-check
var useTheHack = function (postOptions) {
    if (postOptions === void 0) { postOptions = {}; }
    var _a = react.useState([]), posts = _a[0], setPosts = _a[1];
    var memoizedGetContent = react.useCallback(function () { return requestHandler(postOptions); }, [postOptions]);
    react.useEffect(function () {
        memoizedGetContent().then(setPosts);
    }, [memoizedGetContent, setPosts]);
    if (!!postOptions.slug) {
        var _b = Array.from(posts)[0], post = _b === void 0 ? false : _b;
        return {
            post: post,
            refresh: memoizedGetContent
        };
    }
    return {
        posts: posts,
        refresh: memoizedGetContent
    };
};

exports.useTheHack = useTheHack;
//# sourceMappingURL=index.js.map
