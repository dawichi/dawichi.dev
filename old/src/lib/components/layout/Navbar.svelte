<!--
  @component
  ## Navbar component
  Display the menu, the dark-mode toggle and the logo
-->
<script lang="ts">
    import { page } from '$app/stores'
    import DarkToggle from './DarkToggle.svelte'

    let menuOpen: boolean = false

    // Navigation menu
    export const navigation: Array<{
        name: string
        path: string
    }> = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Projects',
            path: '/projects',
        },
    ]
</script>

<nav class="sticky top-0 z-10 bg-white/50 opacity-90 backdrop-blur-xl transition-shadow ease-in-out dark:bg-zinc-800">
    <div class="container mx-auto flex h-16 items-center justify-between px-4 lg:container">
        <!-- MOBILE ONLY: Navbar menu toggle -->
        <button class="block text-4xl lg:hidden" on:click={() => (menuOpen = !menuOpen)}>
            <i class="bi bi-list" />
        </button>

        <a href="/" class="flex items-center">
            <h1 class="ml-2 justify-between text-2xl tracking-wider">다 위 치</h1>
        </a>

        <!-- DESKTOP MENU -->
        <ul class="hidden flex-row justify-between space-x-4 px-4 lg:flex xl:space-x-8 font-bold tracking-widest">
            {#each navigation as item}
                <a
                    href={item.path}
                    class="block rounded-md px-3 py-2 {$page.url.pathname === item.path
                        ? 'bg-teal-500 text-white'
                        : 'hover:text-teal-400'}"
                >
                    {item.name}
                </a>
            {/each}
            <a
                href="https://blog.dawichi.dev"
                target="_blank" rel="noreferrer"
                class="flex items-center justify-center gap-2 font-bold rounded-md px-3 py-2"
            >
                Blog <i class="bi bi-arrow-up-right" />
            </a>
        </ul>

        <DarkToggle />
    </div>

    <!-- MOBILE ONLY: Navbar menu -->
    <div class="block transition lg:hidden {menuOpen ? 'h-36 border-t' : 'h-0'} overflow-hidden">
        <ul class="flex flex-col items-start p-4 font-bold tracking-widest">
            {#each navigation as item}
                <a
                    href={item.path}
                    on:click={() => (menuOpen = false)}
                    class="block rounded-md px-3 py-2 {$page.url.pathname === item.path
                        ? 'bg-teal-500 text-white'
                        : 'hover:text-teal-400'}"
                >
                    {item.name}
                </a>
            {/each}
            <a
                href="https://blog.dawichi.dev"
                target="_blank" rel="noreferrer"
                class="flex items-center justify-center gap-2 font-bold rounded-md px-3 py-2"
            >
                Blog <i class="bi bi-arrow-up-right" />
            </a>
        </ul>
    </div>
</nav>

<style>
    .transition,
    ul,
    a {
        transition: height 0.3s ease-in-out;
    }
</style>
