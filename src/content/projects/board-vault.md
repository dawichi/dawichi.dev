---
title: Board Vault
summary: A board game companion for groups that meet regularly. Shared shelves, explainable game recommendations, game nights with RSVPs, and a history of what the group played.
image: ../../assets/projects/board-vault.png
imageAlt: Board Vault landing page, headed "Every game you own, on one tidy shelf", above a row of board game box covers
tags: [Angular, NestJS, TypeScript, Turso, Clerk]
period: 2024 – present
status: beta
statusNote: Invite-only beta, opening registration soon
tier: flagship
order: 1
links:
    - { label: Repository, url: 'https://github.com/kois-studio/board-vault', kind: repo }
    - { label: Website, url: 'https://board-vault.com', kind: site }
caseStudy: true
---

## The problem

A group that plays board games every week owns dozens of games between them,
spread across everyone's shelves. Every game night starts with the same
questions: who is coming, what can we play with that many people, who has to
bring it, and didn't we play that one last time?

Board Vault answers those questions for the group, not for one person. Each
person keeps a private shelf, and the group sees the shared picture: who owns
what, how people rated it, and what was played.

## What it does

- **Personal shelves.** Add a game from the catalogue, filter by player count,
  rate what you played, and keep a wishlist.
- **Groups.** Members see the group's combined collection and who owns each
  game.
- **Recommendations.** For the people actually coming, suggest games that fit
  the player count and the time available, and say why each one was picked.
- **Game nights.** Plan a date, collect RSVPs, build a shortlist, vote, then
  record what was played and who won.

## Key decisions

Every durable choice is written down as an
[architecture decision record](https://github.com/kois-studio/board-vault/tree/main/docs/adr)
in the repository. A few that shaped the product:

**The group is the product, not the shelf.** Collection tracking is a solved
problem. The interesting part is the group decision: what can *these* people
play *tonight*. Recommendation and session features are designed around the
group and the selected attendees, and personal collections are inputs to that.

**Recommendations are deterministic and explainable.** No machine learning for
the first release. Hard filters (player count, whether someone attending owns
the game) followed by a transparent score built from ratings, duration fit and
play history. Every suggestion carries the reasons it was chosen, the results
are reproducible in unit tests, and there was no need for training data the
product doesn't have yet.

**Own the game catalogue.** Game data lives in Board Vault's own tables. Games
arrive through user proposals and admin approval. An external catalogue such as
BoardGameGeek could only ever be an admin-side import, never something the app
calls at request time. Game artwork follows the same rule: Board Vault stores
its own copy and never hotlinks images from other sites. The app keeps working
if an outside service changes or disappears, which is exactly what ended
[Hexastats](/projects/hexastats).

**One way to sign in.** Authentication moved to Clerk with a migration window
for the old password accounts. Once every active account was linked, the
legacy path was removed entirely, with its password storage, reset tokens and
email dependency. One session model to secure and test instead of two.

**The night belongs to the people at the table.** Only the organizer could
change a game night, so if they were late, nobody could record what was
played. Now anyone invited who hasn't declined can start and finish the night
and record plays, while invitations and cancelling stay with the organizer.

## Engineering

- Angular frontend, NestJS API, libSQL (SQLite locally, Turso in production),
  optional Upstash Redis for caching and rate limits, Clerk for identity,
  deployed on Vercel.
- The API is the security boundary: it authenticates, authorizes and validates
  every request. The frontend validates every API response against a schema.
- CI runs tests and Playwright visual-regression checks against committed
  baselines. A scheduled workflow monitors uptime.
- Local development runs against a SQLite database with synthetic data, so
  working on the app never needs production access.

## Status

Board Vault is in an invite-only beta. The core loop works end to end, and the
next step is opening registration to everyone.
