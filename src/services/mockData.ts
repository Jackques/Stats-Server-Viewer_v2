export class StatsServerHTTPMockData {
    public static getProjects(){
        return ['T-Helper', 'Fitness-stats'];
    }

    public static getProfiles(){
        return [
            {
              name: 'Jack-original', 
              dateTimeLatestResource: '2023-11-25T17:33:15.000+00:00'
            }, 
            {
              name: 'Jack-updated', 
              dateTimeLatestResource: '2023-12-03T20:55:38.000+00:00'
            }
          ];
    }

    public static getKeysFromProject(){
      return [
        {
            "typeInnerValues": "String",
            "dataType": "List",
            "keyName": "Type-of-match-or-like",
            "innerListValues": [
                "i_sent_match_superlike",
                "superlike",
                "like",
                "pass",
                "match_sent_me_superlike",
                "fast_match",
                "superliked",
                "passed",
                "super_like_match",
                "boost_match",
                "liked"
            ]
        },
        {
            "dataType": "Boolean",
            "keyName": "Seems-to-be-active"
        },
        {
            "dataType": "Boolean",
            "keyName": "Is-gold-match"
        },
        {
            "dataType": "String",
            "keyName": "Gender"
        },
        {
            "typeInnerValues": "String",
            "dataType": "List",
            "keyName": "Interests",
            "innerListValues": [
                "Rugby",
                "Ravefeesten",
                "Koken",
                "Tweedehands kleding",
                "Sauna",
                "Badminton",
                "Vrijwilligerswerk",
                "Bubble Tea",
                "Wetenswaardigheden",
                "BBQ",
                "Cricket",
                "Thee",
                "Kattenmens",
                "Schilderen",
                "Surfen",
                "Bordspellen",
                "Comedy",
                "Pimm's",
                "Een drankje doen",
                "Noedels",
                "Astrologie",
                "Sneakers",
                "Kunstgalerijen",
                "Koffie",
                "Snowboarden",
                "Pilates",
                "Mental Health Awareness",
                "Shoppen",
                "Bioscoop",
                "Festivals",
                "Tatoeages",
                "Theater",
                "Zwemmen",
                "Picknicken",
                "Brunch",
                "Lezen",
                "Vechtsport",
                "Foodietour",
                "Museum",
                "Sushi",
                "Atleet",
                "Series bingen",
                "Wielrennen",
                "Tuinieren",
                "Escaperoom",
                "Voetbal",
                "Fotografie",
                "Sciencefiction",
                "Sociale ontwikkeling",
                "Memes",
                "Gewichtheffen",
                "Tentoonstellingen",
                "Skiën",
                "Start-ups",
                "Netflix",
                "Make-up",
                "Investeren",
                "Black Lives Matter",
                "Milieubescherming",
                "Fashion",
                "Hardlopen",
                "Nieuwe dingen proberen",
                "Suppen",
                "Mindfulness",
                "Marvel",
                "Koffietentje",
                "90s kid",
                "Stier",
                "Disney",
                "IJs",
                "Spiritualiteit",
                "Klussen",
                "Podcasts",
                "Hondenmens",
                "Love Island",
                "Enge films",
                "Zingen",
                "Fitness",
                "Vrienden maken",
                "Concerten",
                "Spa",
                "Speciaalbier",
                "Autosport",
                "Me-time",
                "Stappen",
                "Skincare",
                "Spotify",
                "Sport",
                "Gelijkheid",
                "Natuur",
                "Wandelen",
                "Boogschieten",
                "Outdoor",
                "Backpacken",
                "Elektronische muziek",
                "Wijn",
                "Kamperen",
                "Borrelen",
                "Golf",
                "Boxing",
                "Rock",
                "Sportschool",
                "Karaoke",
                "Auto's",
                "Roadtrips",
                "Amateurkok",
                "TikTok",
                "Fietsen",
                "Taaluitwisseling",
                "Reggaeton",
                "Volleybal",
                "Hiken",
                "Harry Potter",
                "Gamer",
                "Instagram",
                "CrossFit",
                "Exposities",
                "Yoga",
                "Schorpioen",
                "Bloggen",
                "Bakken",
                "Actieve levensstijl",
                "Reizen",
                "Thuis sporten",
                "Broadway",
                "Stand-up comedy",
                "Politiek",
                "Padel",
                "Beach bars",
                "Kunst",
                "Muziek",
                "Chatten als ik me verveel",
                "Streetfood",
                "Foodie",
                "Veganistisch koken",
                "Dansen",
                "Motorrijden",
                "Tennis",
                "Hockey",
                "LGBTQ+-rechten",
                "Bergen",
                "Poëzie",
                "Klimmen",
                "Cultuur",
                "Gin-tonic",
                "Schrijven",
                "Ondernemen",
                "Heavy metal",
                "Wandelroutes doen",
                "Tekenen",
                "Zelfontwikkeling",
                "Online games",
                "Joggen",
                "Meditatie",
                "Manga",
                "IJsthee"
            ]
        },
        {
            "dataType": "String",
            "keyName": "Name"
        },
        {
            "dataType": "Boolean",
            "keyName": "Needs-reminder"
        },
        {
            "dataType": "Boolean",
            "keyName": "Seems-obese"
        },
        {
            "dataType": "WholeNumber",
            "keyName": "Vibe-conversation"
        },
        {
            "dataType": "Boolean",
            "keyName": "Is-match"
        },
        {
            "dataType": "Boolean",
            "keyName": "Conversation-exists"
        },
        {
            "dataType": "Boolean",
            "keyName": "Interested-in-sex"
        },
        {
            "dataType": "String",
            "keyName": "Job"
        },
        {
            "dataType": "Boolean",
            "keyName": "Has-usefull-profiletext"
        },
        {
            "dataType": "Boolean",
            "keyName": "Seems-fake"
        },
        {
            "dataType": "Boolean",
            "keyName": "Liked-me-first-is-instant-match"
        },
        {
            "dataType": "Boolean",
            "keyName": "Needs-messages-update"
        },
        {
            "dataType": "Boolean",
            "keyName": "Seemingly-deleted-profile"
        },
        {
            "typeInnerValues": "Map",
            "dataType": "List",
            "keyName": "Messages",
            "innerMapValues": [
                {
                    "dataType": "DateString",
                    "keyName": "datetime"
                },
                {
                    "dataType": "String",
                    "keyName": "message"
                },
                {
                    "dataType": "String",
                    "keyName": "author"
                }
            ]
        },
        {
            "dataType": "DateString",
            "keyName": "Last-updated"
        },
        {
            "dataType": "String",
            "keyName": "City"
        },
        {
            "typeInnerValues": "Map",
            "dataType": "List",
            "keyName": "Distance-in-km",
            "innerMapValues": [
                {
                    "dataType": "DateString",
                    "keyName": "dateTime"
                },
                {
                    "dataType": "WholeNumber",
                    "keyName": "distanceInKM"
                }
            ]
        },
        {
            "dataType": "DateString",
            "keyName": "Date-of-acquired-number"
        },
        {
            "dataType": "WholeNumber",
            "keyName": "Amount-of-pictures"
        },
        {
            "typeInnerValues": "String",
            "dataType": "List",
            "keyName": "Vibe-tags",
            "innerListValues": [
                "seems-boring",
                "is-nerdy",
                "is-bitchy",
                "seems-sweet",
                "seems-bitchy",
                "seems-travelfreak",
                "is-travelfreak",
                "is-tokkie",
                "has-awesome-personality",
                "seems-awesome-personality",
                "seems-interested-in-ons-fwb-etc",
                "seems-tokkie",
                "seems-airhead",
                "is-sweet",
                "seems-toughgirl",
                "is-airhead",
                "seems-nerdy",
                "is-toughgirl",
                "is-boring"
            ]
        },
        {
            "dataType": "Boolean",
            "keyName": "Is-verified"
        },
        {
            "dataType": "Boolean",
            "keyName": "Seems-toppick"
        },
        {
            "dataType": "WholeNumber",
            "keyName": "Attractiveness-score"
        },
        {
            "typeInnerValues": "MapKeyValues",
            "dataType": "Map",
            "keyName": "System-no",
            "innerMapValues": [
                {
                    "dataType": "String",
                    "keyName": "tempId"
                },
                {
                    "dataType": "String",
                    "keyName": "appType"
                },
                {
                    "dataType": "String",
                    "keyName": "id"
                }
            ]
        },
        {
            "dataType": "Boolean",
            "keyName": "Acquired-number"
        },
        {
            "dataType": "Boolean",
            "keyName": "Blocked-or-removed"
        },
        {
            "dataType": "DateString",
            "keyName": "Date-match"
        },
        {
            "dataType": "Boolean",
            "keyName": "Potential-click"
        },
        {
            "dataType": "Boolean",
            "keyName": "Is-uitblinker-for-Me"
        },
        {
            "dataType": "Boolean",
            "keyName": "Match-wants-no-contact"
        },
        {
            "dataType": "Boolean",
            "keyName": "Did-i-unmatch"
        },
        {
            "dataType": "String",
            "keyName": "School"
        },
        {
            "typeInnerValues": "String",
            "dataType": "List",
            "keyName": "Height",
            "innerListValues": [
                "seems-short < 1.60m",
                "is-very-tall > 1.80m",
                "is-normal >= 1.60-1.70m",
                "indetermineable-height",
                "is-tall > 1.70-1.80m",
                "seems-very-tall > 1.80m",
                "is-short < 1.60m",
                "seems-normal >= 1.60-1.70m",
                "seems-tall > 1.70-1.80m"
            ]
        },
        {
            "dataType": "Boolean",
            "keyName": "Match-responded"
        },
        {
            "dataType": "Boolean",
            "keyName": "Match-sent-first-message"
        },
        {
            "dataType": "DecimalNumber",
            "keyName": "Age"
        },
        {
            "dataType": "String",
            "keyName": "Notes"
        },
        {
            "dataType": "Boolean",
            "keyName": "Needs-profile-update"
        },
        {
            "typeInnerValues": "Map",
            "dataType": "List",
            "keyName": "How-many-ghosts",
            "innerMapValues": [
                {
                    "dataType": "WholeNumber",
                    "keyName": "number"
                },
                {
                    "dataType": "String",
                    "keyName": "status"
                },
                {
                    "dataType": "WholeNumber",
                    "keyName": "timeSinceLastMessageMS"
                }
            ]
        },
        {
            "dataType": "WholeNumber",
            "keyName": "No"
        },
        {
            "dataType": "Boolean",
            "keyName": "Seems-empty"
        },
        {
            "typeInnerValues": "Map",
            "dataType": "List",
            "keyName": "Reminders-amount",
            "innerMapValues": [
                {
                    "dataType": "DateString",
                    "keyName": "datetimeMyLastMessage"
                },
                {
                    "dataType": "DateString",
                    "keyName": "datetimeReminderSent"
                },
                {
                    "dataType": "Boolean",
                    "keyName": "hasGottenReply"
                },
                {
                    "dataType": "String",
                    "keyName": "textContentReminder"
                },
                {
                    "dataType": "WholeNumber",
                    "keyName": "number"
                }
            ]
        },
        {
            "typeInnerValues": "String",
            "dataType": "List",
            "keyName": "Details-tags",
            "innerListValues": [
                "has-MY-humor",
                "is-immigrant-or-expat",
                "seems-mom",
                "has-multiple-children",
                "interested-in-ons",
                "has-big-*****-not-obese",
                "interested-in-relationship-only",
                "has-kid",
                "seems-has-humor",
                "seems-has-MY-humor",
                "is-prettier-in-real-life",
                "does-not-want-(more)-children",
                "unclear-or-no-fullbody",
                "has-humor",
                "seems-chubby",
                "interested-in-fwb",
                "is-tourist",
                "interested-in-friends-only",
                "seems-prettier-in-real-life",
                "non-caucasian-but-Dutch",
                "is-chubby",
                "is-mom"
            ]
        },
        {
            "dataType": "Boolean",
            "keyName": "Did-i-like"
        },
        {
            "dataType": "DateString",
            "keyName": "Date-of-unmatch"
        },
        {
            "dataType": "Boolean",
            "keyName": "Has-profiletext"
        },
        {
            "typeInnerValues": "String",
            "dataType": "List",
            "keyName": "Why-i-removed",
            "innerListValues": [
                "does-not-want-(more)-children",
                "too-far-away",
                "has-(multiple)-children",
                "old-match-before-app-no-longer-attracted",
                "accidental-like",
                "not-attracted-anymore"
            ]
        },
        {
            "typeInnerValues": "Map",
            "dataType": "List",
            "keyName": "Response-speed",
            "innerMapValues": [
                {
                    "dataType": "DateString",
                    "keyName": "datetimeTheirResponse"
                },
                {
                    "dataType": "WholeNumber",
                    "keyName": "differenceInMS"
                },
                {
                    "dataType": "DateString",
                    "keyName": "datetimeMyLastMessage"
                }
            ]
        },
        {
            "dataType": "DateString",
            "keyName": "Date-liked-or-passed"
        }
    ];
  }
}