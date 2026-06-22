# Stijn OS — SMP-editie

Interactief portfolio voor het **Criteriumgericht Interview (CGI)** van de **Ad Smart Media Production**
(HvA). Een zelfgebouwd, retro besturingssysteem als bewijs én vorm van mijn **lerend vermogen**: elk
programma op het bureaublad opent een onderdeel van mijn leerproces, reflectie en ethisch handelen als
mediaprofessional.

Het CGI beoordeelt **Lerend Vermogen**:

- **LV 1.3** — kritisch reflecteren op mijn persoonlijke/professionele ontwikkeling + inzicht in mijn
  eigen leerproces.
- **LV 4.3** — kritisch reflecteren op de ethische impact van slimme technologieën op de maatschappij +
  ethisch handelen in mijn rol als mediaprofessional.

## Lokaal draaien

```bash
npm install
npm run dev      # http://localhost:5173/stijn-os-smp/
```

```bash
npm run build    # productiebuild in /dist
npm run preview  # bekijk de build lokaal
```

## Waar pas ik dingen aan?

| Wat | Bestand |
| --- | --- |
| **Alle teksten** (titels, reflecties, quotes, leerdoelen) | `src/data/apps.ts` |
| Kernzin & kernontwikkeling | bovenin `src/data/apps.ts` |
| Beoordelingscriteria (LV-deelaspecten) | `src/data/criteria.ts` |
| **Bewijs / screenshots** | zet bestanden in `public/bewijs/` en koppel ze in `src/data/apps.ts` |
| Kleuren / fonts | `tailwind.config.ts` |
| Pixel-iconen | `src/components/PixelIcon.tsx` |

## De vensters (programma's)

`LEESMIJ.txt` · `Gesprek.mov` · `Bouwlog.exe` · `BackToBeing.app` · `Ethiek.exe` · `Update v2.0`

Plus een retro-extraatje: `Snake.exe` — een zelfgebouwde mini-game (pijltjes/WASD/D-pad). Het
telt niet mee als CGI-onderdeel en zit niet in de rondleiding.

De meter rechtsboven vinkt de vier LV-deelaspecten af naarmate je vensters opent. Geopende
iconen krijgen een groene ✓ en de statusbalk toont hoeveel onderdelen je al bekeken hebt.

Met de knop **▶ Rondleiding** (menubalk) loop je stap voor stap door alle vensters — handig om
je verhaal tijdens het CGI te presenteren.

## Online zetten (GitHub Pages)

1. Push deze map naar een GitHub-repo met de naam **`stijn-os-smp`**.
2. Repo → Settings → Pages → *Build and deployment* → Source: **GitHub Actions**.
3. De workflow in `.github/workflows/deploy.yml` bouwt en publiceert automatisch bij elke push naar
   `main`. URL: `https://<jouw-username>.github.io/stijn-os-smp/`.

> Andere repo-naam of een eigen domein/Vercel? Pas `base` aan in `vite.config.ts`.
