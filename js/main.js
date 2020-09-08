var user = document.getElementById('user');

fetch("https://api.github.com/users/fool/repos")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        data.forEach(function(data) {
            document.getElementById('container').innerHTML += `
            <div class="card col-lg-3 p-3 m-3">
                <div class="m-auto">
                    <img src="${data.owner.avatar_url}">
                    <a href="${data.owner.url}">
                    <p class="">${data.owner.login}</p>
                    </a>
                 </div>
                 <div class="m-auto">
                    <a href="${data.clone_url}">
                        <h5>${data.name}</h5>
                    </a>
                 </div>
                    <div class="d-flex justify-content-between">
                        <p>LANGUAGE: ${data.language}</p>
                        <p>PRIVATE: ${data.private}</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p>CREATED AT: ${data.created_at}</p>
                        <p>BRANCH: ${data.default_branch}</p>
                    </div>
            </div>
            `
        })
    });

user.addEventListener('blur', () => {
    document.getElementById('container').innerHTML = " "
    fetch("https://api.github.com/users/" + user.value + "/repos")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            data.forEach(function(data) {
                document.getElementById('container').innerHTML += `
            <div class="card col-lg-3 p-3 m-3">
                <div class="m-auto">
                    <img src="${data.owner.avatar_url}">
                    <a href="${data.owner.url}">
                    <p class="">${data.owner.login}</p>
                    </a>
                 </div>
                 <div class="m-auto">
                    <a href="${data.clone_url}">
                        <h5>${data.name}</h5>
                    </a>
                 </div>
                    <div class="d-flex justify-content-between">
                        <p>LANGUAGE: ${data.language}</p>
                        <p>PRIVATE: ${data.private}</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p>CREATED AT: ${data.created_at}</p>
                        <p>BRANCH: ${data.default_branch}</p>
                    </div>
            </div>
            `
            })
        })
    document.getElementById('container').innerHTML = " "

})