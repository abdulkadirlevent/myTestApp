<template>
  <div class="">
    <main role="main" class="container">

      <div class="jumbotron pt-5 mt-5">
        <h1  class="display-4">Page1 </h1>
        <h1  id="baslik1" class="display-4">Test sayfası!</h1>
        <p class="lead">Modal button denemesi.</p>
        <hr class="my-4">
        <p>Tıkla ve çalışıp çalışmadığını test et...</p>

        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Modal Aç
        </button>

        <button type="button" class="btn btn-success modalClick1">
          Alert
        </button>

        <button type="button" class="btn btn-success setTitle">
          set Title
        </button>

        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" >
          Set modal value
        </button>

      </div>
    </main>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Merhaba hareket başlasın...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>

</style>
