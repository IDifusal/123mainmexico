<template>
<!-- Body main wrapper start -->
<main>
    <!-- Breadcrumb area start  -->
    <div class="breadcrumb__area breadcrumb-space overly theme-bg-secondary overflow-hidden">
        <div class="breadcrumb__background" v-background data-background="https://123.espanglishmarketing.com/wp-content/uploads/2024/08/DSC06581-1.jpg"></div>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.8731184750504!2d-80.89024528797697!3d35.08490287267207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88569c85f6128783%3A0x267453ed13abda94!2s123%20Main%20St%2C%20Pineville%2C%20NC%2028134%2C%20USA!5e0!3m2!1sen!2spe!4v1723576628802!5m2!1sen!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div class="container">
            <div class="contact-us__information-wrapper wow clip-a-z">
            <h5 class="text-uppercase mb-10">Restaurant Information</h5>
            <p>Essential details about our restaurant, including location, hours, and contact information.</p>

            <div class="contact-us__information__item">
                <div class="icon">
                    <i class="fa-solid fa-phone"></i>
                </div>
                <div class="text">
                    <span>Phone Number & Email</span>
                    <a href="tel:(704) 889-1236">(704) 889-1236</a>
                    <a href="mailto:reservations@123mainmexico.com">reservations@123mainmexico.com</a>
                </div>
            </div>
            <div class="contact-us__information__item">
                <div class="icon">
                    <i class="fa-solid fa-location-dot"></i>
                </div>
                <div class="text">
                    <span>Our Office Address</span>
                    <a href="https://maps.app.goo.gl/1N77c8d8zieLRaot7">
                        123 Main St, Pineville, NC 28134
                    </a>
                </div>
            </div>
            <div class="contact-us__information__item">
                <div class="icon">
                    <i class="fa-solid fa-clock"></i>
                </div>
                <div class="text">
                    <span>Official Work Time</span>
                    <div>Sunday - Thursday: 10:00 AM - 10:00 PM</div>
                    <div>Friday - Saturday: 10:00 AM - 12:00 AM</div>
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
                            <p>Got a question? Leave us a message anytime! Whether it's about our menu, reservations, or anything else, we're here to help and will get back to you as soon as possible.</p>
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
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>