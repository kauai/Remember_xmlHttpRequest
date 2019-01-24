// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//     xhttp.onload = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         const response = JSON.parse(this.responseText)
//         const li = response.map(item => {
//             return `<li>${item.name}</li>`
//         }).join('\n\n')
//         const ul = `<ul>${li}</ul>`
//         document.querySelector('.users').innerHTML = ul
//       }
//     };
//     xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
//     xhttp.send();
// }

function loadDoc() {

    var xhttp = new XMLHttpRequest();
    xhttp.addEventListener('load',function() {
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText)
            const li = response.map(item => {
               // return `<li>${item.name}</li>`
                return `<li>${item.title}</li>`
            }).join("<br>")
            const ul = `<ul>${li}</ul>`
            document.querySelector('.users').innerHTML = ul
          }
    })

    // xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhttp.send();
}

document.querySelector('button')
.addEventListener('click',() => {
    loadDoc()
    document.body.querySelector('li').classList.remove('li')
})

document.querySelector('.button-close')
.addEventListener('click',() => {
    document.body.querySelector('ul').classList.add('li')
})