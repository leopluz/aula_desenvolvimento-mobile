# Desenvolvimento Mobile

Código-fonte produzido durante a aula:

- [projetoangular](projetoangular)

## Exercícios

- [Exercício 1](exercicio1.md)
- [Exercício 2](exercicio2.md)
- [Exercício 3](exercicio3.md)

## Instalação Angular

Necessário ter disponível o NodeJS instalado. Caso não possua, pode ser baixado seu instalador em [nodejs.org](https://nodejs.org).

Comando para instalar a biblioteca Angular

```bash
npm install -g @angular/cli
```

Criação do projeto Angular

```bash
ng new projetoangular
cd projetoangular
```

Inicializar o servidor: 

```bash
ng serve
```

## Adição de módulos no Angular

Instalar biblioteca Angular Material no projeto

```bash
ng add @angular/material
```

## Geração de arquivos para projetos Angular

Geração de Componentes (recomendado usar components/**nome-do-componene**)

```bash
ng generate component nome-do-componente
```

## Criação de projeto para Android a partir do Angular

Instalação dos pacotes do Capacitor

```bash
npm install @capacitor/core @capacitor/cli
npx cap init
```

Adicionar pacotes específicos para Android e iOS (pode ser utilizado somente um deles)

```bash
npm install @capacitor/android
npm install @capacitor/ios
```

Montar a aplicação em formato para publicação (build)

```bash
ng build
```

Alterar a propriedade **webDir** no arquivo **capacitor.config.js**

- Adicionar **\<nomedoprojeto\>/browser**

```javascript
const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'projetoangular',
  webDir: 'dist/projetoangular/browser'
};
```

Adicionar os arquivos referentes à plataforma Android

```bash
npx cap add android
```

Sincronizar os arquivos

```bash
npx cap sync
```

Abrir o projeto Android no Android Studio

```bash
npx cap open android 
```
