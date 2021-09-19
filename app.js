const breakfastItems = document.querySelectorAll('.draggable');
const listContainer = document.querySelector('ul')

breakfastItems.forEach(item=>{
    item.addEventListener('dragstart',e=>{
        item.classList.add('dragging');
    })

    item.addEventListener('dragend', e=>{
        item.classList.remove('dragging');
        listContainer.appendChild(item)
    })

})