export function mostrarSucesso() {
  if (window.Swal) {
    Swal.fire({
      icon: "success",
      title: "Cadastro realizado!",
      text: "Seus dados foram salvos com sucesso.",
      confirmButtonText: "Continuar",
    });
  } else {
    alert("Cadastro realizado com sucesso!");
  }
}

export function mostrarErro(mensagem) {
  if (window.Swal) {
    Swal.fire({
      icon: "error",
      title: "Verifique os dados",
      text: mensagem,
      confirmButtonText: "Corrigir",
    });
  } else {
    alert(mensagem);
  }
}

export function mostrarToast(mensagem) {
  const toast = document.querySelector("#toast");

  if (!toast) {
    return;
  }

  toast.textContent = mensagem;
  toast.hidden = false;

  setTimeout(() => {
    toast.hidden = true;
  }, 3000);
}
