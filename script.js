const whatsappMessage = `Olá, vim pelo site e gostaria de cotar uma autopeça.

Peça que procuro:
Veículo:
Ano:
Cidade:`;

const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;

document.querySelectorAll('.js-whatsapp').forEach((link) => {
  link.setAttribute('href', whatsappUrl);
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
});

document.querySelector('.quote-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = `Olá, vim pelo site e gostaria de cotar uma autopeça.

Nome: ${data.get('nome') || ''}
WhatsApp: ${data.get('whatsapp') || ''}
Peça que procuro: ${data.get('peca') || ''}
Veículo: ${data.get('veiculo') || ''}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
