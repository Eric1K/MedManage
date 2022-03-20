function search() {
    var query = document.getElementById("search").value;
    if (!query) return window.alert("Search box is empty.")
    window.open(`https://www.webmd.com/search/search_results/default.aspx?query=${query}`, "_self");

  }

function addSearchListener()
{
    var input = document.getElementById("search");

    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchbtn").click();
      }
    });
}