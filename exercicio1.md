# Exercício 1

- Criar uma aplicação Angular que utilize componentes para representar um livro e seus capítulos
- Criar dois componentes: Livro e Capítulo
- O componente Livro exibirá uma lista de capítulos, e cada capítulo será representado por um componente Capítulo
- O livro deve ter um título e um autor
- Os capítulos devem ter um número e um título

## Exemplo de Visualização

**Título**

*Autor: Fulano*

1. Introducao
1. Desenvolvimento
1. Conclusão

## Exemplo de estrutura

```html
<app-livro titulo="Título" autor="Fulano">
    <app-capitulo numero="1" titulo="Introducao"/>
    <app-capitulo numero="2" titulo="Desenvolvimento"/>
    <app-capitulo numero="3" titulo="Conclusão"/>
</app-livro>
```
