const item = document.querySelector('.item');

const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', DragStart);
item.addEventListener('dragend', DragEnd);

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', DragOver)
    placeholder.addEventListener('dragenter', DragEnter)
    placeholder.addEventListener('dragleave', DragLeave)
    placeholder.addEventListener('drop', DragDrop)
}

function DragStart(event) {
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0);
}

function DragEnd(event) {
    event.target.className = 'item';
}

function DragOver(event) {
    event.preventDefault();
}

function DragEnter(event) {
    event.target.classList.add('.hovered');
}

function DragLeave(event) {
    event.target.classList.remove('.hovered');
}

function DragDrop(event) {
    event.target.classList.remove('.hovered');
    event.target.append(item);
}