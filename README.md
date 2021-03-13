# what is this?

Validate persian forms just with simple function!

# installation

`npm i persianform --save`
`yarn add persianform`

Then..

```
import * as persianForm from 'persianForm'
//or
import { isPostalCode, ... } from 'persianForm'

<!-- simple options -->
persianForm.isMobilePhone(str) //return true or false
persianForm.isHomePhone(str) //return true or false
persianForm.isPostalCode(str) //return true or false
persianForm.isGpa(str) //return true or false
persianForm.isNationalCode(str) //return true or false
persianForm.isSheba(str) //return true or false
persianForm.isCardNumber(str) //return true or false
persianForm.getBankNameFromCardNumber(str) //return bank name as String
persianForm.getPlaceByNationalCode(str) //return born place as String
persianForm.isValidFile(file) //return true or false

<!-- with options -->
persianForm.isPersian(str, {isNumber: Boolean}) //return true or false
persianForm.isEnglish(str, {isNumber: Boolean}) //return true or false
persianForm.isPassword(str) //return true or false
persianForm.isDuplicate(str, {maxDuplicate: Number}) //return true or false
persianForm.isAddress(str, {maxNumber: Number}) //return true or false
```

# option

- _isPersian & isEnglish isNumber (accept number or not)_ - _true | false_(Defaults to true)
- _isAddress maxNumber (maximum count of numbers)_-_Number_(Defaults to 3)
- _isDuplicate maxDuplicate (maximum count of chars repeat)_-_Number_(Defaults to 3)
