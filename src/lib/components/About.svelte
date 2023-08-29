<script lang="ts">
    import { onMount } from "svelte"

    let scrolled = false
    const spanClass = 'skew-y-6 rounded bg-teal-500 p-1 text-white'

    onMount(() => {
        document.onscroll = () => {
            window.scrollY > 1300 && window.scrollY < 2500 ? (scrolled = true) : (scrolled = false)
        }
    })
</script>

<div class="container mx-auto mt-40 p-5">
    <h2 class="my-5 text-center text-2xl">
        <i class="bi bi-person-fill" /> About me
    </h2>
    <hr class="mx-auto h-1 w-3/4 rounded border-0 bg-zinc-700 dark:bg-zinc-200" />
    <div class="mt-5 grid lg:grid-cols-3">
        <div class={`lg:col-span-2 ${scrolled ? 'animate__animated animate__pulse' : ''}`}>
            <p>
                Hi! I&apos;m David, a <b>software engineer</b> based in Spain with +2 years of experience creating stuff.
            </p>
            <br />

            <p>
                I work mainly with <span class={spanClass}>JavaScript</span> (specially <span title="TypeScript"><span class={spanClass}>TS</span></span>
                ), but I love <span class={spanClass}>Python</span> for specific tasks.
            </p>
            <p>
                My favourite tools are <b>NestJS</b> for Backend and <b>React</b> (NextJS) based technologies for frontend.
            </p>
            <br />

            <p>Also, eventually I have done small projects with other tools such as Java, PHP and C#.</p>
            <br />

            <p>
                I invest my free time in improving myself as a developer and <b>never stop learning</b>.
            </p>
            <p>
                I&apos;m currently studying the engineering, but I really love <b>Freecodecamp</b> and{' '}
                <b>Platzi</b>.
            </p>
            <br />

            <p>
                I try to contribute and publish good <b>open source</b> code, always thinking on what could be useful or interesting for others. I have
                <b>colaborated with remote developers</b>
                on side projects for fun, and I believe that being surrounded by the correct people is the best asset to succeed. I&apos;m also fascinated by UI
                design, so I always try to make any project look it&apos;s best in terms of <b>aesthetics and usability</b>.
            </p>
        </div>
        <div>
            <img src="/assets/svg/github.svg" class="m-5 mx-auto w-3/4 opacity-90 md:w-full" alt="" />
        </div>
    </div>
</div>
