const urlGetMovies = 'http://192.168.0.7:3030/GetAdmin';

function* getMoviesFromApi() {
    const response = yield fetch(urlGetMovies, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }).then((response)=>(response.json()))
    ;
    console.log('response',response);
    const movies = response
  
    // const movies =[{"_id":"60755b2481b8d3113c292c74","Name":"nghiep123","User":"nghiep123","Pass":"nghiep123","__v":0},
    // {"_id":"60755b333b08d52fc485af47","Name":"nghiep123","User":"nghiep123","Pass":"nghiep123","__v":0},
    // {"_id":"60755bc0bda83a07d8187486","Name":"a","User":"a","Pass":"a","__v":0},
    // {"_id":"60755e50b3e7ef2c3849c5fd","Name":"a","User":"1","Pass":"1","__v":0},
    // {"_id":"60755e66b9895b2ad8e6ee49","Name":"e","User":"e","Pass":"e","__v":0},
    // {"_id":"60755e854d01ad2f4c891b0c","Name":"e","User":"e","Pass":"e","__v":0},
    // {"_id":"60a329b88081ae1e54dc2487","Name":"q","User":"w","Pass":"e","__v":0},
    // {"_id":"60a32bc3a6ce4537d4b34ce0","Name":"q","User":"w","Pass":"e","__v":0},
    // {"_id":"60a337551a1462285c0b8fc1","Name":"o","User":"p","Pass":"p","__v":0},
    // {"_id":"60a337561a1462285c0b8fc2","Name":"o","User":"p","Pass":"p","__v":0},
    // {"_id":"60a337561a1462285c0b8fc3","Name":"o","User":"p","Pass":"p","__v":0},
    // {"_id":"60a337981a1462285c0b8fc6","Name":"u","User":"u","Pass":"u","__v":0},
    // {"_id":"60a337981a1462285c0b8fc7","Name":"u","User":"u","Pass":"u","__v":0},
    // {"_id":"60a337991a1462285c0b8fc8","Name":"u","User":"u","Pass":"u","__v":0},
    // {"_id":"60a33bcd72f0682a7c0dbb9e","Name":"","User":"","Pass":"","__v":0}]   
    return movies;
}
export const Api = {
    getMoviesFromApi
};