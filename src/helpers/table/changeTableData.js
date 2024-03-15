function changeComposition(compositionArray) {
  console.log(compositionArray, "compositionArray");
  const newArry = compositionArray?.map((elem) => {
    return Object.values(elem).join(" ");
  });
  return newArry.join(" , ");
}
export const changeTableData = {
  menuTableData: (data) => {
    const result = data?.map((item) => {
      const values = Object.entries(item);
      const obj = {
        id: item.id,
        image: item.url,
        name: item.name,
        category: item.category,
        composition: item.compositions,
        number: item.number,
        price: item.price,
        description: item.description,
        dataList: values.filter((elem) => {
          if (elem[0] == "compositions") {
            // console.log(elem, "compositions");
            return [...elem, (elem[1] = changeComposition(elem[1]))];
          }
          if (
            elem[0] !== "url" &&
            elem[0] !== "id" &&
            elem[0] !== "description"
          ) {
            return elem;
          }
        }),
      };
      return obj;
    });

    return result;
  },

  stockTableData: (data) => {
    const result = data?.map((item) => {
      const values = Object.entries(item);
      const obj = {
        id: item.id,
        number: item.number,
        name: item.name,
        quantity: item.quantity,
        minimalLimit: item.minimalLimit,
        dateOfArrival: item.dateOfArrival,
        dataList: values.filter((elem) => {
          if (
            elem[0] !== "url" &&
            elem[0] !== "id" &&
            elem[0] != "compositions"
          ) {
            return elem;
          }
        }),
      };
      return obj;
    });

    return result;
  },
  branchTableData: (data) => {
    const result = data?.map((item) => {
      const values = Object.entries(item);
      const obj = {
        id: item.id,
        image: item.url,
        name: item.name,

        dataList: values.filter((elem) => {
          if (
            elem[0] !== "url" &&
            elem[0] !== "id" &&
            elem[0] != "compositions"
          ) {
            return elem;
          }
        }),
      };
      return obj;
    });

    return result;
  },
  employerTableData: (data) => {
    const result = data?.map((item) => {
      const values = Object.entries(item);
      const obj = {
        id: item.id,
        number: item.number,
        name: item.name,
        login: item.login,
        email: item.email,
        branch: item.filial,
        password: item.password,
        position: item.title,

        dataList: values.filter((elem) => {
          if (
            elem[0] !== "url" &&
            elem[0] !== "id" &&
            elem[0] != "compositions"
          ) {
            return elem;
          }
        }),
      };
      return obj;
    });

    return result;
  },
};
