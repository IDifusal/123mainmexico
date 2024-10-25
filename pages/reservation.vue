<template>
<!-- Body main wrapper start -->
<main>
    <!-- Breadcrumb area start  -->
    <div class="breadcrumb__area breadcrumb-space overly theme-bg-secondary overflow-hidden">
        <div class="breadcrumb__background"  v-background data-background="http://api.123mainmexico.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-12-at-15.29.01.jpeg"></div>
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-12">
                    <div class="breadcrumb__content text-center">
                        <h2 class="breadcrumb__title color-white title-animation">Book A Table</h2>
                        <div class="breadcrumb__menu">
                            <nav>
                                <ul>
                                    <li><span><nuxt-link to="/">Home</nuxt-link></span></li>
                                    <li class="active"><span>Book A Table</span></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <span class="breadcrumb__big-title">Reservation</span>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb area start  -->

    <!--book-a-table-3-->
    <div class="book-a-table-3 section-space theme-bg-secondary" data-background="./assets/imgs/book-a-table-3/shape.png">
        <div class="container">
            <div class="row g-24">
                <div class="col-md-4 col-sm-6 d-flex justify-content-end flex-column">
                    <div class="book-a-table-3__select">
                        <label >NUMBER OF GUEST *</label>
                        <select id="how-many-person">
                            <option>Person</option>
                            <option>2 Person</option>
                            <option>3 Person</option>
                            <option>4 Person</option>
                            <option>5 Person</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 d-flex justify-content-end flex-column">
                    <div class="book-a-table-3__input">
                        <label>SELECT DATE *</label>
                        <input id="datepicker" name="date" type="text" class="datepicker" placeholder="YY-MM-DD">
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 d-flex justify-content-end flex-column">
                    <div class="book-a-table-3__input time">
                        <label>SELECT TIME*</label>
                        <input type="time" value="09:00:00">
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 d-flex justify-content-end flex-column">
                    <div class="book-a-table-3__input">
                        <label>Your Name*</label>
                        <input type="text" placeholder="Your Name">
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 d-flex justify-content-end flex-column">
                    <div class="book-a-table-3__input">
                        <label>Email Address *</label>
                        <input type="email" placeholder="Email Address">
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 d-flex justify-content-end flex-column">
                    <div class="book-a-table-3__input">
                        <label>Phone Number *</label>
                        <input type="tel" placeholder="Phone Number">
                    </div>
                </div>
                <div class="col-md-12 d-flex justify-content-end flex-column">
                    <div class="book-a-table-3__input">
                        <label>Type Your Special Message*</label>
                        <textarea name="text" id="text" placeholder="Tell us more about your special message"></textarea>
                    </div>
                </div>
                <a href="" class="rr-btn rr-btn__red">
                    <span class="hover-rl"></span>
                    <span class="fake_hover"></span>
                    <span class="btn-wrap">
                        <span class="text-one">Book A Table <img src="https://html.rrdevs.net/delish/assets/imgs/icon/arrow-right.svg" alt="not found"></span>
                        <span class="text-two">Book A Table <img src="https://html.rrdevs.net/delish/assets/imgs/icon/arrow-right.svg" alt="not found"></span>
                    </span>
                </a>
            </div>
        </div>
    </div>
    <!--book-a-table-3-->

    <!--book-a-table-3-bottom-->
    <section class="book-a-table-3-bottom section-space overflow-hidden">
        <div class="container">
            <div class="row g-24 align-items-center">
                <div class="col-md-6">
                    <div class="book-a-table-3-bottom__media">
                        <div class="book-a-table-3-bottom__media-thumb-1">
                            <img src="https://123.espanglishmarketing.com/wp-content/uploads/2024/09/Molcajete-House.png" class="img-fluid" alt="not found">
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="book-a-table-3-bottom-wrapper">
                        <div class="book-a-table-3-bottom__item">
                            <h6 class="text-uppercase mb-15">Opening Hours</h6>
                            <ul>
                                <li>
Sunday - Thursday 10:00 am - 10:00 pm</li>
                                <li>Friday - Saturday 10:00 am - 12:00 pm</li>
                            </ul>
                        </div>
                        <div class="book-a-table-3-bottom__item">
                            <h6 class="text-uppercase mb-15">Visit Hour Restaurant</h6>
                            <ul>
                                <li><a href="https://maps.app.goo.gl/1N77c8d8zieLRaot7">123 Main St, Pineville, NC 28134</a></li>
                                <li><a href="tel:(704) 889-1236">(704) 889-1236</a></li>
                                <li><a href="mailto:mainmexico123@gmail.com">mainmexico123@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--book-a-table-3-bottom-->
</main>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>