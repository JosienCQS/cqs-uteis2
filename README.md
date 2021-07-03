# SOBRE
Versão atual: v1.1 de 3 jul 2021 by Zienaps

# COMO USAR AS FUNÇÕES
## randomize(Min, {Max}, {Dec})
- Peça um número aleatório entre dois extremos. Escolha se quer casas decimais ou não. Você também pode sortear elementos de um vetor
  Sortear um valor [randomize(Min, Max, Dec)]:
   > Min        [Int] = Valor mínimo a ser sorteado
   
   > Max        [Int] = Valor máximo a ser sorteado
   
   > Dec        [Int] (Opc) = Quantidade de casas decimais no resultado (Padrão: Resultado inteiro)
  Exemplo:
   randomize(5, 30.5, 2)
    PROCESSO: [ Sorteio ] 13,27787 >> [ Arred. para Dec casa ] 13.3
    O sistema irá sortear um número entre o Min e o Max e depois arredondará mantendo a quantidade de casas decimais definida em Dec
  Sortear um elemento de um vetor [randomize(Min)]:
   > Min        [Array] = Adicione o vetor com os valores no qual queira ser sorteado
  Exemplo:
   randomize([2, 5, 'B', 'D', 'JOTA'])
    PROCESSO: [ Sorteio ] 3.43543 >> [ Ver posição ] 3 >> [ Trazer posição ] 'D'
    O sistema irá sortear um número aleatório entre 0 e o tamanho do vetor e verá qual o elemento está na posição do valor sorteado. Esse será o resultado

## chance(Valor, Chance, {Acompanhar})
- Sorteie um elemento de um vetor trabalhando em cima de chance
   > Valor      [Array] = Vetor onde estarão os elementos a ser sorteado
   
   > Chance     [Array] = Vetor onde etarão as chances de sorteio de cada elemento
  Exemplo:
   chance(['A', 'B', 'C', 'D', 'E'], [1, 3, 2, 5, 3], false)
    PROCESSO: [ Sorteio ] 8.946 >> [ Procurar em Chance ] 1+3+2+5+3 >> posição[3] >> 'D'
    O sistema irá sortear um valor aleatório e irá ver qual posição caiu nesse peso

## avg(Vetor, {Dec})
- Tire a média dos valores que estão dentro do vetor. Valores não numéricos serão ignorados
   > Vetor      [Array] = Vetor com os valores dentro
   
   > Dec        [Int] (Opc) = Quantidade de casas decimais no resultado (Padrão: floor com todos os dígitos)
  Exemplo:
   avg([1, 5, 2, 7, 'C', 3], 2)
    PROCESSO: [ Remover não-numerais ] 1,5,2,7,3 >> [ Soma tudo ] 18 >> [ Divide pela quantidade de números ] 18/5 = 3.6
    O sistema irá remover os elementos que não for número e tirar uma média de todos os valores restantes

## repete(Valor, Local)
- Verifique quantas vezes tal valor apareceu em um conjunto
   > Valor      [Any]: Qual o valor deve ser verificado
   
   > Local      [Array]: Local onde deve ser verificado
  Exemplo:
   repete(3, [1, 5, 3, 4, 3, 5, 3, 3, 2, 1])
    PROCESSO: [ Deixa somente o valor procurado ] 3,3,3,3 >> [ Verifica o tamanho ] 4
    O sistema verifica quantos elementos tem o mesmo valor do valor procurado e trás quantos encontrou

## sortear(Tamanho, Quantidade, {Repete})
- Crie um vetor com números sorteados, repetidos ou não
   > Tamanho    [Int]: Qual o valor máximo a ser sorteado (será sorteado de 1 até X)
   
   > Quantidade [Int] (Opc): Quantos números devem ser sorteados
   
   > Repete     [Bool] (Opc): Se os números sorteados podem repetir
  Exemplo:
   sortear(30, 3, false)
   PROCESSO: [ Cria um vetor de 1 a 30 ] 1,2,3...29,30 >> [ Sorteia um elemento ] 29 >> [ Remove o elemento do vetor ] 1,2,3...28,30 >> [ Refaz o processo 'Quantidade' vezes ] 13,15 >> [ trás todos os sorteados ] 29,13,15
   O sistema sorteia um número do vetor inicial e, se false, remove-o da lista. Repete o processo várias vezes e depois trás em vetor o resultado

