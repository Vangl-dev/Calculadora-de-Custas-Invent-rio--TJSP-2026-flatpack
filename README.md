# Calculadora de Custas – SP

Calculadora simples para estimar despesas em inventário, divórcio e partilha de bens no Estado de São Paulo.

Inclui:

* ITCMD (4%)
* Custas judiciais do TJSP
* Emolumentos de cartório

## Executar localmente

Basta abrir:

```
index.html
```

no navegador.

## Construir versão Flatpak

Instalar dependências:

```
sudo pacman -S flatpak flatpak-builder
```

Construir:

```
flatpak-builder build-dir com.calculadora.custas.yml
```

Instalar:

```
flatpak-builder --user --install build-dir com.calculadora.custas.yml
```

Executar:

```
flatpak run com.calculadora.custas
```
