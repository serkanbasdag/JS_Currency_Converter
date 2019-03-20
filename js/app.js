document.getElementById("change").addEventListener("click",change);



function change(){
   
    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://api.exchangeratesapi.io/latest",true);
   
        xhr.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              const response = JSON.parse(this.responseText);
              var kurIndex1 = document.getElementById("kur1").selectedIndex;
              var kurValue1 = document.getElementById("kur1").options[kurIndex1].text;
              var kurIndex2 = document.getElementById("kur2").selectedIndex;
              var kurValue2 = document.getElementById("kur2").options[kurIndex2].text;
              console.log(response);
              if(kurValue1 == kurValue2){
                alert("Please choose two different currency type!");
              }
              else if(kurValue1 == "Euro" && kurValue2 == "Dolar"){
               const rate = response.rates.USD
               const doviz1 = Number(document.getElementById("doviz1").value);
               document.getElementById("doviz2").value = rate * doviz1;
              }
              else if(kurValue1 == "Euro" && kurValue2 == "İsviçre Frankı"){
               const rate = response.rates.CHF
               const doviz1 = Number(document.getElementById("doviz1").value);
               document.getElementById("doviz2").value = rate * doviz1;
              }
              else if(kurValue1 == "Euro" && kurValue2 == "TRY"){
               const rate = response.rates.TRY
               const doviz1 = Number(document.getElementById("doviz1").value);
               document.getElementById("doviz2").value = rate * doviz1;
               }
//
               else if(kurValue1 == "Dolar" && kurValue2 == "Euro"){
                const rate = response.rates.EUR / response.rates.USD
                const doviz1 = Number(document.getElementById("doviz1").value);
                document.getElementById("doviz2").value = rate * doviz1;
               }
               else if(kurValue1 == "Dolar" && kurValue2 == "İsviçre Frankı"){
                const rate = response.rates.CHF / response.rates.USD
                const doviz1 = Number(document.getElementById("doviz1").value);
                document.getElementById("doviz2").value = rate * doviz1;
               }
               else if(kurValue1 == "Dolar" && kurValue2 == "TRY"){
                const rate = response.rates.TRY / response.rates.USD
                const doviz1 = Number(document.getElementById("doviz1").value);
                document.getElementById("doviz2").value = rate * doviz1;
                }
//
                else if(kurValue1 == "İsviçre Frankı" && kurValue2 == "Euro"){
                  const rate = response.rates.EUR / response.rates.CHF
                  const doviz1 = Number(document.getElementById("doviz1").value);
                  document.getElementById("doviz2").value = rate * doviz1;
                 }
                 else if(kurValue1 == "İsviçre Frankı" && kurValue2 == "Dolar"){
                  const rate = response.rates.USD / response.rates.CHF
                  const doviz1 = Number(document.getElementById("doviz1").value);
                  document.getElementById("doviz2").value = rate * doviz1;
                 }
                 else if(kurValue1 == "İsviçre Frankı" && kurValue2 == "TRY"){
                  const rate = response.rates.TRY / response.rates.CHF
                  const doviz1 = Number(document.getElementById("doviz1").value);
                  document.getElementById("doviz2").value = rate * doviz1;
                  }
//
                  else if(kurValue1 == "TRY" && kurValue2 == "Euro"){
                    const rate = response.rates.EUR / response.rates.TRY
                    const doviz1 = Number(document.getElementById("doviz1").value);
                    document.getElementById("doviz2").value = rate * doviz1;
                   }
                   else if(kurValue1 == "TRY" && kurValue2 == "Dolar"){
                    const rate = response.rates.USD / response.rates.TRY
                    const doviz1 = Number(document.getElementById("doviz1").value);
                    document.getElementById("doviz2").value = rate * doviz1;
                   }
                   else if(kurValue1 == "TRY" && kurValue2 == "İsviçre Frankı"){
                    const rate = response.rates.CHF / response.rates.TRY
                    const doviz1 = Number(document.getElementById("doviz1").value);
                    document.getElementById("doviz2").value = rate * doviz1;
                    }
          }
        };
      xhr.send();
}
