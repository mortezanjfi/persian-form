import { validSheba } from "./helper";
import { banks, NationalIdJSON, ProvincesJSON } from "./data";

export const isValidFile = (file) => {
  if (!file) return false;
  else {
    if (file.size > 256 || file.size < 320) {
      return false;
    } else {
      return true;
    }
  }
};

export const isPostalCode = (num) => {
  if (!num) return false;
  else {
    const regex = /^(\d[3-9|1]{4}-?\d[3-9|1]{4})$/;
    let arr = [];
    let repeatChar = false;
    arr.push(num.split(""));
    arr = arr[0];
    for (let i = 0; i <= arr.length; i++) {
      if (i <= 3) {
        let temp = arr[i];
        for (let j = i + 1; j <= 3; j++) {
          if (temp === arr[j]) {
            repeatChar = true;
          }
        }
      } else if (i === 4) {
        if (arr[i] === "5") {
          repeatChar = true;
        }
      }
    }
    if (regex.test(num) && !repeatChar) {
      return true;
    } else {
      return false;
    }
  }
};

export const isGpa = (str) => {
  if (!str) return false;
  else {
    let regex = null;
    let arr = str.split("");
    if (arr.length >= 3 && arr.length <= 5) {
      if (arr.length === 4) {
        console.log("bib");
        regex = /^([0-9]{1}\.?[0-9]{2})$/g;
      } else {
        regex = /^([0-1]{1}[0-9]{1}\.?[0-9]{2})|(([2][0])\.?[0]{2})$/g;
      }
    } else if (arr.length <= 2 && arr[0] !== 2 && arr[1] !== 0) {
      regex = /(^([0-9]{1})?([1]{1}[0-9]))|([2]{1}[0]{1})|(^([0-9]{1}))$/g;
    } else if (arr.length === 2 && arr[0] === 2 && arr[1] === 0) {
      regex = /^[2]{1}[0]{1}$/g;
    }
    if (regex) {
      if (regex.test(str)) {
        return true;
      } else if (str === null) {
        return true;
      } else {
        return false;
      }
    }
  }
};

export const isMobilePhone = (num) => {
  if (!num) return false;
  else {
    const regex = /^(0)9[0-99]\d[\-\s]?\d{3}[\-\s]?\d{4}$/;
    if (regex.test(num)) {
      return true;
    } else if (num === null) {
      return true;
    } else {
      return false;
    }
  }
};

export const isHomePhone = (num) => {
  if (!num) return false;
  else {
    const regex = /^0\d{2,3}\d{8}$/;
    if (regex.test(num)) {
      return true;
    } else if (num === null) {
      return true;
    } else {
      return false;
    }
  }
};

export const isNationalCode = (num) => {
  if (!num) return false;
  else {
    if (!num.match(/^\d{10}$/)) return false;
    num = ("0000" + num).substr(num.length + 4 - 10);
    if (parseInt(num.substr(3, 6), 10) === 0) return false;
    const lastNumber = parseInt(num.substr(9, 1), 10);
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(num.substr(i, 1), 10) * (10 - i);
    }
    sum = sum % 11;
    return (
      (sum < 2 && lastNumber === sum) || (sum >= 2 && lastNumber === 11 - sum)
    );
  }
};

export const isPersian = (str, option = { isNumber: true }) => {
  if (!str) return false;
  else {
    const regex = new RegExp(
      `^[\\u0600-\\u06FF\\uFB8A\\u067E\\u0686\\u06AF${
        option.isNumber ? "\\d" : null
      }]( ?[\\u0600-\\u06FF\\uFB8A\\u067E\\u0686\\u06AF${
        option.isNumber ? "\\d" : null
      }] ?)*$`
    );
    if (regex.test(str)) {
      return true;
    } else if (str === null) {
      return true;
    } else {
      return false;
    }
  }
};

export const isEnglish = (str, option = { isNumber: true }) => {
  if (!str || str.split("")[0] === /\s/) return false;
  else {
    const regex = new RegExp(
      `^[A-Za-z${option.isNumber ? "\\d" : null}]( ?[A-Za-z${
        option.isNumber ? "\\d" : null
      }] ?)*$`
    );
    if (regex.test(str)) {
      return true;
    } else if (str === null) {
      return true;
    } else {
      return false;
    }
  }
};

export const isAddress = (str, option = { maxNumber: 3 }) => {
  if (!str) return false;
  else {
    let arr = [];
    arr.push(str.split(""));
    arr = arr[0];
    let counter = 0;
    for (let i = arr.length; i >= 0; i--) {
      if (!isNaN(Number(arr[i])) && arr[i] !== String.fromCharCode(32)) {
        counter++;
      }
    }
    if (counter >= option.maxNumber + 1) return false;
    else return true;
  }
};

export const isDuplicate = (str, option = { maxDuplicate: 3 }) => {
  if (!str) return false;
  else {
    const regex = new RegExp(`^(?:(.)(?!\\1{${option.maxDuplicate}}))+$`);
    if (regex.test(str)) {
      return false;
    } else if (str === null) {
      return false;
    } else {
      return true;
    }
  }
};

export const isSheba = (str) => {
  if (!str) return false;
  else {
    var pattern = /[0-9]{24}/;
    if (str.length !== 24) {
      return false;
    }
    if (!pattern.test(str)) {
      return false;
    }
    var newStr = str.substr(4);
    var d1 = str.charCodeAt(0) - 65 + 10;
    var d2 = str.charCodeAt(1) - 65 + 10;
    newStr += d1.toString() + d2.toString() + str.substr(2, 2);
    if (!validSheba(newStr)) {
      return false;
    }
    return true;
  }
};

export const isCardNumber = (num) => {
  if (!num) return false;
  else {
    const numResult = "" + num;
    const length = numResult.length;
    if (
      length < 16 ||
      parseInt(numResult.substr(1, 10), 10) === 0 ||
      parseInt(numResult.substr(10, 6), 10) === 0
    ) {
      return false;
    }
    let sum = 0;
    let even, subDigit;
    for (let i = 0; i < 16; i++) {
      even = i % 2 === 0 ? 2 : 1;
      subDigit = parseInt(numResult.substr(i, 1), 10) * even;
      sum += subDigit > 9 ? subDigit - 9 : subDigit;
    }
    return sum % 10 === 0;
  }
};

export const getBankNameFromCardNumber = (num) => {
  if (!num) return false;
  else {
    if (num && num.toString().length === 16) {
      const code = num.toString().substr(0, 6);
      const findBank = banks.find((bank) => bank.code === code);
      if (findBank) {
        return findBank.name;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
};

export const getPlaceByNationalCode = (num) => {
  if (!num) return false;
  else {
    if (num && num.length === 10) {
      const code = num.toString().substring(0, 3);
      const find = NationalIdJSON.filter((row) =>
        row.code.toString().includes(code)
      );
      if (find.length) {
        const findProvinces = ProvincesJSON.filter(
          (province) => province.code === find[0].parentCode
        );
        const code = find[0].code.toString();
        return {
          city: find[0].city,
          province: findProvinces.length ? findProvinces[0].city : "unknown",
          codes: code.includes("-") ? code.split("-") : [code],
        };
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
};
