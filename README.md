<div align="center">
  <a href="https://www.javascript.com/">
    <img src="https://1.bp.blogspot.com/-TGQt5uRcAkg/XuMIJoAhwnI/AAAAAAAAA38/FaJQpUUDsGEYR1zBK1wqLWUA9DTYp5CiQCPcBGAYYCw/s587/js.png" alt="Logo" style="width: 180px;">
  </a>
</div>

# Regex Library
![Javascript][javascript]

## Regex string built with test response use for validators
<br/>

## **Features**
| Method | Type | Description |
| ------ | --- | ----------- |
| alphanumericRegex | Regex Str | String to test alphanumeric characters |
| numericRegex | Regex Str | String to test numeric characters |
| emailRegex | Regex Str | String to validate email values |
| alphanumeric(str, msg) | function() | method to validate alphanumeric characters. Params [**str**: string to test, **msg**: error message to appear] |
| numeric(str, msg) | function() | method to validate numeric characters. Params [**str**: string to test, **msg**: error message to appear] |
| email(str, msg) | function() | method to validate numeric characters. Params [**str**: string to test, **msg**: error message to appear]  |

## **Usage**
```js
  const regexTest = new RegexTest()

  regexeTest.alphanumericRegex
  //returns /^[a-z0-9. ]+$/ 

  regexTest.numeric('Hello World 01')
  // returns false
```

<!-- Reference -->
[javascript]: https://img.shields.io/badge/javascript-module-F7DF1E?style=for-the-badge&logo=javaScript&logoColor=F7DF1E&labelColor=0d1116