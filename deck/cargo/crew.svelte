<script>
  import { onMount } from 'svelte';

  let load = true;
  let crews;
  console.log(crews)
  onMount(async () => {
    const res = await fetch('/api/crew');
    const data = await res.json();
    crews = data;
    load = false;
  });
</script>

<h2>All Crew Member</h2>


{#if load}
<div class="loading">Memuat data ...</div>
{:else if crews.length > 0}
<div class="cnt">
  {#each crews as crew}
    <div class="chs">
      <h3>{crew.fame}</h3>
      <span>@{crew.usen}</span>
      <p>{crew.mail}</p>
    </div>
  {/each}
</div>
{/if}