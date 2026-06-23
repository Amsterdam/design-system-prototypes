<!-- @license CC0-1.0 -->

# AGENTS.md

Instructions for AI coding agents working in this repository.
This repository is a Next.js prototype environment that consumes the Amsterdam Design System packages.
Keep changes small, practical, and scoped to the requested prototype behavior.

## Core Rules

- Use pnpm only.
- Keep `.nvmrc` as the source of truth for Node version.
- Do not introduce npm or yarn commands in scripts, docs, or workflows.
- Prefer targeted edits over broad refactors.
- Do not add test frameworks or test setup unless explicitly requested.

## Tooling Expectations

- Package manager: pnpm.
- Linting: ESLint flat config in `eslint.config.mjs`.
- Formatting: Prettier (`.prettierrc.json`).
- Pre-commit checks: Husky + lint-staged.

## Project Guidance

- Preserve existing route structure and naming in `src/app`.
- Keep prototype code understandable and easy to iterate on.
- Avoid introducing app-specific infrastructure unrelated to prototyping.
- Update README and visible quickstart instructions when developer workflows change.

## Amsterdam Agent Skills

For reusable skill modules and agent best practices, consult [Amsterdam Agent Skills](https://github.com/Amsterdam/amsterdam-agent-skills).

Use relevant skills when they help with architecture, writing style, or design-system integration choices.
