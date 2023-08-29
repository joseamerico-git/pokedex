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

# O que é CDN para que serve? 
É uma rede de distribuição de conteúdo
Um grupo de servidores que disponibilizam conteúdos de internet com rapidez e segurança.

# O que significa
Das ferramentas
- versão beta -> Uma versão de testes -> sujeito a falhasdo
- versão lts das ferramentas -> suporte de longo tempo


## Dominando o Protocolo HTTP

Integrando a nossa aplicação pokedex com a api 

O que uma api?
 É um servidor que nos serve dados não deixa de ser um web-server

Enquanto o html traz semantica
O css estiliza nossas informações 

# Já na api(s) trazem infomações JSON etc...

# Requisições HTTP(cliente -> servidor -> processa -> resposta)

Entender quais as sessões de dados para fazer as requisições http

# Quais são as áres das sessões http

 URL:path
 URL -> é composta de ip + path ->caminho de identificação do recurso
 IP  -> É Convertido por um servidor DNS que resolve(converte) os nomes dos domínios
 IP : http://dominio:porta/path

 # Existem vários tipos de solicitação para um servidor

 # Request Method: GET | POST | PUT | DELETE | PATH ...

 GET pega um recurso de uma url

 POS insere um novo item no recurso

 PUT atualiza o recurso passando parametros

 DELETE deleta um recurso passando um id

 PATH 

 https://pokeapi.co/api/v2/pokemon/1
  
 Filtros 
 GET -> query string 
 utiliza ponto de interrogação depois do recurso ? seguido da chave = valor
 
 https://pokeapi.co/api/v2/pokemon??offset=2&limit=3 //paginar os registros 

 ## Entendendo área de dados
-Request  headers -> metadados da nossa requisição

# Headers --> Navegador eu aceito os tipos de dados descritos neste header
# Pode ocorrer que nem sempre o servidor vai responder conforme o solicitado no header
text/html
application/xhtml+xml
application/xml;q=0.9
image/avif
image/webp
image/apng
*/*;q=0.8
application/signed=exchange;v=b3;q=0.0

# Credenciais são essencial para identificar em um header

Dependendo do metodo que estamos utilizando temos o body

O metodo GET não tem body na requisição, pois estamos consultando não vamos inserir nada

Já no metodo POST faz sentido, pois queremos inserir ou alterar informações

# Body        -> corpo da requisição onde passamos os dados 

```
Request Headers
    content-type: application/json;
Body{
    "name":"Teste"
}
```

# Status code -> numero retornado pelo servidor que diz o que aconteceu com nossa requisição

 - status 200 ok
 - status 201 created
 - status 400 erro bad request
 - status 500 erro no servidor


# Uma requisição HTTP é composta de:

- URL 
- Request method
- Request Headers
- Request Body

#  Resposta do servidor pode ou não ter um body 
## Exemplo status-code 201 created

- Status code 
- Response Headers -> diz como esta resposta está configurada
- Response body -> resposta em si 

## Integração do POKEDEX com a poke api

Existem várias formas de fazer requisição com js
utilizaremos o fech Api, já que estão presentes nos navegadores

# Importante 

Quando fazemos uma requisição ela demora x tempo para ser concluida
requisição passa pela rede etc... esse processamento é o que chama-se processamento assincrono as respostas não são imediatas.

Trata-se de uma promessa de uma resposta


fetch(url,) //fetch retorna uma promisse 

# Promisses são interfaces que controlam a interpretação da resposta e dar um destino a elas

# Tratando o resultado de uma Promisse

```
    /* fetch retorna uma promisse
    funcao de calback
    metodo then() suecesso
    metodo catch() fracasso
    finaly() //requisição concluida independente do sucesso ou fracasso
    */

  
    fetch(url).then(function (response) {
        console.log(response)
    }).catch(function (error) {

    }).finally(function () {
        console.log("Requisição concluida")
    })
```

# Precisamos converter o resultado Promisse em JSON
# Evitar calback dentro de calback para evitar complexidade


## Conceito de Promiss

- Quando chamamaos um then() de uma Promisse podemos encadear vários then()(s) em sequência
```

    fech(url).then(function(response){
        return respones.json();
    }).then(function(jsonBody){
        console.log(jsonBody);
    }).catch(function (error) {

    }).finally(function () {
        console.log("Requisição concluida")
    })

```
## Utilizando Arrow functions para enxugar o código e diminuir complexidade

```

     fetch(url)
    .then((response)=>response.json())
    .then((jsonBody)=>console.log(jsonBody))
    .catch((error)=> console.log(error))


```

## Utilizando o debugger

```
    fetch(url)
    .then((response)=>response.json())
    .then((jsonBody)=>{
        debugger  //debugar nossas aplicações 
        console.log(jsonBody)
    })
    .catch((error)=> console.log(error))

```
 
## Transformando nossa lista de pokémon em lista html


## Fazer uma funçao que adiciona os itens da lista em nosso html

## Revisão Parte da transformação de listas em elementos html

O código ficou misturado 
Separando códigos de html dos códigos de consumo da api criamos um arquivo poke-api.js

Nota: Para funcionar esse script do objeto é necessário importa-lo no index.html antes do import do main.js, pois no momento em que for processado o objeto pokeApi deverá estar criado.


Fazer uma requisição para cada detalhe do pokemon várias promisses
types grass poison


























