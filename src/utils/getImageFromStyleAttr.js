


export default imageStyle => {
    const imageUrlRegex = /(url\(.*\))/g
    const [imageUrl] = imageUrlRegex.exec(imageStyle) || []
    const image = imageUrl.slice(4, -1) // remove url() from style
    return image;
}