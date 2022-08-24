const getUsers = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {});
};

export default getUsers;
