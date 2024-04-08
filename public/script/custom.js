//______________________Globals_______________

    //create history array
    let theHistory =[];

//______________________Function Definitions_______________

   // function to populate history array with histories
   let getHistory = (jsonObj, id) =>{
    // convert id into number
    let idNum = Number(id);

    // find the current ministry to query history from
    let ministry = jsonObj.find((myMinistry) => myMinistry.ministry_id == idNum);

    // recursivly find the previous ministry history until the ministry_id_history # is null
    if(ministry.ministry_id_history === null){
        theHistory.push(ministry); // adds itself to the array
        return history;
    }
    else{
        theHistory.push(ministry); // add object to theHistory array
        let newHistId = ministry.ministry_id_history;
        getHistory(jsonObj, newHistId);
    };    
}


//______________________History functionality on button click_______________

//When submit button is clicked, get ministry selected and display that ministrys's history
document.getElementById('historyForm').addEventListener('submit', async (event)=> {
    
    //stop the page from reloading when form is submitted:
    event.preventDefault();
    
    // get ministry_id selected:
    const minId = document.getElementById('selectMinistryHist').value;

    //convert json string back into object
    let theData = JSON.parse(theHistoryData);

    // populate history array with histories
    getHistory(theData, minId);

    // clear table if its already displaying data
    document.getElementById("historyTable").innerHTML ="";
    document.getElementById("noHistory").innerHTML ="";

    //diplay the history data
let historySetup =`
    <tr>
        <th>Ministry Name</th>
        <th>Acronym</th>
        <th>Effective Date</th> 
    </tr>
`
    if (theHistory.length <= 1){
        document.querySelector("p#noHistory").insertAdjacentHTML("afterbegin", "No history available");
    } else{
        document.querySelector("table").insertAdjacentHTML("beforeend", historySetup); 
        theHistory.forEach(element => {
            let eachMinistry = ` <tr>
                <td>${element.ministry_name}</td>
                <td>${element.acronym}</td>
                <td>${element.m_change_effective_date}</td>
                </tr>
            `
            document.querySelector("table").insertAdjacentHTML("beforeend", eachMinistry); 
        });
    }
    //clear theHistory array
    theHistory =[];
});
