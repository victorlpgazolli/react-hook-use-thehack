export default ({
    defaultHandler = true,
    searchPostsSummaryFromPage = require("./searchPostsSummaryFromPage").default,
    getPostContentFromSlug = require("./getPostContentFromSlug").default,
    ...postOptions
}) => {

    const postGetterHandler = {
        [defaultHandler]: searchPostsSummaryFromPage,
        [!!postOptions.slug]: getPostContentFromSlug,
        [!!postOptions.page]: searchPostsSummaryFromPage,
    }

    const handler = postGetterHandler[true];

    return handler(postOptions)
}