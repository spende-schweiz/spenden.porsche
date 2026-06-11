# Deployment Guide 🚀

## GitHub Pages Deployment

### Schritt 1: GitHub Pages aktivieren
1. Gehe zu Settings → Pages
2. Wähle "Deploy from a branch"
3. Wähle Branch: `main`
4. Wähle Folder: `/ (root)`
5. Speichern

Deine Website ist dann unter `https://spende-schweiz.github.io/spenden.porsche/` verfügbar.

## Netlify Deployment

```bash
npm install -g netlify-cli
netlify login
netlify deploy
```

## Vercel Deployment

```bash
npm install -g vercel
vercel
```

## Eigener Server (z.B. 1&1, Bluehost)

1. Dateien per FTP hochladen:
   - index.html
   - styles.css
   - script.js
   - Alle anderen Dateien

2. Domain zeigt auf Verzeichnis

## Custom Domain

1. Domain DNS-Einstellungen anpassen
2. A-Record oder CNAME-Record setzen
3. SSL-Zertifikat aktivieren (Let's Encrypt)

## Payment-Provider konfigurieren

### Für Stripe:
1. Konto erstellen: https://stripe.com
2. API-Keys in script.js eintragen
3. Webhook-Handler implementieren

### Für PayPal:
1. Business-Konto erstellen: https://developer.paypal.com
2. Client-ID in HTML eintragen
3. Server-Validierung implementieren

### Für TWINT:
1. TWINT-Integrationen: https://business.twint.ch
2. QR-Code oder Link generieren

## SSL/TLS Zertifikat

Stelle sicher, dass deine Website mit HTTPS läuft:
- Kostenlos via Let's Encrypt
- Automatisch bei GitHub Pages, Netlify, Vercel
- Manuell auf eigenem Server

## Backup und Monitoring

- ✅ Regelmäßige Backups erstellen
- ✅ Uptime-Monitoring aktivieren
- ✅ Error-Logging implementieren
- ✅ Google Analytics integrieren

## SEO Optimierung

Füge in `index.html` hinzu:
```html
<meta name="description" content="Unterstütze unsere Porsche Spendenaktion mit deiner Spende">
<meta name="keywords" content="Spende, Porsche, Schweiz, Fundraiser">
<meta property="og:title" content="Porsche Spendenaktion">
<meta property="og:description" content="Hilf uns einen Porsche zu sammeln">
```

## Performance Tipps

- Bilder komprimieren
- CSS/JS minifizieren
- CDN verwenden
- Caching aktivieren

---

**Website ist live! 🎉**