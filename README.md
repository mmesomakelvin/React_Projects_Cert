# Certificate Studio

Certificate Studio is a React-based design/export tool for generating print-ready certificates in multiple templates and paper sizes.

## Current Templates

- Mentor and Judge Appreciation
- BA/DS Stackron Academy Certificate
- BA/DS Stackron Academy Certificate (Angled)
- Participation Certificate

## Export and Size Support

- Export formats: PNG, SVG, HTML
- Supported sizes:
  - A4 Landscape (`3508 x 2480`)
  - US Letter Landscape (`3300 x 2550`)
  - A4 Portrait (`2480 x 3508`)
  - US Letter Portrait (`2550 x 3300`)

## Stackron Notes

- Stackron templates use `public/stackron-logo.png`.
- Dynamic fields used in Stackron templates:
  - `fullName`
  - `certId`
  - `verifyUrl`
  - `issueDate`
  - `duration`
  - `programName`
  - `signatureName`
  - `signatureTitle`

## Project Structure

- `src/App.js`: template selection, size selection, export controls
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

## Production Build

```bash
npm run build
```
