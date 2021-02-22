# what is this?

Validate persian forms just with simple function!

# installation

`npm i persian-form --save`
`yarn add persian-form`

Then..

```
import { persianForm } from 'persianForm'

persianForm.isPostalCode = (num) //return true or false
persianForm.isGpa = (str) //return true or false
persianForm.isMobilePhone = (num) //return true or false
persianForm.isNationalCode = (num) //return true or false
persianForm.isPersian = (str, {isNumber: Boolean}) //return true or false
persianForm.isEnglish = (str, {isNumber: Boolean}) //return true or false
persianForm.isAddress = (str, {maxNumber: Number}) //return true or false
persianForm.isDuplicate = (str, {maxDuplicate: Number}) //return true or false
persianForm.isSheba = (str) //return true or false
persianForm.isCardNumber = (num) //return true or false
persianForm.getBankNameFromCardNumber = (num) //return bank name as String
persianForm.getPlaceByNationalCode = (num) //return born place as String


```

# option

- _isPersian & isEnglish isNumber (accept number or not)_ - _true | false_(Defaults to true)
- _isAddress maxNumber (maximum count of numbers)_-_Number_(Defaults to 3)
- _isDuplicate maxDuplicate (maximum count of chars repeat)_-_Number_(Defaults to 3)
