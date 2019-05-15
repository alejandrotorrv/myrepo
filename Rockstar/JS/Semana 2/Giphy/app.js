const f =async()=>{
    const mykey = "blyf0yOKHZV6d7krFD0wsaJMLA92qbir";
    const search=document.getElementById("search").value;
    const zelda = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${mykey}&limit=5`;
    console.log(zelda);
    const response = await fetch(zelda);
    const data = await response.json();
    let arr = await data.data;
    await arr.forEach(element => {
        let div = document.getElementById("body");
        let gif_url=element.images.original.url;
        div.innerHTML += `
        <img src="${gif_url}" alt="${gif_url}">
        `;
        console.log(element);
    });

}