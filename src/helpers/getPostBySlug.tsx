export default async ({
    cherio = require("cherio"),
    request = require("request"),
    getImageFromStyleAttr = require("../utils").getImageFromStyleAttr,
    url: siteUrl,
    slug,
    dangerouslySetPostContentToBeInHtml,
}) => new Promise((resolve, reject) => {
    const url = siteUrl + slug;

    request({
        method: 'GET',
        url
    }, (err, res, body) => {

        if (err) reject(false)

        let $ = cherio.load(body);

        const title = $(".post-title-content").children("h1").text()

        const content = $(".section-post-content");

        const contentInPlainText = content.text()

        const imageStyle = $(".post-title-image").attr("style");
        const image = getImageFromStyleAttr(imageStyle)


        const author = $(".meta-author-wrap").children("a").text();
        const tags = $(".blog-tags-wrap").first().text().trim().split("\n\t\t\t\t\t")

        const authorProfileStyle = $(".blog-profile-image").attr("style");

        const authorProfileImage = getImageFromStyleAttr(authorProfileStyle)

        const postPayload = {
            title,
            content: contentInPlainText,
            image,
            author,
            authorProfileImage,
            tags
        }

        if (dangerouslySetPostContentToBeInHtml) postPayload.content = content.html()

        resolve(postPayload);
    })
})
