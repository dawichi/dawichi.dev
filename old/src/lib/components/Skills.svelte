<script lang="ts">
    import SkillsCard from './SkillsCard.svelte'
</script>

<div class="container mx-auto mt-20 px-5">
    <h2 class="my-5 text-center text-2xl">
        <i class="bi bi-journal-text"></i> What I do
    </h2>
    <hr class="mx-auto h-1 w-3/4 rounded border-0 bg-zinc-700 dark:bg-zinc-200" />
    <br />

    <!-- FIRST ROW -->
    <div class="grid lg:grid-cols-3 gap-4 pb-4">
        <div class="grid w-auto h-full">
            <img src="/assets/svg/pair-programming.svg" alt="pair programming" class="opacity-90 m-auto py-2 w-3/5" />
        </div>

        <SkillsCard
            title="Basics"
            titleIcon="bi-bar-chart-fill"
            paragraphs={[
                'Software development of scalable systems from scratch to production.',
                'Experience with different languages, paradigms and methodologies.',
            ]}
            technologies={['javascript', 'typescript', 'python', 'go', 'php']}
        />

        <SkillsCard
            title="Backend"
            titleIcon="bi-hdd-rack-fill"
            paragraphs={['APIs with REST and GraphQL. Performant, secure and scalable.', 'Database design, with preference for Mongo, PostgreSQL and Redis.']}
            technologies={['nodejs', 'nestjs', 'docker', 'redis', 'mongodb']}
        />
    </div>

    <!-- SECOND ROW -->
    <div class="grid lg:grid-cols-3 gap-4 pb-4">
        <div class="grid w-auto h-full lg:order-3">
            <img src="/assets/svg/meeting.svg" alt="meeting" class="opacity-90 m-auto py-2 w-3/5" />
        </div>

        <SkillsCard
            title="Frontend"
            titleIcon="bi-easel2-fill"
            paragraphs={['Web applications, from SPAs with complex state management and dozens of screens, to mobile apps with React Native.']}
            technologies={['react', 'nextjs', 'vuejs', 'nuxtjs', 'svelte', 'flutter']}
        />

        <SkillsCard
            title="Styling"
            titleIcon="bi-brush-fill"
            paragraphs={['+10 custom UI component libraries, working close to the UI/UX designers, for different projects and companies.']}
            technologies={['css3', 'sass', 'tailwindcss']}
        />
    </div>

    <!-- THIRD ROW -->
    <div class="grid lg:grid-cols-3 gap-4 pb-4">
        <div class="grid w-auto h-full">
            <img src="/assets/svg/coffee.svg" alt="coffee" class="opacity-90 m-auto py-2 w-2/5" />
        </div>

        <SkillsCard
            title="Team player"
            titleIcon="bi-kanban-fill"
            paragraphs={[
                'Experience working asynchronously with international distributed teams of different sizes, from small startups to large companies.',
                'Solid communication skills from working directly with clients and providers.',
            ]}
        />

        <SkillsCard
            title="Blog"
            titleIcon="bi-pen-fill"
            paragraphs={[
                "From time to time, I'm bored enough to write some articles about my experiences, projects and personal development.",
                'Check them out! ;)',
            ]}
        />
    </div>
</div>
