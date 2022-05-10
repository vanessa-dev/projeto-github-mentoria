const btn = document.querySelector("button");
const input = document.querySelector("input");
const user = document.querySelector(".user");
const repos = document.querySelector(".repo");

btn.addEventListener("click",  async function () {
  btn.disabled = true;
  const resultado = await fetch("https://api.github.com/users/" + input.value);
  const data =  await resultado.json();
  const repositorios = await fetch("https://api.github.com/users/" + input.value + "/repos");
  const data_repo =  await repositorios.json();

  if (data) {
    btn.disabled = false;
  }
  html = 
  `
    <div class="user-info">
      <img src='${data.avatar_url}' alt='Avatar'>
      <a href="${data.html_url}">${data.login}</a>
    </div>

    <ul>
      <li>Repositories: <b>${data.public_repos}</b></li>
      <li>followers: <b>${data.followers}</b> </li>
      <li>following: <b>${data.following}</b></li>
    </ul>
  `;
  if (data_repo) {
    data_repo.forEach (function (item) {
      repo = 
      `
        <div class="repo-item">
          <h3>${item.full_name}</h3>
          <div>${item.description || 'Não tem descrição'}</div>
        </div>
      `;
      repos.innerHTML += repo;
    });
  }


  
  user.innerHTML = html;
});














