const carteData = [
  {
    nom: "Linn Da Quebrada",
    description: "Rhum Brun, Chaï, Orange, Cardamone, Vanille",
    prix: "7.00€",
    type: "Cocktails",
  },
  {
    nom: "Cassie Raptor",
    description: "Gin, Pamplemousse, Romarin, Tonic",
    prix: "7.00€",
    type: "Cocktails",
  },
  {
    nom: "Wu Tsang ",
    description: "Vodka, Yuzu, Lime, Muscovado",
    prix: "7.00€",
    type: "Cocktails",
  },
  {
    nom: "La Régine Déforges",
    description: "Amaretto, Cacao, Pamplemousse pressé",
    prix: "7.00€",
    type: "Cocktails",
  },
  {
    nom: "La Gina Pane",
    description: "Gin, Basilic, Citron Vert",
    prix: "7.00€",
    type: "Cocktails",
  },
  {
    nom: "Violet Chachki",
    description: "Gin, Crème de Cassis, Violette, Citron pressé",
    prix: "7.00€",
    type: "Cocktails",
  },
  {
    nom: "Annie Sprinkles",
    description: "Tequila, Cointreau, Lime pressée, Combava, Gingembre",
    prix: "7.00€",
    type: "Cocktails",
  },
  {
    nom: "Kefir",
    description: "Kéfir à la menthe",
    prix: "2.50€",
    type: "Soft maison",
  },
  {
    nom: "Thé Glacé Violette",
    description: "Thé Vert, Violette, Fleur de Sureau",
    prix: "3.00€",
    type: "Soft maison",
  },
  {
    nom: "Jasmina",
    description: "Infusion Jasmin, Gingembre, Citron Vert",
    prix: "3.00€",
    type: "Soft maison",
  },
  {
    nom: "Jus de pomme pétillant",
    prix: "2.50€",
    type: "Soft",
  },
  {
    nom: "Jus de fruits bio",
    prix: "3.50€",
    type: "Soft",
  },
  {
    nom: "Plancoet gazeuse",
    prix: "2.50€",
    type: "Soft",
  },
  {
    nom: "Ginger Beer",
    prix: "3.50€",
    type: "Soft",
  },
  {
    nom: "Espresso",
    prix: "1.70 €",
    type: "Boissons chaudes",
  },
  {
    nom: "Double Espresso",
    prix: "2.00€",
    type: "Boissons chaudes",
  },
  {
    nom: "Allongé",
    prix: "1.70 €",
    type: "Boissons chaudes",
  },
  {
    nom: "Noisette",
    prix: "1.80 €",
    type: "Boissons chaudes",
  },
  {
    nom: "Crème",
    prix: "2.00€",
    type: "Boissons chaudes",
  },
  {
    nom: "Grand Crème",
    prix: "3.50€",
    type: "Boissons chaudes",
  },
  {
    nom: "Capuccino",
    prix: "3.50€",
    type: "Boissons chaudes",
  },
  {
    nom: "Chaï Latte",
    prix: "4.00€",
    type: "Boissons chaudes",
  },
  {
    nom: "Chocolat",
    prix: "3.00€",
    type: "Boissons chaudes",
  },
  {
    nom: "Thé Bio",
    prix: "2.60 €",
    type: "Boissons chaudes",
  },
  {
    nom: "Masha & Manon du domaine Arletaz",
    description:
      "Masha est un Blanc vif et tendu comme une fraîche bourrasque étourdissante. Manon elle est rouge légère et douce comme la caresse d’un fruit fraîchement pressé.",
    prix: "xx€ le verre et xx € la bouteille",
    type: "Vin",
  },
  {
    nom: "Bois blanc et Groove du domaine de l’Ozil ",
    description:
      "Bois Blanc est d’un arôme fleuri incomparable. Un vin qui rappelle le printemps et ses bourgeons gourmands.",
    prix: "xx€ le verre et xx € la bouteille",
    type: "Vin",
  },
  {
    nom: "Groove",
    description:
      "Groove, le rouge, la 100 Syrah est épicé et légèrement boisé. Un délice à la buvabilité insolante.",
    prix: "xx€ le verre et xx € la bouteille",
    type: "Vin",
  },
  {
    nom: "La roteuse de Landra",
    description:
      "La roteuse de Landra, premier Pétillant naturel à la carte ! Joyeusement vineux à la petite bulle taquine on se permet de lui rajouter un brin de menthe pour faire de la coupe une célébration tenace.",
    prix: "xx€ le verre et xx € la bouteille",
    type: "Vin",
  },
  {
    nom: "Fluence",
    description:
      "Fluence, le champagne fait également son entrée ! Une queen de la nuit et de l’apéritif, un brut nature outragement grisant.",
    prix: "xx€ le verre et xx € la bouteille",
    type: "Vin",
  },
  {
    nom: "Blonde",
    description: "Bière",
    prix: "2.60€ | 5.20€",
    type: "Bières",
  },
  {
    nom: "IPA",
    description: "Bière",
    prix: "3.20€ | 6.40€",
    type: "Bières",
  },
  {
    nom: "Blanche IPA",
    description: "Bière",
    prix: "3.20€ | 6.40€",
    type: "Bières",
  },
  {
    nom: "Ambrée",
    description: "Bière",
    prix: "3.20€ | 6.40€",
    type: "Bières",
  },
  {
    nom: "Passion Flamboyante",
    description: "Rooibos Passion, Ananas, Yuzu, Vanille",
    prix: "4.50€",
    type: "Mocktails",
  },
  {
    nom: "Bergamote Iced",
    description: "Sirop Brut Bergamote, Citron pressé, Poivre de Timut",
    prix: "4.50€",
    type: "Mocktails",
  },
  {
    nom: "Raisin coquin",
    description: "Jus de Raison, Citron et Orange pressée, Gingembre, Menthe",
    prix: "4.50€",
    type: "Mocktails",
  },
];

export default carteData;
