const dtoFactory = require('./dtoFactory')

test('should get public objectives', () => {
  // given
  const expected = {
    objectives: [
      {
        slug: 'diversify-research',
        scoredBy: [
          'The_L1Z1X_Mindnet',
          'The_Clan_of_Saar',
          'The_Mahact_Gene__Sorcerers',
          'The_Embers_of_Muaat',
          'Sardakk_Norr',
        ],
      },
      {
        slug: 'improve-infrastructure',
        scoredBy: [
          'The_Titans_of_Ul',
          'The_Embers_of_Muaat',
          'Sardakk_Norr',
        ],
      },
      {
        slug: 'explore-deep-space',
        scoredBy: [
          'The_Clan_of_Saar',
          'The_Mahact_Gene__Sorcerers',
        ],
      },
      {
        slug: 'make-history',
        scoredBy: [
          'The_L1Z1X_Mindnet',
          'The_Clan_of_Saar',
          'The_Mahact_Gene__Sorcerers',
          'Sardakk_Norr',
        ],
      },
      {
        slug: 'raise-a-fleet',
        scoredBy: [
          'The_Titans_of_Ul',
          'The_L1Z1X_Mindnet',
          'The_Clan_of_Saar',
          'The_Mahact_Gene__Sorcerers',
          'The_Embers_of_Muaat',
        ],
      },
      {
        slug: 'reclaim-ancient-monuments',
        scoredBy: [
          'The_Mahact_Gene__Sorcerers',
        ],
      },
    ]
  }

  // when
  const actual = dtoFactory(getTestData())

  // then
  expect(actual.objectives).toEqual(expected.objectives)
})

test('should include all faction names', () => {
  // given
  const expected = {
    factions: [
      'The_L1Z1X_Mindnet',
      'The_Clan_of_Saar',
      'The_Mahact_Gene__Sorcerers',
      'The_Embers_of_Muaat',
      'The_Titans_of_Ul',
      'Sardakk_Norr',
    ]
  }

  // when
  const actual = dtoFactory(getTestData())

  // then
  expect(actual.factions).toEqual(expect.arrayContaining(expected.factions))
})

test('should include TTS flag', () => {
  expect(dtoFactory(getTestData()).tts).toEqual(true)
})

test('should include vpCount', () => {
  expect(dtoFactory(getTestData()).vpCount).toEqual(10)
})

