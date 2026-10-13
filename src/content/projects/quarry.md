---
title: Quarry
summary: A desktop database tool with a visual, composable query builder where every step shows its live result, like .filter().map() for SQL.
image: ../../assets/projects/quarry.png
imageAlt: Quarry desktop app browsing an orders table from a sample SQLite database, with the schema tree on the left
tags: [Tauri, Rust, Angular, SQLite]
period: 2026 – present
status: in-development
statusNote: Early development, not ready for everyday use yet
tier: side
order: 2
links:
    - { label: Repository, url: 'https://github.com/dawichi/quarrydb', kind: repo }
    - { label: Website, url: 'https://quarrydb.app', kind: site }
caseStudy: true
---

## The idea

Writing a query from scratch is slow, and most database GUIs hide what they
are doing. Quarry sits in between: you build a query as a pipeline of steps
(filter, join, group, sort), each step shows its intermediate result, and the
generated SQL is always visible and copyable. Like chaining
`.filter().map()` on an array, but for SQL.

## How it's built

- A **Tauri 2** desktop shell in **Rust** handles the native window, file
  dialogs, the OS keyring and the database connections.
- The UI is **Angular** with Signals for all state, styled with Tailwind CSS.
- The [landing site](https://quarrydb.app) is built with Astro and imports the
  app's pipeline types from a shared package, so its interactive demo stays in
  sync with the real app.

## Status

Quarry is in early development and not ready for everyday use. SQLite is the
first target. Support for more databases is in progress.
