const from = document.getElementById("from");
const title = document.getElementById("item-input");

from.addEventListener("submit", hanleSbmit);

function hanleSbmit(event) {
  event.preventDefault();
  //
  const titles = title.value;

  console.log({ titles });
}
