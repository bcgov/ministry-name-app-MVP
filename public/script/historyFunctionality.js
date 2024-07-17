console.log(`hit historyFunctionality.js file`);
const API_URL="https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/api/history/all"
const API_URL_LOCAL = "http://localhost:8080/api/history/all"

//______________________Globals_______________

//create history array
let theHistory = [];

//______________________Function Definitions_______________

// function to populate history array with histories
const getHistory = (jsonObj, id) => {
  // convert id into number
  let idNum = Number(id);

  // find the current ministry to query history from
  let ministry = jsonObj.find((myMinistry) => myMinistry.ministry_id == idNum);

  // recursivly find the previous ministry history until the ministry_id_history # is null
  if ((ministry.ministry_id_history === null)) {
    theHistory.push(ministry); // adds itself to the array
    return history;
  } else {
    theHistory.push(ministry); // add object to theHistory array
    let newHistId = ministry.ministry_id_history;
    getHistory(jsonObj, newHistId);
  }
};

//______________________History functionality on dropdown change_______________

document.addEventListener("DOMContentLoaded", () => {
  //When select dropdown is changed, get ministry selected and display that ministrys's history
  document
    .getElementById("selectMinistryHist")
    .addEventListener("change", async (event) => {
      //stop the page from reloading when form is submitted:
      //event.preventDefault();

      // get ministry_id selected:
      const minId = document.getElementById("selectMinistryHist").value;

      //convert json string back into object
      let theData = JSON.parse(theHistoryData);

      // populate history array with histories
      getHistory(theData, minId);

      // clear table if its already displaying data
      document.getElementById("historyTable").innerHTML = "";
      document.getElementById("noHistory").innerHTML = "";

      //diplay the history data
      let historySetup = `
            <tr>
                <th>Ministry Name</th>
                <th>Acronym</th>
                <th>Effective Date</th> 
            </tr>
        `;
      if (theHistory.length <= 1) {
        let currentMinName = theHistory[0].ministry_name;
        document
          .querySelector("p#noHistory")
          .insertAdjacentHTML(
            "afterbegin",
            `No history available for ${currentMinName}`
          );
      } else {
        document
          .querySelector("table")
          .insertAdjacentHTML("beforeend", historySetup);
        theHistory.forEach((element) => {
          //format date correctly
          let date = new Date(element.m_change_effective_date);
          let year = date.getFullYear();
          let month = date.getMonth();
          let day = date.getDay();
          let formattedDate = `${year}-${month}-${day}`;

          let eachMinistry = ` <tr>
                    <td>${element.ministry_name}</td>
                    <td>${element.acronym.toUpperCase()}</td>
                    <td>${formattedDate}</td>
                    </tr>
                `;

          document
            .querySelector("table")
            .insertAdjacentHTML("beforeend", eachMinistry);
        });
      }
      //clear theHistory array
      theHistory.length = 0;
    });
});
