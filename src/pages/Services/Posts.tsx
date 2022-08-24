const getPosts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {});
};

export default getPosts;
