export default async ({
    assert = require("console").assert,
    getPostBySlug = require("../helpers").getPostBySlug,
    baseUrl = require("../constants").baseUrl,
    slug,
    dangerouslySetPostContentToBeInHtml
}) => {

    const hasSlug = typeof slug === "string" && slug.length > 0;

    assert(
        !!hasSlug,
        "slug must be a string"
    );

    const hasBaseUrl = typeof baseUrl === "string" && baseUrl.length > 0;

    assert(
        !!hasBaseUrl,
        "baseUrl must be a string"
    )

    return await getPostBySlug({
        url: baseUrl,
        slug,
        dangerouslySetPostContentToBeInHtml
    });
}