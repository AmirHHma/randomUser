const URL='https://randomuser.me/api/'
let users=[]
const neededUsers=3
const getData=()=>{
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        let person=data.results[0]
        users[users.length]=person
        console.log(person);
        if(users.length==neededUsers)docAppend()
})
}
for(let i=0;i<neededUsers;i++){
    getData()
    
}

const docAppend=()=>{
    users.forEach(user=>{
        document.body.innerHTML+=`<div class="container">
                <img src="${user.picture.large}" alt="">
                <div class="info">
                <h6 for="" id="name">${user.name.first+' '+user.name.last}</h6>
                <h6 for="" id="age">${user.dob.age}</h6>
                <h6 for="" id="country">${user.location.country}</h6>
                <h6 for="" id="email">${user.email}</h6>
                <h6 for="" id="id">${user.id.value}</h6>
                </div>
            </div>`
    })

}

