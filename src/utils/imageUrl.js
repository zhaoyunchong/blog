const picture = import.meta.glob("../assets/images/*");

let imgList = Object.keys(picture).map((item) => {
    console.log(picture[item]())

    return { url: picture[item]()}
});

console.log(imgList, '===')


export default imgList
// export const getImgUrlByName = (name) => imgList.find(item => item.name === name).url


