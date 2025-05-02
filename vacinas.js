document.getElementById("calcular").addEventListener("click", function() {
  const dataInicial = document.getElementById("data-inicial").value;
  const dias = parseInt(document.getElementById("dias").value);

  if (!dataInicial || isNaN(dias) || dias <= 0) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
  }

  // Corrigindo a criação da data para evitar fuso horário
  const partes = dataInicial.split("-");
  const data = new Date(partes[0], partes[1] - 1, partes[2]); // ano, mês (0-indexado), dia

  data.setDate(data.getDate() + dias);

  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();

  document.getElementById("data-final").value = `${dia}/${mes}/${ano}`;
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
