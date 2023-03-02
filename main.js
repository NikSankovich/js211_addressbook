window.onload = function () {
    getContacts()
}


// fetch a user and display them one at a time
//let arrayOfContacts = [];

let addressList = document.getElementById("container");

const getContacts = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => people = data.results)
        .then(people => {
            people.map((person, i) => {
                let html = `
            <h4>${person.name.first}  ${person.name.last}</h4>
            <img src="${person.picture.large}">



            `; // end of html interpolated string
                addressList.insertAdjacentHTML("afterbegin", html);
            }) // } end callback in map, ) end map function 
        }) // } end people function, ) end .then definition 
} // end getContacts

// need show/hide function 
//div with otherinfo



//}