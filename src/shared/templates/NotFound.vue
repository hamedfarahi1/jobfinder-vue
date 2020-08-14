<template>
      <div class="mainbox">
    <div class="err">4</div>
    <div class="err1">0</div>
    <div class="err2">4</div>
    <div class="msg"><p>
      صفحه مورد نظر شما پیدا نشد. 
      ممکن است این صفحه جا به جا شده باشد.
       <p>لطفا برگردید به <a href="/">صفحه اصلی</a> و مجددا تلاش کنید.</p></div>
      </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

.mainbox {
  margin: auto;
  height: 600px;
  width: 600px;
  position: relative;
}

  .err {
    color: #FF416C;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 11rem;
    position:absolute;
    left: 20%;
    top: 8%;
  }

  .err1 {
    color: #FF416C;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 11rem;
    position:absolute;
    left: 44%;
    top: 8%;
  }

.far {
  position: absolute;
  font-size: 8.5rem;
  left: 42%;
  top: 15%;
  color: #FF416C;
}

 .err2 {
    color: #FF416C;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 11rem;
    position:absolute;
    left: 68%;
    top: 8%;
  }

.msg {
    text-align: center;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.6rem;
    position:absolute;
    left: 16%;
    top: 45%;
    width: 75%;
  }

a {
  text-decoration: none;
  color: #FF416C;
}

a:hover {
  text-decoration: underline;
}
</style>