        const explicacao = 'Mudança no estilo das notificações. Aceitação de zeros em algumas entradas'
        const versao = '1.3.1'
        const Pub = '06 ago 2021'



        /*CONFIGURAR NPM*/
        var ConfigInicio = true
        var ConfigUsos   = false
        var ConfigAvisos = true
        var ConfigErros  = true

        var CWarn = 0
        var CInfo = 0
        var CLog  = 0

        function Config(Inicio, Usos, Avisos, Erros){

            /*Erro*/  if(Inicio != true && Inicio != false) return Notificar('Warn', Funcao, "Boleano", '', )
            /*Erro*/  if(Inicio != true && Inicio != false) return Notificar('Warn', Funcao, "Boleano", '', )
            /*Erro*/  if(Inicio != true && Inicio != false) return Notificar('Warn', Funcao, "Boleano", '', )
            /*Erro*/  if(Inicio != true && Inicio != false) return Notificar('Warn', Funcao, "Boleano", '', )

            ConfigInicio = Inicio
            ConfigUsos   = Usos
            ConfigAvisos = Avisos
            ConfigErros  = Erros

            if(Inicio == undefined){ConfigInicio =  true}
            if(Usos   == undefined){ConfigUsos   = false}
            if(Avisos == undefined){ConfigAvisos =  true}
            if(Erros  == undefined){ConfigErros  =  true}

            return [CWarn, CInfo, CLog]
        }



        //FUNCTIONS DE NOTIFICAÇÕES (NÃO PÚBLICAS)
        function Notificar(Tipo, Funcao, Mensagem, Local, Valor){
            /*
                Tipo:
                    Warn: Erro de parar o código
                    Info: notificar sobre algo
                    log: dizer algo
                Função: Nome da função a ser usada
                Local: Parâmetro errado
                Valor: Valor do parâmetro
                Mensagem: Mensagem de aviso
            */

            if(Tipo == 'Warn') CWarn++
            if(Tipo == 'Info') CInfo++
            if(Tipo == 'Log')  CLog++

            //TEXTOS PRÉ DEFINIDOS
            if(Mensagem == 'Vetor') Mensagem = `Parâmetro ${Local} deve ser um vetor`
            if(Mensagem == 'Numero') Mensagem = `Parâmetro ${Local} deve ser um número`
            if(Mensagem == 'Boleano') Mensagem = `Parâmetro ${Local} deve ser booleano`
            if(Mensagem == 'Concluido') Mensagem = `${Funcao}: Ação feita!`

            if(Tipo == 'Warn') if(ConfigErros)  console.warn(`[${Funcao}: Erro em ${Local}='${Valor}] ${Mensagem}']`)
            if(Tipo == 'Info') if(ConfigAvisos) console.info(`[${Funcao}] ${Mensagem}`)
            if(Tipo == 'Conc') if(ConfigUsos)   console.log( `[${Funcao} concluído] ${Mensagem}`)
            if(Tipo == 'Log')                   console.log(`${Mensagem}`)

            return false
        }


        /*Mensagem*/  if(ConfigInicio) Notificar('Log', '[cqs-uteis] Iniciado com uso da versão v'+versao+' de '+Pub+' by Zienaps')




    //VERSÃO 1.0.0
        /*NÚMERO ALEATÓRIO*/
        function randomize(Max, Min, Dec){
            let Funcao = 'randomize'
            if(Max[0] == undefined){var TipoDeConta = 2} else{var TipoDeConta = 1}

            if(TipoDeConta == 1){
                /*Info*/  if(Max[1] == undefined) Notificar('Info', Funcao, 'Vetor contém somente um elemento. Este será sorteado sempre')

                let VetorTamanho = Max.length
                let VetorPegar = Math.round(Math.random() * (VetorTamanho - 1))
                var Randomized = Max[VetorPegar]
            } 

            if(TipoDeConta == 2){
                /*Erro*/  if(isNaN(Min)) return Notificar('Warn', Funcao, "Numero", 'Min', Min)
                /*Erro*/  if(isNaN(Max)) return Notificar('Warn', Funcao, "'Max' deve ser um número ou um vetor", 'Max', Max)
                /*Erro*/  if(Min > Max)  return Notificar('Warn', Funcao, "'Min' é maior que 'Max' (provavelmente será tolerado futuramente)", 'Min/Max', Min+"/"+Max)
                /*Erro*/  if(Dec < 0)    return Notificar('Warn', Funcao, "'Dec' deve ser maior ou igual a 0", 'Dec', Dec)
                /*Info*/  if(Min == Max)        Notificar('Info', Funcao, "'Min' é igual a 'Max'. Isso limita a somente um resultado")

                if(isNaN(Dec)){Dec = 0}
                var Randomized = Min + (Math.round(Math.random() * (Max - Min) * 10**Dec) / 10**Dec)
            }

            /*Conclusao*/
            Notificar('Conc', Funcao, 'Ação feita')
            return Randomized
        }



        /*TIRAR MÉDIA*/
        function avg(Vetor, Dec){
            let Funcao = 'avg'
            /*Erro*/  if(!Vetor[0]) return Notificar('Warn', Funcao, "Vetor", 'Vetor', Vetor)

            let ValorSoma = 0
            let ValorFinal = null
            let VetorSize = Vetor.length
            let Remover = VetorSize

            for(i = 0; i < VetorSize; i++){
                if(isNaN(Vetor[i]) || Vetor[i] == null){Remover = Remover - 1}
                else{ValorSoma = ValorSoma + Number(Vetor[i])}
            }

            if(isNaN(Dec)){ValorFinal = ValorSoma / Remover}
            else{ValorFinal = Math.round((ValorSoma / Remover) * 10**Dec) / 10**Dec}

            /*Conclusao*/
            Notificar('Conc', Funcao, 'Ação feita')
            return ValorFinal
        }



        /*SORTEAR NÚMEROS*/
        function sortear(Tamanho, Quantidade, Repete){
            let Funcao = 'sortear'
            let Max = Number(Tamanho)
            let Qtdd = Quantidade
            let QtddMax = 0
            let Fila = []
            let Sorteado = []
            Repete = false

            /*Erro*/  if(isNaN(Tamanho)) return Notificar('Warn', Funcao, "Numero", 'Tamanho', Tamanho)
            
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

            /*Conclusao*/
            let Acao = Sorteado.length
            if(Acao >= -1 && Acao <= 1) {Notificar('Conc', Funcao, `Foi sorteado ${Acao} elemento`)}
            else                        {Notificar('Conc', Funcao, `Foram sorteados ${Acao} elementos`)}
            return Sorteado
        }



        /*REMOVER VALORES DUPLICADOS*/
        function unificar(Vetor, Acompanhar){
            let Funcao = 'unificar'
            let log = Acompanhar
            let Fim = []
            let ver = 0
            if(Acompanhar) CLog++

            /*Erro*/  if(!Vetor[0]) return Notificar('Warn', Funcao, "Vetor", 'Vetor', Vetor)

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

            /*Conclusao*/
            let Acao = Vetor.length - Fim.length
            if(Acao >= -1 && Acao <= 1) {Notificar('Conc', Funcao, `Foi removido ${Acao} elemento`)}
            else                        {Notificar('Conc', Funcao, `Foram removidos ${Acao} elementos`)}
            return Fim
        }



        //VERIFICAR QUANTAS VEZES TAL VALOR REPETIU
        function repete(Valor, Local){
            let Funcao = 'repete'
            let LocalTam = Local.length
            let Repete = 0

            /*Erro*/  if(!Local[0]) return Notificar('Warn', Funcao, "Vetor", 'Local', Local)

            for(i=0; i <LocalTam; i++){
                if(Local[i] == Valor){
                    Repete++
                }
            }

            /*Conclusao*/
            Notificar('Conc', Funcao, `Ação feita`)
            return Repete
        }
        


        /*REMOVER CERTOS VALORES*/
        function filtragem(Onde, oQue, Manter, Acompanhar){
            let Funcao = 'fitragem'
            let Resultado = []
            let OndeTam = Onde.length
            let oQueTam = oQue.length
            let verif
            let aviso = ''
            if(Acompanhar == 'impo'){Acompanhar = 'Impo'}
            if(Acompanhar == true || Acompanhar == 'Impo') CLog++

            /*Erro*/  if(!Onde[0]) return Notificar('Warn', Funcao, "Vetor", 'Onde', Onde)
            /*Erro*/  if(!oQue[0]) return Notificar('Warn', Funcao, "Vetor", 'oQue', oQue)

            if(Acompanhar == true || Acompanhar == 'Impo'){
                let TManter
                if(Manter == true){TManter = 'NÃO '} else{TManter = ''}
                                                                                           console.log(`Removendo todos os valores de [${Onde}] que ${TManter}forem encontrados em [${oQue}]`)
            }

            for(a=0; a < OndeTam; a++){
                                                                    if(Acompanhar == true){console.log(`  Posição a comparar: Onde[${a}] (valor: ${Onde[a]})`)}
                verif = oQueTam

                for(b=0; b < oQueTam; b++){
                                                                    if(Acompanhar == true){console.log(`      Comparando posição Onde[${a}] com: oQue[${b}] (valor de oQue[b]: ${oQue[b]})`)}
                    if(Onde[a] === oQue[b]){
                                                                    if(Acompanhar == true){console.log(`          Verificação diz que ${Onde[a]} === ${oQue[b]}`)}
                        verif = -1
                        b = oQueTam+5
                    } else{
                                                                    if(Acompanhar == true){console.log(`          Verificação diz que ${Onde[a]} <> ${oQue[b]}`)}
                        verif = verif
                    }
                }
                if(Manter == true){
                    if(verif < 0){
                                                                    if(Acompanhar == true || Acompanhar == 'Impo'){if(Acompanhar != 'Impo'){aviso = ` por estar em ${oQue}`}; console.log(`              Mantendo ${Onde[a]}`+aviso)}
                        Resultado.push(Onde[a])
                    } else{                                         if(Acompanhar == true || Acompanhar == 'Impo'){if(Acompanhar != 'Impo'){aviso = ` por não estar em ${oQue}`}; console.log(`              Removendo ${Onde[a]}`+aviso)}}
                } else{
                    if(verif >= 0){
                                                                    if(Acompanhar == true || Acompanhar == 'Impo'){if(Acompanhar != 'Impo'){aviso = ` por não estar em ${oQue}`}; console.log(`              Mantendo ${Onde[a]}`+aviso)}
                        Resultado.push(Onde[a])
                    } else{                                         if(Acompanhar == true || Acompanhar == 'Impo'){if(Acompanhar != 'Impo'){aviso = ` por estar em ${oQue}`}; console.log(`              Removendo ${Onde[a]}`+aviso)}}
                }
            }

            /*Conclusao*/
            let Acao = Onde.length-Resultado.length
            if(Acao >= -1 && Acao <= 1) {Notificar('Conc', Funcao, `Foi removido ${Acao} elemento`)}
            else                        {Notificar('Conc', Funcao, `Foram removidos ${Acao} elementos`)}
            return Resultado
        }

        

        /*LIMPAR TERMINAL*/
        function LimparLog(Aviso, Tamanho){
            let Funcao = 'LimparLog'

            /*Erro*/  if(!isNaN(Tamanho) && Tamanho == undefined) return Notificar('Warn', Funcao, "Numero", 'Tamanho', Tamanho)

            if(isNaN(Tamanho)){Tamanho = 100}
            for(i=0; i < Tamanho; i++){console.log('')}
            if(Aviso){console.log('O Terminal foi limpo')}
            
            /*Conclusao*/
            return true
        }



        /*COMO USAR AS FUNÇÕES*/
        function HowToUse(){
            console.log('Versão atual: v'+versao+' de '+Pub+' by Zienaps')
            console.log('Veja sobre a NPM aqui: https://zienaps.neocities.org/cqs-uteis.html')
            
            /*Conclusao*/
            return true
        }




    //VERSÃO 1.1.0
        /*SORTEIO COM CHANCES*/
        function chance(Valor, Chance, Acompanhar){
            let Funcao = 'chance'
            let ValorTam = Valor.length
            let ChanceTam = Chance.length
            let ChanceTotal = 0
            let AcumChance = []
            let sorteio
            let PosGanhou
            if(Acompanhar) CLog++

            if(ValorTam == ChanceTam){
                for(i=0; i < ChanceTam; i++){
                    ChanceTotal = ChanceTotal + Chance[i];                          if(Acompanhar){console.log('Chance acumulada: (+ '+Chance[i]+') '+ChanceTotal)}
                    AcumChance.push(ChanceTotal);                                   if(Acompanhar){console.log('    Vetor de chances: '+AcumChance)}
                }

                sorteio = randomize(0, ChanceTotal, 10);                            if(Acompanhar){console.log('Sorteio: '+sorteio)}

                for(i=0; i < ChanceTam; i++){
                    let h = i-1
                    let AcumChanceMen = AcumChance[h]
                    if(!AcumChanceMen){AcumChanceMen = 0}                           if(Acompanhar){console.log('Verificação atual: ['+i+'] '+AcumChanceMen+' - '+AcumChance[i])}
                    if(AcumChanceMen <= sorteio && AcumChance[i]> sorteio){
                        PosGanhou = i;                                              if(Acompanhar){console.log('    Posição que ganhou: '+i)}
                    } else{                                                         if(Acompanhar){console.log('    Posição fora de lugar: '+i)}}
                }

                /*Conclusao*/
                let Acao = Chance[PosGanhou] / ChanceTotal
                Notificar('Conc', Funcao, `Foi sorteado um elemento que tinha ${Math.round(Acao*100*100)/100}% de chance`)
                return Valor[PosGanhou]
            } else{/*Erro*/  return Notificar('Warn', Funcao, "Tamanho de 'Chance' não é igual ao de 'Valor' Valor tem "+ValorTam+" elemento(s) enquanto Chance tem "+ChanceTam+" elemento(s)", 'Chance/Valor', Chance+"/"+Valor)}
        }



        /*SEQUENCIA*/
        function sequencia(Max, Min, Espaco){
            let Funcao = 'sequencia'

            /*Erro*/  if(!isNaN(Max))                        return Notificar('Warn', Funcao, "Numero", 'Max', Max)
            /*Erro*/  if(!isNaN(Min)    && Min != undefined) return Notificar('Warn', Funcao, "Numero", 'Min', Min)
            /*Erro*/  if(!isNaN(Espaco) && Min != undefined) return Notificar('Warn', Funcao, "Numero", 'Espaco', Espaco)
            /*Erro*/  if(Max < Min) return Notificar('Warn', Funcao, "'Min' não pode ser menor que 'Max' (Possivelmente tolerado futuramente)", 'Min/Max', Min+"/"+Max)
            /*Info*/  if(Max-Min < Espaco)                          Notificar('Info', Funcao, "'Espaco' é maior que petição. Vetor virá vazio", 'Espaco', Espaco)

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

            /*Conclusao*/
            let Acao = Sequencia.length
            if(Acao >= -1 && Acao <= 1) {Notificar('Conc', Funcao, `Foi criado um vetor com ${Acao} elemento`)}
            else                        {Notificar('Conc', Funcao, `Foi criado um vetor com ${Acao} elementos`)}
            return Sequencia
        }




    //VERSAO 1.2.0
        /*TRAZER TAMANHO DO MêS*/
        function mesTamanho(Mes, Ano){
            let Funcao = 'mesTamanho'
            /*Erro*/  if(Mes == 2 && Ano == undefined) return Notificar('Warn', Funcao, "Necessário ano para buscar dias de Fevereiro", 'Ano', Ano)
            /*Info*/  if(Mes != 2 && Ano != undefined) return Notificar('Info', Funcao, "Não é necessário colocar Ano quando não é Fevereiro")

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
			
            /*Erro*/  if(Tamanho == 0) return Notificar('Warn', Funcao, "Valor citado não é mês", 'Mes', Mes)

            /*Conclusao*/
            Notificar('Conc', Funcao, `Ação feita`)
            return Tamanho
        }



        /*TRAZER NOME DO MÊS*/
        function mesNome(Mes, Tipo, Lingua){
            let Funcao = 'mesNome'
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

            /*Erro*/  if(LinguaA != 'PT' && Lingua != 'EN') return Notificar('Warn', Funcao, "Lingua não disponível no momento", 'Lingua', Lingua)
            /*Erro*/  if(Nome == '') return Notificar('Warn', Funcao, "Não foi encontrado o tipo "+Tipo, 'Tipo', Tipo)

            /*Conclusao*/
            Notificar('Conc', Funcao, `Foi removido ${Acao} elemento`)
            return Nome
        }



        /*BUSCAR VALOR DE DATA*/
        function dataBuscar(Data, Busca){
            let Funcao = 'dataBuscar'
            let data = new Date(Data)
            let dia = data.getDate()
            let semana = data.getDay()+1
            let mes = data.getMonth()+1
            let mess = mesNome(mes, 'Grande', 'PT')
            let ano = data.getFullYear()
            let hoje = new Date([ano, mes, dia])
            let hora = data.getHours()
            let minuto = data.getMinutes()
            let segundo = data.getSeconds()
            let milis = data.getMilliseconds()
            let TMilis = Date.now()
            let TSegundo = TMilis / 1000
            let TMinuto = TMilis / 1000 / 60 
            let THora  = TMilis / 1000 / 60 / 60
            let TDia  = TMilis / 1000 / 60 / 60 / 24

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

            /*Erro*/  if(Pedido == '') return Notificar('Warn', Funcao, "Busca não encontrada", 'Busca', Busca)

            /*Conclusao*/
            Notificar('Conc', Funcao, `Ação feita`)
            return Pedido
        }



        /*NOTIFICAR LOG*/
        function Checar(Tipo){
            if(Tipo == undefined) Tipo = ''
            let Tipoa = Tipo
            let Hoje = new Date()
            if(Tipoa == 'inicio'){console.log(`${dataBuscar(Hoje, 'hora')}:${dataBuscar(Hoje, 'minuto')}:${dataBuscar(Hoje, 'segundo')} - [cqs-uteis diz]: O código iniciou`); return false}
            if(Tipoa == 'fim'){console.log(`${dataBuscar(Hoje, 'hora')}:${dataBuscar(Hoje, 'minuto')}:${dataBuscar(Hoje, 'segundo')} - [cqs-uteis diz]: O código finalizou`); return false}
            if(Tipoa != 'inicio' && Tipoa != 'fim') console.log(`${dataBuscar(Hoje, 'hora')}:${dataBuscar(Hoje, 'minuto')}:${dataBuscar(Hoje, 'segundo')} - [cqs-uteis diz]: Check-up '${Tipo}' alcançado`)
        
            /*Conclusao*/
            return true
        }




    //VERSAO 1.3.0
        /*SOMATÓRIA DE ARRAY*/
        function somar(Vetor){
            let Funcao = 'somar'
            /*Erro*/ if(Vetor[0] == undefined) return Notificar('Warn', Funcao, 'Vetor', 'Vetor', Vetor)
            
            let VetorTam = Vetor.length
            let Result = 0

            for(i=0; i<VetorTam; i++){
                Atual = Vetor[i]
                if(!Number(Atual)) Atual = 0
                Result = Result + Atual
            }

            /*Conclusao*/
            Notificar('Conc', Funcao, `Foi removido ${Acao} elemento`)
            return Result
        }

        

        /*ADICIONAR EM CERTO LOCAL*/
        function adicionar(Vetor, Posicao, Add){
            let Funcao = 'adicionar'
            /*Erro*/ if(Vetor[0] == undefined)    return Notificar('Warn', Funcao, 'Vetor', 'Vetor', Vetor)
            /*Erro*/ if(Posicao > Vetor.length+1) return Notificar('Warn', Funcao, `Posição deve existir no vetor citado`, 'Posicao', Posicao)
            /*Erro*/ if(Add == undefined)         return Notificar('Warn', Funcao, `Necessário citar o valor a adicionar`, 'Add', Add)

            let Fim = []
            let VetorTam = Vetor.length

            for(i=0; i < VetorTam; i++){
                if(i == Posicao){Fim.push(Add)}
                else{
                    if(i > Posicao) Fim.push(Vetor[i-1])
                    if(i < Posicao) Fim.push(Vetor[i])
                }
            }

            /*Conclusao*/
            let Acao = Posicao
            Notificar('Conc', Funcao, `Foi adicionado um elemento na posição ${Acao}`)
            return Fim
        }



        /*REMOVER CERTA POSICAO*/
        function remover(Vetor, Posicao){
            let Funcao = 'remover'
            /*Erro*/ if(Vetor[0] == undefined)  return Notificar('Warn', Funcao, 'Vetor', 'Vetor', Vetor)
            /*Erro*/ if(Posicao > Vetor.length) return Notificar('Warn', Funcao, `Posição deve existir no vetor citado`, 'Posicao', Posicao)

            let Fim = []
            let VetorTam = Vetor.length

            for(i=0; i < VetorTam; i++){
                if(i != Posicao) Fim.push(Vetor[i])
            }

            /*Conclusao*/
            let Acao = Posicao
            Notificar('Conc', Funcao, `Foi removido o elemento da posição ${Acao}`)
            return Fim
        }



        /*SUBSTITUIR UMA POSICAO*/
        function substituir(Vetor, Posicao, Add){
            let Funcao = 'substituir'
            /*Erro*/ if(Vetor[0] == undefined)  return Notificar('Warn', Funcao, 'Vetor', 'Vetor', Vetor)
            /*Erro*/ if(Posicao > Vetor.length) return Notificar('Warn', Funcao, `Posição deve existir no vetor citado`, 'Posicao', Posicao)
            /*Erro*/ if(Add == undefined)       return Notificar('Warn', Funcao, `Necessário citar novo valor`, 'Add', Add)

            let Fim = []
            let VetorTam = Vetor.length

            for(i=0; i<VetorTam; i++){
                if(i == Posicao) Fim.push(Add)
                if(i != Posicao) Fim.push(Vetor[i])
            }

            /*Conclusao*/
            let Acao = Posicao
            Notificar('Conc', Funcao, `Foi substuído o elemento da posição ${Acao}`)
            return Fim
        }



        /*ADICIONAR COM BASE EM UMA BUSCA*/
        function acompanhar(Vetor, Busca, Adicionar, Local){
            let Funcao = 'acompanhar'
            /*Erro*/  if(Vetor[0] == undefined)  return Notificar('Warn', Funcao, 'Vetor', 'Vetor', Vetor)
            /*Erro*/  if(Busca == undefined)     return Notificar('Warn', Funcao, `Necessário citar o valor a ser pesquisado`, 'Busca', Busca)
            /*Erro*/  if(Adicionar == undefined) return Notificar('Warn', Funcao, `Necessário citar o valor a adicionar`, 'Adicionar', Adicionar)
            /*Aviso*/ if(Local = undefined)             Notificar('Info', Funcao, `Local padronizado a 'depois'`)
            /*Erro*/  if(Local != undefined && (Local.toLowerCase() == 'antes' || Local.toLowerCase() == 'depois')) return Notificar('Warn', Funcao, `Não existe saída para valor citado em Local`, 'Local', Local)

            let VetorTam = Vetor.length
            let Fim = []
            let Achou = 0
            
            let Lugar = 'depois'
            if(Local) Local = Local.toLowerCase()
            if(Local == 'antes') Lugar = 'antes'
            

            for(i=0; i<VetorTam; i++){
                if(Vetor[i] == Busca){
                    if(Lugar == 'depois'){
                        Fim.push(Vetor[i])
                        Fim.push(Adicionar)
                        Achou++
                    }
                    if(Lugar == 'antes'){
                        Fim.push(Adicionar)
                        Fim.push(Vetor[i])
                    }
                } else{
                    Fim.push(Vetor[i])
                }
            }

            /*Conclusao*/
            let Acao = Achou
            if(Acao >= -1 && Acao <= 1) {Notificar('Conc', Funcao, `Foi adicionado ${Acao} elemento`)}
            else                        {Notificar('Conc', Funcao, `Foram adicionados ${Acao} elementos`)}
            return Fim
        }

        

        /*TRAZER POSIÇÕES DE VALORE ENCONTRADOS*/
        function localizar(Vetor, Busca){
            let Funcao = 'localizar'
            /*Erro*/ if(Vetor[0] == undefined) return Notificar('Warn', Funcao, 'Vetor', 'Vetor', Vetor)
            /*Erro*/ if(Busca == undefined)    return Notificar('Warn', Funcao, `Necessário citar valor a buscar`, 'Busca', Busca)

            let VetorTam = Vetor.length
            let Fim = []
            
            for(i=0; i<VetorTam; i++){
                if(Vetor[i] == Busca) Fim.push(i)
            }

            /*Conclusao*/
            let Acao = Fim.length
            if(Acao >= -1 && Acao <= 1) {Notificar('Conc', Funcao, `Foi encontrado ${Acao} elemento`)}
            else                        {Notificar('Conc', Funcao, `Foram encontrados ${Acao} elementos`)}
            return Fim
        }



        /*SUBIR/DESCER DECIMAIS DE VALORES*/
        function desrepetir(Vetor, Adicao, Direcao){
            let Funcao = 'desrepetir'
            let AteAqui = Math.trunc((1/VetorTam) * 1000) / 1000
            /*Erro*/  if(Vetor[0] == undefined) return Notificar('Warn', Funcao, 'Vetor', 'Vetor', Vetor)
            /*Aviso*/ if(Adicao > AteAqui)             Notificar('Info', Funcao, `Valor de adicao é maior que o recomendado (${AteAqui}). Pode ser que valores se repitam`, 'Adicao', Adicao)

            let VetorTam = Vetor.length
            let Fim = []
            let Limitador = 1/VetorTam
            let Diferenca = Vetor[0] - Vetor[VetorTam-1]
            Adicao = Number(Adicao)
            Direcao = Direcao.toLowerCase()

            if(Direcao == 'crescente')   Direcao = 'cima'
            if(Direcao == 'decrescente') Direcao = 'baixo'

            if(!Direcao){
                if(Diferenca < 0) Direcao = 'cima'
                if(Diferenca > 0) Direcao = 'baixo'
            }

            if(!Adicao){Adicao = Limitador}

            for(i=0; i<VetorTam; i++){
                let VetorAgr = []

                for(j=0; j<i; j++){
                    VetorAgr.push(Vetor[j])
                }


                let Repetiu = repete(Vetor[j], VetorAgr)
                let Add = 0

                if(Direcao == 'cima' ) Add = Adicao * Repetiu
                if(Direcao == 'baixo') Add = Adicao * Repetiu * (-1)

                let Result = Number(Vetor[j]) + Add
                Fim.push(Result)
            }

            /*Conclusao*/
            let Comparar = unificar(Vetor)
            let Mudado = Vetor.length - Comparar.length
            let Acao = Mudado
            if(Acao >= -1 && Acao <= 1) {Notificar('Conc', Funcao, `Foi modificado ${Acao} elemento`)}
            else                        {Notificar('Conc', Funcao, `Foram modificados ${Acao} elementos`)}
            return Fim
        }



        /*VETOR DO MENOR AO MAIOR*/
        /*Alias*/   function menor(Vetor, Posicao){return crescente(Vetor, Posicao)}
        function crescente(Vetor, Posicao){
            let Funcao = 'crescente'
            /*Erro*/ if(Vetor[0] == undefined) return Notificar('Warn', Funcao, 'Vetor', 'Vetor', Vetor)

            let VetorValidos = []
            let VetorTam1 = Vetor.length
            let Fim = []

            for(i=0; i<VetorTam1; i++){
                let Numero = Number(Vetor[i])
                if(!Numero){}
                else{
                    VetorValidos.push(Vetor[i])
                }
            }


            let VetorTam2 = VetorValidos.length
            let VetorOrg = VetorValidos

            for(i=0; i<VetorTam2; i++){
                let Atual = Math.min(...VetorOrg)
                Fim.push(Atual)

                let Pos = VetorOrg.indexOf(Atual)
                VetorOrg.splice(Pos, 1)
            }

            /*Conclusao*/
            Notificar('Conc', Funcao, `Foi removido ${Acao} elemento`)
            if(!Posicao) return Fim
            if( Posicao) return Fim[Posicao-1]
        }



        /*VETOR DO MAIOR AO MENOR*/
        /*Alias*/   function maior(Vetor, Posicao){return decrescente(Vetor, Posicao)}
        function decrescente(Vetor, Posicao){
            let Funcao = 'decrescente'
            /*Erro*/ if(Vetor[0] == undefined) return Notificar('Warn', Funcao, 'Vetor', 'Vetor', Vetor)

            let VetorValidos = []
            let VetorTam1 = Vetor.length
            let Fim = []

            for(i=0; i<VetorTam1; i++){
                let Numero = Number(Vetor[i])
                if(!Numero){}
                else{
                    VetorValidos.push(Vetor[i])
                }
            }


            let VetorTam2 = VetorValidos.length
            let VetorOrg = VetorValidos

            for(i=0; i<VetorTam2; i++){
                let Atual = Math.max(...VetorOrg)
                Fim.push(Atual)

                let Pos = VetorOrg.indexOf(Atual)
                VetorOrg.splice(Pos, 1)
            }

            /*Conclusao*/
            Notificar('Conc', Funcao, `Foi removido ${Acao} elemento`)
            if(!Posicao) return Fim
            if( Posicao) return Fim[Posicao-1]
        }



        /*CORTAR TEXTO*/
        function cortar(Texto, Inicio, Caracteres, TextoFinal, Substituir){
            Texto = ''+Texto
            let Funcao = 'cortar'
            /*Erro*/ if(Inicio == undefined)     return Notificar('Warn', Funcao, `Necessário citar início do corte`, 'Inicio', Inicio)
            /*Erro*/ if(Caracteres == undefined) return Notificar('Warn', Funcao, `Necessário citar a quantia de caracteres a manter`, 'Caracteres', Caracteres)

            let Comeca = Number(Inicio)
            let Termina = Comeca + Number(Caracteres)
            let TextoFinalTam = 0
            let Fim = ''

            if(TextoFinal) TextoFinalTam = TextoFinal.length
            if(!Substituir){TextoFinal = ''; TextoFinalTam = 0}
            Termina = Termina - TextoFinalTam

            let TextoV = Texto.split("")
            
            for(cc=Comeca; cc<Termina; cc++){
                if(TextoV[cc]){
                    let Letra = TextoV[cc]
                    Fim = Fim + Letra
                }
            }

            if(Fim != Texto) Fim = Fim + TextoFinal

            /*Conclusao*/
            let Acao = Vetor.length - Fim.length
            if(Acao >= -1 && Acao <= 1) {Notificar('Conc', Funcao, `Foi removido ${Acao} carácter`)}
            else                        {Notificar('Conc', Funcao, `Foram removidos ${Acao} caracteres`)}
            return Fim
        }



        /*MANDAR PLURAL*/
        function textoNumero(Quantidade, SeSingular, SePlural){
            let Funcao = 'textoNumero'
            /*Erro*/ if(Quantidade == undefined) return Notificar('Warn', Funcao, `Necessário adicionar quantidade`, 'Quantidade', Quantidade)

            let Enviar = 'Plural'
            let Fim = ''
            if( Quantidade >= -1 &&
                Quantidade <=  1) Enviar = 'Singular'
            
            if(Enviar == 'Singular') Fim = SeSingular
            if(Enviar == 'Plural'  ) Fim = SePlural

            /*Conclusao*/
            Notificar('Conc', Funcao, `Ação feita`)
            return Fim
        }



        /*MANDAR GENERO*/
        function textoGenero(Genero, SeMasculino, SeFeminino){
            let Funcao = 'textoGenero'
            /*Erro*/ if(Genero == undefined) return Notificar('Warn', Funcao, `Necessário adicionar Genero`, 'Genero', Genero)

            let Fim = []
            let Enviar = 'Masculino'

            Genero = Genero.toLowerCase()
            if( Genero == 'feminino' ||
                Genero == 'fem' ||
                Genero == 'f') Enviar = 'Feminino'
            
            if(Enviar == 'Masculino') Fim = SeMasculino
            if(Enviar == 'Feminino' ) Fim = SeFeminino 

            let Acao =1
            if(ConfigUsos){ if(Acao >= -1 && Acao <= 1) {console.log('[textoGenero: Concluded]: Ação feita')}}

            return Fim
        }



        /*MANDAR TEXTO E PLURAL*/
        /*Alias*/   function textoNumeroGenero(Genero, Quantidade, MascSing, MascPlur, FemSing, FemPlur){
                      return textoGeneroNumero(Genero, Quantidade, MascSing, MascPlur, FemSing, FemPlur)
                    }
        function textoGeneroNumero(Genero, Quantidade, MascSing, MascPlur, FemSing, FemPlur){
            let Funcao = 'textoGeneroNumero'
            /*Erro*/ if(Genero == undefined)     return Notificar('Warn', Funcao, `Necessário adicionar Genero`, 'Genero', Genero)
            /*Erro*/ if(Quantidade == undefined) return Notificar('Warn', Funcao, `Necessário adicionar Quantidade`, 'Quantidade', Quantidade)

            let Enviar1 = 'Masculino'
            let Enviar2 = 'Plural'
            let Fim = ''
            
            Genero = Genero.toLowerCase()
            if( Genero == 'feminino' ||
                Genero == 'fem' ||
                Genero == 'f') Enviar1 = 'Feminino'
            
            if( Quantidade >= -1 &&
                Quantidade <=  1) Enviar2 = 'Singular'
            
            if(Enviar1 == 'Masculino' && Enviar2 == 'Singular') Fim = MascSing
            if(Enviar1 == 'Masculino' && Enviar2 == 'Plural'  ) Fim = MascPlur
            if(Enviar1 == 'Feminino'  && Enviar2 == 'Singular') Fim = FemSing
            if(Enviar1 == 'Feminino'  && Enviar2 == 'Plural'  ) Fim = FemPlur

            /*Conclusao*/
            Notificar('Conc', Funcao, `Ação feita`)
            return Fim
        }



        /*ORGANIZAR VETOR EM ALFABETICA*/
        function alfabetica(Vetor, Ordem, Acompanhamento){
            let Funcao = 'alfabetica'
            /*Erro*/  if(Vetor[0] == undefined) return Notificar('Warn', Funcao, 'Vetor', 'Vetor', Vetor)
            /*Erro*/  if(Acompanhamento != undefined && Acompanhamento[0]) return Notificar('Warn', Funcao, `Vetor`, 'Acompanhamento', Acompanhamento)
            /*Aviso*/ if(Ordem != undefined && Ordem != 'decrescente')            Notificar('Info', Funcao, `Ordem reajustada para 'crescente'`)

            let Tamanhos = []
            let Cortes = []
            let Atual = []
            let Corte = []
            let All = []
            let Fim = []
            let VetorTam = Vetor.length
            let Acomp = Acompanhamento
            let AcompTam = Acomp.length
            let Acompanha = true
            let MaiorLetras = 0
            Ordem = Ordem.toLowerCase()

            if(!AcompTam) Acompanha = false
            if(!Ordem || Ordem != 'decrescente') Ordem == 'crescente'
            
            for(i=0; i<VetorTam; i++){
                let Agora = Vetor[i]
                let Tam = Agora.length
                let Name = Agora.split("")
                
                Tamanhos.push(Tam)
                Cortes.push(Name)
            }
            
            MaiorLetras = decrescente(Tamanhos, 1)
            
            for(j=0; j<Cortes.length; j++){
                Atual = Cortes[j]
                let AtualTam = Atual.length
                
                for(k=0; k<AtualTam; k++){
                    Atual[k] = Atual[k].toLowerCase()
                    
                    Atual[k] = Atual[k].normalize("NFD").replace(/[^a-zA-Zs]/g, "")
                    
                    if(Atual[k] == 'a') Atual[k] = 1
                    if(Atual[k] == 'b') Atual[k] = 2
                    if(Atual[k] == 'c') Atual[k] = 3
                    if(Atual[k] == 'd') Atual[k] = 4
                    if(Atual[k] == 'e') Atual[k] = 5
                    if(Atual[k] == 'f') Atual[k] = 6
                    if(Atual[k] == 'g') Atual[k] = 7
                    if(Atual[k] == 'h') Atual[k] = 8
                    if(Atual[k] == 'i') Atual[k] = 9
                    if(Atual[k] == 'j') Atual[k] = 10
                    if(Atual[k] == 'k') Atual[k] = 11
                    if(Atual[k] == 'l') Atual[k] = 12
                    if(Atual[k] == 'm') Atual[k] = 13
                    if(Atual[k] == 'n') Atual[k] = 14
                    if(Atual[k] == 'o') Atual[k] = 15
                    if(Atual[k] == 'p') Atual[k] = 16
                    if(Atual[k] == 'q') Atual[k] = 17
                    if(Atual[k] == 'r') Atual[k] = 18
                    if(Atual[k] == 's') Atual[k] = 19
                    if(Atual[k] == 't') Atual[k] = 20
                    if(Atual[k] == 'u') Atual[k] = 21
                    if(Atual[k] == 'v') Atual[k] = 22
                    if(Atual[k] == 'w') Atual[k] = 23
                    if(Atual[k] == 'x') Atual[k] = 24
                    if(Atual[k] == 'y') Atual[k] = 25
                    if(Atual[k] == 'z') Atual[k] = 26
                    if(!Number(Atual[k])) Atual[k] = 0
                }
                Corte.push(Atual)
                
                let Atu = []
                Atu.push(Vetor[j])
                Atu.push(Corte[j])
                if(Acompanha) Atu.push(Acomp[j])
                
                All.push(Atu)
            }
            
            for(m=0; m<VetorTam; m++){
                let Ver = All[m]
                let Vet1 = Ver[0]
                let Vet2 = Ver[1]
                let VetTam = Vet2.length
                let Value = ''
                
                for(n=0; n<MaiorLetras; n++){
                    if(!Vet2[n]){Value = Value+'00'}
                    else{
                        if(Vet2[n] < 10) Value = Value+'0'
                        let agr = Vet2[n].toString()
                        Value = Value+agr
                    }
                }
                Fim.push([Vetor[m], Value, Acomp[m]])
            }

            let Final = undefined
            let Nomes = []
            let Valores = []
            let Acompanhar = []
            for(o=0; o<VetorTam; o++){
                let agr = Fim[o]
                Nomes.push(agr[0])
                Valores.push(agr[1])
                if(Acompanhar) Acompanhar.push(agr[2])
            }
            
            if(Ordem == 'crescente'){
                                Final  = organizar(Valores, 'crescente', Nomes)
                if(Acompanhar)  Final2 = organizar(Valores, 'crescente', Acompanhar)
            }
            
            if(Ordem == 'decrescente'){
                                Final  = organizar(Valores, 'decrescente', Nomes)
                if(Acompanhar)  Final2 = organizar(Valores, 'decrescente', Acompanhar)
            }

            /*Conclusao*/
            let Acao = Vetor.length
            if(Acao >= -1 && Acao <= 1) {Notificar('Conc', Funcao, `Foi organizado ${Acao} elemento`)}
            else                        {Notificar('Conc', Funcao, `Foram organizados ${Acao} elementos`)}
            if(!Acomp) return Final[1]
            if( Acomp) return [Final[1], Final2[1]]
        }


        /*ORGANIZAR UM VETOR E UM ACOMPANHAMENTO*/
        function organizar(Vetor, Ordem, Acompanhamento){
            let Funcao = 'organizar'
            /*Erro*/ if(Vetor[0] == undefined)          return Notificar('Warn', Funcao, 'Vetor', 'Vetor', Vetor)
            /*Erro*/ if(Acompanhamento[0] == undefined) return Notificar('Warn', Funcao, `Vetor`, 'Acompanhamento', Acompanhamento)

            let Acomp = true
            let VetorTam = Vetor.length
            let Limitador = 1/VetorTam
            let VetorBase
            let VetorBase2
            let VetorA = []
            let VetorB = []
            Ordem = Ordem.toLowerCase()

            if(!Acompanhamento) Acomp = true

            if(Ordem == 'crescente')   VetorBase = desrepetir(Vetor, Limitador, 'cima' )
            if(Ordem == 'decrescente') VetorBase = desrepetir(Vetor, Limitador, 'baixo')

            if(Ordem == 'crescente'  ) VetorBase2 = crescente(VetorBase)
            if(Ordem == 'decrescente') VetorBase2 = decrescente(VetorBase)


            for(e=0; e<VetorTam; e++){
                let Lugar = VetorBase.indexOf(VetorBase2[e])

                          VetorA.push(Vetor[Lugar])
                if(Acomp) VetorB.push(Acompanhamento[Lugar])
            }

            /*Conclusao*/
            let Acao = Acompanhamento.length
            if(Acao >= -1 && Acao <= 1) {Notificar('Conc', Funcao, `Foi organizado ${Acao} elemento`)}
            else                        {Notificar('Conc', Funcao, `Foram organizados ${Acao} elementos`)}
            if(!Acomp) return VetorA
            if( Acomp) return [VetorA, VetorB]
        }



        /*COLUNA PARA VETOR*/
        function colunaParaVetor(Aninhamento){
            let Funcao = 'colunaParaVetor'
            /*Erro*/ if(Vetor[0] == undefined) return Notificar('Warn', Funcao, 'Vetor', 'Aninhamento', Vetor)
            for(i=0; i<Aninhamento.length; i++){
                let VetorA = Vetor[i]
                /*Erro*/ if(VetorA[0] == undefined) return Notificar('Warn', Funcao, 'Parâmetro Aninhamento deve conter somente vetor', 'Aninhamento['+i+']', VetorA)
            }

            let Vetores = Aninhamento.length
            let VetoresTams = []
            let Fim = []
            let MaiorVetor

            for(i=0; i<Vetores; i++){
                let Ver = Aninhamento[i].length
                VetoresTams.push(Ver)
            }

            MaiorVetor = decrescente(VetoresTams, 1)


            for(i=0; i<MaiorVetor; i++){
                let Atual = Aninhamento[i]
                let add = []

                for(j=0; j<Vetores; j++){
                    let Adic = Aninhamento[j]
                    add.push(Adic[i])
                }
                Fim.push(add)
            }

            /*Conclusao*/
            let Acao = Fim.length
            if(Acao >= -1 && Acao <= 1) {Notificar('Conc', Funcao, `Foi criado ${Acao} vetor`)}
            else                        {Notificar('Conc', Funcao, `Foram criados ${Acao} vetores`)}
            return Fim
        }

        

        /*TRAZER ESPAÇO*/
        function a(Quantidade){
            let Texto = ' '
            let Fim = ''
            Quantidade = Number(Quantidade)
            if(!Quantidade) Quantidade = 1

            for(i=0; i<Quantidade; i++){
                Fim = Fim + Texto
            }

            /*Conclusao*/
            let Acao = Vetor.length - Fim.length
            if(Acao >= -1 && Acao <= 1) {Notificar('Conc', Funcao, `Adicionado espaço especial`)}
            else                        {Notificar('Conc', Funcao, `Adicionado um espaço especial de ${Acao} caracteres`)}
            return Fim
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
    Checar,
    somar,
    adicionar,
    remover,
    substituir,
    acompanhar,
    localizar,
    desrepetir,
    crescente, menor,
    decrescente, maior,
    alfabetica,
    organizar,
    colunaParaVetor,
    Config,
    cortar,
    textoNumero,
    textoGenero,
    textoGeneroNumero, textoNumeroGenero,
    a
}