# Pizzeria San Marino - Sito Web

Sito web moderno per pizzeria con takeaway e consegne a domicilio.

## Tecnologie
- Vite
- Tailwind CSS
- Vanilla JavaScript

## Installazione

```bash
npm install
```

## Sviluppo

```bash
npm run dev
```

Il sito sarà disponibile su `http://localhost:3000`

## Build per Produzione

```bash
npm run build
```

## Personalizzazione

### Modificare il Menu
Apri il file `src/main.js` e modifica l'array `menuItems` con i tuoi prodotti.

### Modificare il Numero di Telefono
Cerca `+3780549XXXXXX` in `index.html` e sostituiscilo con il tuo numero.

### Aggiungere Foto ai Prodotti
1. Carica le immagini nella cartella `public/`
2. Aggiorna il campo `image` in `menuItems` con il percorso corretto (es: `/pizza-margherita.jpg`)

### Modificare i Link dell'App
In `index.html`, cerca i link App Store e Google Play nella sezione `#download` e aggiorna gli `href`.

## Colori Brand
- Rosso principale: `#E63946`
- Nero: `#1D1D1D`
- Bianco: `#FFFFFF`
