import "./toast.css";

export const showNotification = (message) => {
  const div = document.createElement("div");
  div.classList.add("toast");
  div.innerText = message;
  div.style.textAlign = "center";

  document.getElementById("notification-container").appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 3000);
};
