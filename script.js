'use strict';
document.documentElement.classList.add('has-js');
const demoCopy = {
 catalogo: ['Produtos organizados. Consulta simplificada.', 'Uma apresentação de produtos com referências, categorias e informações fáceis de encontrar.'],
 dados: ['Seus números, com mais clareza.', 'Indicadores em uma visão simples para comparar períodos e fazer perguntas melhores sobre o negócio.'],
 automacao: ['Arquivos no lugar. Rotina mais simples.', 'Uma regra organiza o acervo por referência, cor e sequência, usando as informações no nome dos arquivos.']
};
document.querySelectorAll('[data-demo]').forEach(button => button.addEventListener('click', () => {
 const key = button.dataset.demo;
 document.querySelectorAll('[data-demo]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
 document.querySelectorAll('.demo-panel').forEach(panel => { panel.hidden = panel.id !== `demo-${key}`; });
 document.getElementById('demo-title').textContent = demoCopy[key][0];
 document.getElementById('demo-description').textContent = demoCopy[key][1];
}));
function selectTopic(topic) {
 document.querySelectorAll('.topic-list [data-topic]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.topic === topic)));
 const message = topic === 'Entender as possibilidades' ? 'Olá, Pedro! Quero entender como o Atlas Bull pode ajudar minha empresa.' : `Olá, Pedro! Quero conversar sobre ${topic.toLowerCase()} para minha empresa.`;
 document.getElementById('contact-message').textContent = message;
 document.getElementById('whatsapp-contact').href = `https://wa.me/5522998196745?text=${encodeURIComponent(message)}`;
}
document.querySelectorAll('[data-topic]').forEach(control => control.addEventListener('click', () => selectTopic(control.dataset.topic)));
document.querySelectorAll('.mobile-nav nav a').forEach(link => link.addEventListener('click', () => {document.querySelector('.mobile-nav').open = false;}));
selectTopic('Entender as possibilidades');
