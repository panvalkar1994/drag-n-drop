const breakfastItems = document.querySelectorAll('.draggable');
const listContainer = document.querySelector('ul')
let dragged = null;

breakfastItems.forEach(item=>{
    item.addEventListener('dragstart',e=>{
        dragged = item;
        item.classList.add('dragging');

        breakfastItems.forEach(it=>{
            if(it!=dragged){
                it.classList.add('hint')
            }
        })
    })

    item.addEventListener('dragenter', e=>{
        if(item != dragged){
            item.classList.add('active')
        }
    })

    item.addEventListener('dragleave', e=>{
        if(item != dragged){
            item.classList.remove('active');
        }
    })

    item.addEventListener('dragend', e=>{
        breakfastItems.forEach(it=>{
            it.classList.remove('dragging');
            it.classList.remove('active');
            it.classList.remove('hint');
        })
    })

    item.addEventListener('dragover', e=>{
        e.preventDefault();
    })

    item.addEventListener('drop', e=>{
        e.preventDefault();
        item.parentNode.insertBefore(dragged, item.nextSibling);
    })

})  