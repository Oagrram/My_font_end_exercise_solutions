let data = [];

const fetchData = () => {
    //verinin çekildiği yer
    fetch("data.json").then(
            response => {

                return response.json();
            }).then(responseData => {
            //json'dan okunan verinin data array'ine atanması
            data = responseData;

            //veri geldikten sonra filtreleme butonu görünür olsun
            let filterButton = document.querySelector("#filterButton");
            filterButton.setAttribute("style", "");
            // display all checkboxes  and text input 
            document.querySelector("#age_label").setAttribute("style", "display:inline;");
            document.querySelector("#age_checkbox").setAttribute("style", "display:inline;");
            document.querySelector("#isactive_label").setAttribute("style", "display:inline;");
            document.querySelector("#isactive_checkbox").setAttribute("style", "display:inline;");
            document.querySelector("#usernamelabel").setAttribute("style", "display:inline;");
            document.querySelector("#username").setAttribute("style", "display:inline;");

            //verinin html içerisinde listelendiği fonksiyon
            listData(responseData);
        })
        .catch(err => {
            //hata yönetimi
            alert("An error has occurred!");
            console.log(err)

        })
}

//verinin ul tag'i içerisinde listelenmesini sağlayan fonksiyon
const listData = (data) => {
    let list = document.querySelector(".list");
    list.innerHTML = data.map(element => {
        return `
        <li id=${element.id}>
            <span class='bold'>name:</span> ${element.name}
            <span class='bold'>age:</span> ${element.age}
            <span class='bold'>email:</span> ${element.email}
        </li>
        `;
    })
}

const filterBy = (data, filter_opt, input) => {
    let reslut = data.filter((e) => {
        if (filter_opt == 1)
            e.age > 18
        else if (filter_opt == 2)
            e.isActive === true;
        else
            e.name[0] === input
    })
    return reslut
}


const filterData = () => {

    let filteredData = data;
    let first_char = document.querySelector("#username").value
    var at_least = 0

    // filter data by age
    if (checkbox_age()) {
        filteredData = filteredData.filter(element => element.age > 18);
        listData(filteredData);
        at_least++;
    }
    // filter data by active users
    if (checkbox_active()) {
        data = filteredData.filter(element => element.isActive === true);
        listData(filteredData);
        at_least++;
    }
    // filter data by username first character 
    if (username_input()) {
        filteredData = filteredData.filter(element => element.name[0] === first_char);
        listData(filteredData);
        at_least++;
    }
    if (at_least == 0) {
        alert("You Should Select At Least One Filter Option");
    }
}

// check if checkboxes are selected

function checkbox_age() {
    let checkBox = document.querySelector("#age_checkbox");
    if (checkBox.checked == true) {
        return true;
    } else {
        return false;
    }
}

function checkbox_active() {

    let checkBox = document.querySelector("#isactive_checkbox");
    if (checkBox.checked == true) {
        return true;
    } else {
        return false;
    }
}

// check if username input field  is not empty

function username_input() {

    let username_input = document.querySelector("#username");
    if (username_input.value.length != 0) {
        return true;
    } else {
        return false;
    }
}