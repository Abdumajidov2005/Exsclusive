import { toast } from "react-toastify";
import { baseUrl } from "./config";
import { getToken } from "./token";
import { renderToReadableStream } from "react-dom/server";

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

export const oneLikeData = (
  id,
  setProduct,
  setLikeData,
  setSearchFilterData
) => {
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
      getLikeData().then(setLikeData);
      getProductData().then((data) => {
        setProduct(data);
        setSearchFilterData(data);
      });
    })
    .catch((error) => console.error(error));
};

export const deleteLike = (
  id,
  setProduct,
  setLikeData,
  setSearchFilterData
) => {
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
        getProductData().then((data) => {
          setProduct(data);
          setSearchFilterData(data);
        });
      }
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export const getCartData = (setCartData) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${getToken()}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(`${baseUrl}/order/cart-items/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (typeof setCartData === "function") {
        setCartData(result);
      }
      return result;
    })
    .catch((error) => {
      console.error(error);
      if (typeof setCartData === "function") {
        setCartData([]);
      }
      return [];
    });
};

export const addToCart = (id, quantity, color, size, setCartData) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${getToken()}`);

  const properties = { color };
  if (size) {
    properties.size = size;
  }

  const raw = JSON.stringify({
    product_id: id,
    quantity: quantity,
    properties: properties,
  });


  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(`${baseUrl}/order/add-to-cart/`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      toast.success("maxsulot qo'shildi");
      if (typeof setCartData === "function") {
        getCartData().then((data) => {
          setCartData(data);
        });
      }

      return result;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export const delCartData = (id, setCartData) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${getToken()}`);

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    `${baseUrl}/order/remove-from-cart?cart_item_id=${id}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      toast.error("Maxsulot o'chirildi");
      if (typeof setCartData === "function") {
        getCartData().then((data) => {
          setCartData(data);
        });
      }

      return result;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};
