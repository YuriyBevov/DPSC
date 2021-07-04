const showMoreBtn = document.querySelector('.accident__btn');
const items = document.querySelectorAll('.accident__card')

for(i=3; i < items.length; i++) {
    items[i].classList.add('hidden')
}

const onClickShowMore = () => {
    items.forEach(item => {
        item.classList.contains('hidden') ?
        item.classList.remove('hidden') : null
    })

    showMoreBtn.removeEventListener('click', onClickShowMore)
    showMoreBtn.classList.add('hidden')
}

showMoreBtn.addEventListener('click', onClickShowMore)
