---
title: Hexastats
summary: League of Legends stats platform for comparing players, built on the Riot Games API.
image: ../../assets/projects/hexastats.png
imageAlt: Hexastats player page showing champion win rates, KDA bars and a list of recent matches
tags: [NestJS, SvelteKit, TypeScript, Redis]
period: 2021 – 2024
status: archived
statusNote: Retired after Riot API changes
tier: flagship
order: 2
links:
    - { label: Repository, url: 'https://github.com/dawichi/hexastats', kind: repo }
caseStudy: true
---

## What it was

Hexastats started as a small script to compare League of Legends stats between
friends. More people wanted to be added, so it grew into a web app: search any
player, load their recent matches, and compare several players side by side
with win rates, KDA, champion stats and records.

It became my most-starred repository and my longest-running side project, with
more than a thousand commits over three years.

## How it worked

- A **NestJS** API called the Riot Games API, shaped the raw match data into
  the stats the frontend needed, and cached results in **Redis**.
- A **SvelteKit** frontend loaded each player's data into a store and rendered
  the different views (games list, champion stats, records) from it.

## Why it was archived

Hexastats depended on the Riot API at runtime for everything. When Riot changed
its API schemas, the app stopped working. We never rewrote it for the new
schemas, so I took the live site down and archived the repository. The screenshot above shows the app when it was working.

## What I took from it

If a product's core data comes from someone else's API at request time, that
API's roadmap is part of your roadmap. In [Board Vault](/projects/board-vault)
I made the opposite choice: the game catalogue lives in our own tables, and an
external source could only ever be imported on the admin side, never called at
runtime.
