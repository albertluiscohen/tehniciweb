const isLocalStorageEnabled = () => {
  try {
    const key = `__storage__test`;
    localStorage.setItem(key, null);
    localStorage.removeItem(key);
    // localStorage.removeItem("scoala119");
    return true;
  } catch (e) {
    return false;
  }
};

const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");

if (isLocalStorageEnabled()) {
  const consent = localStorage.getItem("scoala119");
  const executeCodes = () => {
    //if localStorage contains scoala119 it will be returned and below of this code will not run
    // console.log(JSON.stringify(consent));
    if (consent !== null) return;
    // cookieBox.classList.add("show");
    cookieBox.classList.remove("hidden");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        cookieBox.classList.add("hidden");

        //if button has acceptBtn id
        if (button.id == "acceptBtn") {
          //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
          //   document.cookie = "cookieBy= scoala119; max-age=" + 60 * 60 * 24 * 30;
          localStorage.setItem("scoala119", "true");
          //   cookieBox.classList.add("hidden");
        }
      });
    });
  };
  //executeCodes function will be called on webpage load
  window.addEventListener("load", executeCodes);
} else {
  const executeCodes = () => {
    //if cookie contains scoala119 it will be returned and below of this code will not run
    if (document.cookie.includes("scoala119")) return;
    cookieBox.classList.add("show");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        cookieBox.classList.remove("show");

        //if button has acceptBtn id
        if (button.id == "acceptBtn") {
          //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
          document.cookie = "cookieBy= scoala119; max-age=" + 60 * 60 * 24 * 30;
        }
      });
    });
  };

  //executeCodes function will be called on webpage load
  window.addEventListener("load", executeCodes);
}
