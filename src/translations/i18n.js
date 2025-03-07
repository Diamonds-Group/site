// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    translation: {
      hero: {
        welcome: "<span class='text-yellow-400'>Diamonds</span> Group",
        description:
          "Benvenuti in Diamonds Group, l’ecosistema su blockchain Solana. Il rivoluzionario <strong class='text-yellow-400'>DMNS</strong> Token è la chiave per accedere a servizi esclusivi, formazione gratuita e opportunità economiche in una nuova economia decentralizzata e trasparente.",
        roadmapButton: "Scopri la Roadmap",
        purchaseButton: "Come Acquistare",
      },
      vision: {
        title: "La Nostra Visione",
        description:
          "Diamonds Group nasce come una Crypto Farm decentralizzata con l’obiettivo di favorire la creazione e la crescita di Utility Token ad alto potenziale, fornendo strutture economiche reali a individui e comunità. Sfruttiamo la blockchain di Solana per garantire trasparenza, sicurezza e transazioni rapide.",
        list: {
          innovation: "Innovazione: Sviluppiamo soluzioni fresche e modelli sostenibili.",
          decentralization: "Decentralizzazione: La community e la DAO guidano le decisioni chiave.",
          transparency: "Trasparenza: Tutte le transazioni e i lanci di token sono verificabili on-chain.",
          inclusivity: "Inclusività: Aperto a tutti, esperti e neofiti.",
          sharedGrowth:
            "Crescita Condivisa: Più utenti = più adozione e vantaggi per l’intero ecosistema.",
        },
      },
      features: {
        primaryTitle: "Caratteristiche Principali",
        extendedTitle: "Più di una Cripto: Un Ecosistema",
        primary: [
          {
            title: "DMNS: Un Token Strategico",
            description:
              "Funziona come asset collaterale dell'intero ecosistema, puntando a incrementare la fiducia e la sostenibilita' in un'ottica di diversificazione.",
          },
          {
            title: "Fair Launch",
            description:
              "Abbiamo lanciato DMNS in modo equo su SolSale, rendendo il token accessibile a tutti sin dal principio.",
          },
          {
            title: "Diamonds Army",
            description:
              "Il luogo dove nasce il movimento offrendo privilegi e opportunita' esclusive atte ad alimentare l'intero ecosistema.",
          },
        ],
        extended: [
          {
            title: "Multi-Ecosistema",
            description:
              "DMNS non è solo un token ma un intero ecosistema in cui i nuovi progetti si connettono e creano valore reciproco.",
          },
          {
            title: "Espansione Globale",
            description:
              "Siamo attivi su più continenti, con partner locali che promuovono la diffusione di DMNS e la sua adozione reale.",
          },
          {
            title: "Community Driven",
            description:
              "Il potere decisionale è nelle mani degli holder: grazie alla DAO, ogni proposta viene votata in modo trasparente.",
          },
          {
            title: "dApp Innovative",
            description:
              "Stiamo sviluppando diverse dApp, per aiutare gli utenti a prendere decisioni informate: Wallet, Social Commerce, Social Network, DAO",
          },
          {
            title: "Tecnologia Avanzata",
            description:
              "Solana offre TPS elevati e commissioni bassissime, rendendo DMNS ideale per microtransazioni e utilizzi in larga scala.",
          },
          {
            title: "Potenziale Economico",
            description:
              "Attraverso buyback, burn e partnership, DMNS mira a sostenere e far crescere il valore nel tempo.",
          },
        ],
      },
      solana: {
        title: "Perché Solana?",
        cards: [
          {
            title: "Velocità",
            description: "Fino a 65.000 TPS con finalità quasi istantanea.",
          },
          {
            title: "Costo",
            description: "Transazioni a partire da $0,00025 l'una.",
          },
        ],
        description:
          "L'ecosistema DeFi di Solana vanta un pool di liquidità robusto e in continua espansione, offrendo opportunità uniche per trader e investitori. Inoltre, la sua scalabilità permette a DMNS di crescere nel tempo.",
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
              "Annuncio Airdrop",
            ],
          },
          {
            quarter: "Q2 (Aprile – Giugno)",
            holdersTarget: "25.000 HOLDERS",
            milestones: [
              "Lancio Piattaforma Social Commerce",
              "Listing su CEX Top 20",
              "Distribuzione Airdrop",
              "Espansione globale e promozione internazionale",
              "Sviluppo Wallet DMNS (Staking & Farming)",
            ],
          },
          {
            quarter: "Q3 (Luglio – Settembre)",
            holdersTarget: "60.000 HOLDERS",
            milestones: [
              "Sviluppo DAO: test di governance on-chain",
              "Listing su CEX Top 10",
              "Beta testing DAO",
              "Lancio piattaforma Social Network",
            ],
          },
          {
            quarter: "Q4 (Ottobre – Dicembre)",
            holdersTarget: "100.000 HOLDERS",
            milestones: [
              "Lancio completo DAO",
              "Lancio Diamonds DEX",
              "NFT per Formatori e Certificazioni",
              "Consolidamento Partnerships globali",
              "Posizionamento Internazionale",
            ],
          },
        ],
      },
      purchase: {
        title: "Come Acquistare DMNS",
        intro:
          "Dopo il Fair Launch su SolSale (terminato il 23 gennaio 2024), DMNS è disponibile su:",
        list: ["Raydium (AMM di Solana)", "Prossimamente Top 20 CEX"],
        instructions:
          "Per acquistare su Raydium, crea o collega un wallet Solana (Phantom, Solflare, Sollet), vai su Raydium e seleziona DMNS (Mint Address: 3cegQvfWj32SVViSRvYqeAxDxqqPAb4ud67EY75joMr5) se non compare automaticamente. Conferma lo swap con SOL. I token saranno visibili subito nel tuo wallet.",
        note:
          "Non c’è alcun vesting per gli acquisti sul mercato aperto. Se preferisci attendere il listing su un CEX, tieni d’occhio gli annunci ufficiali.",
      },
      faq: {
        title: "Domande Frequenti",
        items: [
          {
            question: "Che cos’è la Diamonds Army?",
            answer:
              "È una community esclusiva di holder DMNS (minimo 50M di token) che offre accesso anticipato ad annunci importanti e un NFT personalizzato come badge.",
          },
          {
            question: "Posso vendere i miei DMNS subito dopo l’acquisto su Raydium?",
            answer:
              "Sì, non ci sono restrizioni di vesting sugli acquisti diretti sul mercato aperto.",
          },
          {
            question: "Come funziona la Crypto Farm?",
            answer:
              "Il concetto consiste nel generare valore tramite nuove emissioni di token, partnership e investimenti decentralizzati, il tutto governato dalla DAO.",
          },
          {
            question:
              "Cosa succede se il mio saldo scende sotto i 50M di DMNS?",
            answer:
              "Potresti perdere alcuni privilegi della Diamonds Army e le funzioni esclusive legate a quella soglia.",
          },
          {
            question: "DMNS è un buon investimento?",
            answer:
              "Le criptovalute sono ad alto rischio. Fai sempre le tue ricerche e valuta la tua tolleranza al rischio. DMNS offre utilità e potenziali vantaggi, ma non è un consiglio finanziario.",
          },
        ],
      },
      community: {
        title: "La Nostra Community Sta Crescendo Rapidamente",
        description:
          "È il momento di agire. Seguici, iscriviti ai nostri canali e non perderti aggiornamenti, eventi e opportunità esclusive.",
        social: {
          x: "Seguici su X",
          telegram: "Unisciti al Gruppo Telegram",
          whatsapp: "Unisciti al Gruppo WhatsApp",
        },
      },
      disclaimer: {
        title: "Disclaimer",
        text:
          "Le informazioni fornite non costituiscono consulenza finanziaria o legale. Le criptovalute sono investimenti ad alto rischio. Ogni utente dovrebbe valutare la propria tolleranza al rischio e fare ricerche approfondite (DYOR). Diamonds Group non è responsabile per eventuali perdite finanziarie derivanti dalla partecipazione al progetto o dalle fluttuazioni di prezzo del token.",
        channelsTitle: "Canali Ufficiali",
        channels: [
          { name: "Sito Ufficiale", url: "https://diamonds-group.com/" },
          { name: "Telegram", url: "https://t.me/dmnstoken" },
          { name: "Twitter (X)", url: "https://x.com/DmnsGroup" },
        ],
      },
      footer: {
        text: "© 2025 - 2026 DMNS. Tutti i diritti riservati.",
        poweredBy: "",
      },
      airdrop: {
        title: "Partecipa all'Airdrop DMNS!",
        description1:
          "Un <strong>airdrop</strong> è un'iniziativa tramite la quale i token vengono distribuiti gratuitamente agli utenti, incentivando la crescita della community e favorendo la diffusione del progetto.",
        description2:
          "In questo evento esclusivo, sono in palio <strong>250 milioni di token DMNS</strong>, da dividere tra tutti i partecipanti!",
        cta: "Partecipa ora!",
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
          "Nessun segnale di frode: Non sono stati rilevati precedenti truffe dal wallet del proprietario, garantendo la legittimità.",
        ],
      },
    },
  },
  en: {
    translation: {
      hero: {
        welcome: "<span class='text-yellow-400'>Diamonds</span> Group",
        description:
          "Welcome to Diamonds Group, the ecosystem on the Solana blockchain. The revolutionary <strong class='text-yellow-400'>DMNS</strong> Token is the key to accessing exclusive services, free training, and economic opportunities in a new decentralized and transparent economy.",
        roadmapButton: "Discover the Roadmap",
        purchaseButton: "How to Purchase",
      },
      vision: {
        title: "Our Vision",
        description:
          "Diamonds Group was born as a decentralized Crypto Farm with the aim of fostering the creation and growth of high-potential Utility Tokens, providing real economic structures to individuals and communities. We leverage the Solana blockchain to ensure transparency, security, and fast transactions.",
        list: {
          innovation: "Innovation: We develop fresh solutions and sustainable models.",
          decentralization:
            "Decentralization: The community and the DAO drive key decisions.",
          transparency:
            "Transparency: All transactions and token launches are verifiable on-chain.",
          inclusivity:
            "Inclusivity: Open to everyone, experts and newcomers alike.",
          sharedGrowth:
            "Shared Growth: More users = more adoption and benefits for the entire ecosystem.",
        },
      },
      features: {
        primaryTitle: "Main Features",
        extendedTitle: "More than a Crypto: An Ecosystem",
        primary: [
          {
            title: "DMNS: A Strategic Token",
            description:
              "It functions as collateral for the entire ecosystem, aiming to boost trust and sustainability through diversification.",
          },
          {
            title: "Fair Launch",
            description:
              "We launched DMNS fairly on SolSale, making the token accessible to everyone from the start.",
          },
          {
            title: "Diamonds Army",
            description:
              "The place where the movement is born, offering exclusive privileges and opportunities to fuel the entire ecosystem.",
          },
        ],
        extended: [
          {
            title: "Multi-Ecosystem",
            description:
              "DMNS is not just a token but an entire ecosystem where new projects connect and create mutual value.",
          },
          {
            title: "Global Expansion",
            description:
              "We are active on multiple continents, with local partners promoting the spread of DMNS and its real adoption.",
          },
          {
            title: "Community Driven",
            description:
              "The decision-making power lies in the hands of the holders: thanks to the DAO, every proposal is voted on transparently.",
          },
          {
            title: "Innovative dApp",
            description:
              "We are developing various dApps to help users make informed decisions: Wallet, Social Commerce, Social Network, DAO.",
          },
          {
            title: "Advanced Technology",
            description:
              "Solana offers high TPS and very low fees, making DMNS ideal for microtransactions and large-scale use.",
          },
          {
            title: "Economic Potential",
            description:
              "Through buyback, burn, and partnerships, DMNS aims to support and grow its value over time.",
          },
        ],
      },
      solana: {
        title: "Why Solana?",
        cards: [
          {
            title: "Speed",
            description: "Up to 65,000 TPS with almost instantaneous finality.",
          },
          {
            title: "Cost",
            description: "Transactions starting from $0.00025 each.",
          },
        ],
        description:
          "The Solana DeFi ecosystem boasts a robust and continuously expanding liquidity pool, offering unique opportunities for traders and investors. Moreover, its scalability allows DMNS to grow over time.",
      },
      roadmap: {
        title: "Extended Roadmap",
        items: [
          {
            quarter: "Q1 (January – March)",
            holdersTarget: "5,000 HOLDERS",
            milestones: [
              "Fair Launch on SolSale (completed 23/01/2024)",
              "Listings on ranking sites (CMC, CG, DexScreener, Dextools, GmGn)",
              "Documentation Completion (GitBook)",
              "Airdrop Announcement",
            ],
          },
          {
            quarter: "Q2 (April – June)",
            holdersTarget: "25,000 HOLDERS",
            milestones: [
              "Social Commerce Platform Launch",
              "Listing on Top 20 CEX",
              "Airdrop Distribution",
              "Global expansion and international promotion",
              "Development of DMNS Wallet (Staking & Farming)",
            ],
          },
          {
            quarter: "Q3 (July – September)",
            holdersTarget: "60,000 HOLDERS",
            milestones: [
              "DAO Development: on-chain governance testing",
              "Listing on CEX Top 10",
              "DAO Beta testing",
              "Social Network platform launch",
            ],
          },
          {
            quarter: "Q4 (October – December)",
            holdersTarget: "100,000 HOLDERS",
            milestones: [
              "Full DAO Launch",
              "Launch of Diamonds DEX",
              "NFT for Trainers and Certifications",
              "Consolidation of global partnerships",
              "International positioning",
            ],
          },
        ],
      },
      purchase: {
        title: "How to Purchase DMNS",
        intro:
          "After the Fair Launch on SolSale (completed on January 23, 2024), DMNS is available on:",
        list: ["Raydium (Solana AMM)", "Coming soon on Top 20 CEX"],
        instructions:
          "To purchase on Raydium, create or connect a Solana wallet (Phantom, Solflare, Sollet), go to Raydium and select DMNS (Mint Address: 3cegQvfWj32SVViSRvYqeAxDxqqPAb4ud67EY75joMr5) if it does not appear automatically. Confirm the swap with SOL. The tokens will be visible in your wallet immediately.",
        note:
          "There is no vesting for open market purchases. If you prefer to wait for the CEX listing, keep an eye on official announcements.",
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "What is the Diamonds Army?",
            answer:
              "It is an exclusive community of DMNS holders (minimum 50M tokens) that offers early access to important announcements and a personalized NFT as a badge.",
          },
          {
            question:
              "Can I sell my DMNS immediately after purchasing on Raydium?",
            answer:
              "Yes, there are no vesting restrictions on direct open market purchases.",
          },
          {
            question: "How does the Crypto Farm work?",
            answer:
              "The concept is to generate value through new token issuances, partnerships, and decentralized investments, all governed by the DAO.",
          },
          {
            question:
              "What happens if my balance falls below 50M DMNS?",
            answer:
              "You might lose some Diamonds Army privileges and exclusive features associated with that threshold.",
          },
          {
            question: "Is DMNS a good investment?",
            answer:
              "Cryptocurrencies are high-risk. Always do your own research and assess your risk tolerance. DMNS offers utility and potential benefits, but this is not financial advice.",
          },
        ],
      },
      community: {
        title: "Our Community is Growing Rapidly",
        description:
          "It's time to act. Follow us, join our channels, and don't miss out on updates, events, and exclusive opportunities.",
        social: {
          x: "Follow us on X",
          telegram: "Join the Telegram Group",
          whatsapp: "Join the WhatsApp Group",
        },
      },
      disclaimer: {
        title: "Disclaimer",
        text:
          "The information provided does not constitute financial or legal advice. Cryptocurrencies are high-risk investments. Each user should assess their own risk tolerance and conduct thorough research (DYOR). Diamonds Group is not responsible for any financial losses resulting from participation in the project or token price fluctuations.",
        channelsTitle: "Official Channels",
        channels: [
          { name: "Official Website", url: "https://diamonds-group.com/" },
          { name: "Telegram", url: "https://t.me/dmnstoken" },
          { name: "Twitter (X)", url: "https://x.com/DmnsGroup" },
        ],
      },
      footer: {
        text: "© 2025 - 2026 DMNS. All rights reserved.",
        poweredBy: "",
      },
      airdrop: {
        title: "Join the DMNS Airdrop!",
        description1:
          "An <strong>airdrop</strong> is an initiative through which tokens are distributed for free to users, encouraging community growth and project dissemination.",
        description2:
          "In this exclusive event, <strong>250 million DMNS tokens</strong> are up for grabs, to be divided among all participants!",
        cta: "Join now!",
      },
      techSpecs: {
        title: "Technical Specifications",
        items: [
          "Verified source code: The contract has been audited and validated, ensuring transparency and security.",
          "No minting risk: It is not possible to create new tokens, eliminating the risk of dilution.",
          "Full transferability: Users can transfer tokens at any time, without fees or limits.",
          "Immutable contract: The contract cannot be updated, ensuring stability and integrity.",
          "No blacklist: Wallets cannot be blocked from transferring tokens, avoiding centralized controls.",
          "Secure transfer functions: The router is hardcoded and there are no external calls, ensuring secure transfers.",
          "Immutable metadata: The token's metadata is complete and unchangeable.",
          "Recent activity: The contract shows recent interactions, demonstrating active and operational use.",
          "Secure liquidity: Valid liquidity pairs and sufficient liquidity, without rugpull risks.",
          "No signs of fraud: No previous scams have been detected from the owner's wallet, ensuring legitimacy.",
        ],
      },
    },
  },
  es: {
    translation: {
      hero: {
        welcome: "<span class='text-yellow-400'>Diamonds</span> Group",
        description:
          "Bienvenidos a Diamonds Group, el ecosistema en la blockchain de Solana. El revolucionario Token <strong class='text-yellow-400'>DMNS</strong> es la llave para acceder a servicios exclusivos, formación gratuita y oportunidades económicas en una nueva economía descentralizada y transparente.",
        roadmapButton: "Descubre la Hoja de Ruta",
        purchaseButton: "Cómo Comprar",
      },
      vision: {
        title: "Nuestra Visión",
        description:
          "Diamonds Group nace como una Crypto Farm descentralizada con el objetivo de favorecer la creación y crecimiento de Tokens de Utilidad de alto potencial, proporcionando estructuras económicas reales a individuos y comunidades. Aprovechamos la blockchain de Solana para garantizar transparencia, seguridad y transacciones rápidas.",
        list: {
          innovation:
            "Innovación: Desarrollamos soluciones frescas y modelos sostenibles.",
          decentralization:
            "Descentralización: La comunidad y la DAO impulsan las decisiones clave.",
          transparency:
            "Transparencia: Todas las transacciones y lanzamientos de tokens son verificables on-chain.",
          inclusivity:
            "Inclusividad: Abierto a todos, tanto a expertos como a principiantes.",
          sharedGrowth:
            "Crecimiento Compartido: Más usuarios = mayor adopción y beneficios para todo el ecosistema.",
        },
      },
      features: {
        primaryTitle: "Características Principales",
        extendedTitle: "Más que una Cripto: Un Ecosistema",
        primary: [
          {
            title: "DMNS: Un Token Estratégico",
            description:
              "Funciona como activo colateral de todo el ecosistema, buscando incrementar la confianza y la sostenibilidad a través de la diversificación.",
          },
          {
            title: "Lanzamiento Justo",
            description:
              "Lanzamos DMNS de manera equitativa en SolSale, haciendo el token accesible a todos desde el principio.",
          },
          {
            title: "Diamonds Army",
            description:
              "El lugar donde nace el movimiento, ofreciendo privilegios y oportunidades exclusivas para impulsar todo el ecosistema.",
          },
        ],
        extended: [
          {
            title: "Multi-Ecosistema",
            description:
              "DMNS no es solo un token, sino un ecosistema completo en el que los nuevos proyectos se conectan y crean valor mutuo.",
          },
          {
            title: "Expansión Global",
            description:
              "Estamos activos en varios continentes, con socios locales que promueven la difusión de DMNS y su adopción real.",
          },
          {
            title: "Impulsado por la Comunidad",
            description:
              "El poder de decisión está en manos de los poseedores: gracias a la DAO, cada propuesta se vota de forma transparente.",
          },
          {
            title: "dApp Innovadora",
            description:
              "Estamos desarrollando diversas dApps para ayudar a los usuarios a tomar decisiones informadas: Wallet, Comercio Social, Red Social, DAO.",
          },
          {
            title: "Tecnología Avanzada",
            description:
              "Solana ofrece altos TPS y comisiones muy bajas, lo que hace que DMNS sea ideal para microtransacciones y usos a gran escala.",
          },
          {
            title: "Potencial Económico",
            description:
              "A través de recompras, quema y asociaciones, DMNS busca sostener y hacer crecer su valor a lo largo del tiempo.",
          },
        ],
      },
      solana: {
        title: "¿Por qué Solana?",
        cards: [
          {
            title: "Velocidad",
            description:
              "Hasta 65,000 TPS con una finalización casi instantánea.",
          },
          {
            title: "Costo",
            description: "Transacciones desde $0.00025 cada una.",
          },
        ],
        description:
          "El ecosistema DeFi de Solana cuenta con un pool de liquidez robusto y en constante expansión, ofreciendo oportunidades únicas para traders e inversores. Además, su escalabilidad permite que DMNS crezca con el tiempo.",
      },
      roadmap: {
        title: "Hoja de Ruta Extendida",
        items: [
          {
            quarter: "Q1 (Enero – Marzo)",
            holdersTarget: "5,000 HOLDERS",
            milestones: [
              "Lanzamiento Justo en SolSale (finalizado 23/01/2024)",
              "Listados en sitios de ranking (CMC, CG, DexScreener, Dextools, GmGn)",
              "Finalización de la Documentación (GitBook)",
              "Anuncio del Airdrop",
            ],
          },
          {
            quarter: "Q2 (Abril – Junio)",
            holdersTarget: "25,000 HOLDERS",
            milestones: [
              "Lanzamiento de la Plataforma de Comercio Social",
              "Listado en CEX Top 20",
              "Distribución de Airdrop",
              "Expansión global y promoción internacional",
              "Desarrollo de la Billetera DMNS (Staking & Farming)",
            ],
          },
          {
            quarter: "Q3 (Julio – Septiembre)",
            holdersTarget: "60,000 HOLDERS",
            milestones: [
              "Desarrollo de DAO: pruebas de gobernanza on-chain",
              "Listado en CEX Top 10",
              "Pruebas beta del DAO",
              "Lanzamiento de la plataforma de Red Social",
            ],
          },
          {
            quarter: "Q4 (Octubre – Diciembre)",
            holdersTarget: "100,000 HOLDERS",
            milestones: [
              "Lanzamiento completo del DAO",
              "Lanzamiento de Diamonds DEX",
              "NFT para Formadores y Certificaciones",
              "Consolidación de asociaciones globales",
              "Posicionamiento Internacional",
            ],
          },
        ],
      },
      purchase: {
        title: "Cómo Comprar DMNS",
        intro:
          "Después del Lanzamiento Justo en SolSale (finalizado el 23 de enero de 2024), DMNS está disponible en:",
        list: ["Raydium (AMM de Solana)", "Próximamente en Top 20 CEX"],
        instructions:
          "Para comprar en Raydium, crea o conecta una billetera Solana (Phantom, Solflare, Sollet), ve a Raydium y selecciona DMNS (Mint Address: 3cegQvfWj32SVViSRvYqeAxDxqqPAb4ud67EY75joMr5) si no aparece automáticamente. Confirma el intercambio con SOL. Los tokens serán visibles de inmediato en tu billetera.",
        note:
          "No hay ningún vesting para las compras en el mercado abierto. Si prefieres esperar a que se liste en un CEX, mantente atento a los anuncios oficiales.",
      },
      faq: {
        title: "Preguntas Frecuentes",
        items: [
          {
            question: "¿Qué es la Diamonds Army?",
            answer:
              "Es una comunidad exclusiva de holders de DMNS (mínimo 50M de tokens) que ofrece acceso anticipado a anuncios importantes y un NFT personalizado como distintivo.",
          },
          {
            question:
              "¿Puedo vender mis DMNS inmediatamente después de comprarlos en Raydium?",
            answer:
              "Sí, no hay restricciones de vesting en las compras directas en el mercado abierto.",
          },
          {
            question: "¿Cómo funciona la Crypto Farm?",
            answer:
              "El concepto consiste en generar valor mediante nuevas emisiones de tokens, asociaciones e inversiones descentralizadas, todo gobernado por la DAO.",
          },
          {
            question:
              "¿Qué sucede si mi saldo cae por debajo de 50M de DMNS?",
            answer:
              "Podrías perder algunos privilegios de la Diamonds Army y las funciones exclusivas asociadas a ese umbral.",
          },
          {
            question: "¿Es DMNS una buena inversión?",
            answer:
              "Las criptomonedas son de alto riesgo. Siempre haz tu propia investigación y evalúa tu tolerancia al riesgo. DMNS ofrece utilidad y beneficios potenciales, pero no es un consejo financiero.",
          },
        ],
      },
      community: {
        title: "Nuestra Comunidad Está Creciendo Rápidamente",
        description:
          "Es hora de actuar. Síguenos, únete a nuestros canales y no te pierdas actualizaciones, eventos y oportunidades exclusivas.",
        social: {
          x: "Síguenos en X",
          telegram: "Únete al Grupo de Telegram",
          whatsapp: "Únete al Grupo de WhatsApp",
        },
      },
      disclaimer: {
        title: "Descargo de responsabilidad",
        text:
          "La información proporcionada no constituye asesoramiento financiero o legal. Las criptomonedas son inversiones de alto riesgo. Cada usuario debe evaluar su propia tolerancia al riesgo y realizar una investigación exhaustiva (DYOR). Diamonds Group no se hace responsable de las posibles pérdidas financieras derivadas de la participación en el proyecto o de las fluctuaciones en el precio del token.",
        channelsTitle: "Canales Oficiales",
        channels: [
          { name: "Sitio Oficial", url: "https://diamonds-group.com/" },
          { name: "Telegram", url: "https://t.me/dmnstoken" },
          { name: "Twitter (X)", url: "https://x.com/DmnsGroup" },
        ],
      },
      footer: {
        text: "© 2025 - 2026 DMNS. Todos los derechos reservados.",
        poweredBy: "",
      },
      airdrop: {
        title: "¡Participa en el Airdrop de DMNS!",
        description1:
          "Un <strong>airdrop</strong> es una iniciativa mediante la cual los tokens se distribuyen gratuitamente a los usuarios, incentivando el crecimiento de la comunidad y fomentando la difusión del proyecto.",
        description2:
          "En este evento exclusivo, se repartirán <strong>250 millones de tokens DMNS</strong> entre todos los participantes!",
        cta: "¡Participa ahora!",
      },
      techSpecs: {
        title: "Especificaciones Técnicas",
        items: [
          "Código fuente verificado: El contrato ha sido revisado y validado, garantizando transparencia y seguridad.",
          "Sin riesgo de minting: No es posible crear nuevos tokens, eliminando el riesgo de dilución.",
          "Transferibilidad completa: Los usuarios pueden transferir tokens en cualquier momento, sin tarifas o límites.",
          "Contrato inmutable: El contrato no puede ser actualizado, asegurando estabilidad e integridad.",
          "Sin lista negra: Las billeteras no pueden ser bloqueadas para transferir tokens, evitando controles centralizados.",
          "Funciones de transferencia seguras: El router está codificado de forma fija y no hay llamadas externas, garantizando transferencias seguras.",
          "Metadatos inmutables: Los metadatos del token son completos e inalterables.",
          "Actividad reciente: El contrato muestra interacciones recientes, demostrando un uso activo y operativo.",
          "Liquidez segura: Pares de liquidez válidos y suficiente liquidez, sin riesgos de rugpull.",
          "Sin señales de fraude: No se han detectado antecedentes de estafas en la billetera del propietario, garantizando la legitimidad.",
        ],
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language.split('-')[0],
  fallbackLng: 'it',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
