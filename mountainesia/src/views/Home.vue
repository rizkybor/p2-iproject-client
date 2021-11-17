<template>
  <div>
    <div class="container">
        <Navbar />
      <div id="Title">
                    <h1 style="font-weight: 800; color:#D4AC2B">MOUNTAINESIA</h1>
                <p>Kami menyediakan informasi mengenai gunung - gunung yang berada di Indonesia</p>
            </div>
            <div class="row" style="padding: 5%; margin-bottom: 2%;">
              <div class="col-10">
        <!--Component Main Maps-->
                <MapsMain />
        <!--Component Main Maps-->
              </div>
                <div class="col-2">
        <!--Component Image Details-->
                <ImageById />
                <ImageById />
                <ImageById />
                <ImageById />
                </div>
            </div>
        <!--End Component Image Details-->
        <!--Component Search-->
            <div id="section4">
                <div class="d-grid gap-2 col-6 mx-auto" style="margin-bottom: 10%;">
                    <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">Search</span>
                        <input type="text" class="form-control" placeholder="Search by Mountain Name" aria-label="Search by Name" aria-describedby="addon-wrapping">
                    </div>
                  </div>
            </div>
        </div>
    <!--End Component Search-->
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import MapsMain from '../components/MapsMain.vue'
import ImageById from '../components/ImageById.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    MapsMain,
    ImageById,
    Footer
  }
}
</script>
