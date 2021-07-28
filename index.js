        const explicacao = 'Revisão geral.Novas funções.Correções e mudanças. Parte da correção'
        const versao = '1.2.4'
        const Pub = '28 jul 2021'
        console.log('[cqs-uteis] Iniciado o uso da versão v'+versao+' de '+Pub+' by Zienaps')

        

        /*TRAZER TAMANHO DO MêS*/
        function mesTamanho(Mes, Ano){
            if(Mes == 2 && Ano == undefined){console.warn('[mesTamanho: Error in Ano='+Ano+'] Necessário ano para buscar dias de Fevereiro'); return false}
            if(Mes != 2 && Ano != undefined) console.info('[mesTamanho] Não é necessário colocar Ano quando não é Fevereiro')

            let Tamanho = 0
            if(Mes == 1) Tamanho = 31
            if(Mes == 2) if(Ano%4 == 0) {Tamanho = 29} else{Tamanho = 28}
            if(Mes == 3) Tamanho = 31
            if(Mes == 4) Tamanho = 30
            if(Mes == 5) Tamanho = 31
            if(Mes == 6) Tamanho = 30
            if(Mes == 7) Tamanho = 31
            if(Mes == 8) Tamanho = 31
            if(Mes == 9) Tamanho = 30
            if(Mes == 10) Tamanho = 31
            if(Mes == 11) Tamanho = 30
            if(Mes == 11) Tamanho = 31
			
			if(Tamanho == 0){console.log('[mesTamanho: Error in Mes='+Mes+'] Valor citado não é mês'); return false}

            let Acao = 1
            if(Acao >= -1 && Acao <= 1) {console.log('[mesTamanho: Concluded]: Ação feita')}

            return Tamanho
        }


        /*TRAZER NOME DO MÊS*/
        function mesNome(Mes, Tipo, Lingua){
            let Nome = ''
            let TipoA
            let LinguaA
            if(Tipo == undefined){TipoA = 'Grande'} else{TipoA = Tipo}
            if(Tipo == undefined){LinguaA = 'PT'} else{LinguaA = Lingua}


            let GranPor = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
            let TresPor = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
            let DuasPor = ['Jn', 'Fv', 'Mr', 'Ab', 'Ma', 'Jn', 'Jl', 'Ag', 'St', 'Ot', 'Nv', 'Dz']
            let UmalPor = ['A', 'F', 'M', 'B', 'I', 'H', 'L', 'G', 'S', 'O', 'N', 'D']
            let PrimPor = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
            let GranEng = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            let TresEng = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            let DuasEng = ['Jn', 'Fb', 'Mr', 'Ap', 'My', 'Jn', 'Jl', 'Ag', 'Sp', 'Ot', 'Nv', 'Dc']
            let UmalEng = ['A', 'F', 'C', 'P', 'M', 'E', 'Y', 'G', 'S', 'O', 'N', 'D']
            let PrimEng = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']

            let Trazer = []
            if(TipoA == 'Grande'     && LinguaA == 'PT') Trazer = GranPor
            if(TipoA == 'Tres'       && LinguaA == 'PT') Trazer = TresPor
            if(TipoA == 'Duas'       && LinguaA == 'PT') Trazer = DuasPor
            if(TipoA == 'Uma'        && LinguaA == 'PT') Trazer = UmalPor
            if(TipoA == 'Primeira'   && LinguaA == 'PT') Trazer = PrimPor
            if(TipoA == 'Grande'     && LinguaA == 'EN') Trazer = GranEng
            if(TipoA == 'Tres'       && LinguaA == 'EN') Trazer = TresEng
            if(TipoA == 'Duas'       && LinguaA == 'EN') Trazer = DuasEng
            if(TipoA == 'Uma'        && LinguaA == 'EN') Trazer = UmalEng
            if(TipoA == 'Primeira'   && LinguaA == 'EN') Trazer = PrimEng
            Nome = Trazer[Mes-1]

            let Acao = 1
            if(Acao >= -1 && Acao <= 1) {console.log('[mesNome: Concluded]: Ação feita')}

            return Nome
        }


        /*BUSCAR VALOR DE DATA*/
        function dataBuscar(Data, Busca){
            var data = new Date(Data)
            var dia = data.getDate()
            var semana = data.getDay()+1
            var mes = data.getMonth()+1
            var mess = mesNome(mes, 'Grande', 'PT')
            var ano = data.getFullYear()
            var hoje = new Date([ano, mes, dia])
            var hora = data.getHours()
            var minuto = data.getMinutes()
            var segundo = data.getSeconds()
            var milis = data.getMilliseconds()
            var TMilis = Date.now()
            var TSegundo = TMilis / 1000
            var TMinuto = TMilis / 1000 / 60 
            var THora  = TMilis / 1000 / 60 / 60
            var TDia  = TMilis / 1000 / 60 / 60 / 24

            let Pedido = ''
            if(Busca == 'data') Pedido = data
            if(Busca == 'dia') Pedido = dia
            if(Busca == 'semana') Pedido = semana
            if(Busca == 'mes') Pedido = mes
            if(Busca == 'mess') Pedido = mess
            if(Busca == 'ano') Pedido = ano
            if(Busca == 'hoje') Pedido = hoje
            if(Busca == 'hora') Pedido = hora
            if(Busca == 'minuto') Pedido = minuto
            if(Busca == 'segundo') Pedido = segundo
            if(Busca == 'milissegundo') Pedido = milis
            if(Busca == 'atualMilissegundo') Pedido = TMilis
            if(Busca == 'atualSegundo') Pedido = TSegundo
            if(Busca == 'atualMinuto') Pedido = TMinuto
            if(Busca == 'atualHora') Pedido = THora
            if(Busca == 'atualDia') Pedido = TDia

            if(Pedido == ''){console.warn('[dataBuscar: Error in Busca='+Busca+'] Não foi encontrado essa busca (Exemplos: dia, mes, minuto)'); return false}
            
            let Acao = 1
            if(Acao >= -1 && Acao <= 1) {console.log('[dataBuscar: Concluded]: Ação feita')}

            return Pedido
        }


        /*NÚMERO ALEATÓRIO*/
        function randomize(Min, Max, Dec){
            if(!Min[1]){var TipoDeConta = 2} else{var TipoDeConta = 1}

            if(TipoDeConta == 1){
                let VetorTamanho = Min.length
                let VetorPegar = Math.round(Math.random() * (VetorTamanho - 1))
                var Randomized = Min[VetorPegar]
            } 

            if(TipoDeConta == 2){
                if(isNaN(Dec)){Dec = 0}
                var Randomized = Min + (Math.round(Math.random() * (Max - Min) * 10**Dec) / 10**Dec)

                /*ERROS*/
                if(isNaN(Min)){console.warn(`[.randomize: Error in Min=${Min}] 'Min' não é um número`); return false}
                if(isNaN(Max)){console.warn(`[.randomize: Error in Max=${Max}] 'Max' não é um número`); return false}
                if(Min > Max){console.warn(`[.randomize: Error in Min=${Min} & Max=${Max}] 'Min' é maior que 'Max'`); return false}
                if(Min == Max){console.info(`[.randomize: Attention] 'Min' é igual a 'Max'. Isso limita a somente um resultado`)} 
                if(Dec < 0){console.warn(`[.randomize: Error in Dec=${Dec}] 'Dec' tem que er 0 ou positivo`); return false}
            }

            let Acao = 1
            if(Acao >= -1 && Acao <= 1) {console.log('[avg: Concluded]: Ação feita')}

            return Randomized
        }


        /*SORTEIO COM CHANCES*/
        function chance(Valor, Chance, Acompanhar){
            let ValorTam = Valor.length
            let ChanceTam = Chance.length
            let ChanceTotal = 0
            let AcumChance = []
            let sorteio
            let PosGanhou

            if(ValorTam == ChanceTam){
                for(i=0; i < ChanceTam; i++){
                    ChanceTotal = ChanceTotal + Chance[i];                  if(Acompanhar){console.log('Chance acumulada: (+ '+Chance[i]+') '+ChanceTotal)}
                    AcumChance.push(ChanceTotal);                           if(Acompanhar){console.log('    Vetor de chances: '+AcumChance)}
                }

                sorteio = randomize(0, ChanceTotal, 10);                if(Acompanhar){console.log('Sorteio: '+sorteio)}

                for(i=0; i < ChanceTam; i++){
                    let h = i-1
                    let AcumChanceMen = AcumChance[h]
                    if(!AcumChanceMen){AcumChanceMen = 0}                   if(Acompanhar){console.log('Verificação atual: ['+i+'] '+AcumChanceMen+' - '+AcumChance[i])}
                    if(AcumChanceMen <= sorteio && AcumChance[i]> sorteio){
                        PosGanhou = i;                                           if(Acompanhar){console.log('    Posição que ganhou: '+i)}
                    } else{                                                      if(Acompanhar){console.log('    Posição fora de lugar: '+i)}}
                }

                let Acao = Chance[PosGanhou] / ChanceTotal
                if(Acao >= -1 && Acao <= 1) {console.log('[chance: Concluded]: Foi sorteado um elemento que tinha '+Math.round(Acao*100*100)/100+'% de chance')}

                return Valor[PosGanhou]
            } else{console.warn(`[chance: Error in Chance=${Chance}] Tamanho de Chance não é o mesmo de Valor (Valor tem ${ValorTam} elemento(s) enquanto Chance tem ${ChanceTam} elemento(s))`); return false}
        }


        /*TIRAR MÉDIA*/
        function avg(Vetor, Dec){
            if(!Vetor[0]){console.log(`[avg: Error in Vetor=${Vetor}] valor deve ser um vetor`); return false}

            let ValorSoma = 0
            let ValorFinal = null
            let VetorSize = Vetor.length
            let Remover = VetorSize
            let teste = 0

            for(i = 0; i < VetorSize; i++){
                if(isNaN(Vetor[i]) || Vetor[i] == null){Remover = Remover - 1}
                else{ValorSoma = ValorSoma + Number(Vetor[i])}
            }

            if(isNaN(Dec)){ValorFinal = ValorSoma / Remover}
            else{ValorFinal = Math.round((ValorSoma / Remover) * 10**Dec) / 10**Dec}

            let Acao = 1
            if(Acao >= -1 && Acao <= 1) {console.log('[avg: Concluded]: Ação feita')}

            return ValorFinal
        }


        /*SORTEAR NÚMEROS*/
        function sortear(Tamanho, Quantidade, Repete){
            let Max = Number(Tamanho)
            let Qtdd = Quantidade
            let QtddMax = 0
            let Fila = []
            let Sorteado = []
            Repete = false
            
            if(Repete){Repete = true}
            if(isNaN(Qtdd)){QtddMax = Max} else{QtddMax = Number(Qtdd)}

            for(i = 0; i < Max; i++){
                Fila.push(i+1)
            }

            for(i = 0; i < QtddMax; i++){
                let Add = Fila[Math.floor(Math.random() * Fila.length)]
                Sorteado.push(Add)
                
                if(!Repete){
                    let Remover = Fila.indexOf(Add)
                    Fila.splice(Remover, 1)
                }
            }

            let Acao = Sorteado.length
            if(Acao >= -1 && Acao <= 1) {console.log('[sortear: Concluded]: Foi criado um vetor com '+Acao+' elemento')}
            else                        {console.log('[sortear: Concluded]: Foi criado um vetor com '+Acao+' elementos')}

            return Sorteado
        }


        /*REMOVER VALORES DUPLICADOS*/
        function unificar(Vetor, Acompanhar){
            let log = Acompanhar
            let Fim = []
            let ver = 0
            for(a=0; a<Vetor.length; a++){
                ver = Vetor.length
                if(log){console.log('Posição A = '+a)}
                for(b=(a+1); b<Vetor.length; b++){
                    if(log){console.log('    Posição B = '+b)}
                    if(Vetor[a] === Vetor[b]){
                        if(log){console.log('        (A = '+Vetor[a]+') == (B = '+Vetor[b]+') - Removendo '+Vetor[a])}
                        ver = -1
                    }else{
                        if(log){console.log('        (A = '+Vetor[a]+') / (B = '+Vetor[b]+') - Mantendo '+Vetor[a])}
                        ver = ver - 1
                        
                    }
                }
                if(log){console.log('    ValorFinal (remover elemento se negativo): '+ver)}
                if(ver < 0){}else{
                    Fim.push(Vetor[a])}
                    if(log){console.log('    Novo vetor: ['+Fim+']')}
            }

            let Acao = Vetor.length - Fim.length
            if(Acao >= -1 && Acao <= 1) {console.log('[unificar: Concluded]: Foi removido '+Acao+' elemento')}
            else                        {console.log('[unificar: Concluded]: Foram removidos '+Acao+' elementos')}

            return Fim
        }


        //VERIFICAR QUANTAS VEZES TAL VALOR REPETIU
        function repete(Valor, Local){
            let LocalTam = Local.length
            let Repete = 0

            for(i=0; i <LocalTam; i++){
                if(Local[i] == Valor){
                    Repete++
                }
            }

            let Acao = 1
            if(Acao >= -1 && Acao <= 1) {console.log('[repete: Concluded]: Ação feita')}

            return Repete
        }
        

        /*REMOVER CERTOS VALORES*/
        function filtragem(Onde, oQue, Manter, Acompanhar){
            let Resultado = []
            let OndeTam = Onde.length
            let oQueTam = oQue.length
            let verif
            let aviso = ''
            if(Acompanhar == 'impo'){Acompanhar = 'Impo'}
            /*>>*/if(Acompanhar == true || Acompanhar == 'Impo'){
                let TManter
                if(Manter == true){TManter = 'NÃO '} else{TManter = ''}
                console.log(`Removendo todos os valores de [${Onde}] que ${TManter}forem encontrados em [${oQue}]`)
            }

            for(a=0; a < OndeTam; a++){
                /*>>*/if(Acompanhar == true){console.log(`  Posição a comparar: Onde[${a}] (valor: ${Onde[a]})`)}
                verif = oQueTam

                for(b=0; b < oQueTam; b++){
                    /*>>*/if(Acompanhar == true){console.log(`      Comparando posição Onde[${a}] com: oQue[${b}] (valor de oQue[b]: ${oQue[b]})`)}
                    if(Onde[a] === oQue[b]){
                        /*>>*/if(Acompanhar == true){console.log(`          Verificação diz que ${Onde[a]} === ${oQue[b]}`)}
                        verif = -1
                        b = oQueTam+5
                    } else{
                        /*>>*/if(Acompanhar == true){console.log(`          Verificação diz que ${Onde[a]} <> ${oQue[b]}`)}
                        verif = verif
                    }
                }
                if(Manter == true){
                    if(verif < 0){
                        /*>>*/if(Acompanhar == true || Acompanhar == 'Impo'){if(Acompanhar != 'Impo'){aviso = ` por estar em ${oQue}`}; console.log(`              Mantendo ${Onde[a]}`+aviso)}
                        Resultado.push(Onde[a])
                    } else{/*>>*/if(Acompanhar == true || Acompanhar == 'Impo'){if(Acompanhar != 'Impo'){aviso = ` por não estar em ${oQue}`}; console.log(`              Removendo ${Onde[a]}`+aviso)}}
                } else{
                    if(verif >= 0){
                        /*>>*/if(Acompanhar == true || Acompanhar == 'Impo'){if(Acompanhar != 'Impo'){aviso = ` por não estar em ${oQue}`}; console.log(`              Mantendo ${Onde[a]}`+aviso)}
                        Resultado.push(Onde[a])
                    } else{/*>>*/if(Acompanhar == true || Acompanhar == 'Impo'){if(Acompanhar != 'Impo'){aviso = ` por estar em ${oQue}`}; console.log(`              Removendo ${Onde[a]}`+aviso)}}
                }
            }

            let Acao = Onde.length-Resultado.length
            if(Acao >= -1 && Acao <= 1) {console.log('[filtragem: Concluded]: Foi removido '+Acao+' elemento')}
            else                        {console.log('[filtragem: Concluded]: Foram removidos '+Acao+' elementos')}
        
            return Resultado
        }


        /*SEQUENCIA*/
        function sequencia(Max, Min, Espaco){
            Max = Max
            Min = Min-1
            Espaco = Espaco
            let Tamanho = (Max - Min) / Espaco
            let Ultimo = Min - Espaco + 1
            let Atual = 0
            let Sequencia = []

            for(i=0; i < Tamanho; i++){
                if(Ultimo + Espaco > Max){} else{
                    Atual = Ultimo + Espaco
                    Ultimo = Atual
                    Sequencia.push(Atual)
                }
            }

            let Acao = Sequencia.length
            if(Acao >= -1 && Acao <= 1) {console.log('[sequencia: Concluded]: Foi criado um vetor com '+Acao+' elemento')}
            else                        {console.log('[sequencia: Concluded]: Foi criado um vetor com '+Acao+' elementos')}

            return Sequencia
        }

        
        /*LIMPAR TERMINAL*/
        function LimparLog(Aviso, Tamanho){
            if(isNaN(Tamanho)){Tamanho = 100}
            for(i=0; i < Tamanho; i++){console.log('')}
            if(Aviso){console.log('O Terminal foi limpo')}
            
            return true
        }


        /*COMO USAR AS FUNÇÕES*/
        function HowToUse(){
            console.log('Versão atual: v'+versao+' de '+Pub+' by Zienaps\nVeja todas as funções e atualizações aqui: https://zienaps.neocities.org/cqs-uteis.html \n\nCOMO USAR AS FUNÇÕES:\n')
            console.log('Documentação: https://zienaps.neocities.org/cqs-uteis.html')
            
            return true
        }


        /*NOTIFICAR LOG*/
        function Checar(Tipo){
            if(Tipo == undefined) Tipo = ''
            let Tipoa = Tipo
            let Hoje = new Date()
            if(Tipoa == 'inicio'){console.log(`${dataBuscar(Hoje, 'hora')}:${dataBuscar(Hoje, 'minuto')}:${dataBuscar(Hoje, 'segundo')} - [cqs-uteis diz]: O código iniciou`); return false}
            if(Tipoa == 'fim'){console.log(`${dataBuscar(Hoje, 'hora')}:${dataBuscar(Hoje, 'minuto')}:${dataBuscar(Hoje, 'segundo')} - [cqs-uteis diz]: O código finalizou`); return false}
            if(Tipoa != 'inicio' && Tipoa != 'fim') console.log(`${dataBuscar(Hoje, 'hora')}:${dataBuscar(Hoje, 'minuto')}:${dataBuscar(Hoje, 'segundo')} - [cqs-uteis diz]: Check-up '${Tipo}' alcançado`)
        
            return true
        }



        
module.exports = {
    randomize,
    chance,
    mesTamanho,
    mesNome,
    dataBuscar,
    avg,
    sortear,
    unificar,
    repete,
    filtragem,
    sequencia,
    LimparLog,
    HowToUse,
    Checar
}