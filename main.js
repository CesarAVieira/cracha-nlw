const linksSocialMedia = {
    github: "CesarAVieira",
    youtube: "CesarAVieira",
    facebook: "CeGrillou",
    instagram: "cesar.a.vieira",
    twitter: "CesarAVieira"
}

function changeSocialMediaLinks() {
    
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url).then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userProfile.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()