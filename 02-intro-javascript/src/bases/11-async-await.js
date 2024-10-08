// Async - Await

// const getImagenPromesa = () => new Promise (resolve => resolve('https://nkjandfkj.com'))
// getImagenPromesa().then(console.log)

const getImagen = async () => {
    try {
        const apiKey = 'lvaAd96DKrPvQHsA5TQNMlhjlqJQStcz';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(error)
    }
}

getImagen();
