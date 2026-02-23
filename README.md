# Certificate Studio

Certificate Studio is a React-based design/export tool for generating print-ready certificates in multiple templates and paper sizes.

## Recent BA/DS Updates

- BA/DS templates now use a title-only signatory block (`Chief Executive Officer`) without signature line/name.
- Added BA/DS Cohort 1 quick preview + batch PNG export inside the app.
- Added cohort issuance folders and recipient/link tracking files under `issuance/`.
- Cohort 1 certificate IDs now use the correct DSBA prefix (for example `DSBA-C1-001`).
- Added Stackron signature image support for BA/DS templates (`public/signature_stackron.png`).

## Current Templates

- Mentor and Judge Appreciation
- BA/DS Stackron Academy Certificate
- BA/DS Stackron Academy Certificate (Angled)
- Participation Certificate

## Export and Size Support

- Export formats: PNG, SVG, HTML
- BA/DS Cohort 1 batch export: PNG (in-app quick download for registered Cohort 1 recipients)
- Supported sizes:
  - A4 Landscape (`3508 x 2480`)
  - US Letter Landscape (`3300 x 2550`)
  - A4 Portrait (`2480 x 3508`)
  - US Letter Portrait (`2550 x 3300`)

## Stackron Notes

- Stackron templates use `public/stackron-logo.png`.
- BA/DS Stackron templates now also use `public/signature_stackron.png` for the signatory signature image.
- Dynamic fields used in Stackron templates:
  - `fullName`
  - `certId`
  - `verifyUrl`
  - `issueDate`
  - `duration`
  - `programName`
  - `signatureName`
  - `signatureTitle`

## BA/DS Cohort 1 Quick Download (Current Setup)

When you select either BA/DS template:

- `BA/DS Stackron Academy Certificate`
- `BA/DS Stackron Academy Certificate (Angled)`

the left panel shows a `BA/DS Cohort 1 Quick Download` section that lets you:

- Preview a specific Cohort 1 recipient
- See assigned certificate ID and Bitly placeholder link
- Export both Cohort 1 certificates as PNG in one click (`Export Cohort 1 PNGs`)

Current Cohort 1 defaults:

- Certificate ID prefix: `DSBA`
- Programme duration: `August 2025 - Jan, 2026`

Note:

- Browser downloads will typically save to your default `Downloads` folder.
- Move the downloaded files into `issuance/ba-ds/cohort-1/exports/png` after export.

## Cohort Issuance Files

- `src/data/baDsCohort1Recipients.js`: in-app recipient data used for BA/DS Cohort 1 preview/export
- `issuance/ba-ds/cohort-1/recipients.csv`: cohort roster, cert IDs, verify URLs
- `issuance/ba-ds/cohort-1/links/bitly-placeholders.csv`: Bitly placeholders to create manually
- `issuance/ba-ds/cohort-1/exports/png`: target folder for exported PNG files
- `issuance/ba-ds/cohort-1/exports/svg`: target folder for exported SVG files
- `issuance/ba-ds/cohort-1/exports/html`: target folder for exported HTML files

## Project Structure

- `src/App.js`: template selection, size selection, export controls
- `src/data/baDsCohort1Recipients.js`: BA/DS Cohort 1 quick-download recipient config
- `src/StackronAcademyCertBADS.js`: existing Stackron certificate template
- `src/StackronAcademyCertAlt.js`: new angled Stackron certificate template
- `src/SaParticipationCert.js`: participation template
- `src/MentJudgeCert.js`: mentor/judge template

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm start
   ```
3. Open `http://localhost:3000`.
4. Choose template and size, then export as needed.
5. For BA/DS Cohort 1 batch export, select a BA/DS template and click `Export Cohort 1 PNGs`.

## Production Build

```bash
npm run build
```
