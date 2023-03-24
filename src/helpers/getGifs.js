
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=6H7I1RwK1WJuzBeJLyyYVui5uyoVuimV&q=${category}&limit=5`;

    const peticion = await fetch(url);
    const {data} = await peticion.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
}