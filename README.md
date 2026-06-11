# 🏎️ Porsche Spendenaktion - Professionelle Spendenwebseite

Eine moderne, responsive und professionelle Spendenwebseite für eine Porsche-Spendenaktion mit mehreren Zahlungsmöglichkeiten.

## Features ✨

- **Responsives Design**: Perfekt auf allen Geräten (Desktop, Tablet, Mobil)
- **Sauberes, professionelles Layout**: Weiss mit grauen Akzenten
- **Fortschrittsanzeige**: Visueller Fortschritt zum Spendenziel
- **Mehrere Zahlungsmöglichkeiten**:
  - 💳 Kreditkarte (Stripe)
  - 🏦 Banküberweisung (IBAN)
  - 📱 TWINT
  - 💰 PayPal
- **Spenderwall**: Zeige deine Spender und ihre Beiträge
- **Kontaktformular**: Einfache Möglichkeit für Besucher, dich zu kontaktieren
- **Smooth Scrolling**: Benutzerfreundliche Navigation

## Struktur 📁

```
.
├── index.html      # Hauptseite mit allen Inhalten
├── styles.css      # Vollständige Styling (Weiss + Grau)
├── script.js       # Interaktivität und Funktionalität
└── README.md       # Diese Datei
```

## Installation 🚀

1. Repository klonen:
```bash
git clone https://github.com/spende-schweiz/spenden.porsche.git
cd spenden.porsche
```

2. Eine lokale HTTP-Server starten:
```bash
# Mit Python 3:
python -m http.server 8000

# Mit Node.js:
npx http-server
```

3. Browser öffnen und aufrufen:
```
http://localhost:8000
```

## Zahlungsintegration 💳

### Stripe (Kreditkarten)
```javascript
// In script.js integrieren:
const stripe = Stripe('pk_test_YOUR_KEY');
// ...
```

### PayPal
Integriere den PayPal SDK:
```html
<script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>
```

### TWINT
Verweise auf: `https://www.twint.ch`

### Banküberweisung
IBAN: `CH93 0076 2011 6238 5295 7`
Referenz: `PORSCHE-2026`

## Anpassung 🎨

### Farben ändern
In `styles.css`:
- Hintergrund: `#ffffff` (Weiss)
- Akzente: `#888` oder `#555` (Grau)
- Text: `#1a1a1a` (Dunkelgrau)

### Ziele anpassen
In `index.html`, Sektion "goal-stats":
```html
<div class="stat-number">CHF 150'000</div>
<div class="stat-label">Gesamtziel</div>
```

### IBAN und Kontaktdaten
Aktualisiere die Bankdaten und Kontaktinformationen in der Sektion "payment-methods" und "contact".

## Sicherheit 🔒

- ✅ Verwende HTTPS für die Live-Website
- ✅ Integriere sichere Payment-Gateways (Stripe, PayPal)
- ✅ Implementiere CSRF-Schutz
- ✅ Validiere alle Eingaben auf dem Server

## Browser-Kompatibilität 🌐

- Chrome (neueste)
- Firefox (neueste)
- Safari (neueste)
- Edge (neueste)
- Mobile Browser

## Performance 📊

- ✅ Optimiert für schnelles Laden
- ✅ Mobile-First Design
- ✅ Smooth Animations
- ✅ Minimale externe Dependencies

## Support & Kontakt 📞

Email: info@spende-porsche.ch
Telefon: +41 44 123 4567

## Lizenz 📄

MIT License - Frei verwendbar

---

**Made with ❤️ for the Porsche Dream Campaign**