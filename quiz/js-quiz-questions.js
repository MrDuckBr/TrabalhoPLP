/* ["DATABASE" - QUESTAO, OPCOES, RESPOSTAS] */
// Array de objetos
// Formato {q: questao, o: alternativas, a: resposta certa}
/* DataBase criado para que a funcao principal do JavaScript possa consultar ,fazendo assim 
com que não seja necessario o uso de um banco de dados para o armazenamento das questoes e suas
respectivas respostas*/

var questions = [ //declaracao da funcao questoes
    {
      q : "O paradigma funcional é definido por:", // "q" sera chamado na funcao principal como questao
      o : [ // "o" lista em forma de cascata a lista,que sera chamada na funcao princippal
        "  É um paradigma de programação que descreve a computação como ações, enunciados ou comandos que mudam o estado (variáveis) de um programa",
        "É um paradigma de programação que faz o uso da lógica matemática.",
        " É um paradigma de programação que usa tipos de dados personalizados,que podem ser criados conforme  necessário",
        "é um paradigma de programação que trata a computação como uma avaliação de funções matemáticas e que evita estados ou dados mutáveis."
      ],
      a : 3 // array começa em 0 (4 opções - 0,1,2,3) ,
      //o "a" e usado para salvar a resposta,onde a posicao no array salva nele equivale a resposta
      //correta
    },
    {
      q : "São linguagens funcionais:",
      o : [
        "Java, Python ,C.",
        "C#,php,haskell",
        "Scheme,Lisp, Clojure",
        "C++ , python ,JavaScript"
      ],
      a : 2
    },
    {
      q : "Laços de repetição em Linguagens Funcionais em geral são feitos:",
      o : [
        "Usando os próprios laços de repetição.",
        "Usando a recursão.",
        "Em linguagens funcionais não existe maneiras de fazer uma repetição",
        "Usando recursões em sub-programas"
      ],
      a : 1
    },
    {
      q : "Em relação ao curring em linguagens funcionais:",
      o : [
        "Só pode ser aplicado as linguagens puramente funcionais.",
        "Não permite o reaproveitamento",
        " Haskell aceita o currying implícito,técnica que decompõe a função em pequenas sub-funções que depois retorna o valor final.",
        "È onde uma funcao recebe apenas um parametro por vez,fazendo que o codigo possa ser reutilizado."
      ],
      a : 3
    }
  ];