# Mechanical Design & CAE Engineering Portfolio

Professional engineering portfolio for **Zhengshuang Liu**, focused on mechanical design, finite element analysis, structural optimization and engineering judgment.

## Live site

- GitHub Pages: `https://zhengshuangliu.github.io/mechanical-engineering-portfolio/`

## Featured engineering projects

### 01 · Robot Joint Bracket Structural Optimization

A traceable SOLIDWORKS → ANSYS Mechanical → Python workflow covering design inputs, three CAD iterations, multi-load-case static analysis, mesh sensitivity and acceptance checks.

Verified headline results:

- Mass: **0.518 kg → 0.435 kg** (**16.0% reduction**)
- Governing fine-mesh stress: **32.919 MPa**
- Governing fine-mesh deformation: **0.006209 mm**
- Conservative safety factor: **7.59**

### 02 · DN600 Class 600 All-Welded Fixed Ball Valve

Structural-integrity study for large oil and gas pipeline pressure equipment. The project covers six-component CAD architecture, model reduction, tetrahedral meshing and four combined load cases.

Verified headline results:

- Base internal pressure: **10.2 MPa**
- Mesh: **1,066,690 nodes / 714,973 elements**
- Governing mechanical case: **LC3 pressure + 2.88 MN axial load**
- Governing stress: **133.04 MPa**
- Conservative safety factor against ASTM A350 LF2 yield: **1.88**

## Repository structure

```text
src/                    Next.js application, components and shared path helpers
public/                 Deployable images and project reports
public/assets/projects/ Project-specific engineering evidence images
assets/                 Asset inventory and provenance notes
projects/               Verified project narratives and data scope
.github/workflows/      GitHub Pages automatic deployment
```

ANSYS project databases, complete CAD models and other large editable engineering files are intentionally excluded.

## Local development

```bash
pnpm install
pnpm dev
```

## Validation and builds

```bash
pnpm lint
pnpm build          # Sites / Vinext build
pnpm build:pages    # Static GitHub Pages export
```

Every push to `main` triggers `.github/workflows/deploy.yml` and publishes the static `out/` directory to GitHub Pages.

## Data integrity

The website preserves the values in the underlying project reports. It does not claim additional projects, tests or simulation results. Global FEA results are presented with their modeling limits; detailed sealing, weld and contact conclusions require higher-fidelity local analysis or test evidence.
