function conversion() {
  document.getElementById("ConResult").style.fontSize = '2.75vw';
  let toConvert = parseFloat(document.getElementById("convertInput").value);
  let conversionValue = 0;
  let convertFrom = document.getElementById("convertFrom").value;
  let convertTo = document.getElementById("convertTo").value;
  let workValue = 0;
  switch(convertFrom){
    case 'Inches':
      workValue = toConvert * 2.54;
      break;
    case 'Feet':
      workValue = toConvert * 30.48;
      break;
    case 'Yards':
      workValue = toConvert * 91.44;
      break;
    case 'Miles':
      workValue = toConvert * 160934.4;
      break;
    case 'Centimeters':
      workValue = toConvert * 1;
      break;
    case 'Decimeters':
      workValue = toConvert * 10;
      break;
    case 'Meters':
      workValue = toConvert * 100;
      break;
    case 'Kilometers':
      workValue = toConvert * 100000;
      break;
  }
  workValue = parseFloat(workValue)
  switch(convertTo){
    case 'Inches':
      conversionValue = workValue * 0.393701;
      break;
    case 'Feet':
      conversionValue = workValue * 0.0328084 ;
      break;
    case 'Yards':
      conversionValue = workValue * 0.0109361 ;
      break;
    case 'Miles':
      conversionValue = workValue * 0.00000621371;
      break;
    case 'Centimeters':
      conversionValue = workValue;
      break;
    case 'Decimeters':
      conversionValue = workValue * 0.1;
      break;
    case 'Meters':
      conversionValue = workValue * 0.01;
      break;
    case 'Kilometers':
      conversionValue = workValue * 0.00001;
      break;
  }
  document.getElementById("ConResult").innerText = conversionValue.toFixed(4);

}
