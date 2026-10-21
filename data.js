// Content: 4 weeks × (5 study days + review + message day). Edit here; the interface reads it as is.
// Phrase: pt, tr (transcription), ru, n (explanation), say (optional text for speech).
// Dialog line: [who, pt, ru] — who: "s" = landlord/agent, "me" = you.

const WEEKS = [
{
  t: "Поиск и первый контакт",
  days: [
    { t: "Ищу жильё",
      ctx: "Объявления смотрят на Idealista, Imovirtual и OLX. За пределами Лиссабона аренда обычно заметно дешевле.",
      ph: [
        { pt: "Estou à procura de casa.", tr: "(ы)ш-ТО а ПРО-ку-рэ ды КА-зэ", ru: "Я ищу жильё.",
          n: "Estar a + глагол — так в Португалии говорят о том, что происходит сейчас. À procura de — «в поиске»: à = a + a (предлог + артикль)." },
        { pt: "Quero arrendar um T1.", tr: "КЭ-ру э-рэ~-ДАР у~ тэ У~", ru: "Хочу снять квартиру с одной спальней.",
          n: "Arrendar — и снимать, и сдавать. T0 — студия, T1 — спальня + гостиная, T2 — две спальни. В объявлениях всегда так." },
        { pt: "Fora de Lisboa.", tr: "ФО-рэ ды лиж-БО-э", ru: "За пределами Лиссабона.",
          n: "De — «из, от». С артиклем сливается: perto do mar (de + o), perto da praia (de + a). С городами артикля нет: de Lisboa." }
      ],
      dlg: [
        ["s", "Bom dia, em que posso ajudar?", "Добрый день, чем могу помочь?"],
        ["me", "Bom dia. Estou à procura de casa.", "Добрый день. Я ищу жильё."],
        ["s", "Em Lisboa?", "В Лиссабоне?"],
        ["me", "Não, fora de Lisboa. Quero arrendar um T1.", "Нет, за пределами Лиссабона. Хочу снять T1."]
      ] },
    { t: "Ответ на объявление",
      ctx: "Короткое сообщение по-португальски, даже простое, производит хорошее впечатление на владельца.",
      ph: [
        { pt: "Vi o seu anúncio no Idealista.", tr: "ви у СЭ-у э-НУ~-сью ну и-ди-э-ЛИШ-тэ", ru: "Я видел ваше объявление на Idealista.",
          n: "Vi — «я видел» (от ver). No = em + o: «на» сайте. O seu — вежливое «ваш»." },
        { pt: "O apartamento ainda está disponível?", tr: "у э-пэр-тэ-МЭ~-ту э-И~-дэ (ы)ш-ТА диш-пу-НИ-вэл?", ru: "Квартира ещё свободна?",
          n: "Ainda — ещё. Está, а не é: свободна сейчас, это временное состояние. É — для постоянного: é grande — она большая." },
        { pt: "Obrigado pela resposta.", tr: "у-бри-ГА-ду ПЭ-лэ рыш-ПОШ-тэ", ru: "Спасибо за ответ.",
          n: "Благодарят «за» через por: obrigado por tudo. Pela = por + a, pelo = por + o." }
      ],
      dlg: [
        ["me", "Bom dia. Vi o seu anúncio no Idealista.", "Добрый день. Я видел ваше объявление на Idealista."],
        ["s", "Bom dia! Diga.", "Добрый день! Слушаю."],
        ["me", "O apartamento ainda está disponível?", "Квартира ещё свободна?"],
        ["s", "Está, sim.", "Да, свободна."],
        ["me", "Obrigado pela resposta.", "Спасибо за ответ."]
      ] },
    { t: "Цена и расходы",
      ctx: "Despesas — то, что сверх аренды. Свет, вода и газ почти всегда оплачиваются отдельно, по счётчикам.",
      ph: [
        { pt: "Qual é a renda?", tr: "куа-ЛЭ э РЭ~-дэ?", ru: "Сколько стоит аренда?",
          n: "Renda — арендная плата в Португалии. Бразильское aluguel поймут, но звучит чужим. О цене спрашивают qual é («какая»), а не quanto." },
        { pt: "As despesas estão incluídas?", tr: "эж дыш-ПЭ-зэш (ы)ш-ТА~у и~-клу-И-дэш?", ru: "Расходы включены?",
          n: "Estão — множественное от está. Слово согласуется: as despesas incluídas, o gás incluído." },
        { pt: "Setecentos euros por mês.", tr: "сэт-СЭ~-туш ЭУ-руш пур МЭШ", ru: "700 евро в месяц.",
          n: "Сотни: quinhentos 500, seiscentos 600, setecentos 700, oitocentos 800, novecentos 900. 650 — seiscentos e cinquenta." }
      ],
      dlg: [
        ["me", "Qual é a renda?", "Сколько стоит аренда?"],
        ["s", "São setecentos euros por mês.", "700 евро в месяц."],
        ["me", "As despesas estão incluídas?", "Расходы включены?"],
        ["s", "Não, a água e a luz são à parte.", "Нет, вода и свет отдельно."]
      ] },
    { t: "Договориться о просмотре",
      ctx: "Просмотр — visita. Хороших вариантов немного, владельцы выбирают арендатора, так что приходите вовремя.",
      ph: [
        { pt: "Gostaria de marcar uma visita.", tr: "гуш-тэ-РИ-э ды мэр-КАР У-мэ ви-ЗИ-тэ", ru: "Я хотел бы договориться о просмотре.",
          n: "Gostaria — вежливое «хотел бы». После gostar всегда стоит de. Marcar — назначить: marcar uma hora, marcar uma consulta." },
        { pt: "Pode ser amanhã?", tr: "ПО-ды сэр а-мэ-НЬЯ~?", ru: "Можно завтра?",
          n: "Pode ser…? — простой способ предложить вариант: pode ser às cinco? pode ser no sábado?" },
        { pt: "A que horas?", tr: "э кы О-рэш?", ru: "Во сколько?",
          n: "Время — через às: às dez (в десять), às onze. Час — единственное число: à uma." }
      ],
      dlg: [
        ["me", "Gostaria de marcar uma visita.", "Я хотел бы договориться о просмотре."],
        ["s", "Claro. Quando lhe dá jeito?", "Конечно. Когда вам удобно?"],
        ["me", "Pode ser amanhã?", "Можно завтра?"],
        ["s", "Pode, sim.", "Можно."],
        ["me", "A que horas?", "Во сколько?"],
        ["s", "Às onze.", "В одиннадцать."]
      ] },
    { t: "Телефонный звонок",
      ctx: "По телефону понимать труднее всего. Попросить написать сообщением — нормально.",
      ph: [
        { pt: "Estou?", tr: "(ы)ш-ТО?", ru: "Алло? (отвечая на звонок)",
          n: "Так в Португалии отвечают по телефону: Estou? или Está? Дальше можно сказать: Sim, é o Igor — да, это Игорь." },
        { pt: "Pode falar mais devagar?", tr: "ПО-ды фэ-ЛАР майж ды-вэ-ГАР?", ru: "Можете говорить медленнее?",
          n: "Pode + инфинитив — вежливая просьба: pode repetir? pode escrever? Пригодится в каждом звонке." },
        { pt: "Pode mandar-me por mensagem?", tr: "ПО-ды мэ~-ДАР-мы пур мэ~-СА-жэ~й?", ru: "Можете прислать мне сообщением?",
          n: "В Португалии местоимение часто ставят после глагола через дефис: mandar-me, chamo-me. В Бразилии — перед глаголом." }
      ],
      dlg: [
        ["me", "Estou?", "Алло?"],
        ["s", "Bom dia, é o senhor Igor? Fala a Ana, do anúncio.", "Добрый день, это Игорь? Это Ана, по объявлению."],
        ["me", "Pode falar mais devagar?", "Можете говорить медленнее?"],
        ["s", "Claro. Sou a Ana. O apartamento.", "Конечно. Я Ана. Квартира."],
        ["me", "Pode mandar-me por mensagem?", "Можете прислать мне сообщением?"],
        ["s", "Mando já.", "Сейчас пришлю."]
      ] }
  ],
  dlg: [
    ["s", "Estou?", "Алло?"],
    ["me", "Bom dia. Vi o seu anúncio no Idealista.", "Добрый день. Я видел ваше объявление на Idealista."],
    ["s", "Ah, sim. Diga.", "А, да. Слушаю."],
    ["me", "O apartamento ainda está disponível?", "Квартира ещё свободна?"],
    ["s", "Está, sim.", "Да, свободна."],
    ["me", "Qual é a renda?", "Сколько стоит аренда?"],
    ["s", "Seiscentos e cinquenta euros por mês.", "650 евро в месяц."],
    ["me", "As despesas estão incluídas?", "Расходы включены?"],
    ["s", "Não, são à parte.", "Нет, отдельно."],
    ["me", "Gostaria de marcar uma visita. Pode ser amanhã?", "Я хотел бы договориться о просмотре. Можно завтра?"],
    ["s", "Pode. Às dez?", "Можно. В десять?"],
    ["me", "Sim. Obrigado, até amanhã.", "Да. Спасибо, до завтра."]
  ],
  msg: {
    ru: "Добрый день. Я видел ваше объявление на Idealista. Квартира ещё свободна? Расходы включены? Я хотел бы договориться о просмотре. Спасибо, Игорь.",
    pt: "Bom dia. Vi o seu anúncio no Idealista. O apartamento ainda está disponível? As despesas estão incluídas? Gostaria de marcar uma visita. Obrigado, Igor."
  }
},
{
  t: "Просмотр",
  days: [
    { t: "Комнаты",
      ctx: "T-номер считает спальни: T2 — две спальни плюс гостиная. Площадь пишут в m² (metros quadrados).",
      ph: [
        { pt: "Quantos quartos tem?", tr: "КВА~-туш КУАР-туш тэ~й?", ru: "Сколько здесь спален?",
          n: "Quarto — именно спальня. Гостиная — sala. Quantos — для мужского рода, quantas — для женского: quantas casas de banho?" },
        { pt: "Onde é a casa de banho?", tr: "О~-ды Э э КА-зэ ды БА-нью?", ru: "Где ванная?",
          n: "Casa de banho — португальское слово. Бразильское banheiro поймут, но звучит чужим. О месте в доме говорят onde é." },
        { pt: "A cozinha está equipada?", tr: "э ку-ЗИ-ньэ (ы)ш-ТА и-ки-ПА-дэ?", ru: "Кухня оборудована?",
          n: "Equipada — с плитой (fogão), духовкой (forno) и холодильником (frigorífico). Квартиры часто сдают без техники." }
      ],
      dlg: [
        ["s", "Esta é a sala.", "Это гостиная."],
        ["me", "Quantos quartos tem?", "Сколько здесь спален?"],
        ["s", "Tem dois quartos.", "Две спальни."],
        ["me", "Onde é a casa de banho?", "Где ванная?"],
        ["s", "Ali, à direita.", "Вон там, справа."],
        ["me", "A cozinha está equipada?", "Кухня оборудована?"],
        ["s", "Sim, tem fogão e frigorífico.", "Да, есть плита и холодильник."]
      ] },
    { t: "Мебель и балкон: com или de",
      ctx: "Mobilado — с мебелью, sem mobília — без. Пустые квартиры встречаются часто, иногда даже без люстр.",
      ph: [
        { pt: "A casa é mobilada?", tr: "э КА-зэ Э му-би-ЛА-дэ?", ru: "Квартира с мебелью?",
          n: "Mobilada — португальская форма, в Бразилии mobiliada. Без мебели — sem mobília." },
        { pt: "Tem varanda?", tr: "тэ~й вэ-РА~-дэ?", ru: "Есть балкон?",
          n: "Tem…? — «есть ли…?». Главная конструкция на просмотре: tem elevador? tem garagem? tem arrecadação (кладовка)?" },
        { pt: "Um quarto com casa de banho.", tr: "у~ КУАР-ту ко~ КА-зэ ды БА-нью", ru: "Спальня со своей ванной.",
          n: "Com — «с, вместе с»: что-то есть в комплекте (com varanda, com garagem). De — «какой, для чего, из чего»: quarto de casal — спальня для пары, casa de banho — ванная. Проверка: если можно сказать «у которого есть» — com." }
      ],
      dlg: [
        ["me", "A casa é mobilada?", "Квартира с мебелью?"],
        ["s", "Não, está vazia.", "Нет, пустая."],
        ["me", "Tem varanda?", "Есть балкон?"],
        ["s", "Tem, sim. E o quarto grande tem casa de banho.", "Есть. А в большой спальне своя ванная."],
        ["me", "Um quarto com casa de banho? Ótimo.", "Спальня со своей ванной? Отлично."]
      ] },
    { t: "Сырость и отопление",
      ctx: "Зимой в португальских домах бывает холодно и сыро. Ищите следы плесени в углах и у окон.",
      ph: [
        { pt: "Há humidade?", tr: "а у-ми-ДА-ды?", ru: "Здесь сыро?",
          n: "Há — «есть, имеется» (буква h не читается). Há и tem в этом смысле почти синонимы, tem звучит разговорнее." },
        { pt: "Como é o aquecimento?", tr: "КО-му Э у э-кэ-си-МЭ~-ту?", ru: "Какое здесь отопление?",
          n: "Центрального отопления часто нет. Возможные ответы: ar condicionado (кондиционер), aquecedor (обогреватель), lareira (камин)." },
        { pt: "Apanha sol?", tr: "э-ПА-ньэ сол?", ru: "Сюда попадает солнце?",
          n: "Apanhar — ловить, брать. Apanhar sol — когда в квартиру попадает солнце: теплее и меньше сырости. Ещё: apanhar o autocarro — сесть на автобус." }
      ],
      dlg: [
        ["me", "Há humidade?", "Здесь сыро?"],
        ["s", "Não, a casa é seca.", "Нет, квартира сухая."],
        ["me", "Como é o aquecimento?", "Какое здесь отопление?"],
        ["s", "Tem ar condicionado na sala.", "В гостиной кондиционер."],
        ["me", "E apanha sol?", "А солнце попадает?"],
        ["s", "Apanha, de manhã.", "Да, по утрам."]
      ] },
    { t: "Район",
      ctx: "Проверьте дорогу: за городом без машины многое зависит от автобусов и поездов CP.",
      ph: [
        { pt: "A zona é sossegada?", tr: "э ЗО-нэ Э су-сы-ГА-дэ?", ru: "Район тихий?",
          n: "Sossegado — спокойный, тихий. Очень португальское слово, его часто пишут в объявлениях." },
        { pt: "Há supermercado perto?", tr: "а су-пэр-мэр-КА-ду ПЭР-ту?", ru: "Рядом есть супермаркет?",
          n: "Perto — близко, perto de — рядом с: perto da praia (de + a = da)." },
        { pt: "Fica longe da estação?", tr: "ФИ-кэ ЛО~Ж дэ (ы)ш-тэ-СА~у?", ru: "Далеко от станции?",
          n: "Fica — «находится» (о месте). Longe de — далеко от: a estação → da estação." }
      ],
      dlg: [
        ["me", "A zona é sossegada?", "Район тихий?"],
        ["s", "Muito. É uma rua sem trânsito.", "Очень. Улица без машин."],
        ["me", "Há supermercado perto?", "Рядом есть супермаркет?"],
        ["s", "Há um Pingo Doce a cinco minutos.", "Pingo Doce в пяти минутах."],
        ["me", "E fica longe da estação?", "А далеко от станции?"],
        ["s", "Não, são dez minutos a pé.", "Нет, десять минут пешком."]
      ] },
    { t: "Ответить после просмотра",
      ctx: "Хорошие варианты уходят быстро. Если квартира нравится, отвечайте в тот же или на следующий день.",
      ph: [
        { pt: "Gosto muito da casa.", tr: "ГОШ-ту МУИ~-ту дэ КА-зэ", ru: "Мне очень нравится квартира.",
          n: "Gostar — всегда с de: gosto de café, gosto da casa (de + a). Muito произносится с носовым «и»." },
        { pt: "Preciso de pensar.", tr: "пры-СИ-зу ды пэ~-САР", ru: "Мне нужно подумать.",
          n: "Precisar de + инфинитив — «нужно». В Бразилии de часто опускают, в Португалии — нет." },
        { pt: "Posso responder até sexta?", tr: "ПО-су рыш-по~-ДЕР э-ТЭ СЭЙШ-тэ?", ru: "Могу ответить до пятницы?",
          n: "Até — «до» (о времени и месте). Дни недели — по номерам с понедельника: segunda, terça, quarta, quinta, sexta." }
      ],
      dlg: [
        ["s", "Então, o que acha?", "Ну, что скажете?"],
        ["me", "Gosto muito da casa.", "Мне очень нравится квартира."],
        ["s", "Há mais pessoas interessadas.", "Есть и другие желающие."],
        ["me", "Preciso de pensar. Posso responder até sexta?", "Мне нужно подумать. Могу ответить до пятницы?"],
        ["s", "Pode, sim.", "Можете."]
      ] }
  ],
  dlg: [
    ["s", "Bom dia! Entre, por favor.", "Добрый день! Проходите."],
    ["me", "Bom dia. Quantos quartos tem?", "Добрый день. Сколько здесь спален?"],
    ["s", "Dois. E a sala é grande.", "Две. И большая гостиная."],
    ["me", "A casa é mobilada?", "Квартира с мебелью?"],
    ["s", "Não, só a cozinha está equipada.", "Нет, оборудована только кухня."],
    ["me", "Há humidade?", "Здесь сыро?"],
    ["s", "Não, e apanha sol à tarde.", "Нет, и днём попадает солнце."],
    ["me", "Como é o aquecimento?", "Какое здесь отопление?"],
    ["s", "Tem ar condicionado.", "Кондиционер."],
    ["me", "Gosto muito da casa, mas preciso de pensar.", "Мне очень нравится квартира, но мне нужно подумать."],
    ["s", "Claro. Diga-me até sexta.", "Конечно. Скажите мне до пятницы."]
  ],
  msg: {
    ru: "Добрый день. Спасибо за просмотр. Мне очень нравится квартира, но мне нужно подумать. Могу ответить до пятницы?",
    pt: "Boa tarde. Obrigado pela visita. Gosto muito da casa, mas preciso de pensar. Posso responder até sexta?"
  }
},
{
  t: "Условия и договор",
  days: [
    { t: "Деньги вперёд",
      ctx: "Обычно в начале платят залог и аренду за 1–2 месяца вперёд. Посчитайте сумму заранее.",
      ph: [
        { pt: "Quantos meses de caução?", tr: "КВА~-туш МЭ-зыш ды кау-СА~у?", ru: "Сколько месяцев залога?",
          n: "Caução — залог. Снова de в значении «какой»: meses de caução — месяцы залога, como quarto de casal." },
        { pt: "Quanto tenho de pagar no início?", tr: "КВА~-ту ТЭ-ньу ды пэ-ГАР ну и-НИ-сью?", ru: "Сколько нужно заплатить в начале?",
          n: "Ter de + инфинитив — «должен, нужно»: tenho de ir. No início — в начале (em + o)." },
        { pt: "Aceita transferência bancária?", tr: "э-СЭЙ-тэ трэ~ш-фы-РЭ~-сье бэ~-КА-ри-э?", ru: "Можно банковским переводом?",
          n: "Aceita — «вы принимаете»: вежливое «вы» в Португалии грамматически как «он». Ещё популярен MB Way — перевод по номеру телефона." }
      ],
      dlg: [
        ["me", "Quantos meses de caução?", "Сколько месяцев залога?"],
        ["s", "Dois meses.", "Два месяца."],
        ["me", "Quanto tenho de pagar no início?", "Сколько нужно заплатить в начале?"],
        ["s", "A caução e a primeira renda.", "Залог и первый месяц аренды."],
        ["me", "Aceita transferência bancária?", "Можно банковским переводом?"],
        ["s", "Aceito, claro.", "Конечно."]
      ] },
    { t: "Без поручителя",
      ctx: "Без поручителя нередко просят больший залог или аренду за несколько месяцев вперёд. С иностранцами это частая практика.",
      ph: [
        { pt: "Não tenho fiador.", tr: "на~у ТЭ-ньу фи-э-ДОР", ru: "У меня нет поручителя.",
          n: "Fiador — человек, который платит, если не платите вы. У иностранцев его обычно нет, поэтому фраза одна из главных." },
        { pt: "Posso pagar mais caução.", tr: "ПО-су пэ-ГАР майж кау-СА~у", ru: "Могу внести больший залог.",
          n: "Mais — больше. Mais перед согласной звучит «майш», перед гласной или звонкой — «майж»." },
        { pt: "Sou trabalhador independente.", tr: "со трэ-бэ-лье-ДОР и~-ды-пэ~-ДЭ~Т", ru: "Я работаю как самозанятый.",
          n: "Так называется статус фрилансера в Португалии. Подтвердить доход помогут recibos verdes и декларация IRS." }
      ],
      dlg: [
        ["s", "Tem fiador?", "У вас есть поручитель?"],
        ["me", "Não tenho fiador.", "У меня нет поручителя."],
        ["s", "Hum... é complicado.", "Хм… это сложно."],
        ["me", "Posso pagar mais caução. Sou trabalhador independente.", "Могу внести больший залог. Я самозанятый."],
        ["s", "Pode mostrar a declaração de IRS?", "Можете показать декларацию IRS?"]
      ] },
    { t: "Договор",
      ctx: "Зарегистрированный договор подтверждает ваш адрес — это пригодится для налоговой, банка и документов.",
      ph: [
        { pt: "O contrato é por quanto tempo?", tr: "у ко~-ТРА-ту Э пур КВА~-ту ТЭ~-пу?", ru: "На какой срок договор?",
          n: "Срок — через por: por um ano (на год), por dois anos." },
        { pt: "O contrato vai ser registado nas Finanças?", tr: "у ко~-ТРА-ту вай сэр ры-жиш-ТА-ду нэж фи-НА~-сэш?", ru: "Договор зарегистрируют в налоговой?",
          n: "Vai ser — «будет». Finanças — так в быту называют налоговую. Nas = em + as." },
        { pt: "Vou receber recibos?", tr: "во ры-сы-БЭР ры-СИ-буш?", ru: "Я буду получать квитанции?",
          n: "Vou + инфинитив — ближайшее будущее: vou pagar, vou mudar. Recibos de renda — электронные квитанции об оплате аренды." }
      ],
      dlg: [
        ["me", "O contrato é por quanto tempo?", "На какой срок договор?"],
        ["s", "Por um ano.", "На год."],
        ["me", "O contrato vai ser registado nas Finanças?", "Договор зарегистрируют в налоговой?"],
        ["s", "Sim, claro.", "Да, конечно."],
        ["me", "Vou receber recibos?", "Я буду получать квитанции?"],
        ["s", "Todos os meses.", "Каждый месяц."]
      ] },
    { t: "Уточнить детали",
      ctx: "Читайте договор дома, с переводчиком. Особенно пункты про срок, расторжение и возврат залога.",
      ph: [
        { pt: "O que quer dizer esta cláusula?", tr: "у кы кэр ды-ЗЕР ЭШ-тэ КЛАУ-зу-лэ?", ru: "Что означает этот пункт?",
          n: "Quer dizer — «означает» (буквально «хочет сказать»). Esta — эта, рядом со мной; essa — та, рядом с вами." },
        { pt: "Quando posso mudar-me?", tr: "КВА~-ду ПО-су му-ДАР-мы?", ru: "Когда я могу въехать?",
          n: "Mudar-se — переезжать. Снова местоимение после глагола: mudar-me." },
        { pt: "Posso levar o contrato para ler em casa?", tr: "ПО-су лы-ВАР у ко~-ТРА-ту ПА-рэ лэр э~й КА-зэ?", ru: "Можно взять договор почитать дома?",
          n: "Levar — уносить с собой, trazer — приносить. Para + инфинитив — «чтобы»." }
      ],
      dlg: [
        ["me", "O que quer dizer esta cláusula?", "Что означает этот пункт?"],
        ["s", "É sobre a caução.", "Это про залог."],
        ["me", "Posso levar o contrato para ler em casa?", "Можно взять договор почитать дома?"],
        ["s", "Pode, sim.", "Можно."],
        ["me", "Quando posso mudar-me?", "Когда я могу въехать?"],
        ["s", "A partir do dia um.", "С первого числа."]
      ] },
    { t: "Решение",
      ctx: "Цену иногда можно немного обсудить — особенно при долгом сроке или оплате вперёд.",
      ph: [
        { pt: "A renda é negociável?", tr: "э РЭ~-дэ Э ны-гу-си-А-вэл?", ru: "Цену аренды можно обсудить?",
          n: "-ável, -ível — как русское «-емый»: negociável (обсуждаемый), disponível (доступный)." },
        { pt: "Fico com a casa.", tr: "ФИ-ку ко~ э КА-зэ", ru: "Беру квартиру.",
          n: "Ficar com — «взять себе». Ещё одно частое com: fico com este — беру этот (в магазине тоже работает)." },
        { pt: "Quando assinamos?", tr: "КВА~-ду э-си-НА-муш?", ru: "Когда подписываем?",
          n: "-amos — окончание «мы»: assinamos, falamos, moramos." }
      ],
      dlg: [
        ["me", "A renda é negociável?", "Цену аренды можно обсудить?"],
        ["s", "Posso fazer seiscentos e oitenta.", "Могу сделать 680."],
        ["me", "Fico com a casa.", "Беру квартиру."],
        ["s", "Ótimo!", "Отлично!"],
        ["me", "Quando assinamos?", "Когда подписываем?"],
        ["s", "Pode ser na segunda-feira.", "Можно в понедельник."]
      ] }
  ],
  dlg: [
    ["s", "Então, quer ficar com a casa?", "Ну что, берёте квартиру?"],
    ["me", "Sim, mas não tenho fiador.", "Да, но у меня нет поручителя."],
    ["s", "Sem fiador, peço três meses de caução.", "Без поручителя прошу три месяца залога."],
    ["me", "Posso pagar mais caução. Sou trabalhador independente.", "Могу внести больший залог. Я самозанятый."],
    ["s", "Está bem.", "Хорошо."],
    ["me", "O contrato é por quanto tempo?", "На какой срок договор?"],
    ["s", "Por um ano, renovável.", "На год, с продлением."],
    ["me", "O contrato vai ser registado nas Finanças?", "Договор зарегистрируют в налоговой?"],
    ["s", "Sim, claro.", "Да, конечно."],
    ["me", "Fico com a casa. Quando assinamos?", "Беру квартиру. Когда подписываем?"],
    ["s", "Na segunda-feira.", "В понедельник."]
  ],
  msg: {
    ru: "Добрый день. Я беру квартиру. У меня нет поручителя, но я могу внести больший залог. Договор будет зарегистрирован в налоговой? Когда подписываем?",
    pt: "Bom dia. Fico com a casa. Não tenho fiador, mas posso pagar mais caução. O contrato vai ser registado nas Finanças? Quando assinamos?"
  }
},
{
  t: "Переезд и жизнь в доме",
  days: [
    { t: "Ключи и въезд",
      ctx: "В день въезда сфотографируйте каждую комнату и показания счётчиков — это защита вашего залога.",
      ph: [
        { pt: "Quando posso ir buscar as chaves?", tr: "КВА~-ду ПО-су ир буш-КАР эш ША-выш?", ru: "Когда я могу забрать ключи?",
          n: "Ir buscar — «сходить за чем-то»: vou buscar pão — схожу за хлебом. Очень частое сочетание." },
        { pt: "Pode mostrar-me os contadores?", tr: "ПО-ды муш-ТРАР-мы уж ко~-тэ-ДО-рыш?", ru: "Покажете счётчики?",
          n: "Contador — счётчик воды, света или газа. Os перед звонким звуком звучит «уж»." },
        { pt: "Isto já estava assim.", tr: "ИШ-ту жа (ы)ш-ТА-вэ э-СИ~", ru: "Это уже было так.",
          n: "Estava — «было» (состояние в прошлом). Говорите это при владельце, когда видите дефект." }
      ],
      dlg: [
        ["me", "Quando posso ir buscar as chaves?", "Когда я могу забрать ключи?"],
        ["s", "Amanhã de manhã.", "Завтра утром."],
        ["me", "Pode mostrar-me os contadores?", "Покажете счётчики?"],
        ["s", "Estão aqui, na entrada.", "Вот они, у входа."],
        ["me", "Isto já estava assim.", "Это уже было так."],
        ["s", "Sim, eu sei.", "Да, я знаю."]
      ] },
    { t: "Коммунальные",
      ctx: "Свет, воду и газ переоформляют у поставщиков. Обычно нужны NIF и договор аренды.",
      ph: [
        { pt: "Preciso de pôr a luz no meu nome.", tr: "пры-СИ-зу ды пор э луж ну МЭУ НО-мы", ru: "Мне нужно переоформить электричество на себя.",
          n: "Luz — в быту так называют электричество. Pôr no meu nome — «оформить на себя»." },
        { pt: "Quem paga o condomínio?", tr: "кэ~й ПА-гэ у ко~-ду-МИ-нью?", ru: "Кто платит взнос за дом?",
          n: "Condomínio — взнос на общие расходы дома. Обычно его платит владелец, но лучше уточнить." },
        { pt: "Já tem internet?", tr: "жа тэ~й и~-тэр-НЭТ?", ru: "Интернет уже подключён?",
          n: "Já — «уже». В вопросах: já comeu? — вы уже поели?" }
      ],
      dlg: [
        ["me", "Preciso de pôr a luz no meu nome.", "Мне нужно переоформить электричество на себя."],
        ["s", "Ligue para a EDP.", "Позвоните в EDP."],
        ["me", "Quem paga o condomínio?", "Кто платит взнос за дом?"],
        ["s", "Sou eu.", "Я."],
        ["me", "Já tem internet?", "Интернет уже подключён?"],
        ["s", "Não, tem de pedir.", "Нет, нужно заказать."]
      ] },
    { t: "Что-то сломалось",
      ctx: "Мелкий ремонт обычно ваш, крупный (колонка, протечки) — забота владельца. О проблемах лучше писать.",
      ph: [
        { pt: "A torneira está a pingar.", tr: "э тур-НЭЙ-рэ (ы)ш-ТА э пи~-ГАР", ru: "Кран подтекает.",
          n: "Снова estar a + инфинитив — то, что происходит сейчас." },
        { pt: "O esquentador não funciona.", tr: "у ыш-кэ~-тэ-ДОР на~у фу~-СИУ-нэ", ru: "Газовая колонка не работает.",
          n: "Esquentador — газовый водонагреватель, частый в португальских квартирах. Электрический бойлер — termoacumulador." },
        { pt: "Pode mandar alguém?", tr: "ПО-ды мэ~-ДАР ал-ГЭ~Й?", ru: "Можете прислать кого-нибудь?",
          n: "Alguém — кто-то, ninguém — никто. Тот же mandar, что в mandar mensagem." }
      ],
      dlg: [
        ["me", "A torneira está a pingar.", "Кран подтекает."],
        ["s", "Na cozinha?", "На кухне?"],
        ["me", "Sim. E o esquentador não funciona.", "Да. И колонка не работает."],
        ["s", "Que chatice!", "Вот досада!"],
        ["me", "Pode mandar alguém?", "Можете прислать кого-нибудь?"],
        ["s", "Mando amanhã.", "Пришлю завтра."]
      ] },
    { t: "Соседи",
      ctx: "Соседи подскажут, где выбрасывать мусор и где ближайшее хорошее кафе.",
      ph: [
        { pt: "Sou o novo vizinho do segundo esquerdo.", tr: "со у НО-ву ви-ЗИ-ньу ду сы-ГУ~-ду ыш-КЕР-ду", ru: "Я новый сосед со второго этажа, слева.",
          n: "Квартиры в Португалии называют по этажу и стороне: 2.º Esq. (esquerdo) или 2.º Dto. (direito). Так пишут и в адресе." },
        { pt: "Muito prazer.", tr: "МУИ~-ту прэ-ЗЭР", ru: "Очень приятно.",
          n: "Стандартный ответ при знакомстве. Можно просто Prazer." },
        { pt: "Se precisar de alguma coisa, diga.", tr: "сы пры-си-ЗАР ды ал-ГУ-мэ КОЙ-зэ, ДИ-гэ", ru: "Если что-то понадобится — скажите.",
          n: "Diga — «скажите». Вежливая просьба; это же слово вы слышали по телефону." }
      ],
      dlg: [
        ["me", "Bom dia. Sou o novo vizinho do segundo esquerdo.", "Добрый день. Я новый сосед со второго этажа, слева."],
        ["s", "Ah, bem-vindo! Sou a Maria.", "О, добро пожаловать! Я Мария."],
        ["me", "Muito prazer.", "Очень приятно."],
        ["s", "Igualmente.", "Взаимно."],
        ["me", "Se precisar de alguma coisa, diga.", "Если что-то понадобится — скажите."]
      ] },
    { t: "Съезд со старой квартиры",
      ctx: "О выезде из нынешней квартиры сообщают заказным письмом заранее. Срок уведомления указан в договоре — проверьте его уже сейчас.",
      ph: [
        { pt: "Vou deixar a casa no fim do mês.", tr: "во дэй-ШАР э КА-зэ ну фи~ ду МЭШ", ru: "Я съезжаю в конце месяца.",
          n: "Deixar — оставлять, покидать. Fim de — конец: no fim do mês, no fim de janeiro." },
        { pt: "Vou enviar uma carta registada.", tr: "во и~-ви-АР У-мэ КАР-тэ ры-жиш-ТА-дэ", ru: "Я отправлю заказное письмо.",
          n: "Carta registada — заказное письмо. Об окончании аренды обычно сообщают так, с уведомлением о вручении (com aviso de receção)." },
        { pt: "Quando recebo a caução de volta?", tr: "КВА~-ду ры-СЭ-бу э кау-СА~у ды ВОЛ-тэ?", ru: "Когда я получу залог обратно?",
          n: "De volta — обратно. Настоящее время (recebo) часто заменяет будущее." }
      ],
      dlg: [
        ["me", "Vou deixar a casa no fim do mês.", "Я съезжаю в конце месяца."],
        ["s", "Já? Que pena.", "Уже? Жаль."],
        ["me", "Vou enviar uma carta registada.", "Я отправлю заказное письмо."],
        ["s", "Está bem.", "Хорошо."],
        ["me", "Quando recebo a caução de volta?", "Когда я получу залог обратно?"],
        ["s", "Depois de ver a casa.", "После того как осмотрю квартиру."]
      ] }
  ],
  dlg: [
    ["s", "Aqui estão as chaves.", "Вот ключи."],
    ["me", "Obrigado. Pode mostrar-me os contadores?", "Спасибо. Покажете счётчики?"],
    ["s", "Claro, estão aqui.", "Конечно, вот они."],
    ["me", "Isto já estava assim.", "Это уже было так."],
    ["s", "Sim, eu sei. Vou mandar arranjar.", "Да, знаю. Пришлю мастера."],
    ["me", "E quem paga o condomínio?", "А кто платит взнос за дом?"],
    ["s", "Sou eu.", "Я."],
    ["me", "O esquentador não funciona. Pode mandar alguém?", "Колонка не работает. Можете прислать кого-нибудь?"],
    ["s", "Mando amanhã de manhã.", "Пришлю завтра утром."]
  ],
  msg: {
    ru: "Добрый день. На кухне подтекает кран, и колонка не работает. Можете прислать кого-нибудь? Спасибо, Игорь.",
    pt: "Bom dia. A torneira da cozinha está a pingar e o esquentador não funciona. Pode mandar alguém? Obrigado, Igor."
  }
}
];
