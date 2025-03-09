// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    translation: {
      cookieBanner: {
        initialTitle: "Teniamo alla tua privacy",
        initialDescription:
          "Utilizziamo cookie per migliorare la tua esperienza di navigazione, offrire annunci o contenuti personalizzati e analizzare il nostro traffico. Cliccando su \"Accetta tutto\", acconsenti all'uso dei cookie.",
        customizeBtn: "Personalizza",
        acceptAllBtn: "Accetta tutto",

        secondTitle: "Personalizza le preferenze sui cookie",
        secondDescription1:
          "Troverai informazioni dettagliate su tutti i cookie nelle categorie di consenso qui sotto.",
        secondDescription2:
          "I cookie classificati come \"Necessari\" sono memorizzati sul tuo browser poiché sono essenziali per abilitare le funzionalità di base del sito.",
        secondDescription3:
          "Utilizziamo anche cookie di terze parti che ci aiutano ad analizzare come utilizzi questo sito, memorizzare le tue preferenze e fornire contenuti e annunci pubblicitari pertinenti. Questi cookie verranno memorizzati nel tuo browser solo con il tuo consenso.",
        secondDescription4:
          "Puoi scegliere di abilitare o disabilitare alcuni o tutti questi cookie, ma disabilitarne alcuni potrebbe influire sulla tua esperienza di navigazione.",
        showLessBtn: "Mostra meno",

        categories: {
          necessary: {
            title: "Necessari (Sempre Attivi)",
            description:
              "I cookie necessari sono richiesti per abilitare le funzionalità di base di questo sito, come fornire un accesso sicuro o regolare le tue preferenze di consenso. Questi cookie non memorizzano alcun dato personale identificabile.",
          },
          functional: {
            title: "Funzionali",
            description:
              "I cookie funzionali aiutano a svolgere alcune funzionalità come condividere i contenuti del sito su piattaforme social, raccogliere feedback e altre funzionalità di terze parti.",
          },
          analytics: {
            title: "Analitici",
            description:
              "I cookie analitici vengono utilizzati per capire come i visitatori interagiscono con il sito. Questi cookie aiutano a fornire informazioni su metriche come il numero di visitatori, la frequenza di rimbalzo, la fonte del traffico, ecc.",
          },
          performance: {
            title: "Prestazioni",
            description:
              "I cookie di prestazione vengono utilizzati per comprendere e analizzare gli indici di prestazione chiave del sito, aiutando a fornire una migliore esperienza utente ai visitatori.",
          },
          advertisement: {
            title: "Pubblicitari",
            description:
              "I cookie pubblicitari vengono utilizzati per fornire ai visitatori annunci personalizzati in base alle pagine che hai visitato in precedenza e per analizzare l'efficacia delle campagne pubblicitarie.",
          },
        },

        savePreferencesBtn: "Salva le mie preferenze",
      },
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
          innovation:
            "Innovazione: Sviluppiamo soluzioni Innovativi tramite modelli efficaci & sostenibili.",
          decentralization:
            "Decentralizzazione: La community e la DAO guidano le decisioni chiave.",
          transparency:
            "Trasparenza: Tutte le transazioni e i lanci di token sono verificabili on-chain.",
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
            question:
              "Posso vendere i miei DMNS subito dopo l’acquisto su Raydium?",
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

      // ---- SEZIONE NUOVA PER IL TUTORIAL DETTAGLIATO D'ACQUISTO ----
      purchaseDetailed: {
        introText: "Segui questi passaggi dettagliati per acquistare DMNS:",
        steps: {
          step1: {
            title: "1. Compra SOLANA da un CEX",
            list: [
              {
                label: "Passo 1",
                text: "Registrati su un exchange centralizzato affidabile (ad es. Binance, Coinbase, Kraken).",
              },
              {
                label: "Passo 2",
                text: "Completa il processo di verifica dell’account (KYC) se richiesto.",
              },
              {
                label: "Passo 3",
                text: "Deposita valuta fiat o criptovalute e acquista SOLANA.",
              },
            ],
          },
          step2: {
            title: "2. Invia SOLANA dal CEX al wallet Phantom",
            list: [
              {
                label: "Passo 1",
                text: "Apri il tuo wallet Phantom e copia il tuo indirizzo pubblico.",
              },
              {
                label: "Passo 2",
                text: "Accedi al pannello di prelievo del CEX e incolla l'indirizzo Phantom come destinazione.",
              },
              {
                label: "Passo 3",
                text: "Controlla le commissioni di prelievo e conferma la transazione.",
              },
            ],
          },
          step3: {
            title: "3. Swappa SOL in DMNS usando Phantom",
            list: [
              {
                label: "Passo 1",
                text: "Apri l’app Phantom e naviga nella sezione 'Swap' o 'Scambia'.",
              },
              {
                label: "Passo 2",
                text: "Seleziona SOL come valuta di partenza e DMNS come valuta di destinazione.",
              },
              {
                label: "Passo 3",
                text: "Inserisci l’importo da scambiare, verifica il tasso di cambio e conferma lo swap.",
              },
            ],
          },
          step4: {
            title: "4. Benvenuto nella community!",
            list: [
              {
                label: "Passo 1",
                text: "Visita il nostro sito ufficiale e i canali social per rimanere aggiornato sulle novità.",
              },
              {
                label: "Passo 2",
                text: "Iscriviti al canale Telegram e segui il nostro profilo Twitter per partecipare agli eventi.",
              },
              {
                label: "Passo 3",
                text: "Partecipa attivamente alla community per scoprire vantaggi esclusivi e approfondimenti sul progetto.",
              },
            ],
          },
        },
        raydiumButton: "Acquista DMNS su Raydium",
      },
    },
  },
  en: {
    translation: {
      cookieBanner: {
        initialTitle: "We value your privacy",
        initialDescription:
          "We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking \"Accept All\", you consent to our use of cookies.",
        customizeBtn: "Customize",
        acceptAllBtn: "Accept All",

        secondTitle: "Customize Consent Preferences",
        secondDescription1:
          "You will find detailed information about all cookies under each consent category below.",
        secondDescription2:
          'The cookies that are categorized as "Necessary" are stored on your browser as they are essential for enabling the basic functionalities of the site.',
        secondDescription3:
          "We also use third-party cookies that help us analyze how you use this website, store your preferences, and provide content and advertisements that are relevant to you. These cookies will only be stored in your browser with your consent.",
        secondDescription4:
          "You can choose to enable or disable some or all of these cookies but disabling some of them may affect your browsing experience.",
        showLessBtn: "Show less",

        categories: {
          necessary: {
            title: "Necessary (Always Active)",
            description:
              "Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personal identifiable data.",
          },
          functional: {
            title: "Functional",
            description:
              "Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.",
          },
          analytics: {
            title: "Analytics",
            description:
              "Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.",
          },
          performance: {
            title: "Performance",
            description:
              "Performance cookies are used to understand and analyze the key performance indexes of the website which helps in delivering a better user experience for the visitors.",
          },
          advertisement: {
            title: "Advertisement",
            description:
              "Advertisement cookies are used to provide visitors with customized advertisements based on the pages you visited previously and to analyze the effectiveness of the ad campaigns.",
          },
        },

        savePreferencesBtn: "Save My Preferences",
      },
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
          "Diamonds Group was born as a decentralized Crypto Farm with the goal of facilitating the creation and growth of high-potential Utility Tokens, providing real economic structures to individuals and communities. We leverage the Solana blockchain to ensure transparency, security, and fast transactions.",
        list: {
          innovation:
            "Innovation: We develop innovative solutions through effective & sustainable models.",
          decentralization:
            "Decentralization: The community and the DAO guide key decisions.",
          transparency:
            "Transparency: All transactions and token launches are verifiable on-chain.",
          inclusivity:
            "Inclusivity: Open to everyone, both experts and newcomers.",
          sharedGrowth:
            "Shared Growth: More users = more adoption and benefits for the entire ecosystem.",
        },
      },
      features: {
        primaryTitle: "Main Features",
        extendedTitle: "More Than a Crypto: An Ecosystem",
        primary: [
          {
            title: "DMNS: A Strategic Token",
            description:
              "It acts as collateral for the entire ecosystem, aiming to increase trust and sustainability through diversification.",
          },
          {
            title: "Fair Launch",
            description:
              "We launched DMNS fairly on SolSale, making the token accessible to everyone from the very beginning.",
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
              "We are active on multiple continents, with local partners promoting DMNS’s spread and real adoption.",
          },
          {
            title: "Community Driven",
            description:
              "Decision-making power lies in the hands of holders: thanks to the DAO, every proposal is voted on transparently.",
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
              "Through buybacks, burns, and partnerships, DMNS aims to support and increase its value over time.",
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
          "Solana's DeFi ecosystem boasts a robust and continuously expanding liquidity pool, offering unique opportunities for traders and investors. Furthermore, its scalability enables DMNS to grow over time.",
      },
      roadmap: {
        title: "Extended Roadmap",
        items: [
          {
            quarter: "Q1 (January – March)",
            holdersTarget: "5,000 HOLDERS",
            milestones: [
              "Fair Launch on SolSale (ended on 01/23/2024)",
              "Listings on ranking sites (CMC, CG, DexScreener, Dextools, GmGn)",
              "Documentation completion (GitBook)",
              "Airdrop announcement",
            ],
          },
          {
            quarter: "Q2 (April – June)",
            holdersTarget: "25,000 HOLDERS",
            milestones: [
              "Launch of Social Commerce platform",
              "Listing on Top 20 CEX",
              "Airdrop distribution",
              "Global expansion and international promotion",
              "Development of DMNS Wallet (Staking & Farming)",
            ],
          },
          {
            quarter: "Q3 (July – September)",
            holdersTarget: "60,000 HOLDERS",
            milestones: [
              "DAO development: on-chain governance testing",
              "Listing on Top 10 CEX",
              "DAO beta testing",
              "Social Network platform launch",
            ],
          },
          {
            quarter: "Q4 (October – December)",
            holdersTarget: "100,000 HOLDERS",
            milestones: [
              "Full DAO launch",
              "Diamonds DEX launch",
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
          "After the Fair Launch on SolSale (ended on January 23, 2024), DMNS is available on:",
        list: ["Raydium (Solana AMM)", "Coming Soon on Top 20 CEX"],
        instructions:
          "To purchase on Raydium, create or connect a Solana wallet (Phantom, Solflare, Sollet), go to Raydium, and select DMNS (Mint Address: 3cegQvfWj32SVViSRvYqeAxDxqqPAb4ud67EY75joMr5) if it does not appear automatically. Confirm the swap with SOL. The tokens will appear in your wallet immediately.",
        note:
          "There is no vesting for open-market purchases. If you prefer to wait for a CEX listing, keep an eye on official announcements.",
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "What is Diamonds Army?",
            answer:
              "It is an exclusive community of DMNS holders (minimum 50M tokens) that offers early access to important announcements and a personalized NFT as a badge.",
          },
          {
            question:
              "Can I sell my DMNS immediately after purchasing on Raydium?",
            answer:
              "Yes, there are no vesting restrictions on direct open-market purchases.",
          },
          {
            question: "How does the Crypto Farm work?",
            answer:
              "The concept is to generate value through new token issuances, partnerships, and decentralized investments, all governed by the DAO.",
          },
          {
            question: "What happens if my balance falls below 50M DMNS?",
            answer:
              "You might lose some Diamonds Army privileges and exclusive features tied to that threshold.",
          },
          {
            question: "Is DMNS a good investment?",
            answer:
              "Cryptocurrencies are high-risk. Always do your research and evaluate your risk tolerance. DMNS offers utility and potential advantages, but this is not financial advice.",
          },
        ],
      },
      community: {
        title: "Our Community Is Growing Rapidly",
        description:
          "Now is the time to act. Follow us, join our channels, and don’t miss out on updates, events, and exclusive opportunities.",
        social: {
          x: "Follow us on X",
          telegram: "Join the Telegram Group",
          whatsapp: "Join the WhatsApp Group",
        },
      },
      disclaimer: {
        title: "Disclaimer",
        text:
          "The information provided does not constitute financial or legal advice. Cryptocurrencies are high-risk investments. Each user should evaluate their own risk tolerance and conduct thorough research (DYOR). Diamonds Group is not responsible for any financial losses resulting from participation in the project or token price fluctuations.",
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
          "An <strong>airdrop</strong> is an initiative through which tokens are distributed free of charge to users, encouraging community growth and project outreach.",
        description2:
          "In this exclusive event, <strong>250 million DMNS tokens</strong> are up for grabs, to be shared among all participants!",
        cta: "Join Now!",
      },
      techSpecs: {
        title: "Technical Specifications",
        items: [
          "Verified source code: The contract has been reviewed and validated, guaranteeing transparency and security.",
          "No minting risk: It is not possible to create new tokens, eliminating the risk of dilution.",
          "Full transferability: Users can transfer tokens at any time, without fees or limits.",
          "Immutable contract: The contract cannot be updated, ensuring stability and integrity.",
          "No blacklist: Wallets cannot be blocked from transferring tokens, preventing centralized controls.",
          "Secure transfer functions: The router is hardcoded and there are no external calls, ensuring secure transfers.",
          "Immutable metadata: The token's metadata is complete and cannot be changed.",
          "Recent activity: The contract shows recent interactions, demonstrating active and operational usage.",
          "Secure liquidity: Valid liquidity pairs and sufficient liquidity, with no rugpull risks.",
          "No signs of fraud: No previous scams have been detected from the owner's wallet, ensuring legitimacy.",
        ],
      },

      // ---- NEW SECTION FOR DETAILED PURCHASE TUTORIAL ----
      purchaseDetailed: {
        introText: "Follow these detailed steps to purchase DMNS:",
        steps: {
          step1: {
            title: "1. Buy SOLANA from a CEX",
            list: [
              {
                label: "Step 1",
                text: "Sign up for a reliable centralized exchange (e.g., Binance, Coinbase, Kraken).",
              },
              {
                label: "Step 2",
                text: "Complete the account verification process (KYC) if required.",
              },
              {
                label: "Step 3",
                text: "Deposit fiat currency or cryptocurrencies and purchase SOLANA.",
              },
            ],
          },
          step2: {
            title: "2. Send SOLANA from the CEX to your Phantom wallet",
            list: [
              {
                label: "Step 1",
                text: "Open your Phantom wallet and copy your public address.",
              },
              {
                label: "Step 2",
                text: "Access the withdrawal panel on the CEX and paste the Phantom address as the destination.",
              },
              {
                label: "Step 3",
                text: "Check the withdrawal fees and confirm the transaction.",
              },
            ],
          },
          step3: {
            title: "3. Swap SOL for DMNS using Phantom",
            list: [
              {
                label: "Step 1",
                text: "Open the Phantom app and go to the 'Swap' section.",
              },
              {
                label: "Step 2",
                text: "Select SOL as the currency you’re swapping from and DMNS as the currency you’re swapping to.",
              },
              {
                label: "Step 3",
                text: "Enter the amount to swap, verify the exchange rate, and confirm the swap.",
              },
            ],
          },
          step4: {
            title: "4. Welcome to the community!",
            list: [
              {
                label: "Step 1",
                text: "Visit our official website and social channels to stay updated on the latest news.",
              },
              {
                label: "Step 2",
                text: "Join our Telegram channel and follow our Twitter profile to participate in events.",
              },
              {
                label: "Step 3",
                text: "Get actively involved in the community to discover exclusive benefits and project insights.",
              },
            ],
          },
        },
        raydiumButton: "Purchase DMNS on Raydium",
      },
    },
  },
  es: {
    translation: {
      cookieBanner: {
        initialTitle: "Valoramos tu privacidad",
        initialDescription:
          "Utilizamos cookies para mejorar tu experiencia de navegación, ofrecer anuncios o contenido personalizado y analizar nuestro tráfico. Al hacer clic en \"Aceptar todo\", aceptas nuestro uso de cookies.",
        customizeBtn: "Personalizar",
        acceptAllBtn: "Aceptar todo",

        secondTitle: "Personalizar preferencias de consentimiento",
        secondDescription1:
          "Encontrarás información detallada sobre todas las cookies en cada categoría de consentimiento a continuación.",
        secondDescription2:
          'Las cookies que se clasifican como "Necesarias" se almacenan en tu navegador porque son esenciales para habilitar las funcionalidades básicas del sitio.',
        secondDescription3:
          "También utilizamos cookies de terceros que nos ayudan a analizar cómo usas este sitio, almacenar tus preferencias y proporcionar contenido y anuncios relevantes. Estas cookies solo se almacenarán en tu navegador con tu consentimiento.",
        secondDescription4:
          "Puedes optar por habilitar o deshabilitar algunas o todas estas cookies, pero deshabilitar algunas de ellas puede afectar tu experiencia de navegación.",
        showLessBtn: "Mostrar menos",

        categories: {
          necessary: {
            title: "Necesarias (Siempre Activas)",
            description:
              "Las cookies necesarias son requeridas para habilitar las funciones básicas de este sitio, como proporcionar inicio de sesión seguro o ajustar tus preferencias de consentimiento. Estas cookies no almacenan datos personales identificables.",
          },
          functional: {
            title: "Funcionales",
            description:
              "Las cookies funcionales ayudan a realizar ciertas funcionalidades, como compartir el contenido del sitio en redes sociales, recopilar comentarios y otras funciones de terceros.",
          },
          analytics: {
            title: "Analíticas",
            description:
              "Las cookies analíticas se utilizan para entender cómo los visitantes interactúan con el sitio. Estas cookies ayudan a proporcionar información sobre métricas como el número de visitantes, la tasa de rebote, la fuente de tráfico, etc.",
          },
          performance: {
            title: "Rendimiento",
            description:
              "Las cookies de rendimiento se utilizan para comprender y analizar los índices de rendimiento clave del sitio, ayudando a brindar una mejor experiencia de usuario a los visitantes.",
          },
          advertisement: {
            title: "Publicidad",
            description:
              "Las cookies publicitarias se utilizan para proporcionar a los visitantes anuncios personalizados basados en las páginas que has visitado anteriormente y para analizar la efectividad de las campañas publicitarias.",
          },
        },

        savePreferencesBtn: "Guardar mis preferencias",
      },
      hero: {
        welcome: "<span class='text-yellow-400'>Diamonds</span> Group",
        description:
          "Bienvenidos a Diamonds Group, el ecosistema en la blockchain de Solana. El revolucionario <strong class='text-yellow-400'>DMNS</strong> Token es la clave para acceder a servicios exclusivos, formación gratuita y oportunidades económicas en una nueva economía descentralizada y transparente.",
        roadmapButton: "Descubre la Hoja de Ruta",
        purchaseButton: "Cómo Comprar",
      },
      vision: {
        title: "Nuestra Visión",
        description:
          "Diamonds Group nace como una Crypto Farm descentralizada con el objetivo de favorecer la creación y el crecimiento de Tokens de Utilidad de alto potencial, brindando estructuras económicas reales a individuos y comunidades. Aprovechamos la blockchain de Solana para garantizar transparencia, seguridad y transacciones rápidas.",
        list: {
          innovation:
            "Innovación: Desarrollamos soluciones innovadoras mediante modelos efectivos y sostenibles.",
          decentralization:
            "Descentralización: La comunidad y la DAO guían las decisiones clave.",
          transparency:
            "Transparencia: Todas las transacciones y lanzamientos de tokens son verificables en la cadena.",
          inclusivity:
            "Inclusividad: Abierto a todos, tanto expertos como principiantes.",
          sharedGrowth:
            "Crecimiento Compartido: Más usuarios = mayor adopción y beneficios para todo el ecosistema.",
        },
      },
      features: {
        primaryTitle: "Características Principales",
        extendedTitle: "Más Que una Cripto: Un Ecosistema",
        primary: [
          {
            title: "DMNS: Un Token Estratégico",
            description:
              "Funciona como activo colateral de todo el ecosistema, con el objetivo de aumentar la confianza y la sostenibilidad a través de la diversificación.",
          },
          {
            title: "Fair Launch",
            description:
              "Lanzamos DMNS de manera equitativa en SolSale, haciendo que el token fuera accesible para todos desde el principio.",
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
              "DMNS no es solo un token, sino todo un ecosistema donde nuevos proyectos se conectan y crean valor mutuo.",
          },
          {
            title: "Expansión Global",
            description:
              "Estamos activos en varios continentes, con socios locales que promueven la difusión y la adopción real de DMNS.",
          },
          {
            title: "Impulsado por la Comunidad",
            description:
              "El poder de decisión está en manos de los holders: gracias a la DAO, cada propuesta se vota de forma transparente.",
          },
          {
            title: "dApp Innovadoras",
            description:
              "Estamos desarrollando diversas dApps para ayudar a los usuarios a tomar decisiones informadas: Wallet, Social Commerce, Red Social, DAO.",
          },
          {
            title: "Tecnología Avanzada",
            description:
              "Solana ofrece altos TPS y comisiones muy bajas, lo que hace que DMNS sea ideal para microtransacciones y usos a gran escala.",
          },
          {
            title: "Potencial Económico",
            description:
              "A través de recompras, quema y colaboraciones, DMNS busca sostener y aumentar su valor con el tiempo.",
          },
        ],
      },
      solana: {
        title: "¿Por qué Solana?",
        cards: [
          {
            title: "Velocidad",
            description: "Hasta 65,000 TPS con finalidad casi instantánea.",
          },
          {
            title: "Costo",
            description: "Transacciones desde $0.00025 cada una.",
          },
        ],
        description:
          "El ecosistema DeFi de Solana cuenta con un pool de liquidez sólido y en constante expansión, ofreciendo oportunidades únicas para traders e inversores. Además, su escalabilidad permite que DMNS crezca con el tiempo.",
      },
      roadmap: {
        title: "Hoja de Ruta Extendida",
        items: [
          {
            quarter: "Q1 (Enero – Marzo)",
            holdersTarget: "5,000 HOLDERS",
            milestones: [
              "Lanzamiento Justo en SolSale (finalizado el 23/01/2024)",
              "Listados en sitios de ranking (CMC, CG, DexScreener, Dextools, GmGn)",
              "Finalización de la documentación (GitBook)",
              "Anuncio del Airdrop",
            ],
          },
          {
            quarter: "Q2 (Abril – Junio)",
            holdersTarget: "25,000 HOLDERS",
            milestones: [
              "Lanzamiento de la plataforma de Social Commerce",
              "Listado en CEX Top 20",
              "Distribución del Airdrop",
              "Expansión global y promoción internacional",
              "Desarrollo de la Billetera DMNS (Staking & Farming)",
            ],
          },
          {
            quarter: "Q3 (Julio – Septiembre)",
            holdersTarget: "60,000 HOLDERS",
            milestones: [
              "Desarrollo de la DAO: pruebas de gobernanza on-chain",
              "Listado en CEX Top 10",
              "Pruebas beta de la DAO",
              "Lanzamiento de la plataforma de Red Social",
            ],
          },
          {
            quarter: "Q4 (Octubre – Diciembre)",
            holdersTarget: "100,000 HOLDERS",
            milestones: [
              "Lanzamiento completo de la DAO",
              "Lanzamiento de Diamonds DEX",
              "NFT para formadores y certificaciones",
              "Consolidación de alianzas globales",
              "Posicionamiento internacional",
            ],
          },
        ],
      },
      purchase: {
        title: "Cómo Comprar DMNS",
        intro:
          "Tras el Fair Launch en SolSale (finalizado el 23 de enero de 2024), DMNS está disponible en:",
        list: ["Raydium (AMM de Solana)", "Próximamente en CEX Top 20"],
        instructions:
          "Para comprar en Raydium, crea o conecta una billetera de Solana (Phantom, Solflare, Sollet), ingresa a Raydium y selecciona DMNS (Dirección de Mint: 3cegQvfWj32SVViSRvYqeAxDxqqPAb4ud67EY75joMr5) si no aparece automáticamente. Confirma el intercambio con SOL. Los tokens aparecerán inmediatamente en tu billetera.",
        note:
          "No hay vesting para compras en el mercado abierto. Si prefieres esperar al listado en un CEX, mantente atento a los anuncios oficiales.",
      },
      faq: {
        title: "Preguntas Frecuentes",
        items: [
          {
            question: "¿Qué es Diamonds Army?",
            answer:
              "Es una comunidad exclusiva de holders de DMNS (mínimo 50M de tokens) que ofrece acceso anticipado a anuncios importantes y un NFT personalizado como insignia.",
          },
          {
            question:
              "¿Puedo vender mis DMNS inmediatamente después de comprarlos en Raydium?",
            answer:
              "Sí, no hay restricciones de vesting en compras directas en el mercado abierto.",
          },
          {
            question: "¿Cómo funciona la Crypto Farm?",
            answer:
              "El concepto consiste en generar valor mediante nuevas emisiones de tokens, colaboraciones e inversiones descentralizadas, todo gobernado por la DAO.",
          },
          {
            question: "¿Qué sucede si mi saldo cae por debajo de 50M de DMNS?",
            answer:
              "Podrías perder algunos privilegios de Diamonds Army y características exclusivas vinculadas a ese límite.",
          },
          {
            question: "¿Es DMNS una buena inversión?",
            answer:
              "Las criptomonedas son de alto riesgo. Siempre haz tu propia investigación y evalúa tu tolerancia al riesgo. DMNS ofrece utilidad y posibles ventajas, pero esto no es un consejo financiero.",
          },
        ],
      },
      community: {
        title: "Nuestra Comunidad Está Creciendo Rápidamente",
        description:
          "Este es el momento de actuar. Síguenos, únete a nuestros canales y no te pierdas actualizaciones, eventos y oportunidades exclusivas.",
        social: {
          x: "Síguenos en X",
          telegram: "Únete al Grupo de Telegram",
          whatsapp: "Únete al Grupo de WhatsApp",
        },
      },
      disclaimer: {
        title: "Descargo de responsabilidad",
        text:
          "La información proporcionada no constituye asesoramiento financiero ni legal. Las criptomonedas son inversiones de alto riesgo. Cada usuario debe evaluar su propia tolerancia al riesgo y realizar una investigación exhaustiva (DYOR). Diamonds Group no se hace responsable de las pérdidas financieras derivadas de la participación en el proyecto o de las fluctuaciones en el precio del token.",
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
          "Un <strong>airdrop</strong> es una iniciativa mediante la cual se distribuyen tokens de forma gratuita a los usuarios, fomentando el crecimiento de la comunidad y la difusión del proyecto.",
        description2:
          "En este evento exclusivo, se ofrecen <strong>250 millones de tokens DMNS</strong> para repartir entre todos los participantes.",
        cta: "¡Participa ahora!",
      },
      techSpecs: {
        title: "Especificaciones Técnicas",
        items: [
          "Código fuente verificado: El contrato ha sido revisado y validado, garantizando transparencia y seguridad.",
          "Sin riesgo de minting: No es posible crear nuevos tokens, eliminando el riesgo de dilución.",
          "Transferibilidad total: Los usuarios pueden transferir los tokens en cualquier momento, sin comisiones ni límites.",
          "Contrato inmutable: El contrato no se puede actualizar, lo que garantiza estabilidad e integridad.",
          "Sin lista negra: Las billeteras no pueden ser bloqueadas para transferir tokens, evitando controles centralizados.",
          "Funciones de transferencia seguras: El router está codificado de forma fija y no hay llamadas externas, asegurando transferencias seguras.",
          "Metadatos inmutables: Los metadatos del token son completos y no pueden modificarse.",
          "Actividad reciente: El contrato muestra interacciones recientes, demostrando un uso activo y operativo.",
          "Liquidez segura: Pares de liquidez válidos y liquidez suficiente, sin riesgos de rugpull.",
          "Sin señales de fraude: No se han detectado estafas previas en la billetera del propietario, garantizando la legitimidad.",
        ],
      },

      // ---- NUEVA SECCIÓN PARA EL TUTORIAL DETALLADO DE COMPRA ----
      purchaseDetailed: {
        introText: "Sigue estos pasos detallados para comprar DMNS:",
        steps: {
          step1: {
            title: "1. Compra SOLANA en un CEX",
            list: [
              {
                label: "Paso 1",
                text: "Regístrate en un exchange centralizado confiable (p. ej., Binance, Coinbase, Kraken).",
              },
              {
                label: "Paso 2",
                text: "Completa el proceso de verificación de cuenta (KYC) si es necesario.",
              },
              {
                label: "Paso 3",
                text: "Deposita moneda fiduciaria o criptomonedas y adquiere SOLANA.",
              },
            ],
          },
          step2: {
            title: "2. Envía SOLANA desde el CEX a tu wallet Phantom",
            list: [
              {
                label: "Paso 1",
                text: "Abre tu wallet Phantom y copia tu dirección pública.",
              },
              {
                label: "Paso 2",
                text: "Accede al panel de retiros del CEX y pega la dirección de Phantom como destino.",
              },
              {
                label: "Paso 3",
                text: "Verifica las comisiones de retiro y confirma la transacción.",
              },
            ],
          },
          step3: {
            title: "3. Intercambia SOL por DMNS usando Phantom",
            list: [
              {
                label: "Paso 1",
                text: "Abre la aplicación Phantom y dirígete a la sección 'Swap' (Intercambio).",
              },
              {
                label: "Paso 2",
                text: "Selecciona SOL como la moneda de origen y DMNS como la moneda de destino.",
              },
              {
                label: "Paso 3",
                text: "Ingresa la cantidad a intercambiar, verifica el tipo de cambio y confirma la operación.",
              },
            ],
          },
          step4: {
            title: "4. ¡Bienvenido a la comunidad!",
            list: [
              {
                label: "Paso 1",
                text: "Visita nuestro sitio web oficial y redes sociales para mantenerte al día de las novedades.",
              },
              {
                label: "Paso 2",
                text: "Únete a nuestro canal de Telegram y sigue nuestro perfil de Twitter para participar en eventos.",
              },
              {
                label: "Paso 3",
                text: "Participa activamente en la comunidad para descubrir beneficios exclusivos y conocer más sobre el proyecto.",
              },
            ],
          },
        },
        raydiumButton: "Compra DMNS en Raydium",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language.split('-')[0], // Rileva la lingua del browser
  fallbackLng: 'it',                    // Lingua di fallback
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
