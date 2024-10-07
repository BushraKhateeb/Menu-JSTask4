async function getPizza(){
    const response= await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data = await response.json();

    const  result = data.recipes.map( function(p){
        return`<div class="piza">
        <img src="${p.image_url}"/>
        <h2>${p.title}</h2>
        </div>`
    })
    console.log(result);
    document.querySelector('div .row').innerHTML+=result;
}

getPizza();
