import { salvarColaborador } from "./storage.js";
import { mostrarSucesso, mostrarErro, mostrarToast } from "./ui.js";

const padroes = {
  cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
  telefone: /^\(\d{2}\) \d{5}-\d{4}$/,
  cep: /^\d{5}-\d{3}$/,
};

function validarCampo(campo) {
  campo.classList.remove("campo-erro", "campo-sucesso");

  if (campo.required && !campo.value.trim()) {
    campo.classList.add("campo-erro");
    return false;
  }

  const padrao = padroes[campo.name];

  if (padrao && !padrao.test(campo.value)) {
    campo.classList.add("campo-erro");
    return false;
  }

  if (!campo.checkValidity()) {
    campo.classList.add("campo-erro");
    return false;
  }

  if (campo.name === "nascimento" && campo.value) {
    const dataNascimento = new Date(`${campo.value}T00:00:00`);

    const hoje = new Date();

    if (dataNascimento > hoje) {
      campo.classList.add("campo-erro");
      return false;
    }
  }

  campo.classList.add("campo-sucesso");

  return true;
}

function validarFormulario(formulario) {
  const campos = formulario.querySelectorAll("input, select");

  let formularioValido = true;
  let primeiroCampoInvalido = null;

  campos.forEach((campo) => {
    const valido = validarCampo(campo);

    if (!valido) {
      formularioValido = false;

      if (!primeiroCampoInvalido) {
        primeiroCampoInvalido = campo;
      }
    }
  });

  if (primeiroCampoInvalido) {
    primeiroCampoInvalido.focus();
  }

  return formularioValido;
}

export function inicializarFormulario() {
  document.addEventListener("input", (event) => {
    const campo = event.target;

    if (campo.matches("#form-cadastro input")) {
      validarCampo(campo);
    }
  });

  document.addEventListener("change", (event) => {
    const campo = event.target;

    if (campo.matches("#form-cadastro select")) {
      validarCampo(campo);
    }
  });

  document.addEventListener("submit", (event) => {
    const formulario = event.target;

    if (!formulario.matches("#form-cadastro")) {
      return;
    }

    event.preventDefault();

    const formularioValido = validarFormulario(formulario);

    if (!formularioValido) {
      mostrarErro("Preencha os campos corretamente antes de continuar.");

      return;
    }

    const dados = Object.fromEntries(new FormData(formulario));

    salvarColaborador(dados);

    mostrarSucesso();

    mostrarToast("Cadastro salvo no armazenamento local.");

    formulario.reset();

    formulario.querySelectorAll("input, select").forEach((campo) => {
      campo.classList.remove("campo-erro", "campo-sucesso");
    });
  });
}
