const order = document.getElementById('orden');
const nameClient = document.getElementById('nombre');
const formulario = document.querySelector("#formulario");

function sendOrder(event){
    const message = nameClient.value + ' '+ order.value;
    const whatsapp = `https://wa.me/526392328915?text=${message.replace(/ /g,'%20')}`;
    openInNewTab(whatsapp);
    window.location.href
    order.value('');
    name.value('');
    event.preventDefault();
}

function openInNewTab(href) {
    Object.assign(document.createElement('a'), {
      target: '_blank',
      href: href,
    }).click();
  }

formulario.addEventListener('submit',sendOrder)