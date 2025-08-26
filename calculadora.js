        var opcao
        var valor1
        var valor2
        var res

        function mostrarNaTela(valorAux) {
            document.getElementById("tela").value += valorAux
        }

        function limparTela() {
            document.getElementById("tela").value = ""
            valor1 = null
            opcao = null
            valor2 = null
            res = null
        }

        function definirOpcao(opcaoAux) {
            valor1 = parseFloat(document.getElementById("tela").value)
            opcao = opcaoAux
            document.getElementById("tela").value = ""
        }

        function fazerOperacao() {
            valor2 = parseFloat(document.getElementById("tela").value)

            if (opcao == null) {  
                document.getElementById("tela").value = "Escolha uma operação"
            }
            if (opcao == 1) {
                res = valor1 + valor2
            }
            if (opcao == 2) {
                res = valor1 - valor2
            }
            if (opcao == 3) {
                res = valor1 * valor2
            }
            if (opcao == 4) {
                res = valor1 / valor2
            } 
            
            document.getElementById("tela").value = res
        }