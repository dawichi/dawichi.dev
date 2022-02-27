---
title: An introduction to recursive programming (on progress)
description: The process to plan, develop and deploy a basic RPG game made with JavaScript
date: 2022-27-07
image: '/assets/img/blog/recursion.jpeg'
---



Recursive programming consists in a problem with a solution that 

## Ej. Factorial

```
5! = 5 * 4 * 3 * 2 * 1
4! =     4 * 3 * 2 * 1
```

5! engloba 4!

```
5! = 5 * 4!
n! = n * n-1!

f(n): factorial de n
f(n) = n * f(n-1)
```

El problema es que esto sería infinito

```
f(2) = 2 * f(1)
f(1) = 1 * f(0)
f(0) = 0 * f(-1)
f(-1) = -1 * f(-2)
... al infinito
```

Porque falta el caso base (el punto de parada del bucle)

Un algoritmo recursivo necesita

-   Caso base
-   Caso recursivo

En este caso:

-   Caso base: n = 0
-   Caso recursivo: n > 0

```python
# param n > 0
def f(n):
    if n == 0:
        return 1
    else:
        return n * f(n-1)
```

## Ej2: fibonacci

```
f(n): fibonacci de n

f(n) = f(n-1) + f(n-2)
0 1 1 2 3 5 8
```

-   Casos base:

```
f(n) / n <= 1
```

-   Caso recursivo

```
f(n) / n > 1
```

```python
# Recursive
def f(n):
    if n <= 1:
        return n:
    else:
        return f(n-1) + f(n-2)

# Interative
def f(n):
    a, b = 0, 1
    for i in range(n):
        a, b = b, a+b
    return a
```
