# Nota Tecnica e Scelte Architetturali

## Scelte Fatte
 Il sito è un puro Static Site Generator (SSG)

La vera spina dorsale del progetto è il modulo `astro:content`. Ho strutturato tre collezioni distinte:
1. **Company**: L'unica entry permessa, contiene la configurazione globale e i recapiti aziendali.
2. **Servizi**: Per la generazione dinamica dell'offerta tecnica.
3. **Progetti (Bonus)**: Ho colto l'occasione per implementare il portfolio richiesto come extra.

Il codice è privo di testi hardcoded anche le etichette di fallback (come lo status di disponibilità lavorativa) sono gestite tramite lo schema di validazione e recuperate dai file Markdown.

## Dipendenze Aggiunte
L'approccio adottato è stato estremamente conservativo, "dipendenze minime" 
- Nessuna libreria UI (es. Tailwind o Bootstrap). Il CSS è stato scritto a mano, isolato a livello di componente (scoped CSS).
- L'unica libreria esterna utilizzata internamente da Astro è `zod` (richiamata via `astro/zod`) per la stipula dei contratti sui dati.

## Sviluppi Futuri (Con più tempo a disposizione)
**Ottimizzazione della DX per l'ordinamento (Content Management):** 
Attualmente, la gerarchia visiva dei servizi è gestita tramite un intero hardcoded nel frontmatter (`order`). Sebbene il metodo `.sort()` a runtime neutralizzi eventuali "buchi" di indicizzazione dovuti all'eliminazione di un file (es. sequenze come 1, 2, 4, 5), questo approccio è fragile lato redazionale. Inserire un nuovo servizio a metà di una lista lunga costringerebbe l'editor a rinumerare manualmente tutti i file successivi. Un refactoring futuro prevederà l'abbandono degli interi a favore di pesi flottanti (es. `order: 2.5`), l'utilizzo di un prefisso numerico nel nome del file letto dinamicamente dal loader, oppure l'introduzione di un micro-script Node.js pre-commit per il ribilanciamento automatico degli indici.
## Bonus: Anteprima Pubblicata
Il progetto è compilato e distribuito automaticamente tramite Continuous Deployment.
Puoi visionare il risultato finale qui:
