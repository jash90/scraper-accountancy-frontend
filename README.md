# Polski Asystent Podatkowy

## Opis projektu

Polski Asystent Podatkowy to aplikacja internetowa, która umożliwia użytkownikom zadawanie pytań dotyczących polskich przepisów podatkowych i otrzymywanie natychmiastowych, dokładnych odpowiedzi opartych na aktualnych przepisach. Aplikacja wykorzystuje zaawansowane technologie do analizy pytań i dostarczania odpowiedzi pochodzących z oficjalnych źródeł.

## Funkcjonalności

- **Wyszukiwanie informacji podatkowych** - możliwość zadawania pytań w języku naturalnym
- **Aktualne informacje** - odpowiedzi oparte na najnowszych przepisach podatkowych
- **Błyskawiczne odpowiedzi** - natychmiastowe dostarczanie informacji
- **Wiarygodne źródła** - wszystkie informacje pochodzą z oficjalnych źródeł
- **Informacje o źródłach** - każda odpowiedź zawiera informacje o źródle i dacie aktualizacji

## Technologie

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (ikony)

## Uruchomienie projektu

### Wymagania wstępne

- Node.js (wersja 16 lub wyższa)
- npm lub yarn

### Instalacja

1. Sklonuj repozytorium:
   ```bash
   git clone [adres-repozytorium]
   cd scraper-accountancy-frontend
   ```

2. Zainstaluj zależności:
   ```bash
   npm install
   ```

3. Skonfiguruj zmienne środowiskowe:
   Stwórz plik `.env` w głównym katalogu projektu i dodaj następującą zmienną:
   ```
   VITE_API_BASE_URL=https://backend.podatki.raccoonsoftware.pl
   ```

### Uruchamianie aplikacji w trybie deweloperskim

```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem: http://localhost:5173

### Budowanie aplikacji na produkcję

```bash
npm run build
```

Skompilowane pliki zostaną umieszczone w katalogu `dist`.

### Podgląd wersji produkcyjnej

```bash
npm run preview
```

## Struktura projektu

- `src/` - katalog główny z kodem źródłowym
  - `App.tsx` - główny komponent aplikacji
  - `main.tsx` - punkt wejściowy aplikacji
  - `index.css` - globalne style CSS

## Połączenie z API

Aplikacja łączy się z backendem za pomocą API. Główny endpoint używany do zadawania pytań:

```
POST /api/ask
```

Przykład zapytania:
```json
{
  "question": "Jakie są rodzaje deklaracji PIT?"
}
```

## Licencja

© 2024 Polski Asystent Podatkowy. Wszystkie prawa zastrzeżone.

## Kontakt

[Informacje kontaktowe] 