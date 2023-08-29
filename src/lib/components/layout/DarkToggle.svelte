<!--
  @component
  ## DarkToggle component
  A toggle to control the dark mode of the app.
-->
<script lang="ts">
    import { onMount } from 'svelte'
    import { classNames } from '$lib/utils/classNames'

    let darkMode = false

    // Load preferred color scheme
    onMount(() => {
        // 1. Check if the user has a preference for this website (localStorage)
        if (localStorage.getItem('theme')) {
            console.log(`${localStorage.getItem('theme')} mode selected on localStorage`)
            return localStorage.getItem('theme') === 'dark' ? toggleDarkMode() : null
        }

        // 2. Check if the user has a preference for the system (OS)
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            console.log('dark mode selected on OS')
            toggleDarkMode()
        }
    })

    function toggleDarkMode(): void {
        darkMode = !darkMode
        const newMode = darkMode ? 'dark' : 'light'
        document.body.dataset.theme = newMode
        localStorage.setItem('theme', newMode)
        document.documentElement.classList.toggle('dark')
    }
</script>

<button
    class="h-[34px] w-[58px] cursor-pointer rounded-full border-2 border-orange-100 bg-orange-50 focus:outline-none dark:border-transparent dark:bg-zinc-900"
    on:click={toggleDarkMode}
>
    <span
        class={classNames(
            `${darkMode ? 'translate-x-[24px] bg-zinc-700' : 'translate-x-[0px] bg-orange-200'} pointer-events-none inline-block`,
            ' flex h-[30px] w-[30px] transform items-center justify-center rounded-full ring-0 transition duration-700 ease-in-out',
        )}
    >
        {#if darkMode}
            <i class="bi bi-moon-fill animate__animated animate__rotateIn text-white" />
        {:else}
            <i class="bi bi-sun-fill animate__animated animate__rotateInUpRight text-black" />
        {/if}
    </span>
</button>
