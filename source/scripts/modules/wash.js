const btn = document.querySelector('.assistance__card-link--more')
const modal = document.querySelector('.washModal')
const closeBtn = document.querySelector('.js-wash-modal-close-btn')

const onClickCloseModal = () => {
    modal.classList.remove('opened')
    btn.addEventListener('click', onClickOpenModal)
}

const onClickOpenModal = () => {
    modal.classList.add('opened')

    btn.removeEventListener('click', onClickOpenModal)
    closeBtn.addEventListener('click', onClickCloseModal)
}

btn.addEventListener('click', onClickOpenModal)