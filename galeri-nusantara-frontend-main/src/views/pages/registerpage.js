const registerpage = () => {
  return `
  <div class="container-form">
  <div class="screen">
    <div class="screen__content" id="signup">
    <form class="signup">
      <div class="signup__title">Register</div>
      <div class="signup__field">
        <i class="signup__icon fas fa-user"></i>
        <input type="text" class="signup__input" placeholder="Username">
      </div>
      <div class="signup__field">
        <i class="signup__icon fas fa-lock"></i>
        <input type="password" class="signup__input" placeholder="Password">
      </div>
      <div class="signup__field">
        <i class="signup__icon fas fa-lock"></i>
        <input type="password" class="signup__input" placeholder="Confirm Password">
      </div>
      <button class="button signup__submit">
        <span class="button__text">Sign Up Now</span>
        <i class="button__icon fas fa-chevron-right"></i>
      </button>
      <div class="alt-action-signup">Sudah memiliki akun? <a href="#/login">Login</a></div>
    </form>
  </div>
  <div class="screen__background">
    <span class="screen__background__shape screen__background__shape4"></span>
    <span class="screen__background__shape screen__background__shape3"></span>
    <span class="screen__background__shape screen__background__shape2"></span>
    <span class="screen__background__shape screen__background__shape1"></span>
  </div>
</div>
</div>
</div>
    `;
};

export default registerpage;
