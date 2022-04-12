// const userDetails = (user) =>{
   
// }

const displayUsers = async () => {

    try {
        
        const getUsers = await fetch("https://jsonplaceholder.typicode.com/users")
        const body = await getUsers.json();
        console.log(body)
        let row = document.querySelector(".row")
        
        
        body.forEach(user => {
            row.innerHTML +=  ` 
            <div class= "col-md-4>
            <div class="card-body">
                <h5 class="card-title">${user.username}</h5>
                <p class="card-text">${user.name}</p>
                
            </div>
            </div>`
            
        });
    } catch (error) {
        console.log(error)
    }
 }

 const addEventDropdown = () => {
    let nameDropdown = document.querySelector('.name-dropdown')
    let usernameDropdown = document.querySelector('.username-dropdown')
    let emailDropdown = document.querySelector('.email-dropdown')

    nameDropdown.addEventListener('click', clickName)
    usernameDropdown.addEventListener('click', clickUsername)
    emailDropdown.addEventListener('click', clickEmail)
 }

 const clickName = async () => {
    let nameDropdown = document.querySelector('.names-of-dropdown')
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    parsedResponse = await response.json()

    parsedResponse.forEach(user => {
        let divNode = document.createElement('div')
        divNode.innerText = user.name
        console.log(divNode) 
        nameDropdown.appendChild(divNode)
    })
 }
 const clickUsername = async () => {
    let usernameDropdown = document.querySelector('.usernames-of-dropdown')
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    parsedResponse = await response.json()

    parsedResponse.forEach(user => {
        let divNode = document.createElement('div')
        divNode.innerText = user.username
        // console.log(divNode) 
        usernameDropdown.appendChild(divNode)
    })

 }
 const clickEmail = async () => {
    let emailDropdown = document.querySelector('.email-of-dropdown')
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    parsedResponse = await response.json()

    parsedResponse.forEach(user => {
        let divNode = document.createElement('div')
        divNode.innerText = user.email
        // console.log(divNode) 
        emailDropdown.appendChild(divNode)
    })

 }

 const inputReader = async (event) => {
     const response = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
    //  console.log(response)
     response.filter(user => event.target.value.toLowerCase() === user.name.toLowerCase() && event.target.value.length > 2).forEach(user => {
        //  console.log(user.name)
            // console.log("hello")
            let divNode = document.createElement('div')

            divNode.innerText = user.name
            let row = document.querySelector('.names-of-dropdown')
            row.innerHTML = ''
            row.appendChild(divNode)
     })
 }


window.onload = () =>{
    displayUsers()
    addEventDropdown()
}





// event.target.value.toLowerCase() === user.name.toLowerCase() && event.target.value.length > 2)
//             console.log("hello")
//             let divNode = document.createElement('div')

//             divNode.innerText = ''
//             divNode.innerText = user.name
//             let row = document.querySelector('.names-of-dropdown')
//             row.appendChild(divNode)