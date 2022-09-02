const Filter = () => {
    const searchList = () => {
        var input = document.getElementById("searchbar").value.toUpperCase()
        var listItems = document.getElementById("persons").getElementsByTagName('li')

        for (let i = 0; i < listItems.length; i++) {
            var item = listItems[i].textContent.toUpperCase()
            if (item.indexOf(input) > -1) {
                listItems[i].style.display = ""
            } else {
                listItems[i].style.display = "none"
            }
        }
    }

    return (
        <div>
            filter shown with
            <input id="searchbar" type="text" name="search" onKeyUp={searchList}></input>
        </div>
    )
}

export default Filter