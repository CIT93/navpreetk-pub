

async function getPostsData() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.status === 200) {
            console.log("Data successfully fetched.");
            renderPost(data)
        } else {
            console.log('Server Error', data.error.message);
        }
    } catch (error) {
        console.log('Fetch Error', error);
    }
}

function renderPost(data) {
    const OUTPUT = document.getElementById("output");

    data.forEach((post) => {
        const postTitle = document.createElement("h2");
        postTitle.textContent = `Title: ${post.title}`;
        OUTPUT.appendChild(postTitle);

        const postBody = document.createElement("p");
        postBody.textContent = `Body: ${post.body}`;
        OUTPUT.appendChild(postBody);
    });
}

getPostsData();




