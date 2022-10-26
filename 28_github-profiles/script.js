const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const userName = search.value

    if(userName){
        getUser(userName)
        search.value = ''
    }
})

async function getUser(userName){
    try{
        const {data} = await axios(APIURL + userName)
        createUserCard(data)
        getRepos(userName)
    }catch(err){
        if(err.response.status ===404){
            createErrorCard('No profile with this username')
        }
    }
}

async function getRepos(){
    try{
        const {data} = await axios(APIURL + userName +'/repos?sort=created')
        addReposToCard(data)
    }catch(err){
            createErrorCard('Problem fetching repos')
    }
}

function createUserCard(user) {
    const userID = user.name || user.login
    const userBio = user.bio ? `<p>${user.bio}</p>` : ''
    const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${userID}</h2>
      ${userBio}
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    `
    main.innerHTML = cardHTML
    
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `

    main.innerHTML = cardHTML
}

function addReposToCard(repos){
    const reposEl = document.getElementById('repos')

    repos.slice(0,5).forEach(repo=>{
        const repoLink = document.createElement('a')
        repoLink.classList.add('repo')
        repoLink.href = repo.html_url
        /* a标签的target 属性：
        _self:默认，当前窗口打开链接文档
        _blank:新窗口打开 */
        repoLink.target='_blank'
        repoLink.innerText = repo.name
        reposEl.appendChild(repoLink)
    })
}

