<script lang="ts">
    export let icon: string
    export let url: string
</script>

<a class='hover:text-teal-500' target="_blank" rel="noreferrer" href={url}>
    <div class="animate__animated animate__rollIn animate__delay-1s m-3">
        <i class={'bi bi-' + icon} />
    </div>
</a>
