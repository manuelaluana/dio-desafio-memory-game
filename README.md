# Desafio Jogo da Memória

O desafio é desenvolver um jogo da memória utilizando emojis!
O objetivo do jogo é encontrar os pares corretos de emojis, caso encontre todos,
receberá uma mensagem de vitória.

## Linguagem de programação utilizada

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Explicando o Sistema

Neste sistema estamos trabalhando com arrays!

Onde:

> Array emojis: É responsavel por armazenar todos pares de emojis utilizados no jogo.

> Array openCards: É responsável por armazenar as duas cartas que foram viradas.

### shuffleEmojis

Esta variavel armazera um **sort()** do array emojis, onde temos uma curta função responsavel por gerar um número aleatorio utilizando **Math.random()** e verificar se ele é **Maior que 0.5**, caso a condição seja verdadeira então o elemento tem peso 2 caso não -1. Fazendo com que os elementos peso 2 vão para frente e os peso -1 vão para trás, criando um efeito de "ordem de chegada.

## Funções e laços

> for: Este laço é responsável por percorrer o Array emojis levando em considertação seu tamanho, para cada elemento percorrido será criado uma 'div', sendo atribuido a ela a classe '.item', nestas 'divs' serão atribuidos os emojis e por fim todas as 'box' geradas serão colocadas na div '.game';

> função handleClick: Toda vez que um elemento for selecionado pelo jogador, deverá ser acionada esta função. Ela é responsável por verificar se a quantidade de cards armazenadas no Array openCards é menor que dois, caso seja verdade ela adicionará a div '.item' a class '.boxOpen' e armazenará no openCards está carta. Ela também irá verificar se a quantidades de elementos do array chegou ao limite de 2 cartas abertas e caso seja verdade ela chamará um setTimeOut com a função checkMatch.

> função checkMatch: Como sugere o nome a função 'checkMatch' tem o objetivo de checar se as duas cartas que foram abetas são **iguas ou não**. Caso sejam iguais, ela adicionará a elas a class '.boxMatch' e fazendo com que as duas cartas permaneçam abertas. Caso contrário, ela irá remover a class '.boxOpen', fazendo com que as cartas se fechem novamente e limpando o array openCards, para que o jogador possa prosseguir até encontrar todos os pares. Quando isso ocorrer, será disparado um 'alert' com uma mensagem parabenizando o jogador.

## Bônus feature: função decayCardsLeft!

Como feature adicional e diferencial do projeto, tomei a liberdade de adicionar um sistema de contagem de quantas
cartas faltam ser viradas para o jogo terminar utilizando a função **decayCardsLeft**.

> função decayCardsLeft: Função responsável por diminuir as cartas que já foram viradas da contagem atual de cartas restantes e mostrar quantas restam ao jogador.

[Projeto original DIO](https://github.com/digitalinnovationone/js-emoji-memory-game);
