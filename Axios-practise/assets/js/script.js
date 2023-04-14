//Axios Globals
axios.defaults.headers.common['X-Auth-Token']= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

async function addTodo() {
    try {
        let response = await axios.post('https://jsonplaceholder.typicode.com/todos',{
        title: 'New Todo',
        completed:false
    })
    ShowOutput(response);
    console.log(response);
    } catch (error) {
       console.log(error); 
    }
  
}


function getTodo() {
    // axios({
    //     method: 'get',
    //     url: 'https://jsonplaceholder.typicode.com/todos',
    //     params: {
    //         _limit:5
    //     }
    // })
    // // .then(res=>console.log(res))
    // // .then(res=>console.log(res.data))
    // .then(res=>ShowOutput(res))
    // .catch(err=>console.log(err));

    // axios.get('https://jsonplaceholder.typicode.com/todos', 
    // {
    //     params:{
    //         _limit:5
    //     }
    // })  OR
    // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    // .then(res=>ShowOutput(res))
    // .catch(err=>console.log(err));
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5',{
        timeout: 5000
    })
    .then(res=>ShowOutput(res))
    .catch(err=>console.log(err));
}
// function addTodo() {
//     // axios({
//     //     method: 'post',
//     //     url: 'https://jsonplaceholder.typicode.com/todos',
//     //     data: {
//     //         title: 'New Todo',
//     //         completed: false
//     //     }
//     // })
//     // .then(res=>ShowOutput(res))
//     // .catch(err=>console.log(err));
//     axios.post('https://jsonplaceholder.typicode.com/todos',{
//         title: 'New Todo',
//         completed:false
//     })
//     .then(res=>ShowOutput(res))
//     .catch(err=>console.log(err));
// }
function updateTodo() {
    // axios.put('https://jsonplaceholder.typicode.com/todos/1',{
    //     title: 'Updated Todo',
    //     completed:true
    // })
    // .then(res=>ShowOutput(res))
    // .catch(err=>console.log(err));

    //patch only replace mention data thats why we can see userID here

    axios.patch('https://jsonplaceholder.typicode.com/todos/1',{
        title: 'Updated Todo',
        completed:true
    })
    .then(res=>ShowOutput(res))
    .catch(err=>console.log(err));
}
function removeTodo() {
    axios.delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(res=>ShowOutput(res))
    .catch(err=>console.log(err));
}
function getData() {
    //more than 1 requests at the same time

    // axios.all([
    //     axios.get('https://jsonplaceholder.typicode.com/todos'),
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    // ])
    // .then(res=>{
    //     console.log(res[0]);
    //     console.log(res[1]);
    //     ShowOutput(res[1]);
    // })
    // .catch(err=>console.log(err));

    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos'),
        axios.get('https://jsonplaceholder.typicode.com/posts')
    ])
    .then(axios.spread((todos, posts)=>ShowOutput(posts)))
    .catch(err=>console.log(err));
}
function customHeaders() {
    const config = {
        headers: {
            'Content-Type':'application/json',
            Authorization: 'sometoken'
        }
    }

    axios.post('https://jsonplaceholder.typicode.com/todos',{
        title: 'New Todo',
        completed:false
    }, config)
    .then(res=>ShowOutput(res))
    .catch(err=>console.log(err));
}
function transformResponse() {
    const options = {
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data:{
            title: 'Hello'
        },
        transformResponse:axios.defaults.transformResponse.concat(data=>{
            data.title=data.title.toUpperCase();
            return data;
        })

    }
    axios(options).then(res=>ShowOutput(res))
}
function errorHandling() {  
    
    //axios.get('https://jsonplaceholder.typicode.com/todoss?_limit=5')
    axios.get('https://jsonplaceholder.typicode.com/todoss?_limit=5',{
        validateStatus: function(status){
            return status < 500; //reject only if status is greater or equal to 500
        }
    })
    .then(res=>ShowOutput(res))
    .catch(err=>{
        if(err.response){
            //Server responded with a status other than 200 range
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        }

        if (err.response.status===404){
            alert("error: 404 not found")
        } else if (err.request){
            //Request was made but there was no response
            console.log(err.request);
        } else {
            console.log(err.message);
        }
    });
}
function cancelToken() {
    const source = axios.CancelToken.source();
    axios.get('https://jsonplaceholder.typicode.com/todos',{
        cancelToken: source.token
    })
    .then(res=>ShowOutput(res))
    .catch(thrown =>{
        if(axios.isCancel(thrown)){
            console.log('Request Canceled', thrown.message);
        }
    });
    if(true){
        source.cancel('Request Canceled');
    }
    
}

//Intercepting requests and responses
axios.interceptors.request.use(config=>{
    console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`);
    return config;
}, 
error=>{
    return Promise.reject(error);
}
);

//Axios instance, custom
const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

//axiosInstance.get('/comments').then(res=>ShowOutput(res));

function ShowOutput(res) {
    document.getElementById('res').innerHTML=`
    <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
</div>
<div class="card mt-3">
    <div class="card-header">
        Headers
    </div>
    <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
</div>
<div class="card mt-3">
    <div class="card-header">
        Data
    </div>
    <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
</div>
<div class="card mt-3">
    <div class="card-header">
        Config
    </div>
    <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
</div>
    `
}


document.getElementById('get').addEventListener('click', getTodo);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document.getElementById('transform').addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);