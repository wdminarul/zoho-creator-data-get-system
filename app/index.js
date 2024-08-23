ZOHO.CREATOR.init().then(async function() {
    // Configuration JSON
    var config = {
        appName: "practice",  // Replace with your app name
        reportName: "All_Documents",  // Replace with your report name
        criteria: "",  // Add criteria if needed, or leave empty
        page: 1,  // Page number to fetch
        pageSize: 10  // Number of records per page
    };
    console.log(config);
    
    try {
        // Get all records API
        const response = await ZOHO.CREATOR.API.getAllRecords(config);
        var records = response.data;
        console.log(records);
        var tableBody = document.getElementById('document-data');
        tableBody.innerHTML = ""; // Clear any existing data
        
        // Loop through records and create rows for each product
        records.forEach(function(record) {
            var row = document.createElement('tr');
            row.classList.add('tr')
            console.log(record);
            console.log(record.Email);
            
            var documentName = document.createElement('td');
            documentName.innerText = record.Document_Name|| '';
            documentName.classList.add('td');
            
            var fileName = document.createElement('td');
            fileName.textContent = record.Type_field|| '';
            fileName.classList.add('td');

            var file = document.createElement("td");
            file.textContent = record.File_upload || '';
            file.classList.add('td');
            console.log(file)

        
            
            row.appendChild(documentName);
            row.appendChild(fileName);
            row.appendChild(file);
            
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Error fetching records:", error);
    }
});
