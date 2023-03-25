const name1 = document.getElementById("name1")
const pass1 = document.getElementById("pass1")
const email1 = document.getElementById("email1")
const newuser = []
    form.addEventListener('submit', function (e) {
        e.preventDefault()

        newuser.push ({
            Name: name1.value,
            Email: email1.value,
            Pass: pass1.value
        })
        
    let transform = JSON.stringify(newuser)
    localStorage.setItem('user', transform)

    alert("yay you did it, berhasil")
    window.location.href = "login.html"
})
