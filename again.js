const input = document.querySelector("#input-box");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

async function getUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error("User not found");

    const data = await response.json();
    showUser(data);
  } catch (error) {
    result.innerHTML = `<p class="error">${error.message}</p>`;
  }
}

function showUser(user) {
  result.innerHTML = `
    <div class="usercard">
      <img src="${user.avatar_url}" alt="${user.login}">
      <h2 class="name">${user.name || user.login}</h2>
      <p>${user.bio || "No bio available"}</p>
      <div class="stats">
        <p>Public Repos: ${user.public_repos}</p>
        <p>Following: ${user.following}</p>
        <p>Followers: ${user.followers}</p>
      </div>
      <a href="${user.html_url}" target="_blank">Visit Profile</a>
    </div>
  `;
}

btn.addEventListener("click", () => {
  const username = input.value.trim();
  if (username) getUser(username);
  else alert("Please enter a username");
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") btn.click();
});
