/**
 * Dados de tratamentos e detalhes de serviços
 * Estrutura: { categoria: [{ name, header, benefits, link }] }
 */

const createTreatment = (name, headerTitle, headerDescription, benefits, link) => ({
  name,
  header: {
    titulo: headerTitle,
    descricao: headerDescription,
  },
  benefits: benefits.map((desc, idx) => ({
    id: idx + 1,
    descricao: desc,
  })),
  link,
});

const dados = {
  Cabeca: [
    createTreatment(
      'Rosto',
      'Depilação do Rosto',
      'Realce sua beleza natural com uma pele iluminada e uniforme.',
      [
        '✨Efeito Glow: A remoção dos pelos elimina células mortas, uniformiza o tom da pele e realça sua maquiagem e hidratação natural.',
        '⏳ Durabilidade: Até 20 Dias Livre: Esqueça a manutenção diária. Desfrute de uma pele lisa e macia por muito mais tempo.',
        '🍃 Pele que Respira: Reduz a oleosidade e impurezas acumuladas, proporcionando um toque aveludado e sensação de limpeza real.',
        '📉 Fios Mais Finos: Com a frequência, os pelos nascem mais fracos e discretos, tornando a manutenção cada vez mais suave.',
      ],
      "https://wa.me/5562981841110?text=Ol%C3%A1,%20Maria!%20%F0%9F%A9%B7%0AVim%20pelo%20site%20e%20gostaria%20de%20agendar%20Depila%C3%A7%C3%A3o%20do%20rosto.%0APode%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis?"
    ),
    createTreatment(
      'Nariz',
      'Depilação do Nariz',
      'Realce sua beleza natural com uma pele iluminada e uniforme.',
      [
        '✨ Aparência Mais Limpa: Remove os pelos visíveis do nariz, deixando o rosto com aspecto mais organizado e agradável.',
        '⏳ Resultado Duradouro: A remoção pela raiz garante até 15–20 dias sem pelos aparentes.',
        '🍃 Higiene e Bem-Estar: Ajuda a reduzir o acúmulo de sujeira e impurezas, proporcionando maior sensação de limpeza.',
        '📉 Pelos Mais Finos e Discretos: Com a manutenção regular, os pelos crescem mais fracos, finos e menos evidentes.',
      ],
      'https://wa.me/5562981841110?text=Ol%C3%A1,%20Maria!%20%F0%9F%A9%B7%0AVim%20pelo%20site%20e%20gostaria%20de%20agendar%20Depila%C3%A7%C3%A3o%20do%20Nariz.%0APode%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis?'
    ),
    createTreatment(
      'Buço',
      'Depilação do Buço',
      'Realce sua beleza natural com uma pele iluminada e uniforme.',
      [
        '✨ Aparência Mais Suave: Remove os pelos do buço, deixando o rosto com aspecto mais delicado e harmonioso.',
        '⏳ Resultado Duradouro: Até 15–20 dias sem pelos visíveis.',
        '🍃 Pele Lisa e Macia: Proporciona toque macio e aparência rejuvenescida.',
        '📉 Pelos Mais Finos: Com sessões regulares, os pelos crescem mais fracos e discretos.',
      ],
      'https://wa.me/5562981841110?text=Ol%C3%A1,%20Maria!%20%F0%9F%A9%B7%0AQuero%20agendar%20Depila%C3%A7%C3%A3o%20do%20Bu%C3%A7o.%0AVoc%C3%AA%20tem%20hor%C3%A1rio%20dispon%C3%ADvel%20esta%20semana?'
    ),
  ],

  Tronco: [
    createTreatment(
      'Ombro',
      'Depilação do Ombro',
      'Sinta a leveza e o cuidado de uma pele lisa e bem tratada nos ombros',
      [
        '✨ Pele Mais Lisa e Uniforme: A cera remove os pelos desde a raiz, deixando os ombros com textura uniforme e aparência suave.',
        '🕒 Resultados Duradouros: Fique por semanas com a pele lisinha, sem a necessidade de manutenção constante.',
        '🌿 Sensação de Limpeza e Frescor: A depilação completa proporciona um visual mais limpo, leve e bem cuidado.',
        '📉 Pelos Mais Finos e Discretos: Com o tempo, os pelos tendem a crescer mais fracos, finos e menos visíveis.',
      ],
      'https://wa.me/5562981841110?text=Ol%C3%A1,%20Maria!%20%F0%9F%A9%B7%0AVim%20pelo%20site%20e%20gostaria%20de%20agendar%20Depila%C3%A7%C3%A3o%20de%20Ombro.%0APode%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis?'
    ),
    createTreatment(
      'Costas',
      'Depilação das Costas',
      'Sinta a liberdade e o conforto de uma pele limpa, lisa e bem cuidada',
      [
        '✨ Pele Lisa e Uniforme: A depilação a cera remove os pelos desde a raiz, deixando as costas com aparência uniforme e toque suave.',
        '🕒 Resultados Duradouros: Aproveite semanas de pele lisinha, sem a necessidade de retoques frequentes.',
        '🌿 Sensação de Limpeza e Frescor: A depilação completa proporciona um visual mais limpo, leve e bem cuidado.',
        '🌿 Sensação de Limpeza e Conforto: A remoção completa dos pelos traz frescor, bem-estar e um visual mais cuidado.',
      ],
      'https://wa.me/5562981841110?text=Ol%C3%A1,%20Maria!%20%F0%9F%A9%B7%0AVim%20pelo%20site%20e%20gostaria%20de%20agendar%20Depila%C3%A7%C3%A3o%20de%20Costas.%0APode%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis?'
    ),
    createTreatment(
      'Abdômen',
      'Depilação do Abdômen',
      'Realce o cuidado com o corpo e sinta a leveza de uma pele lisa e uniforme',
      [
        '✨ Pele Lisa e Uniforme: A depilação a cera remove os pelos desde a raiz, deixando o abdômen com textura suave e aparência homogênea.',
        '🕒 Resultados Duradouros: Desfrute de semanas com a pele lisinha, sem necessidade de retoques constantes.',
        '🌿 Sensação de Limpeza e Bem-Estar: A remoção completa dos pelos proporciona um visual mais limpo, confortável e agradável.',
        '📉 Pelos Mais Finos com o Tempo: Com a depilação frequente, os pelos crescem mais fracos, finos e menos aparentes.',
      ],
      'https://wa.me/5562981841110?text=Ol%C3%A1,%20Maria!%20%F0%9F%A9%B7%0AVim%20pelo%20site%20e%20gostaria%20de%20agendar%20Depila%C3%A7%C3%A3o%20de%20Abd%C3%B4men.%0APode%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis?'
    ),
  ],

  Braco: [
    createTreatment(
      'Braço',
      'Depilação de Braço',
      'Valorize a suavidade da pele e sinta a confiança de braços bem cuidados',
      [
        '✨ Pele Lisa e Uniforme: A depilação a cera remove os pelos desde a raiz, deixando os braços com textura macia e aparência uniforme.',
        '🕒 Resultados Duradouros: Aproveite semanas de pele lisinha, reduzindo a necessidade de retoques frequentes.',
        '🌿 Sensação de Limpeza e Leveza: A remoção completa dos pelos proporciona um visual mais limpo, leve e agradável ao toque.',
        '📉 Pelos Mais Finos e Discretos: Com o tempo, os pelos crescem mais fracos, finos e menos visíveis.',
      ],
      'https://wa.me/5562981841110?text=Ol%C3%A1,%20Maria!%20%F0%9F%A9%B7%0AVim%20pelo%20site%20e%20gostaria%20de%20agendar%20Depila%C3%A7%C3%A3o%20dos%20bra%C3%A7os.%0APode%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis?'
    ),
    createTreatment(
      'Antebraço',
      'Depilação de Antebraço',
      'Realce a beleza natural da pele com leveza, suavidade e cuidado',
      [
        '✨ Pele Lisa e Uniforme: A depilação a cera remove os pelos desde a raiz, deixando o antebraço com textura suave e aparência uniforme.',
        '🕒 Resultados Duradouros: Desfrute de semanas de pele lisinha, sem a necessidade de retoques constantes.',
        '🌿 Sensação de Limpeza e Conforto: A remoção dos pelos proporciona um visual mais limpo, leve e agradável ao toque.',
        '📉 Pelos Mais Finos com o Tempo: Com sessões regulares, os pelos crescem mais fracos, finos e menos aparentes.',
      ],
      'https://wa.me/5562981841110?text=Ol%C3%A1,%20Maria!%20%F0%9F%A9%B7%0AVim%20pelo%20site%20e%20gostaria%20de%20agendar%20Depila%C3%A7%C3%A3o%20dos%20antebra%C3%A7os.%0APode%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis?'
    ),
    createTreatment(
      'Axilas',
      'Depilação de Axilas',
      'Conforto e cuidado para você se sentir seguro o tempo todo',
      [
        '✨ Pele Lisa e Macia: Remove pelos desde a raiz, deixando axilas suaves e uniformes.',
        '🕒 Resultados Duradouros: Até 20 dias sem pelos aparentes.',
        '🌿 Higiene e Frescor: Reduz odor e proporciona sensação de limpeza prolongada.',
        '📉 Pelos Mais Finos: Com manutenção regular, pelos crescem mais fracos e discretos.',
      ],
      'https://wa.me/5562981841110?text=Ol%C3%A1,%20Maria!%20%F0%9F%A9%B7%0AVim%20pelo%20site%20e%20gostaria%20de%20agendar%20Depila%C3%A7%C3%A3o%20das%20axilas.%0APode%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis?'
    ),
    createTreatment(
      'Ombro ao Dedinho da Mão',
      'Depilação do Ombro ao Dedinho da Mão',
      'Cuidado completo para braços lisos, uniformes e bem definidos em todos os detalhes',
      [
        '✨ Depilação Completa e Uniforme: Remove pelos desde o ombro até o dedinho da mão, garantindo acabamento uniforme em toda a extensão do braço.',
        '🕒 Resultados Duradouros: Semanas de pele lisinha, reduzindo retoques frequentes.',
        '🌿 Sensação de Limpeza e Leveza: Remoção total traz conforto, frescor e visual mais limpo e elegante.',
        '📉 Pelos Mais Finos com o Tempo: Com sessões regulares, pelos crescem mais fracos, finos e menos aparentes em toda a região.',
      ],
      'https://wa.me/5562981841110?text=Ol%C3%A1,%20Maria!%20%F0%9F%A9%B7%0AVim%20pelo%20site%20e%20gostaria%20de%20agendar%20Depila%C3%A7%C3%A3o%20do%20ombro%20ao%20dedinho%20da%20m%C3%A3o.%0APode%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis?'
    ),
    createTreatment(
      'Dedinho da Mão',
      'Depilação do Dedinho da Mão',
      'Pequenos detalhes que fazem toda a diferença no cuidado com as mãos',
      [
        '✨ Toque Suave e Delicado: Remove pelos desde a raiz, deixando dedinho com aparência limpa e macia.',
        '🕒 Resultados Duradouros: Mesmo em áreas pequenas, resultados duram mais, mantendo pele lisinha por semanas.',
        '🌿 Sensação de Limpeza e Cuidado: Remoção valoriza estética das mãos, trazendo visual mais delicado e bem cuidado.',
        '📉 Pelos Mais Finos e Discretos: Com o tempo, pelos crescem mais fracos, finos e quase imperceptíveis.',
      ],
      'https://wa.me/5562981841110?text=Ol%C3%A1,%20Maria!%20%F0%9F%A9%B7%0AVim%20pelo%20site%20e%20gostaria%20de%20agendar%20Depila%C3%A7%C3%A3o%20do%20dedinho%20da%20m%C3%A3o.%0APode%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis?'
    ),
  ],

  Quadril: [
    createTreatment(
      'Virilha',
      'Depilação de Virilha',
      'Conforto, cuidado e suavidade para você se sentir confiante todos os dias',
      [
        '✨ Pele Lisa e Bem Cuidada: Remove pelos desde a raiz, deixando região mais lisa e com aparência uniforme.',
        '🕒 Resultados Duradouros: Semanas de suavidade e limpeza, sem retoques constantes.',
        '🌿 Sensação de Frescor e Conforto: Remoção proporciona leveza, higiene e sensação prolongada de bem-estar.',
        '📉 Pelos Mais Finos com o Tempo: Com depilação regular, pelos crescem mais fracos, finos e menos aparentes.',
      ],
      'https://wa.me/5562981841110?text=Ol%C3%A1,%20Maria!%20%F0%9F%A9%B7%0AVim%20pelo%20site%20e%20gostaria%20de%20agendar%20Depila%C3%A7%C3%A3o%20de%20Virilha.%0APode%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis?'
    ),
    createTreatment(
      'Glúteos',
      'Depilação de Glúteos',
      'Sinta o conforto e a suavidade de uma pele bem cuidada em todos os detalhes',
      [
        '✨ Pele Lisa e Uniforme: Remove pelos desde a raiz, deixando glúteos mais lisos com aparência uniforme.',
        '🕒 Resultados Duradouros: Semanas de pele macia, reduzindo retoques frequentes.',
        '🌿 Sensação de Limpeza e Conforto: Remoção proporciona frescor, higiene e bem-estar prolongado.',
        '📉 Pelos Mais Finos com o Tempo: Com sessões regulares, pelos crescem mais fracos, finos e menos aparentes.',
      ],
      'https://wa.me/5562981841110?text=Ol%C3%A1,%20Maria!%20%F0%9F%A9%B7%0AVim%20pelo%20site%20e%20gostaria%20de%20agendar%20Depila%C3%A7%C3%A3o%20do%20Gl%C3%BAteos.%0APode%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis?'
    ),
  ],

  Pernas: [
    createTreatment(
      'Meia Perna',
      'Depilação de Meia Perna',
      'Realce a beleza das pernas com suavidade, leveza e cuidado',
      [
        '✨ Pele Lisa e uniforme: Remove pelos desde a raiz, deixando meia perna com textura suave e aparência homogênea.',
        '🕒 Resultados Duradouros: Semanas de pele lisinha, sem retoques frequentes.',
        '🌿 Sensação de Limpeza e Frescor: Remoção proporciona leveza, conforto e visual mais limpo e bem cuidado.',
        '📉 Pelos Mais Finos com o Tempo: Com depilação regular, pelos crescem mais fracos, finos e menos aparentes.',
      ],
      'https://wa.me/5562981841110?text=Ol%C3%A1,%20Maria!%20%F0%9F%A9%B7%0AVim%20pelo%20site%20e%20gostaria%20de%20agendar%20Depila%C3%A7%C3%A3o%20meia%20perna.%0APode%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis?'
    ),
    createTreatment(
      'Perna Toda',
      'Depilação de Perna Toda',
      'Sinta a leveza e a confiança de pernas totalmente lisas e bem cuidadas',
      [
        '✨ Pele Lisa e Uniforme: Remove pelos desde a raiz, deixando toda perna com aparência uniforme e toque suave.',
        '🕒 Resultados Duradouros: Semanas com pele lisinha, reduzindo retoques frequentes.',
        '🌿 Sensação de Limpeza e Conforto: Remoção proporciona conforto, leveza e visual mais limpo.',
        '📉 Pelos Mais Finos com o Tempo: Com sessões regulares, pelos crescem mais fracos, finos e menos aparentes.',
      ],
      'https://wa.me/5562981841110?text=Ol%C3%A1,%20Maria!%20%F0%9F%A9%B7%0AVim%20pelo%20site%20e%20gostaria%20de%20agendar%20Depila%C3%A7%C3%A3o%20perna%20toda.%0APode%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis?'
    ),
  ],
};

export default dados;