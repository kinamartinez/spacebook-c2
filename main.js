var postArray = [];
var idValue = 0;

$(".add-post").on("click", function () {
    var postName = $("#post-name").val();
    newPost(postName);
    addPostToDiv();
    remove()
});


var newPost = function (postName, comment) {
    idValue = idValue + 1;
    postArray.push({
        postName: postName,
        id: idValue,
        comment: comment
    })
};

var addPostToDiv = function () {
    $(".posts").find("p").remove();
    $(".posts").find("button").remove();
    for (i = 0; i < postArray.length; i++) {
        $(".posts").append("<p class='post' data-id=" + (postArray[i]["id"]) + "><a href='#' class='remove'>remove  </a></p>");
        $(".posts p:last-child").append(postArray[i]["postName"] + " - " + "Comment" + " " + postArray[i]["comment"]);

    }
};

var remove = function () {
    $("p").off();
    $('p').click(function () {
        $(this).remove();
        postArray.splice($(this), 1)
    });
};

    $(".add-comment").click(function () {
        $(".posts ").append("<input type='text' id='comment-name' class='form-control' placeholder='Comment Text'></input>")

    });


console.log(postArray);
