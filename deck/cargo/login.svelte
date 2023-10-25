<script>
  let mail = ''
  let pass = ''
  let maro = null
  let paro = null
  const postit = async (e) => {
    e.preventDefault()

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    // headers.append('Origin','http://localhost:3090');
    // headers.append('withCredentials',true);
    // headers.append('Credentials','include');

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        // mode: 'cors',
        // credentials: 'include',
        body: JSON.stringify({ mail, pass }),
        headers
      })
      const data = await res.json()
      if(data.errors) {
        console.log(data.errors)
        maro = data.errors.mail
        paro = data.errors.pass
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

<form action="api/login" on:submit={postit}>
  <h2>Login ke Bocafet!</h2>

  <label for="mail">Email</label>
  <input type="email" name="mail" bind:value={mail} required>
  {#if maro}<div class="error">{maro}</div>{/if}

  <label for="pass">Password</label>
  <input type="password" name="pass" bind:value={pass} required>
  {#if paro}<div class="error">{paro}</div>{/if}

  <p>Lupa kata sandi?</p>

  <button>Log In</button>
</form>