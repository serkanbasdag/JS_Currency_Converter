document.getElementById("change").addEventListener("click",change);
document.getElementById("kur2").selectedIndex = "3";


function change(){
   
    const xhr = new XMLHttpRequest();

    xhr.open("GET","http://data.fixer.io/api/latest?access_key=90fd28db0775d786fc295a4be6bd7bfc",true);
   
        xhr.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              const response = JSON.parse(this.responseText);
              var kurIndex1 = document.getElementById("kur1").selectedIndex;
              var kurValue1 = document.getElementById("kur1").options[kurIndex1].text;
              var kurIndex2 = document.getElementById("kur2").selectedIndex;
              var kurValue2 = document.getElementById("kur2").options[kurIndex2].text;

              if(kurValue1 == kurValue2){
                alert("Please choose two different currency type!");
              }
              else if(kurValue1 == "EUR" && kurValue2 == "USD"){
               const rate = response.rates.USD
               const doviz1 = Number(document.getElementById("doviz1").value);
               document.getElementById("doviz2").value = rate * doviz1;
               
              }
              else if(kurValue1 == "EUR" && kurValue2 == "İsviçre Frankı"){
               const rate = response.rates.CHF
               const doviz1 = Number(document.getElementById("doviz1").value);
               document.getElementById("doviz2").value = rate * doviz1;
              }
              else if(kurValue1 == "EUR" && kurValue2 == "TRY"){
               const rate = response.rates.TRY
               const doviz1 = Number(document.getElementById("doviz1").value);
               document.getElementById("doviz2").value = rate * doviz1;
               }
//
               else if(kurValue1 == "USD" && kurValue2 == "EUR"){
                const rate = response.rates.EUR / response.rates.USD
                const doviz1 = Number(document.getElementById("doviz1").value);
                document.getElementById("doviz2").value = rate * doviz1;
               }
               else if(kurValue1 == "USD" && kurValue2 == "İsviçre Frankı"){
                const rate = response.rates.CHF / response.rates.USD
                const doviz1 = Number(document.getElementById("doviz1").value);
                document.getElementById("doviz2").value = rate * doviz1;
               }
               else if(kurValue1 == "USD" && kurValue2 == "TRY"){
                const rate = response.rates.TRY / response.rates.USD
                const doviz1 = Number(document.getElementById("doviz1").value);
                document.getElementById("doviz2").value = rate * doviz1;
                }
//
                else if(kurValue1 == "İsviçre Frankı" && kurValue2 == "EUR"){
                  const rate = response.rates.EUR / response.rates.CHF
                  const doviz1 = Number(document.getElementById("doviz1").value);
                  document.getElementById("doviz2").value = rate * doviz1;
                 }
                 else if(kurValue1 == "İsviçre Frankı" && kurValue2 == "USD"){
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
                  else if(kurValue1 == "TRY" && kurValue2 == "EUR"){
                    const rate = response.rates.EUR / response.rates.TRY
                    const doviz1 = Number(document.getElementById("doviz1").value);
                    document.getElementById("doviz2").value = rate * doviz1;
                   }
                   else if(kurValue1 == "TRY" && kurValue2 == "USD"){
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
