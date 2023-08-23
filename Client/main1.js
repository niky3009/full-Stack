//Sign in
document.getElementById("btn1").addEventListener('click',(e)=>{
    e.preventDefault()
    
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value

    if(email=='' || password==''){
        alert('Incorrect Format')
    }
    else{
        const user={
            email:email,
            password:password
        }
    
    const url="http://localhost:8080/Login"
    const xhr=new XMLHttpRequest();
    xhr.open('POST',url);
     
    xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:8080/')
    xhr.setRequestHeader('Content-Type','application/json')
   //
    // window.localStorage.setItem("myemail" , email);
    xhr.onreadystatechange=()=>{
        if (xhr.status==200 && xhr.readyState==4) {

            
            const response=JSON.parse(xhr.responseText);
            console.log(response);
            if(response==null){
                alert("Bad Response")
            }
            else{
                window.location.href="http://localhost:5500/real.html"
    
            }            
     }
    }
    //used to convert json into array 
    xhr.send(JSON.stringify(user));
}
})