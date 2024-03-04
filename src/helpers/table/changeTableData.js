// export function changeTableData(data) {
//   const results = data?.map((elem, index) => {
//     const values = Object.values(elem);
//     const filteredValues = values.filter((value) => !isURL(value));
//     // newChange();
//     return filteredValues;
//   });
//   return results;
// }

// function isURL(str) {
//   return /^https?:\/\//.test(str);
// }

export function changeTableData(data) {
  const result = data?.map((item) => {
    const values = Object.entries(item);
    const obj = {
      id: item.id,
      image: item.url,
      dataList: values.filter((elem) => {
        if (elem[0] !== "url" && elem[0] !== "id") {
          return elem;
        }
      }),
    };
    return obj;
  });

  return result;
}
