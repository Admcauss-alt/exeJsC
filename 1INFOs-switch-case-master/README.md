# Estruturas de Decisão [switch-case]

### Como assim... Switch... Case?

* **Outra estrutura de decisão**
  * Praticamente todas as linguagens de programação possuem distintas estruturas de decisão.

**Quando usar?**
- Quando houverem várias alternativas a partir do valor de uma constante/variável.
- É uma lógica fácil e intuitiva.

**Sobre a utilização**
* O comando switch inicia pela definição da variável/constante que escolhe a condição a ser executada. Cada instrução deve conter um valor de comparação (seguida pelos dois pontos ":"), como no exemplo abaixo.
```javascript
let mesDoAno = 1;
switch (mesDoAno) {
  case 1:
    document.write("Janeiro");
    break;
  case 2:
    document.write("Fevereiro");
    break;
}
```
 _Os comandos sempre devem ser finalizados por_
 ```javascript
 break;
 ```
O comando acima escreverá **Janeiro** na tela, pois a primeira linha já atribuiu o valor 1 logo ao criar a let mesDoAno (*let mesDoAno = 1;*).

### IMPORTANTE!!!
Caso o comando _break;_ não seja incluído logo após o comando que será executado atendendo a condição - que nesse caso será _document.write("Janeiro");_ - o programa entrará em todas as condições seguintes, até que encontre um comando _break;_ em alguma das próximas condições.

> _O comando break; para a execução do switch... case, indo para a próxima linha logo após o término das instruções que fazem parte do block switch... case. Ou seja, o programa continua sendo executado, apenas o switch... case que finaliza com o comando break;_

Outro recurso do **switch... case** que vale ser mencionado é a utilização da opção *default*. Esta opção é a opção padrão e o que houver de instrução nela será executado quando as comparações realizadas não forem validadas. Por exemplo:
```javascript
const diaDaSemana = "domingo";
switch (diaDaSemana) {
    case "sábado":
        document.write("Dia de folga!");
        break;
    case "domingo":
        document.write("Dia de folga!");
        break;
    default:
        document.write("Dia de trabalho!");
        break;
}
```
Nesse caso, o resultado será **"Dia de folga!"**. Porém, caso o valor da const _diaDaSemana_ fosse qualquer coisa diferente de _sábado_ ou _domingo_, por exemplo, o programa executaria a opção **default**.

Ainda, considerando o exemplo anterior, é possível que otimizemos o código. Observe que existem dois dias de folga (sábado e domingo). Portanto, como ou um ou outro dia são de folga, e diferente deles é trabalho, podemos otimizar da seguinte forma:
```javascript
const diaDaSemana = "segunda";
switch (diaDaSemana) {
    case "sábado":
    case "domingo":
        document.write("Dia de Folga!");
        break;
    default:
        document.write("Dia de Trabalho!");
        break;
}
```
Esta otimização é equivalente com a utilização do operador OU, que é o caractere "|".
> **_A principal vantagem do switch... case é a facilidade para compreender a sua estrutura, sendo extremamente intuitivo._**

### Exemplos
* [Exemplo 1 - Mês do Ano](exemploSC_01.html)
* [Exemplo 2 - Dia da Semana](exemploSC_02.html)
* [Exemplo 3 - Idade Humana](exemploSC_03.html)


##### Alguns links para estudos complementares

* [Developer.mozilla - Switch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch)
* [W3Schools - JavaScript Switch Statement](https://www.w3schools.com/js/js_switch.asp)
* [DevMedia - JavaScript switch](https://www.devmedia.com.br/javascript-switch/39761)

##### Vídeos de apoio
* [YouTube Dev Aprender - Javascript Tutorial 18 - (Switch..Case)](https://www.youtube.com/watch?v=-11qkJczuqo)
* [YouTube Programando Soluções - Como funciona o Switch Case no Javascript](https://www.youtube.com/watch?v=NsRgcbqt1YI)

##### Dúvidas da comunidade sobre switch... case
* [Stack Overflow - Qual a lógica por trás do switch case no JavaScript?](https://pt.stackoverflow.com/questions/463933/qual-a-l%c3%b3gica-por-tr%c3%a1s-do-switch-case-no-javascript)