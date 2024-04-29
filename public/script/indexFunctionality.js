console.log(`hit indexFunctionality.js file`);

//______________________Function Definitions_______________

const toggleAcronymSection = () => {
    // Dom elements into variables
    const isAcronymYes = document.getElementById('acronymYes').checked;
    const acronymDiv = document.getElementById('reveal-if-active');
    const acronymInput = document.getElementById('acronym');
    const acronymDateInput = document.getElementById('acronymDate');
    console.log(`The stuff: ${isAcronymYes}, ${acronymDiv}, ${acronymInput}, ${acronymDateInput}`);

    // if 'yes' radio selected, Acronym and acronym date inputs are required
    if (isAcronymYes) {
        acronymDiv.style.display = 'block';
        acronymInput.required = true;
        acronymDateInput.required = true;
    } else {
        acronymDiv.style.display = 'none';
        acronymInput.required = false;
        acronymDateInput.required = false;
    }
};

//______________________Acronym display based on radio selection functionality_______________

document.addEventListener('DOMContentLoaded', () => {
    //When radio button selection changes, show or hide Acronym section
    document.getElementById('acronymYes').addEventListener('change', toggleAcronymSection);
    document.getElementById('acronymNo').addEventListener('change', toggleAcronymSection);

    // Initial state setup
    toggleAcronymSection();
});

//______________________Split Ministry Logic_______________

document.addEventListener("DOMContentLoaded", () => {
    const splitForm = document.getElementById("splitForm");

    splitForm.addEventListener("submit", event => {
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
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ministry_name: formDataObject.splitMinistryNameA,
                m_change_effective_date: formDataObject.splitEffectiveDateA
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to add Ministry A");
                }
                return response.json(); // Assuming the server responds with the newly created ministry's ID
            })
            .then(data => {
                const ministryAId = data.ministry_id; // Extract the ministry ID from the response

                // Next, add new ministry B
                return fetch("/api/ministry", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        ministry_name: formDataObject.splitMinistryNameB,
                        m_change_effective_date: formDataObject.splitEffectiveDateB
                    })
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error("Failed to add Ministry B");
                        }
                        return response.json(); // Assuming the server responds with the newly created ministry's ID
                    })
                    .then(data => {
                        const ministryBId = data.ministry_id; // Extract the ministry ID from the response

                        // Then, retire the original ministry
                        return fetch(`/api/ministry/retire/${formDataObject.minToSplit}`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                            .then(response => {
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
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            ministry_id: ministryAId,
                                            ministry_id_history: formDataObject.minToSplit
                                        })
                                    }),
                                    fetch("/api/ministry/addHistory", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            ministry_id: ministryBId,
                                            ministry_id_history: formDataObject.minToSplit
                                        })
                                    })
                                ]);
                            });
                    });
            })
            .then(responses => {
                // Check if all fetch requests were successful
                const allSuccess = responses.every(response => response.ok);
                if (!allSuccess) {
                    throw new Error("Failed to add ministry history");
                }
                return "Split process completed successfully.";
            })
            .then(message => {
                // Handle successful response
                console.log(message); // Log success message
                // Optionally, perform any additional actions after successful splitting
            })
            .catch(error => {
                // Handle errors
                console.error("Error:", error);
                // Optionally, display an error message to the user
            });
    });
});
