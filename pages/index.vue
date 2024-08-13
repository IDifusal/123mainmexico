<template>
<main>
    <!-- Banner area start -->
<Slider1/>
    <!-- Banner area end -->

    <!-- about-our-company area start -->
    <section id="about-us" class="about-our-company section-space overflow-hidden">
        <div class="container">
            <div class="about-our-company_shape">
                <div class="about-our-company_shape-common about-our-company_shape-1 leftRight" v-background data-background="https://html.rrdevs.net/delish/assets/imgs/about-our-company/about-our-company__shap-1.png"></div>
                <div class="about-our-company_shape-common about-our-company_shape-2 rightLeft" v-background data-background="https://html.rrdevs.net/delish/assets/imgs/about-our-company/about-our-company__shap-2.png"></div>
            </div>
            <div class="row g-24 align-items-center">
                <div class="col-lg-6">
                    <div class="about-our-company__media wow clip-a-z">
                        <img class="img-fluid" src="http://123mainmexico.com/wp-content/uploads/2024/08/DSC01115.jpg" alt="About 123 Main Mexic">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="section__title-wrapper about-our-company__content">
                        <span class="section__subtitle justify-content-center mb-20 mb-xs-15 wow clip-a-z">About 123 Main Mexico</span>
                        <h2 class="section__title section__title-line-height-50 mb-35 mb-xs-30 title-animation">Welcome to the Best Mexican Restaurant</h2>
                        <p class="mb-40 mb-xs-30 section__p-18">Located in the heart of Panville, just 18 minutes from Charlotte, 123 offers a delicious variety of coastal Mexican dishes and chef specialties like ribs. Enjoy refreshing drinks and a cozy atmosphere, perfect for family, couples, or solo dining. The restaurant features indoor seating and charming terraces for a memorable dining experience.</p>

                        <div class="about-our-company__content-btn">
                            <div class="about-our-company__content-btn-icon">
                                <img class="img-fluid" src="https://html.rrdevs.net/delish/assets/imgs/icon/phone.svg" alt="not found">
                            </div>
                            <div class="about-our-company__content-btn-text">
                                <span>Call Us Now</span>
                                <h6><a href="tel: (704) 889-1236">(704) 889-1236</a></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- about-our-company area start -->

    <!-- our-service area start -->
<Services/>
    <!-- our-service area start -->

    <!-- food-menu area start -->
<FoodSection/>
    <!-- food-menu area start -->

    <!-- experience area start -->
 <Experience/>
    <!-- experience area start -->

    <!-- our-project area start -->
  <UiGallery/>
    <!-- our-project area start -->

    <!-- client-testimonial area start -->
<Testimonials/>
    <!-- client-testimonial area start -->

    <!-- book-a-table area start -->
    <section id="reservation" class="book-a-table section-space__top overflow-hidden">
        <div class="container">
            <div class="book-a-table__bg upDown" v-background data-background="https://html.rrdevs.net/delish/assets/imgs/book-a-table/bg.png"></div>
            <div class="row g-24">
                <div class="col-12">
                    <div class="book-a-table__content section-bg-2 d-flex flex-column flex-xl-row justify-content-between align-items-center" v-background data-background="https://html.rrdevs.net/delish/assets/imgs/book-a-table/book-a-table__bg.png">
                        <div class="book-a-table__content-left">
                            <div class="section__title-wrapper text-center">
                                <span class="section__subtitle justify-content-center mb-10 mb-xs-5 wow clip-a-z">Book A Table</span>
                                <h2 class="section__title mb-10 mb-xs-5 title-animation">Make Reservation</h2>
                                <div class="dot-shpae wow clip-a-z"><img class="img-fluid" src="https://html.rrdevs.net/delish/assets/imgs/section-title/dot-shape.svg" alt="not found"></div>

                                <form class="book-a-table__content-form mt-50 mt-sm-40 mt-xs-35">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="book-a-table__content-form__select">
                                                <select id="how-many-person" clas="nice-select">
                                                    <option>1 Person</option>
                                                    <option>2 Person</option>
                                                    <option>3 Person</option>
                                                    <option>4 Person</option>
                                                    <option>5 Person</option>
                                                    <option>6 Person</option>
                                                    <option>7 Person</option>
                                                    <option>8 Person</option>
                                                    <option>9 Person</option>
                                                    <option>10 Person</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-12 mt-5">
                                            <div class="book-a-table__content-form__input">
                                                <div class="input-wrapper">
                                                    <input id="datepicker" name="date" type="text" placeholder="YY-MM-DD">
                                                    <i class="fa-solid fa-calendar-days"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="book-a-table__content-form__input time">
                                                <div class="input-wrapper">
                                                    <input type="time" value="09:00:00">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button type="submit" class="rr-btn-solid w-100">
                                                <span class="btn-wrap">
                                                    <span class="text-one">Book Now</span>
                                                    <span class="text-two">Book Now</span>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="book-a-table__content-right">
                            <div class="book-a-table__content-media wow clip-a-z">
                                <img class="img-fluid" src="http://123mainmexico.com/wp-content/uploads/2024/08/DSC06657-1.jpg" alt="image not found">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- book-a-table area start -->

    <!-- team area start -->

    <!-- fast-food area start -->

    <!-- blog area start -->
<UiBlog/>
    <!-- blog area start -->
</main>
</template>

<style>

</style>