const fetchBtn = document.getElementById('fetchBtn');
const usernameInput = document.getElementById('usernameInput');
const displayArea = document.getElementById('displayArea');
const loader = document.getElementById('loader');


async function fetchUserProfile(username) {
    // 1. Prepare UI for loading
    displayArea.innerHTML = '';
    loader.style.display = 'block';
    
    try {
        // 2. Fetch data from GitHub API
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        // 3. Check for errors (like 404 User Not Found)
        if (!response.ok) {
            throw new Error(response.status === 404 ? "GitHub User Not Found" : "Server Error");
        }

        // 4. Parse JSON data
        const userData = await response.json();
        
        // 5. Success! Render the profile
        renderProfile(userData);

    } catch (error) {
        // 6. Error Handling
        renderError(error.message);
    } finally {
        // 7. Cleanup (Stop loader regardless of result)
        loader.style.display = 'none';
    }
}

function renderProfile(data) {
    displayArea.innerHTML = `
        <div class="profile-card">
            <img src="${data.avatar_url}" alt="User Avatar" class="avatar">
            <h2>${data.name || data.login}</h2>
            <p>${data.bio || "This user has no bio."}</p>
            <hr style="border: 0.5px solid #30363d; margin: 20px 0;">
            <div style="display: flex; justify-content: space-around;">
                <div><strong>${data.followers}</strong><br>Followers</div>
                <div><strong>${data.public_repos}</strong><br>Repos</div>
            </div>
            <br>
            <a href="${data.html_url}" target="_blank" style="color: var(--accent); text-decoration: none;">Open Original Profile →</a>
        </div>
    `;
}

function renderError(message) {
    displayArea.innerHTML = `<div class="error-msg">⚠️ ${message}</div>`;
}

// Event Listeners
fetchBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username) {
        fetchUserProfile(username);
    }
});

// Allow "Enter" key to trigger search
usernameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') fetchBtn.click();
});