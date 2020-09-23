const userUrl = 'https://api.github.com/users/babacardiouf544'
const targetEl = document.querySelector('#user-name')
const orgSection = document.querySelector('#org-data')

//go get name for header
fetch(userUrl)
  .then(response => response.json())
  .then(function (data) {
    console.log(data)
    const headerEl = document.createElement('h1')
    headerEl.innerText = data.name
    targetEl.appendChild(headerEl)
  })
//how do we get THE BASICS?
  //go get name for the basics
  fetch(userUrl)
  .then(response => response.json())
  .then(function (data) {
    console.log(data)
    const headerEl = document.createElement('p')
    headerEl.innerText = data.name
    targetEl.appendChild(headerEl)
  })
//go get company
fetch(userUrl)
  .then(response => response.json())
  .then(function (data) {
    console.log(data)
    const headerEl = document.createElement('p')
    headerEl.innerText = data.company
    targetEl.appendChild(headerEl)
  })

  //the story
  fetch(userUrl)
  .then(response => response.json())
  .then(function (data) {
    console.log(data)
    const headerEl = document.createElement('p')
    headerEl.innerText = data.bio
    targetEl.appendChild(headerEl)
  })

  fetch(userUrl)
  .then(response => response.json())
  .then(function (data) {
    console.log(data)
    const headerEl = document.createElement('p')
    headerEl.innerText = data.website
    targetEl.appendChild(headerEl)
  })
  const orgUrl = 'https://api.github.com/users/babacardiouf544'

  fetch(orgUrl)
  .then(response => response.json())
  .then(function (data) {
    console.log(data)
    let h2 = document.createElement('h2')
    headerEl.innerText = data.name
    targetEl.appendChild(headerEl)
    h2.innerText = ("Basics")
    userSection.appendChild("h2")
    return data.repos_url

  })

  fetch(orgUrl)
  .then(response => response.json())
  .then(function (data) {
      let img = document.createElement('img')
      img.src = data.avatar_url
      orgSection.appendChild(img)
  })



  .then(reposUrl => fetch(reposUrl))
  .then(response => response.json())
  .then(data => {
    let repoList = document.createElement('ul')
    repoList.classList.add(
        'list',
        'pl0',
        'ml0',
        'center',
        'mw6',
        'ba',
        'b--green',
        'br3'
      )
      orgSection.appendChild(repoList)
      for (let repo of data) {
        const listItem = document.createElement('li')
        listItem.textContent = repo.full_name
        listItem.classList.add('ph3', 'pv2', 'bb', 'b--green')
        repoList.appendChild(listItem)
      }
    })




  


  