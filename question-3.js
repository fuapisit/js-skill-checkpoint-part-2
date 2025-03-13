// เริ่มเขียนโค้ดตรงนี้
async function getUsers() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        const  longName = users
        .map(user => user.name)
        .filter(name => name.length > 17);

        console.log(longName);
    } catch (e){
        console.log('Error fetching users: ', e);
    }
}
getUsers();