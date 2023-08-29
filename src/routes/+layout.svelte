<script lang="ts">
    import Navbar from '$lib/components/layout/Navbar.svelte'
    import '../app.scss'
</script>

<div class="bg-amber-50 text-zinc-900 dark:bg-zinc-900 dark:text-white">
    <Navbar />
    <main>
        <slot />
    </main>

    <footer class="bg-white/50 dark:bg-zinc-800">
        <div class="container mx-auto grid p-3 text-center dark:bg-zinc-800 lg:grid-cols-2">
            <div>dawichi.dev &copy; {new Date().getFullYear().toString()}</div>
            <div>
                Made with <span class="rounded bg-yellow-300 p-1 dark:bg-yellow-500">JS</span> and <i class="bi bi-cup-hot-fill" />
            </div>
        </div>
    </footer>
</div>
