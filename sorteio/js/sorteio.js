   
    // var participantes = [];

    var participantes = ['A','B','C'];


    var participantes_jSorteados = [];

    var controle = 0;

    function pegaNome () {
        var nome = document.querySelector("#nome")
        var nomeFormatado = nome.value
        nomeFormatado = nomeFormatado.charAt(0).toUpperCase() + nomeFormatado.slice(1);
        participantes.push(nomeFormatado);


        var participantesLista = document.querySelector("#participantes")
        var htmlParticipantes = participantesLista.innerHTML
        htmlParticipantes = htmlParticipantes + '<tr class="info-participantes"><td>'+ nomeFormatado +'</td></tr>'
        participantesLista.innerHTML = htmlParticipantes;

        nome.value = '' //limpa o formulario
        nome.focus() //coloca o foco na caixa
    }

    function sorteiaNome(){
       

        const sorteio = participantes;
        var numero_sorteado = 0;
        var j = 0;
        var pessoa_sorteada = '';

        // É a mesma coisa que isso aqui -> for (i=0; i< sorteio.length; i++)
        // pessoa = sorteio[0], pessoa = sorteio[1]
        sorteio.forEach((pessoa) => {

            const nomePessoa = pessoa;

            console.log('nv:' + j + '-' + nomePessoa)
            j++
            const ArrayProvisorio = participantes;

            // ArrayProvisorio.slice(ArrayProvisorio.indexOf(nomePessoa),1);

            // var tamanho_lista = ArrayProvisorio.length


            // numero_sorteado = Math.floor(Math.random() * tamanho_lista)
            //                         //0 a 0.9999....     

            // pessoa_sorteada = ArrayProvisorio[numero_sorteado]         

            // participantes_jSorteados.push(pessoa_sorteada)

            // ArrayProvisorio.push(nomePessoa)

            var mostra_tabela = document.querySelector("#sorteados")
            // if(controle==1){
            //     mostra_tabela.innerHTML = ''
            //     controle = 0;
            // }

            var backup = mostra_tabela.innerHTML
            mostra_tabela.innerHTML = backup + '<tr><td>' + pessoa_sorteada + '</td></tr>'
        })

        controle = 1;
    }