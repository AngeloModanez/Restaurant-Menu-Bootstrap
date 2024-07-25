var prods = [
    { id: 1, name: "Bife com Batata", price: 30.00 },
    { id: 2, name: "Coxa de Frango Crocante", price: 25.00 },
    { id: 3, name: "Carne de Panela", price: 22.00 },
    { id: 4, name: "Farofa", price: 10.00 },
    { id: 5, name: "Salada", price: 8.00 },
    { id: 6, name: "Torresmo", price: 12.00 }
]

const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
})

function calc() {
    var quantities = document.getElementsByName("quantity");
    var personName = document.getElementById("name").value;
    var output = document.getElementById("output");
    var result = 0;

    for (var input of quantities) {
        if (input.value > 0) {
            var value = prods[input.id - 1].price * parseFloat(input.value);
        }
    }

    if (value > 0) {
        output.innerHTML = `Caro <strong>${personName}</strong>, seguem os dados do seu pedido:</br></br>`;

        for (var input of quantities) {
            if (input.value == 0) {
                continue;
            }
            var total = prods[input.id - 1].price * parseFloat(input.value);
            output.innerHTML += `<li>Prato: ${prods[input.id - 1].name} - Preço unitário: ${formatter.format(prods[input.id - 1].price)} - Quantidade: ${input.value} - Total: ${formatter.format(total)}</li>`;

            result += total;
        }
        output.innerHTML += `</br></br><h2 class="text-success">Preço final: ${formatter.format(result)}</h2>`;
    }

    else {
        output.innerHTML += `<h1 class="text center fs-3 fw-bold text-danger">Caro <strong>${personName}</strong>, SELECIONE UM PRATO</h1>`;
    }
}