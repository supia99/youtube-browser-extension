console.log("youtube extension loaded");

const removeShorts = () => {
  setTimeout(() => {
    document.querySelectorAll("[is-shorts]").forEach((e) => {e.remove()})
    removeShorts();
  }, 1000);
}

removeShorts();