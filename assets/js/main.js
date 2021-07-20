const Modal = {
  open() {
    // abrir Modal
    // Adicionar a class active no modal
    document.querySelector('.modal-overlay').classList.add('active')
  },
  close() {
    // fechar o modal
    // remover a class acitve do modal
    document.querySelector('.modal-overlay').classList.remove('active')
  }
}
