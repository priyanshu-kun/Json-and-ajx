let URLindex = 1;
document.querySelector("button").addEventListener("click", () => {
    if (URLindex < 4) {
        let request = new XMLHttpRequest();
        request.open("GET", `https://learnwebcode.github.io/json-example/animals-${URLindex}.json`);
        request.onload = () => {
            let responseData = JSON.parse(request.responseText);
            renderHTML(responseData);
        }
        request.send();
    }
    else {
        document.querySelector(".getInfo").innerHTML = "";
        document.querySelector(".getInfo").insertAdjacentHTML("beforeend", `<div><p style="font-size: 3rem; color: red; opacity: 0.6;">ERROR: 404 page not found!</p></div>`)
        document.querySelector("button").classList.add("btn-hide");
    }
    URLindex++;
})

function renderHTML(data) {

    let child = "";

    for (let index = 0; index < data.length; index++) {
        child += "<div><p>" + data[index].name + " is my pet and species is " + data[index].species + " and the favourite food is ";
        // console.log(child)
        for (j = 0; j < data[index].foods.likes.length; j++) {
            child += data[index].foods.likes[j] + " ";
        }
        // console.log(child)
        child += " and most dislike food is ";
        for (k = 0; k < data[index].foods.dislikes.length; k++) {
            child += data[index].foods.dislikes[k] + " ";
        }
        child += "</p><br/><hr/></div>";
    }

    document.querySelector(".getInfo").insertAdjacentHTML("beforeend", child)
}