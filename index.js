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

// function loadDoc() {

//     var xhttp = new XMLHttpRequest();
//     xhttp.addEventListener('load',function() {
//         if (this.readyState == 4 && this.status == 200) {
//             const response = JSON.parse(this.responseText)
//             const li = response.map(item => {
//                // return `<li>${item.name}</li>`
//                 return `<li>${item.title}</li>`
//             }).join("<br>")
//             const ul = `<ul>${li}</ul>`
//             document.querySelector('.users').innerHTML = ul
//           }
//     })

//     // xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
//     xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
//     xhttp.send();
// }

function loadDoc() {
    return new Promise((resolve, reject) => {
        var xhttp = new XMLHttpRequest();
        xhttp.addEventListener('load', function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(JSON.parse(this.responseText))
            }
                reject("Erro na promisse")
        })

        //essa funçao é necessaria para verificar erros da rede
        xhttp.onerror = function () {
            reject("Erro na promisse")
        };

        xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
        xhttp.send();
    })


    // xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);

}

document.querySelector('button')
.addEventListener('click', async () => {
        try {
            const response = await loadDoc()
            const li = response.map(item => {
                return `<li>${item.title}</li>`
            }).join("<br>")
            const ul = `<ul>${li}</ul>`
            document.querySelector('.users').innerHTML = ul
        } catch (e) {
            console.log(e)
        }
        document.body.querySelector('li').classList.remove('li')
    })

document.querySelector('.button-close')
.addEventListener('click', () => {
    document.body.querySelector('ul').classList.add('li')
})




// document.querySelector('button')
// .addEventListener('click',() => {

//    // document.body.querySelector('li').classList.remove('li')
// })

// // document.querySelector('.button-close')
// // .addEventListener('click',() => {
// //     document.body.querySelector('ul').classList.add('li')
// // })