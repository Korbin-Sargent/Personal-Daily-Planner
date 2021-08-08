// console.log("hello!");

$(init);
//This function is meant to keep 
function init() {
  $("#currentDay").text(moment().format("LLL"));

  textAreaColor();
  //runs colorTimeBlocks function every 1 minute
  setInterval(coloredTimeBlocks, 60000);

  $(".time-block").each(function () {
    var sectionId = $(this).attr("id");

    $("#" + sectionId + " textarea").text(
      localStorage.getItem(moment().format("DDDYYYY") + sectionId)
    );
  });
  $(".saveBtn").sectionId("click", handleSave);
}

function textAreaColor() {
   $(".time-block").each(function () {
    var textAreaHour = parseInt($(this).attr("id").replace("hour-", ""));
    var currentTextAreaHour = parseInt(moment().format("H"));
    
    $(this).removeClass("past present future");