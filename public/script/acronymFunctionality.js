// Acronym functionality JS file

//_____________________________API url:___________________

const getAcronymDataUrl = "/acronym/api";
const wholeURL = "http://localhost:3000/acronym/api";

//______________________Function Definitions_______________

const fetchAcronymData = async () => {
  try {
    const response = await fetch(getAcronymDataUrl);
    const acronymData = await response.json();
    return acronymData;
  } catch (err) {
    console.log(
      `error fetching acronym data from api url: ${getAcronymDataUrl}`
    );
  }
};

const displayAcronyms = async () => {
  try {
    //fetch data from api
    const acryData = await fetchAcronymData();
    const TEST = JSON.stringify(acryData);
    console.log(TEST);

    //diplay the acronym data
    let acronymSetup = `
        <tr>
            <th>Aconym ID</th>
            <th>Aconym</th>
            <th>Acronym Effective Date</th>
            <th>Assigned Ministry ID</th> 
            <th>Assigned Ministry </th> 
        </tr>
          `;
    document
      .querySelector("#displayAcronymTableTest")
      .insertAdjacentHTML("beforeend", acronymSetup);

    acryData.forEach((element) => {
      //format date correctly
      let date = new Date(element.a_change_effective_date);
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDay();
      let formattedAcronymDate = `${year}-${month}-${day}`;

      let eachAcronym = ` <tr>
                    <td>${element.acronym_id}</td>
                    <td>${element.acronym.toUpperCase()}</td>
                    <td>${formattedAcronymDate}</td>
                    <td>${element.ministry_id}</td>
                    <td>${element.ministry_name.toUpperCase()}</td>
                    </tr>
                `;

      document
        .querySelector("#displayAcronymTableTest")
        .insertAdjacentHTML("beforeend", eachAcronym);
    });
  } catch (err) {
    console.log(err);
  }
};

if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", displayAcronyms);
} else {
  // `DOMContentLoaded` has already fired
  displayAcronyms();
}
