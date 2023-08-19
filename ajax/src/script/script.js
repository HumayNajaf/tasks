// function myFunc(same) {
//     document.querySelector('.some').innerHTML = same
// }

// function calculator(num1, num2) {

//     return num1 + num2
// }

// let same = calculator(3,6);

// myFunc(same)

// const arr = [1,2,3,4,5,6,7,8,9,5,4,3,224,5,6,4,33,56]

// const newArr = searchArr(arr, (x) => x%2!==0)

// document.querySelector('.some').innerHTML = newArr

// function searchArr (number, callback) {
//     const arr = []

//     number.forEach(el => {
//         if (callback(el) ) {
//             arr.push(el)
//         }
//     });
//     return arr
// }

// const container = document.querySelector('.container')

// function display() {
//     container.classList.add('active')
// }
// function nonDisplay() {
//     container.classList.remove('active')
// }

// // setTimeout(display, 5000);
// // setTimeout(nonDisplay, 6000)

// setInterval(() => {
//     display()
// }, 500);
// setInterval(() => {
//     nonDisplay()
// }, 1000);

// function loadPage() {
//     let xhttp = new XMLHttpRequest()
//     xhttp.onreadystatechange = function () {
//         if (xhttp.readyState == 4 && xhttp.status == 200) {
//             console.log(xhttp.responseText);
//         }

//     }

//     xhttp.open('GET', 'https://jsonplaceholder.typicode.com/albums')
//     xhttp.send()
// }
// loadPage()




function prepareUrl(url, id) {
    if (id == null) {
        return url
    }else{
        return `${url}, ?postid=${id}`
    }
}

function getComment(url, id) {
    let newUrl = prepareUrl(url, id)
    let xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            JSON.parse(xhttp.responseText).forEach(el => {
                console.log(el.name);
            });
        }
    }
    xhttp.open('GET', newUrl)
    xhttp.send()
}
getComment('https://jsonplaceholder.typicode.com/comments?postId=1', null)