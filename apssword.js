// ดักจับเหตุการณ์ submit ของฟอร์ม
document.getElementById('checkForm').addEventListener('submit', function(event) {
    const inputValue = document.getElementById('apassword').value;
    
    // ตรวจสอบว่าค่าที่กรอกเป็น "23" หรือไม่
    if (inputValue !== "23") {
      // หยุดการส่งฟอร์ม
      event.preventDefault();
      // แสดง Modal แจ้งเตือน
      showModal();
    }
    // ถ้าเป็น "23" ฟอร์มจะถูกส่งไปที่ first.html ตามที่ระบุใน action
  });
  
  // ฟังก์ชันสำหรับแสดง Modal
  function showModal() {
    const modal = document.getElementById("errorModal");
    modal.style.display = "flex"; // ใช้ flex เพื่อจัดให้อยู่ตรงกลาง
    
    // ดักจับเหตุการณ์เมื่อคลิกที่ปุ่มปิด (×)
    const closeBtn = modal.querySelector(".close");
    closeBtn.onclick = function() {
      modal.style.display = "none";
    };
  
    // เมื่อคลิกที่พื้นที่นอก modal-content ให้ปิด Modal
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }
  