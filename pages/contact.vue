<template>
<!-- Body main wrapper start -->
<main>
    <!-- Breadcrumb area start  -->
    <div class="breadcrumb__area breadcrumb-space overly theme-bg-secondary overflow-hidden">
        <div class="breadcrumb__background" data-background="https://html.rrdevs.net/delish/assets/imgs/breadcrumb/page-header-1.png"></div>
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-12">
                    <div class="breadcrumb__content text-center">
                        <h2 class="breadcrumb__title color-white title-animation">Contact Us</h2>
                        <div class="breadcrumb__menu">
                            <nav>
                                <ul>
                                    <li><span>
                                        <nuxt-link to="/">  
                                            Home
                                        </nuxt-link>
                                    </span></li>
                                    <li class="active"><span>Contact Us</span></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <span class="breadcrumb__big-title">Get In Touch</span>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb area start  -->

    <!-- contact-us-->
    <section class="contact-us overflow-hidden">
        <div class="contact-us__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14600.157880481716!2d90.35107202273903!3d23.81719545680701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c12c1b289e39%3A0x8d3bdfb80d3ebe88!2sRd%20No.%204%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1701837409513!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div class="container">
            <div class="contact-us__information-wrapper wow clip-a-z">
            <h5 class="text-uppercase mb-10">Office Information</h5>
            <p>Completely recapitalize 24/7 communities via standards compliant metrics whereas.</p>

            <div class="contact-us__information__item">
                <div class="icon">
                    <i class="fa-solid fa-phone"></i>
                </div>
                <div class="text">
                    <span>Phone Number & Email</span>
                    <a href="tel:+310259121563">+(310) 2591 21563</a>
                    <a href="mailto:help-delish@gmail.com">help-delish@gmail.com</a>
                </div>
            </div>
            <div class="contact-us__information__item">
                <div class="icon">
                    <i class="fa-solid fa-location-dot"></i>
                </div>
                <div class="text">
                    <span>Our Office Address</span>
                    <a href="https://maps.app.goo.gl/1N77c8d8zieLRaot7">258 Dancing Street, Miland Line, <br>HUYI 21563, NewYork</a>
                </div>
            </div>
            <div class="contact-us__information__item">
                <div class="icon">
                    <i class="fa-solid fa-clock"></i>
                </div>
                <div class="text">
                    <span>Official Work Time</span>
                    <div>7:00am - 6:00pm ( Mon - Fri )</div>
                    <div class="holiday">Sat, Sun & <span>Holiday Closed</span></div>
                </div>
            </div>
        </div>
        </div>
    </section>
    <!-- contact-us-->

    <!-- contact-us-message-->
    <section class="contact-us-message section-space">
        <div class="container">
            <div class="contact-us-message-wrapper section-bg-2 wow clip-a-z">
                <div class="row g-24">
                    <div class="col-12">
                        <div class="section__title-wrapper text-center mb-35">
                            <h3 class="text-uppercase fw-bold mb-1">Leave a Message</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit curae quis libero erat, justo in habitasse aliquet mi. Condimentum inceptos euismod eu nunc ad nisl fermentum erat gravida</p>
                        </div>
                    </div>
                </div>
                <div class="row g-24 justify-content-center">
                    <div class="col-12">
                        <form id="contact-us-message__form" class="contact-us-message__form" method="POST" action="./mail.php">
                            <div class="row g-20">
                                <div class="col-xl-6">
                                    <div class="contact-us-message__form-input">
                                        <div class="validation__wrapper-up position-relative">
                                            <i class="fa-light fa-user"></i>
                                            <input name="name" id="name" type="text" placeholder="Your Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="contact-us-message__form-input">
                                        <div class="validation__wrapper-up position-relative">
                                            <i class="fa-light fa-envelope"></i>
                                            <input name="email" id="email" type="email" placeholder="Email Address">
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-12">
                                    <div class="contact-us-message__form-input-select d-flex flex-column">
                                        <div class="validation__wrapper-up position-relative">
                                            <select name="subject" id="subject">
                                                <option value="">Select Subject</option>
                                                <option value="order" >Event Order</option>
                                                <option value="objection">Objection</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-12">
                                    <div class="contact-us-message__form-input">
                                        <div class="validation__wrapper-up position-relative">
                                            <textarea name="textarea" id="textarea" placeholder="Type Your Message"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <button type="submit" class="rr-btn-solid">
                                        <span class="btn-wrap">
                                            <span class="text-one">Submit Message <i class="fa-solid fa-arrow-right"></i></span>
                                            <span class="text-two">Submit Message <i class="fa-solid fa-arrow-right"></i></span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- contact-us-message-->
</main>
<!-- Body main wrapper end -->

<!-- cta area start -->
<section class="cta-2" data-background="https://html.rrdevs.net/delish/assets/imgs/cta-2/cta.jpg">
    <div class="container">
        <div class="row g-24">
            <div class="col-12">
                <div class="cta-2__content">
                    <div class="cta-2__content-text">
                        <span class="text-uppercase">Book A Table For Your and Family Members</span>
                        <h3 class="text-uppercase title-animation"><a href="reservation.html">Need A Table On Coffee House</a></h3>
                    </div>
                    <a class="btn-book" href="blog-details.html">Book A Table</a>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>