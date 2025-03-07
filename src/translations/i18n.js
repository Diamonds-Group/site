// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    translation: {
      hero: {
        welcome: "<span class='text-yellow-400'>Diamonds Group</span>",
        description: "Benvenuti in Diamonds Group, l’ecosistema su blockchain Solana. Il rivoluzionario <strong class='text-yellow-400'>DMNS</strong> Token è la chiave per accedere a servizi esclusivi, formazione gratuita e opportunità economiche in una nuova economia decentralizzata e trasparente.",
        roadmapButton: "Scopri la Roadmap",
        purchaseButton: "Come Acquistare"
      },
      vision: {
        title: "La Nostra Visione",
        description: "Diamonds Group nasce come una Crypto Farm decentralizzata con l’obiettivo di favorire la creazione e la crescita di Utility Token ad alto potenziale, fornendo strutture economiche reali a individui e comunità. Sfruttiamo la blockchain di Solana per garantire trasparenza, sicurezza e transazioni rapide.",
        list: {
          innovation: "Innovazione: Sviluppiamo soluzioni fresche e modelli sostenibili.",
          decentralization: "Decentralizzazione: La community e la DAO guidano le decisioni chiave.",
          transparency: "Trasparenza: Tutte le transazioni e i lanci di token sono verificabili on-chain.",
          inclusivity: "Inclusività: Aperto a tutti, esperti e neofiti.",
          sharedGrowth: "Crescita Condivisa: Più utenti = più adozione e vantaggi per l’intero ecosistema."
        }
      },
      features: {
        primaryTitle: "Caratteristiche Principali",
        extendedTitle: "Più di una Cripto: Un Ecosistema",
        primary: [
          {
            title: "DMNS: Un Token Strategico",
            description: "Funziona come asset collaterale dell'intero ecosistema, puntando a incrementare la fiducia e la sostenibilita' in un'ottica di diversificazione."
          },
          {
            title: "Fair Launch",
            description: "Abbiamo lanciato DMNS in modo equo su SolSale, rendendo il token accessibile a tutti sin dal principio."
          },
          {
            title: "Diamonds Army",
            description: "Il luogo dove nasce il movimento offrendo privilegi e opportunita' esclusive atte ad alimentare l'intero ecosistema."
          }
        ],
        extended: [
          {
            title: "Multi-Ecosistema",
            description: "DMNS non è solo un token ma un intero ecosistema in cui i nuovi progetti si connettono e creano valore reciproco."
          },
          {
            title: "Espansione Globale",
            description: "Siamo attivi su più continenti, con partner locali che promuovono la diffusione di DMNS e la sua adozione reale."
          },
          {
            title: "Community Driven",
            description: "Il potere decisionale è nelle mani degli holder: grazie alla DAO, ogni proposta viene votata in modo trasparente."
          },
          {
            title: "dApp Innovative",
            description: "Stiamo sviluppando diverse dApp, per aiutare gli utenti a prendere decisioni informate: Wallet, Social Commerce, Social Network, DAO"
          },
          {
            title: "Tecnologia Avanzata",
            description: "Solana offre TPS elevati e commissioni bassissime, rendendo DMNS ideale per microtransazioni e utilizzi in larga scala."
          },
          {
            title: "Potenziale Economico",
            description: "Attraverso buyback, burn e partnership, DMNS mira a sostenere e far crescere il valore nel tempo."
          }
        ]
      },
      solana: {
        title: "Perché Solana?",
        cards: [
          {
            title: "Velocità",
            description: "Fino a 65.000 TPS con finalità quasi istantanea."
          },
          {
            title: "Costo",
            description: "Transazioni a partire da $0,00025 l'una."
          }
        ],
        description: "L'ecosistema DeFi di Solana vanta un pool di liquidità robusto e in continua espansione, offrendo opportunità uniche per trader e investitori. Inoltre, la sua scalabilità permette a DMNS di crescere nel tempo."
      },
      roadmap: {
        title: "Roadmap Estesa",
        items: [
          {
            quarter: "Q1 (Gennaio – Marzo)",
            holdersTarget: "5.000 HOLDERS",
            milestones: [
              "Fair Launch su SolSale (terminato 23/01/2024)",
              "Listings su siti di ranking (CMC, CG, DexScreener, Dextools, GmGn)",
              "Completamento Documentazione (GitBook)",
              "Annuncio Airdrop"
            ]
          },
          {
            quarter: "Q2 (Aprile – Giugno)",
            holdersTarget: "25.000 HOLDERS",
            milestones: [
              "Lancio Piattaforma Social Commerce",
              "Listing su CEX Top 20",
              "Distribuzione Airdrop",
              "Espansione globale e promozione internazionale",
              "Sviluppo Wallet DMNS (Staking & Farming)"
            ]
          },
          {
            quarter: "Q3 (Luglio – Settembre)",
            holdersTarget: "60.000 HOLDERS",
            milestones: [
              "Sviluppo DAO: test di governance on-chain",
              "Listing su CEX Top 10",
              "Beta testing DAO",
              "Lancio piattaforma Social Network"
            ]
          },
          {
            quarter: "Q4 (Ottobre – Dicembre)",
            holdersTarget: "100.000 HOLDERS",
            milestones: [
              "Lancio completo DAO",
            "Lancio Diamonds DEX ",
              "NFT per Formatori e Certificazioni",
              "Consolidamento Partnerships globali",
              "Posizionamento Internazionale"
            ]
          }
        ]
      },
      purchase: {
        title: "Come Acquistare DMNS",
        intro: "Dopo il Fair Launch su SolSale (terminato il 23 gennaio 2024), DMNS è disponibile su:",
        list: [
          "Raydium (AMM di Solana)",
          "Prossimamente Top 20 CEX"
        ],
        instructions: "Per acquistare su Raydium, crea o collega un wallet Solana (Phantom, Solflare, Sollet), vai su Raydium e seleziona DMNS (Mint Address: 3cegQvfWj32SVViSRvYqeAxDxqqPAb4ud67EY75joMr5) se non compare automaticamente. Conferma lo swap con SOL. I token saranno visibili subito nel tuo wallet.",
        note: "Non c’è alcun vesting per gli acquisti sul mercato aperto. Se preferisci attendere il listing su un CEX, tieni d’occhio gli annunci ufficiali."
      },
      faq: {
        title: "Domande Frequenti",
        items: [
          {
            question: "Che cos’è la Diamonds Army?",
            answer: "È una community esclusiva di holder DMNS (minimo 50M di token) che offre accesso anticipato ad annunci importanti e un NFT personalizzato come badge."
          },
          {
            question: "Posso vendere i miei DMNS subito dopo l’acquisto su Raydium?",
            answer: "Sì, non ci sono restrizioni di vesting sugli acquisti diretti sul mercato aperto."
          },
          {
            question: "Come funziona la Crypto Farm?",
            answer: "Il concetto consiste nel generare valore tramite nuove emissioni di token, partnership e investimenti decentralizzati, il tutto governato dalla DAO."
          },
          {
            question: "Cosa succede se il mio saldo scende sotto i 50M di DMNS?",
            answer: "Potresti perdere alcuni privilegi della Diamonds Army e le funzioni esclusive legate a quella soglia."
          },
          {
            question: "DMNS è un buon investimento?",
            answer: "Le criptovalute sono ad alto rischio. Fai sempre le tue ricerche e valuta la tua tolleranza al rischio. DMNS offre utilità e potenziali vantaggi, ma non è un consiglio finanziario."
          }
        ]
      },
      disclaimer: {
        title: "Disclaimer",
        text: "Le informazioni fornite non costituiscono consulenza finanziaria o legale. Le criptovalute sono investimenti ad alto rischio. Ogni utente dovrebbe valutare la propria tolleranza al rischio e fare ricerche approfondite (DYOR). Diamonds Group non è responsabile per eventuali perdite finanziarie derivanti dalla partecipazione al progetto o dalle fluttuazioni di prezzo del token.",
        channelsTitle: "Canali Ufficiali",
        channels: [
          {
            name: "Sito Ufficiale",
            url: "https://diamonds-group.com/"
          },
          {
            name: "Telegram",
            url: "https://t.me/dmnstoken"
          },
          {
            name: "Twitter (X)",
            url: "https://x.com/DmnsGroup"
          }
        ]
      },
      
      footer: {
        text: "© 2025 - 2026 DMNS. Tutti i diritti riservati.",
        poweredBy: ""
      },
      airdrop: {
        title: "Partecipa all'Airdrop DMNS!",
        description1: "Un <strong>airdrop</strong> è un'iniziativa tramite la quale i token vengono distribuiti gratuitamente agli utenti, incentivando la crescita della community e favorendo la diffusione del progetto.",
        description2: "In questo evento esclusivo, sono in palio <strong>250 milioni di token DMNS</strong>, da dividere tra tutti i partecipanti!",
        cta: "Partecipa ora!"
      },
      techSpecs: {
        title: "Specifiche Tecniche",
        items: [
          "Codice sorgente verificato: Il contratto è stato controllato e validato, garantendo trasparenza e sicurezza.",
          "Nessun rischio di minting: Non è possibile creare nuovi token, eliminando il rischio di diluizione.",
          "Trasferibilità completa: Gli utenti possono trasferire i token in ogni momento, senza tasse o limiti.",
          "Contratto immutabile: Il contratto non può essere aggiornato, assicurando stabilità e integrità.",
          "Nessuna blacklist: I wallet non possono essere bloccati da trasferire i token, evitando controlli centralizzati.",
          "Funzioni di trasferimento sicure: Il router è hardcoded e non ci sono chiamate esterne, garantendo trasferimenti sicuri.",
          "Metadati immutabili: I metadati del token sono completi e non modificabili.",
          "Attività recente: Il contratto mostra interazioni recenti, dimostrando un uso attivo e operativo.",
          "Liquidità sicura: Coppie di liquidità valide e sufficiente liquidità, senza rischi di rugpull.",
          "Nessun segnale di frode: Non sono stati rilevati precedenti truffe dal wallet del proprietario, garantendo la legittimità."
        ]
      }
    }
  },
  en: {
    translation: {
      hero: {
        welcome: "Welcome to <span class='text-yellow-400'>Diamonds Group (DMNS)</span>",
        description: "An innovative ecosystem on the Solana blockchain, designed to improve people's economic prospects worldwide, thanks to our decentralized Crypto Farm and the strategic token <strong class='text-yellow-400'>DMNS</strong>.",
        roadmapButton: "Discover the Roadmap",
        purchaseButton: "How to Buy"
      },
      vision: {
        title: "Our Vision",
        description: "Diamonds Group was born as a decentralized Crypto Farm with the goal of fostering the creation and growth of high-potential tokens, providing real economic improvements for individuals and communities. We leverage the Solana blockchain to ensure transparency, security, and fast transactions.",
        list: {
          innovation: "Innovation: We develop fresh solutions and sustainable models (burn, buyback, yield).",
          decentralization: "Decentralization: The community and the DAO drive key decisions.",
          transparency: "Transparency: All transactions and token launches are verifiable on-chain.",
          inclusivity: "Inclusivity: Open to everyone, experts and newcomers alike.",
          sharedGrowth: "Shared Growth: More users = more adoption and benefits for the entire ecosystem."
        }
      },
      features: {
        primaryTitle: "Main Features",
        extendedTitle: "More than a Crypto: An Ecosystem",
        primary: [
          {
            title: "DMNS: A Strategic Token",
            description: "It serves as the cornerstone of our ecosystem, aiming to increase personal wealth and diversification."
          },
          {
            title: "Fair Launch",
            description: "We launched DMNS fairly on SolSale, making the token accessible to everyone from the start."
          },
          {
            title: "Diamonds Army",
            description: "A special unit of holders enjoying exclusive privileges and opportunities within the ecosystem."
          }
        ],
        extended: [
          {
            title: "Multi-Ecosystem",
            description: "DMNS is not just a token but an entire ecosystem where new projects connect and create mutual value."
          },
          {
            title: "Global Expansion",
            description: "We are active on multiple continents, with local partners promoting DMNS and its real-world adoption."
          },
          {
            title: "Community Driven",
            description: "Decision-making power lies in the hands of the holders: thanks to the DAO, every proposal is voted on transparently."
          },
          {
            title: "Innovative dApps",
            description: "We are developing several dApps, including the Sentiment Score, to help users make informed decisions."
          },
          {
            title: "Advanced Technology",
            description: "Solana offers high TPS and extremely low fees, making DMNS ideal for microtransactions and large-scale use."
          },
          {
            title: "Economic Potential",
            description: "Through buyback, burn, and partnerships, DMNS aims to sustain and grow its value over time."
          }
        ]
      },
      solana: {
        title: "Why Solana?",
        cards: [
          {
            title: "Speed",
            description: "Up to 65,000 TPS with near-instant finality."
          },
          {
            title: "Cost",
            description: "Transactions starting at $0.00025 each."
          }
        ],
        description: "Solana's DeFi ecosystem boasts a robust and continuously expanding liquidity pool, offering unique opportunities for traders and investors. Moreover, its scalability allows DMNS to grow without bottlenecks."
      },
      community: {
        title: "Our Community Is Growing Fast",
        description: "Now is the time to act. Follow us on X to stay updated with events and exclusive opportunities. Join us and be part of a rapidly growing community!",
        button: "Follow Us on X"
      },
      roadmap: {
        title: "Extended Roadmap",
        items: [
          {
            quarter: "Q1 (January – March)",
            holdersTarget: "5,000 HOLDERS",
            milestones: [
              "Fair Launch on SolSale (ended on 01/23/2024)",
              "Listings on ranking sites (CMC, CG, DexScreener, Dextools)",
              "Documentation completion (GitBook)",
              "Airdrop Announcement"
            ]
          },
          {
            quarter: "Q2 (April – June)",
            holdersTarget: "25,000 HOLDERS",
            milestones: [
              "Launch of Diamonds Platform (Crypto Farm)",
              "Listing on Top 20 CEX",
              "Airdrop Distribution",
              "Global expansion and international promotion"
            ]
          },
          {
            quarter: "Q3 (July – September)",
            holdersTarget: "60,000 HOLDERS",
            milestones: [
              "DAO Development: on-chain governance testing",
              "Listing on Top 10 CEX",
              "DAO Beta testing",
              "Possible integration of new “Strategic Tokens”"
            ]
          },
          {
            quarter: "Q4 (October – December)",
            holdersTarget: "100,000 HOLDERS",
            milestones: [
              "Complete DAO launch",
              "dApp Sentiment Score",
              "NFTs for Trainers and Certifications",
              "Consolidation of global partnerships"
            ]
          }
        ]
      },
      purchase: {
        title: "How to Buy DMNS",
        intro: "After the Fair Launch on SolSale (ended on January 23, 2024), DMNS is available on:",
        list: [
          "Raydium (Solana AMM)",
          "Soon Top 20 CEX"
        ],
        instructions: "To buy on Raydium, create or connect a Solana wallet (Phantom, Solflare, Sollet), go to Raydium and select DMNS (Mint Address: 3cegQvfWj32SVViSRvYqeAxDxqqPAb4ud67EY75joMr5) if it doesn't appear automatically. Confirm the swap with SOL. The tokens will appear in your wallet immediately.",
        note: "There is no vesting for purchases on the open market. If you prefer to wait for a CEX listing, keep an eye on official announcements."
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "What is the Diamonds Army?",
            answer: "It is an exclusive community of DMNS holders (minimum 50M tokens) that provides early access to important announcements and a personalized NFT badge."
          },
          {
            question: "Can I sell my DMNS immediately after purchasing on Raydium?",
            answer: "Yes, there are no vesting restrictions on direct open market purchases."
          },
          {
            question: "How does the Crypto Farm work?",
            answer: "The concept is to generate value through new token emissions, partnerships, and decentralized investments, all governed by the DAO."
          },
          {
            question: "What happens if my balance falls below 50M DMNS?",
            answer: "You might lose some of the Diamonds Army privileges and the exclusive functions tied to that threshold."
          },
          {
            question: "Is DMNS a good investment?",
            answer: "Cryptocurrencies are high risk. Always do your research and assess your risk tolerance. DMNS offers utility and potential benefits, but this is not financial advice."
          }
        ]
      },
      disclaimer: {
        title: "Disclaimer",
        text: "The information provided does not constitute financial or legal advice. Cryptocurrencies are high-risk investments. Every user should assess their risk tolerance and conduct thorough research (DYOR). Diamonds Group is not responsible for any financial losses resulting from participation in the project or token price fluctuations.",
        channelsTitle: "Official Channels",
        channels: [
          {
            name: "Official Website",
            url: "https://diamonds-group.com/"
          },
          {
            name: "Telegram",
            url: "https://t.me/dmnstoken"
          },
          {
            name: "Twitter (X)",
            url: "https://x.com/DmnsGroup"
          }
        ]
      },
      footer: {
        text: "© 2025 - 2026 DMNS. All rights reserved.",
        poweredBy: ""
      },
      airdrop: {
        title: "Join the DMNS Airdrop!",
        description1: "An <strong>airdrop</strong> is an initiative in which tokens are distributed for free to users, encouraging community growth and promoting the project.",
        description2: "In this exclusive event, <strong>250 million DMNS tokens</strong> are up for grabs, to be shared among all participants!",
        cta: "Join Now!"
      },
      techSpecs: {
        title: "Technical Specifications",
        items: [
          "Verified source code: The contract has been audited and validated, ensuring transparency and security.",
          "No minting risk: New tokens cannot be created, eliminating the risk of dilution.",
          "Full transferability: Users can transfer tokens at any time, without fees or limits.",
          "Immutable contract: The contract cannot be updated, ensuring stability and integrity.",
          "No blacklist: Wallets cannot be blocked from transferring tokens, avoiding centralized control.",
          "Secure transfer functions: The router is hardcoded and there are no external calls, ensuring safe transfers.",
          "Immutable metadata: The token's metadata is complete and unchangeable.",
          "Recent activity: The contract shows recent interactions, demonstrating active and operational use.",
          "Secure liquidity: Valid liquidity pairs and sufficient liquidity, with no risk of rugpull.",
          "No fraud signals: No past scams have been detected from the owner's wallet, ensuring legitimacy."
        ]
      }
    }
  },
  es: {
    translation: {
      hero: {
        welcome: "Bienvenidos a <span class='text-yellow-400'>Diamonds Group (DMNS)</span>",
        description: "Un ecosistema innovador en la blockchain Solana, diseñado para mejorar las perspectivas económicas de las personas en todo el mundo, gracias a nuestra Crypto Farm descentralizada y el token estratégico <strong class='text-yellow-400'>DMNS</strong>.",
        roadmapButton: "Descubre la Hoja de Ruta",
        purchaseButton: "Cómo Comprar"
      },
      vision: {
        title: "Nuestra Visión",
        description: "Diamonds Group nació como una Crypto Farm descentralizada con el objetivo de fomentar la creación y el crecimiento de tokens de alto potencial, proporcionando mejoras económicas reales para individuos y comunidades. Aprovechamos la blockchain de Solana para garantizar transparencia, seguridad y transacciones rápidas.",
        list: {
          innovation: "Innovación: Desarrollamos soluciones frescas y modelos sostenibles (burn, buyback, yield).",
          decentralization: "Descentralización: La comunidad y la DAO impulsan las decisiones clave.",
          transparency: "Transparencia: Todas las transacciones y lanzamientos de tokens se pueden verificar en la cadena.",
          inclusivity: "Inclusividad: Abierto a todos, tanto a expertos como a principiantes.",
          sharedGrowth: "Crecimiento Compartido: Más usuarios = mayor adopción y beneficios para todo el ecosistema."
        }
      },
      features: {
        primaryTitle: "Características Principales",
        extendedTitle: "Más que una Cripto: Un Ecosistema",
        primary: [
          {
            title: "DMNS: Un Token Estratégico",
            description: "Funciona como la piedra angular de nuestro ecosistema, buscando incrementar la riqueza personal y la diversificación."
          },
          {
            title: "Lanzamiento Justo",
            description: "Hemos lanzado DMNS de manera justa en SolSale, haciendo el token accesible para todos desde el principio."
          },
          {
            title: "Diamonds Army",
            description: "Una unidad especial de holders que goza de privilegios y oportunidades exclusivas dentro del ecosistema."
          }
        ],
        extended: [
          {
            title: "Multi-Ecosistema",
            description: "DMNS no es solo un token, sino un ecosistema completo donde nuevos proyectos se conectan y crean valor mutuo."
          },
          {
            title: "Expansión Global",
            description: "Estamos activos en múltiples continentes, con socios locales que promueven la difusión y adopción real de DMNS."
          },
          {
            title: "Impulsado por la Comunidad",
            description: "El poder de decisión está en manos de los holders: gracias a la DAO, cada propuesta se vota de manera transparente."
          },
          {
            title: "dApps Innovadoras",
            description: "Estamos desarrollando varias dApps, incluyendo la Sentiment Score, para ayudar a los usuarios a tomar decisiones informadas."
          },
          {
            title: "Tecnología Avanzada",
            description: "Solana ofrece TPS altos y comisiones muy bajas, haciendo a DMNS ideal para microtransacciones y uso a gran escala."
          },
          {
            title: "Potencial Económico",
            description: "A través de buyback, burn y asociaciones, DMNS busca sostener y aumentar su valor con el tiempo."
          }
        ]
      },
      solana: {
        title: "¿Por qué Solana?",
        cards: [
          {
            title: "Velocidad",
            description: "Hasta 65,000 TPS con finalización casi instantánea."
          },
          {
            title: "Costo",
            description: "Transacciones a partir de $0.00025 cada una."
          }
        ],
        description: "El ecosistema DeFi de Solana cuenta con un robusto y creciente pool de liquidez, ofreciendo oportunidades únicas para traders e inversores. Además, su escalabilidad permite a DMNS crecer sin cuellos de botella."
      },
      community: {
        title: "¡Nuestra Comunidad Está Creciendo Rápidamente!",
        description: "Es el momento de actuar. Síguenos en X para no perderte actualizaciones, eventos y oportunidades exclusivas. ¡Únete a nosotros y forma parte de una comunidad en rápido crecimiento!",
        button: "Síguenos en X"
      },
      roadmap: {
        title: "Hoja de Ruta Extendida",
        items: [
          {
            quarter: "Q1 (Enero – Marzo)",
            holdersTarget: "5,000 HOLDERS",
            milestones: [
              "Lanzamiento Justo en SolSale (finalizado el 23/01/2024)",
              "Listings en sitios de ranking (CMC, CG, DexScreener, Dextools)",
              "Completación de la Documentación (GitBook)",
              "Anuncio de Airdrop"
            ]
          },
          {
            quarter: "Q2 (Abril – Junio)",
            holdersTarget: "25,000 HOLDERS",
            milestones: [
              "Lanzamiento de la Plataforma Diamonds (Crypto Farm)",
              "Listing en Top 20 CEX",
              "Distribución de Airdrop",
              "Expansión global y promoción internacional"
            ]
          },
          {
            quarter: "Q3 (Julio – Septiembre)",
            holdersTarget: "60,000 HOLDERS",
            milestones: [
              "Desarrollo DAO: prueba de gobernanza on-chain",
              "Listing en Top 10 CEX",
              "Beta testing de la DAO",
              "Posible integración de nuevos “Strategic Tokens”"
            ]
          },
          {
            quarter: "Q4 (Octubre – Diciembre)",
            holdersTarget: "100,000 HOLDERS",
            milestones: [
              "Lanzamiento completo de la DAO",
              "dApp Sentiment Score",
              "NFTs para Formadores y Certificaciones",
              "Consolidación de asociaciones globales"
            ]
          }
        ]
      },
      purchase: {
        title: "Cómo Comprar DMNS",
        intro: "Después del Fair Launch en SolSale (finalizado el 23 de enero de 2024), DMNS está disponible en:",
        list: [
          "Raydium (AMM de Solana)",
          "Próximamente Top 20 CEX"
        ],
        instructions: "Para comprar en Raydium, crea o conecta un wallet Solana (Phantom, Solflare, Sollet), dirígete a Raydium y selecciona DMNS (Mint Address: 3cegQvfWj32SVViSRvYqeAxDxqqPAb4ud67EY75joMr5) si no aparece automáticamente. Confirma el intercambio con SOL. Los tokens serán visibles en tu wallet de inmediato.",
        note: "No hay vesting para compras en el mercado abierto. Si prefieres esperar el listing en un CEX, mantente al tanto de los anuncios oficiales."
      },
      faq: {
        title: "Preguntas Frecuentes",
        items: [
          {
            question: "¿Qué es la Diamonds Army?",
            answer: "Es una comunidad exclusiva de holders de DMNS (mínimo 50M de tokens) que ofrece acceso anticipado a anuncios importantes y un NFT personalizado como distintivo."
          },
          {
            question: "¿Puedo vender mis DMNS inmediatamente después de comprarlos en Raydium?",
            answer: "Sí, no hay restricciones de vesting en las compras directas en el mercado abierto."
          },
          {
            question: "¿Cómo funciona la Crypto Farm?",
            answer: "El concepto consiste en generar valor mediante nuevas emisiones de tokens, asociaciones e inversiones descentralizadas, todo gobernado por la DAO."
          },
          {
            question: "¿Qué sucede si mi saldo cae por debajo de 50M de DMNS?",
            answer: "Podrías perder algunos de los privilegios de la Diamonds Army y las funciones exclusivas asociadas a ese umbral."
          },
          {
            question: "¿DMNS es una buena inversión?",
            answer: "Las criptomonedas son de alto riesgo. Siempre haz tu investigación y evalúa tu tolerancia al riesgo. DMNS ofrece utilidad y posibles beneficios, pero no constituye un consejo financiero."
          }
        ]
      },
      disclaimer: {
        title: "Disclaimer",
        text: "La información proporcionada no constituye asesoramiento financiero o legal. Las criptomonedas son inversiones de alto riesgo. Cada usuario debe evaluar su tolerancia al riesgo y realizar una investigación exhaustiva (DYOR). Diamonds Group no se hace responsable de las pérdidas financieras derivadas de la participación en el proyecto o de las fluctuaciones en el precio del token.",
        channelsTitle: "Canales Oficiales",
        channels: [
          {
            name: "Sitio Oficial",
            url: "https://diamonds-group.com/"
          },
          {
            name: "Telegram",
            url: "https://t.me/dmnstoken"
          },
          {
            name: "Twitter (X)",
            url: "https://x.com/DmnsGroup"
          }
        ]
      },
      footer: {
        text: "© 2025 - 2026 DMNS. Todos los derechos reservados.",
        poweredBy: ""
      },
      airdrop: {
        title: "¡Participa en el Airdrop de DMNS!",
        description1: "Un <strong>airdrop</strong> es una iniciativa mediante la cual los tokens se distribuyen gratuitamente a los usuarios, incentivando el crecimiento de la comunidad y promoviendo el proyecto.",
        description2: "En este evento exclusivo, se reparten <strong>250 millones de tokens DMNS</strong> entre todos los participantes!",
        cta: "¡Participa ahora!"
      },
      techSpecs: {
        title: "Especificaciones Técnicas",
        items: [
          "Código fuente verificado: El contrato ha sido auditado y validado, garantizando transparencia y seguridad.",
          "Sin riesgo de minting: No es posible crear nuevos tokens, eliminando el riesgo de dilución.",
          "Transferibilidad completa: Los usuarios pueden transferir tokens en cualquier momento, sin tasas ni límites.",
          "Contrato inmutable: El contrato no se puede actualizar, asegurando estabilidad e integridad.",
          "Sin lista negra: Las carteras no pueden ser bloqueadas para transferir tokens, evitando controles centralizados.",
          "Funciones de transferencia seguras: El router está codificado y no hay llamadas externas, garantizando transferencias seguras.",
          "Metadatos inmutables: Los metadatos del token son completos e inalterables.",
          "Actividad reciente: El contrato muestra interacciones recientes, demostrando un uso activo y operativo.",
          "Liquidez segura: Pares de liquidez válidos y suficiente liquidez, sin riesgos de rugpull.",
          "No hay señales de fraude: No se han detectado fraudes previos en la cartera del propietario, garantizando la legitimidad."
        ]
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language.split('-')[0],
  fallbackLng: 'it',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
