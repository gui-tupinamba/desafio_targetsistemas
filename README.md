# Estágio Target Sistemas

No atual repositório encontra-se as soluções dos desafios propostos no recrutamento.
Fiz os desafios utilizando Javascript


## Soluções
### Questão 1 de 5

Observe o trecho de código abaixo:

    int INDICE = 13, SOMA = 0, K = 0;

    enquanto K < INDICE faça
    {
    	K = K + 1;
    	SOMA = SOMA + K;
    }

    imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?
### Solução: [Resultado da Soma](https://github.com/gui-tupinamba/desafio_targetsistemas/blob/main/soma.js)

### Questão 2 de 5
Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
### Solução: [Fibonacci](https://github.com/gui-tupinamba/desafio_targetsistemas/blob/main/sequencia_fibonacci.js)

### Questão 3 de 5
Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, ___

b) 2, 4, 8, 16, 32, 64, ____

c) 0, 1, 4, 9, 16, 25, 36, ____

d) 4, 16, 36, 64, ____

e) 1, 1, 2, 3, 5, 8, ____

f) 2,10, 12, 16, 17, 18, 19, ____
### Solução: 
- a => o próximo número é 9, pois é uma sequência de números ímpares;
- b => o próximo número é 128, é soma do número por ele mesmo, ou o número multiplicado por 2;
- c => o próximo é 49, podemos ver que é uma sequência de potenciação; 
- d => o próximo é 100, a sequência é a potenciação de números pares em sequência; 
- e => o próximo é 13, a lógica é a sequência de Fibonacci; 
- f => o próximo é 200, a lógica segue pelos números que começam com a letra "d";


### Questao 4 de 5
Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.
Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?
#### Solução: 
- => Ligo o primeiro interruptor, espero alguns minutos, depois o desligo e ligo o segundo interruptor, vou a sala das lâmpadas, se elas estiverem apagadas mas estiver quente é o primeiro interruptor, se caso estiver acesa é o segundo interruptor, se caso estiver apagada e fria é o terceiro interruptor.


### Questão 5 de 5
Escreva um programa que inverta os caracteres de um string.
IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
#### Solução: [String reversa](https://github.com/gui-tupinamba/desafio_targetsistemas/blob/main/reverter_string.js)