function validation(){
    let Namee= document.getElementById("Name").value.trim()
    let LNamee= document.getElementById("LName").value.trim()
    let emaill= document.getElementById("email").value
    let numberr= document.getElementById("number").value
    let text= document.getElementById("message").value.trim()
    
    
    
    console.log(Namee)
    console.log(LNamee)
    console.log(emaill)
    console.log(numberr)
    console.log(text)

    alert("Success")

    return true


}