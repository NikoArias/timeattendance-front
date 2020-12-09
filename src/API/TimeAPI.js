const TIME_KEY = "time_data"

export function postTimeCreate (postData, onSuccess, onFailure){
  let timeArrayString = localStorage.getItem(TIME_KEY);
  if (timeArrayString === null){
    const arr = [];
    const arrString = JSON.stringify(arr);
    localStorage.setItem(TIME_KEY, arr, arrString);
    timeArrayString = arrString;
  }
  const timeArray = JSON.parse(timeArrayString);
  console.log("OUTPUT", timeArray)

  timeArray.push(postData);

  timeArrayString = JSON.stringify(timeArray);

  localStorage.setItem(TIME_KEY, timeArrayString);
  onSuccess(postData);
}