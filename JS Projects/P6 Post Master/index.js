console.log('hello');

// utility function:
// 1.utility function to get DOM element from string
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;

}

// initialize no of parameters
let addedParamCount = 0;

// hide the parameter box initially
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

// if the user clicks on params box, hide json box
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
    document.getElementById('requstJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';
})

// if the user clicks on json box, hide params box
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    document.getElementById('parametersBox').style.display = 'none';
    document.getElementById('requstJsonBox').style.display = 'block';
})

// if user click on + , add more parameters
let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');
    let string = `<div class="form-row my-2">
                    <label for="url" class="col-sm-2 col-form-label">parameter ${addedParamCount + 2}</label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterKey${addedParamCount + 2}" placeholder="Enter parameter ${addedParamCount + 2} key">
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterValue${addedParamCount + 2}" placeholder="Enter parameter ${addedParamCount + 2} value">
                    </div>
                    <button class="btn btn-primary deleteParam">-</button>
                </div>`;
    // convert the element string to DOM node
    let paramElement = getElementFromString(string);
    params.appendChild(paramElement);

    // add eventlistener to remove parameters when click on - button
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
            e.target.parentElement.remove();

        })

    }

    addedParamCount++;
})

// user clicks on submit button
let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    // show please wait in response box
    document.getElementById('responseJsonText').value = "please wait..!! Fetching response..";

    // fetch all the data user has entered
    let url = document.getElementById('url').value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;

    // if user select params option then get all values in objects
    if (contentType == 'params') {
        data = {};
        for (let i = 0; i < addedParamCount + 1; i++) {
            if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
                let key = document.getElementById('parameterKey'+(i + 1)).value;
                let value = document.getElementById('parameterValue'+(i + 1)).value;
                    data[key] = value;
            }
        }
        data = JSON.stringify(data);
    }

    else {
        data = document.getElementById('requestJsonText').value;
    }

    // log all the data for debugging
    console.log(url, requestType, contentType, data);

    // if request type is get, invoke fetch api to create a get request
    if(requestType == 'GET'){
        fetch(url, {
            method: 'GET',
        })
        .then(response => response.text())
        .then((text) =>{
            document.getElementById('responseJsonText').value = text; 
        }); 
    }
    

    else{
        fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
        })
        
        .then(response => response.text())
        .then((text) =>{
            document.getElementById('responseJsonText').value = text; 
        }); 
    }
});

