import React from 'react'

function HomeMiddle() {
  return (
    <div class=" container d-flex p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
    <div class="col-lg-6 px-0">
      <h1 class="display-4 fst-italic fw-bold">Let's Connect with Your Customer in Real Time</h1>
      <p class="my-3">Welcome to Zidio ChatConnect, where every conversation is a gateway to new friendships and meaningful connections. Our platform is designed to bring people closer, no matter where they are in the world. Dive into our vibrant community and start connecting with real people in real time. Your words have power here – let's make every message count and turn conversations into cherished memories.</p>
      {/* <p class="lead mb-0"><a href="#" class="text-body-emphasis fw-bold">Continue reading...</a></p> */}
    </div>
    <div class="col-lg-5  offset-lg-1 p-0 ">
           {/* <img class="rounded-lg-3" src="../public/images/Chat.jpg" alt="" width="500"/>  */}
           <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../public/images/homeChat2.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="../public/images/Chat2.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="../public/images/Chat3.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
       </div>
  </div>
  )
}

export default HomeMiddle