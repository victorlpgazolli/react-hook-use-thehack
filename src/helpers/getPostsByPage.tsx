export default async ({
    cherio = require("cherio"),
    request = require("request"),
    getImageFromStyleAttr = require("../utils").getImageFromStyleAttr,
    url: siteUrl,
    page,
    sliceOptions = {
        slug: {
            start: 3,
            end: -1
        },
        title: {
            start: 3,
            end: -1
        },
        descriptions: {
            start: 3,
            end: undefined
        },
        authors: {
            start: 6,
            end: undefined
        }
    },
}) => new Promise((resolve, reject) => {
    const url = siteUrl + `/page/${page}/`;

    const isFirstPage = !!url.match("/page/1/");

    const hasPageOneHeader = !!isFirstPage;

    if (!hasPageOneHeader) Object.assign(sliceOptions, {
        slug: {
            start: undefined,
            end: -1
        },
        title: {
            start: undefined,
            end: -1
        },
        descriptions: {
            start: undefined,
            end: undefined
        },
        authors: {
            start: undefined,
            end: undefined
        }
    })
    request({
        method: 'GET',
        url
    }, (err, res, body) => {

        if (err) reject(false)

        let $ = cherio.load(body);

        const titlesElements = $(".blog-detail-hover")
        const slugs = titlesElements.map(function (i, elem) {
            return $(this).children().attr("href").slice(1, -1)
        }).get().slice(
            sliceOptions.slug.start,
            sliceOptions.slug.end
        );

        const titles = titlesElements.map(function (i, elem) {
            return $(this).text().trim();
        }).get().slice(
            sliceOptions.title.start,
            sliceOptions.title.end
        );

        const descriptions = $(".blog-excerpt").map(function (i, elem) {
            return $(this).text().trim();
        }).get().slice(
            sliceOptions.descriptions.start,
            sliceOptions.descriptions.end
        )

        const authors = $(".blog-meta").map(function (i, elem) {
            const [, , authorName] = $(this).text().split("\n\t\t\t")
            return authorName
        }).get().slice(
            sliceOptions.authors.start,
            sliceOptions.authors.end
        )

        const images = $(".loop-item-image").map(function (i, elem) {
            const style = $(this).attr("style");
            return getImageFromStyleAttr(style)
        }).get()

        // const postsData = $(".blog-detail-hover");
        const posts = new Array(titles.length).fill("").map((_, index) => {
            const title = titles[index];
            const description = descriptions[index];
            const author = authors[index];
            const image = images[index];
            const slug = slugs[index];
            return {
                title,
                description,
                author,
                image,
                slug
            }
        })


        resolve(posts);
    })
})
