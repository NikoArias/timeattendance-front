const REGISTER_KEY = 'register_data'

export function postLogin (postData, onSuccesCallBack, onFailureCallBack) {
  let userArrayString = localStorage.getItem(REGISTER_KEY);

  if(userArrayString === null){
    const emptyArray= [];
    const emptyArrayString = JSON.stringfy(emptyArray);
    localStorage.setItem(REGISTER_KEY, emptyArrayString);

  }

  const userArray = JSON.parse(userArrayString);
  for(let userObj of userArray){
    console.log(postData, '///', userObj);
    if(userObj.email === postData.email){
      console.log('email match');
      if (userObj.password === postData.password){
        onSuccesCallBack(userObj);
        return;
      }
    }
  }

  const responseData = {
    message: 'Are u an impostor? o.0'
  };
  onFailureCallBack(responseData);
}
