const getirCountry = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");

  const data = await res.json();

  ekrandaGoster(data);
};

getirCountry();

const ekrandaGoster = (veri) => {
  veri.forEach((a) => {
    document.querySelector("article").innerHTML += `

<div class="card text-start w-50 shadow-lg bg-light my-4" style="width: 18rem;">
  <img src="${a.flags.svg}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title fw-bolder">${a.name.common} </h5>
    
<ul class="list-group list-group-flush">
  <li class="list-group-item fw-bolder">
  ${a.capital}
   </li>
  <li class="list-group-item">
${Object.values(a.languages)}
  </li>
  <li class="list-group-item">
  ${Object.values(a.currencies)[0].name}
  </li>
  
</ul>
 </div>
</div> 

`;
  });
};
