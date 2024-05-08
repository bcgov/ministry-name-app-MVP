// Acronym functionality JS file

//_____________________________API url:___________________

const getAcronymDataUrl = "/api/acronym";
const getAcronymIdByMinistryId = "";
const addNewAcronym = "/api/acronym/addNewAcronym";
const pairMinistryAcronym = "/api/acronym/pairMinistryAcronym";
const updateMinistryAcronym = "/api/acronym/updateMinistryAcronym";
const addAcronymHistory = "/api/acronym/addAcronymHistory";
const wholeURL = "http://localhost:3000/api/acronym";

//______________________Function Definitions_______________

// Handles json null values by returning "---" as a string; if !null, returns original value
const handleNullValue = (jsonValue) => {
  if (jsonValue === null) {
    return "---";
  }
  return jsonValue;
}

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
    //console.log(TEST);

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
      let formattedAcronymDate;
      // format date correctly if !null
      if (element.a_change_effective_date !== null) {
        let date = new Date(element.a_change_effective_date);
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDay();
        formattedAcronymDate = `${year}-${month}-${day}`;
      }
      else {
        formattedAcronymDate = "---";
      }

      let eachAcronym = ` <tr>
                    <td>${handleNullValue(element.acronym_id)}</td>
                    <td>${handleNullValue(element.acronym).toUpperCase()}</td>
                    <td>${formattedAcronymDate}</td>
                    <td>${handleNullValue(element.ministry_id)}</td>
                    <td>${handleNullValue(element.ministry_name).toUpperCase()}</td>
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

//______________________Add Acronym frontend logic_______________

// create new acronym:
document.addEventListener("DOMContentLoaded", () => {
  const newAcronymForm = document.getElementById("newAcronymForm");

  newAcronymForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(newAcronymForm);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    // Send POST request
    fetch(addNewAcronym, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataObject),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        // Handle successful response
        console.log(data); // Log response from the server
        console.log("Acronym successfully created.");
        // Redirect to the success page
        window.location.href = "/success";
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
        window.location.href = "/error";
      });
  });
});

//______________________Display Acronym frontend logic_______________

if (document.readyState === "loading") {
  //Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", displayAcronyms);
} else {
  // `DOMContentLoaded` has already fired
  displayAcronyms();
}

//______________________Assign New Acronym to Ministry frontend logic_______________

// create new acronym:
document.addEventListener("DOMContentLoaded", () => {
  const AssignNewAcronymForm = document.getElementById("AssignNewAcronymForm");

  AssignNewAcronymForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data values (id's)
    const selectedMinId = parseInt(
      document.getElementById("MinToAssign").value
    );
    const selectedAcrId = parseInt(
      document.getElementById("AcrToAssign").value
    );
    console.log(`MIN ID: ${selectedMinId}, ACR ID:${selectedAcrId}`);

    // create form object:
    const formData = {
      ministry_id: selectedMinId,
      acronym_id: selectedAcrId,
    };
    // Get current ministry acronym:
    fetch(pairMinistryAcronym, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        // Handle successful response
        console.log(data); // Log response from the server
        console.log("Acronym successfully created.");
        // Redirect to the success page
        window.location.href = "/success";
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
        window.location.href = "/error";
      });
  });
});

//______________________Reassign an Acronym for a Ministry frontend logic_______________]

document.addEventListener("DOMContentLoaded", () => {
  const changeAcronymForm = document.getElementById("changeAcronymForm");

  changeAcronymForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data values (id's)
    const selectedMinId = parseInt(
      document.getElementById("MinToReAssign").value
    );
    const selectedAcrId = parseInt(
      document.getElementById("AcrToReAssign").value
    );
    console.log(`MIN ID: ${selectedMinId}, ACR ID:${selectedAcrId}`);

    // Create form object:
    const changeAcrFormData = {
      ministry_id: selectedMinId,
      acronym_id: selectedAcrId,
    };

    fetch(`/api/acronym/ByMinistryId/${changeAcrFormData.ministry_id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to get acronym ID");
        }
        return response.json();
      })
      .then((data) => {
        const oldAcrId = parseInt(data[0].acronym_id);
        console.log(`OLDACR =============${oldAcrId}`);

        // Then add the old acronym to ministry_history:
        return fetch(addAcronymHistory, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ministry_id: changeAcrFormData.ministry_id, // same because the ministry is not changing
            ministry_id_history: changeAcrFormData.ministry_id, // same because the ministry is not changing
            acronym_id: oldAcrId,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to retire original ministry");
            }
            return response.text();
          })
          .then(() => {
            return fetch(updateMinistryAcronym, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                acronym_id: changeAcrFormData.acronym_id,
                ministry_id: changeAcrFormData.ministry_id,
              }),
            });
          })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to update Acronym");
            }
            return response.text();
          })
          .then((message) => {
            // Handle successful response
            console.log(message); // Log success message
            window.location.href = "/success";
          })
          .catch((error) => {
            // Handle errors
            console.error("Error:", error);
            window.location.href = "/error";
          });
      });
  });
});
