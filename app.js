
        let tabLinks = document.getElementsByClassName("tab-links")
        let tabContents = document.getElementsByClassName("tab-content")

        function openTab(tabname){
            for(tabLink of tabLinks){
                tabLink.classList.remove("active-link")
            }
            for(tabContent of tabContents){
                tabContent.classList.remove("active-tab")
            }
            event.currentTarget.classList.add("active-link")
            document.getElementById(tabname).classList.add("active-tab")
        }

        let sideMenu = document.getElementById("sidemenu");
        function openMenu(){
            sideMenu.style.right = "0";
        }
        function closeMenu(){
            sideMenu.style.right = "-200px";
        }


    // script for CONTACT US section
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyBgB1u1AUGjfusLmA6wbnDNJzEE9OgvsqNQQ7YwHJb16qBYZSxSct9e3PBk5Mbvf7QZQ/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            }, 5000);
            form.reset()

        })
        .catch(error => console.error('Error!', error.message))
    })




//  function to submit a form to google sheet 
//  click on extensions, select script, rename title, 
// clear the function and replace with the code below
// click on "save" and "run", "review permission"
// click on "deploy", select "new deployment"
// click on "settings" select "wep app"
// give it a description and select "everyone" for who has access
// copy the web app url 

// var sheetName = 'Sheet1'
// var scriptProp = PropertiesService.getScriptProperties()

// function intialSetup () {
//   var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
//   scriptProp.setProperty('key', activeSpreadsheet.getId())
// }

// function doPost (e) {
//   var lock = LockService.getScriptLock()
//   lock.tryLock(10000)

//   try {
//     var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
//     var sheet = doc.getSheetByName(sheetName)

//     var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
//     var nextRow = sheet.getLastRow() + 1

//     var newRow = headers.map(function(header) {
//       return header === 'timestamp' ? new Date() : e.parameter[header]
//     })

//     sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

//     return ContentService
//       .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
//       .setMimeType(ContentService.MimeType.JSON)
//   }

//   catch (e) {
//     return ContentService
//       .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
//       .setMimeType(ContentService.MimeType.JSON)
//   }

//   finally {
//     lock.releaseLock()
//   }
// }

// this is the script; to be pasted above the 
// closing body tag. Replace the 'SCRIPT URL' with the web app url

{/* <script>
  const scriptURL = '<SCRIPT URL>'
  const form = document.forms['submit-to-google-sheet']
    NB: REMEMBER TO GIVE YOUR <form name='submit-to-google-sheet'>
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
</script> */}