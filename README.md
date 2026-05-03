# Smash Padel Focșani – Site prezentare

Site de prezentare pentru clubul de padel **Smash Padel Focșani** (Bd. București nr. 16A, Focșani, Vrancea).

## Rulare locală

```bash
npm install
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000).

## Build producție

```bash
npm run build
```

Aplicatia este configurata cu `output: "export"`, deci build-ul genereaza un site static in directorul `out/`.
Pe hosting shared/cPanel nu trebuie pornit `next start`; trebuie publicat continutul din `out/` in `public_html`.

## Deploy pe cPanel

- `Node.js >= 18.18.0`
- `npm >= 9`
- repository-ul trebuie să ruleze `.cpanel.yml` după pull/deploy

Fisierul `.cpanel.yml` din proiect:

1. instaleaza dependentele,
2. rulează `npm run build`,
3. copiaza exportul static din `out/` in `/home/smashpad/public_html`.

Daca deployment-ul tot esueaza in cPanel, verifica in log prima eroare reala:

- `node -v` / `npm -v` prea vechi,
- `npm ci` blocat și fallback pe `npm install`,
- permisiuni de scriere in `public_html`.

