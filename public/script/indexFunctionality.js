//_____________________________API url:___________________

const getAcronymDataUrl = "/acronym/api";
//const wholeURL = "http://localhost:3000/acronym/api";

//______________________Function Definitions_______________

// require acronym inputs if toggle Yes is selected.
const toggleAcronymSection = () => {
  // Dom elements into variables
  const isAcronymYes = document.getElementById("acronymYes").checked;
  const acronymDiv = document.getElementById("reveal-if-active");
  const acronymInput = document.getElementById("acronym");
  const acronymDateInput = document.getElementById("acronymDate");

  // if 'yes' radio selected, Acronym and acronym date inputs are required
  if (isAcronymYes) {
    acronymDiv.style.display = "block";
    acronymInput.required = true;
    acronymDateInput.required = true;
  } else {
    acronymDiv.style.display = "none";
    acronymInput.required = false;
    acronymDateInput.required = false;
  }
};

// Handles json null values by returning "---" as a string; if !null, returns original value
const handleNullValue = (jsonValue) =>{
  if (jsonValue === null){
    return "---";
  }
  return jsonValue;
}

// ______________________________Display Active Ministries Functionality____________________________

//___________Add New Ministry - Acronym display based on radio selection functionality_______________

document.addEventListener("DOMContentLoaded", () => {
  //When radio button selection changes, show or hide Acronym section
  document
    .getElementById("acronymYes")
    .addEventListener("change", toggleAcronymSection);
  document
    .getElementById("acronymNo")
    .addEventListener("change", toggleAcronymSection);

  // Initial state setup
  toggleAcronymSection();
});

// document.addEventListener("DOMContentLoaded", () => {
//   const newMinistryForm = document.getElementById("newMinistryForm");

//   newMinistryForm.addEventListener("submit", (event) => {

//     event.preventDefault(); // Prevent the default form submission
//     // get input from form:
//     const newMinistry = document.getElementById("ministryName").textContent;
//     const newMinistryDate = document.getElementById("effectiveDate").value;
//     const newAcronym =document.getElementById("acronym").textContent;
//     const newAcronymDate = document.getElementById("acronymDate").value;
//     console.log(`${newMinistry}, the date ${newMinistryDate}-----------------------------------`);
    
//     //create form object
//     const addJustMinistryData ={
//       ministry_name: newMinistry,
//       m_change_effective_date: newMinistryDate,
//       acronym: newAcronym,
//       a_change_effective_date: newAcronymDate
//     }

//   //   const isAcronymNo = document.getElementById("acronymNo").checked;
//   //   // if no acronym is selected add just the ministry:
//   //   if (isAcronymNo){
//   //     fetch("/api/ministry", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify({
//   //         ministry_name: addJustMinistryData.ministry_name,
//   //         m_change_effective_date: addJustMinistryData.newMinistryDate
//   //       })
//   //     })
//   //     .then((response) => {
//   //       if (!response.ok) {
//   //         throw new Error("Failed add new Ministry with no acronym");
//   //       }
//   //       return response.json();
//   //     })
//   //     .then((message) => {
//   //       // Handle successful response
//   //       console.log(message); // Log success message
//   //       window.location.href = "/success";
//   //     })
//   //     .catch((error) => {
//   //       // Handle errors
//   //       console.error("Error:", error);
//   //       window.location.href = "/error";
//   //     });
//   //   }
//   //   // if yes acronym is selected, add ministry, add acronym and add link in ministry_acronym table:
//   //   else{
//   //     console.log(`not done yet`);
//   //   }
//    });
// });

//______________________Edit Ministry Name Logic_______________
document.addEventListener("DOMContentLoaded", () => {
  const editMinistryNameForm = document.getElementById("editMinistryNameForm");

  editMinistryNameForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data values (id's)
    const selectedMinId = parseInt(
      document.getElementById("minToChange").value
    );
    const selectedMinName = document.getElementById("ministryNameToEdit").value;

    console.log(`MIN ID: ${selectedMinId}, ACR ID:${selectedMinName}`);

    // create form object:
    const formData = {
      ministry_id: selectedMinId,
      ministry_name: selectedMinName,
    };
    // Get current ministry acronym:
    fetch("/acronym/api/pairMinistryAcronym", {
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


//______________________Split Ministry Logic_______________

document.addEventListener("DOMContentLoaded", () => {
  const splitForm = document.getElementById("splitForm");

  splitForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(splitForm);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    // First, add new ministry A
    fetch("/api/ministry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ministry_name: formDataObject.splitMinistryNameA,
        m_change_effective_date: formDataObject.splitEffectiveDateA,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add Ministry A");
        }
        return response.json(); // Assuming the server responds with the newly created ministry's ID
      })
      .then((data) => {
        const ministryAId = data.ministry_id; // Extract the ministry ID from the response

        // Next, add new ministry B
        return fetch("/api/ministry", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ministry_name: formDataObject.splitMinistryNameB,
            m_change_effective_date: formDataObject.splitEffectiveDateB,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to add Ministry B");
            }
            return response.json(); // Assuming the server responds with the newly created ministry's ID
          })
          .then((data) => {
            const ministryBId = data.ministry_id; // Extract the ministry ID from the response

            // Then, retire the original ministry
            return fetch(`/api/ministry/retire/${formDataObject.minToSplit}`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Failed to retire original ministry");
                }
                return response.text();
              })
              .then(() => {
                // Finally, add ministry history for both ministries
                return Promise.all([
                  fetch("/api/ministry/addHistory", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      ministry_id: ministryAId,
                      ministry_id_history: formDataObject.minToSplit,
                    }),
                  }),
                  fetch("/api/ministry/addHistory", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      ministry_id: ministryBId,
                      ministry_id_history: formDataObject.minToSplit,
                    }),
                  }),
                ]);
              });
          });
      })
      .then((responses) => {
        // Check if all fetch requests were successful
        const allSuccess = responses.every((response) => response.ok);
        if (!allSuccess) {
          throw new Error("Failed to add ministry history");
        }
        return "Split process completed successfully.";
      })
      .then((message) => {
        // Handle successful response
        console.log(message); // Log success message
        window.location.href = "/success";
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
        //window.location.href = "/error";
      });
  });
});
