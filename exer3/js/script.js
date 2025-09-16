function searchGoogle() {
    const query = document.getElementById("searchBox").value;
    if (query) {
      window.open("https://www.google.com/search?q=" + encodeURIComponent(query), "_blank");
    }
  }