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

window.onload = () =>{
    displayUsers()
}
