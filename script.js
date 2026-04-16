const texto = "Meu Portfólio";
let index = 0;

function escrever() {
  if (index < texto.length) {
    document.getElementById("texto").textContent += texto.charAt(index);
    index++;
    setTimeout(escrever, 80);
  }
}

escrever();


const formulario = document.querySelector('#meu-formulario');

function validarFormulario(event) {
    event.preventDefault();

     const nome = document.querySelector('#nome').value;
     const email = document.querySelector('#email').value;
     const msg = document.querySelector('#msg').value;

     if (nome === "" || email === "" || msg === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
     } else {
        alert(`Obrigada, ${nome}! Sua mensagem foi enviada com sucesso.`);
        formulario.reset();
     }
}

formulario.addEventListener('submit', validarFormulario);

const meusProjetos = [
   {
      titulo: "Portfólio",
      descricao: "Meu portfólio de apresentação feito com HTML, CSS e JavaScript.",
      link: "https://github.com/ericaribeirx",
   },
];

function renderizarProjetos() {
   const container = document.querySelector('.projetos-container');

   container.innerHTML = "";

   meusProjetos.forEach(projeto => {
      const cardHTML = `
      <article class="card-projeto">
         <h3>${projeto.titulo}</h3>
         <p>${projeto.descricao}</p>
         <a href="${projeto.link}" target="_blank"> Ver no GitHub</a>
      </article>
      `;
      container.innerHTML += cardHTML;

   });
}

renderizarProjetos();