declare const _default: ({ cherio, request, getImageFromStyleAttr, url: siteUrl, page, sliceOptions, }: {
    cherio?: any;
    request?: any;
    getImageFromStyleAttr?: any;
    url: any;
    page: any;
    sliceOptions?: {
        slug: {
            start: number;
            end: number;
        };
        title: {
            start: number;
            end: number;
        };
        descriptions: {
            start: number;
            end: undefined;
        };
        authors: {
            start: number;
            end: undefined;
        };
    } | undefined;
}) => Promise<unknown>;
export default _default;
