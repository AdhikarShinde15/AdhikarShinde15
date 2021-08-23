const note = document.createElement('p');
const button = document.createElement('button');

note.textContent="Do Work";
button.textContent="x";

note.appendChild(button);

body.appendChild(note)