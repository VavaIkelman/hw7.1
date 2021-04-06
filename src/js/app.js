export default class Validator {
  validateUserName(name) {
    this.name = name;
    return /^[\w-]+$/gmi.test(name) && !(/\d{4,}/.test(name)) && !(/^[\d-_]/.test(name)) && !(/[\d-_]$/.test(name));
  }
}
