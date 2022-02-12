---
title: How to build a RPG game with JavaScript
description: The process to plan, develop and deploy a basic RPG game made with JavaScript
date: 2022-02-07
image: 'https://raw.githubusercontent.com/Dawichi/hexakill/main/showcase.png'
---

A few months ago I came up with the idea of creating a game in JavaScript.

I had 0 knowledge of the game up to that point and was afraid of how a system with so many variables and interactions could be made from 0. Here I'll walk you through the process I went through to create this project, what problems I ran into, and how to avoid them.

Check the result here: [hexaskill.vercel.app](https://hexakill.vercel.app) 🎉🎉🎉

## 1. Planing

My first impresion when trying to build it, was that going straight into web development might be too intimidating, so I spent a few days testing things out in a basic terminal version which you can find [here](https://github.com/dawichi/hexakill-cli).

![hexakill-cli](https://raw.githubusercontent.com/dawichi/hexakill-cli/main/showcase3.png)

The intention was to develop a basic system where:

1. A random enemy appears.
2. The player chooses an action to do.
3. The enemy selects a random action to do.
4. The actions are applied based on the speed of each entity.

So, the first goal was set, and I started coding it!

## 2. Entities

The intention was to use OOP for entity generation. I defined a basic entity with the common stats and actions for both the enemies and the player.

#### 2.1 - BaseEntity

Because the game was meant to have 2 types of damage (physical and magic) it also needed 2 different methods of taking damage (`recieveAttack` and `recieveMagic`), so each applies armor reduction or MagicResist to the damage before passing the value to `#getDamage` function.

```ts
export class BaseEntity {
    constructor(level: number, name: string) {
        this.level = level
        this.name = name
        this.dmgRecieved = 0
    }
}
```

![BaseEntity](/assets/img/blog/00-BaseEntity.png)

#### 2.2 - Character

Now comes the base for all playable characters. Unlike enemies, player characters have the ability to:

-   Gain experience.
-   Level up once the experience reaches the limit expected.

So we extend the base and add that logic.

![Character](/assets/img/blog/00-Character.png)

#### 2.3 - Enemies

To create the enemies, we can directly use the BaseEntity, modifying some options to change each enemy a bit. Example:

![Slime](/assets/img/blog/00-Slime.png)
