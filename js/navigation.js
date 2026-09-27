import {
  renderizarInicio,
  renderizarProjetos,
  renderizarCadastro,
} from "./templates.js";

const rotas = {
  inicio: renderizarInicio,
  projeto: renderizarProjetos,
  cadastro: renderizarCadastro,
};

const titulos = {
  inicio: "ONG Esperança - Início",
  projeto: "ONG Esperança - Projetos Sociais",
  cadastro: "ONG Esperança - Cadastro",
};

export function obterRota() {
  const parametros = new URLSearchParams(window.location.search);
  const rota = parametros.get("pagina") || "inicio";

  return rotas[rota] ? rota : "inicio";
}

export function renderizarRota(rota = obterRota()) {
  const app = document.querySelector("#app");

  app.innerHTML = rotas[rota]();

  document.title = titulos[rota];

  atualizarMenu(rota);
}

export function navegar(rota) {
  if (!rotas[rota]) {
    rota = "inicio";
  }

  history.pushState({ rota }, "", `?pagina=${rota}`);

  renderizarRota(rota);
}

function atualizarMenu(rotaAtual) {
  const links = document.querySelectorAll("[data-route]");

  links.forEach((link) => {
    if (link.dataset.route === rotaAtual) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

export function iniciarNavegacao() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-route]");

    if (!link) {
      return;
    }

    event.preventDefault();

    navegar(link.dataset.route);
  });

  window.addEventListener("popstate", () => {
    renderizarRota();
  });

  renderizarRota();
}
