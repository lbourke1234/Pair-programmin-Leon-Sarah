// const userDetails = (user) =>{
   
// }
// Ex1) Get and display, using async / await, the users from: https://jsonplaceholder.typicode.com/users 
const displayUsers = async () => {

    try {
        
        const getUsers = await fetch("https://jsonplaceholder.typicode.com/users")
        const body = await getUsers.json();
        console.log(body)
        let row = document.querySelector(".row")
        
        
        body.forEach(user => {
            row.innerHTML +=  ` 
            <div class= "card col-4 mb-4">
            <div class="card-body">
                <h5 class="card-title">${user.name}</h5>
                <p class="card-text">${user.username}</p>
                <p class="card-text">${user.id}</p>
                <p class="card-text">${user.address.city}</p>
            </div>
            </div>`
            
        });
    } catch (error) {
        console.log(error)
    }
 }
//  Ex2) Create a dropdown (<select>) that allows the user to select between name, username and email. 
//            Create then a filter. When the user types in something, you should filter the user based on the input and on the value of the select.
//            Es.: select on NAME. Filter input = Glenna, only user id number 9 should remain
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

            divNode.innerText = user.id
            let row = document.querySelector('.names-of-dropdown')
            row.innerHTML = ''
            row.appendChild(divNode)
     })
 }
//  Ex3) Create a function that, from the list of users, extracts only the names
 const getNames = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    parsedResponse = await response.json()

    parsedResponse.forEach(user => {
        console.log(user.name) 
    })
 }

//  Ex4) Create a function that, from the list of users, creates an array of addresses as string and not as an object. Like:
//               {
//               "street": "Victor Plains",
//               "suite": "Suite 879",
//               "city": "Wisokyburgh",
//               "zipcode": "90566-7771",
//               "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//               }
//           Should become Victor Plains, Suite 879, Wisokyburgh (90566-7771)

const getUserAddress = async() =>{
    let userArray =[]
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    let parsedResponse = await response.json()
    // console.log(parsedResponse[0].address)
     parsedResponse.forEach(user=>{
       let userAdd = `${user.address.street} , ${user.address.suite}, ${user.address.city} , (${user.address.zipcode}) `
       userArray.push(userAdd)

      
    })
    console.log(userArray)
   
}
window.onload = () =>{
    displayUsers()
    addEventDropdown()
    getUserAddress()
}





