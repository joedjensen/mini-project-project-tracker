var clockEl = $("#clock")
var formEl = $("#project-form")
var projectNameEl = $("#project-name")
var projectTypeEl = $("#project-type")
var wageEl = $("#hourly-wage")
var dateEl = $("#date-picker")
var projectTableEl = $("#project-table")
var modalEl = $("#add-project-modal")
clockEl.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
setInterval(function(){
    clockEl.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
}, 1000)

$( "#date-picker" ).datepicker({
    minDate: 0
});

formEl.submit(function (event){
    event.preventDefault()
    var formResults = grabFormData();
})
function grabFormData() {
    var projectName = projectNameEl.val()
    var projectType = projectTypeEl.val()
    var wage = wageEl.val()
    var date = dateEl.val()
    printFormData(projectName, projectType, wage, date)
}

function printFormData(projectName, projectType, wage, date) {
    var trEl = $("<tr>");
    var projectNameEl = $('<td>')
    var projectTypeEl = $('<td>')
    var wageEl = $('<td>')
    var dateEl = $('<td>')
    var daysUntilEl = $('<td>')
    var estimatedEarningEl = $('<td>')
    var elementArray = [projectNameEl, projectTypeEl, wageEl, dateEl, daysUntilEl, estimatedEarningEl]
    projectNameEl.text(projectName)
    projectTypeEl.text(projectType)
    wageEl.text(wage)
    dateEl.text(date)
    var daysUntil = moment(date).diff(moment(), 'days')
    daysUntilEl.text(daysUntil)
    estimatedEarningEl.text(daysUntil * wage)
    for (i = 0; i <elementArray.length; i++){
        var tableEl = elementArray[i]
        console.log(tableEl)
        trEl.append(tableEl)
    }
    projectTableEl.append(trEl)
    modalEl.modal('toggle')

}