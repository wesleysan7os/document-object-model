let pratos = [...document.querySelector('#pratos').children];
let bebidas = [...document.querySelector('#bebidas').children];
let sobremesas = [...document.querySelector('#sobremesas').children];
let confirmacaoBtn = document.querySelector('button');

function selectItem(newActiveItem, itens) {
  let activeItem = itens.find((item) =>
    item.classList.contains('active')
  );
  if (activeItem) {
    activeItem.classList.remove('active');
  }
  newActiveItem.classList.add('active');
}

function enableButton(button) {
 if (
   hasItemSelected(pratos) &&
   hasItemSelected(bebidas) &&
   hasItemSelected(sobremesas)
 ) {
   button.innerText = 'Fechar pedido';
   button.classList.add('enable');
  }
}

function hasItemSelected(itens) {
  return itens.some(item => item.classList.contains('active'));
}

pratos.forEach(pratoSelecionado => pratoSelecionado.addEventListener('click', function(event) {
  selectItem(pratoSelecionado, pratos);
  enableButton(confirmacaoBtn);
}));  
bebidas.forEach(bebidaSelecionada => bebidaSelecionada.addEventListener('click', function(event) {
  selectItem(bebidaSelecionada, bebidas);
  enableButton(confirmacaoBtn);
}));  
sobremesas.forEach(sobremesaSelecionada => sobremesaSelecionada.addEventListener('click', function(event) {
  selectItem(sobremesaSelecionada, sobremesas);
  enableButton(confirmacaoBtn);
}));