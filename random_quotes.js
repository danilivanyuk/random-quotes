
const text = document.querySelector('.text');
const author = document.querySelector('.author');
const generate_quote = document.getElementById('generate_quote');

generate_quote.addEventListener('click', get_quote);


function get_quote(){
  let output = '';
  fetch ('https://favqs.com/api/qotd')
  .then(response => response.json())
  .then(data => {
    text.innerHTML = ` ${data.quote.body}`;
    author.innerHTML = data.quote.author;
  });
    
}
