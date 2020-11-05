const url = "http://localhost:4500/"

const getCity = () => {
    fetch(url,{method:'GET'})
    .then((data) => data.json())
    .then((out) => {
        for(i=0;i<out.length;i++){
            var node = document.createElement('option');  //<option></option>
            var textnode = document.createTextNode(out[i].name);  //Delhi
            node.appendChild(textnode);  // <option>Delhi</option>
            document.getElementById('city').appendChild(node);  //<select><option>Delhi</option></select>
        }
    })
}