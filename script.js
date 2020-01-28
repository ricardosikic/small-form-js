const card_container = document.getElementById('card-container');
const one = document.getElementById('one');
const two = document.getElementById('two');
const next = document.getElementById('next');
const save = document.getElementById('save');
const thanks = document.getElementById('thanks');


// callback


next.addEventListener('click', (e) => {
  e.preventDefault();
  let elements_array = [one, two];

  let current_pos = 0;
  elements_array[current_pos].style.display = 'none';
  
  if(current_pos + 1) {
    elements_array[current_pos + 1].style.display = 'block';
  }
});

save.addEventListener('click', (e) => {
  e.preventDefault();
  setTimeout(() => {
    message();
  }, 2000);
});

message = () => {
  thanks.style.display = 'block';
}