# drcalc-atualizacao-monetaria
Automatização para setar os parâmetros para a correção monetária INPC

Copie o código do script

Vá para o site [drcalc.net](http://drcalc.net/correcao.asp)

Tecle F12, vá para a guia console e cole o código

Copie o código (atualizado) abaixo:
```sh
fetch('https://raw.githubusercontent.com/heraclitothiago/drcalc-atualizacao-monetaria/main/config.js')
    .then(response => response.text())
    .then(text => eval(text))
```
