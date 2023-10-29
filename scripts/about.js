async function getGitHubProfile() {
    const username = 'vcntttt';
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    document.getElementById("profile-username").textContent = data.login;
    document.getElementById("profile-name").textContent = data.name;
    document.getElementById("profile-bio").textContent = data.bio;
    document.getElementById("profile-avatar").src = data.avatar_url;
    document.getElementById("profile-link").href = data.html_url;
    document.getElementById("github-profile").style.display = "flex";
}
window.onload = getGitHubProfile;