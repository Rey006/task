# Portfolio Senior Developer & Tech Architect

Sito statico sviluppato in Astro v5. Questo progetto implementa una rigorosa separazione tra contenuto e presentazione: tutti i testi, i servizi e i progetti derivano da file Markdown (Content Collections) validati rigidamente in fase di build tramite Zod. 

Nessuna stringa editoriale è hardcoded nei componenti.

## 🚀 Installazione e Avvio Locale

Assicurati di avere Node.js installato (consigliata v18+).

1. **Clona il repository e installa le dipendenze:**
   ```bash
   npm install

2. **Avvia il server di sviluppo**
    ```bash
   npm run dev
Il sito sarà visibile su http://localhost:4321

3. Compila per la produzione
     ```bash
      npm run build
I file HTML statici, ottimizzati e minificati, verranno generati nella cartella dist/. Per testare la build di produzione in locale, usa npm run preview.


Come aggiungere un nuovo Servizio (Zero Code)
L'architettura è pensata per rendere i contenuti indipendenti dal codice. Per aggiungere, modificare o rimuovere un servizio, non devi toccare alcun file .astro o .ts.

Ti basta creare un nuovo file testuale all'interno della directory src/content/services/.

Esempio: src/content/services/nuovo-servizio.md

Markdown
---
title: "Nome del nuovo servizio"  
description: "Una breve descrizione che apparirà nella card della Home Page."  
order: 5
---

Qui puoi scrivere in **Markdown** tutta la descrizione dettagliata del servizio. Questo testo verrà automaticamente renderizzato nella pagina di dettaglio generata dinamicamente.
Basta salvare il file: Astro ricalcolerà la griglia in Home Page, ordinerà la card in base al campo order e genererà la pagina di dettaglio dedicata al percorso /servizi/nuovo-servizio.

Nota: Se dimentichi un campo obbligatorio nel Frontmatter, la build fallirà intenzionalmente bloccando il deploy e mostrandoti un errore parlante in console.

**Procedimento analogo per project**