## unificar(Vetor, {Acompanhar})
- Remova valores duplicados de seu vetor permanecendo somente o último elemento repetido
   > Vetor      [Array] = Vetor com os elementos a serem verificados
   
   > Acompanhar [Bool] (Opc) = Se deve trazer em log o processo de verificação (Isso pode atrasar a resposta. Use somente caso queira acompanhar o processo)
  Exemplo:
   unificar([1, 5, 2, 3, 5, 4, 3, 2, 5, 1, 3], false)
    PROCESSO: 1,5,6,2,3,5,4,3,2,5,1,3 >> [ Verifica os termos e exclui se já existe ] >> 6,4,2,4,1,3
    O sistema remove os termos que ele verificar se já existe após ele

## filtragem(Onde, oQue, {Manter}, {Acompanhar})
- Veja se os valores de um vetor estão no segundo vetor e mantenha os que não tiver, ou vice-versa
   > Onde       [Array]: Vetor a verificar os valores. Retornará esse vetor filtrado pelo 'oQue'
   
   > oQue       [Array]: Vetor onde o sistema usará de base para filtrar o primeiro vetor
   
   > Manter     [Bool] (Opc): true caso queira manter somente os valores encontrados (Padrão remove valores encontrados)
   
   > Acompanhar [Bool or \'Impo\'] (Opc): Se deve trazer em log o processo de verificação (Isso pode atrasar a resposta). 'Impo' mostra somente logs importantes
  Exemplo:
  - (remover) filtragem([1, 3, 5, 7, 4, 8, 4, 3, 2, 10, 2, 5], [3, 5, 8])
     PROCESSO: [ Remove o 3 ] 1,5,7,4,8,4,2,1,10,2,5 >> [ Remove o 5 ] 1,7,4,8,4,2,1,10,2 >> [ Remove o 8 ] 1,7,4,4,2,1,10,2
     O sistema verifica se o valor de certo elemento está contido no segundo vetor. Se sim, ele é removido do vetor principal
  - (Manter) filtragem([1, 3, 5, 7, 4, 8, 4, 3, 2, 10, 2, 5], [3, 5, 8], true)
     PROCESSO: [ Destaca os que não for encontrado ] 1,7,4,4,2,10,2 >> [ Remove os destacados ] 3,5,8,3,5
     O sistema verifica se o valor de certo elemento não está contido no segundo vetor. Se não estiver, ele é removido do vetor principal

## LimparLog({Aviso}, {Tamanho})
- [EXCLUSO] Limpe o terminal
   > Aviso      [Bool] (Opc): Se deve ser avisado que a limpeza foi feita após a mesma
   
   > Tamanho    [Int] (Opc): Quantas linhas devem ser adicionadas (Padrão: 100)
  Exemplo:
   LimparLog(true, 20
   PROCESSO: [ Envia 20 linhas vazias ] >> [ Envia mensagem de aviso ] O terminal foi limpo
   O sistema envia simplesmente uma quantidade de linhas vazias para esconder as mensagens

## HowToUse({Descrição}, {Significado}, {Exemplo})
- [EXCLUSO] Veja como usa cada function
   > Descrição  [Bool] (Opc): Se quer ver a descrição das funções
   
   > Significado[Bool] (Opc): Se quer ver o significado de cada parâmetro
   
   > Exemplo    [Bool] (Opc): Se quer ver exemplos de cada função
  Exemplo:
   HowToUse(true, true, false)
   PROCESSO: [ Traz as funções, descrições e significados. Por 'Exemplo' estar false, ela não será mostrada ]
   O sistema irá enviar mensagens no terminal explicando o uso de cada função. Será mostrado somente os parâmetros marcados como true

## Testar(Exclusivos)
- [EXCLUSO] Teste todas as funções ou algumas específicas. Adicione-os em um vetor e mande para a função
   > Exclusivos  [Array] (Opc): Marque, como string, quais funções quer testar (Padrão: Todos)
  Exemplo:
   Testar(['randomize', 'sortear'])
   PROCESSO: [ Roda cada função ]
   O sistema irá testar todas as funções disponíveis no momento, utilizando alguns valores já definidos
