# Reto #1: ¡Automatizando envolver regalos de navidad!

|Name||||||||Value||||||||
|Key1||||||||value2||||||||
|Key2||||||||value2||||||||
|Key3||||||||value3||||||||

<div style="display: inline;">
    <p align="left"> <a href="challenge_02.md"> << Reto anterior </a> </p>
    <p align="center"> <a href="../"> Principal </a> </p>
    <p align="right"> <a href="challenge_02.md"> Siguiente reto >> </a> </p>
</div>

<div>
    <p align="center">
        <img src="../media/icon_challenge_01.svg" alt="icon" width="300px">
    </p>
</div>

Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.

A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.

El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados. Por ejemplo:

```js
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
"*****\\n*cat*\\n*****",
"******\\n*game*\\n******",
"*******\\n*socks*\\n*******"
] */
```
Como ves, el papel de regalo envuelve el string. Por arriba y por abajo, para no dejar ningún hueco, las esquinas también están cubiertas por el papel de regalo.

***Nota:*** El carácter \n representa un salto de línea.

***¡Ojo!*** Asegúrate que pones el número correcto de * para envolver completamente el string. Pero no demasiados. Sólo los necesarios para cubrir el string.

Ah, y no ***modifiques (mutes) el array original***.

### #Output
```js
function wrapping(gifts) {
    return [];
}
```

<div>
    <p align="left">
        Puede Participar en el reto Aquí: 
        <a href="https://adventjs.dev/es/challenges/2022/1" target="_blank">
            <img alt="Visitar" src="../media/visitar.svg"/>
        </a>
    </p>
</div>

## Soluciones

> **_NOTE:_** La fuente de estas soluciones las estare dejando Aquí: [ChallengeJs Reto 01](project_test%2Fjs%2Fchallenge_01.js) y el archivo con los test esta Aquí: [App Test](project_test%2Fjs%2Fapp.js)

### #Primero
```js
function wrapping(gifts) {
    return gifts.map(function(gift){
        let sideWrap = '*'.repeat( gift.length + 2 );
        return `${sideWrap}\n*${gift}*\n${sideWrap}`;
    })
}
```