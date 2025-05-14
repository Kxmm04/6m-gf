document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider');
    let current = 0;
    let startX = 0;
    let isDragging = false;
    const threshold = 50; // ระยะขั้นต่ำในการเลื่อนเพื่อเปลี่ยน slide
  
    // Event สำหรับเริ่มลากด้วยเมาส์หรือ touch
    slider.addEventListener('mousedown', startDrag, false);
    slider.addEventListener('touchstart', startDrag, false);
    slider.addEventListener('mousemove', duringDrag, false);
    slider.addEventListener('touchmove', duringDrag, false);
    slider.addEventListener('mouseup', endDrag, false);
    slider.addEventListener('touchend', endDrag, false);
    slider.addEventListener('mouseleave', endDrag, false);
  
    function startDrag(e) {
      isDragging = true;
      startX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
    }
  
    function duringDrag(e) {
      if (!isDragging) return;
    }
  
    function endDrag(e) {
      if (!isDragging) return;
      let endX = e.type.startsWith('touch') ? e.changedTouches[0].clientX : e.clientX;
      let diff = endX - startX;
      isDragging = false;
      if (Math.abs(diff) > threshold) {
        if (diff < 0) {
          // ลากซ้าย: เปลี่ยนไป slide ถัดไป
          showSlide(current + 1);
        } else {
          // ลากขวา: เปลี่ยนไป slide ก่อนหน้า
          showSlide(current - 1);
        }
      }
    }
  
    function showSlide(index) {
      // ถอน class active และ next ทั้งหมด
      slides.forEach(slide => {
        slide.classList.remove('active');
        slide.classList.remove('next');
        slide.style.display = 'none';
      });
  
      // คำนวณ index ใหม่
      if (index >= slides.length) {
        current = 0;
      } else if (index < 0) {
        current = slides.length - 1;
      } else {
        current = index;
      }
  
      // แสดง slide ปัจจุบันด้วย class active
      slides[current].classList.add('active');
      slides[current].style.display = 'block';
  
      // คำนวณและแสดง slide ถัดไปด้วย class next
      let nextIndex = (current + 1) % slides.length;
      slides[nextIndex].classList.add('next');
      slides[nextIndex].style.display = 'block';
    }
  
    // กำหนดค่าเริ่มต้นสำหรับ slide ถัดไป
    let initialNext = (current + 1) % slides.length;
    slides[initialNext].classList.add('next');
    slides[initialNext].style.display = 'block';
  });
  