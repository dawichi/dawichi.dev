---
title: How to build a RPG game with JavaScript
description: The process to plan, develop and deploy a basic RPG game made with JavaScript
date: 2022-02-07
image: "https://raw.githubusercontent.com/Dawichi/hexakill/main/showcase.png"
---



A few months ago came to me the idea of creating my first game in JavaScript.



I had 0 gaming knowledge until that moment and I was afraid of how a system with so much variables and interactions could being made from 0. 

Here I'm going to walk you through the process I went to create this project, which problems I found and how to bypass them.



* Check the result here: [hexaskill.vercel.app](https://hexakill.vercel.app) 🎉🎉🎉





## 1. Planing

My first impresion when trying to build it from 0, was that going directly to web development could be too intimidating, so I spent a few days testing stuff in a basic terminal version which you can find [here](https://github.com/dawichi/hexakill-cli).

The intention was to develop a basic system where:

1. A random enemy appears
2. The player picks an action to do
3. The enemy selects a random action to do
4. The actions are applied based on entity speed


So, the first goal was set, and I started coding it!



## 2. Entities

The intention was to use OOP for the generation of entities. I defined a basic entitiy with the common stats and actions for both enemies and player



#### BaseEntity

Because the game was intended to have 2 types of damage (physical and magic) I needed also 2 different methods to recieve damage (recieveAttack and recieveMagic)  so each one applies the armor or MagicResist reduction to the damage before pass the value to the #getDamage function

![BaseEntity](/assets/img/blog/00-BaseEntity.png)



#### Character

Now comes the base for all the playable characters. Unlike the enemies, the player characters have the capacity to 

* Gain experience
* Level up once the experience reach the limit

So we extend the base and add that logic.

![Character](/assets/img/blog/00-Character.png)



#### Enemies

To create the enemies, we can use directly the BaseEntity, modifying some options to change a little each enemy. Example:


![Slime](/assets/img/blog/00-Slime.png)



