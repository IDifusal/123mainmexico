<template>
    <div
      class="experience experience__background experience__space experience__bottom-up overflow-hidden"
      v-background
      data-background="https://html.rrdevs.net/delish/assets/imgs/experience/bg.png"
    >
      <div class="container">
        <div class="row g-24">
          <div class="col-12">
            <div class="experience__item-wrapper">
              <div class="experience__item" ref="coolProjectsRef">
                <p><span class="odometer">{{ coolProjects }}</span> <span><br> Location</span></p>
              </div>
  
              <div class="experience__item" ref="awardsWinRef">
                <p><span class="odometer"> + {{ awardsWin }}</span> <span>Different <br> Dishes</span></p>
              </div>
  
              <div class="experience__item" ref="foodSpecialitiesRef">
                <p><span class="odometer">+ {{ foodSpecialities }}</span> <span>Best <br> Drinks</span></p>
              </div>
  
              <div class="experience__item" ref="teamMembersRef">
                <p><span class="odometer">{{ teamMembers }} + </span> <span>Satisfied<br>Customers </span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const coolProjects = ref(0);
  const awardsWin = ref(0);
  const foodSpecialities = ref(0);
  const teamMembers = ref(0);
  
  const coolProjectsRef = ref(null);
  const awardsWinRef = ref(null);
  const foodSpecialitiesRef = ref(null);
  const teamMembersRef = ref(null);
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const startCounting = (target, endValue) => {
    let startValue = 0;
    const duration = 2000; // 2 seconds
    const increment = endValue / (duration / 16); // Assuming 60fps
    const counter = setInterval(() => {
      startValue += increment;
      if (startValue >= endValue) {
        startValue = endValue;
        clearInterval(counter);
      }
      target.value = Math.round(startValue);
    }, 16);
  };
  
  onMounted(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === coolProjectsRef.value) {
            startCounting(coolProjects, 1);
          } else if (entry.target === awardsWinRef.value) {
            startCounting(awardsWin, 20);
          } else if (entry.target === foodSpecialitiesRef.value) {
            startCounting(foodSpecialities, 17);
          } else if (entry.target === teamMembersRef.value) {
            startCounting(teamMembers, 100);
          }
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    if (coolProjectsRef.value) observer.observe(coolProjectsRef.value);
    if (awardsWinRef.value) observer.observe(awardsWinRef.value);
    if (foodSpecialitiesRef.value) observer.observe(foodSpecialitiesRef.value);
    if (teamMembersRef.value) observer.observe(teamMembersRef.value);
  });
  </script>
  