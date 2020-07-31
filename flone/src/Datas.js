import config from './config';

export default class Data {
  api(path, method = 'GET', body = null) {
    const url = config.apiBaseUrl + path;
  
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }
    return fetch(url, options);
  }
  async sendEmail(user) {
    const response = await this.api('/send', 'POST', user);
    if (response.status === 201) {
      return [];
    }
    else {
      throw new Error();
    }
  }

  
  async sayHi(){
    console.log("hi everyone");
  }
  

  
}
