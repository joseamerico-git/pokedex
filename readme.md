# SOFTWARE ENGINEER LEAD S3 BANK
RENAN JOHANNSEN

IDÉIA Fazer uma Pokedex mesclando as aulas passadas aplicando as lógicas para implementar.

Site de designer 
[Dribbble](https://dribbble.com/shots)

Listagem dos pokemons 
Detalhes dos pokemons
Consumir a poke api

# Configurando o ambiente

# Instalar VsCode
# Instalar Node.js (npm)
# -g --> global instalar globalmente

npm install -g http-server

# Criar um arquivo html 
como rodar? http-server ./

# Como funcionam as coisas na internet

quando digito um site ex google existe toda uma estrutura por traz de tudo servidores de rede etc...

# Protocolo cliente servidor

servidor --> cliente 1
         --> cliente 2

         No brownser https://dominio

## O Protocolo HTTP é um protocolo cliente servidor

cliente solicita ao --> servidor --> processamento --> resposta
request e response

protocolo --> http
       ip --> dominio
       
# O http-server sobe um servidor na máquina, identifica qual é o arquivo que você está solicitando e mapeia a máquina para quando for solicitado um arquivo na pasta mapeada seja disponibilizado.

http://localhost:8080/teste.html

# Introdução ao HTML (linguagem de marcação)

Html ---> texto com semantica.
sessões para agrupar conteúdos com mesmo significado.

Como aplicar tudo o que vimos nas aulas anteriores para utilizar na internet.

Importante entender as tags htmls e o seu significado.

# CSS --> É o estilo do nosso HTML
Significado da sigla Cascade Style Sheets

## Enquanto que o javascript da a inteatividade, comportamentos, ações, gerar htmls e estilos dinamicamente etc...

Na página o navegador interpreta tudo o head processa a página e depois os comportamentos

No script temos

```
window //objeto que representa nosso brownser manipulação 
document //documento corrente por exemplo nosso index.html

```
## Com o JavaScript impelementamos comportamentos para nossos elementos.

Quando utilizamos react e alguns frameworks estamos trabalhando com essa tread HTML, CSS e JavaScript.

## Criando o Projeto Pokemon

# Adicionando normalize css no projeto

Podem ocorrer diferenças entre estilos dependendo do brownser

# Normalize padronizar os css(s) estilos nos navegadores, já que os diversos navegadores possuem esquemas de estilização distintas

[Normalize.css](https://necolas.github.io/normalize.css/) 
[CDN](https://necolas.github.io/normalize.css/) 

# Importante durante o desenvolvimento é interessante nas ferramentas do desenvolvedor lá no navegador na aba network desabilitar disable cach [x] isso garate que o que estamos vendo é realmente o que estamos programando.

## Ponto chave organização isso é crucial para prosperar no projeto.

criar uma pasta de assets --> html, css, imagens etc..

criar as pastas js e css
dentro de css criar o arquivo global.css
criar main.js e um console.log para teste.

Podemos pegar [fonts](https://fonts.google.com/) no google, no caso roboto

# Aplicando uma técnica chamada Mobile First 
# idéia fazer primerio o estilo pensando em mobile
# de css mobile e para as telas posteriores incrementar css

No devTools do navegador temos aba mobile.

criamos uma session dentro do body e em seguida uma session
criamos uma classe para content para a session

```
    <session class="content">
    
    </session>

    e no global.css

    .content{
        padding:1rm; //não utilizamos pixels, pois o rem que é baseado no tamanho da fonte m (maior)
    }

```
### Adicionando imagens aos pokedex

Organização é a crucial para manter e evoluir a aplicação.
 A propriedade css box-sizing:border-box; //considrar o tamanho total

[Color Picke - Pegar cores da tela](https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg)


[Calcular tamanho de fontes e rem](https://nekocalc.com/px-to-rem-converter)

   

## Após a estilização prencher a lista dinamicamente com JavaScript
#Tornando Nosso Layout Responsivo
Aplicando meedia query css
nosso content

# Melhorando os nossos estilos antes global.css 

Criamos então um arquivo pokedex.css

As partes que erma dos poquemons retiramos do arquivo global.css
e colocamos no pokedex.css

## As partes de meedia query --> Geralmente no dia a usa-se um pré processador de css um SAZ pra fazer e o código fica enxuto.

Por convensão os arquivos media query ficam no final do arquivo

##################################################################

# Resumão para avaliação:

# HTML HyperText Markup Language

# HTTP (Hyper Text Transport Protcolo) é uma forma de comunicação entre máquinas na internet.

# Por interédio de um servidor HTTP os clientes fazem requisição e recebem respostas

Clinte-->servidor-->processamento-->reposta_to_cliente

Para desenvolver o projeto 

npm install -g http-server

Ferramentas VsCode --> Node.js --> http-server

# Para rodar o http-server 

```
    //No terminal
    http-server ./
```
 # Normalize.css padroniza os estilos
 # JavaScript é o que da interatividade, comportamentos e ações para as páginas

 Com JScript podemos inserir html, css dinâmicamente.

 window   --> um objeto que representa nosso brownser (para manipulação)
 document --> representa o documento corrente



#################################################################
















