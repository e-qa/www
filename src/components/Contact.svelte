<script>
  let github = "/icons/github.png";
  let email = "/icons/email.png";
  let linkedin = "/icons/linkedin.png";
</script>

<h2 class="heading">Contact With Me</h2>

<div class="contact">
  <form class="form">
    <div class="form-grid">
      <div class="form-inputs">
        <label for="">First name *</label>
        <input type="text" />
      </div>
      <div class="form-inputs">
        <label for="">Last name *</label>
        <input type="text" />
      </div>
      <div class="form-inputs">
        <label for="">Email *</label>
        <input type="email" name="" id="" />
      </div>

      <div class="form-inputs">
        <label for="">Phone number</label>
        <input type="number" />
      </div>
    </div>
    <div class="form-inputs">
      <label for="">Message</label>
      <textarea name="" id=""></textarea>
    </div>
    <button class="btn">submit</button>
  </form>
  <h3>or</h3>
  <div class="socials">
    <a href="https://github.com/rhy6x">
      <img src={github} alt="github" />
    </a>
    <a href="https://www.linkedin.com/in/eli-qarayev">
      <img src={linkedin} alt="" />
    </a>
    <a href="mailto:example@example.com">
      <img src={email} alt="" />
    </a>
  </div>
</div>

<style>
  .contact {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
  }
  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 10px;
  }
  .form-inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  input,
  textarea {
    font-size: 30px;
    border: 1px solid rgb(104, 104, 104);
    border-radius: 5px;
    outline: none;
    background-color: transparent;
  }
  .btn {
    margin-top: 20px;
    padding: 10px 20px;
    border: 1px solid rgb(104, 104, 104);
    background-color: transparent;
    cursor: pointer;
  }

  .socials {
    display: flex;
    gap: 30px;
  }
  .socials img {
    margin-top: 30px;
    width: 50px;
  }

  @media (max-width: 768px) {
    .form-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
