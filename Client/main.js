document.getElementById('btn').addEventListener('click', (e)=>{
    e.preventDefault()
    
    // const user_name=document.getElementById("name").style.display=""
    
    const user_name=document.getElementById("name").value
    const user_email=document.getElementById("email").value
    const user_password=document.getElementById("password").value

    const user={
        name:user_name,
        email:user_email,
        password:user_password
    }

    const url='http://localhost:8080/users'
    const xhr=new XMLHttpRequest()
    xhr.open('POST', url)
    xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:8080/')
    xhr.setRequestHeader('Content-Type','application/json')

    xhr.onreadystatechange=() =>{
        if(xhr.status==200 && xhr.readyState==4){
            const response =JSON.parse(xhr.responseText);
            console.log(response)
            window.location.href = "http://localhost:5500/index.html"

        }
 }
    xhr.send(JSON.stringify(user))
})


