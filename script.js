const button = document.querySelector('button');

const apiUrl = 'https://api.adviceslip.com/advice';
let content = "It is easy to sit up and take notice, what's difficlut is getting un and takeing action";
let id = 117;

const response = async()=>{
    try{
        const data = await fetch(apiUrl, { cache: 'no-cache' } );
        const JsonResponse = await data.json();
        reportResults(JsonResponse);
    }catch(error){
        alert(error);
    }
}

function reportResults(json){
    id = json.slip.id;
    content = json.slip.advice;

    window.idText.innerText = `${id}`
    window.idContent.innerText = `${content}`
}

button.addEventListener('click', response);