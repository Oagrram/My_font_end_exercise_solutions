function get_links() {
    var linkedinurl = document.getElementById("linkedinUrl");
    linkedinurl.href = "https://www.linkedin.com/in/othmane-agrram/";

    var githuburl = document.getElementById("githubUrl");
    githuburl.href = "https://github.com/Oagrram";
}

document.getElementById("get_info_button").addEventListener("click", display_name_age);

function display_name_age() {
    var name = "Othmane";
    var surname = "Agrram";
    var age = 22;

    document.getElementById("nameSurname").innerHTML = name + " " + surname;
    document.getElementById("age").innerHTML = age;
    document.getElementById("get_info_button").style.display = "none";
}