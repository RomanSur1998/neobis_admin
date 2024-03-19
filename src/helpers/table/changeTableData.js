function changeComposition(compositionArray) {
  const newArry = compositionArray?.map((elem) => {
    return Object.values(elem).join(" ");
  });
  return newArry.join(" , ");
}
function changeWorkDays(workDays) {
  const newArry = workDays?.map((elem) => {
    return Object.values(elem).slice(1).join("-");
    // return Object.values(elem);
  });
  // return newArry.join(" , ");
  let result = newArry.join(" , ");
  const newRes = result.slice(0, 24) + "...";
  return newRes;
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
            elem[0] !== "description" &&
            elem[0] !== "workDays"
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
    console.log(data, "stock");
    const result = data?.map((item) => {
      const values = Object.entries(item);

      const obj = {
        id: item.id,
        number: item.number,
        name: item.name,
        quantity: item.quantity,
        unit: item.unit,
        category: item.category,
        minimalLimit: item.minimalLimit,
        dateOfArrival: item.dateOfArrival,
        dataList: values.filter((elem) => {
          if (
            elem[0] !== "url" &&
            elem[0] !== "id" &&
            elem[0] != "compositions" &&
            elem[0] != "unit" &&
            elem[0] !== "workDays"
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
    console.log(data, "filial");
    const result = data?.map((item) => {
      const values = Object.entries(item);
      const obj = {
        id: item.id,
        image: item.image,
        name: item.name,
        address: item.address,
        tableAmount: item.tableAmount,
        gisUrl: item.gisUrl,
        phoneNumber: item.phoneNumber,
        workDays: item.workDays,
        dataList: values.filter((elem) => {
          if (elem[0] === "workDays") {
            return [...elem, (elem[1] = changeWorkDays(elem[1]))];
          }

          if (
            elem[0] !== "url" &&
            elem[0] !== "id" &&
            elem[0] !== "compositions" &&
            elem[0] !== "gisUrl" &&
            elem[0] !== "image" &&
            elem[0] !== "tableAmount" &&
            elem[0] !== "password" &&
            elem[0] !== "phoneNumber"
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
    console.log(data, "employer data");
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
        position: item.position,
        workDays: item.workDays,
        birthday: item.birthday,
        dataList: values.filter((elem) => {
          if (elem[0] === "workDays") {
            return [...elem, (elem[1] = changeWorkDays(elem[1]))];
          }
          if (
            elem[0] !== "url" &&
            elem[0] !== "id" &&
            elem[0] != "compositions" &&
            elem[0] !== "position"
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
