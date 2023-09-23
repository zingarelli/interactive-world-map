# World Population in 2021

[Click here to read the English version of this Readme](#credits)

Projeto que renderiza um mapa do mundo interativo, mostrando o nome do país e sua população ao passar o mouse sobre ele. Cidades com mais de 50.000 habitantes são também são exibidas como círculos no mapa, sendo que os círculos aumentam em razão do tamanho de habitantes.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Mapa Interativo População Mundial 2021**
| :label: Tecnologias | D3, React, SVG
| :rocket: URL         | https://interactive-world-map.vercel.app
| :fire: Curso     | https://www.youtube.com/watch?v=2LhoCfjm8R4

![](https://github.com/zingarelli/svg_smiley_face/assets/19349339/1b6e1592-ae09-4697-a4f1-89ef06fde00d#vitrinedev)

## Créditos 

Este projeto foi baseado nas aulas do curso "Data Visualization with D3, JavaScript, React", criado por [Curran Kelleher](https://www.youtube.com/channel/UCSwd_9jyX4YtDYm9p9MxQqw) e disponível no [Youtube (em inglês)](https://www.youtube.com/watch?v=2LhoCfjm8R4).

## Detalhes do projeto

Este é um projeto desenvolvido em React. 

O componente `<WorldMap />` utiliza [dados de topologia do planeta Terra](https://github.com/topojson/world-atlas) (em formato [TopoJSON](https://en.wikipedia.org/wiki/GeoJSON#TopoJSON)) e de população mundial em 2021 (CSV baseado em [dados de projeção da ONU para 2022](https://population.un.org/wpp/Download/Standard/MostUsed/)) para renderizar um mapa do mundo e sua divisão em países. O mapa é criado em [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG), em conjunto com a biblioteca [D3](https://d3js.org) (funções da [d3-geo](https://github.com/d3/d3-geo)).

Os dados de população estão atrelados a cada país e são exibidos quando a pessoa mantém o mouse sobre um país. Os números seguem o padrão americano, utilizando vírgula como separador de milhares (por exemplo, dois mil será escrito como "2,000").

Este projeto foi atualizado para também mostrar as cidades com mais de 50.000 habitantes, representadas por pequenos círculos azuis no mapa. Os círculos possuem certa opacidade e aumentam em proporção à quantidade de habitantes, fornecendo uma dica visual para aq densidade populacional. Os dados de cidades foi baseado [neste gist](https://gist.github.com/curran/13d30e855d48cdd6f22acdf0afe27286), compilado em outubro de 2019.

![GIF mostrando o mapa e a exibição de nome de país e sua população ao manter o mouse sobre um país](https://github.com/zingarelli/svg_smiley_face/assets/19349339/c0278e4f-b550-4015-9a6f-53ed648af7b9)

## Instalação

O projeto foi criado com o [Vite](https://vitejs.dev).

Após cloná-lo ou baixá-lo, abra um terminal, navegue até a pasta do projeto e rode o comando abaixo para instalar as dependências necessárias.

    npm install

Feito isso, o app pode ser iniciado em modo de desenvolvimento com o seguinte comando:

    npm run dev

O app irá rodar na URL http://127.0.0.1:5173.

---

## Credits

This project was based on the lessons from the course "Data Visualization with D3, JavaScript, React," created by [Curran Kelleher](https://www.youtube.com/channel/UCSwd_9jyX4YtDYm9p9MxQqw) and available on [YouTube](https://www.youtube.com/watch?v=2LhoCfjm8R4).

## Project Details

This is a project developed in React.

The `<WorldMap />` component uses [topology data of planet Earth](https://github.com/topojson/world-atlas) (in [TopoJSON](https://en.wikipedia.org/wiki/GeoJSON#TopoJSON) format) and global population data for 2021 (CSV data based on [UN population projection for 2022](https://population.un.org/wpp/Download/Standard/MostUsed/)) to render a world map with country divisions. The map is created in [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG), with the aid of the [D3](https://d3js.org) library (functions from [d3-geo](https://github.com/d3/d3-geo)).

Population data is linked to each country and is displayed when hovering over a country. Numbers follow the American convention, using a comma as a thousands separator.

This project was updated to also display the cities of the world whose populations is more than 50k. Cities are represented on the map as tiny blue circles. These circles have some opacity and get bigger in proportion to the size of the population, representing a visual cue for population density. Data is based on [this gist](https://gist.github.com/curran/13d30e855d48cdd6f22acdf0afe27286), which was compiled in October 2019.


![GIF showing the map and the rendering of country name and population when hovering over a country](https://github.com/zingarelli/svg_smiley_face/assets/19349339/c0278e4f-b550-4015-9a6f-53ed648af7b9)

## Instalation

This is a React project bootstrapped with [Vite](https://vitejs.dev).

After cloning or downloading this project, open a terminal, navigate to the project's folder and run the following command in order to install all necessary dependencies:

    npm install

After that, you can run the app in development mode with the following command:

    npm run dev

The app will run at http://127.0.0.1:5173.