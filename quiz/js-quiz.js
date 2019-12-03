var quiz = {
    draw : function () {
    // quiz.draw() : desenha o quiz
  
      // Procura pelo wrapper no html(função p/ chamar outras funções)
      var wrapper = document.getElementById("quiz-wrap");
  
      // Loop para as questoes
      // Cria os elementos do HTML
      for (var index in questions) {
        var number = parseInt(index) + 1; // Numero da questão atual
        var qwrap = document.createElement("div"); // wrapper na div para "manter" na posição
        qwrap.classList.add("question"); // CSS
  
        // Titulo <h1> da questao
        var question = document.createElement("h1");
        question.innerHTML = number + ") " + questions[index]['q'];
        qwrap.appendChild(question);
  
        // Opções e tags de <input> e <label>
        for (var oindex in questions[index]['o']) {
          // <label> tag
          var label = document.createElement("label");
          qwrap.appendChild(label);
  
          // <option> tag
          var option = document.createElement("input");
          option.type = "radio";
          option.value = oindex;
          option.required = true;
          option.classList.add("oquiz");
  
          //O grupo de botões (seleção) devem ter o mesmo nome
          option.name = "quiz-" + number;
          label.appendChild(option);
  
          // Texto
          var otext = document.createTextNode(questions[index]['o'][oindex]);
          label.appendChild(otext);
          }
  
        // Adiciona ao index.html
        wrapper.appendChild(qwrap);
      }
  
      // Botao de enviar + evento
      var submitbutton = document.createElement("input");
      submitbutton.type = "submit";
      wrapper.appendChild(submitbutton);
      wrapper.addEventListener("submit", quiz.submit);
    },
  
    submit : function (evt) {
    // quiz.submit() : Faz os calculos quando envia o quiz
  
      // Pausa o formulário
      evt.preventDefault();
      evt.stopPropagation();
  
      // Classe "oquiz" 
      // Get em todas as opções selecionadas
      var selected = document.querySelectorAll(".oquiz:checked");
  
      // Pega a pontuacao
      var score = 0;
      for (var index in questions) {
        if (selected[index].value == questions[index]['a']) {
          score++;
        }
      }
  
      // Calculando a pontuacao
      var total = selected.length;
      var percent = score / total ;
  
      // Atualiza e mostra os pontos
      // Ao invés de criar elementos, colocamos internamente ao html
      // Mensagens de motivação
      var html = "<h1>";
      if (percent>=0.7) {
        html += "Muito bem!";
      } else if (percent>=0.4) {
        html += "Nada mau!";
      } else {
        html += "Tente outra vez!";
      }
      //imprime resultado das questoes
      html += "<div>Você acertou " + score + " de " + total + " (" + percent*100 + "%)" + ".</div>";
      html += "</h1>";
      document.getElementById("quiz-wrap").innerHTML = html; // envia pro html a resposta
    }
  };
  
  /* [INIT] */
  window.addEventListener("load", quiz.draw);
  