<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section logo">
        <img src="/images/logo.png" alt="GlobalOffshore">
      </div>
      <div class="footer-section">
        <h4>Contact</h4>
        <p>Hutnicza 12<br />81-061 Gdynia, Poland</p>
        <p><a href="mailto:contact@globaloffshore.pl">contact@globaloffshore.pl</a></p>
      </div>

      <div class="footer-section">
        <h4>Departments</h4>
        <p><strong>Production:</strong><br />+48 888 293 024</p>
        <p><strong>Service:</strong><br />+48 602 113 006</p>
      </div>

      <div class="footer-section">
        <h4>Company</h4>
        <p>
          GLOBAL Offshore Sp. z o.o.<br />
          Czechosłowacka 3<br />
          81-336 Gdynia<br />
          NIP: 958-169-10-96<br />
          REGON: 380012684<br />
          KRS: 0000728367
        </p>
      </div>
    </div>

    <div class="footer-bottom">
      <!-- <p>Created by <a href="https://netfreak.pl" target="_blank">netfreak.pl</a></p> -->
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  background-color: #fff;
  color: #1D1E2C;
  border-top: 2px solid #D13C30;
  padding: 3rem 2rem 1rem;
  font-size: 0.95rem;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  max-width: 1280px;
  margin: 0 auto;
  gap: 2rem;
}

.footer-section {
  margin-top: 20px;
  flex: 1;
  min-width: 220px;
}
.logo {
  margin-top: 30px;
}
.footer-section h4 {
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  color: #D13C30;
}

.footer-section a {
  color: #D13C30;
  text-decoration: none;
}

.footer-section a:hover {
  text-decoration: underline;
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  border-top: 1px solid #eee;
  padding-top: 1rem;
  color: #777;
}

.footer-bottom a {
  color: #D13C30;
  font-weight: 500;
}
</style>
