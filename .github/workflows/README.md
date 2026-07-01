<!-- @license CC0-1.0 -->

# Workflows

This project uses GitHub Actions to build and deploy the prototypes to GitHub Pages.

## Overview

| Workflow                       | Trigger                                       | Description                                                                                                                        |
| ------------------------------ | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Deploy production site**     | Push to `main`, or manually                   | Builds the Next.js site and deploys it to the root of GitHub Pages, leaving the `demo-*` directories of feature branches in place. |
| **Deploy feature branch demo** | Push to any other branch, or reopening its PR | Builds the site with a `/demo-<branch>` base path and deploys it to a `demo-<branch>` directory on GitHub Pages.                   |
| **Remove feature branch demo** | Closing a PR                                  | Removes the `demo-<branch>` directory from GitHub Pages and deactivates its deployment.                                            |

## Naming convention

The name of a workflow starts with a verb and matches its file name, casing aside.
Job ids and step names start with a verb as well.
This keeps the file tree, the Actions tab, and the run logs consistent and easy to scan.
