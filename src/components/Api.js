const getPhotos = (input, api) => (

     fetch(`https://api.unsplash.com/search/photos?per_page=20&query=` + input + `&client_id=` + api)
          .then(res => res.json())
          .then(json => {
            return json
          })
);

export default getPhotos;
