let registerForm =document.getElementById("registerform")
registerForm.addEventListener('submit',function (event){
    event.preventDefault()


    let name=document.getElementById('name').value
    let mobile=document.getElementById('mobile').value
    let email=document.getElementById('email').value
    let password=document.getElementById('password').value

    console.log(name,mobile,email,password);

    alert(`
        ${name}
        ${mobile}
        ${email}
        ${password}
        `)
    
})