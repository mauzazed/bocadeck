<script>
  let fame = ''
  let lame = null
  let mail = ''
  let pass = ''
  let usen = ''
  let faro = null
  let maro = null
  let paro = null
  let usro = null
  const postit = async (e) => {
    e.preventDefault()
    console.log(mail, fame, usen)

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ fame, lame, mail, pass, usen }),
        headers
      })
      const data = await res.json()
      if(data.errors) {
        faro = data.errors.fame
        maro = data.errors.mail
        paro = data.errors.pass
        usro = data.errors.usen
      }
      if(data.mail) {
        location.assign('/')
      }
    }
    catch(err) {
      console.log(err)
    }
  }
</script>

<form action="api/signup" on:submit={postit}>
  <h2>Gabung Bocafet!</h2>

  <label for="fame">Nama Legkap</label>
  <div class="chn">
    <input
      type="text"
      name="fame"
      bind:value={fame}
      placeholder="Nama Depan"
      required
    />
    <input
      type="text"
      name="mail"
      bind:value={lame}
      placeholder="Nama Belakang"
    />
  </div>
  {#if faro}<div class="error">{faro}</div>{/if}

  <label for="mail">Email</label>
  <input type="email" name="mail" bind:value={mail} required />
  {#if maro}<div class="error">{maro}</div>{/if}

  <label for="pass">Password</label>
  <input type="password" name="pass" bind:value={pass} required />
  {#if paro}<div class="error">{paro}</div>{/if}

  <label for="usen">Username</label>
  <input type="text" name="usen" bind:value={usen} required />
  {#if usro}<div class="error">{usro}</div>{/if}

  <p>
    <input type="checkbox" name="term" id="term" /> Saya menyetujui persyaratan dan
    kebijakan yang berlaku
  </p>

  <button>Sign Up</button>
</form>
