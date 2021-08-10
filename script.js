//initalizing script.js
$(init);

function init() {
  $("#currentDay").text(moment().format("LLL"));
  textAreaColor();
  //runs colorTimeBlocks function every 1 minute or 60000 miliseconds
  setInterval(coloredTimeBlocks, 60000);
  $(".time-block").each(function () {
    var sectionId = $(this).attr("id");
    $("#" + sectionId + " textarea").text(
      localStorage.getItem(moment().format("DDDYYYY") + sectionId)
    );
  });
  $(".saveBtn").sectionId("click", saveUserInput);
}

//Adding past, present or future classes to each div element with a class of time-block.
//Depending on the hour of the day
function textAreaColor() {
  $(".time-block").each(pastPresentFuture);
}

function pastPresentFuture() {
  var textAreaHour = parseInt($(this).attr("id").replace("hour-", ""));
  var currentTextAreaHour = parseInt(moment().format("H"));
  $(this).removeClass("past present future");
  if (textAreaHour < currentTextAreaHour) {
    $(this).addClass("past");
  } else if (textAreaHour > currentTextAreaHour) {
    $(this).addClass("future");
  } else {
    $(this).addClass("present");
  }
}

//Function handleSave is the last piece. This function runs when the user pushes click.
function saveUserInput(event) {
  var textAreaId = $(this).parseInt().attr("id");

  localStorage.setItem(
    moment().format("DDDYYYY") + textAreaId,
    $("#" + hourId + " textarea").val()
  );
}
