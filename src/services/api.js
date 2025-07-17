import { toast } from "react-toastify";
import { baseUrl } from "./config";
import { getToken } from "./token";


export const getProductData = () => {
  const myHeaders = new Headers();
  getToken() ? myHeaders.append("Authorization", `Bearer ${getToken()}`) : "";

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(`${baseUrl}/product/list/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
};

export const getCategory = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${baseUrl}/product/categories/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export const productDetails = (id) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${baseUrl}/product/detail/?product_id=${id}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export const getUserData = () => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${getToken()}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(`${baseUrl}/user/detail/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export const getFilterData = (id) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${baseUrl}/product/list/?category_id=${id}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export const getLikeData = () => {
  const token = getToken();

  // Token bo'lmasa, fetch ishlamasin
  if (!token) {
    return Promise.resolve([]); // Bo‘sh array qaytaradi
  }

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(`${baseUrl}/action/my-wishlist/`, requestOptions)
    .then((response) => {
      if (!response.ok) throw new Error("Unauthorized or server error");
      return response.json();
    })
    .then((result) => result)
    .catch((error) => {
      console.error("Wishlist so'rovda xatolik:", error);
      return [];
    });
};

export const oneLikeData = (id, setProduct, setLikeData) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${getToken()}`);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    `${baseUrl}/action/add-to-wishlist/?product_id=${id}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      toast.success(result?.message);
      getProductData().then(setProduct);
      getLikeData().then(setLikeData);
    })
    .catch((error) => console.error(error));
};

export const deleteLike = (id, setProduct, setLikeData) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${getToken()}`);

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    `${baseUrl}/action/remove-from-wishlist/?product_id=${id}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      if (result?.error) {
        toast.warning(result?.error);
      } else {
        toast.error("maxsulot o'chirldi");
        getLikeData().then(setLikeData);
        getProductData().then(setProduct);
      }
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};
