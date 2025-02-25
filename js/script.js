document.querySelector("#addCD").addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const artist = document.querySelector("#artist").value;
  const year = document.querySelector("#year").value;

  if (title === "" || artist === "" || year === "") {
    alert("Please fill all fields.");
    return;
  }

  const template = document.querySelector("#cdTemplate");
  const cdRow = template.content.cloneNode(true);

  cdRow.querySelector(".cdTitle").textContent = title;
  cdRow.querySelector(".cdArtist").textContent = artist;
  cdRow.querySelector(".cdYear").textContent = year;

  const deleteBtn = cdRow.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click", (e) => {
    let row = e.target.parentNode.parentNode;
    row.remove();
  });

  document.querySelector("#cdList").append(cdRow);

  document.querySelector("#title").value = "";
  document.querySelector("#artist").value = "";
  document.querySelector("#year").value = "";
});
