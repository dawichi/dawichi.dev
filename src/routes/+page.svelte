<script>
    import { About, Contact, Landing, Languages, Skills, Timeline, Travel } from '$lib/components'
</script>

<div class="animate__animated animate__fadeIn animate__faster">
    <Landing />

    <div class="skew-y-6 bg-teal-500 p-10 text-center text-2xl text-white shadow shadow-teal-300 dark:bg-teal-800 dark:shadow-teal-500">
        <h3>
            Web development <br /> <i class="bi bi-code-slash" />
        </h3>
    </div>

    <About />
    <Timeline />
    <Skills />
    <Languages />
    <Travel />
    <Contact />
</div>
