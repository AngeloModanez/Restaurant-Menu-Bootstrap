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

    output.innerHTML = `</br>Caro <strong>${personName}</strong></br></br></br>`;
    output.innerHTML += 'Seguem os dados do seu pedido</br></br>';
    output.innerHTML += 'O seu pedido é: </br></br>';

    for (var input of quantities) {
        if (input.value == 0) {
            continue;
        }

        var id = input.id;
        var total = prods[id - 1].price * parseFloat(input.value);

        output.innerHTML += `<li>Prato: ${prods[id - 1].name} - Preço unitário: ${formatter.format(prods[id - 1].price)} - Quantidade: ${input.value} - Total: ${formatter.format(total)}</li>`;

        result += total;
    }

    output.innerHTML += `</br><h4>Preço final: ${formatter.format(result)}</h4>`;
}