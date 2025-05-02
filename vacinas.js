ocument.getElementById('calcular').addEventListener('click', function () {
  const dataInicial = document.getElementById('data-inicial').value;
  const quantidadeDias = parseInt(document.getElementById('dias').value);

  if (!dataInicial || isNaN(quantidadeDias) || quantidadeDias <= 0) {
      alert('Por favor, insira uma data válida e uma quantidade de dias maior que zero.');
      return;
  }

  const data = new Date(dataInicial);
  data.setDate(data.getDate() + quantidadeDias);

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const resultado = data.toLocaleDateString('pt-BR', options);

  document.getElementById('resultado').querySelector('input').value = resultado;
});