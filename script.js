let perguntas = [
  {
    titulo: 'De quem é a famosa frase “Penso, logo existo”?',
    alternativas: ['Platão', 'Galileu Galilei', 'Descartes', 'Sócrates'],
    correta: 2
  },

  {
    titulo: 'Quais o menor e o maior país do mundo?',
    alternativas: [
      'Vaticano e Rússia',
      'Nauru e China',
      'Mônaco e Canadá',
      'Malta e Estados Unidos'
    ],
    correta: 0
  },

  {
    titulo: 'Quais as duas datas que são comemoradas em novembro?',
    alternativas: [
      'Independência do Brasil e Dia da Bandeira',
      'Proclamação da República e Dia Nacional da Consciência Negra',
      'Dia do Médico e Dia de São Lucas',
      'Dia de Finados e Dia Nacional do Livro'
    ],
    correta: 1
  },

  {
    titulo: 'De quantos em quantos anos acontece a Copa do Mundo?',
    alternativas: ['2 anos', '1 ano', '6 anos', '4 anos'],
    correta: 3
  },

  {
    titulo: 'Quanto tempo a luz do Sol demora para chegar à Terra?',
    alternativas: ['12 minutos', '1 dia', '12 horas', '8 minutos'],
    correta: 3
  },

  {
    titulo: 'Em que período da pré-história o fogo foi descoberto?',
    alternativas: [
      'Neolítico',
      'Paleolítico',
      'Idade dos Metais',
      'Período da Pedra Polida'
    ],
    correta: 1
  },

  {
    titulo: 'Em qual local da Ásia o português é língua oficial?',
    alternativas: ['Índia', 'Filipinas', 'Moçambique', 'Macau'],
    correta: 3
  },

  {
    titulo: 'Qual destes países é transcontinental?',
    alternativas: ['Rússia', 'Filipinas', 'Marrocos', 'Groenlândia'],
    correta: 0
  },

  {
    titulo: 'Quem é o autor de “O Príncipe”?',
    alternativas: [
      'Maquiavel',
      'Antoine de Saint-Exupéry',
      'Montesquieu',
      'Thomas Hobbes'
    ],
    correta: 0
  },

  {
    titulo: 'Quem pintou o teto da capela sistina?',
    alternativas: [
      'Michelangelo',
      'Leonardo da Vinci',
      'Rafael',
      'Sandro Botticelli'
    ],
    correta: 0
  }
]

let app = {
  start: function () {
    this.Atualpos = 0
    this.Totalpontos = 0

    let alts = document.querySelectorAll('.alternativa')
    alts.forEach((element, index) => {
      element.addEventListener('click', () => {
        this.checaResposta(index)
      })
    })
    this.atualizaPontos()
    app.mostrarpergunta(perguntas[this.Atualpos])
  },
  mostrarpergunta: function (q) {
    this.qatual = q
    //mostrando o titulo
    let titleDiv = document.getElementById('titulo')
    titleDiv.textContent = q.titulo
    //mostrando questões
    let alts = document.querySelectorAll('.alternativa')
    alts.forEach(function (element, index) {
      element.textContent = q.alternativas[index]
    })
  },

  Proximaperg: function () {
    this.Atualpos++
    if (this.Atualpos == perguntas.length) {
      this.Atualpos = 0
    }
  },

  checaResposta: function (user) {
    if (this.qatual.correta == user) {
      console.log('Correta')
      this.Totalpontos++
      this.mostraResposta(true)
    } else {
      console.log('Errada')
      this.mostraResposta(false)
    }
    this.atualizaPontos()
    this.Proximaperg()
    this.mostrarpergunta(perguntas[this.Atualpos])
  },

  atualizaPontos: function () {
    let scoreDiv = document.getElementById('pontos')
    scoreDiv.textContent = `Sua pontuação é: ${this.Totalpontos}`
  },

  mostraResposta: function (correto) {
    let resultDiv = document.getElementById('result')
    let result = ''
    // formatar como a mensagem será exibida
    if (correto == true) {
      result = 'Resposta Correta!'
    } else {
      // obtendo a questão atual
      let pergunta = perguntas[this.Atualpos]
      // obtenha o indice da resposta correta da questão atual
      let cIndice = pergunta.correta
      // obtenha o texto da resposta correta da questão atual
      let cTexto = pergunta.alternativas[cIndice]
      result = `Incorreto! A Resposta Correta é: ${cTexto}`
    }
    resultDiv.textContent = result
  }
}

app.start()
