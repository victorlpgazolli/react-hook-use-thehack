export default async ({
    assert = require("console").assert,
    getPostsByPage = require("../helpers").getPostsByPage,
    baseUrl = require("../constants").baseUrl,
    page = 1,
}) => {
    const hasPage = Number.isFinite(+page) && +page > 0

    assert(
        !!hasPage,
        "page must be a number"
    );

    const hasBaseUrl = typeof baseUrl === "string" && baseUrl.length > 0;

    assert(
        !!hasBaseUrl,
        "baseUrl must be a string"
    )

    return await getPostsByPage({
        url: baseUrl,
        page
    });
}