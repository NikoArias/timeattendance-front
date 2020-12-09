const DEALS_KEY = "deals_data";


export function postCreateDeal(postData, onSuccessCallbackFunc, onFailureCallbackFunc) {
    console.log("Starting postCreateDeal...");

    let textData = localStorage.getItem(DEALS_KEY);

    if (textData === null) {
        const emptyArray = [];

        const emptyArrayString = JSON.stringify(emptyArray);

        localStorage.setItem(DEALS_KEY, emptyArrayString);

        textData = emptyArrayString;
    }

    const arrayData = JSON.parse(textData);

    arrayData.push(postData);

    textData = JSON.stringify(arrayData);


    localStorage.setItem(DEALS_KEY, textData);

    const responseData = { message: "Added" };
    onSuccessCallbackFunc(responseData);
}

export function getListDeals(onSuccessCallbackFunc, onFailureCallbackFunc) {
  let textData = localStorage.getItem(DEALS_KEY);

    if (textData === null){
      const arr = [];
      const arrString = JSON.stringify(arr);
      localStorage.setItem(DEALS_KEY, arrString);
      textData = arrString;
    }

    const dealArray = JSON.parse(textData);

    const responseData = {
      result: dealArray,
    }

    onSuccessCallbackFunc(responseData);

}

export function getDealDetail(id, onSuccessCallbackFunc, onFailureCallbackFunc) {

}
