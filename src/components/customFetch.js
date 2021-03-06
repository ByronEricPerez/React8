const customFetch = (data, time = 2000) => {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        try {
          if (data) {
            resolve(data);
          }
        } catch (err) {
          reject(err);
        }
      }, time)
    );
  };
  
  export default customFetch;
  