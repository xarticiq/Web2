const form = document.getElementById("form")
const email = document.getElementById("email")
const pass = document.getElementById("pass")

form.addEventListener("submit", function(e){
    e.preventDefault()

    let get = localStorage.getItem('user');
    let object = JSON.parse(get);

    const loc_email = object.map(i => i.Email)
    const loc_pass = object.map(i => i.Pass)

    if (email.value == loc_email && pass.value == loc_pass){
        alert("berhasil masuk")
        window.location.href = "main5.html";
    }
    else {
        alert("gagal")
    }
})

