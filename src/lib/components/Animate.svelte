<script lang="ts">
    export let animation: number

    const animations: Record<number, string> = {
        0: 'animate__backInDown',
        1: 'animate__lightSpeedInRight',
        2: 'animate__lightSpeedInLeft',
        3: 'animate__jackInTheBox',
        4: 'animate__rollIn',
        5: 'animate__rotateInUpRight',
    }
</script>

<div class={`animate__animated ${animations[animation]}`}>
    <slot />
</div>
