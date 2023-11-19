const listaUsuarios = document.getElementById('listaUsuarios');

const USUARIO_API = 'https://jsonplaceholder.typicode.com/users';

const getData = async () => {
    try {
            const response = await fetch(USUARIO_API)
        if(!response.ok) {
            let message = 'No podemos encontrar personas!!'
            throw new Error(message);
        }
        const data = await response.json();
        return data;
    }
    catch(error) {
        console.log(error)
    }
};

const getRandomAge = () => {
    let newAge = Math.floor(Math.random() * 100)
    return newAge;
};

const renderUsers = async () => {
    const users = await getData();
    users.forEach(user => {
        const { id, name, username, email, phone, address, company } = user
        const { city, street, suite} = address;
        let age = getRandomAge();

        let html = `
        <div class='card'>
            <img class='image' src='./assets/img/${id}.jpeg' /> 
            <div class='textWrap'>
            <p class='text'><b class='negrita'>Nombre:</b> ${name}</p>
            <p class='text'><b class='negrita'>Edad:</b> ${age}</p>
            <p class='text'><b class='negrita'>Username:</b> ${username}</p>
            <p class='text'><b class='negrita'>Phone:</b> ${phone}</p>
            <p class='text'><b class='negrita'>Email:</b> ${email}</p>
            <p class='text'><b class='negrita'>Dirección:</b> ${street}, ${suite}, ${city}</p>
            <p class='text'><b class='negrita'>Company:</b> ${company.name}</p>
            </div>
        </div>
        `
        listaUsuarios.innerHTML += html
    })
};

renderUsers();