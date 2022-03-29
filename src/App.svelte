<script>
  import {db, user, username, signin} from './user'
  signin('alice', 'password', true)
</script>

<main>
  <h1>{JSON.stringify(username, undefined, 4)}</h1>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>


// TODO: create a simple gun server to run at npm run dev