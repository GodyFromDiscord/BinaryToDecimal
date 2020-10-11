function conv(){
  let binary = document.getElementById('binary-input').value;
  if(binary === '') return alert(`Please entery a valid binary number.`)
  binary.split('').map((char) => {
    if(char !== '0' && char !== '1') return alert(`Please enter a valid binary number.`);
    if(binary.length > 8) return alert(`Your binary value must be less than 8 characters.`)
  });

  const decimal = parseInt(binary, 2);
  document.getElementById('hex-output').value = decimal;
  return true;
}