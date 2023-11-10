//  fetch('https://jsonplaceholder.typicode.com/comments')
//  .then((res)=>res.json())

document.addEventListener("DOMContentLoaded", function () {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => {
            const commentsContainer = document.getElementById('commentsContainer');

            data.forEach(comment => {
                const card = document.createElement('div');
                card.className = 'card';

                const title = document.createElement('h3');
                title.textContent = comment.name;

                const email = document.createElement('p');
                email.textContent = `Email: ${comment.email}`;

                const body = document.createElement('p');
                body.textContent = comment.body;

                card.appendChild(title);
                card.appendChild(email);
                card.appendChild(body);

                commentsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
   
});