function getTestData() {
  return JSON.parse(`
{
   "turn":"",
   "timestamp":1614604996,
   "objectives":{
      "Secret Objectives":[
         "Strengthen Bonds",
         "Demonstrate Your Power",
         "Learn the Secrets of the Cosmos",
         "Prove Endurance",
         "Mechanize the Military",
         "Establish Hegemony",
         "Hoard Raw Materials",
         "Mine Rare Minerals",
         "Forge an Alliance",
         "Become the Gatekeeper",
         "Foster Cohesion",
         "Seize an Icon",
         "Fight with Precision",
         "Establish a Perimeter",
         "Master the Laws of Physics",
         "Become a Martyr",
         "Darken the Skies"
      ],
      "Public Objectives II":[
         "Reclaim Ancient Monuments"
      ],
      "Agenda":[
         "Seed of an Empire"
      ],
      "Public Objectives I":[
         "Diversify Research",
         "Improve Infrastructure",
         "Explore Deep Space",
         "Make History",
         "Raise a Fleet"
      ],
      "OTHER":[
         "Support for the Throne (Blue)",
         "Support for the Throne (Purple)",
         "Support for the Throne (Red)",
         "Support for the Throne (Yellow)",
         "Support for the Throne (Green)",
         "Support for the Throne (White)"
      ],
      "Relics":[
         "Shard of the Throne"
      ]
   },
   "isPoK":true,
   "scoreboard":10,
   "players":[
      {
         "commandTokens":{
            "fleet":6,
            "tactics":0,
            "strategy":0
         },
         "leaders":{
            "hero":"locked",
            "commander":"unlocked"
         },
         "strategyCards":[
            "Leadership"
         ],
         "color":"White",
         "factionName":"Titans of Ul",
         "handSummary":[

         ],
         "commodities":0,
         "planetTotals":{
            "traits":{
               "cultural":2,
               "industrial":1,
               "hazardous":1
            },
            "influence":{
               "avail":0,
               "total":9
            },
            "resources":{
               "avail":0,
               "total":17
            },
            "legendary":0,
            "techs":{
               "blue":0,
               "green":0,
               "yellow":0,
               "red":0
            }
         },
         "custodiansPoints":0,
         "active":true,
         "score":4,
         "technologies":[
            "Antimass Deflectors",
            "Scanlink Drone Network",
            "Saturn Engine II",
            "Dreadnought II",
            "Plasma Scoring",
            "Duranium Armor",
            "Assault Cannon",
            "Fighter II"
         ],
         "alliances":[
            "Green"
         ],
         "objectives":[
            "Improve Infrastructure",
            "Raise a Fleet",
            "Shard of the Throne",
            "Support for the Throne (Green)"
         ],
         "tradeGoods":1,
         "laws":[

         ]
      },
      {
         "commandTokens":{
            "fleet":6,
            "tactics":3,
            "strategy":1
         },
         "leaders":{
            "hero":"unlocked",
            "commander":"unlocked"
         },
         "strategyCards":[
            "Warfare"
         ],
         "color":"Blue",
         "factionName":"L1Z1X Mindnet",
         "handSummary":[

         ],
         "commodities":0,
         "planetTotals":{
            "traits":{
               "cultural":2,
               "industrial":4,
               "hazardous":0
            },
            "influence":{
               "avail":6,
               "total":12
            },
            "resources":{
               "avail":7,
               "total":11
            },
            "legendary":0,
            "techs":{
               "blue":1,
               "green":0,
               "yellow":0,
               "red":1
            }
         },
         "custodiansPoints":0,
         "active":false,
         "score":6,
         "technologies":[
            "Neural Motivator",
            "Plasma Scoring",
            "AI Development Algorithm",
            "Hyper Metabolism",
            "Gravity Drive",
            "Bio-Stims"
         ],
         "alliances":[
            "Purple"
         ],
         "objectives":[
            "Diversify Research",
            "Hoard Raw Materials",
            "Make History",
            "Raise a Fleet",
            "Support for the Throne (Purple)"
         ],
         "tradeGoods":5,
         "laws":[

         ]
      },
      {
         "commandTokens":{
            "fleet":4,
            "tactics":0,
            "strategy":1
         },
         "leaders":{
            "hero":"purged",
            "commander":"unlocked"
         },
         "strategyCards":[
            "Diplomacy"
         ],
         "color":"Purple",
         "factionName":"Clan of Saar",
         "handSummary":[

         ],
         "commodities":0,
         "planetTotals":{
            "traits":{
               "cultural":1,
               "industrial":1,
               "hazardous":2
            },
            "influence":{
               "avail":0,
               "total":9
            },
            "resources":{
               "avail":0,
               "total":13
            },
            "legendary":0,
            "techs":{
               "blue":0,
               "green":0,
               "yellow":1,
               "red":0
            }
         },
         "custodiansPoints":2,
         "active":true,
         "score":8,
         "technologies":[
            "Antimass Deflectors",
            "Chaos Mapping",
            "Scanlink Drone Network",
            "Dreadnought II"
         ],
         "alliances":[
            "Blue"
         ],
         "objectives":[
            "Diversify Research",
            "Explore Deep Space",
            "Make History",
            "Raise a Fleet",
            "Strengthen Bonds"
         ],
         "tradeGoods":0,
         "laws":[

         ]
      },
      {
         "commandTokens":{
            "fleet":1,
            "tactics":0,
            "strategy":0
         },
         "leaders":{
            "hero":"purged",
            "commander":"unlocked"
         },
         "strategyCards":[
            "Construction"
         ],
         "color":"Yellow",
         "factionName":"Mahact Gene-Sorcerers",
         "handSummary":{
            "Secret Objectives":1,
            "Actions":5
         },
         "commodities":1,
         "planetTotals":{
            "traits":{
               "cultural":3,
               "industrial":2,
               "hazardous":5
            },
            "influence":{
               "avail":4,
               "total":24
            },
            "resources":{
               "avail":2,
               "total":22
            },
            "legendary":1,
            "techs":{
               "blue":2,
               "green":0,
               "yellow":1,
               "red":1
            }
         },
         "custodiansPoints":0,
         "active":true,
         "score":10,
         "technologies":[
            "Scanlink Drone Network",
            "Psychoarchaeology",
            "Antimass Deflectors",
            "Dreadnought II",
            "Carrier II"
         ],
         "alliances":[

         ],
         "objectives":[
            "Diversify Research",
            "Explore Deep Space",
            "Make History",
            "Mine Rare Minerals",
            "Raise a Fleet",
            "Reclaim Ancient Monuments",
            "Support for the Throne (Blue)",
            "Prove Endurance",
            "Support for the Throne (Red)",
            "Seed of an Empire"
         ],
         "tradeGoods":0,
         "laws":[

         ]
      },
      {
         "commandTokens":{
            "fleet":6,
            "tactics":2,
            "strategy":1
         },
         "leaders":{
            "hero":"locked",
            "commander":"unlocked"
         },
         "strategyCards":[
            "Imperial"
         ],
         "color":"Red",
         "factionName":"Embers of Muaat",
         "handSummary":{
            "Promissory":2,
            "Actions":4,
            "Secret Objectives":1
         },
         "commodities":0,
         "planetTotals":{
            "traits":{
               "cultural":0,
               "industrial":2,
               "hazardous":4
            },
            "influence":{
               "avail":0,
               "total":12
            },
            "resources":{
               "avail":0,
               "total":13
            },
            "legendary":0,
            "techs":{
               "blue":0,
               "green":1,
               "yellow":0,
               "red":1
            }
         },
         "custodiansPoints":0,
         "active":true,
         "score":6,
         "technologies":[
            "Plasma Scoring",
            "Psychoarchaeology",
            "Hyper Metabolism",
            "X-89 Bacterial Weapon",
            "War Sun",
            "Prototype War Sun II"
         ],
         "alliances":[

         ],
         "objectives":[
            "Diversify Research",
            "Improve Infrastructure",
            "Raise a Fleet",
            "Demonstrate Your Power",
            "Mechanize the Military",
            "Support for the Throne (Yellow)"
         ],
         "tradeGoods":1,
         "laws":[
            "Minister of Exploration"
         ]
      },
      {
         "commandTokens":{
            "fleet":5,
            "tactics":3,
            "strategy":1
         },
         "leaders":{
            "hero":"purged",
            "commander":"unlocked"
         },
         "strategyCards":[
            "Technology"
         ],
         "color":"Green",
         "factionName":"Sardakk N'orr",
         "handSummary":[

         ],
         "commodities":0,
         "planetTotals":{
            "traits":{
               "cultural":2,
               "industrial":0,
               "hazardous":2
            },
            "influence":{
               "avail":0,
               "total":12
            },
            "resources":{
               "avail":1,
               "total":10
            },
            "legendary":2,
            "techs":{
               "blue":0,
               "green":0,
               "yellow":1,
               "red":0
            }
         },
         "custodiansPoints":0,
         "active":true,
         "score":6,
         "technologies":[
            "Neural Motivator",
            "Antimass Deflectors",
            "Gravity Drive",
            "Dacxive Animators",
            "Fighter II",
            "Carrier II"
         ],
         "alliances":[
            "Red",
            "White"
         ],
         "objectives":[
            "Diversify Research",
            "Improve Infrastructure",
            "Make History",
            "Learn the Secrets of the Cosmos",
            "Establish Hegemony",
            "Support for the Throne (White)"
         ],
         "tradeGoods":0,
         "laws":[

         ]
      }
   ],
   "crc":2341884123,
   "mapString":"",
   "setupTimestamp":1614584215.544,
   "speaker":"Red",
   "laws":[
      "Seed of an Empire",
      "Minister of Exploration",
      "Clandestine Operations"
   ],
   "isFranken":false,
   "round":5,
   "history":[
      {
         "timestamp":1614587263,
         "players":[
            {
               "commodities":2,
               "leaders":{
                  "hero":"locked",
                  "commander":"locked"
               },
               "strategyCards":[
                  "Leadership"
               ],
               "color":"White",
               "objectives":[

               ],
               "handSummary":{
                  "Secret Objectives":1
               },
               "commandTokens":{
                  "fleet":3,
                  "tactics":2,
                  "strategy":2
               },
               "planetTotals":{
                  "traits":{
                     "cultural":0,
                     "industrial":1,
                     "hazardous":0
                  },
                  "influence":{
                     "avail":1,
                     "total":3
                  },
                  "resources":{
                     "avail":4,
                     "total":6
                  },
                  "legendary":0,
                  "techs":{
                     "blue":0,
                     "green":0,
                     "yellow":0,
                     "red":0
                  }
               },
               "custodiansPoints":0,
               "score":0,
               "technologies":2,
               "alliances":[

               ],
               "tradeGoods":0,
               "laws":[

               ]
            },
            {
               "commodities":2,
               "leaders":{
                  "hero":"locked",
                  "commander":"locked"
               },
               "strategyCards":[
                  "Diplomacy"
               ],
               "color":"Blue",
               "objectives":[

               ],
               "handSummary":{
                  "Promissory":6,
                  "Secret Objectives":1
               },
               "commandTokens":{
                  "fleet":3,
                  "tactics":2,
                  "strategy":2
               },
               "planetTotals":{
                  "traits":{
                     "cultural":0,
                     "industrial":2,
                     "hazardous":0
                  },
                  "influence":{
                     "avail":0,
                     "total":6
                  },
                  "resources":{
                     "avail":5,
                     "total":9
                  },
                  "legendary":0,
                  "techs":{
                     "blue":0,
                     "green":0,
                     "yellow":0,
                     "red":0
                  }
               },
               "custodiansPoints":0,
               "score":0,
               "technologies":2,
               "alliances":[

               ],
               "tradeGoods":0,
               "laws":[

               ]
            },
            {
               "commodities":3,
               "leaders":{
                  "hero":"locked",
                  "commander":"locked"
               },
               "strategyCards":[
                  "Warfare"
               ],
               "color":"Purple",
               "objectives":[

               ],
               "handSummary":{
                  "Secret Objectives":1
               },
               "commandTokens":{
                  "fleet":3,
                  "tactics":2,
                  "strategy":2
               },
               "planetTotals":{
                  "traits":{
                     "cultural":0,
                     "industrial":1,
                     "hazardous":1
                  },
                  "influence":{
                     "avail":1,
                     "total":7
                  },
                  "resources":{
                     "avail":3,
                     "total":6
                  },
                  "legendary":0,
                  "techs":{
                     "blue":0,
                     "green":0,
                     "yellow":0,
                     "red":1
                  }
               },
               "custodiansPoints":0,
               "score":0,
               "technologies":1,
               "alliances":[

               ],
               "tradeGoods":1,
               "laws":[

               ]
            },
            {
               "commodities":3,
               "leaders":{
                  "hero":"locked",
                  "commander":"locked"
               },
               "strategyCards":[
                  "Technology"
               ],
               "color":"Yellow",
               "objectives":[

               ],
               "handSummary":{
                  "Secret Objectives":1
               },
               "commandTokens":{
                  "fleet":3,
                  "tactics":2,
                  "strategy":2
               },
               "planetTotals":{
                  "traits":{
                     "cultural":0,
                     "industrial":0,
                     "hazardous":0
                  },
                  "influence":{
                     "avail":5,
                     "total":5
                  },
                  "resources":{
                     "avail":3,
                     "total":3
                  },
                  "legendary":0,
                  "techs":{
                     "blue":0,
                     "green":0,
                     "yellow":0,
                     "red":0
                  }
               },
               "custodiansPoints":0,
               "score":0,
               "technologies":2,
               "alliances":[

               ],
               "tradeGoods":0,
               "laws":[

               ]
            },
            {
               "commodities":4,
               "leaders":{
                  "hero":"locked",
                  "commander":"locked"
               },
               "strategyCards":[
                  "Trade"
               ],
               "color":"Red",
               "objectives":[

               ],
               "handSummary":{
                  "Promissory":5,
                  "Secret Objectives":1
               },
               "commandTokens":{
                  "fleet":3,
                  "tactics":3,
                  "strategy":2
               },
               "planetTotals":{
                  "traits":{
                     "cultural":0,
                     "industrial":0,
                     "hazardous":0
                  },
                  "influence":{
                     "avail":1,
                     "total":1
                  },
                  "resources":{
                     "avail":4,
                     "total":4
                  },
                  "legendary":0,
                  "techs":{
                     "blue":0,
                     "green":0,
                     "yellow":0,
                     "red":0
                  }
               },
               "custodiansPoints":0,
               "score":0,
               "technologies":1,
               "alliances":[

               ],
               "tradeGoods":3,
               "laws":[

               ]
            },
            {
               "commodities":3,
               "leaders":{
                  "hero":"locked",
                  "commander":"locked"
               },
               "strategyCards":[
                  "Construction"
               ],
               "color":"Green",
               "objectives":[

               ],
               "handSummary":{
                  "Promissory":6,
                  "Secret Objectives":1
               },
               "commandTokens":{
                  "fleet":3,
                  "tactics":2,
                  "strategy":2
               },
               "planetTotals":{
                  "traits":{
                     "cultural":1,
                     "industrial":0,
                     "hazardous":0
                  },
                  "influence":{
                     "avail":1,
                     "total":3
                  },
                  "resources":{
                     "avail":4,
                     "total":6
                  },
                  "legendary":1,
                  "techs":{
                     "blue":0,
                     "green":0,
                     "yellow":0,
                     "red":0
                  }
               },
               "custodiansPoints":0,
               "score":0,
               "technologies":0,
               "alliances":[

               ],
               "tradeGoods":0,
               "laws":[

               ]
            }
         ],
         "speaker":"Blue",
         "setupTimestamp":1614584215.544,
         "round":1,
         "laws":[

         ]
      },
      {
         "timestamp":1614589094,
         "players":[
            {
               "commodities":2,
               "leaders":{
                  "hero":"locked",
                  "commander":"locked"
               },
               "strategyCards":[
                  "Trade"
               ],
               "color":"White",
               "objectives":[

               ],
               "handSummary":{
                  "Secret Objectives":1,
                  "Actions":1
               },
               "commandTokens":{
                  "fleet":3,
                  "tactics":3,
                  "strategy":2
               },
               "planetTotals":{
                  "traits":{
                     "cultural":1,
                     "industrial":1,
                     "hazardous":0
                  },
                  "influence":{
                     "avail":4,
                     "total":4
                  },
                  "resources":{
                     "avail":9,
                     "total":9
                  },
                  "legendary":0,
                  "techs":{
                     "blue":0,
                     "green":0,
                     "yellow":0,
                     "red":0
                  }
               },
               "custodiansPoints":0,
               "score":0,
               "technologies":3,
               "alliances":[

               ],
               "tradeGoods":0,
               "laws":[

               ]
            },
            {
               "commodities":0,
               "leaders":{
                  "hero":"locked",
                  "commander":"locked"
               },
               "strategyCards":[
                  "Technology"
               ],
               "color":"Blue",
               "objectives":[

               ],
               "handSummary":{
                  "Promissory":6,
                  "Actions":3,
                  "Secret Objectives":1
               },
               "commandTokens":{
                  "fleet":2,
                  "tactics":2,
                  "strategy":1
               },
               "planetTotals":{
                  "traits":{
                     "cultural":1,
                     "industrial":4,
                     "hazardous":0
                  },
                  "influence":{
                     "avail":11,
                     "total":11
                  },
                  "resources":{
                     "avail":16,
                     "total":16
                  },
                  "legendary":0,
                  "techs":{
                     "blue":0,
                     "green":0,
                     "yellow":1,
                     "red":1
                  }
               },
               "custodiansPoints":0,
               "score":0,
               "technologies":3,
               "alliances":[

               ],
               "tradeGoods":1,
               "laws":[

               ]
            },
            {
               "commodities":2,
               "leaders":{
                  "hero":"locked",
                  "commander":"locked"
               },
               "strategyCards":[
                  "Leadership"
               ],
               "color":"Purple",
               "objectives":[

               ],
               "handSummary":{
                  "Secret Objectives":1,
                  "Actions":1
               },
               "commandTokens":{
                  "fleet":3,
                  "tactics":1,
                  "strategy":1
               },
               "planetTotals":{
                  "traits":{
                     "cultural":2,
                     "industrial":2,
                     "hazardous":2
                  },
                  "influence":{
                     "avail":5,
                     "total":18
                  },
                  "resources":{
                     "avail":7,
                     "total":14
                  },
                  "legendary":0,
                  "techs":{
                     "blue":1,
                     "green":0,
                     "yellow":1,
                     "red":1
                  }
               },
               "custodiansPoints":1,
               "score":0,
               "technologies":2,
               "alliances":[

               ],
               "tradeGoods":1,
               "laws":[

               ]
            },
            {
               "commodities":0,
               "leaders":{
                  "hero":"locked",
                  "commander":"locked"
               },
               "strategyCards":[
                  "Warfare"
               ],
               "color":"Yellow",
               "objectives":[
                  "Diversify Research"
               ],
               "handSummary":{
                  "Secret Objectives":1,
                  "Actions":1
               },
               "commandTokens":{
                  "fleet":2,
                  "tactics":2,
                  "strategy":1
               },
               "planetTotals":{
                  "traits":{
                     "cultural":1,
                     "industrial":0,
                     "hazardous":2
                  },
                  "influence":{
                     "avail":12,
                     "total":12
                  },
                  "resources":{
                     "avail":10,
                     "total":10
                  },
                  "legendary":0,
                  "techs":{
                     "blue":1,
                     "green":0,
                     "yellow":0,
                     "red":0
                  }
               },
               "custodiansPoints":0,
               "score":1,
               "technologies":4,
               "alliances":[

               ],
               "tradeGoods":0,
               "laws":[

               ]
            },
            {
               "commodities":0,
               "leaders":{
                  "hero":"locked",
                  "commander":"locked"
               },
               "strategyCards":[
                  "Construction"
               ],
               "color":"Red",
               "objectives":[

               ],
               "handSummary":{
                  "Promissory":5,
                  "Actions":2,
                  "Secret Objectives":1
               },
               "commandTokens":{
                  "fleet":2,
                  "tactics":2,
                  "strategy":2
               },
               "planetTotals":{
                  "traits":{
                     "cultural":0,
                     "industrial":2,
                     "hazardous":3
                  },
                  "influence":{
                     "avail":9,
                     "total":9
                  },
                  "resources":{
                     "avail":12,
                     "total":12
                  },
                  "legendary":0,
                  "techs":{
                     "blue":0,
                     "green":1,
                     "yellow":0,
                     "red":0
                  }
               },
               "custodiansPoints":0,
               "score":0,
               "technologies":2,
               "alliances":[

               ],
               "tradeGoods":0,
               "laws":[

               ]
            },
            {
               "commodities":0,
               "leaders":{
                  "hero":"locked",
                  "commander":"locked"
               },
               "strategyCards":[
                  "Politics"
               ],
               "color":"Green",
               "objectives":[

               ],
               "handSummary":{
                  "Promissory":6,
                  "Actions":2,
                  "Secret Objectives":1
               },
               "commandTokens":{
                  "fleet":2,
                  "tactics":1,
                  "strategy":3
               },
               "planetTotals":{
                  "traits":{
                     "cultural":2,
                     "industrial":0,
                     "hazardous":2
                  },
                  "influence":{
                     "avail":3,
                     "total":6
                  },
                  "resources":{
                     "avail":9,
                     "total":9
                  },
                  "legendary":2,
                  "techs":{
                     "blue":0,
                     "green":0,
                     "yellow":1,
                     "red":0
                  }
               },
               "custodiansPoints":0,
               "score":0,
               "technologies":1,
               "alliances":[

               ],
               "tradeGoods":4,
               "laws":[

               ]
            }
         ],
         "speaker":"Blue",
         "setupTimestamp":1614584215.544,
         "round":2,
         "laws":[

         ]
      },
      {
         "timestamp":1614592751,
         "players":[
            {
               "commodities":0,
               "leaders":{
                  "hero":"locked",
                  "commander":"locked"
               },
               "strategyCards":[
                  "Technology"
               ],
               "color":"White",
               "objectives":[

               ],
               "handSummary":{
                  "Promissory":5,
                  "Actions":3,
                  "Secret Objectives":2
               },
               "commandTokens":{
                  "fleet":3,
                  "tactics":3,
                  "strategy":1
               },
               "planetTotals":{
                  "traits":{
                     "cultural":2,
                     "industrial":2,
                     "hazardous":1
                  },
                  "influence":{
                     "avail":6,
                     "total":10
                  },
                  "resources":{
                     "avail":11,
                     "total":13
                  },
                  "legendary":0,
                  "techs":{
                     "blue":1,
                     "green":0,
                     "yellow":0,
                     "red":0
                  }
               },
               "custodiansPoints":0,
               "score":0,
               "technologies":4,
               "alliances":[

               ],
               "tradeGoods":10,
               "laws":[

               ]
            },
            {
               "commodities":0,
               "leaders":{
                  "hero":"locked",
                  "commander":"unlocked"
               },
               "strategyCards":[
                  "Warfare"
               ],
               "color":"Blue",
               "objectives":[
                  "Diversify Research",
                  "Support for the Throne (Purple)",
                  "Support for the Throne (Yellow)"
               ],
               "handSummary":{
                  "Promissory":4,
                  "Actions":4,
                  "Secret Objectives":2
               },
               "commandTokens":{
                  "fleet":4,
                  "tactics":2,
                  "strategy":1
               },
               "planetTotals":{
                  "traits":{
                     "cultural":2,
                     "industrial":4,
                     "hazardous":1
                  },
                  "influence":{
                     "avail":10,
                     "total":16
                  },
                  "resources":{
                     "avail":17,
                     "total":21
                  },
                  "legendary":0,
                  "techs":{
                     "blue":1,
                     "green":0,
                     "yellow":1,
                     "red":1
                  }
               },
               "custodiansPoints":1,
               "score":4,
               "technologies":4,
               "alliances":[
                  "Purple"
               ],
               "tradeGoods":3,
               "laws":[

               ]
            },
            {
               "commodities":0,
               "leaders":{
                  "hero":"locked",
                  "commander":"unlocked"
               },
               "strategyCards":[
                  "Imperial"
               ],
               "color":"Purple",
               "objectives":[
                  "Explore Deep Space",
                  "Make History",
                  "Strengthen Bonds"
               ],
               "handSummary":{
                  "Actions":6
               },
               "commandTokens":{
                  "fleet":4,
                  "tactics":5,
                  "strategy":1
               },
               "planetTotals":{
                  "traits":{
                     "cultural":1,
                     "industrial":2,
                     "hazardous":2
                  },
                  "influence":{
                     "avail":8,
                     "total":16
                  },
                  "resources":{
                     "avail":11,
                     "total":13
                  },
                  "legendary":0,
                  "techs":{
                     "blue":0,
                     "green":0,
                     "yellow":1,
                     "red":1
                  }
               },
               "custodiansPoints":3,
               "score":6,
               "technologies":3,
               "alliances":[
                  "Blue"
               ],
               "tradeGoods":1,
               "laws":[

               ]
            },
            {
               "commodities":0,
               "leaders":{
                  "hero":"locked",
                  "commander":"locked"
               },
               "strategyCards":[
                  "Diplomacy"
               ],
               "color":"Yellow",
               "objectives":[
                  "Diversify Research",
                  "Explore Deep Space",
                  "Support for the Throne (Blue)"
               ],
               "handSummary":{
                  "Secret Objectives":2,
                  "Actions":3
               },
               "commandTokens":{
                  "fleet":3,
                  "tactics":2,
                  "strategy":1
               },
               "planetTotals":{
                  "traits":{
                     "cultural":2,
                     "industrial":0,
                     "hazardous":4
                  },
                  "influence":{
                     "avail":12,
                     "total":12
                  },
                  "resources":{
                     "avail":16,
                     "total":16
                  },
                  "legendary":0,
                  "techs":{
                     "blue":1,
                     "green":0,
                     "yellow":0,
                     "red":0
                  }
               },
               "custodiansPoints":1,
               "score":4,
               "technologies":4,
               "alliances":[

               ],
               "tradeGoods":1,
               "laws":[

               ]
            },
            {
               "commodities":0,
               "leaders":{
                  "hero":"locked",
                  "commander":"locked"
               },
               "strategyCards":[
                  "Politics"
               ],
               "color":"Red",
               "objectives":[
                  "Improve Infrastructure"
               ],
               "handSummary":{
                  "Promissory":4,
                  "Actions":6,
                  "Secret Objectives":1
               },
               "commandTokens":{
                  "fleet":4,
                  "tactics":4,
                  "strategy":2
               },
               "planetTotals":{
                  "traits":{
                     "cultural":0,
                     "industrial":2,
                     "hazardous":4
                  },
                  "influence":{
                     "avail":9,
                     "total":12
                  },
                  "resources":{
                     "avail":12,
                     "total":13
                  },
                  "legendary":0,
                  "techs":{
                     "blue":0,
                     "green":1,
                     "yellow":0,
                     "red":1
                  }
               },
               "custodiansPoints":0,
               "score":1,
               "technologies":3,
               "alliances":[
                  "Green"
               ],
               "tradeGoods":3,
               "laws":[

               ]
            },
            {
               "commodities":0,
               "leaders":{
                  "hero":"locked",
                  "commander":"unlocked"
               },
               "strategyCards":[
                  "Leadership"
               ],
               "color":"Green",
               "objectives":[

               ],
               "handSummary":{
                  "Promissory":5,
                  "Actions":6,
                  "Secret Objectives":2
               },
               "commandTokens":{
                  "fleet":2,
                  "tactics":2,
                  "strategy":2
               },
               "planetTotals":{
                  "traits":{
                     "cultural":2,
                     "industrial":0,
                     "hazardous":2
                  },
                  "influence":{
                     "avail":3,
                     "total":6
                  },
                  "resources":{
                     "avail":9,
                     "total":9
                  },
                  "legendary":2,
                  "techs":{
                     "blue":0,
                     "green":0,
                     "yellow":1,
                     "red":0
                  }
               },
               "custodiansPoints":0,
               "score":0,
               "technologies":2,
               "alliances":[
                  "Red"
               ],
               "tradeGoods":6,
               "laws":[

               ]
            }
         ],
         "speaker":"Yellow",
         "setupTimestamp":1614584215.544,
         "round":3,
         "laws":[

         ]
      },
      {
         "timestamp":1614597028,
         "players":[
            {
               "commodities":0,
               "leaders":{
                  "hero":"locked",
                  "commander":"unlocked"
               },
               "strategyCards":[
                  "Warfare"
               ],
               "color":"White",
               "objectives":[
                  "Improve Infrastructure"
               ],
               "handSummary":{
                  "Promissory":4,
                  "Actions":1,
                  "Secret Objectives":2
               },
               "commandTokens":{
                  "fleet":5,
                  "tactics":2,
                  "strategy":1
               },
               "planetTotals":{
                  "traits":{
                     "cultural":1,
                     "industrial":2,
                     "hazardous":2
                  },
                  "influence":{
                     "avail":5,
                     "total":11
                  },
                  "resources":{
                     "avail":8,
                     "total":13
                  },
                  "legendary":0,
                  "techs":{
                     "blue":1,
                     "green":0,
                     "yellow":0,
                     "red":0
                  }
               },
               "custodiansPoints":0,
               "score":1,
               "technologies":7,
               "alliances":[
                  "Green"
               ],
               "tradeGoods":11,
               "laws":[

               ]
            },
            {
               "commodities":0,
               "leaders":{
                  "hero":"locked",
                  "commander":"unlocked"
               },
               "strategyCards":[
                  "Trade"
               ],
               "color":"Blue",
               "objectives":[
                  "Diversify Research",
                  "Make History",
                  "Support for the Throne (Purple)",
                  "Support for the Throne (Yellow)"
               ],
               "handSummary":{
                  "Promissory":3,
                  "Actions":6,
                  "Secret Objectives":2
               },
               "commandTokens":{
                  "fleet":5,
                  "tactics":4,
                  "strategy":1
               },
               "planetTotals":{
                  "traits":{
                     "cultural":3,
                     "industrial":4,
                     "hazardous":0
                  },
                  "influence":{
                     "avail":7,
                     "total":15
                  },
                  "resources":{
                     "avail":15,
                     "total":21
                  },
                  "legendary":0,
                  "techs":{
                     "blue":1,
                     "green":0,
                     "yellow":1,
                     "red":1
                  }
               },
               "custodiansPoints":1,
               "score":5,
               "technologies":5,
               "alliances":[
                  "Purple"
               ],
               "tradeGoods":8,
               "laws":[

               ]
            },
            {
               "commodities":0,
               "leaders":{
                  "hero":"unlocked",
                  "commander":"unlocked"
               },
               "strategyCards":[
                  "Construction"
               ],
               "color":"Purple",
               "objectives":[
                  "Diversify Research",
                  "Explore Deep Space",
                  "Make History",
                  "Strengthen Bonds"
               ],
               "handSummary":{
                  "Promissory":1,
                  "Actions":4
               },
               "commandTokens":{
                  "fleet":5,
                  "tactics":5,
                  "strategy":2
               },
               "planetTotals":{
                  "traits":{
                     "cultural":1,
                     "industrial":2,
                     "hazardous":2
                  },
                  "influence":{
                     "avail":3,
                     "total":17
                  },
                  "resources":{
                     "avail":6,
                     "total":14
                  },
                  "legendary":0,
                  "techs":{
                     "blue":0,
                     "green":0,
                     "yellow":1,
                     "red":1
                  }
               },
               "custodiansPoints":3,
               "score":7,
               "technologies":4,
               "alliances":[
                  "Blue"
               ],
               "tradeGoods":3,
               "laws":[

               ]
            },
            {
               "commodities":0,
               "leaders":{
                  "hero":"locked",
                  "commander":"locked"
               },
               "strategyCards":[
                  "Leadership"
               ],
               "color":"Yellow",
               "objectives":[
                  "Diversify Research",
                  "Explore Deep Space",
                  "Make History",
                  "Support for the Throne (Blue)",
                  "Prove Endurance"
               ],
               "handSummary":{
                  "Secret Objectives":1,
                  "Actions":6
               },
               "commandTokens":{
                  "fleet":5,
                  "tactics":5,
                  "strategy":2
               },
               "planetTotals":{
                  "traits":{
                     "cultural":3,
                     "industrial":0,
                     "hazardous":4
                  },
                  "influence":{
                     "avail":0,
                     "total":15
                  },
                  "resources":{
                     "avail":8,
                     "total":16
                  },
                  "legendary":1,
                  "techs":{
                     "blue":1,
                     "green":0,
                     "yellow":0,
                     "red":0
                  }
               },
               "custodiansPoints":1,
               "score":6,
               "technologies":6,
               "alliances":[

               ],
               "tradeGoods":0,
               "laws":[

               ]
            },
            {
               "commodities":0,
               "leaders":{
                  "hero":"locked",
                  "commander":"locked"
               },
               "strategyCards":[
                  "Politics"
               ],
               "color":"Red",
               "objectives":[
                  "Diversify Research",
                  "Improve Infrastructure",
                  "Demonstrate Your Power",
                  "Mechanize the Military"
               ],
               "handSummary":{
                  "Promissory":4,
                  "Actions":5
               },
               "commandTokens":{
                  "fleet":5,
                  "tactics":4,
                  "strategy":3
               },
               "planetTotals":{
                  "traits":{
                     "cultural":0,
                     "industrial":2,
                     "hazardous":4
                  },
                  "influence":{
                     "avail":5,
                     "total":12
                  },
                  "resources":{
                     "avail":8,
                     "total":13
                  },
                  "legendary":0,
                  "techs":{
                     "blue":0,
                     "green":1,
                     "yellow":0,
                     "red":1
                  }
               },
               "custodiansPoints":0,
               "score":4,
               "technologies":4,
               "alliances":[

               ],
               "tradeGoods":4,
               "laws":[

               ]
            },
            {
               "commodities":0,
               "leaders":{
                  "hero":"locked",
                  "commander":"unlocked"
               },
               "strategyCards":[
                  "Imperial"
               ],
               "color":"Green",
               "objectives":[
                  "Improve Infrastructure",
                  "Learn the Secrets of the Cosmos"
               ],
               "handSummary":{
                  "Promissory":5,
                  "Actions":6,
                  "Secret Objectives":1
               },
               "commandTokens":{
                  "fleet":3,
                  "tactics":3,
                  "strategy":2
               },
               "planetTotals":{
                  "traits":{
                     "cultural":2,
                     "industrial":0,
                     "hazardous":2
                  },
                  "influence":{
                     "avail":1,
                     "total":6
                  },
                  "resources":{
                     "avail":7,
                     "total":9
                  },
                  "legendary":2,
                  "techs":{
                     "blue":0,
                     "green":0,
                     "yellow":1,
                     "red":0
                  }
               },
               "custodiansPoints":0,
               "score":2,
               "technologies":3,
               "alliances":[
                  "Red",
                  "White"
               ],
               "tradeGoods":5,
               "laws":[

               ]
            }
         ],
         "speaker":"Yellow",
         "setupTimestamp":1614584215.544,
         "round":4,
         "laws":[

         ]
      },
      {
         "timestamp":1614601311,
         "players":[
            {
               "commodities":0,
               "leaders":{
                  "hero":"locked",
                  "commander":"unlocked"
               },
               "strategyCards":[
                  "Leadership"
               ],
               "color":"White",
               "objectives":[
                  "Improve Infrastructure",
                  "Raise a Fleet",
                  "Support for the Throne (Green)"
               ],
               "handSummary":{
                  "Promissory":3,
                  "Actions":2,
                  "Secret Objectives":4
               },
               "commandTokens":{
                  "fleet":6,
                  "tactics":3,
                  "strategy":1
               },
               "planetTotals":{
                  "traits":{
                     "cultural":2,
                     "industrial":2,
                     "hazardous":1
                  },
                  "influence":{
                     "avail":3,
                     "total":10
                  },
                  "resources":{
                     "avail":5,
                     "total":13
                  },
                  "legendary":0,
                  "techs":{
                     "blue":1,
                     "green":0,
                     "yellow":0,
                     "red":0
                  }
               },
               "custodiansPoints":0,
               "score":3,
               "technologies":8,
               "alliances":[
                  "Green"
               ],
               "tradeGoods":5,
               "laws":[

               ]
            },
            {
               "commodities":0,
               "leaders":{
                  "hero":"unlocked",
                  "commander":"unlocked"
               },
               "strategyCards":[
                  "Warfare"
               ],
               "color":"Blue",
               "objectives":[
                  "Diversify Research",
                  "Hoard Raw Materials",
                  "Make History",
                  "Raise a Fleet",
                  "Support for the Throne (Purple)",
                  "Shard of the Throne"
               ],
               "handSummary":{
                  "Promissory":3,
                  "Actions":2,
                  "Secret Objectives":2
               },
               "commandTokens":{
                  "fleet":6,
                  "tactics":3,
                  "strategy":1
               },
               "planetTotals":{
                  "traits":{
                     "cultural":3,
                     "industrial":4,
                     "hazardous":1
                  },
                  "influence":{
                     "avail":8,
                     "total":17
                  },
                  "resources":{
                     "avail":15,
                     "total":23
                  },
                  "legendary":0,
                  "techs":{
                     "blue":1,
                     "green":0,
                     "yellow":1,
                     "red":1
                  }
               },
               "custodiansPoints":0,
               "score":7,
               "technologies":6,
               "alliances":[
                  "Purple"
               ],
               "tradeGoods":5,
               "laws":[

               ]
            },
            {
               "commodities":0,
               "leaders":{
                  "hero":"unlocked",
                  "commander":"unlocked"
               },
               "strategyCards":[
                  "Diplomacy"
               ],
               "color":"Purple",
               "objectives":[
                  "Diversify Research",
                  "Explore Deep Space",
                  "Make History",
                  "Raise a Fleet",
                  "Strengthen Bonds"
               ],
               "handSummary":{
                  "Promissory":2,
                  "Actions":7,
                  "Secret Objectives":1
               },
               "commandTokens":{
                  "fleet":4,
                  "tactics":5,
                  "strategy":2
               },
               "planetTotals":{
                  "traits":{
                     "cultural":0,
                     "industrial":2,
                     "hazardous":2
                  },
                  "influence":{
                     "avail":1,
                     "total":10
                  },
                  "resources":{
                     "avail":2,
                     "total":11
                  },
                  "legendary":0,
                  "techs":{
                     "blue":0,
                     "green":0,
                     "yellow":1,
                     "red":1
                  }
               },
               "custodiansPoints":2,
               "score":8,
               "technologies":5,
               "alliances":[
                  "Blue"
               ],
               "tradeGoods":0,
               "laws":[

               ]
            },
            {
               "commodities":1,
               "leaders":{
                  "hero":"unlocked",
                  "commander":"locked"
               },
               "strategyCards":[
                  "Construction"
               ],
               "color":"Yellow",
               "objectives":[
                  "Diversify Research",
                  "Explore Deep Space",
                  "Make History",
                  "Mine Rare Minerals",
                  "Raise a Fleet",
                  "Support for the Throne (Blue)",
                  "Prove Endurance",
                  "Support for the Throne (Red)",
                  "Seed of an Empire"
               ],
               "handSummary":{
                  "Secret Objectives":1,
                  "Actions":5
               },
               "commandTokens":{
                  "fleet":4,
                  "tactics":9,
                  "strategy":0
               },
               "planetTotals":{
                  "traits":{
                     "cultural":3,
                     "industrial":0,
                     "hazardous":4
                  },
                  "influence":{
                     "avail":0,
                     "total":17
                  },
                  "resources":{
                     "avail":4,
                     "total":16
                  },
                  "legendary":1,
                  "techs":{
                     "blue":1,
                     "green":0,
                     "yellow":0,
                     "red":0
                  }
               },
               "custodiansPoints":0,
               "score":9,
               "technologies":7,
               "alliances":[

               ],
               "tradeGoods":2,
               "laws":[

               ]
            },
            {
               "commodities":0,
               "leaders":{
                  "hero":"locked",
                  "commander":"unlocked"
               },
               "strategyCards":[
                  "Imperial"
               ],
               "color":"Red",
               "objectives":[
                  "Diversify Research",
                  "Improve Infrastructure",
                  "Raise a Fleet",
                  "Demonstrate Your Power",
                  "Mechanize the Military",
                  "Support for the Throne (Yellow)"
               ],
               "handSummary":{
                  "Promissory":2,
                  "Actions":4,
                  "Secret Objectives":1
               },
               "commandTokens":{
                  "fleet":6,
                  "tactics":2,
                  "strategy":1
               },
               "planetTotals":{
                  "traits":{
                     "cultural":0,
                     "industrial":2,
                     "hazardous":4
                  },
                  "influence":{
                     "avail":2,
                     "total":12
                  },
                  "resources":{
                     "avail":4,
                     "total":13
                  },
                  "legendary":0,
                  "techs":{
                     "blue":0,
                     "green":1,
                     "yellow":0,
                     "red":1
                  }
               },
               "custodiansPoints":0,
               "score":6,
               "technologies":5,
               "alliances":[

               ],
               "tradeGoods":1,
               "laws":[
                  "Minister of Exploration"
               ]
            },
            {
               "commodities":0,
               "leaders":{
                  "hero":"purged",
                  "commander":"unlocked"
               },
               "strategyCards":[
                  "Technology"
               ],
               "color":"Green",
               "objectives":[
                  "Diversify Research",
                  "Improve Infrastructure",
                  "Make History",
                  "Learn the Secrets of the Cosmos",
                  "Establish Hegemony",
                  "Support for the Throne (White)"
               ],
               "handSummary":{
                  "Promissory":4,
                  "Actions":6,
                  "Secret Objectives":1
               },
               "commandTokens":{
                  "fleet":5,
                  "tactics":5,
                  "strategy":1
               },
               "planetTotals":{
                  "traits":{
                     "cultural":2,
                     "industrial":0,
                     "hazardous":2
                  },
                  "influence":{
                     "avail":0,
                     "total":12
                  },
                  "resources":{
                     "avail":1,
                     "total":10
                  },
                  "legendary":2,
                  "techs":{
                     "blue":0,
                     "green":0,
                     "yellow":1,
                     "red":0
                  }
               },
               "custodiansPoints":0,
               "score":6,
               "technologies":6,
               "alliances":[
                  "Red",
                  "White"
               ],
               "tradeGoods":0,
               "laws":[

               ]
            }
         ],
         "speaker":"Red",
         "setupTimestamp":1614584215.544,
         "round":5,
         "laws":[
            "Seed of an Empire",
            "Minister of Exploration",
            "Clandestine Operations"
         ]
      }
   ]
}
  `)
}
